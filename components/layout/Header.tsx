'use client'

import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import LoginModal from '@/components/auth/LoginModal';
import RegisterModal from '@/components/auth/RegisterModal';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleMobileDropdownClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    if (mode === 'login') {
      setIsLoginModalOpen(true);
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Click-to-Call Top Bar */}
        <div className="bg-[#122E5F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-10">
              <p className="text-sm font-medium hidden sm:block">
                Free Roof Inspection &mdash; Call Now for a Free Estimate
              </p>
              <a
                href="tel:+15417280266"
                className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-200 transition-colors duration-200 sm:ml-auto"
              >
                <Phone className="w-4 h-4" />
                <span>(541) 728-0266</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">

              <div className="flex items-center space-x-4">

                <div className="flex items-center md:space-x-4">
                  <div className="relative w-40 h-40 mt-2 sm:w-40 sm:h-40 flex-shrink-0 flex items-center justify-center">
                    <Image
                      onClick={() => router.push('/')}
                      src="/roofing-logo.png"
                      alt="Logo"
                      fill
                      className="object-contain cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation Items */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/#how-it-works"
                  className="text-[#122E5F] hover:text-[#0f2347] font-medium text-[15px] transition-colors duration-200 relative group py-2"
                >
                  How it works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#122E5F] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <div 
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    onClick={toggleDropdown}
                    className="text-[#122E5F] hover:text-[#0f2347] font-medium text-[15px] transition-colors duration-200 flex items-center space-x-1 py-2"
                  >
                    <span>Services</span>
                    {isDropdownOpen ? (
                      <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#122E5F] group-hover:w-full transition-all duration-300"></span>

                  <div 
                    className={`absolute top-full left-0 mt-2 bg-white text-[#122E5F] rounded-lg shadow-lg border border-gray-100 w-56 z-50 overflow-hidden transition-all duration-300 ease-out ${
                      isDropdownOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <Link
                      onClick={() => setIsDropdownOpen(false)}
                      href="/services/storm-damage-repair"
                      className="block px-5 py-3 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      Storm Damage Repair
                    </Link>
                    <Link
                      onClick={() => setIsDropdownOpen(false)}
                      href="/services/insurance-claims"
                      className="block px-5 py-3 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium border-t border-gray-100"
                    >
                      Insurance Claims
                    </Link>
                    <Link
                      onClick={() => setIsDropdownOpen(false)}
                      href="/services/roof-replacement"
                      className="block px-5 py-3 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium border-t border-gray-100"
                    >
                      Roof Replacement
                    </Link>
                  </div>
                </div>

                <a
                  href="tel:+15417280266"
                  className="hidden lg:flex items-center space-x-2 text-[#122E5F] hover:text-[#0f2347] font-semibold text-[15px] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>(541) 728-0266</span>
                </a>

                <Link
                  href="/#free-inspection-form"
                  className="bg-[#122E5F] hover:bg-[#0f2347] text-white px-6 py-2.5 rounded-md transition-all duration-200 font-semibold text-[15px] shadow-md hover:shadow-lg"
                >
                  Apply Now
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-3">
                <a
                  href="tel:+15417280266"
                  className="text-[#122E5F] p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg transition-colors duration-200"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden pb-4 bg-white border-t border-gray-100">
                <nav className="px-4 pt-4 flex flex-col space-y-1">
                  <a
                    href="tel:+15417280266"
                    className="flex items-center space-x-3 text-[#122E5F] bg-blue-50 px-4 py-3 rounded-md font-semibold text-[15px]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call (541) 728-0266</span>
                  </a>

                  <Link
                    href="/#how-it-works"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#122E5F] hover:bg-gray-50 px-4 py-3 rounded-md transition-colors duration-200 font-medium text-[15px]"
                  >
                    How it works
                  </Link>
                  
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="w-full flex items-center justify-between text-[#122E5F] hover:bg-gray-50 px-4 py-3 rounded-md transition-colors duration-200 font-medium text-[15px]"
                    >
                      <span>Services</span>
                      {isDropdownOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="mt-1 ml-4 bg-gray-50 rounded-md overflow-hidden border-l-2 border-[#122E5F]">
                        <Link
                          href="/services/storm-damage-repair"
                          onClick={handleMobileDropdownClick}
                          className="block px-4 py-2.5 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium"
                        >
                          Storm Damage Repair
                        </Link>
                        <Link
                          href="/services/insurance-claims"
                          onClick={handleMobileDropdownClick}
                          className="block px-4 py-2.5 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium border-t border-gray-200"
                        >
                          Insurance Claims
                        </Link>
                        <Link
                          href="/services/roof-replacement"
                          onClick={handleMobileDropdownClick}
                          className="block px-4 py-2.5 hover:bg-[#122E5F] hover:text-white transition-colors duration-200 text-sm font-medium border-t border-gray-200"
                        >
                          Roof Replacement
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/#free-inspection-form"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-md transition-all duration-200 font-semibold text-[15px] shadow-md hover:shadow-lg text-center mt-2"
                  >
                    Apply Now
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModals}
        onSwitchToRegister={switchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeModals}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
}
