"use client";

import { Club, Heart, Medal, SpadeIcon as Spades, Trophy } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  useTheme();

  const slides = [
    {
      title: "Master The Art of Poker",
      subtitle:
        "Turn luck into skill with our comprehensive poker training platform.",
      image: "/slide2.jpg",
      shadeIntensity: 100,
    },
    {
      title: "Beyond The Luck Box",
      subtitle: "Learn to create your own luck through strategy and expertise.",
      image: "/slide1.jpg",
      shadeIntensity: 50,
    },
  ];

  const achievements = [
    {
      rank: "1st",
      icon: Medal,
      title: "Tournament Excellence",
      description: "Over $500,000 in live tournament winnings",
      color: "text-yellow-500",
    },
    {
      rank: "1st",
      icon: Trophy,
      title: "Cash Game Mastery",
      description: "High stakes cash game specialist",
      color: "text-yellow-500",
    },
    {
      rank: "2nd",
      icon: Medal,
      title: "Online Success",
      description: "Multiple final table appearances in major events",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Slider slides={slides} />

      {/* About Section */}
      <section className="relative py-20 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 lg:pr-20 z-10">
              <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                Welcome to LuckBox
              </h2>
              <h3 className="text-4xl font-bold mb-6 text-gray-700 dark:text-gray-200">
                Coaching
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Have you been thinking about making the step to become a better
                poker player, but are overwhelmed by all the different training
                sites, poker charts and solvers involved with improving?
              </p>
              <p className="text-xl italic text-gray-600 dark:text-gray-300 mb-8">
                Then you have come to the right place.
              </p>
              <Link
                href="/book"
                className="inline-block bg-[#e9b949] hover:bg-[#d4a73b] text-black px-8 py-3 rounded font-semibold transition-colors"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative h-[800px] w-full overflow-hidden">
                <div className="absolute inset-0 transform lg:skew-x-12 lg:-skew-y-6 scale-110 origin-top-right">
                  <div className="h-full w-full bg-gradient-to-br from-transparent to-black/20">
                    <Image
                      src="/graph2.jpg"
                      alt="Poker coaching and training"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Achievements Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={`card-pattern-row-${Math.floor(i / 8)}-col-${i % 8}`}
                className="text-4xl text-gray-700"
              >
                ♠♥♣♦
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Notable Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 20+ five-figure cashes in poker tournaments both in live
              and online poker, along with significant winning cash game
              sessions in No Limit Holdem and Pot Limit Omaha across Macau, Las
              Vegas, and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-6">
                    <achievement.icon
                      className={`w-16 h-16 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-2xl text-center font-bold mb-4 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-center text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Card Suit Icons */}
          <div className="flex justify-center space-x-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Spades className="w-12 h-12 text-red-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Club className="w-12 h-12 text-red-600" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Your Coach Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Meet Your Coach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from a seasoned professional with a proven track record in both live and online poker.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <Image
                src="/mentor.jpg"
                alt="Your Poker Coach"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 lg:pl-12"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Patrick &quot;LuckBox&quot; Barba</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                With over a decade of experience in professional poker, Patrick has honed his skills in both live and
                online environments. His strategic insights and analytical approach have helped countless players
                elevate their game.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "WSOP Bracelet Winner",
                  "Over $2 million in live tournament earnings",
                  "Renowned cash game specialist",
                  "Expert in GTO and exploitative play",
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2 text-[#3498db]">✓</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/book"
                className="inline-block bg-[#3498db] text-white px-8 py-3 rounded font-semibold hover:bg-[#2980b9] transition-colors"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
