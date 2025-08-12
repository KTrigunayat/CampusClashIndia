import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Shield, X } from "lucide-react";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-gradient-to-b from-carnival-cream to-white border-2 border-carnival-red/20 shadow-xl">
        <DialogHeader className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-carnival-red" />
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-carnival-red to-carnival-darkRed bg-clip-text text-transparent">
                Privacy Policy
              </DialogTitle>
            </div>
            <DialogClose className="absolute right-0 top-0">
              <Button variant="ghost" size="icon" className="hover:bg-carnival-red/10">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-carnival-brown mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground/80">
            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">1. Information We Collect</h3>
              <p className="leading-relaxed">
                We collect information that you provide directly to us when registering for Vizphoria events, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Educational institution details</li>
                <li>Event preferences and registrations</li>
                <li>Payment information (processed securely through our payment partners)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">2. How We Use Your Information</h3>
              <p className="leading-relaxed">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your event registrations and ticket purchases</li>
                <li>Send important event updates and notifications</li>
                <li>Improve our services and user experience</li>
                <li>Communicate about upcoming events and special offers</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">3. Information Security</h3>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Secure data storage practices</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">4. Contact Us</h3>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none pl-6 space-y-2">
                <li>Email: vizphoria@atriauniversity.edu.in</li>
                <li>Phone: +91 63781 30528</li>
                <li>Address: Atria University, Bangalore</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
