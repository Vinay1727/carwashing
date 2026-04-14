"use client"

import { motion, Variants } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Plan = {
  name: string
  price: string
  features: string[]
  popular?: boolean
  gradient: string
  accentColor: string
}

export default function Pricing() {

  const plans: Plan[] = [
    {
      name: "Basic Wash",
      price: "$19",
      features: [
        "Exterior Foam Wash",
        "Wheel Cleaning",
        "Quick Dry Finish",
        "Window Cleaning"
      ],
      gradient: "from-sky-500 to-blue-600",
      accentColor: "#0EA5E9"
    },
    {
      name: "Premium Detail",
      price: "$49",
      features: [
        "Everything in Basic",
        "Interior Vacuum",
        "Dashboard Polish",
        "Tire Shine",
        "Air Freshener"
      ],
      popular: true,
      gradient: "from-cyan-400 to-blue-500",
      accentColor: "#22D3EE"
    },
    {
      name: "Ultimate Shine",
      price: "$89",
      features: [
        "Everything in Premium",
        "Hand Wax Polish",
        "Ceramic Protection",
        "Interior Deep Clean",
        "Leather Conditioning",
        "Engine Bay Clean"
      ],
      gradient: "from-amber-400 to-orange-500",
      accentColor: "#FFD700"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-glow rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-[120px] opacity-15" />

      {/* Floating particles */}
      <div className="absolute inset-0 particle-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 15 + 8}px`,
              height: `${Math.random() * 15 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            >
              <span className="text-accent">💎</span>
              <span className="text-sm text-gray-300">Transparent Pricing</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              No hidden fees. Professional service at your doorstep.
              <br />Upgrade or downgrade anytime.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative card-premium rounded-2xl p-8 ${
                plan.popular
                  ? "border-secondary-400/50 shadow-glow-md"
                  : "border-gray-700/50"
              }`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary-400 to-primary-500 px-6 py-2 rounded-full text-sm font-semibold text-white shadow-glow-sm">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <span className="text-5xl font-bold" style={{ color: plan.accentColor }}>
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">/session</span>
              </motion.div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={{ background: `linear-gradient(135deg, ${plan.accentColor}40, ${plan.accentColor}20)` }}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-4 rounded-xl font-semibold relative overflow-hidden ${
                  plan.popular
                    ? "btn-primary text-white"
                    : "glass border border-gray-600 hover:border-gray-500 text-white"
                }`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Get Started</span>
                {plan.popular && <div className="absolute inset-0 animate-shimmer" />}
              </motion.button>

              {/* Trust text */}
              <p className="text-center text-xs text-gray-500 mt-4">
                No commitment • Cancel anytime
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee badge */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 glass px-6 py-4 rounded-2xl">
              <div className="text-3xl">🔒</div>
              <div className="text-left">
                <p className="text-white font-semibold">100% Satisfaction Guarantee</p>
                <p className="text-sm text-gray-400">Not happy? We'll re-clean for free</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  )
}