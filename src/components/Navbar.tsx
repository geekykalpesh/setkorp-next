"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import PhoneVolumeIcon from "./ui/phone-volume-icon";
import type { AnimatedIconHandle } from "./ui/types";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneRef = useRef<AnimatedIconHandle>(null);
  const mobilePhoneRef = useRef<AnimatedIconHandle>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 glass-header-no-border">
      <div className="max-w-[1280px] mx-auto">
        <nav className="px-6 py-4 flex items-center">
          {/* Logo Group */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="Setkorp Logo" 
                className="h-8 w-auto" 
              />
            </Link>
          </div>
          
          {/* Navigation Links - Centered */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="#industries" className="cursor-pointer hover:text-brand transition-colors duration-200 focus:outline-none focus:text-brand">Industries</Link>
            <Link href="#services" className="cursor-pointer hover:text-brand transition-colors duration-200 focus:outline-none focus:text-brand">Services</Link>
            <Link href="#how-it-works" className="cursor-pointer hover:text-brand transition-colors duration-200 focus:outline-none focus:text-brand">How It Works</Link>
            <Link href="#faq" className="cursor-pointer hover:text-brand transition-colors duration-200 focus:outline-none focus:text-brand">FAQs</Link>
          </div>

          {/* Actions Group */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link 
              href="#contact" 
              onClick={() => phoneRef.current?.startAnimation()}
              className="hidden sm:flex items-center gap-2 cursor-pointer bg-gradient-to-r from-brand to-brandhover text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-xl transition-all duration-200 shadow-lg shadow-brand/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <PhoneVolumeIcon ref={phoneRef} size={18} />
              Book Strategy Call
            </Link>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-primary hover:text-brand transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg" 
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
      {/* Full-width border */}
      <div className="w-full h-px bg-slate-200"></div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-0 left-0 right-0 w-full bg-white shadow-2xl z-[60] lg:hidden flex flex-col p-8 pt-24 transition-transform duration-400 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="Setkorp Logo" 
              className="h-7 w-auto" 
            />
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:text-brand">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col gap-6 text-lg font-semibold text-slate-700">
          <Link href="#industries" onClick={() => setIsMenuOpen(false)} className="mobile-link py-2 border-b border-slate-50">Industries</Link>
          <Link href="#services" onClick={() => setIsMenuOpen(false)} className="mobile-link py-2 border-b border-slate-50">Services</Link>
          <Link href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="mobile-link py-2 border-b border-slate-50">How It Works</Link>
          <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="mobile-link py-2 border-b border-slate-50">FAQs</Link>
        </div>

        <div className="mt-auto pt-8">
          <Link 
            href="#contact" 
            onClick={() => {
              mobilePhoneRef.current?.startAnimation();
              setTimeout(() => setIsMenuOpen(false), 300);
            }} 
            className="w-full flex items-center justify-center gap-2 bg-brand text-white py-4 rounded-xl font-bold shadow-lg shadow-brand/20"
          >
            <PhoneVolumeIcon ref={mobilePhoneRef} size={20} />
            Book Call
          </Link>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="http://linkedin.com/company/setkorp/about/" target="_blank" className="text-slate-400 hover:text-brand transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/setkorp.dubai/" target="_blank" className="text-slate-400 hover:text-brand transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/people/Setkorp/100069013263499/" target="_blank" className="text-slate-400 hover:text-brand transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] lg:hidden"
        ></div>
      )}
    </header>
  );
};
