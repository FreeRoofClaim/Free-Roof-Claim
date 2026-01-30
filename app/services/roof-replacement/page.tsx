'use client';
import Image from 'next/image';
import { CheckCircle, Shield, Award, Star } from 'lucide-react';

export default function RoofReplacement() {
  return (
    <>
      {/* Hero / Main Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="/process-1.png"
                alt="Roof Replacement Services"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Complete Roof Replacement
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our expert team provides full-service roof replacements with high-quality materials. We serve homeowners in Dallas, Plano, Fort Worth, and nearby areas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-[#2563eb]" />
                  <span className="text-gray-800 font-semibold">Durable Materials</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                  <Shield className="h-6 w-6 text-[#2563eb]" />
                  <span className="text-gray-800 font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                  <Award className="h-6 w-6 text-[#2563eb]" />
                  <span className="text-gray-800 font-semibold">Trusted Experts</span>
                </div>
              </div>

              <a
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg shadow hover:bg-[#1e50c7] transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Shield className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-700">
                Peace of mind knowing your home is protected by certified professionals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Award className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Experts</h3>
              <p className="text-gray-700">
                Years of experience and thousands of satisfied homeowners served.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">High-Quality Materials</h3>
              <p className="text-gray-700">
                We use only top-grade materials to ensure a durable and long-lasting roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-[#122E5F] py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1f366b] p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="mb-4 text-gray-200">
                “Fast, professional, and reliable! My new roof looks amazing.”
              </p>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="mt-2 text-sm text-gray-300">– John D., Dallas, TX</p>
            </div>

            <div className="bg-[#1f366b] p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="mb-4 text-gray-200">
                “Excellent service and high-quality materials. Highly recommend!”
              </p>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="mt-2 text-sm text-gray-300">– Sarah M., Plano, TX</p>
            </div>

            <div className="bg-[#1f366b] p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="mb-4 text-gray-200">
                “They made the entire insurance claim process easy and stress-free.”
              </p>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="mt-2 text-sm text-gray-300">– Michael R., Fort Worth, TX</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
