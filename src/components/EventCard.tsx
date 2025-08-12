import { motion } from 'framer-motion';
import { Calendar, Ticket, Music, Theater, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  onRegister: () => void;
}

const EventCard = ({ title, description, date, category, onRegister }: EventCardProps) => {
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
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-carnival-cream to-white border-2 border-carnival-yellow/20 shadow-xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-carnival-yellow/10 rounded-bl-full" />
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-carnival-red/10 text-carnival-red"
            >
              {getIcon()}
            </motion.div>
            <div>
              <CardTitle className="text-2xl font-bold text-carnival-darkRed bg-clip-text">{title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-carnival-brown mt-1">
                <Calendar className="w-4 h-4" />
                {date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-carnival-brown leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter className="relative z-10 bg-gradient-to-r from-carnival-cream/50 to-white/50 pt-4">
          <Button 
            onClick={onRegister} 
            className="w-full bg-carnival-red hover:bg-carnival-darkRed text-carnival-cream group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Ticket className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Register Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;
