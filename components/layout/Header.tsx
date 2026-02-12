'use client'

import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
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
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
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
            <div className="hidden md:flex items-center space-x-4">
              <button
                // onClick={() => window.open(`${process.env.NEXT_PUBLIC_CONTRACTOR_URL}`, '_blank')}
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">Contractor</span>
              </button>
              <Link
                href="/#how-it-works"
                className="flex items-center space-x-2 border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm">
                <span className="text-sm font-semibold">How it works</span>
              </Link>
              <Link
                href="/#free-inspection-form"
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <span className="text-sm font-semibold">Apply Now</span>
              </Link>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
                >
                  <span className="text-sm font-semibold">Services</span>
                  {isDropdownOpen ? (
                    <ChevronUp className="ml-2 text-[#122E5F] hover:text-white" />
                  ) : (
                    <ChevronDown className="ml-2 text-[#122E5F] hover:text-white" />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute bg-white text-[#122E5F] rounded-xl shadow-xl mt-2 w-56 z-10 transition-all ease-in-out duration-300 transform scale-95 opacity-0.9 hover:scale-100 hover:opacity-100">
                    <Link
                      onClick={() => toggleDropdown()}
                      href="/services/storm-damage-repair"
                      className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                    >
                      <span>Storm Damage Repair</span>
                    </Link>
                    <Link
                      onClick={() => toggleDropdown()}
                      href="/services/insurance-claims"
                      className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                    >
                      <span>Insurance Claims</span>
                    </Link>
                    <Link
                      onClick={() => toggleDropdown()}
                      href="/services/roof-replacement"
                      className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                    >
                      <span>Roof Replacement</span>
                    </Link>
                  </div>
                )}

              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
              <div className="px-4 pt-4 flex flex-col space-y-4">
                <button
                  // onClick={() => window.open(`${process.env.NEXT_PUBLIC_CONTRACTOR_URL}`, '_blank')}
                  className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
                >
                  <span className="text-sm font-semibold">Contractor</span>
                </button>
                <Link
                  href="/#how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
                >
                  <span className="text-sm font-semibold">How it works</span>
                </Link>
                <Link
                  href="/#free-inspection-form"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 bg-[#122E5F] hover:bg-transparent hover:text-[#122E5F] border hover:border-[#122E5F] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
                >
                  <span className="text-sm font-semibold">Apply Now</span>
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between space-x-2 w-full border border-[#122E5F] hover:bg-[#0f2347] hover:text-white text-[#122E5F] px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
                  >
                    <span className="text-sm font-semibold">Services</span>
                    {isDropdownOpen ? (
                      <ChevronUp className="ml-2 text-[#122E5F] hover:text-white" />
                    ) : (
                      <ChevronDown className="ml-2 text-[#122E5F] hover:text-white" />
                    )}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute w-full bg-white text-[#122E5F] rounded-xl shadow-xl mt-2 z-10 transition-all ease-in-out duration-300 transform scale-95 opacity-0.9 hover:scale-100 hover:opacity-100">
                      <Link
                        href="/services/storm-damage-repair"
                        onClick={handleMobileDropdownClick}
                        className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                      >
                        <span>Storm Damage Repair</span>
                      </Link>
                      <Link
                        href="/services/insurance-claims"
                        onClick={handleMobileDropdownClick}
                        className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                      >
                        <span>Insurance Claims</span>
                      </Link>
                      <Link
                        href="/services/roof-replacement"
                        onClick={handleMobileDropdownClick}
                        className="flex items-center space-x-2 px-6 py-3 hover:bg-[#122E5F] hover:text-white transition-all rounded-lg"
                      >
                        <span>Roof Replacement</span>
                      </Link>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}
        </div>
      </header >

      {/* Modals */}
      < LoginModal
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
