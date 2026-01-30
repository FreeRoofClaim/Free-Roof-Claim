// app/texas-roof-replacement/page.tsx

import { Metadata } from 'next';
import { Phone, Shield, LocateIcon, Star, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Replacement Services in Texas | Affordable Roofing Near Me',
  description:
    'Get professional roof replacement services in Texas. Fast, reliable, and affordable roofing services for homeowners near you. Licensed and insured.',
};

export default function TexasRoofReplacement() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-[#122E5F] mb-4">Roof Replacement Near Me in Texas</h1>
          <p className="text-xl text-gray-700 mb-8">
            Searching for roof replacement services near you in Texas? We offer fast, affordable, and professional roofing services across Texas.
          </p>
          <a href="/" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg hover:bg-[#1c4f94] transition duration-300">
            Get a Free Quote Now
          </a>
        </div>

        {/* Service Description */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#122E5F]">Our Roof Replacement Services</h2>
            <p className="text-gray-600 mt-4">
              Whether you need roof repairs or a full replacement, we’re your trusted roofers in Texas. We’ve helped thousands of homeowners get their roofs fixed.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-700">
                <Shield className="h-6 w-6 mr-3 text-[#2563eb]" />
                Licensed & Insured in Texas
              </li>
              <li className="flex items-center text-gray-700">
                <LocateIcon className="h-6 w-6 mr-3 text-[#2563eb]" />
                Serving All Texas Areas
              </li>
              <li className="flex items-center text-gray-700">
                <Star className="h-6 w-6 mr-3 text-[#2563eb]" />
                Rated 4.9/5 by Our Customers
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Free Roof Replacement Quote</h3>
            <p className="text-lg mb-6">
              Don’t wait! Contact us now for a free roof replacement consultation. We service homeowners all over Texas.
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
                <p className="text-gray-300">123 Main St, Texas</p>
                <a href="tel:+15413375734" className="text-[#2563eb]">Call: 541-337-5734</a>
              </div>
              <div className="flex items-center space-x-4 mt-6 md:mt-0">
                <Building className="h-5 w-5 text-[#2563eb]" />
                <span>Licensed & Insured in Texas</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
