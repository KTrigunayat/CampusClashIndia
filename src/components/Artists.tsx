import { motion } from 'framer-motion';

const Artists = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-carnival-darkRed mb-6">
            Featured Artists
          </h2>
          <p className="text-2xl text-carnival-brown font-semibold">
            To be revealed soon
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;