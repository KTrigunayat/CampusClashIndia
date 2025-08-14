import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Star, Download } from 'lucide-react';
import { Button } from './ui/button';
import { generateTicketPDF } from '@/utils/ticketPDF';
import { toast } from 'sonner';

interface PremiumTicketProps {
  type: string;
  price: string;
  date: string;
  ticketId: string;
  onShare: () => void;
}

const PremiumTicket = ({ type, price, date, ticketId, onShare }: PremiumTicketProps) => {
  const handleDownloadPDF = async () => {
    try {
      await generateTicketPDF(`ticket-${ticketId}`);
      toast.success('Ticket downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download ticket');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div id={`ticket-${ticketId}`} className="relative bg-carnival-cream rounded-xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left side - QR Code */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-inner">
              <QRCodeSVG 
                value={ticketId}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <h3 className="text-2xl font-bold text-black">SCAN THIS TICKET</h3>
            <p className="text-gray-600 text-center">Present this QR code at the entrance</p>
          </div>

          {/* Right side - Ticket Details */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-carnival-red">{type}</h3>
                <p className="text-xl font-semibold">{date}</p>
              </div>
              <Star className="w-8 h-8 text-carnival-yellow" />
            </div>

            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Ticket ID</p>
                <p className="font-mono font-bold">{ticketId}</p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Amount Paid</p>
                <p className="text-2xl font-bold text-carnival-darkRed">₹{price}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={onShare}
                className="w-full bg-carnival-red hover:bg-carnival-darkRed text-white group"
              >
                <Share2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Share Ticket
              </Button>
              
              <Button 
                onClick={handleDownloadPDF}
                className="w-full bg-carnival-darkRed hover:bg-carnival-red text-white group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-carnival-yellow/10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-carnival-red/10 rounded-tr-full" />
        
        {/* Bottom Border */}
        <div className="h-2 bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent" />
      </div>
    </motion.div>
  );
};

export default PremiumTicket;