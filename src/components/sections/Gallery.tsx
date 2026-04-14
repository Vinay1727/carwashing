"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "ceramic", label: "Ceramic" }
  ]

  const images = [
    { src: "/images/car1.jpg", category: "exterior", title: "Full Exterior Wash" },
    { src: "/images/car2.jpg", category: "interior", title: "Interior Detailing" },
    { src: "/images/car3.jpg", category: "ceramic", title: "Ceramic Coating" },
    { src: "/images/car4.jpg", category: "exterior", title: "Foam Blast" },
    { src: "/images/car5.jpg", category: "interior", title: "Leather Care" },
    { src: "/images/car6.jpg", category: "exterior", title: "Final Shine" },
  ]

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter(img => img.category === activeCategory)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section className="w-full py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-400 rounded-full filter blur-[120px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            >
              <span className="text-accent">📸</span>
              <span className="text-sm text-gray-300">Our Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              See The <span className="text-gradient">Transformation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              From dull to dazzling - witness the magic we bring to every vehicle.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "btn-primary text-white"
                    : "glass border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Image grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredImages.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 card-premium"
              variants={itemVariants}
              layout
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[280px] object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs text-secondary-300 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {item.title}
                </h3>
              </motion.div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary-400/50 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Before/After CTA */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl inline-block max-w-2xl">
              <p className="text-gray-300 mb-4">Want to see the dramatic difference?</p>
              <button className="btn-gold px-8 py-3 rounded-xl font-semibold">
                View Before/After Gallery →
              </button>
            </div>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  )
}