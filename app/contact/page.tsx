"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of poker coaching do you offer?",
    answer:
      "We offer a variety of coaching options including one-on-one sessions, group workshops, and online courses covering different aspects of poker strategy and gameplay.",
  },
  {
    question: "How long are your coaching sessions?",
    answer:
      "Our standard one-on-one coaching sessions are 90 minutes long, but we also offer 60-minute and 2-hour options. Group workshops typically run for 2-3 hours.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes, we offer a free 15-minute consultation to discuss your goals and determine the best coaching plan for you.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not satisfied with your first coaching session, we'll refund your payment in full.",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show a success message to the user (you might want to add state for this)
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image src="/contact.jpg" alt="Contact LuckBox Poker" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">We&apos;re here to help you improve your poker game</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", content: "support@luckboxpoker.com" },
              { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Address", content: "123 Poker St, Las Vegas, NV 89101" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              >
                <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="coaching">Coaching Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                    {expandedFaq === index && <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      {/* <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Our support team is available for live chat during business hours.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Live Chat
          </button>
        </div>
      </section> */}
    </div>
  )
}

