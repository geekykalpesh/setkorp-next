import { useRef } from "react";
import { Linkedin, Twitter, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import PhoneVolumeIcon from "./ui/phone-volume-icon";
import MailFilledIcon from "./ui/mail-filled-icon";
import type { AnimatedIconHandle } from "./ui/types";

export const Footer = () => {
  const phoneRef = useRef<AnimatedIconHandle>(null);
  const mailRef = useRef<AnimatedIconHandle>(null);

  return (
    <footer className="bg-primary text-white py-12 md:py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2">
            <div className="text-2xl font-bold mb-6 text-white font-display">
              <span className="text-brand">SET</span>KORP
            </div>
            <p className="text-slate-400 max-w-sm mb-8 text-sm md:text-base leading-relaxed">
              Expert business incorporation, banking, real estate & accounting for freezone and mainland setups in Dubai and UAE.
            </p>
            <div className="flex gap-4">
              <Link href="http://linkedin.com/company/setkorp/about/" target="_blank" className="cursor-pointer w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/setkorp.dubai/" target="_blank" className="cursor-pointer w-10 h-10 bg-white/5 rounded-full flex-center hover:bg-brand transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/people/Setkorp/100069013263499/" target="_blank" className="cursor-pointer w-10 h-10 bg-white/5 rounded-full flex-center hover:bg-brand transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand font-display">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#industries" className="cursor-pointer hover:text-brand transition-colors">Industries</Link></li>
              <li><Link href="#services" className="cursor-pointer hover:text-brand transition-colors">Services</Link></li>
              <li><Link href="#how-it-works" className="cursor-pointer hover:text-brand transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="cursor-pointer hover:text-brand transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand font-display">UAE Office</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span>101, Building – A-2, Dubai Digital Park, Dubai, UAE</span>
              </li>
              <li 
                onMouseEnter={() => mailRef.current?.startAnimation()}
                onMouseLeave={() => mailRef.current?.stopAnimation()}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <MailFilledIcon ref={mailRef} size={20} className="text-brand shrink-0" />
                <a href="mailto:saraansh@setkorp.com" className="hover:text-brand transition-colors">saraansh@setkorp.com</a>
              </li>
              <li 
                onMouseEnter={() => phoneRef.current?.startAnimation()}
                onMouseLeave={() => phoneRef.current?.stopAnimation()}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <PhoneVolumeIcon ref={phoneRef} size={20} className="text-brand shrink-0" />
                <a href="tel:+971561166524" className="hover:text-brand transition-colors">+971 56 116 6524</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-slate-500">
          <p>&copy; 2024 Setkorp Business Consultancy. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8">
            <Link href="#" className="cursor-pointer hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="cursor-pointer hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
