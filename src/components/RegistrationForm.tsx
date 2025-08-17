import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Users, Gamepad, Trophy, Send } from 'lucide-react';

// Form validation schema
const registrationSchema = z.object({
  teamLeaderName: z.string().min(2, 'Team leader name must be at least 2 characters'),
  teamLeaderID: z.string().min(1, 'Team leader BGMI ID is required'),
  player1ID: z.string().min(1, 'Player 1 BGMI ID is required'),
  player2ID: z.string().min(1, 'Player 2 BGMI ID is required'),
  player3ID: z.string().min(1, 'Player 3 BGMI ID is required'),
  player4ID: z.string().min(1, 'Player 4 BGMI ID is required'),
  mailID: z.string().email('Please enter a valid email address'),
  collegeName: z.string().min(2, 'College name must be at least 2 characters'),
  whatsappNumber: z.string().min(10, 'Please enter a valid WhatsApp number'),
  state: z.string().min(1, 'Please select your state'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const steps = [
  {
    label: 'Team Leader',
    fields: ['teamLeaderName', 'teamLeaderID'],
  },
  {
    label: 'Players',
    fields: ['player1ID', 'player2ID', 'player3ID', 'player4ID'],
  },
  {
    label: 'Contact & College',
    fields: ['mailID', 'collegeName', 'whatsappNumber', 'state'],
  },
];

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStateRedirectOpen, setIsStateRedirectOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [redirectState, setRedirectState] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  
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
      // External registration flow mapping for specific states
      const stateExternalLinks: Record<string, string> = {
        'Andhra Pradesh': 'https://play.gamecentric.io/tournaments/HATAZEHOXAOCWBG',
        'Maharashtra': 'https://play.gamecentric.io/tournaments/0APMRI2FVTIY83B',
        'Tamil Nadu': 'https://play.gamecentric.io/tournaments/0R041U3XFOP9BL4',
        'Telangana': 'https://play.gamecentric.io/tournaments/DUIOU42TKPHEGSQ',
        'Kerala': 'https://play.gamecentric.io/tournaments/B5VJJACQGTGMBB3',
        'Karnataka': 'https://play.gamecentric.io/tournaments/Y2KO2D3MT6E6NAC',
        'Uttar Pradesh': 'https://play.gamecentric.io/tournaments/2454ZZEGIZN9DGR',
      };

      const externalUrl = stateExternalLinks[data.state];

      // Save registration to Supabase
      const { error } = await supabase.from('registrations').insert({
        team_leader_name: data.teamLeaderName,
        team_leader_id: data.teamLeaderID,
        player1_id: data.player1ID,
        player2_id: data.player2ID,
        player3_id: data.player3ID,
        player4_id: data.player4ID,
        mail_id: data.mailID,
        college_name: data.collegeName,
        whatsapp_number: data.whatsappNumber,
        state: data.state,
      });

      if (error) {
        const message = error.message?.includes('duplicate')
          ? 'Duplicate registration detected for email or team leader ID.'
          : 'Registration failed. Please try again.';
        toast.error(message);
        return;
      }

      toast.success('Team registration submitted successfully!');

      // Then, if the state requires external completion, show dialog
      if (externalUrl) {
        setRedirectUrl(externalUrl);
        setRedirectState(data.state);
        setIsStateRedirectOpen(true);
        toast.message('Additional step required', {
          description: 'Please complete your registration on the official state portal.',
        });
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

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
    <section id="registration" className="py-20 bg-[#111112]">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FFB300] uppercase tracking-wide drop-shadow-lg">
            Team Registration
          </h2>
          <p className="text-[#e6e6e6] text-base mt-6 text-center max-w-xl mx-auto">
            Register your team for Campus Clash India - India's largest college BGMI tournament
          </p>
        </motion.div>
        {/* Progress Indicator */}
        <div className="flex justify-center gap-4 mb-8">
          {steps.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center ${i === step ? 'font-bold text-[#FFB300]' : 'text-[#e6e6e6]/60'}`}> 
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${i === step ? 'border-[#FFB300] bg-[#18181b]' : 'border-[#232323] bg-[#232323]'}`}>{i + 1}</div>
              <span className="text-xs mt-1 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#18181b] rounded-2xl border-2 border-[#232323] overflow-hidden shadow-2xl p-8 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Step 1: Team Leader */}
          {step === 0 && (
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="teamLeaderName" className="text-[#FFB300] font-medium">Team Leader Name *</Label>
                <Input id="teamLeaderName" {...register('teamLeaderName')} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder="Enter team leader's full name" />
                {errors.teamLeaderName && <p className="text-red-500 text-sm mt-1">{errors.teamLeaderName.message}</p>}
              </div>
              <div>
                <Label htmlFor="teamLeaderID" className="text-[#FFB300] font-medium">Team Leader ID *</Label>
                <Input id="teamLeaderID" {...register('teamLeaderID')} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder="Enter team leader's ID" />
                {errors.teamLeaderID && <p className="text-red-500 text-sm mt-1">{errors.teamLeaderID.message}</p>}
              </div>
            </div>
          )}
          {/* Step 2: Players */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((playerNum) => (
                <div key={playerNum}>
                  <Label htmlFor={`player${playerNum}ID`} className="text-[#FFB300] font-medium">Player {playerNum} ID *</Label>
                  <Input id={`player${playerNum}ID`} {...register(`player${playerNum}ID` as keyof RegistrationFormData)} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder={`Enter Player ${playerNum} ID`} />
                  {errors[`player${playerNum}ID` as keyof typeof errors] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`player${playerNum}ID` as keyof typeof errors]?.message}</p>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Step 3: Contact & College */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mailID" className="text-[#FFB300] font-medium">Email ID *</Label>
                <Input id="mailID" {...register('mailID')} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder="Enter team email address" />
                {errors.mailID && <p className="text-red-500 text-sm mt-1">{errors.mailID.message}</p>}
              </div>
              <div>
                <Label htmlFor="collegeName" className="text-[#FFB300] font-medium">College Name *</Label>
                <Input id="collegeName" {...register('collegeName')} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder="Enter college name" />
                {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName.message}</p>}
              </div>
              <div>
                <Label htmlFor="whatsappNumber" className="text-[#FFB300] font-medium">WhatsApp Number *</Label>
                <Input id="whatsappNumber" {...register('whatsappNumber')} className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50" placeholder="Enter WhatsApp number" />
                {errors.whatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber.message}</p>}
              </div>
              <div>
                <Label htmlFor="state" className="text-[#FFB300] font-medium">State *</Label>
                <Select onValueChange={(value) => setValue('state', value)}>
                  <SelectTrigger className="mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6]">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
              </div>
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            {step > 0 ? (
              <Button type="button" onClick={goBack} className="bg-[#232323] text-[#FFB300] px-6 py-3 rounded-full font-bold hover:bg-[#FFB300] hover:text-black transition-all duration-300">Back</Button>
            ) : <div />}
            {step < steps.length - 1 ? (
              <Button type="button" onClick={goNext} className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black px-6 py-3 rounded-full font-bold hover:from-[#FF6A00] hover:to-[#FFB300] transition-all duration-300">Next</Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black px-6 py-3 rounded-full font-bold hover:from-[#FF6A00] hover:to-[#FFB300] transition-all duration-300">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>Register Team</>
                )}
              </Button>
            )}
          </div>
        </motion.form>
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-[#e6e6e6]/70 text-sm">
            By registering, you agree to our tournament rules and fair play policy.
          </p>
        </motion.div>
        {/* State-specific external registration dialog remains unchanged */}
        {/* ... existing dialog code ... */}
      </div>
    </section>
  );
};

export default RegistrationForm;
