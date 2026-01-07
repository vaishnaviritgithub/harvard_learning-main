










import { Heart, Zap, Trophy, Target } from "lucide-react"

export function CultureSection() {
  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description: "Every idea is valued with compassion and understanding",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries with creative solutions",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Every success is celebrated, big or small",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Built on shared values and honest collaboration",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-block mb-6">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium">Our Culture</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Innovation with <span className="text-blue-600">Empathy</span>
            </h2>

            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              At Harvard Learning, our culture blends innovation with empathy. We believe that a great team isn't just
              built on skill — it's built on shared values, integrity, and collaboration.
            </p>

            <div className="flex items-start gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="text-5xl font-bold text-blue-600">10+</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Years of Leadership Experience</h3>
                <p className="text-gray-600">Driven by seasoned professionals who bring years of industry expertise</p>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Capsule Banner */}
<div className="mt-16 flex justify-center">
  <div className="relative group">
    {/* Capsule */}
    <div className="bg-white/80 rounded-full px-8 py-2 shadow-md border border-indigo-200/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-white group-hover:text-white flex items-center justify-center overflow-hidden">
      
      {/* Sparkle Animation */}
      <span className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-70 animate-ping delay-200"></span>
      <span className="absolute top-2 right-3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 animate-ping delay-400"></span>
      <span className="absolute bottom-1 left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50 animate-ping delay-600"></span>

      {/* Text */}
      <p className="relative text-gray-800 font-semibold group-hover:text-white text-sm md:text-base">
        Every challenge is embraced. Every idea is celebrated.
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
