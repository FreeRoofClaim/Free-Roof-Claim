'use client';
import { useState } from "react";
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
import { supabase } from "@/lib/supabase";
import { toast } from "react-toastify";
import { AddressSuggestion } from "./ui/AddressSuggestion";
import { PlacePrediction } from "@/types/AuthType";
import { FormData } from "@/types/AuthType";
import { useRouter } from "next/navigation";

export const LeadForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [attemptedSteps, setAttemptedSteps] = useState<Set<number>>(new Set());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    watch,
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const formData = watch();

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

  const isStepValid = async () => {
    switch (currentStep) {
      case 1:
        const addressValid = await trigger("address");
        return addressValid && isAddressSelected;
      case 2:
        return await trigger(["firstName", "lastName", "phoneNumber", "email"]);
      case 3:
        return await trigger(["insuredBy", "policyNumber"]);
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
      case 3:
        fieldsToValidate = ["insuredBy", "policyNumber"];
        break;
    }
    await trigger(fieldsToValidate);
    
    const isValid = await isStepValid();
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
    } catch (error) {
      console.error("Error fetching address coordinates:", error);
    }
  };

  const handleContinueClick = () => {
    if (currentStep === 3) {
      handleSubmit(onSubmit)();
    } else {
      nextStep();
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
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
        }),
      });
      if (!res.ok) throw new Error("Lead create failed");
      const { lead } = await res.json();
      toast.success("Lead submitted successfully!");
      console.log("\u2705 New lead inserted:", lead);
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
            {/* Step 1: ZIP Code */}
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
                      handleInputChange("insuredBy", e.target.value)
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
                      handleInputChange("policyNumber", e.target.value)
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
