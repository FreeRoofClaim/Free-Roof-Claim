// app/houston-storm-damage-claims/page.tsx

import { Metadata } from 'next';
import { Phone, Shield, LocateIcon, CloudLightning } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Storm Damage Claims Roofing Near Me in Houston',
  description:
    'Get your storm damage claims handled by experts in Houston. We provide fast storm damage roof repairs and insurance claim support.',
};

export default function HoustonStormDamageClaims() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-[#122E5F] mb-4">Storm Damage Roof Claims Near Me in Houston</h1>
          <p className="text-xl text-gray-700 mb-8">
            Dealing with storm damage in Houston? We assist with storm damage claims and provide expert roof repairs. Get your insurance claims handled.
          </p>
          <a href="/" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg hover:bg-[#1c4f94] transition duration-300">
            Get Your Free Claim Review
          </a>
        </div>

        {/* Service Description */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#122E5F]">Storm Damage Claims Assistance</h2>
            <p className="text-gray-600 mt-4">
              Our team helps you file insurance claims for storm damage and offers professional roof repairs. We’re experts in storm-related damage repairs in Houston.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-700">
                <CloudLightning className="h-6 w-6 mr-3 text-[#2563eb]" />
                Storm Damage Experts
              </li>
              <li className="flex items-center text-gray-700">
                <Shield className="h-6 w-6 mr-3 text-[#2563eb]" />
                Fully Licensed & Insured
              </li>
              <li className="flex items-center text-gray-700">
                <LocateIcon className="h-6 w-6 mr-3 text-[#2563eb]" />
                Serving Houston & Surrounding Areas
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Free Storm Damage Roof Quote</h3>
            <p className="text-lg mb-6">
              Get help with your storm damage insurance claims in Houston. Contact us for a free consultation and quote today.
            </p>
            <a href="/" className="bg-[#122E5F] text-white px-6 py-3 rounded-lg hover:bg-[#1c4f94] transition duration-300">
              Get Your Free Quote Now
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-[#122E5F] text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                <p className="text-gray-300">Free Roof Pros</p>
                <p className="text-gray-300">123 Main St, Houston, TX</p>
                <a href="tel:+15413375734" className="text-[#2563eb]">Call: 541-337-5734</a>
              </div>
              <div className="flex items-center space-x-4 mt-6 md:mt-0">
                <Shield className="h-5 w-5 text-[#2563eb]" />
                <span>Licensed & Insured in Houston</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
