"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Script from "next/script"

export default function Book() {
  useEffect(() => {
    // This effect will run after the component mounts
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image src="/book-hero.jpg" alt="Book a Poker Coaching Session" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Book Your Session</h1>
          <p className="text-xl md:text-2xl text-gray-200">Take the first step towards poker mastery</p>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                Schedule Your Coaching Session
              </h2>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/your-calendly-link"
                style={{ minWidth: "320px", height: "800px" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                quote:
                  "The one-on-one coaching session was incredibly valuable. My coach identified key areas for improvement and provided actionable strategies that have already improved my game.",
                image: "/testimonial-1.jpg",
              },
              {
                name: "Sarah Chen",
                quote:
                  "I was hesitant about online coaching, but the experience exceeded my expectations. The coach was knowledgeable, patient, and really helped me understand complex concepts.",
                image: "/testimonial-2.jpg",
              },
              {
                name: "Mike Rodriguez",
                quote:
                  "The personalized approach to coaching has been a game-changer for me. I've seen significant improvements in my decision-making and overall strategy since starting with LuckBox.",
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long are the coaching sessions?",
                answer:
                  "Our standard one-on-one coaching sessions are 90 minutes long. Group workshops typically run for 2 hours. Game review sessions are 60 minutes.",
              },
              {
                question: "What happens if I need to reschedule?",
                answer:
                  "We understand that plans can change. You can reschedule your session up to 24 hours before the scheduled time at no cost. Rescheduling with less than 24 hours notice may incur a fee.",
              },
              {
                question: "Do I need any special software for online sessions?",
                answer:
                  "For online coaching sessions, we typically use Zoom or a similar video conferencing platform. We'll provide you with all the necessary information and links before your session. You'll just need a stable internet connection and a device with a camera and microphone.",
              },
              {
                question: "How do I prepare for my coaching session?",
                answer:
                  "To get the most out of your session, we recommend having specific questions or areas you want to focus on. If you're booking a game review, please have your hand histories or recorded sessions ready to share. For general coaching, come prepared to discuss your current playing style, challenges, and goals.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
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
            Book your session now and start your journey towards poker mastery.
          </p>
          <a
            href="#calendly-widget"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Your Session
          </a>
        </div>
      </section>

      {/* Calendly Script */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  )
}

