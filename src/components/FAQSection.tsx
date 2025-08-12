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
      question: "What are the dates for Vizphoria Fest 2025?",
      answer: "Vizphoria Fest will take place from 20th to 22nd February 2025."
    },
    {
      question: "How can I buy tickets for the festival?",
      answer: "Tickets can be purchased directly through our official website. Visit the ticketing section, select your pass type, and follow the checkout process."
    },
    {
      question: "What are the event timings?",
      answer: "The festival runs from 8 AM to 9 PM."
    },
    {
      question: "Will there be food and drinks available at the venue?",
      answer: "Yes, multiple food and beverage stalls will be available, offering a wide variety of options."
    },
    {
      question: "Where can I get updates on events?",
      answer: "Follow us on <a href='https://www.instagram.com/Vizphoria.fest' target='_blank' rel='noopener noreferrer' style='color: red; font-weight: bold;'>Instagram (@Vizphoria.fest)</a> for the latest updates."
    },
    {
      question: "What should I bring to the festival?",
      answer: "A printed or digital festival pass, a valid Student ID for verification, and comfortable clothing & footwear for enjoying the festival."
    },
    {
      question: "Are there any age restrictions for attending?",
      answer: "The festival is open to students aged 16+."
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, parking is available but limited. We recommend carpooling or using public transportation."
    },
    {
      question: "How can I become a sponsor?",
      answer: "Email us at <a href='mailto:vizphoria@atriauniversity.edu.in' style='color: red; font-weight: bold;'>vizphoria@atriauniversity.edu.in</a> to express sponsorship interest."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refunds are only available if the event is cancelled."
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
            FAQ's?
          </h2>
          <p className="text-carnival-brown text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about Visphoria Fest
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
