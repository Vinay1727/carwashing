"use client"

import CarScene from "@/components/3D/CarScene"
import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-90" />

      {/* Floating particles */}
      <div className="absolute inset-0 particle-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400 rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Ripple effects */}
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-secondary-400 rounded-full opacity-30 animate-ripple" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-primary-400 rounded-full opacity-20 animate-ripple" style={{ animationDelay: "0.5s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-[0.9fr_1.3fr] items-center gap-8 relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          className="max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          {/* Trust badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Available in your area</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Premium <span className="text-gradient">Car Wash</span>
            <br />& Detailing
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
            variants={itemVariants}
          >
            Professional car cleaning service <span className="text-secondary-300">delivered to your doorstep</span>.
            We come to your home - book in 60 seconds and watch your vehicle shine like new.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex gap-6 mt-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center">
                <span className="text-white font-bold">⭐</span>
              </div>
              <div>
                <p className="text-white font-bold">4.9/5</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center">
                <span className="text-white font-bold">🚗</span>
              </div>
              <div>
                <p className="text-white font-bold">500+</p>
                <p className="text-xs text-gray-500">Cars washed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-glow flex items-center justify-center">
                <span className="text-white font-bold">⏱️</span>
              </div>
              <div>
                <p className="text-white font-bold">60min</p>
                <p className="text-xs text-gray-500">Avg. time</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 mt-8 flex-wrap"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🚀 Book Now</span>
              <div className="absolute inset-0 animate-shimmer" />
            </motion.button>

            <motion.button
              className="glass border border-secondary-400/50 px-8 py-4 rounded-xl font-semibold text-white hover:bg-secondary-400/20 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 flex items-center gap-4 text-sm text-gray-500"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full glass border border-secondary-400/30 flex items-center justify-center text-xs"
                >
                  😊
                </div>
              ))}
            </div>
            <span>Trusted by 500+ happy customers</span>
          </motion.div>
        </motion.div>

        {/* RIGHT 3D MODEL */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow behind car */}
            <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-[80px] rounded-full" />
            <CarScene />
          </div>
        </motion.div>
      </div>
    </section>
  )
}