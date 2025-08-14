import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy, Gamepad, Users, Target } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      date: "15 Aug – 10 Sep",
      title: "Registration Phase",
      time: "Target: 60,000+ players / 15,000 teams • 1,000+ teams/day",
      venue: "Online",
      icon: <Gamepad className="w-6 h-6" />
    },
    {
      date: "20 Aug – 15 Sep",
      title: "Offline College Qualifiers",
      time: "30+ colleges • Top 4 teams qualify → Regionals",
      venue: "Across India",
      icon: <Users className="w-6 h-6" />
    },
    {
      date: "10 – 20 Sep",
      title: "Online Qualifiers – Phase 1 (District)",
      time: "Single Match Elimination • 250+ colleges • 10,000+ teams • Groups of 20 • Top 2 → Phase 2",
      venue: "Online",
      icon: <Target className="w-6 h-6" />
    },
    {
      date: "20 – 29 Sep",
      title: "Online Qualifiers – Phase 2 (District)",
      time: "2 Custom Room Matches • Groups of 20 • Top 4 → State Level",
      venue: "Online",
      icon: <Target className="w-6 h-6" />
    },
    {
      date: "1 – 8 Oct",
      title: "Online State Level",
      time: "3 Custom Room Matches • Top 5 per group → Regionals",
      venue: "Online",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      date: "9 – 15 Oct",
      title: "Online Regionals",
      time: "4 Custom Room Matches • Top 6 per group → National Semi-finals",
      venue: "Online",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      date: "15 – 19 Oct",
      title: "National Semi-finals (Online)",
      time: "6 Custom Room Matches • Top 15 teams qualify → Nationals Finals",
      venue: "Online",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      date: "31 Oct – 1 Nov",
      title: "National Grand Finale (LAN)",
      time: "8 Custom Room Matches to decide the Champion",
      venue: "IIT Kharagpur",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ai-dark to-ai-light">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-white gradient-text">
          Tournament Timeline
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
                className="w-1/2 bg-ai-card p-6 rounded-xl hover:shadow-xl transition-shadow border border-ai-border card-hover"
              >
                <div className="flex items-center gap-3 text-ai-primary mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-ai-muted">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-ai-muted mt-2">
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
                className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary flex items-center justify-center text-white shadow-lg"
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
