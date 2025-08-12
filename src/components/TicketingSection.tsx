
import { motion } from 'framer-motion';
import { Crown, Star, Trophy, Gamepad, Users, Target } from 'lucide-react';

const TicketingSection = () => {
  const tickets = {
    passes: [
      {
        name: "Online Qualifiers",
        price: "15,000 Slots",
        type: "online",
        date: "Nationwide",
        features: ["BGMI Game", "Anti-Cheat Enabled", "Room Codes Provided"]
      },
      {
        name: "Offline Campus Rounds",
        price: "35 Partners",
        type: "offline",
        date: "Partner Colleges",
        features: ["LAN Setup", "On-ground Admins", "Spectator Area"]
      },
      {
        name: "Regional Playoffs",
        price: "Broadcast",
        type: "regional",
        date: "Online Stream",
        features: ["Live Commentary", "Pro Observers", "Regional Champions"]
      },
      {
        name: "Grand Finale LAN",
        price: "Top 16 Teams",
        type: "lan",
        date: "IIT Kharagpur",
        features: ["Main Stage", "Live Audience", "Championship Trophy"]
      }
    ]
  };

  return (
    <section id="stages" className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-carnival-darkRed tracking-tight"
        >
          TOURNAMENT STAGES
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tickets.passes.map((ticket, index) => (
            <motion.div
              key={ticket.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                ticket.type === 'lan' 
                  ? 'border-carnival-yellow transform hover:-translate-y-2' 
                  : 'border-carnival-cream transform hover:-translate-y-2'
              }`}
            >
              {ticket.type === 'lan' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-carnival-yellow text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Grand Finale
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-carnival-darkRed mb-1">{ticket.name}</h4>
                  <p className="text-sm text-gray-600">{ticket.date}</p>
                  <p className="text-2xl font-bold mt-2 text-carnival-red">
                    {ticket.price}
                  </p>
                </div>
                {ticket.type === 'lan' ? (
                  <Crown className="w-8 h-8 text-carnival-yellow animate-pulse" />
                ) : ticket.type === 'online' ? (
                  <Gamepad className="w-8 h-8 text-carnival-red" />
                ) : ticket.type === 'offline' ? (
                  <Users className="w-8 h-8 text-carnival-brown" />
                ) : (
                  <Target className="w-8 h-8 text-carnival-brown opacity-75" />
                )}
              </div>
              
              <ul className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <Star className="w-4 h-4 text-carnival-red flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-carnival-red via-carnival-yellow to-carnival-darkRed rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;
