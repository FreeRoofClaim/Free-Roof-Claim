'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/validations/schema";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
} from "lucide-react";
import { toast } from "react-toastify";
import { AddressSuggestion } from "./ui/AddressSuggestion";
import { PlacePrediction, FormData, LeadType } from "@/types/AuthType";
import { useRouter } from "next/navigation";

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Timer durations (milliseconds)
const STEP3_IDLE_TIMER_MS = 10 * 60 * 1000; // 10 minutes — step 3 idle
const STEP3_ACTIVE_TIMER_MS = 15 * 60 * 1000; // 15 minutes — extended when user types

// Lead prices
const LEAD_PRICES: Record<LeadType, number> = {
  address_only: 30,
  partial: 100,
  complete: 150,
};

export const LeadForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [attemptedSteps, setAttemptedSteps] = useState<Set<number>>(new Set());

  // Partial lead tracking state
  const [savedLeadId, setSavedLeadId] = useState<number | null>(null);
  const [savedLeadType, setSavedLeadType] = useState<LeadType | null>(null);

  // Timer refs (using refs to avoid stale closure issues in callbacks)
  const step3TimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const step3ActiveRef = useRef(false); // tracks if user has typed in step 3

  // We also keep a ref to coords/savedLeadId/savedLeadType to use inside timer callbacks
  // without causing re-renders or stale closures
  const coordsRef = useRef<{ lat: number; lng: number } | null>(null);
  const savedLeadIdRef = useRef<number | null>(null);
  const savedLeadTypeRef = useRef<LeadType | null>(null);

  // Keep refs in sync with state
  useEffect(() => { coordsRef.current = coords; }, [coords]);
  useEffect(() => { savedLeadIdRef.current = savedLeadId; }, [savedLeadId]);
  useEffect(() => { savedLeadTypeRef.current = savedLeadType; }, [savedLeadType]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    watch,
    trigger,
    getValues,
    setError,
    clearErrors,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const formData = watch();

  // =========================================================================
  // Silent auto-save helper
  // Saves a partial lead without disrupting the form UX.
  // Uses refs instead of state for coords/savedLeadId to avoid stale closures
  // in timer callbacks.
  // =========================================================================
  const savePartialLead = useCallback(async (type: LeadType) => {
    const data = getValues();
    const currentCoords = coordsRef.current;
    const currentSavedLeadId = savedLeadIdRef.current;
    const currentSavedLeadType = savedLeadTypeRef.current;

    // Don't downgrade an existing lead
    const typeOrder: Record<LeadType, number> = { address_only: 1, partial: 2, complete: 3 };
    if (currentSavedLeadType && typeOrder[currentSavedLeadType] >= typeOrder[type]) {
      console.log(`[partial-save] Skipping — already saved as '${currentSavedLeadType}', not downgrading to '${type}'`);
      return;
    }

    const leadPayload = {
      address: data.address || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      phoneNumber: data.phoneNumber || "",
      email: data.email || "",
      insuredBy: data.insuredBy || "",
      policyNumber: data.policyNumber || "",
      coords: currentCoords,
      lead_type: type,
      lead_price: LEAD_PRICES[type],
    };

    try {
      if (currentSavedLeadId) {
        // Update existing lead
        const res = await fetch("/api/lead-update", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ leadId: currentSavedLeadId, ...leadPayload }),
        });
        if (res.ok) {
          setSavedLeadType(type);
          console.log(`[partial-save] Lead ${currentSavedLeadId} upgraded to '${type}'`);
        } else {
          console.error("[partial-save] lead-update failed:", await res.text());
        }
      } else {
        // Create new lead
        const res = await fetch("/api/lead-create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });
        if (res.ok) {
          const { lead } = await res.json();
          setSavedLeadId(lead.id);
          setSavedLeadType(type);
          console.log(`[partial-save] New '${type}' lead created with id ${lead.id}`);
        } else {
          console.error("[partial-save] lead-create failed:", await res.text());
        }
      }
    } catch (err) {
      console.error("[partial-save] Error saving partial lead:", err);
    }
  }, [getValues]);

  // =========================================================================
  // Timer management helpers
  // =========================================================================
  const clearStep3Timer = useCallback(() => {
    if (step3TimerRef.current) {
      clearTimeout(step3TimerRef.current);
      step3TimerRef.current = null;
    }
  }, []);

  const startStep3Timer = useCallback((durationMs: number) => {
    clearStep3Timer();
    step3TimerRef.current = setTimeout(async () => {
      // Timer fired — save whatever insurance data the user typed (updates the partial lead)
      const currentSavedLeadType = savedLeadTypeRef.current;
      // Only act if the lead isn't already complete
      if (currentSavedLeadType !== "complete") {
        await savePartialLead("partial");
        console.log("[step3-timer] Step 3 timer fired — saved partial lead with any insurance data");
      }
    }, durationMs);
  }, [clearStep3Timer, savePartialLead]);

  // =========================================================================
  // Cleanup timers on unmount
  // =========================================================================
  useEffect(() => {
    return () => {
      clearStep3Timer();
    };
  }, [clearStep3Timer]);

  // =========================================================================
  // beforeunload — save partial data if user closes / navigates away
  // Uses navigator.sendBeacon for reliable delivery during page unload.
  // =========================================================================
  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentSavedLeadType = savedLeadTypeRef.current;
      // If we already have a complete lead, nothing to do
      if (currentSavedLeadType === "complete") return;

      const data = getValues();
      const currentCoords = coordsRef.current;
      const currentSavedLeadId = savedLeadIdRef.current;

      // Determine what type to save based on available data
      let beaconType: LeadType | null = null;
      if (data.firstName && data.email) {
        beaconType = "partial";
      } else if (data.address && currentCoords) {
        beaconType = "address_only";
      }

      // Don't downgrade
      if (!beaconType) return;
      const typeOrder: Record<LeadType, number> = { address_only: 1, partial: 2, complete: 3 };
      if (currentSavedLeadType && typeOrder[currentSavedLeadType] >= typeOrder[beaconType]) return;

      const payload = {
        ...(currentSavedLeadId ? { leadId: currentSavedLeadId } : {}),
        address: data.address || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        phoneNumber: data.phoneNumber || "",
        email: data.email || "",
        insuredBy: data.insuredBy || "",
        policyNumber: data.policyNumber || "",
        coords: currentCoords,
        lead_type: beaconType,
        lead_price: LEAD_PRICES[beaconType],
      };

      // sendBeacon is the only reliable way to fire a request during unload
      const endpoint = currentSavedLeadId ? "/api/lead-update" : "/api/lead-create";
      navigator.sendBeacon(endpoint, new Blob([JSON.stringify(payload)], { type: "application/json" }));
      console.log(`[beforeunload] Beacon sent — ${beaconType} lead`);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [getValues]);

  // =========================================================================
  // Form helpers (unchanged from original)
  // =========================================================================
  const shouldShowError = (fieldName: keyof FormData) => {
    if (fieldName === "address" && currentStep === 1) {
      const addressValue = watch("address");
      if (addressValue && !isAddressSelected) {
        return touchedFields[fieldName] || attemptedSteps.has(currentStep);
      }
      return errors[fieldName] && (touchedFields[fieldName] || attemptedSteps.has(currentStep));
    }
    return errors[fieldName] && (touchedFields[fieldName] || attemptedSteps.has(currentStep));
  };

  const getErrorMessage = (fieldName: keyof FormData) => {
    if (fieldName === "address" && currentStep === 1) {
      const addressValue = watch("address");
      if (addressValue && !isAddressSelected) {
        return "Please select an address from the suggestions";
      }
    }
    return errors[fieldName]?.message || "";
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setValue(field, value);
    trigger(field);

    if (field === "address") {
      setIsAddressSelected(false);
    }

    let processedValue = value;

    if (field === "phoneNumber") {
      const digits = value.replace(/\D/g, "");

      if (digits.length <= 3) {
        processedValue = digits;
      } else if (digits.length <= 6) {
        processedValue = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else if (digits.length <= 10) {
        processedValue = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else {
        processedValue = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }
    }
    setValue(field, processedValue);
  };

  // =========================================================================
  // Step 3 field change handler — manages the extended active timer
  // =========================================================================
  const handleStep3FieldChange = (field: "insuredBy" | "policyNumber", value: string) => {
    handleInputChange(field, value);

    // On first keystroke in step 3, extend the timer to 15 minutes
    if (!step3ActiveRef.current) {
      step3ActiveRef.current = true;
      console.log("[step3-timer] User started typing in step 3 — extending timer to 15 min");
    }
    // Always reset the timer to the extended duration while they're actively typing
    startStep3Timer(STEP3_ACTIVE_TIMER_MS);
  };

  // =========================================================================
  // Step validation
  // =========================================================================
  const isStepValid = async () => {
    switch (currentStep) {
      case 1:
        const addressValid = await trigger("address");
        return addressValid && isAddressSelected;
      case 2:
        return await trigger(["firstName", "lastName", "phoneNumber", "email"]);
      case 3:
        // Insurance fields are validated manually before submit — not via yup
        return true;
      default:
        return false;
    }
  };

  const nextStep = async () => {
    setAttemptedSteps(prev => new Set([...Array.from(prev), currentStep]));

    let fieldsToValidate: (keyof FormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["address"];
        break;
      case 2:
        fieldsToValidate = ["firstName", "lastName", "phoneNumber", "email"];
        break;
    }

    if (fieldsToValidate.length > 0) {
      await trigger(fieldsToValidate);
    }

    const isValid = await isStepValid();
    if (isValid && currentStep < 3) {
      const nextStepNum = currentStep + 1;

      if (currentStep === 2) {
        // Moving from step 2 → step 3:
        // 1. Immediately save as 'partial' lead (or upgrade existing address_only)
        await savePartialLead("partial");
        // 2. Start step 3 idle timer (10 min)
        step3ActiveRef.current = false;
        startStep3Timer(STEP3_IDLE_TIMER_MS);
        console.log("[step3-timer] Step 3 entered — started 10-min idle timer");
      }

      setCurrentStep(nextStepNum);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // =========================================================================
  // Address select — immediately saves as address_only lead
  // =========================================================================
  const handleAddressSelect = async (prediction: PlacePrediction) => {
    try {
      setValue("address", prediction.description);
      setIsAddressSelected(true);
      trigger("address");

      const response = await fetch(`/api/place-details?place_id=${prediction.place_id}`);
      const data = await response.json();
      if (data.lat && data.lng) {
        console.log("Selected Address Coordinates:", data.lat, data.lng);
        setCoords({ lat: data.lat, lng: data.lng });
      } else {
        console.warn("No coordinates found for selected address");
      }

      // Immediately save as address_only — no timer needed.
      // coordsRef won't be updated yet (setCoords is async), so pass coords directly.
      const currentSavedLeadType = savedLeadTypeRef.current;
      if (!currentSavedLeadType) {
        // Build payload manually since coordsRef hasn't updated yet
        const coordsForSave = (data.lat && data.lng) ? { lat: data.lat, lng: data.lng } : null;
        try {
          const res = await fetch("/api/lead-create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              address: prediction.description,
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              insuredBy: "",
              policyNumber: "",
              coords: coordsForSave,
              lead_type: "address_only",
              lead_price: LEAD_PRICES.address_only,
            }),
          });
          if (res.ok) {
            const { lead } = await res.json();
            setSavedLeadId(lead.id);
            setSavedLeadType("address_only");
            console.log(`[address-save] Immediately saved address_only lead with id ${lead.id}`);
          } else {
            console.error("[address-save] lead-create failed:", await res.text());
          }
        } catch (err) {
          console.error("[address-save] Error saving address_only lead:", err);
        }
      }
    } catch (error) {
      console.error("Error fetching address coordinates:", error);
    }
  };

  // =========================================================================
  // Continue button click handler
  // =========================================================================
  const handleContinueClick = () => {
    if (currentStep === 3) {
      // Manually validate insurance fields before allowing final submit
      const { insuredBy, policyNumber } = getValues();
      let hasInsuranceErrors = false;

      if (!insuredBy || insuredBy.trim().length === 0) {
        setError("insuredBy", { type: "manual", message: "Insurance company is required" });
        hasInsuranceErrors = true;
      } else {
        clearErrors("insuredBy");
      }

      if (!policyNumber || policyNumber.trim().length === 0) {
        setError("policyNumber", { type: "manual", message: "Policy number is required" });
        hasInsuranceErrors = true;
      } else {
        clearErrors("policyNumber");
      }

      if (hasInsuranceErrors) {
        setAttemptedSteps(prev => new Set([...Array.from(prev), 3]));
        return;
      }

      handleSubmit(onSubmit)();
    } else {
      nextStep();
    }
  };

  // =========================================================================
  // Final form submission (step 3 complete)
  // =========================================================================
  const onSubmit = async (data: FormData) => {
    // Extra safety check for insurance fields (in case schema doesn't catch it)
    if (!data.insuredBy || !data.policyNumber) {
      setError("insuredBy", { type: "manual", message: "Insurance company is required" });
      setError("policyNumber", { type: "manual", message: "Policy number is required" });
      return;
    }

    try {
      // Clear step 3 timer — form is being submitted
      clearStep3Timer();

      const currentSavedLeadId = savedLeadIdRef.current;

      if (currentSavedLeadId) {
        // Upgrade existing partial lead to complete
        const res = await fetch("/api/lead-update", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId: currentSavedLeadId,
            address: data.address,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            email: data.email,
            insuredBy: data.insuredBy,
            policyNumber: data.policyNumber,
            coords,
            lead_type: "complete",
            lead_price: LEAD_PRICES.complete,
          }),
        });
        if (!res.ok) throw new Error("Lead update failed");
        const { lead } = await res.json();
        setSavedLeadType("complete");
        console.log("✅ Existing lead upgraded to complete:", lead);
      } else {
        // No partial lead saved yet — create a new complete lead directly
        const res = await fetch("/api/lead-create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: data.address,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            email: data.email,
            insuredBy: data.insuredBy,
            policyNumber: data.policyNumber,
            coords,
            lead_type: "complete",
            lead_price: LEAD_PRICES.complete,
          }),
        });
        if (!res.ok) throw new Error("Lead create failed");
        const { lead } = await res.json();
        setSavedLeadId(lead.id);
        setSavedLeadType("complete");
        console.log("✅ New complete lead inserted:", lead);
      }

      // Fire Facebook Pixel Lead event for conversion tracking
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Homeowner Lead Form",
          content_category: "roof_inspection",
        });
      }

      toast.success("Lead submitted successfully!");
      // Redirect to dedicated thank-you page for Google Ads conversion tracking
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Error submitting lead:", err);
      toast.error("Failed to submit lead. Please try again.");
    }
  };

  return (
    <>
    
      <section>
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-3">
              <Image src="/roofIcon.png" alt="logo" width={100} height={100} />
            </div>
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
            Free Storm Damage Roof Replacement
            </h2>
            <p className="text-gray-600">
                            Step {currentStep} of 3. Get your claim started in 60 seconds!
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#2563eb] h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span
                className={
                  currentStep >= 1 ? "text-blue-600 font-semibold" : ""
                }
              >
                Location
              </span>
              <span
                className={
                  currentStep >= 2 ? "text-blue-600 font-semibold" : ""
                }
              >
                Contact Info
              </span>
              <span
                className={
                  currentStep >= 3 ? "text-blue-600 font-semibold" : ""
                }
              >
                Insurance
              </span>
            </div>
          </div>

          {/* Form Steps */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
            }} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            className="space-y-6"
          >
            {/* Step 1: Property Address */}
            {currentStep === 1 && (
              <div className="space-y-2">
              <AddressSuggestion
                  value={watch("address")}
                  onChange={(value) => handleInputChange("address", value)}
                  onSelect={handleAddressSelect}
                  placeholder="Start typing your address..."
                  label="Property Address"
                  required={true}
                  error={shouldShowError("address") ? getErrorMessage("address") : ""}
                />
                </div>
            )}

            {/* Step 2: Contact Info */}
            {currentStep === 2 && (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-left">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="John"
                      className={`w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:border-[#308AF8] focus:outline-none transition-all duration-300 ${
                        shouldShowError("firstName") ? "border-red-500" : "border-gray-300"
                      } `}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                    />
                    {shouldShowError("firstName") && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage("firstName")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-left">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Smith"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-[#308AF8] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                        shouldShowError("lastName") ? "border-red-500" : "border-gray-300"
                      }`}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                    />
                    {shouldShowError("lastName") && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage("lastName")}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-left">
                    📱 Phone Number
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    placeholder="(555) 123-4567"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-[#308AF8] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                      shouldShowError("phoneNumber") ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                  />
                  {shouldShowError("phoneNumber") && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage("phoneNumber")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-left">
                    📧 Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-[#308AF8] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                      shouldShowError("email") ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {shouldShowError("email") && (
                    <p className="text-red-500 text-xs mt-1">{getErrorMessage("email")}</p>
                  )}
                </div>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By submitting, you consent to receive calls and texts from FreeRoofPros and its partners regarding your roof claim. Msg/data rates may apply. Reply STOP to opt out.{' '}
                      <a href="/privacy-policy" className="underline">Privacy Policy</a>{' · '}
                      <a href="/terms-of-service" className="underline">Terms</a>
                    </p>
              </div>
            )}

            {/* Step 3: Insurance Info */}
            {currentStep === 3 && (
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-left">
                    🏢 Insurance Company
                  </label>
                  <input
                    {...register("insuredBy")}
                    type="text"
                    placeholder="Your insurance company name"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-[#308AF8] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                      shouldShowError("insuredBy") ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) =>
                      handleStep3FieldChange("insuredBy", e.target.value)
                    }
                  />
                  {shouldShowError("insuredBy") && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage("insuredBy")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-left">
                    📋 Policy Number
                  </label>
                  <input
                    {...register("policyNumber")}
                    type="text"
                    placeholder="Your insurance policy number"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-[#308AF8] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 ${
                      shouldShowError("policyNumber") ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) =>
                      handleStep3FieldChange("policyNumber", e.target.value)
                    }
                  />
                  {shouldShowError("policyNumber") && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage("policyNumber")}
                    </p>
                  )}
                </div>

                {/* What Happens Next */}
                <div className="bg-blue-50 border border-[#2563eb]/20 rounded-xl mt-2 p-6">
                  <h3 className="text-[#122E5F] font-bold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    What Happens Next
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                      <span className="text-gray-700">
                        Expert roof inspection within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                      <span className="text-gray-700">
                        Insurance claim filed on your behalf
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                      <span className="text-gray-700">
                        Professional roof replacement if approved
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                      <span className="text-gray-700">
                        You pay only your insurance deductible
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:space-x-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleContinueClick}
                disabled={isSubmitting}
                className="flex-1 bg-[#122E5F] hover:bg-[#0f2347] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {currentStep === 3 ? (
                  <span className="flex items-center space-x-2 whitespace-nowrap">
                    <Shield className="h-5 w-5" />
                    <span>
                      {isSubmitting
                        ? "Submitting..."
                        : "Get My Free Inspection"}
                    </span>
                  </span>
                ) : (
                  <>
                    <span>Continue</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              🔒 Your information is secure and will never be shared
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
