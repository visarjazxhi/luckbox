import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image src="/about-hero.jpg" alt="Poker table" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About LuckBox Poker</h1>
          <p className="text-xl md:text-2xl text-gray-200">Turning Luck into Skill</p>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/mentor.png"
                alt="John Doe - Poker Coach"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Poker Journey</h2>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                Hi, I&apos;m Patrick Barba, founder of LuckBox Poker Coaching. My poker journey began over 15 years ago when I
                first discovered the game in college. What started as a hobby quickly turned into a passion, and
                eventually, a successful career.
              </p>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                Throughout my career, I&apos;ve experienced the highs of major tournament wins and the lows of downswings.
                These experiences have shaped my approach to the game and my coaching philosophy.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Now, I&apos;m dedicated to helping others navigate their poker journeys, avoid common pitfalls, and
                accelerate their path to success.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Approach Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Our Coaching Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning",
                description: "We tailor our coaching to your specific needs, goals, and playing style.",
                icon: "🎯",
              },
              {
                title: "Data-Driven Strategies",
                description:
                  "Our methods are grounded in statistical analysis and proven game theory optimal (GTO) concepts.",
                icon: "📊",
              },
              {
                title: "Practical Application",
                description:
                  "We focus on translating complex theories into actionable strategies you can use at the tables.",
                icon: "🃏",
              },
              {
                title: "Mental Game Mastery",
                description: "Develop the psychological resilience needed to succeed in high-pressure situations.",
                icon: "🧠",
              },
              {
                title: "Continuous Improvement",
                description: "Regular review sessions ensure you're constantly evolving and adapting your game.",
                icon: "📈",
              },
              {
                title: "Community Support",
                description: "Join a network of like-minded players to share experiences and strategies.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Take Your Poker Game to the Next Level?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join LuckBox Poker Coaching and start your journey towards poker mastery today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Your First Session
          </Link>
        </div>
      </section>
    </div>
  )
}

