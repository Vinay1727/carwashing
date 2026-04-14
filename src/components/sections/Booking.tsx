"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    service: "",
    date: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking:", formData)
    alert("Booking submitted! We'll contact you soon.")
  }

  const inputVariants: Variants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
      borderColor: "rgba(34, 211, 238, 0.5)"
    }
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)"
    },
    tap: { scale: 0.97 }
  }

  return (
    <section className="w-full py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-glow rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-[120px] opacity-15" />

      {/* Floating particles */}
      <div className="absolute inset-0 particle-container">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 18 + 10}px`,
              height: `${Math.random() * 18 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="text-accent">📅</span>
            <span className="text-sm text-gray-300">Easy Booking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-gradient">Car Wash</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule your premium car care service in just a few seconds.
            We come to your doorstep!
          </p>
        </motion.div>

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium p-8 md:p-10 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <motion.div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <motion.input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-dark-200 border border-gray-700 p-4 rounded-xl outline-none text-white placeholder-gray-500 transition-all focus:border-secondary-400 focus:bg-dark-300"
                variants={inputVariants}
                whileFocus="focus"
                required
              />
            </motion.div>

            {/* Phone */}
            <motion.div>
              <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
              <motion.input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-dark-200 border border-gray-700 p-4 rounded-xl outline-none text-white placeholder-gray-500 transition-all focus:border-secondary-400 focus:bg-dark-300"
                variants={inputVariants}
                whileFocus="focus"
                required
              />
            </motion.div>

            {/* Car Model */}
            <motion.div>
              <label className="block text-sm text-gray-400 mb-2">Car Model</label>
              <motion.input
                type="text"
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                placeholder="e.g., BMW 3 Series, Tesla Model 3"
                className="w-full bg-dark-200 border border-gray-700 p-4 rounded-xl outline-none text-white placeholder-gray-500 transition-all focus:border-secondary-400 focus:bg-dark-300"
                variants={inputVariants}
                whileFocus="focus"
                required
              />
            </motion.div>

            {/* Service */}
            <motion.div>
              <label className="block text-sm text-gray-400 mb-2">Select Service</label>
              <motion.select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-dark-200 border border-gray-700 p-4 rounded-xl outline-none text-white transition-all focus:border-secondary-400 focus:bg-dark-300 cursor-pointer"
                variants={inputVariants}
                whileFocus="focus"
                required
              >
                <option value="" disabled>Choose a package</option>
                <option value="basic">Basic Wash - $19</option>
                <option value="premium">Premium Detail - $49</option>
                <option value="ultimate">Ultimate Shine - $89</option>
              </motion.select>
            </motion.div>

            {/* Date */}
            <motion.div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">Preferred Date</label>
              <motion.input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-dark-200 border border-gray-700 p-4 rounded-xl outline-none text-white transition-all focus:border-secondary-400 focus:bg-dark-300"
                variants={inputVariants}
                whileFocus="focus"
                required
              />
            </motion.div>

            {/* Submit button */}
            <motion.div className="md:col-span-2">
              <motion.button
                type="submit"
                className="btn-primary w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">🚀 Confirm Booking</span>
                <div className="absolute inset-0 animate-shimmer" />
              </motion.button>
            </motion.div>

            {/* Trust text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 text-center text-sm text-gray-500"
            >
              <span>🔒 No payment required now</span>
              <span className="mx-2">•</span>
              <span>Free cancellation up to 24 hours before</span>
            </motion.div>

          </form>
        </motion.div>

        {/* Alternative CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 mb-3">Prefer to talk?</p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-white hover:bg-primary-400/20 transition-all"
          >
            <span>📞</span>
            <span>Call +91 98765 43210</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}