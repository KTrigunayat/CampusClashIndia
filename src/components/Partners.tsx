import { motion } from 'framer-motion';
import { Building2, MapPin, Users } from 'lucide-react';

const Partners = () => {
  // Placeholder data for 35 partner colleges - you can replace with actual data
  const partners = [
    { name: "IIT Kharagpur", city: "Kharagpur", logo: "/placeholder-college.png" },
    { name: "IIT Bombay", city: "Mumbai", logo: "/placeholder-college.png" },
    { name: "IIT Delhi", city: "Delhi", logo: "/placeholder-college.png" },
    { name: "IIT Madras", city: "Chennai", logo: "/placeholder-college.png" },
    { name: "IIT Kanpur", city: "Kanpur", logo: "/placeholder-college.png" },
    { name: "BITS Pilani", city: "Pilani", logo: "/placeholder-college.png" },
    { name: "NIT Trichy", city: "Tiruchirappalli", logo: "/placeholder-college.png" },
    { name: "NIT Surathkal", city: "Mangalore", logo: "/placeholder-college.png" },
    { name: "DTU Delhi", city: "Delhi", logo: "/placeholder-college.png" },
    { name: "NSUT Delhi", city: "Delhi", logo: "/placeholder-college.png" },
    { name: "VIT Vellore", city: "Vellore", logo: "/placeholder-college.png" },
    { name: "SRM Chennai", city: "Chennai", logo: "/placeholder-college.png" },
    { name: "Manipal University", city: "Manipal", logo: "/placeholder-college.png" },
    { name: "Amrita University", city: "Coimbatore", logo: "/placeholder-college.png" },
    { name: "Thapar University", city: "Patiala", logo: "/placeholder-college.png" },
    { name: "PES University", city: "Bangalore", logo: "/placeholder-college.png" },
    { name: "RVCE Bangalore", city: "Bangalore", logo: "/placeholder-college.png" },
    { name: "BMSCE Bangalore", city: "Bangalore", logo: "/placeholder-college.png" },
    { name: "MSRIT Bangalore", city: "Bangalore", logo: "/placeholder-college.png" },
    { name: "PICT Pune", city: "Pune", logo: "/placeholder-college.png" },
    { name: "COEP Pune", city: "Pune", logo: "/placeholder-college.png" },
    { name: "VJTI Mumbai", city: "Mumbai", logo: "/placeholder-college.png" },
    { name: "SPIT Mumbai", city: "Mumbai", logo: "/placeholder-college.png" },
    { name: "DJ Sanghvi Mumbai", city: "Mumbai", logo: "/placeholder-college.png" },
    { name: "MIT Manipal", city: "Manipal", logo: "/placeholder-college.png" },
    { name: "NIT Warangal", city: "Warangal", logo: "/placeholder-college.png" },
    { name: "NIT Calicut", city: "Calicut", logo: "/placeholder-college.png" },
    { name: "NIT Rourkela", city: "Rourkela", logo: "/placeholder-college.png" },
    { name: "NIT Jamshedpur", city: "Jamshedpur", logo: "/placeholder-college.png" },
    { name: "NIT Durgapur", city: "Durgapur", logo: "/placeholder-college.png" },
    { name: "NIT Silchar", city: "Silchar", logo: "/placeholder-college.png" },
    { name: "NIT Hamirpur", city: "Hamirpur", logo: "/placeholder-college.png" },
    { name: "NIT Srinagar", city: "Srinagar", logo: "/placeholder-college.png" },
    { name: "NIT Patna", city: "Patna", logo: "/placeholder-college.png" },
    { name: "NIT Raipur", city: "Raipur", logo: "/placeholder-college.png" },
    { name: "NIT Agartala", city: "Agartala", logo: "/placeholder-college.png" },
    { name: "NIT Puducherry", city: "Puducherry", logo: "/placeholder-college.png" },
    { name: "NIT Goa", city: "Goa", logo: "/placeholder-college.png" },
    { name: "NIT Uttarakhand", city: "Uttarakhand", logo: "/placeholder-college.png" },
    { name: "NIT Manipur", city: "Manipur", logo: "/placeholder-college.png" },
    { name: "NIT Meghalaya", city: "Meghalaya", logo: "/placeholder-college.png" },
  ];

  return (
    <section id="colleges" className="py-20 bg-gradient-to-b from-ai-light to-ai-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight"
        >
          PARTNER COLLEGES
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="w-8 h-8 text-ai-primary" />
            <span className="text-2xl font-bold text-white">35 Partner Colleges</span>
          </div>
          <p className="text-ai-muted text-lg max-w-3xl mx-auto">
            Join us for offline campus rounds at these prestigious institutions across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-ai-card rounded-lg p-4 shadow-lg border border-ai-border hover:border-ai-primary/30 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-ai-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-ai-primary" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2">
                  {partner.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-ai-muted text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{partner.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-ai-muted mb-4">
            Want your college to be a partner? Contact us!
          </p>
          <a 
            href="mailto:partners@campusclashindia.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ai-primary to-ai-secondary text-white rounded-full transition-all duration-300 font-medium hover:from-ai-secondary hover:to-ai-primary"
          >
            Become a Partner College
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
