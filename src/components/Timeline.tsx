import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy, Gamepad, Users, Target } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  time: string;
  venue: string;
  icon: JSX.Element;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      date: "15 Aug – 10 Sep",
      title: "Registration Phase",
      time: "Only Limited Slots available",
      venue: "Online",
      icon: <Gamepad className="w-6 h-6" />
    },
    {
      date: "20 Aug – 15 Sep",
      title: "Offline College Qualifiers",
      time: "Only Limited Slots available",
      venue: "Across India",
      icon: <Users className="w-6 h-6" />
    },
    {
      date: "10 – 20 Sep",
      title: "Online Qualifiers – Phase 1",
      time: "Top 2 teams per group → Phase 2",
      venue: "Online",
      icon: <Target className="w-6 h-6" />
    },
    {
      date: "20 – 29 Sep",
      title: "Online Qualifiers – Phase 2",
      time: "Top 4 → State Level",
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
    <section id="timeline" className="py-20 bg-[#111112] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#FFB300] uppercase drop-shadow-lg tracking-wide">
          Tournament Timeline
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FFB300] mx-auto mb-6 rounded-full"></div>
        <p className="text-[#e6e6e6] text-center max-w-3xl mx-auto mb-12 text-lg">
          Important dates and milestones for the tournament
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFB300] to-[#FF6A00] opacity-40 -translate-x-1/2 z-0" />
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative z-10 mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-between gap-8`}
            >
              <div className="w-1/2 flex justify-${index % 2 === 0 ? 'end' : 'start'}">
                <div className="bg-[#18181b] border-2 border-[#232323] rounded-xl p-6 shadow-lg hover:shadow-[#FFB300]/30 transition-all duration-300 group max-w-md w-full">
                  <div className="flex items-center gap-3 mb-2 text-[#FFB300]">
                    {event.icon}
                    <h3 className="font-bold text-lg text-[#FFB300] group-hover:text-[#FF6A00] transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-[#e6e6e6] text-sm mt-3">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#e6e6e6] text-sm mt-2">
                    <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#e6e6e6] text-sm mt-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center">
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
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FFB300] to-[#FF6A00] flex items-center justify-center text-[#18181b] shadow-lg shadow-[#FFB300]/30 border-4 border-[#232323]"
                >
                  {event.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
