import { z } from 'zod';

export const registrationSchema = z.object({
  teamLeaderName: z.string().min(2),
  teamLeaderID: z.string().min(1),
  player1ID: z.string().min(1),
  player2ID: z.string().min(1),
  player3ID: z.string().min(1),
  player4ID: z.string().min(1),
  mailID: z.string().email(),
  collegeName: z.string().min(2),
  whatsappNumber: z.string().min(10),
  state: z.string().min(1),
}); 