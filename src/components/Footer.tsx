
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
    <footer className="bg-gradient-to-b from-ai-light/50 to-ai-dark border-t border-ai-primary/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">About</h3>
            <p className="text-ai-muted leading-relaxed">
              Campus Clash India - India's largest college BGMI tournament. Join us for an unforgettable celebration of gaming and competition.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={onScrollToTop}
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-ai-primary/50 group-hover:bg-ai-primary transition-colors" />
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={onPrivacyPolicyOpen}
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-ai-primary/50 group-hover:bg-ai-primary transition-colors" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsOfServiceOpen}
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-ai-primary/50 group-hover:bg-ai-primary transition-colors" />
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+916378130528"
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  +91 63781 30528
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919638605301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  +91 96386 05301
                </a>
              </li>
              <li>
                <a 
                  href="mailto:vizphoria@atriauniversity.edu.in"
                  className="text-ai-muted hover:text-ai-primary transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  vizphoria@atriauniversity.edu.in
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/vizphoria.fest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ai-muted hover:text-ai-primary transition-colors p-3 rounded-full hover:bg-ai-primary/5"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-ai-primary/10">
          <p className="text-ai-muted text-center">
            © {new Date().getFullYear()} Campus Clash India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
