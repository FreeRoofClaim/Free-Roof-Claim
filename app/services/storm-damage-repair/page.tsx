'use client';
import Image from 'next/image';
import { AlertCircle, MapPin, Clock, Star } from 'lucide-react';

export default function StormDamageRepair() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#122E5F] to-[#2563eb] py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold">Storm Damage Roof Repair</h1>
              <p className="text-gray-200 text-lg leading-relaxed">
                Fast, reliable storm damage roof repair services for hail, wind, and storm-affected roofs. Serving Dallas, Plano, Fort Worth, and surrounding areas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-yellow-400" />
                  <span>Emergency Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                  <span>Local Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-yellow-400" />
                  <span>24/7 Availability</span>
                </div>
              </div>

              <a
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-white text-[#122E5F] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
              >
                Request Free Inspection
              </a>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src="/process-3.png"
                alt="Storm Damage Roof Repair"
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
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <AlertCircle className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-700">
                Quick response and same-day inspections after storms to ensure minimal damage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
              <p className="text-gray-700">
                We specialize in storm damage repairs, and we know the local weather conditions best.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Clock className="h-8 w-8 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-700">
                We are available round the clock to handle urgent roof repairs and replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-[#122e5ffd] py-20 text-white border-b border-gray-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1f366b] p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="mb-4 text-gray-200">
                “Fast, professional, and reliable! My roof looks amazing after the storm.”
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
                “They handled my storm damage claim efficiently and got me a new roof!”
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
                “Great communication and prompt service. Highly recommend for storm damage repairs.”
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
