






import { Sparkles, Target, Users, Star } from "lucide-react"

export function AboutHero() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Badge */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold">About Harvard Learning</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Empowering <span className="text-blue-600">Success</span>
          <br />
          Through Learning
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Harvard Learning (OPC) Pvt Ltd, we believe that personal and professional growth should be accessible to
          everyone, anywhere, at any time.
        </p>
      </div>

      {/* Icon Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm">
            To provide world-class education that transforms lives and careers globally.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
            <Users className="h-10 w-10 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Our Community</h3>
          <p className="text-gray-600 text-sm">
            Join 50,000+ professionals advancing their skills and achieving their goals.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <Star className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Our Excellence</h3>
          <p className="text-gray-600 text-sm">
            Industry-leading courses with expert instructors and recognized certifications.
          </p>
        </div>
      </div>
    </section>
  )
}
