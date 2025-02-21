import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Expert Coaching",
      description:
        "One-on-one sessions with professional poker players to improve your game.",
      image: "/coaching.jpg",
    },
    {
      title: "Live Tournaments",
      description:
        "Participate in exciting live tournaments with players from around the world.",
      image: "/tournaments.jpg",
    },
    {
      title: "Strategy Workshops",
      description:
        "In-depth workshops covering advanced poker strategies and techniques.",
      image: "/workshops.jpg",
    },
    {
      title: "Online Training",
      description:
        "Access to a vast library of video lessons and interactive training materials.",
      image: "/online-training.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-600">
          Our Services
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover our comprehensive range of services designed to elevate your
          poker game.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/book"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
