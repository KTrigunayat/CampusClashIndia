import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Users, Gamepad, Trophy, Send } from 'lucide-react';

// Form validation schema
const registrationSchema = z.object({
  teamLeaderName: z.string().min(2, 'Team leader name must be at least 2 characters'),
  teamLeaderID: z.string().min(1, 'Team leader ID is required'),
  player1ID: z.string().min(1, 'Player 1 ID is required'),
  player2ID: z.string().min(1, 'Player 2 ID is required'),
  player3ID: z.string().min(1, 'Player 3 ID is required'),
  player4ID: z.string().min(1, 'Player 4 ID is required'),
  mailID: z.string().email('Please enter a valid email address'),
  collegeName: z.string().min(2, 'College name must be at least 2 characters'),
  whatsappNumber: z.string().min(10, 'Please enter a valid WhatsApp number'),
  state: z.string().min(1, 'Please select your state'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you can integrate with your backend API
      // For now, we'll simulate a submission
      console.log('Registration data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Team registration submitted successfully!');
      
      // You can redirect to Google Forms or your backend
      // window.open('https://docs.google.com/forms/d/your-form-id', '_blank');
      
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Chandigarh', 'Dadra and Nagar Haveli',
    'Daman and Diu', 'Lakshadweep', 'Puducherry', 'Andaman and Nicobar Islands'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-carnival-darkRed">
            TEAM REGISTRATION
          </h2>
          <p className="text-carnival-brown text-lg max-w-2xl mx-auto">
            Register your team for Campus Clash India - India's largest college BGMI tournament
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-carnival-red/10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Team Leader Section */}
            <div className="bg-carnival-red/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-carnival-red" />
                <h3 className="text-xl font-bold text-carnival-darkRed">Team Leader Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="teamLeaderName" className="text-carnival-darkRed font-medium">
                    Team Leader Name *
                  </Label>
                  <Input
                    id="teamLeaderName"
                    {...register('teamLeaderName')}
                    className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                    placeholder="Enter team leader's full name"
                  />
                  {errors.teamLeaderName && (
                    <p className="text-red-500 text-sm mt-1">{errors.teamLeaderName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="teamLeaderID" className="text-carnival-darkRed font-medium">
                    Team Leader ID *
                  </Label>
                  <Input
                    id="teamLeaderID"
                    {...register('teamLeaderID')}
                    className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                    placeholder="Enter team leader's ID"
                  />
                  {errors.teamLeaderID && (
                    <p className="text-red-500 text-sm mt-1">{errors.teamLeaderID.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Team Players Section */}
            <div className="bg-carnival-yellow/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad className="w-6 h-6 text-carnival-yellow" />
                <h3 className="text-xl font-bold text-carnival-darkRed">Team Players</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((playerNum) => (
                  <div key={playerNum}>
                    <Label htmlFor={`player${playerNum}ID`} className="text-carnival-darkRed font-medium">
                      Player {playerNum} ID *
                    </Label>
                    <Input
                      id={`player${playerNum}ID`}
                      {...register(`player${playerNum}ID` as keyof RegistrationFormData)}
                      className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                      placeholder={`Enter Player ${playerNum} ID`}
                    />
                    {errors[`player${playerNum}ID` as keyof typeof errors] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[`player${playerNum}ID` as keyof typeof errors]?.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & College Section */}
            <div className="bg-carnival-brown/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-carnival-brown" />
                <h3 className="text-xl font-bold text-carnival-darkRed">Contact & College Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mailID" className="text-carnival-darkRed font-medium">
                    Email ID *
                  </Label>
                  <Input
                    id="mailID"
                    type="email"
                    {...register('mailID')}
                    className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                    placeholder="Enter email address"
                  />
                  {errors.mailID && (
                    <p className="text-red-500 text-sm mt-1">{errors.mailID.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="whatsappNumber" className="text-carnival-darkRed font-medium">
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="whatsappNumber"
                    {...register('whatsappNumber')}
                    className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                    placeholder="Enter WhatsApp number"
                  />
                  {errors.whatsappNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="collegeName" className="text-carnival-darkRed font-medium">
                    College Name *
                  </Label>
                  <Input
                    id="collegeName"
                    {...register('collegeName')}
                    className="mt-1 border-carnival-red/20 focus:border-carnival-red"
                    placeholder="Enter college name"
                  />
                  {errors.collegeName && (
                    <p className="text-red-500 text-sm mt-1">{errors.collegeName.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="state" className="text-carnival-darkRed font-medium">
                    State *
                  </Label>
                  <Select onValueChange={(value) => setValue('state', value)}>
                    <SelectTrigger className="mt-1 border-carnival-red/20 focus:border-carnival-red">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center pt-6"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-carnival-red hover:bg-carnival-darkRed text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Register Team
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-carnival-brown text-sm">
            By registering, you agree to our tournament rules and fair play policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
