










import { Rocket, Users, Lightbulb, GraduationCap } from "lucide-react"

export function MissionSection() {
  const features = [
    {
      icon: Rocket,
      title: "Dynamic Learning Ecosystem",
      description:
        "Identify strengths, develop new skills, and confidently navigate personal and professional journeys.",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Through our Persona initiative, we customize learning pathways based on individual goals with expert mentorship.",
    },
    {
      icon: Lightbulb,
      title: "Flexible Learning",
      description: "Access high-quality education anytime, anywhere, designed to fit your schedule and learning style.",
    },
    {
      icon: GraduationCap,
      title: "Tangible Outcomes",
      description:
        "Earn globally recognized certifications and gain practical skills that drive real career advancement.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Mission Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#0066FF]">MISSION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is to empower individuals to unlock their full potential through flexible, high-quality learning
            experiences tailored to their unique goals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group">
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#0066FF]" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
