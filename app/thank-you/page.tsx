'use client'

import React, { useState } from 'react';
import { CheckCircle, Facebook, Twitter, MessageCircle, Mail, Phone, Clock, ClipboardCheck, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  const [copied, setCopied] = useState(false);
  
  const referralLink = "https://www.freeroofpros.com";
  const shareMessage = "I just got a FREE roof inspection from Free Roof Pros! They help homeowners get insurance-covered roof replacements with zero out-of-pocket costs. Check them out!";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(referralLink)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareViaEmail = () => {
    if (typeof window === "undefined") return;
    const subject = "Free Roof Inspection - Free Roof Pros";
    const body = `${shareMessage}\n\n${referralLink}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "width=900,height=700");
  };

  const shareViaSMS = () => {
    const message = `${shareMessage} ${referralLink}`;
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg w-full">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Image src="/roofIcon.png" alt="Free Roof Pros" width={80} height={80} />
        </div>

        {/* Thank You Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">Your claim has been submitted successfully.</p>
        </div>

        {/* What Happens Next */}
        <div className="bg-blue-50 border border-[#2563eb]/20 rounded-xl p-6 mb-6">
          <h2 className="text-[#122E5F] font-bold mb-4 flex items-center">
            <ClipboardCheck className="h-5 w-5 mr-2" />
            What Happens Next
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold">Expert Review</span>
                <p className="text-gray-600">A certified roofing expert will review your claim and contact you within 15 minutes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold">Free Roof Inspection</span>
                <p className="text-gray-600">We&apos;ll schedule a free, no-obligation inspection at your property.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold">Insurance Claim Filed</span>
                <p className="text-gray-600">If damage is found, we handle the entire insurance claim process for you.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 text-center">
          <p className="text-gray-600 text-sm mb-2">Questions? Call us anytime:</p>
          <a href="tel:5413375734" className="text-[#122E5F] font-bold text-lg hover:text-[#2563eb] transition-colors flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>(541) 337-5734</span>
          </a>
        </div>

        {/* Referral Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Know someone with roof damage? Share this with them:
          </label>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 w-full md:w-auto px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
            />
            <button
              onClick={handleCopyLink}
              className={`w-full md:w-auto px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm shadow-sm ${
                copied 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-[#122E5F] hover:bg-[#0f2347] text-white'
              }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={shareOnFacebook}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </button>

          <button
            onClick={shareOnTwitter}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </button>

          <button
            onClick={shareViaEmail}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </button>

          <button
            onClick={shareViaSMS}
            className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>SMS</span>
          </button>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-[#2563eb] hover:text-[#122E5F] font-semibold text-sm transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
