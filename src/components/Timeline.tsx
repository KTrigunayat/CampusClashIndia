import { motion } from 'framer-motion';
import { Calendar, Clock, Sun, Moon, MapPin } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      date: "Day 1 - 20th Feb",
      time: "9:00 AM",
      title: "Opening Ceremony",
      venue: "Main Stage",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      date: "Day 1 - 20th Feb",
      time: "10:00 AM",
      title: "Sports & Cultural Begins",
      venue: "Respective Venues",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      date: "Day 1 - 20th Feb",
      time: "5:00 PM",
      title: "Jamming Session",
      venue: "Main Stage",
      icon: <Moon className="w-6 h-6" />,
    },
    {
      date: "Day 2 - 21st Feb",
      time: "10:00 AM",
      title: "Event Resume",
      venue: "Respective Venues",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      date: "Day 2 - 21st Feb",
      time: "5:00 PM",
      title: "Standup Comedy Show",
      venue: "Main Stage",
      icon: <Moon className="w-6 h-6" />,
    },
    {
      date: "Day 3 - 22nd Feb",
      time: "10:00 AM",
      title: "Finale",
      venue: "Main Stage",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      date: "Day 3 - 22nd Feb",
      time: "3:00 PM",
      title: "Award Ceremony",
      venue: "Main Stage",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      date: "Day 3 - 22nd Feb",
      time: "5:00 PM",
      title: "DJ Night",
      venue: "Main Stage",
      icon: <Moon className="w-6 h-6" />,
    },
    {
      date: "Day 3 - 22nd Feb",
      time: "8:00 PM",
      title: "Closing Ceremony",
      venue: "Main Stage",
      icon: <Moon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Event Timeline
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`mb-8 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center justify-center gap-8`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-1/2 glass-card p-6 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 text-carnival-red mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-carnival-darkRed mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-carnival-brown">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-carnival-brown mt-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-12 h-12 rounded-full bg-carnival-red flex items-center justify-center text-white shadow-lg"
              >
                {event.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
