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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        carnival: {
          red: "#BF40BF", // Vibrant purple from image
          cream: "#1A002B", // Dark purple background from image
          yellow: "#FF2DCC", // Bright pink/magenta from image
          darkRed: "#33004D", // Darker purple for pills/cards
          brown: "#BF40BF", // Matching vibrant purple
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
        carnival: {
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
            boxShadow: "0 0 5px rgba(191, 64, 191, 0.5), 0 0 20px rgba(255, 45, 204, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(191, 64, 191, 0.8), 0 0 30px rgba(255, 45, 204, 0.5)" 
          }
        },
        parallax: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        carnival: "carnival 3s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        glow: "glow 3s ease-in-out infinite",
        parallax: "parallax 15s ease-in-out infinite"
      },
      backgroundImage: {
        "carnival-pattern": "url('/carnival-pattern.svg')",
        "hero-gradient": "linear-gradient(to right bottom, rgba(191, 64, 191, 0.9), rgba(255, 45, 204, 0.9))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;