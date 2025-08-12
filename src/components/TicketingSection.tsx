
import { motion } from 'framer-motion';
import { Crown, Star, Trophy } from 'lucide-react';

const TicketingSection = () => {
  const tickets = {
    passes: [
      {
        name: "Day 1 Pass",
        price: "₹99",
        type: "day1",
        date: "20th Feb",
        features: ["Access to Jamming Sessions", "Emerging Bands Performance", "Premium Seating"]
      },
      {
        name: "Day 2 Pass",
        price: "₹99",
        type: "day2",
        date: "21st Feb",
        features: ["Stand-up Comedy Show", "Premium Seating", "Free Refreshments"]
      },
      {
        name: "Day 3 Pass",
        price: "₹99",
        type: "day3",
        date: "22nd Feb",
        features: ["Grand DJ Night", "Dance Floor Access", "Special Effects Show"]
      },
      {
        name: "Festival Pass",
        price: "₹249",
        type: "festival",
        date: "20th-22nd Feb",
        features: ["Full 3-Day Access", "All Events Access", "Priority Entry", "Exclusive Merch"]
      }
    ]
  };

  return (
    <section id="tickets" className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-carnival-darkRed tracking-tight"
        >
          FESTIVAL PASSES
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tickets.passes.map((ticket, index) => (
            <motion.div
              key={ticket.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                ticket.type === 'festival' 
                  ? 'border-carnival-yellow transform hover:-translate-y-2' 
                  : 'border-carnival-cream transform hover:-translate-y-2'
              }`}
            >
              {ticket.type === 'festival' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-carnival-yellow text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Best Value
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
                {ticket.type === 'festival' ? (
                  <Crown className="w-8 h-8 text-carnival-yellow animate-pulse" />
                ) : (
                  <Trophy className="w-8 h-8 text-carnival-brown opacity-75" />
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
