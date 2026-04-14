"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { motion, Variants } from "framer-motion"

export default function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const stats = [
    { number: 12000, label: "Cars Washed", icon: "🚗", color: "#0EA5E9" },
    { number: 850, label: "Happy Clients", icon: "😊", color: "#22D3EE" },
    { number: 15, label: "Expert Staff", icon: "👨‍🔧", color: "#FFD700" },
    { number: 5, label: "Years Experience", icon: "⭐", color: "#38BDF8" }
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

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-400 rounded-full filter blur-[120px] opacity-15" />

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="text-secondary-300">📊</span>
            <span className="text-sm text-gray-300">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={statVariants}
            >
              <div className="card-premium p-8 rounded-2xl text-center group hover:shadow-glow-md transition-shadow duration-300">
                {/* Icon badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)`,
                    border: `2px solid ${stat.color}60`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Animated number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {inView && <CountUp end={stat.number} duration={2.5} />}
                  {stat.number >= 1000 ? "+" : "+"}
                </motion.div>

                {/* Label */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary-400/30 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Want to be part of our success story?</p>
          <button className="btn-primary px-8 py-3 rounded-xl font-semibold text-white">
            Book Your Wash Today →
          </button>
        </motion.div>

      </div>
    </section>
  )
}