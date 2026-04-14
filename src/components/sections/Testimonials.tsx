"use client"

import { motion, Variants } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing service! My car looks brand new. The team arrived on time and the finish is incredible.",
      rating: 5,
      car: "BMW 3 Series",
      image: "😊"
    },
    {
      name: "Aman Verma",
      text: "Professional staff and quick service. Booked through the app and they came the same day!",
      rating: 5,
      car: "Audi Q5",
      image: "😎"
    },
    {
      name: "Ritika Jain",
      text: "Best car detailing experience I've ever had. The ceramic coating is worth every penny.",
      rating: 5,
      car: "Mercedes C-Class",
      image: "🥰"
    },
    {
      name: "Sahil Khan",
      text: "Highly recommended for premium cleaning. My friends can't believe this is mobile service!",
      rating: 5,
      car: "Porsche 911",
      image: "🤩"
    },
    {
      name: "Priya Kapoor",
      text: "Super shiny finish and great staff. They even cleaned areas I forgot to mention!",
      rating: 5,
      car: "Tesla Model 3",
      image: "✨"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-secondary-400 rounded-full filter blur-[120px] opacity-15" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-400 rounded-full filter blur-[100px] opacity-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 particle-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
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
              <span className="text-accent">⭐</span>
              <span className="text-sm text-gray-300">Customer Reviews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Loved by <span className="text-gradient-gold">500+ Customers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Don't just take our word for it - hear from our happy customers
              about their experience.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Featured review (large card) */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative card-premium p-8 rounded-3xl max-w-3xl mx-auto overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-glow rounded-full filter blur-[80px] opacity-20" />

              {/* Quote icon */}
              <div className="text-6xl text-secondary-400/30 font-serif absolute top-4 left-6">"</div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Review text */}
                <motion.p
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl text-gray-200 mb-6 leading-relaxed"
                >
                  {reviews[activeIndex].text}
                </motion.p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-400 to-primary-500 flex items-center justify-center text-2xl">
                    {reviews[activeIndex].image}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{reviews[activeIndex].name}</p>
                    <p className="text-sm text-gray-400">{reviews[activeIndex].car} Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Thumbnail navigation */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-3 flex-wrap"
          >
            {reviews.map((review, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all ${
                  activeIndex === index
                    ? "bg-gradient-glow border-2 border-secondary-400 scale-110"
                    : "glass border border-gray-600 hover:border-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {review.image}
              </motion.button>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="glass px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold text-gradient">4.9/5</p>
                <p className="text-xs text-gray-400 mt-1">Average Rating</p>
              </div>
              <div className="glass px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold text-gradient">500+</p>
                <p className="text-xs text-gray-400 mt-1">Reviews</p>
              </div>
              <div className="glass px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold text-gradient">98%</p>
                <p className="text-xs text-gray-400 mt-1">Recommend</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  )
}