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
    window.open('https://wa.me/919638605301', '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-ai-light to-ai-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-ai-muted text-lg max-w-2xl mx-auto">
            Find answers to common questions about Campus Clash India tournament
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
                <AccordionItem value={`item-${index}`} className="bg-ai-card/80 backdrop-blur-sm rounded-lg border border-ai-border overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    <span className="text-white font-medium group-hover:text-ai-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-ai-muted">
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
          <p className="text-ai-muted mb-6">
            Still have questions? We're here to help!
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-primary text-white group
              px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto
              hover:scale-105 hover:shadow-lg hover:shadow-ai-primary/20"
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
