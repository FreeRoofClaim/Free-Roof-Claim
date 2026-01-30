// app/dallas-hail-damage-roof/page.tsx

import { Metadata } from 'next';
import { Phone, Shield, LocateIcon, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair Near Me in Dallas',
  description:
    'Get professional hail damage roof repair in Dallas. Fast, reliable, and affordable roof repairs for storm damage. Available near you.',
};

export default function DallasHailDamageRoof() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-[#122E5F] mb-4">Hail Damage Roof Repair Near Me in Dallas</h1>
          <p className="text-xl text-gray-700 mb-8">
            Searching for hail damage roof repair near you in Dallas? We provide emergency storm damage repair for homeowners in Dallas, TX.
          </p>
          <a href="/" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg hover:bg-[#1c4f94] transition duration-300">
            Schedule My Free Inspection
          </a>
        </div>

        {/* Service Description */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#122E5F]">Our Hail Damage Repair Services</h2>
            <p className="text-gray-600 mt-4">
              We specialize in fast and reliable hail damage roof repairs. Whether you need emergency repairs or a full roof replacement, we’re here to help.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-700">
                <Zap className="h-6 w-6 mr-3 text-[#2563eb]" />
                Fast Emergency Service
              </li>
              <li className="flex items-center text-gray-700">
                <Shield className="h-6 w-6 mr-3 text-[#2563eb]" />
                Fully Licensed & Insured
              </li>
              <li className="flex items-center text-gray-700">
                <LocateIcon className="h-6 w-6 mr-3 text-[#2563eb]" />
                Serving Dallas & Surrounding Areas
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Free Hail Damage Quote</h3>
            <p className="text-lg mb-6">
              Get a free hail damage roof repair quote in Dallas.
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
                <p className="text-gray-300">123 Main St, Dallas, TX</p>
                <a href="tel:+15413375734" className="text-[#2563eb]">Call: 541-337-5734</a>
              </div>
              <div className="flex items-center space-x-4 mt-6 md:mt-0">
                <Shield className="h-5 w-5 text-[#2563eb]" />
                <span>Fully Insured in Dallas</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
