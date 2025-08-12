import { motion } from 'framer-motion';
import { Trophy, Music, Theater, Star, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const icons = [
    { Icon: Trophy, position: "top-[15%] left-[10%]", color: "text-carnival-yellow" },
    { Icon: Music, position: "top-[10%] right-[15%]", color: "text-carnival-cream" },
    { Icon: Theater, position: "bottom-[40%] left-[15%]", color: "text-carnival-cream" },
    { Icon: Star, position: "bottom-[35%] right-[10%]", color: "text-carnival-yellow" },
    { Icon: Gem, position: "bottom-[55%] left-[5%]", color: "text-carnival-yellow" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with reduced opacity overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(231, 38, 37, 0.75), rgba(166, 30, 34, 0.85)), url('/lovable-uploads/3e56aa76-9b3c-491a-b201-47e8a3f6f5f2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-24 sm:h-32 z-40"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #E72625,
            #E72625 40px,
            #FBF5D6 40px,
            #FBF5D6 80px
          )`,
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
      />

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        className="fixed top-0 left-0 w-1/2 h-full z-30"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            #E72625,
            #E72625 40px,
            #FBF5D6 40px,
            #FBF5D6 80px
          )`,
          boxShadow: '2px 0 10px rgba(0,0,0,0.3)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-4 top-1/2 w-8 sm:w-12 h-16 sm:h-24 bg-carnival-yellow rounded-full"
          style={{ boxShadow: '0 0 20px rgba(251, 201, 7, 0.5)' }}
        />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        className="fixed top-0 right-0 w-1/2 h-full z-30"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            #E72625,
            #E72625 40px,
            #FBF5D6 40px,
            #FBF5D6 80px
          )`,
          boxShadow: '-2px 0 10px rgba(0,0,0,0.3)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute left-4 top-1/2 w-8 sm:w-12 h-16 sm:h-24 bg-carnival-yellow rounded-full"
          style={{ boxShadow: '0 0 20px rgba(251, 201, 7, 0.5)' }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="relative container text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-carnival-cream font-light mb-2">
            Welcome to
          </h2>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-carnival-cream font-display animate-float">
          Vizphoria
        </h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-lg sm:text-xl md:text-2xl text-carnival-yellow font-semibold mb-6"
        >
          Atria University Fest
        </motion.h3>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 text-carnival-cream/90 max-w-2xl mx-auto">
          A Symphony of Creativity, Culture, and Passion
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-carnival-cream text-carnival-red hover:bg-carnival-yellow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-bold shadow-lg"
              onClick={() => window.open('https://docs.google.com/forms/d/1xCojeTMGEaA177YhF8p0ZO1oGqUQUa5D0B0CpXxXFZc/viewform?edit_requested=true', '_blank')}
            >
              Join the Carnival!
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-carnival-cream text-carnival-red hover:bg-carnival-yellow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-bold shadow-lg"
              onClick={() => window.open('https://drive.google.com/file/d/15pApywfal_lzKUeztTh4EYFApSP8IHzE/view?usp=drive_link', '_blank')}
            >
              View Brochure
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
