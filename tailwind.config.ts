import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Ocean Theme
                primary: {
                    DEFAULT: "#0EA5E9",    // Bright sky blue - energy, water
                    50: "#F0F9FF",
                    100: "#E0F2FE",
                    200: "#BAE6FD",
                    300: "#7DD3FC",
                    400: "#38BDF8",
                    500: "#0EA5E9",
                    600: "#0284C7",
                    700: "#0369A1",
                    800: "#075985",
                    900: "#0C4A6E",
                },
                secondary: {
                    DEFAULT: "#22D3EE",    // Electric cyan - modern, energetic
                    50: "#ECFEFF",
                    100: "#CFFAFE",
                    200: "#A5F3FC",
                    300: "#67E8F9",
                    400: "#22D3EE",
                    500: "#06B6D4",
                    600: "#0891B2",
                    700: "#0E7490",
                    800: "#155E78",
                    900: "#164E63",
                },
                accent: {
                    DEFAULT: "#FFD700",    // Gold - premium, quality
                    50: "#FFFAE6",
                    100: "#FFF4C1",
                    200: "#FFE579",
                    300: "#FFD740",
                    400: "#FFD000",
                    500: "#FFD700",
                    600: "#C79100",
                    700: "#966D00",
                    800: "#7A5A00",
                    900: "#664B00",
                },
                dark: {
                    DEFAULT: "#0B1120",    // Deep navy - premium background
                    100: "#151F32",        // Card surfaces
                    200: "#1E2940",        // Elevated
                    300: "#2A3855",        // Borders
                },
                glow: {
                    DEFAULT: "#38BDF8",    // Soft glow effect
                    cyan: "#22D3EE",
                    gold: "#FFD700",
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-ocean": "linear-gradient(135deg, #0B1120 0%, #151F32 50%, #0B1120 100%)",
                "gradient-glow": "linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)",
                "gradient-gold": "linear-gradient(135deg, #FFD700 0%, #FFE579 100%)",
                "gradient-dark": "linear-gradient(180deg, #0B1120 0%, #151F32 100%)",
            },
            boxShadow: {
                "glow-sm": "0 0 10px rgba(14, 165, 233, 0.5)",
                "glow-md": "0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(34, 211, 238, 0.3)",
                "glow-lg": "0 0 30px rgba(14, 165, 233, 0.7), 0 0 60px rgba(34, 211, 238, 0.4)",
                "glow-gold": "0 0 20px rgba(255, 215, 0, 0.6)",
                "premium": "0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(14, 165, 233, 0.1)",
            },
            animation: {
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "ripple": "ripple 1.5s ease-out infinite",
                "gradient": "gradient 3s ease infinite",
                "float": "float 3s ease-in-out infinite",
                "fade-up": "fade-up 0.6s ease-out forwards",
                "fade-in": "fade-in 0.4s ease-out forwards",
                "scale-in": "scale-in 0.3s ease-out forwards",
                "slide-left": "slide-left 0.5s ease-out forwards",
                "slide-right": "slide-right 0.5s ease-out forwards",
                "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
            },
            keyframes: {
                "pulse-glow": {
                    "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(14, 165, 233, 0.6)" },
                    "50%": { opacity: "0.8", boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)" },
                },
                ripple: {
                    "0%": { transform: "scale(0)", opacity: "1" },
                    "100%": { transform: "scale(1.5)", opacity: "0" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "slide-left": {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "slide-right": {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "bounce-subtle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
                "4xl": "2rem",
            }
        },
    },
    plugins: [],
};

export default config;