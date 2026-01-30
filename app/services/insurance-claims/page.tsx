'use client';
import Image from 'next/image';
import { FileText, Shield, Award, Star } from 'lucide-react';

export default function InsuranceClaims() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">Insurance Roof Claims Assistance</h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                We guide homeowners to file and maximize insurance roof claims efficiently. Licensed contractors provide expert assistance in Dallas, Plano, Fort Worth, and surrounding areas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-[#2563eb]" />
                  <span>Claim Assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-[#2563eb]" />
                  <span>Insurance Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-[#2563eb]" />
                  <span>A+ Rating</span>
                </div>
              </div>

              <a
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg shadow hover:bg-[#1e50c7] transition"
              >
                Get Your Free Claim Review
              </a>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src="/process-2.png"
                alt="Roof Insurance Claims Assistance"
                width={700}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us for Insurance Claims?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Shield className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Claim Experts</h3>
              <p className="text-gray-700">
                We know how to work with insurance companies to get your roof claim approved.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Award className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-700">
                We have a strong track record of successfully helping homeowners with their claims.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FileText className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Effortless Process</h3>
              <p className="text-gray-700">
                From filing to approval, we make the insurance process smooth and hassle-free.
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
                “They helped me get my insurance claim approved without any hassle.”
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
                “Excellent service in handling my roof insurance claim. I got a new roof.”
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
                “The team was professional and helped me through the entire insurance claim process.”
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
