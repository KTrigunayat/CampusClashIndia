import { motion, useScroll } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  const handleScroll = useCallback(() => {
    const sections = ['hero', 'tournament', 'stages', 'colleges', 'timeline', 'gallery', 'rules', 'registration', 'faq'];
    const scrollPosition = window.scrollY;

    setIsScrolled(scrollPosition > 50);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      toast.error(`Section ${id} not found`);
      return;
    }

    // Close mobile menu first
    setIsMenuOpen(false);

    // Calculate offset based on device type
    const offset = isMobile ? 60 : 80;

    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Smooth scroll to the section
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Additional adjustment after scroll animation
    setTimeout(() => {
      const finalOffset = element.getBoundingClientRect().top;
      if (Math.abs(finalOffset - offset) > 2) {
        window.scrollBy({
          top: finalOffset - offset,
          behavior: 'smooth'
        });
      }
    }, 1000);

    toast.success(`Navigating to ${id.charAt(0).toUpperCase() + id.slice(1)}`);
    console.log(`Navigation triggered to section: ${id}`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-carnival-red/80 backdrop-blur-md shadow-lg' : 'bg-carnival-red/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.span 
            className="text-carnival-cream text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Campus Clash India
          </motion.span>
          
          <Button
            variant="ghost"
            className="sm:hidden text-carnival-cream hover:bg-carnival-darkRed/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <div className="hidden sm:flex space-x-6 md:space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'tournament', label: 'Tournament' },
              { id: 'stages', label: 'Stages' },
              { id: 'colleges', label: 'Colleges' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'rules', label: 'Rules' },
              { id: 'registration', label: 'Register' },
              { id: 'faq', label: 'FAQ' },
            ].map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative text-carnival-cream hover:text-carnival-yellow transition-colors text-sm md:text-base
                  ${activeSection === id ? 'font-bold' : 'font-medium'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-carnival-yellow"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`sm:hidden overflow-hidden bg-carnival-darkRed/10 rounded-b-lg ${
            isMenuOpen ? 'pb-4' : ''
          }`}
        >
          <div className="flex flex-col space-y-2 px-4 pt-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'tournament', label: 'Tournament' },
              { id: 'stages', label: 'Stages' },
              { id: 'colleges', label: 'Colleges' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'rules', label: 'Rules' },
              { id: 'registration', label: 'Register' },
              { id: 'faq', label: 'FAQ' },
            ].map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-carnival-cream hover:text-carnival-yellow transition-colors text-left py-3 px-4 rounded-md
                  ${activeSection === id ? 'font-bold bg-carnival-darkRed/20' : 'font-medium'}
                  active:bg-carnival-darkRed/30 touch-manipulation`}
                whileTap={{ scale: 0.98 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
