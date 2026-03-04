import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowRight, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#122E5F] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/roofing-logo1.webp"
            alt="FreeRoofPros Logo"
            width={200}
            height={60}
            className="mx-auto"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-white/20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-blue-200 mb-10 max-w-lg mx-auto leading-relaxed">
          This page doesn&apos;t exist &mdash; but your free roof inspection is just a click away.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#3063e2] hover:bg-[#254db1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#free-inspection-form"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 text-lg"
          >
            <span>Get My Free Inspection</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Phone */}
        <a
          href="tel:+15417280266"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-lg"
        >
          <Phone className="w-5 h-5" />
          <span>(541) 728-0266</span>
        </a>

        <p className="text-blue-400/60 text-sm mt-8">
          &copy; 2026 FreeRoofPros. All rights reserved.
        </p>
      </div>
    </div>
  );
}
