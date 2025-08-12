import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Trophy, Theater, Camera, Palette, Book, Shirt, Calendar } from 'lucide-react';
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
      title: "Sports Events",
      description: "Showcase your athletic prowess and team spirit in our competitive sports events",
      events: [
        { 
          name: "Cricket Tournament", 
          description: "Experience the thrill of cricket with teams competing for glory", 
          registrationFee: 999,
          prizeMoney: "Upto ₹7,500 + Trophies and Medals"
        },
        { 
          name: "Football Championship", 
          description: "Show your football skills in this exciting tournament", 
          registrationFee: 799,
          prizeMoney: "Upto ₹7,500 + Trophies and Medals"
        }
      ],
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-carnival-red/10",
      id: "sports"
    },
    {
      title: "Fashion Events",
      description: "Express your style and creativity through fashion",
      events: [
        { 
          name: "A Masquerade Affair", 
          description: "A grand fashion showcase with masks and mystery", 
          registrationFee: 799,
          prizeMoney: "Upto ₹15,000"
        }
      ],
      icon: <Shirt className="w-8 h-8" />,
      color: "bg-carnival-yellow/10",
      id: "fashion"
    },
    {
      title: "Dance Events",
      description: "Move to the rhythm and showcase your dance talents",
      events: [
        { 
          name: "Reel Rhythm", 
          description: "Create viral-worthy dance reels", 
          registrationFee: 799,
          prizeMoney: "Upto ₹15,000"
        },
        { 
          name: "Nukkad Natak", 
          description: "Street-style dance performances", 
          registrationFee: 799,
          prizeMoney: "Upto ₹15,000"
        },
        { 
          name: "The Prop Challenge", 
          description: "Dance with creative props", 
          registrationFee: 399,
          prizeMoney: "Upto ₹8,000"
        },
        { 
          name: "Legends in Motion", 
          description: "Solo dance competition", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        }
      ],
      icon: <Theater className="w-8 h-8" />,
      color: "bg-carnival-brown/10",
      id: "dance"
    },
    {
      title: "Music Events",
      description: "Let your musical talent shine through various performances",
      events: [
        { 
          name: "Musical Theatre", 
          description: "Theatrical music performances", 
          registrationFee: 799,
          prizeMoney: "Upto ₹15,000"
        },
        { 
          name: "Folk Mela", 
          description: "Traditional folk music showcase", 
          registrationFee: 399,
          prizeMoney: "Upto ₹8,000"
        },
        { 
          name: "Symphonic Souls", 
          description: "Classical music competition", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        },
        { 
          name: "Jugalbandi Wars", 
          description: "Musical face-offs between artists", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        },
        { 
          name: "Vocal Vibes", 
          description: "Solo singing competition", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        }
      ],
      icon: <Music className="w-8 h-8" />,
      color: "bg-carnival-yellow/10",
      id: "music"
    },
    {
      title: "Media Events",
      description: "Capture moments and tell stories through various media forms",
      events: [
        { 
          name: "Visionary Voices", 
          description: "Short film making competition", 
          registrationFee: 399,
          prizeMoney: "Upto ₹8,000"
        },
        { 
          name: "Quick Cuts", 
          description: "Video editing challenge", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        },
        { 
          name: "Lens & Vision", 
          description: "Photography competition", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        }
      ],
      icon: <Camera className="w-8 h-8" />,
      color: "bg-carnival-red/10",
      id: "media"
    },
    {
      title: "Design Events",
      description: "Unleash your creativity through various design challenges",
      events: [
        { 
          name: "Problem Solver's Den", 
          description: "Design thinking challenge", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        },
        { 
          name: "Sustainable Outfit Design", 
          description: "Eco-friendly fashion design", 
          registrationFee: 199,
          prizeMoney: "Upto ₹4,000"
        },
        { 
          name: "Art Attack", 
          description: "Creative art competition", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        }
      ],
      icon: <Palette className="w-8 h-8" />,
      color: "bg-carnival-brown/10",
      id: "design"
    },
    {
      title: "Literary Events",
      description: "Express yourself through words and performance",
      events: [
        { 
          name: "Stand Up Comedy", 
          description: "Comedy performance competition", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        },
        { 
          name: "Tag Your Product", 
          description: "Creative writing for marketing", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        },
        { 
          name: "Creative Expression", 
          description: "Poetry and creative writing", 
          registrationFee: 99,
          prizeMoney: "Upto ₹2,000"
        }
      ],
      icon: <Book className="w-8 h-8" />,
      color: "bg-carnival-yellow/10",
      id: "literary"
    }
  ];

const EventCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/1xCojeTMGEaA177YhF8p0ZO1oGqUQUa5D0B0CpXxXFZc/viewform?edit_requested=true', '_blank');
    toast.success('Redirecting to registration form');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-carnival-darkRed gradient-text"
        >
          Event Categories
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
                          <p className="font-semibold">Registration Fee: ₹{event.registrationFee}</p>
                          <p className="font-semibold">Prize Money: {event.prizeMoney}</p>
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
            Register for Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCategories;
