"use client"

import { motion, Variants } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Service = {
  title: string
  desc: string
  icon: string
  gradient: string
}

export default function Services() {

  const services: Service[] = [
    {
      title: "Exterior Wash",
      desc: "Complete exterior cleaning using premium foam wash technology.",
      icon: "🚿",
      gradient: "from-sky-500 to-cyan-400"
    },
    {
      title: "Interior Cleaning",
      desc: "Deep interior vacuum, dashboard polish and upholstery care.",
      icon: "🧼",
      gradient: "from-blue-500 to-indigo-400"
    },
    {
      title: "Full Detailing",
      desc: "Professional detailing with multi-step polishing and waxing.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Ceramic Coating",
      desc: "Long-lasting nano protection for your car paint finish.",
      icon: "🛡️",
      gradient: "from-amber-400 to-orange-300"
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

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-400 rounded-full filter blur-[120px] opacity-15" />

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
              <span className="text-secondary-300">⚡</span>
              <span className="text-sm text-gray-300">Our Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Premium <span className="text-gradient">Car Care</span> Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              From basic wash to ceramic coating - we offer comprehensive car care
              solutions delivered right to your doorstep.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group card-premium p-6 rounded-2xl relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon with glow */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-3xl mb-4 border border-gray-700 group-hover:border-transparent group-hover:shadow-glow-md transition-all duration-300">
                  {service.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Learn more link */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-sm text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-4">Need a custom package for your fleet?</p>
            <button className="glass border border-primary-400/50 px-8 py-3 rounded-xl font-semibold text-white hover:bg-primary-400/20 transition-all hover:shadow-glow-md">
              Contact Us →
            </button>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  )
}