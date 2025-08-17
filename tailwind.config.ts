import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundSize: {
        "300%": "300%",
      },
      colors: {
        // Base color definitions
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Custom color scheme
        ai: {
          primary: "#F97316",
          secondary: "#FBBF24",
          accent: "#F59E0B",
          dark: "#0A0A0A",
          darker: "#000000",
          light: "#1A1A1A",
          surface: "#1E1E1E",
          muted: "#6B7280",
          border: "#2D2D2D",
          card: "#1F1F1F",
          hover: "#2A2A2A",
          // Gradient configurations
          gradient: {
            from: "#F97316",
            via: "#F59E0B",
            to: "#FBBF24"
          },
          darkGradient: {
            from: "#0A0A0A",
            via: "#1A1A1A",
            to: "#2A2A2A"
          }
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ai: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(5deg) scale(1.1)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(249, 115, 22, 0.5), 0 0 20px rgba(245, 158, 11, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(249, 115, 22, 0.8), 0 0 30px rgba(245, 158, 11, 0.5)" 
          }
        },
        parallax: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" }
        },
        cardHover: {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-8px) scale(1.02)" }
        },
        cardGlow: {
          "0%": { boxShadow: "0 4px 20px rgba(99, 102, 241, 0.1)" },
          "100%": { boxShadow: "0 8px 40px rgba(99, 102, 241, 0.3)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        ai: "ai 3s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        glow: "glow 3s ease-in-out infinite",
        parallax: "parallax 15s ease-in-out infinite",
        cardHover: "cardHover 0.3s ease-out forwards",
        cardGlow: "cardGlow 0.3s ease-out forwards"
      },
      backgroundImage: {
        "ai-pattern": "url('/carnival-pattern.svg')",
        "hero-gradient": "linear-gradient(135deg, #F97316 0%, #F59E0B 50%, #FBBF24 100%)",
        "ai-gradient": "linear-gradient(135deg, #F97316 0%, #F59E0B 100%)",
        "tech-gradient": "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)",
        "dark-gradient": "linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #1A1A1A 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;