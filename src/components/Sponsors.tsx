import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-carnival-yellow/10 to-carnival-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-carnival-darkRed mb-6">
            Our Sponsors
          </h2>
          <p className="text-2xl text-carnival-brown font-semibold">
            Open for sponsors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;