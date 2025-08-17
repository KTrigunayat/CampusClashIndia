import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Quick responses",
      action: "Chat Now",
      href: "https://wa.me/917816063256",
      color: "text-ai-primary"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Detailed inquiries",
      action: "Send Email",
      href: "mailto:kshitiz@dncesports.in",
      color: "text-ai-secondary"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      description: "Direct support",
      action: "Call Now",
      href: "tel:+917816063256",
      color: "text-ai-accent"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "Latest updates",
      action: "Follow Us",
      href: "https://www.instagram.com/dnc_esports_india",
      color: "text-ai-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#111112]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 text-[#FFB300] uppercase drop-shadow-lg tracking-wide"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full flex flex-col items-center gap-4 hover:bg-[#18181b] bg-[#18181b] p-6 rounded-xl border-2 border-[#232323] hover:border-[#FFB300] transition-all duration-300 card-hover"
            >
              <div className="text-[#FF6A00] transition-colors duration-300">
                {method.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#FFB300] mb-2">{method.title}</h3>
                <p className="text-[#e6e6e6] text-sm mb-4">{method.description}</p>
                <span className="text-[#FF6A00] font-semibold">{method.action}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
