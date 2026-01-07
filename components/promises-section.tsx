










import { Clock, Share2, Users, Award } from "lucide-react"

export function PromisesSection() {
  const promises = [
    {
      icon: Clock,
      title: "Flexible, Self-Paced Learning",
      description: "Learn at your own pace, on your own schedule, from anywhere in the world.",
    },
    {
      icon: Share2,
      title: "Customized Learning Journeys",
      description: "Personalized pathways designed specifically for your individual goals and aspirations.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Guidance from certified and experienced professionals who are leaders in their fields.",
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Tangible outcomes with globally recognized digital certifications upon completion.",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Our Promises
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            What Sets Us{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Apart</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{promise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{promise.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
