"use client"

import { motion, Variants } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Step = {
  step: string
  title: string
  desc: string
  icon: string
  gradient: string
}

export default function Process() {

  const steps: Step[] = [
    {
      step: "01",
      title: "Book Online",
      desc: "Select your package and schedule in 60 seconds.",
      icon: "📅",
      gradient: "from-sky-500 to-cyan-400"
    },
    {
      step: "02",
      title: "We Come to You",
      desc: "Our team arrives at your home with all equipment.",
      icon: "🚐",
      gradient: "from-blue-500 to-indigo-400"
    },
    {
      step: "03",
      title: "Premium Cleaning",
      desc: "Expert detailing using professional-grade products.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      step: "04",
      title: "Shine & Go",
      desc: "Drive away with a showroom-quality finish.",
      icon: "🚗",
      gradient: "from-amber-400 to-orange-300"
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

  const stepVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const connectorVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, delay: 0.3 }
    }
  }

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-500 rounded-full filter blur-[100px] opacity-15" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary-400 rounded-full filter blur-[120px] opacity-10" />

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
              <span className="text-secondary-300">🔄</span>
              <span className="text-sm text-gray-300">How It Works</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Simple <span className="text-gradient">4 Steps</span> to Shine
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              From booking to brilliance - we make car care effortless
              with our doorstep service.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={stepVariants}
            >
              {/* Connector line (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-400"
                    variants={connectorVariants}
                  />
                </div>
              )}

              {/* Step card */}
              <div className="card-premium p-6 rounded-2xl h-full relative overflow-hidden group">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Step number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 text-white font-bold text-lg shadow-glow-sm`}
                >
                  {item.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <button className="btn-primary px-10 py-4 rounded-xl font-semibold text-white">
              🚀 Get Started Now
            </button>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  )
}