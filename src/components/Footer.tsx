
import { Instagram, Phone, MessageSquare, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ 
  onPrivacyPolicyOpen, 
  onTermsOfServiceOpen, 
  onScrollToTop 
}: { 
  onPrivacyPolicyOpen: () => void;
  onTermsOfServiceOpen: () => void;
  onScrollToTop: () => void;
}) => {
  return (
    <footer className="bg-[#18181b] text-[#e6e6e6] py-12 border-t-2 border-[#232323]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#FFB300] uppercase tracking-wide">About</h3>
            <p className="text-[#e6e6e6] leading-relaxed">
              Campus Clash India - India's largest college BGMI tournament. Join us for an unforgettable celebration of gaming and competition.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#FFB300] uppercase tracking-wide mb-6">Campus Clash India</h3>
            <ul className="space-y-4">
              <li>
                Organised by DnC eSports and IIT KGP Shaurya
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#FFB300] uppercase tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+917816063256"
                  className="text-[#e6e6e6] hover:text-[#FFB300] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  +91 63781 30528
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917816063256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6e6e6] hover:text-[#FFB300] transition-colors flex items-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  +91 9004487822
                </a>
              </li>
              <li>
                <a 
                  href="mailto:kshitiz@dncesports.in"
                  className="text-[#e6e6e6] hover:text-[#FFB300] transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  kshitiz@dncesports.in
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#FFB300] uppercase tracking-wide">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/dnc_esports_india"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#232323] hover:bg-[#FFB300]/20 flex items-center justify-center text-[#FFB300] hover:text-[#FF6A00] transition-colors duration-300 border border-[#232323] backdrop-blur-sm"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#232323] flex flex-col items-center gap-4">
          <button
            onClick={onScrollToTop}
            className="px-6 py-2 bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black font-bold rounded-full shadow hover:from-[#FF6A00] hover:to-[#FFB300] transition-all duration-300"
          >
            Back to Top
          </button>
          <div className="text-center text-sm text-[#e6e6e6]/70">
            &copy; {new Date().getFullYear()} Campus Clash India. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
