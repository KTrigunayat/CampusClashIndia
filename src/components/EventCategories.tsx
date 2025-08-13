import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Gamepad, Map, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
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
      description: "Nationwide online BGMI qualifiers with anti-cheat protection",
      events: [
        { 
          name: "Open Qualifiers", 
          description: "15,000 team slots available for nationwide competition", 
          registrationFee: "FREE",
          prizeMoney: "Advancement to Offline Rounds"
        },
        { 
          name: "Anti-Cheat Enabled", 
          description: "Advanced detection systems ensure fair play", 
          registrationFee: "Included",
          prizeMoney: "Fair Competition Guaranteed"
        }
      ],
      icon: <Gamepad className="w-8 h-8" />,
      color: "bg-carnival-red/10",
      id: "online"
    },
    {
      title: "Offline Campus Rounds",
      description: "On-ground qualifiers across 35 partner colleges",
      events: [
        { 
          name: "Partner College LAN", 
          description: "LAN setup with on-ground administrators", 
          registrationFee: "Qualified Teams",
          prizeMoney: "City-wise Winners"
        },
        { 
          name: "Spectator Area", 
          description: "Live viewing experience for college students", 
          registrationFee: "Free Entry",
          prizeMoney: "Campus Champions"
        }
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-carnival-yellow/10",
      id: "offline"
    },
    {
      title: "Regional Playoffs",
      description: "Top performers from online and offline rounds compete",
      events: [
        { 
          name: "Broadcast Matches", 
          description: "Professional streaming with commentary", 
          registrationFee: "Qualified Teams",
          prizeMoney: "Regional Champions"
        },
        { 
          name: "Pro Observers", 
          description: "Expert oversight and fair play monitoring", 
          registrationFee: "Included",
          prizeMoney: "Advancement to LAN Finals"
        }
      ],
      icon: <Target className="w-8 h-8" />,
      color: "bg-carnival-brown/10",
      id: "regional"
    },
    {
      title: "Grand Finale LAN",
      description: "Top 16 teams battle at IIT Kharagpur for the championship",
      events: [
        { 
          name: "Main Stage Finals", 
          description: "Professional esports arena setup", 
          registrationFee: "Top 16 Teams",
          prizeMoney: "Championship Trophy + Prizes"
        },
        { 
          name: "Live Audience", 
          description: "Spectator experience with live commentary", 
          registrationFee: "Free Entry",
          prizeMoney: "Ultimate Glory"
        }
      ],
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-carnival-yellow/10",
      id: "lan"
    }
  ];

const EventCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/1xCojeTMGEaA177YhF8p0ZO1oGqUQUa5D0B0CpXxXFZc/viewform?edit_requested=true', '_blank');
    toast.success('Redirecting to team registration form');
  };

  return (
    <section id="tournament" className="py-20 bg-gradient-to-b from-white via-white to-carnival-cream/10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-carnival-darkRed gradient-text"
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
                  ? 'bg-carnival-red text-white scale-105' 
                  : 'bg-white text-carnival-red hover:bg-carnival-red/10'}`}
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
          {categories
            .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
            .map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-full ${category.color}`}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-carnival-darkRed">{category.title}</h3>
                  <p className="text-carnival-brown mt-2">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.events.map((event, index) => (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-br from-carnival-cream to-white border-2 border-carnival-yellow/20 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-carnival-yellow/10 rounded-bl-full" />
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-carnival-red/10">
                            <Calendar className="w-6 h-6 text-carnival-red" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-carnival-darkRed">{event.name}</CardTitle>
                            <CardDescription className="text-carnival-brown">
                              {event.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="space-y-2 text-carnival-brown">
                          <p className="font-semibold">Entry: {event.registrationFee}</p>
                          <p className="font-semibold">Reward: {event.prizeMoney}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="relative z-10 bg-gradient-to-r from-carnival-cream/50 to-white/50 pt-4">
                        <div className="w-full h-1 bg-carnival-red/20 rounded-full" />
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Register Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 flex justify-center"
        >
          <Button
            onClick={handleRegister}
            className="w-full md:w-auto mx-auto px-8 py-6 text-lg font-bold bg-carnival-red hover:bg-carnival-darkRed text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            Register Your Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCategories;
