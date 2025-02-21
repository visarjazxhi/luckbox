import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-600">
          About LuckBox
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about-image.jpg"
              alt="LuckBox team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              LuckBox was founded by a group of passionate poker players and
              industry professionals who saw the need for a comprehensive
              platform that combines expert coaching, live tournaments, and
              cutting-edge strategy workshops.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to elevate the poker skills of players at all
              levels, from beginners to seasoned pros. We believe that with the
              right guidance and resources, anyone can become a formidable poker
              player.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Excellence in education and training</li>
              <li>Integrity and fair play</li>
              <li>Innovation in poker strategy</li>
              <li>Community and collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Head Coach",
                image: "/team-member-1.jpg",
              },
              {
                name: "Jane Smith",
                role: "Tournament Director",
                image: "/team-member-2.jpg",
              },
              {
                name: "Mike Johnson",
                role: "Strategy Expert",
                image: "/team-member-3.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg text-center shadow-md"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
