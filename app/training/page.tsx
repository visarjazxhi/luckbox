"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Play, BookOpen, Users, Monitor } from "lucide-react"

const trainingPrograms = [
  {
    title: "Fundamentals Mastery",
    description: "Master the core concepts and strategies essential for any serious poker player.",
    icon: BookOpen,
    modules: [
      "Poker Hand Rankings",
      "Position and Its Importance",
      "Preflop Strategy",
      "Postflop Basics",
      "Bankroll Management",
    ],
    level: "Beginner",
    duration: "4 weeks",
  },
  {
    title: "Advanced Techniques",
    description: "Take your game to the next level with advanced strategies and in-depth analysis.",
    icon: Users,
    modules: [
      "GTO vs. Exploitative Play",
      "Range Analysis",
      "Multi-Street Decision Making",
      "Advanced Bluffing Techniques",
      "Tournament Specific Strategies",
    ],
    level: "Intermediate",
    duration: "6 weeks",
  },
  {
    title: "Mental Game Mastery",
    description: "Develop the psychological skills needed to perform at your best under pressure.",
    icon: Monitor,
    modules: [
      "Tilt Control",
      "Mindfulness for Poker",
      "Goal Setting and Motivation",
      "Dealing with Variance",
      "Peak Performance Techniques",
    ],
    level: "All Levels",
    duration: "4 weeks",
  },
]

export default function Training() {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image src="/training-hero.jpg" alt="Poker training session" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">LuckBox Training Programs</h1>
          <p className="text-xl md:text-2xl text-gray-200">Elevate Your Poker Skills with Expert-Led Training</p>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Our Comprehensive Training Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <program.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Level: {program.level}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Duration: {program.duration}
                    </span>
                  </div>
                  <button
                    onClick={() => setExpandedProgram(expandedProgram === index ? null : index)}
                    className="flex items-center text-blue-600 dark:text-blue-400 font-semibold"
                  >
                    View Modules
                    <ChevronDown
                      className={`ml-2 transform transition-transform ${expandedProgram === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedProgram === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-2"
                    >
                      {program.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-start">
                          <Play className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 dark:text-gray-300">{module}</span>
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

      {/* Training Methods Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Our Training Methods</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Live Online Workshops",
                description:
                  "Participate in interactive sessions led by poker pros, with real-time Q&A and hand analysis.",
                image: "/live-workshop.jpg",
              },
              {
                title: "On-Demand Video Lessons",
                description:
                  "Access a library of in-depth video lessons covering various poker topics, available 24/7.",
                image: "/video-lessons.jpg",
              },
              {
                title: "One-on-One Coaching",
                description:
                  "Get personalized guidance and feedback from experienced coaches to rapidly improve your game.",
                image: "/one-on-one-coaching.jpg",
              },
              {
                title: "Practice Tournaments",
                description:
                  "Apply your skills in simulated tournament environments with post-game analysis and feedback.",
                image: "/practice-tournament.jpg",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="md:w-1/2">
                  <Image
                    src={method.image || "/placeholder.svg"}
                    alt={method.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">What Our Students Say</h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl italic mb-4 text-gray-600 dark:text-gray-300">
                &quot;The LuckBox training program has completely transformed my poker game. The combination of expert
                instruction, practical exercises, and personalized feedback helped me identify and fix leaks in my game
                that I didn&apos;t even know existed. I&apos;ve seen a significant improvement in my win rate since completing the
                program.&quot;
              </p>
              <footer className="text-gray-500 dark:text-gray-400">- Sarah J., Tournament Circuit Player</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Poker Game?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our training programs and start your journey towards poker mastery today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  )
}

