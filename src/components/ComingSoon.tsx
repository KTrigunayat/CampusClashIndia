
import { motion } from 'framer-motion';

const ComingSoon = ({ title }: { title: string }) => (
  <section className="py-20 bg-[#111112]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-[#FFB300] mb-6 uppercase drop-shadow-lg tracking-wide">
          {title}
        </h2>
        <p className="text-2xl text-[#e6e6e6] font-semibold animate-float">
          Coming Soon!
        </p>
      </motion.div>
    </div>
  </section>
);

export default ComingSoon;
