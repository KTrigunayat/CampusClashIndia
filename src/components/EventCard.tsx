import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Music, Theater, Trophy, Ticket } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
}

const EventCard = ({ title, description, date, category }: EventCardProps) => {
  const getIcon = () => {
    switch (category.toLowerCase()) {
      case 'music':
        return <Music className="w-6 h-6" />;
      case 'cultural':
        return <Theater className="w-6 h-6" />;
      case 'sports':
        return <Trophy className="w-6 h-6" />;
      default:
        return <Ticket className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-[#18181b] border-2 border-[#232323] shadow-lg group-hover:shadow-orange-500/30 group-hover:border-[#FFB300] transition-all duration-300 h-full">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFB300]/20 to-[#FF6A00]/20 rounded-bl-full" />
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-gradient-to-r from-[#FFB300]/30 to-[#FF6A00]/30 text-[#FF6A00] shadow"
            >
              {getIcon()}
            </motion.div>
            <div>
              <CardTitle className="text-xl font-extrabold text-[#FFB300] uppercase drop-shadow">
                {title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-[#FF6A00] mt-1 font-semibold">
                <Calendar className="w-4 h-4 text-[#FFB300]" />
                {date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-[#e6e6e6] leading-relaxed font-medium">
            {description}
          </p>
        </CardContent>
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/10 to-[#FF6A00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Card>
    </motion.div>
  );
};

export default EventCard;
