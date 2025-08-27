import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Copy } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Users, Gamepad, Trophy, Send } from "lucide-react";

// Form validation schema
const phoneRegex = /^[0-9]{10}$/;

const registrationSchema = z.object({
  teamLeaderName: z
    .string()
    .min(2, "Team leader name must be at least 2 characters"),
  teamLeaderID: z.string().min(1, "Team leader BGMI ID is required"),
  player1ID: z.string().min(1, "Player 1 BGMI ID is required"),
  player2ID: z.string().min(1, "Player 2 BGMI ID is required"),
  player3ID: z.string().min(1, "Player 3 BGMI ID is required"),
  player4ID: z.string().min(1, "Player 4 BGMI ID is required"),
  mailID: z.string().email("Please enter a valid email address"),
  collegeName: z.string().min(2, "College name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit number")
    .max(10, "Please enter a valid 10-digit number")
    .regex(phoneRegex, "Please enter a valid 10-digit number"),
  state: z.string().min(1, "Please select your state"),
  player1Contact: z
    .string()
    .min(10, "Please enter a valid 10-digit number")
    .max(10, "Please enter a valid 10-digit number")
    .regex(phoneRegex, "Please enter a valid 10-digit number")
    .optional()
    .or(z.literal("")), // Allow empty string
  player2Contact: z
    .string()
    .min(10, "Please enter a valid 10-digit number")
    .max(10, "Please enter a valid 10-digit number")
    .regex(phoneRegex, "Please enter a valid 10-digit number")
    .optional()
    .or(z.literal("")), // Allow empty string
  player3Contact: z
    .string()
    .min(10, "Please enter a valid 10-digit number")
    .max(10, "Please enter a valid 10-digit number")
    .regex(phoneRegex, "Please enter a valid 10-digit number")
    .optional()
    .or(z.literal("")), // Allow empty string
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const steps = [
  {
    label: "Team Leader",
    fields: ["teamLeaderName", "teamLeaderID"],
  },
  {
    label: "Players",
    fields: [
      "player1ID",
      "player1Contact",
      "player2ID",
      "player2Contact",
      "player3ID",
      "player3Contact",
      "player4ID",
    ],
  },
  {
    label: "Contact & College",
    fields: ["mailID", "collegeName", "whatsappNumber", "state"],
  },
];

/**
 * RegistrationForm Component
 *
 * Validation Strategy:
 * - Step 1 (Team Leader): Validates team leader name and ID when "Next" is clicked
 * - Step 2 (Players): Validates all player IDs and contact numbers when "Next" is clicked
 * - Step 3 (Contact & College): Validates email, college, WhatsApp, and state when "Next" is clicked
 * - Final Submission: Only validates duplicate player IDs across all steps when "Register Team" is clicked
 *
 * This approach provides immediate feedback for each step while avoiding overwhelming users with all errors at once.
 */
const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(0);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [redirectState, setRedirectState] = useState("");
  const [isStateRedirectOpen, setIsStateRedirectOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const clearFormErrors = (fieldName?: string) => {
    // Clear specific field error or all form errors when user is actively typing
    if (fieldName) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    } else {
      setFormErrors({});
    }
  };

  // Show loading overlay during submission
  const renderLoadingOverlay = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="p-8 bg-[#1a1a1a] rounded-2xl border border-[#FFB300]/30 text-center max-w-md">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#FFB300] mx-auto mb-4"></div>
        <h3 className="text-xl font-bold text-[#FFB300] mb-2">
          Submitting Registration
        </h3>
        <p className="text-[#e6e6e6]/80">
          Please wait while we process your registration...
        </p>
      </div>
    </div>
  );

  const onSubmit = async (data: RegistrationFormData) => {
    // Reset form errors
    setFormErrors({});

    // Final validation - only check for duplicate player IDs since step validations are done on Next button
    const errors: Record<string, string> = {};

    // Check for duplicate player IDs (this is the only validation needed at final submission)
    const playerIds = [
      { id: data.teamLeaderID, name: "Team Leader" },
      { id: data.player1ID, name: "Player 1" },
      { id: data.player2ID, name: "Player 2" },
      { id: data.player3ID, name: "Player 3" },
      { id: data.player4ID, name: "Player 4" },
    ].filter((p) => p.id.trim());

    const idCounts: Record<string, string[]> = {};
    playerIds.forEach((player) => {
      if (!idCounts[player.id]) {
        idCounts[player.id] = [];
      }
      idCounts[player.id].push(player.name);
    });

    const duplicates = Object.entries(idCounts).filter(
      ([id, names]) => names.length > 1
    );
    if (duplicates.length > 0) {
      const duplicateDetails = duplicates
        .map(([id, names]) => `${names.join(", ")} (ID: ${id})`)
        .join("; ");
      errors.playerIDs = `Duplicate Player IDs found: ${duplicateDetails}`;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);

      const errorMessages = Object.values(errors).join(", ");
      toast.error(`Validation Errors: ${errorMessages}`, {
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Form submission started with validated data:", data);

    // State-specific registration URLs
    const stateExternalLinks: Record<string, string> = {
      "Andhra Pradesh":
        "https://play.gamecentric.io/tournaments/HATAZEHOXAOCWBG",
      Maharashtra: "https://play.gamecentric.io/tournaments/0APMRI2FVTIY83B",
      "Tamil Nadu": "https://play.gamecentric.io/tournaments/0R041U3XFOP9BL4",
      Telengana: "https://play.gamecentric.io/tournaments/DUIOU42TKPHEGSQ",
      Kerala: "https://play.gamecentric.io/tournaments/B5VJJACQGTGMBB3",
      Karnataka: "https://play.gamecentric.io/tournaments/Y2KO2D3MT6E6NAC",
      "Uttar Pradesh":
        "https://play.gamecentric.io/tournaments/2454ZZEGIZN9DGR",
    };

    try {
      // Prepare registration data
      const registrationData = {
        team_leader_name: data.teamLeaderName.trim(),
        team_leader_id: data.teamLeaderID.trim(),
        player1_id: data.player1ID.trim(),
        player2_id: data.player2ID.trim(),
        player3_id: data.player3ID.trim(),
        player4_id: data.player4ID.trim(),
        mail_id: data.mailID.trim().toLowerCase(),
        college_name: data.collegeName.trim(),
        whatsapp_number: data.whatsappNumber.trim(),
        state: data.state,
        player1_contact_number: data.player1Contact?.trim() || null,
        player2_contact_number: data.player2Contact?.trim() || null,
        player3_contact_number: data.player3Contact?.trim() || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      // Check for duplicate team leader ID or email
      const { data: existingRegistration, error: checkError } = await supabase
        .from("registrations")
        .select("team_leader_id, mail_id")
        .or(
          `team_leader_id.eq.${registrationData.team_leader_id},mail_id.eq.${registrationData.mail_id}`
        )
        .maybeSingle();

      if (existingRegistration) {
        if (
          existingRegistration.team_leader_id ===
          registrationData.team_leader_id
        ) {
          throw new Error(
            "This Team Leader ID is already registered. Please use a different ID."
          );
        }
        if (existingRegistration.mail_id === registrationData.mail_id) {
          throw new Error(
            "This email is already registered. Please use a different email."
          );
        }
      }

      // Insert new registration
      const { data: insertResult, error: insertError } = await supabase
        .from("registrations")
        .insert(registrationData)
        .select()
        .single();

      if (insertError) {
        console.error("Registration failed:", insertError);
        throw new Error(
          insertError.message ||
            "Failed to save registration. Please try again."
        );
      }

      console.log("Registration successful:", insertResult);

    
      const externalUrl = stateExternalLinks[data.state];

      if (externalUrl) {
       
        setRedirectUrl(externalUrl);
        setRedirectState(data.state);
        setIsStateRedirectOpen(true);

       
        toast.message("Additional Step Required", {
          description: `Please complete your registration on the ${data.state} portal.`,
          action: {
            label: "Open Portal",
            onClick: () => window.open(externalUrl, "_blank"),
          },
          duration: 10000, // Show for 10 seconds
        });
      } else {
        // For states without external registration
        toast.success("Registration Successful!", {
          description: "Your team has been registered successfully.",
          duration: 5000,
        });
        // Reset form and go back to first step
        reset();
        setStep(0);
        setFormErrors({});
      }

      return insertResult;
    } catch (error) {
      console.error("Registration error:", error);

      // Handle specific database constraint errors with user-friendly messages
      let errorMessage = "An unexpected error occurred";

      if (error instanceof Error) {
        const errorStr = error.message.toLowerCase();

        if (
          errorStr.includes("uq_registrations_mail_id") ||
          errorStr.includes("mail_id")
        ) {
          errorMessage =
            "This email address is already registered. Please use a different email.";
        } else if (
          errorStr.includes("uq_registrations_team_leader_id") ||
          errorStr.includes("team_leader_id")
        ) {
          errorMessage =
            "This Team Leader ID is already registered. Please use a different ID.";
        } else if (
          errorStr.includes("duplicate key") ||
          errorStr.includes("unique constraint")
        ) {
          errorMessage =
            "This information is already registered. Please check your email and Team Leader ID.";
        } else {
          errorMessage = error.message;
        }
      }

      toast.error("Registration Failed", {
        description: errorMessage,
        duration: 5000,
      });
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const goNext = async () => {
    // Clear all form errors when navigating
    setFormErrors({});

    // Trigger validation for current step only
    const fieldsToValidate = steps[step].fields;
    const isValid = await trigger(
      fieldsToValidate as (keyof RegistrationFormData)[]
    );

    if (isValid) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
      setFormErrors({});
    } else {
      console.log("Invalid form");
    }
  };

  const goBack = () => {

    setFormErrors({});

    setStep((s) => Math.max(s - 1, 0));
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Puducherry",
    "Andaman and Nicobar Islands",
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
            Register your team for Campus Clash India - India's largest college
            BGMI tournament
          </p>
        </motion.div>
        {/* Progress Indicator */}
        <div className="flex justify-center gap-4 mb-8">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center ${
                i === step ? "font-bold text-[#FFB300]" : "text-[#e6e6e6]/60"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  i === step
                    ? "border-[#FFB300] bg-[#18181b]"
                    : "border-[#232323] bg-[#232323]"
                }`}
              >
                {i + 1}
              </div>
              <span className="text-xs mt-1 uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <motion.form
          id="registration-form"
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
                <Label
                  htmlFor="teamLeaderName"
                  className="text-[#FFB300] font-medium"
                >
                  Team Leader Name *
                </Label>
                <Input
                  id="teamLeaderName"
                  {...register("teamLeaderName", {
                    onBlur: () => clearFormErrors("teamLeaderName"),
                  })}
                  className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                    errors.teamLeaderName || formErrors.teamLeaderName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Enter team leader's full name"
                />
                {errors.teamLeaderName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.teamLeaderName.message}
                  </p>
                )}
                {formErrors.teamLeaderName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.teamLeaderName}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="teamLeaderID"
                  className="text-[#FFB300] font-medium"
                >
                  Team Leader BGMI ID *
                </Label>
                <Input
                  id="teamLeaderID"
                  {...register("teamLeaderID", {
                    onBlur: () => clearFormErrors("teamLeaderID"),
                  })}
                  className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                    errors.teamLeaderID || formErrors.teamLeaderID
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Enter team leader's ID"
                />
                {errors.teamLeaderID && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.teamLeaderID.message}
                  </p>
                )}
                {formErrors.teamLeaderID && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.teamLeaderID}
                  </p>
                )}
              </div>
            </div>
          )}
          {/* Step 2: Players */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((playerNum) => (
                <div key={playerNum} className="space-y-4">
                  <div>
                    <Label
                      htmlFor={`player${playerNum}ID`}
                      className="text-[#FFB300] font-medium"
                    >
                      Player {playerNum} BGMI ID *
                    </Label>
                    <Input
                      id={`player${playerNum}ID`}
                      {...register(
                        `player${playerNum}ID` as keyof RegistrationFormData,
                        {
                          onBlur: () => clearFormErrors(`player${playerNum}ID`),
                        }
                      )}
                      className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                        errors[`player${playerNum}ID` as keyof typeof errors] ||
                        formErrors[`player${playerNum}ID`]
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder={`Enter Player ${playerNum} ID`}
                    />
                    {errors[`player${playerNum}ID` as keyof typeof errors] && (
                      <p className="text-red-500 text-sm mt-1">
                        {
                          errors[`player${playerNum}ID` as keyof typeof errors]
                            ?.message
                        }
                      </p>
                    )}
                    {formErrors[`player${playerNum}ID`] && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors[`player${playerNum}ID`]}
                      </p>
                    )}
                  </div>
                  {playerNum < 4 && (
                    <div>
                      <Label
                        htmlFor={`player${playerNum}Contact`}
                        className="text-[#FFB300] font-medium"
                      >
                        Player {playerNum} Contact Number{" "}
                        {playerNum === 1 ? "*" : ""}
                      </Label>
                      <Input
                        id={`player${playerNum}Contact`}
                        {...register(
                          `player${playerNum}Contact` as keyof RegistrationFormData,
                          {
                            onBlur: () =>
                              clearFormErrors(`player${playerNum}Contact`),
                          }
                        )}
                        type="tel"
                        className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                          errors[
                            `player${playerNum}Contact` as keyof typeof errors
                          ] || formErrors[`player${playerNum}Contact`]
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder={`Enter Player ${playerNum} contact number`}
                      />
                      {errors[
                        `player${playerNum}Contact` as keyof typeof errors
                      ] && (
                        <p className="text-red-500 text-sm mt-1">
                          {
                            errors[
                              `player${playerNum}Contact` as keyof typeof errors
                            ]?.message
                          }
                        </p>
                      )}
                      {formErrors[`player${playerNum}Contact`] && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors[`player${playerNum}Contact`]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Step 3: Contact & College */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mailID" className="text-[#FFB300] font-medium">
                  Email ID *
                </Label>
                <Input
                  id="mailID"
                  {...register("mailID", {
                    onBlur: () => clearFormErrors("mailID"),
                  })}
                  className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                    errors.mailID || formErrors.mailID ? "border-red-500" : ""
                  }`}
                  placeholder="Enter team email address"
                />
                {errors.mailID && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mailID.message}
                  </p>
                )}
                {formErrors.mailID && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.mailID}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="collegeName"
                  className="text-[#FFB300] font-medium"
                >
                  College Name *
                </Label>
                <Input
                  id="collegeName"
                  {...register("collegeName", {
                    onBlur: () => clearFormErrors("collegeName"),
                  })}
                  className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                    errors.collegeName || formErrors.collegeName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Enter college name"
                />
                {errors.collegeName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.collegeName.message}
                  </p>
                )}
                {formErrors.collegeName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.collegeName}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="whatsappNumber"
                  className="text-[#FFB300] font-medium"
                >
                  WhatsApp Number *
                </Label>
                <Input
                  id="whatsappNumber"
                  {...register("whatsappNumber", {
                    onBlur: () => clearFormErrors("whatsappNumber"),
                  })}
                  className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] placeholder-[#e6e6e6]/50 ${
                    errors.whatsappNumber || formErrors.whatsappNumber
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Enter WhatsApp number"
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.whatsappNumber.message}
                  </p>
                )}
                {formErrors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.whatsappNumber}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="state" className="text-[#FFB300] font-medium">
                  State *
                </Label>
                <Select
                  onValueChange={(value) => {
                    setValue("state", value);
                    clearFormErrors("state");
                  }}
                >
                  <SelectTrigger
                    className={`mt-1 border-[#232323] focus:border-[#FFB300] bg-[#232323] text-[#e6e6e6] ${
                      errors.state || formErrors.state ? "border-red-500" : ""
                    }`}
                  >
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
                {formErrors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.state}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* General form errors - only show on final step after submission attempt */}
          {step === 2 && formErrors.playerIDs && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-500 text-sm font-medium">
                {formErrors.playerIDs}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            {step > 0 ? (
              <Button
                type="button"
                onClick={goBack}
                className="bg-[#232323] text-[#FFB300] px-6 py-3 rounded-full font-bold hover:bg-[#FFB300] hover:text-black transition-all duration-300"
              >
                Back
              </Button>
            ) : (
              <div />
            )}
            {step < steps.length - 1 ? (
              <Button
                type="button"
                onClick={goNext}
                className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black px-6 py-3 rounded-full font-bold hover:from-[#FF6A00] hover:to-[#FFB300] transition-all duration-300"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black px-6 py-3 rounded-full font-bold hover:from-[#FF6A00] hover:to-[#FFB300] transition-all duration-300"
              >
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
            By registering, you agree to our tournament rules and fair play
            policy.
          </p>
        </motion.div>
        {/* State-specific external registration dialog */}
        <Dialog
          open={isStateRedirectOpen}
          onOpenChange={(open) => {
            setIsStateRedirectOpen(open);
            if (!open) {
              // Reset form when dialog is closed
              reset();
              setStep(0);
              setFormErrors({});
            }
          }}
        >
          <DialogContent className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#FFB300]/30 text-white max-w-md rounded-2xl overflow-hidden p-0">
            <div className="relative">
              {/* Decorative gradient header */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/10 to-[#FF6A00]/10 rounded-t-lg" />

              <DialogHeader className="relative z-10 p-8 pb-6">
                {/* Icon with gradient background */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#FFB300] to-[#FF6A00] mb-4 shadow-lg">
                  <Trophy className="h-7 w-7 text-black" />
                </div>

                <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-[#FFB300] mb-3">
                  One More Step!
                </DialogTitle>

                <DialogDescription className="text-center text-[#e6e6e6]/90 text-base">
                  Your team is registered for{" "}
                  <span className="text-[#FFB300] font-semibold">
                    Campus Clash India
                  </span>
                  !
                  <br />
                  Complete your registration on the {redirectState} portal to
                  secure your spot.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="px-8 pb-8 pt-2 space-y-6">
              <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#2a2a2a] shadow-lg">
                <p className="text-center text-[#e6e6e6] mb-6 text-sm md:text-base">
                  Click the button below to be redirected to the {redirectState}{" "}
                  registration portal.
                </p>

                <div className="flex flex-col space-y-4">
                  {/* Primary CTA Button */}
                  <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#FFB300] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#FFB300] text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[0_0_20px_rgba(255,179,0,0.3)]"
                    onClick={() => {
                      // Track the outbound link click
                      console.log(
                        `Navigating to ${redirectState} portal: ${redirectUrl}`
                      );
                      setIsStateRedirectOpen(false);
                    }}
                  >
                    <Gamepad className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                    <span className="text-lg">
                      Go to {redirectState} Portal
                    </span>
                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Secondary Action */}
                  <div className="flex flex-col items-center space-y-2 pt-2">
                    <p className="text-xs text-[#e6e6e6]/70 text-center">
                      You can also copy this link to open later:
                    </p>
                    <div className="w-full flex items-center bg-[#2a2a2a] rounded-lg p-2 pr-1">
                      <input
                        type="text"
                        readOnly
                        value={redirectUrl}
                        className="flex-1 bg-transparent text-xs text-[#e6e6e6] truncate p-1 outline-none"
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(redirectUrl);
                          toast.success("Link copied to clipboard!");
                        }}
                        className="ml-2 p-1.5 rounded-md hover:bg-[#3a3a3a] transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="w-4 h-4 text-[#FFB300]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setIsStateRedirectOpen(false);
                    reset();
                    setStep(0);
                    setFormErrors({});
                  }}
                  className="text-sm text-[#e6e6e6]/70 hover:text-[#FFB300] transition-colors font-medium"
                >
                  I'll complete this later
                </button>
                <p className="mt-2 text-xs text-[#e6e6e6]/60">
                  Note: You must complete this step to participate in the{" "}
                  {redirectState} qualifiers.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => {
                  setIsStateRedirectOpen(false);
                  reset();
                  setStep(0);
                  setFormErrors({});
                }}
                className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black hover:from-[#FF6A00] hover:to-[#FFB300] mr-2"
              >
                Complete Later
              </Button>
              <Button
                type="button"
                onClick={() => {
                  if (redirectUrl) {
                    window.open(redirectUrl, "_blank");
                    setIsStateRedirectOpen(false);
                    reset();
                    setStep(0);
                    setFormErrors({});
                  }
                }}
                className="bg-gradient-to-r from-[#FFB300] to-[#FF6A00] text-black hover:from-[#FF6A00] hover:to-[#FFB300]"
              >
                Go to {redirectState} Portal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default RegistrationForm;
