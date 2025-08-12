import { motion } from 'framer-motion';
import { FileText, Download, Shield, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RulesAndFormat = () => {
  const handleDownloadRules = () => {
    window.open('https://drive.google.com/file/d/15pApywfal_lzKUeztTh4EYFApSP8IHzE/view?usp=drive_link', '_blank');
  };

  const rules = [
    {
      title: "Team Composition",
      icon: <Users className="w-6 h-6" />,
      rules: [
        "4 players per team (mandatory)",
        "1 substitute player (optional)",
        "All players must be from the same college",
        "Valid student ID required for verification"
      ]
    },
    {
      title: "Game Settings",
      icon: <Target className="w-6 h-6" />,
      rules: [
        "BGMI (Battlegrounds Mobile India) only",
        "Latest version required",
        "Mobile devices only - NO emulators",
        "Room codes provided by organizers"
      ]
    },
    {
      title: "Anti-Cheat Policy",
      icon: <Shield className="w-6 h-6" />,
      rules: [
        "Advanced detection systems active",
        "No third-party software allowed",
        "Screen recording may be required",
        "Violations result in immediate disqualification"
      ]
    },
    {
      title: "Tournament Format",
      icon: <Award className="w-6 h-6" />,
      rules: [
        "Online qualifiers: Multiple waves",
        "Offline rounds: LAN setup at partner colleges",
        "Regional playoffs: Single elimination",
        "LAN finals: Top 16 teams at IIT Kharagpur"
      ]
    }
  ];

  return (
    <section id="rules" className="py-20 bg-gradient-to-b from-carnival-cream to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-carnival-darkRed tracking-tight"
        >
          RULES & FORMAT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-carnival-brown text-lg max-w-3xl mx-auto mb-8">
            Ensure fair play and competitive integrity with our comprehensive tournament rules
          </p>
          <Button
            onClick={handleDownloadRules}
            className="bg-carnival-red hover:bg-carnival-darkRed text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Complete Rulebook
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rules.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-carnival-red/10 hover:border-carnival-red/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-carnival-red/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-carnival-darkRed">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start gap-3 text-carnival-brown">
                    <div className="w-2 h-2 bg-carnival-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-carnival-red/10 to-carnival-yellow/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-carnival-darkRed mb-4">
              Important Reminders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-carnival-darkRed mb-2">Before Tournament:</h4>
                <ul className="text-sm text-carnival-brown space-y-1">
                  <li>• Update BGMI to latest version</li>
                  <li>• Test your device and internet connection</li>
                  <li>• Join official Discord/WhatsApp groups</li>
                  <li>• Read complete rulebook thoroughly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-carnival-darkRed mb-2">During Matches:</h4>
                <ul className="text-sm text-carnival-brown space-y-1">
                  <li>• Join room 15 minutes before start time</li>
                  <li>• Keep screen recording enabled</li>
                  <li>• Follow admin instructions promptly</li>
                  <li>• Report any technical issues immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesAndFormat;
