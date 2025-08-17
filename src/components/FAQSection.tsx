import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I register my team for Campus Clash India?",
      answer: "Team registration is now open! Visit our registration page and fill out the form with your team details. Each team must have exactly 4 players from the same college."
    },
    {
      question: "What are the technical requirements for the tournament?",
      answer: "You need a stable internet connection, BGMI version 2.9 or higher, minimum 4GB RAM, and Android 5.1+ or iOS 9.0+. Discord will be used for team communication."
    },
    {
      question: "Is there an entry fee for the tournament?",
      answer: "Online qualifiers are completely FREE! There are no entry fees for participating in Campus Clash India. All qualified teams can compete without any cost."
    },
    {
      question: "What is the tournament format and schedule?",
      answer: "The tournament has 4 stages: Online Qualifiers (15,000 slots), Offline Campus Rounds (35 partner colleges), Regional Playoffs (live streaming), and Grand Finale LAN at IIT Kharagpur."
    },
    {
      question: "How is anti-cheat protection implemented?",
      answer: "We use advanced detection systems, screen recording requirements, and professional observers. Any violation of fair play rules results in immediate disqualification."
    },
    {
      question: "What are the prizes for winners?",
      answer: "Prize pool details will be announced soon. Winners will receive championship trophies, certificates, and exciting rewards. Stay tuned for updates!"
    }
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/917816063256', '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-[#111112]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#FFB300] uppercase drop-shadow-lg tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FFB300] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#e6e6e6] text-center max-w-3xl mx-auto mb-12 text-lg">
            Find answers to common questions about the tournament
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-[#18181b] backdrop-blur-sm border-2 border-[#232323] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#18181b]/80 hover:border-[#FFB300]"
                >
                  <AccordionTrigger className="px-6 py-5 text-left group hover:bg-[#18181b]/60 transition-colors">
                    <span className="text-[#FFB300] font-medium text-lg group-hover:text-[#FF6A00] transition-colors duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-[#e6e6e6]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#e6e6e6] mt-4">
            Still have questions? We're here to help!
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#FFB300] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-lg hover:shadow-[#FFB300]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
