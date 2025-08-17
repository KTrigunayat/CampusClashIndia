import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Shield, Users, Trophy, Gamepad, Clock } from 'lucide-react';

const RulesAndFormat = () => {
  const handleDownloadRules = undefined;

  const rules = [
    {
      title: "General Rules",
      icon: <Shield className="w-6 h-6" />,
      rules: [
        "All players must be college students with valid ID",
        "Teams must consist of exactly 4 players",
        "No use of third-party software or cheats",
        "Fair play and sportsmanship required",
        "Organizers' decisions are final"
      ]
    },
    {
      title: "Game Rules",
      icon: <Gamepad className="w-6 h-6" />,
      rules: [
        "BGMI version 2.9 or higher required",
        "Custom room codes will be provided",
        "Anti-cheat system will be active",
        "Screenshots may be required",
        "Disconnection rules apply"
      ]
    },
    {
      title: "Tournament Format",
      icon: <Trophy className="w-6 h-6" />,
      rules: [
        "Registration: 15 Aug – 10 Sep (Target: 60,000+ players / 15,000 teams)",
        "Offline College Qualifiers: 20 Aug – 15 Sep (30+ colleges; Top 4 → Regionals)",
        "Online Qualifiers Phase 1: 10–20 Sep (Single match elimination; Groups of 20; Top 2 → Phase 2)",
        "Online Qualifiers Phase 2: 20–29 Sep (2 custom matches; Groups of 20; Top 4 → State)",
        "State Level: 1–8 Oct (3 custom matches; Top 5 per group → Regionals)",
        "Regionals: 9–15 Oct (4 custom matches; Top 6 per group → National Semi-finals)",
        "National Semi-finals: 15–19 Oct (6 custom matches; Top 15 → Nationals Finals)",
        "Grand Finale LAN: 31 Oct – 1 Nov at IIT Kharagpur (8 matches; 16 teams: 15 qualified + 1 invited)"
      ]
    },
    {
      title: "Technical Requirements",
      icon: <Clock className="w-6 h-6" />,
      rules: [
        "Stable internet connection required",
        "Minimum 4GB RAM, 2GB free storage",
        "Android 5.1+ or iOS 9.0+",
        "Discord for team communication",
        "Backup device recommended"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ai-light to-ai-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Rules & Format
          </h2>
          <p className="text-ai-muted text-lg max-w-2xl mx-auto">
            Complete tournament rules and format details for Campus Clash India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rules.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-ai-card rounded-xl p-6 shadow-lg border border-ai-border hover:border-ai-primary/30 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-ai-primary/10 text-ai-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start gap-3 text-ai-muted">
                    <div className="w-2 h-2 bg-ai-primary rounded-full mt-2 flex-shrink-0" />
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
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <a href="RuleBook.pdf" download="CampusClashIndia_Rulebook.pdf">
              <span className="inline-flex items-center gap-3">
                <Download className="w-5 h-5" />
                Download Complete Rulebook
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesAndFormat;
