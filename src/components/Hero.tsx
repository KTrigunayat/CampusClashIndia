import { motion } from 'framer-motion';
import { Trophy, Target, Gamepad, Map, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const icons = [
    { Icon: Trophy, position: "top-[15%] left-[10%]", color: "text-ai-accent" },
    { Icon: Target, position: "top-[10%] right-[15%]", color: "text-ai-primary" },
    { Icon: Gamepad, position: "bottom-[40%] left-[15%]", color: "text-ai-secondary" },
    { Icon: Map, position: "bottom-[35%] right-[10%]", color: "text-ai-accent" },
    { Icon: Zap, position: "bottom-[55%] left-[5%]", color: "text-ai-primary" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background with poster-inspired orange accent */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.9) 50%, rgba(249, 115, 22, 0.8) 100%), url('/lovable-uploads/3e56aa76-9b3c-491a-b201-47e8a3f6f5f2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Modern geometric pattern overlay (orange → amber) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-24 sm:h-32 z-40"
        style={{
          background: `linear-gradient(135deg, #F97316 0%, #F59E0B 100%)`,
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
        }}
      />

      {/* Left Curtain with modern design */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        className="fixed top-0 left-0 w-1/2 h-full z-20 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, #F97316 0%, #F59E0B 100%)`,
          boxShadow: '2px 0 10px rgba(249, 115, 22, 0.3)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-4 top-1/2 w-8 sm:w-12 h-16 sm:h-24 bg-ai-accent rounded-full"
          style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}
        />
      </motion.div>

      {/* Right Curtain with modern design */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        className="fixed top-0 right-0 w-1/2 h-full z-20 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)`,
          boxShadow: '-2px 0 10px rgba(245, 158, 11, 0.3)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute left-4 top-1/2 w-8 sm:w-12 h-16 sm:h-24 bg-ai-primary rounded-full"
          style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="relative container text-center z-50 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-light mb-2">
            Welcome to
          </h2>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-white font-display animate-float">
          Campus Clash India
        </h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-lg sm:text-xl md:text-2xl text-ai-accent font-semibold mb-6"
        >
          Nationwide BGMI eSports Championship
        </motion.h3>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          15,000 Team Slots • Online + Offline 
          <br></br>LAN Finals at IIT Kharagpur during Shaurya fest.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-ai-primary to-ai-secondary text-white hover:from-ai-secondary hover:to-ai-primary transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-ai-primary/25"
              onClick={() => {
                const element = document.getElementById('registration');
                if (!element) return;
                const offset = window.innerWidth < 640 ? 60 : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }}
            >
              Register Team
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-ai-accent to-ai-primary text-white hover:from-ai-primary hover:to-ai-accent transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-ai-accent/25"
            >
              <a href="RuleBook.pdf" download="CampusClashIndia_Rulebook.pdf">
                View Rulebook
              </a>
          </Button>
          </motion.div>
        </div>

        {/* Enhanced Floating Icons with adjusted positions */}
        {icons.map((Item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: index * 0.2 + 2.5 }}
            className={`absolute ${Item.position} transform -translate-x-1/2 -translate-y-1/2 hidden sm:block`}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              className={`${Item.color} transition-all duration-300`}
            >
              <Item.Icon size={32} className="filter drop-shadow-lg" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
