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
import { FileText, X } from "lucide-react";

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceModal = ({ open, onOpenChange }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-gradient-to-b from-carnival-cream to-white border-2 border-carnival-red/20 shadow-xl">
        <DialogHeader className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-carnival-red" />
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-carnival-red to-carnival-darkRed bg-clip-text text-transparent">
                Terms of Service
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
              <h3 className="font-semibold text-lg text-carnival-darkRed">1. Acceptance of Terms</h3>
              <p className="leading-relaxed">
                By accessing and participating in Vizphoria events, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">2. Event Registration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registration is required for participation in all events</li>
                <li>Participants must provide accurate and complete information</li>
                <li>Registration fees are non-refundable unless stated otherwise</li>
                <li>Age restrictions may apply to certain events</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">3. Code of Conduct</h3>
              <p className="leading-relaxed">All participants must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Behave professionally and respectfully towards others</li>
                <li>Follow event rules and guidelines</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with safety instructions and protocols</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">4. Liability</h3>
              <p className="leading-relaxed">
                Atria University and Vizphoria organizers are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal injury or property damage during events</li>
                <li>Lost or stolen items</li>
                <li>Technical difficulties or event cancellations</li>
                <li>Third-party actions or content</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-semibold text-lg text-carnival-darkRed">5. Changes to Terms</h3>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
