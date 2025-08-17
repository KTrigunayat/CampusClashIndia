import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Gamepad, Users } from 'lucide-react';
import EventCard from './EventCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const categories = [
  {
    title: "Online Qualifiers",
    description: "District-level online qualifiers with anti-cheat protection and two phases",
    events: [
      {
        title: "Online College Qualifiers Phase -1",
        description: "Single Match Elimination • Top 2 teams per group → Phase 2",
        date: "10–20 Sep",
        registrationFee: "FREE",
        prizeMoney: "Qualify to Phase 2"
      },
      {
        title: "Online College Qualifiers Phase -2",
        description: "2 Custom Room Matches • Top 4 teams per group → State Level",
        date: "20-29 Sep",
        registrationFee: "FREE",
        prizeMoney: "Qualify to State Level"
      }
    ],
    icon: <Gamepad className="w-8 h-8" />,
    color: "bg-ai-primary/10",
    id: "online"
  },
  {
    title: "Offline Campus Rounds",
    description: "20 Aug – 15 Sep • 30+ colleges across India • Top 4 teams from each college qualify to Regionals",
    events: [
      {
        title: "Partner College LAN",
        description: "LAN setup with on-ground administrators • Spectator area",
        date: "20 Aug – 15 Sep",
        registrationFee: "Qualified Teams",
        prizeMoney: "Top 4 teams per college → State Level"
      },
      {
        title: "Campus Finals",
        description: "On-site qualifiers to determine campus champions, Are you the best team?",
        date: "Across India",
        registrationFee: "Free Entry for Spectators",
        prizeMoney: "Campus Champions"
      }
    ],
    icon: <Users className="w-8 h-8" />,
    color: "bg-ai-secondary/10",
    id: "offline"
  },
  {
    title: "Regional Playoffs",
    description: "State → Regionals → National Semi-finals",
    events: [
      {
        title: "State Level (Online)",
        description: "3 Custom Room Matches • Top 5 teams per group → Regionals",
        date: "Online",
        registrationFee: "Qualified Teams",
        prizeMoney: "Advance to Regionals"
      },
      {
        title: "Regional Level (Online)",
        description: "Top 6 teams per group → National Semi-finals",
        date: "Online Stream",
        registrationFee: "Qualified Teams",
        prizeMoney: "Advance to Nationals Finals"
      },
      {
        title: "National Semi-Finals (Online)",
        description: "Top 6 teams per group → National Semi-finals",
        date: "Online Stream",
        registrationFee: "Qualified Teams",
        prizeMoney: "Advance to Nationals Finals"
      }
    ],
    icon: <Target className="w-8 h-8" />,
    color: "bg-ai-accent/10",
    id: "regional"
  },
  {
    title: "Grand Finale LAN",
    description: "31 Oct – 1 Nov • IIT Kharagpur • Top 16 teams battle for the championship",
    events: [
      {
        title: "National Grand Finale",
        description: "8 Custom Room Matches to decide the Champion",
        date: "IIT Kharagpur",
        registrationFee: "Top 16 Teams (15 qualified + 1 invited)",
        prizeMoney: "Championship Trophy + Prizes"
      },
      {
        title: "Live Audience",
        description: "Spectator experience with live commentary",
        date: "31 Oct – 1 Nov",
        registrationFee: "Free Entry",
        prizeMoney: "Ultimate Glory"
      }
    ],
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-ai-accent/10",
    id: "lan"
  }
];

const EventCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="tournament" className="py-20 relative overflow-hidden bg-[#111112]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(rgba(255,186,73,0.08) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FFB300]/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#FF6A00]/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#FFB300] uppercase drop-shadow-lg tracking-wide">
          Tournament Structure
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FFB300] mx-auto mb-4 rounded-full"></div>
        <p className="text-[#e6e6e6] text-center max-w-3xl mx-auto text-lg font-medium">
          Compete in our multi-stage tournament with exciting prizes and recognition
        </p>
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
          {['all', ...categories.map(cat => cat.id)].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold uppercase text-base shadow-lg transition-all duration-300 border-2
                ${activeCategory === category ? 'bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black border-[#FFB300] scale-105' : 'bg-[#18181b] text-[#FFB300] border-[#232323] hover:bg-gradient-to-r hover:from-[#FFB300] hover:to-[#FF6A00] hover:text-black hover:border-[#FFB300]'}`}
            >
              {category === 'all' ? 'All Stages' : 
               category === 'online' ? 'Online Qualifiers' :
               category === 'offline' ? 'Offline Rounds' :
               category === 'regional' ? 'Regional Playoffs' :
               'LAN Finals'}
            </motion.button>
          ))}
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className={`${activeCategory === 'all' || activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#FF6A00] mb-4 uppercase drop-shadow tracking-wide">
                  {category.title}
                </h3>
                <p className="text-[#FFB300] text-lg max-w-2xl mx-auto font-semibold">
                  {category.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: eventIndex * 0.1 }}
                    className="card-hover"
                  >
                    <EventCard
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      category={category.id}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
