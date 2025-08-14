import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Gamepad, Map, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
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
        title: "Phase 1 (District Level)",
        description: "10–20 Sep • Single Match Elimination • 250+ colleges • 10,000+ teams • Groups of 20 • Top 2 → Phase 2",
        date: "Online",
        registrationFee: "FREE",
        prizeMoney: "Qualify to Phase 2"
      },
      {
        title: "Phase 2 (District Level)",
        description: "20–29 Sep • 2 Custom Room Matches • Groups of 20 • Top 4 → State Level",
        date: "Online",
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
        prizeMoney: "Top 4 → Regionals"
      },
      {
        title: "Campus Finals",
        description: "On-site qualifiers to determine campus champions",
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
    description: "1–19 Oct • State → Regionals → National Semi-finals",
    events: [
      {
        title: "State Level (Online)",
        description: "1–8 Oct • 3 Custom Room Matches • Top 5 per group → Regionals",
        date: "Online",
        registrationFee: "Qualified Teams",
        prizeMoney: "Advance to Regionals"
      },
      {
        title: "Regionals & Semi-finals (Online)",
        description: "9–15 Oct Regionals: 4 Matches • Top 6 → 15–19 Oct National Semi-finals: 6 Matches • Top 15 → Nationals Finals",
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

  const handleRegister = () => {
    const element = document.getElementById('registration');
    if (!element) {
      toast.error('Registration section not found');
      return;
    }
    const offset = window.innerWidth < 640 ? 60 : 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    toast.success('Scrolling to registration form');
  };

  return (
    <section id="tournament" className="py-20 bg-gradient-to-b from-ai-dark to-ai-light">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-white gradient-text"
        >
          Tournament Structure
        </motion.h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', ...categories.map(cat => cat.id)].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-ai-primary to-ai-secondary text-white scale-105' 
                  : 'bg-ai-surface text-ai-muted hover:bg-ai-hover hover:text-white border border-ai-border'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-ai-muted text-lg max-w-2xl mx-auto">{category.description}</p>
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
                      onRegister={handleRegister}
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
