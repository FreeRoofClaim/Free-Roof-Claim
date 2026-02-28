'use client'

import React, { useState } from 'react';
import { CheckCircle, Facebook, Twitter, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouContent() {
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
        {/* Thank You Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">A certified roofing expert will contact you within 15 minutes.</p>
        </div>

        {/* Referral Link */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Share this link with your friends:</label>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <input type="text" value={referralLink} readOnly className="flex-1 w-full md:w-auto px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm" />
            <button onClick={handleCopyLink} className={`w-full md:w-auto px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm shadow-sm ${copied ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#122E5F] hover:bg-[#0f2347] text-white'}`}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={shareOnFacebook} className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md">
            <Facebook className="h-4 w-4" /><span>Facebook</span>
          </button>
          <button onClick={shareOnTwitter} className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md">
            <Twitter className="h-4 w-4" /><span>Twitter</span>
          </button>
          <button onClick={shareViaEmail} className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md">
            <Mail className="h-4 w-4" /><span>Email</span>
          </button>
          <button onClick={shareViaSMS} className="flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md">
            <MessageCircle className="h-4 w-4" /><span>SMS</span>
          </button>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#122E5F] transition-colors">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
