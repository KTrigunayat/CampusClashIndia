import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FAQSection = () => {
  const { toast } = useToast();
  const faqs = [
    {
      question: "Who can participate in Campus Clash India?",
      answer: "College students in India (age 16+) with valid student ID can participate. Each team must have 4 players + 1 substitute (optional)."
    },
    {
      question: "What is the team size requirement?",
      answer: "Each team must have exactly 4 players. You can register 1 substitute player (optional). All players must be from the same college."
    },
    {
      question: "Is there an entry fee for the tournament?",
      answer: "Online qualifiers are FREE for all teams. There may be minimal charges for offline rounds at partner colleges (details TBD)."
    },
    {
      question: "What game version and devices are allowed?",
      answer: "Only BGMI (Battlegrounds Mobile India) latest version is allowed. Mobile devices only - NO emulators or PC versions permitted."
    },
    {
      question: "How does anti-cheat work?",
      answer: "We use advanced detection systems to ensure fair play. Any violations (hacks, cheats, emulators) will result in immediate disqualification."
    },
    {
      question: "How do offline campus rounds work?",
      answer: "35 partner colleges will host LAN events. Priority given to students from partner colleges. Limited guest slots available per city."
    },
    {
      question: "What about travel for LAN finals?",
      answer: "Organizers will coordinate logistics and accommodation for the top 16 teams reaching the Grand Finale at IIT Kharagpur."
    },
    {
      question: "Where can I watch the matches?",
      answer: "Follow us on <a href='https://www.instagram.com/campusclashindia' target='_blank' rel='noopener noreferrer' style='color: #00E5FF; font-weight: bold;'>Instagram (@campusclashindia)</a> for live streams and updates."
    },
    {
      question: "How can I become a partner college?",
      answer: "Email us at <a href='mailto:partners@campusclashindia.com' style='color: #00E5FF; font-weight: bold;'>partners@campusclashindia.com</a> to express interest in hosting offline rounds."
    },
    {
      question: "What are the prizes for winners?",
      answer: "Championship trophy, cash prizes, and gaming peripherals for the winning team. Detailed prize pool will be announced soon."
    }
  ];

  const handleContactClick = () => {
    toast({
      title: "Contact Form Opening",
      description: "Our team will get back to you within 24 hours!",
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-carnival-brown text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about Campus Clash India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-lg border-2 border-carnival-red/20 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <span className="text-carnival-darkRed font-medium group-hover:text-carnival-red transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-carnival-brown">
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={handleContactClick}
            className="bg-carnival-red hover:bg-carnival-darkRed text-carnival-cream group
              px-8 py-6 rounded-full text-lg font-bold
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-carnival-red/20"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Still Have Questions?
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
