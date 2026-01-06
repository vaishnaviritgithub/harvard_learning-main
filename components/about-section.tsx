


import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Award, Globe } from "lucide-react"

export function AboutSection() {
  const features = [
    "Industry-leading expert instructors",
    "Flexible learning at your own pace",
    "Globally recognized certifications",
    "Lifetime access to course materials",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
<div className="relative">
  <Badge
    className="absolute -top-6 left-0 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200"
  >
    Our Mission
  </Badge>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 mt-6">
    About{' '}
    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
      Harvard Learning
    </span>
  </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Harvard Learning, we are committed to democratizing world-class education. Our platform connects ambitious learners with expert instructors, cutting-edge curriculum, and a global community of professionals.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking to advance your career, pivot to a new industry, or simply expand your knowledge, our comprehensive programs are designed to help you achieve your goals with flexibility and excellence.
            </p>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-full mt-6">
  {/* Grid container */}
  <div className="flex flex-col gap-6">
  {/* Stats Cards Grid */}
  <div className="grid grid-cols-2 gap-6">
    {/* Top Left Card */}
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200
                    border border-blue-300 rounded-xl p-5 shadow-md
                    transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <Users className="h-6 w-6 text-blue-600" />
        <div className="text-2xl font-bold text-blue-600">50,000+</div>
      </div>
      <div className="text-sm text-gray-700">Active Learners Worldwide</div>
    </div>

    {/* Top Right Card */}
    <div className="bg-gradient-to-br from-indigo-100 via-indigo-200 to-blue-100
                    border border-indigo-300 rounded-xl p-5 shadow-md
                    transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <Award className="h-6 w-6 text-indigo-600" />
        <div className="text-2xl font-bold text-indigo-600">200+</div>
      </div>
      <div className="text-sm text-gray-700">Expert-Led Courses</div>
    </div>

    {/* Bottom Large Card */}
    <div className="col-span-2 bg-gradient-to-br from-indigo-200 via-indigo-300 to-blue-200
                    border border-indigo-400 rounded-xl p-5 shadow-md
                    transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <Globe className="h-6 w-6 text-indigo-600" />
        <div className="text-3xl font-bold text-indigo-600">150+</div>
      </div>
      <div className="text-sm text-gray-700">
        Global reach with students learning from every corner of the world
      </div>
    </div>
  </div>

  {/* Small Image Below Stats */}
  <div className="mt-6 w-[300px] md:w-[400px] mx-auto rounded-xl overflow-hidden shadow-lg">
    <img
      src="/students-learning-online-with-laptops-in-modern-en.jpg"
      alt="Students learning"
      className="w-full h-auto object-cover"
    />
  </div>
</div>

</div>
</div>
 
      </div>
    </section>
  )
}