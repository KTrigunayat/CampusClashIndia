
import { motion } from 'framer-motion';
import { Crown, Star, Trophy, Gamepad, Users, Target } from 'lucide-react';

const TicketingSection = () => {
  const tickets = {
    passes: [
      {
        name: "Online Qualifiers",
        price: "15,000 Slots",
        type: "online",
        date: "Phase 1: 10–20 Sep • Phase 2: 20–29 Sep",
        features: [
          "Phase 1: Single Match Elimination",
          "Phase 2: 2 Custom Room Matches",
          "Groups of 20 • Top 2 → P2 • Top 4 → State"
        ]
      },
      {
        name: "Offline Campus Rounds",
        price: "30+ Colleges",
        type: "offline",
        date: "20 Aug – 15 Sep",
        features: [
          "LAN Setup • Spectator Area",
          "On-ground Admins",
          "Top 4 teams qualify → Regionals"
        ]
      },
      {
        name: "Regional Playoffs",
        price: "Broadcast",
        type: "regional",
        date: "9 – 15 Oct",
        features: [
          "4 Custom Room Matches",
          "Live Commentary • Pro Observers",
          "Top 6 per group → National Semi-finals"
        ]
      },
      {
        name: "Grand Finale LAN",
        price: "Top 16 Teams",
        type: "lan",
        date: "31 Oct – 1 Nov • IIT Kharagpur",
        features: [
          "15 Qualified + 1 Invited",
          "8 Matches • Live Audience",
          "Championship Trophy"
        ]
      }
    ]
  };

  return (
    <section id="stages" className="py-20 bg-gradient-to-b from-ai-light to-ai-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight"
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
              className={`relative bg-ai-card rounded-xl p-6 shadow-lg border border-ai-border transition-all duration-300 hover:shadow-2xl card-hover ${
                ticket.type === 'lan' 
                  ? 'border-ai-accent transform hover:-translate-y-2' 
                  : 'border-ai-border transform hover:-translate-y-2'
              }`}
            >
              {ticket.type === 'lan' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ai-accent to-ai-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Grand Finale
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{ticket.name}</h4>
                  <p className="text-sm text-ai-muted">{ticket.date}</p>
                  <p className="text-2xl font-bold mt-2 text-ai-primary">
                    {ticket.price}
                  </p>
                </div>
                {ticket.type === 'lan' ? (
                  <Crown className="w-8 h-8 text-ai-accent animate-pulse" />
                ) : ticket.type === 'online' ? (
                  <Gamepad className="w-8 h-8 text-ai-primary" />
                ) : ticket.type === 'offline' ? (
                  <Users className="w-8 h-8 text-ai-secondary" />
                ) : (
                  <Target className="w-8 h-8 text-ai-accent opacity-75" />
                )}
              </div>
              
              <ul className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="text-sm text-ai-muted flex items-center gap-2">
                    <Star className="w-4 h-4 text-ai-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;
