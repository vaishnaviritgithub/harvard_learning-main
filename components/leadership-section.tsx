export function LeadershipSection() {
  const leaders = [
    {
      name: "name",
      title: "Chief Learning Officer (CLO)",
    },
    {
      name: "name",
      title: "Head of Technology & Innovation",
    },
    {
      name: "name",
      title: "Creative Director - Content & Media",
    },
    {
      name: "name",
      title: "Director - Training & Faculty Operations",
    },
    {
      name: "name",
      title: "Head of Learner Success & Operations",
    },
    {
      name: "name",
      title: "Head of Training",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-6">
          Meet the{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-16 leading-relaxed">
          At Harvard Learning, we believe that success begins with people. Our team brings together passionate leaders,
          educators, innovators, and strategists dedicated to transforming learning into lifelong achievement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
              <p className="text-blue-600 font-medium">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
