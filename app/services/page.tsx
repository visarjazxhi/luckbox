"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, CheckCircle } from "lucide-react"

const services = [
  {
    title: "One-on-One Coaching",
    description: "Personalized coaching sessions tailored to your specific needs and goals.",
    image: "/one-on-one-coaching.jpg",
    features: [
      "In-depth analysis of your playing style",
      "Customized strategy development",
      "Real-time feedback on live play",
      "Homework and study materials",
    ],
  },
  {
    title: "Group Workshops",
    description: "Interactive group sessions focusing on specific poker topics and strategies.",
    image: "/group-workshops.jpg",
    features: [
      "Collaborative learning environment",
      "Topic-focused instruction",
      "Q&A sessions with expert coaches",
      "Networking opportunities",
    ],
  },
  {
    title: "Online Courses",
    description: "Comprehensive video courses covering various aspects of poker strategy.",
    image: "/online-courses.jpg",
    features: [
      "24/7 access to course materials",
      "Quizzes and interactive exercises",
      "Regular content updates",
      "Community forum for discussions",
    ],
  },
  {
    title: "Live Game Analysis",
    description: "Expert review and analysis of your live poker sessions.",
    image: "/live-game-analysis.jpg",
    features: [
      "Detailed breakdown of key hands",
      "Identification of leaks in your game",
      "Strategic adjustments for different opponents",
      "Personalized improvement plan",
    ],
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image src="/services-hero.jpg" alt="Poker chips and cards" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">Elevate Your Poker Game with Expert Guidance</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Comprehensive Poker Training Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="flex items-center text-blue-600 dark:text-blue-400 font-semibold"
                  >
                    Learn More
                    <ChevronDown
                      className={`ml-2 transform transition-transform ${expandedService === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedService === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-2"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                quote:
                  "The one-on-one coaching sessions have completely transformed my game. I've seen a significant improvement in my win rate since working with LuckBox.",
                image: "/testimonial-1.jpg",
              },
              {
                name: "Sarah Chen",
                quote:
                  "The group workshops provide an excellent opportunity to learn from both the coaches and fellow players. The collaborative environment is incredibly valuable.",
                image: "/testimonial-2.jpg",
              },
              {
                name: "Mike Rodriguez",
                quote:
                  "The online courses are comprehensive and well-structured. I appreciate being able to learn at my own pace and revisit materials whenever I need a refresher.",
                image: "/testimonial-3.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Elevate Your Poker Game?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Choose the service that best fits your needs and start your journey to poker mastery today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  )
}

