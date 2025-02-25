"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: 99,
    duration: "month",
    features: [
      "1 one-on-one coaching session per month",
      "Access to basic strategy videos",
      "Weekly group Q&A sessions",
      "Email support",
    ],
    notIncluded: [
      "Advanced strategy courses",
      "Personalized study plan",
      "Hand history reviews",
      "Priority scheduling",
    ],
  },
  {
    name: "Pro",
    price: 249,
    duration: "month",
    features: [
      "3 one-on-one coaching sessions per month",
      "Access to all strategy videos",
      "Weekly group Q&A sessions",
      "Email and chat support",
      "Personalized study plan",
      "1 hand history review per month",
    ],
    notIncluded: ["Priority scheduling"],
    isPopular: true,
  },
  {
    name: "Elite",
    price: 499,
    duration: "month",
    features: [
      "6 one-on-one coaching sessions per month",
      "Access to all strategy videos",
      "Weekly group Q&A sessions",
      "24/7 email and chat support",
      "Personalized study plan",
      "Unlimited hand history reviews",
      "Priority scheduling",
      "Exclusive monthly webinars",
    ],
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image src="/pricing-hero.jpg" alt="Pricing Plans" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Choose Your Path to Poker Mastery</h1>
          <p className="text-xl md:text-2xl text-gray-200">Flexible plans to suit your poker journey</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Pricing Plans</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose the plan that best fits your poker goals and budget
            </p>
            <div className="inline-flex items-center bg-white dark:bg-gray-700 rounded-full p-1">
              <button
                className={`px-4 py-2 rounded-full ${
                  billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  billingCycle === "annually" ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setBillingCycle("annually")}
              >
                Annually (Save 20%)
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden ${
                  plan.isPopular ? "border-4 border-blue-500" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    $
                    {typeof billingCycle === "string" && billingCycle.startsWith("annual")
                      ? Math.round(plan.price * 0.8)
                      : plan.price}
                    <span className="text-xl font-normal text-gray-600 dark:text-gray-400">/{plan.duration}</span>
                  </div>
                  <ul className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded &&
                      plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center mb-2 text-gray-400">
                          <X className="w-5 h-5 mr-2 text-red-500" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                  <Link
                    href="/book"
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1-to-1 Consultation Packages */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            1-to-1 Consultation Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Single Session",
                sessions: 1,
                price: 150,
                description: "Perfect for addressing specific issues or getting a taste of our coaching.",
              },
              {
                name: "Triple Pack",
                sessions: 3,
                price: 400,
                description: "Our most popular option. Dive deeper into strategy and see significant improvements.",
                isPopular: true,
              },
              {
                name: "Intensive Course",
                sessions: 6,
                price: 700,
                description: "Comprehensive coaching to transform your game over an extended period.",
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md ${
                  pkg.isPopular ? "border-4 border-blue-500" : ""
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold mb-4 -mx-6 -mt-6 rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{pkg.name}</h3>
                <p className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">${pkg.price}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.description}</p>
                <ul className="mb-6">
                  <li className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {pkg.sessions} {pkg.sessions === 1 ? "session" : "sessions"}
                  </li>
                  <li className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    90 minutes per session
                  </li>
                  <li className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Personalized feedback
                  </li>
                </ul>
                <Link
                  href="/book"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Take Your Poker Game to the Next Level?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Choose a plan that suits you and start your journey to poker mastery today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

