import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Music, Theater, Trophy, Ticket } from 'lucide-react';

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
      className="group"
    >
      <Card className="relative overflow-hidden bg-ai-card border border-ai-border shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-bl-full" />
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-gradient-to-r from-ai-primary/20 to-ai-secondary/20 text-ai-primary"
            >
              {getIcon()}
            </motion.div>
            <div>
              <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-ai-muted mt-1">
                <Calendar className="w-4 h-4" />
                {date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-ai-muted leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter className="relative z-10 bg-gradient-to-r from-ai-surface/50 to-ai-card/50 pt-4">
          <Button 
            onClick={onRegister}
            className="w-full bg-gradient-to-r from-ai-primary to-ai-secondary text-white hover:from-ai-secondary hover:to-ai-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-ai-primary/25"
          >
            Register Now
          </Button>
        </CardFooter>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ai-primary/5 to-ai-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Card>
    </motion.div>
  );
};

export default EventCard;
