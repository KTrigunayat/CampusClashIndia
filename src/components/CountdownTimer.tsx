import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0);
      midnight.setDate(midnight.getDate() + 30);
      
      const difference = midnight.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-carnival-cream py-4 sm:py-8 px-2"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <motion.div 
            className="bg-carnival-darkRed/30 backdrop-blur-sm rounded-lg p-2 sm:p-4 min-w-[70px] sm:min-w-[100px]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl sm:text-4xl font-bold">{value.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm uppercase mt-1">{unit}</div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;