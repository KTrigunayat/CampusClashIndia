import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919638605301', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@campusclashindia.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919638605301';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/campusclashindia', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-lg text-center"
          >
            <Button
              variant="ghost"
              onClick={handleWhatsAppClick}
              className="w-full h-full flex flex-col items-center gap-4 hover:bg-carnival-darkRed/10"
            >
              <MessageSquare className="w-8 h-8 text-carnival-red" />
              <p className="text-sm text-muted-foreground">+91 96386 05301</p>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-lg text-center"
          >
            <Button
              variant="ghost"
              onClick={handleEmailClick}
              className="w-full h-full flex flex-col items-center gap-4 hover:bg-carnival-darkRed/10"
            >
              <Mail className="w-8 h-8 text-carnival-red" />
              <p className="text-sm text-muted-foreground">info@campusclashindia.com</p>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-lg text-center"
          >
            <Button
              variant="ghost"
              onClick={handlePhoneClick}
              className="w-full h-full flex flex-col items-center gap-4 hover:bg-carnival-darkRed/10"
            >
              <Phone className="w-8 h-8 text-carnival-red" />
              <p className="text-sm text-muted-foreground">+91 96386 05301</p>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-lg text-center"
          >
            <Button
              variant="ghost"
              onClick={handleInstagramClick}
              className="w-full h-full flex flex-col items-center gap-4 hover:bg-carnival-darkRed/10"
            >
              <Instagram className="w-8 h-8 text-carnival-red" />
              <p className="text-sm text-muted-foreground">@campusclashindia</p>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
