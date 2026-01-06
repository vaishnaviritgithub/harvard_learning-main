import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, Award, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/30">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-4 py-2 inline-flex items-center gap-2 w-fit">
              <Sparkles className="h-4 w-4" />
              World-Class Education
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
  Transform
  <br />
  Your{' '}
  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 bg-clip-text text-transparent">
    Future
  </span>
</h1>




            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Harvard Learning empowers professionals worldwide with industry-leading courses, expert instructors, and
              globally recognized certifications—all accessible from anywhere, at any time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 text-base">
                Explore Courses →
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-2 bg-transparent">
                📖 Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
           <div className="relative w-[520px] h-[520px]
bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300
rounded-3xl flex items-center justify-center overflow-hidden">

             {/* Geometric Background Pattern (Blue–Indigo) */}
<div className="absolute inset-0 opacity-30">
  <div
    className="absolute top-10 right-10 w-28 h-28
    bg-gradient-to-br from-blue-100 to-indigo-200
    rounded-xl rotate-12"
  />
  <div
    className="absolute bottom-20 left-10 w-24 h-24
    bg-gradient-to-br from-blue-200 to-indigo-300
    rounded-xl -rotate-12"
  />
</div>

{/*  Sparkle Animation */}
<div className="absolute inset-0 pointer-events-none">
  <span className="absolute top-6 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-80" />
  <span className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-300" />
  <span className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-ping delay-700" />
  <span className="absolute top-1/2 right-12 w-1 h-1 bg-white rounded-full animate-ping delay-1000" />
</div>

{/* Central Education Geometric Design */}
<div className="relative w-full h-full flex items-center justify-center group">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-52 h-52 relative transition-transform duration-500 group-hover:scale-105">

      {/* Book Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-20 
      bg-gradient-to-br from-blue-500 to-indigo-600 
      rounded-md shadow-xl flex items-center justify-center text-white text-xl">
        📘
      </div>

      {/* Physics Atom */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 
      bg-gradient-to-br from-purple-400 to-indigo-500 
      rounded-full shadow-lg flex items-center justify-center text-white text-xl">
        ⚛
      </div>

      {/* Chemistry Flask */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 
      bg-gradient-to-br from-teal-400 to-blue-500 
      rounded-full shadow-lg flex items-center justify-center text-white text-xl">
        🧪
      </div>

      {/* Math / Knowledge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 
      bg-gradient-to-br from-yellow-300 to-orange-400 
      rotate-45 rounded-xl shadow-xl flex items-center justify-center text-white text-xl">
        ∑
      </div>

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-20 h-20 
        bg-gradient-to-br from-white to-blue-100 
        rounded-full shadow-[0_0_30px_rgba(59,130,246,0.6)]
        flex items-center justify-center text-3xl font-bold text-blue-700">
          🎓

          {/* Inner sparkle */}
          <div className="absolute inset-0 rounded-full 
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]" />
        </div>
      </div>

    </div>
  </div>
</div>

              {/* Floating Cards */}
              <div className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Upskilling</div>
                  <div className="text-xs text-gray-500">Required Boost</div>
                </div>
              </div>

              <div
                className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Certificates</div>
                  <div className="text-xs text-gray-500">Get certified</div>
                </div>
              </div>

              <div
                className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Career Growth</div>
                  <div className="text-xs text-gray-500">Advance faster</div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full" />
              <div className="absolute bottom-4 right-12 w-2 h-2 bg-purple-600 rounded-full" />
              <div className="absolute top-12 right-20 w-2 h-2 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent pointer-events-none" />
    </section>
  )
}
