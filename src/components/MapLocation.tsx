import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const MapLocation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-carnival-darkRed">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-carnival-darkRed mb-6">
                Organizer Committee
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-carnival-brown">
                  <MapPin className="w-5 h-5 mt-1 text-carnival-red shrink-0" />
                  <p>
                    1st Main Rd, near Baptist Hospital,<br />
                    Ags Colony, Anandnagar,<br />
                    Hebbal, Bengaluru,<br />
                    Karnataka 560024
                  </p>
                </div>
                <div className="flex items-center gap-3 text-carnival-brown">
                  <Phone className="w-5 h-5 text-carnival-red shrink-0" />
                  <p>+91 1234567890</p>
                </div>
                <div className="flex items-center gap-3 text-carnival-brown">
                  <Mail className="w-5 h-5 text-carnival-red shrink-0" />
                  <p>contact@vizphoria.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4834167393627!2d77.58745731482233!3d13.0588899907921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dedd4dcca1%3A0x6042e7ebd4f320bb!2sAtria%20University!5e0!3m2!1sen!2sin!4v1648532547735!5w200!5h200"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;