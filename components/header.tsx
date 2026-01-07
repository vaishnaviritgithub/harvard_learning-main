import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-blue-200/40
bg-gradient-to-r from-white via-blue-50/80 to-indigo-100/70 relative overflow-hidden">

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
       <Link href="/" className="flex items-center gap-4 group relative">
  {/* Sparkle Glow */}
  <div className="pointer-events-none absolute inset-0">
  {/* White sparkles */}
  <span className="absolute top-4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70 animate-ping" />
  <span className="absolute top-12 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-ping delay-500" />

  {/* Blue sparkles */}
  <span className="absolute top-6 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-ping delay-300" />
  <span className="absolute top-14 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-ping delay-700" />

  {/* Indigo sparkles */}
  <span className="absolute top-10 right-20 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60 animate-ping delay-1000" />
</div>



  {/* Logo */}
  <div className="relative h-14 w-14 rounded-2xl 
bg-gradient-to-br from-white via-blue-500 to-indigo-700
flex items-center justify-center border-2 border-white shadow-2xl
group-hover:scale-105 transition-transform duration-300">


    {/* Sparkle overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_60%)] rounded-2xl" />

    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white drop-shadow-lg" fill="currentColor">
      <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
    </svg>
  </div>

  {/* Text */}
  <div className="flex flex-col">
    <span className="font-extrabold text-2xl 
bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800
bg-clip-text text-transparent">
  Harvard Learning
</span>
    <span className="text-xs text-gray-600 tracking-wider">
      Excellence in Education
    </span>
  </div>
</Link>
      <nav className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full p-1 shadow-sm">

  {/* Home – Active */}
  <Link href="/">
    <button
      className="
        px-6 py-2 rounded-full font-medium text-gray-600
        hover:bg-gradient-to-r from-blue-600 to-purple-600
        transition-all duration-300
      
      "
    >
      Home
    </button>
  </Link>
  
   {/* About */}
  <Link href="/about">
    <button
      className="
        px-6 py-2 rounded-full font-medium text-gray-600
        hover:bg-gradient-to-r from-blue-600 to-purple-600
        transition-all duration-300
      "
    >
      About
    </button>
  </Link>
  <Link href="/courses">
    <button
      className="
        px-6 py-2 rounded-full font-medium text-gray-600
        hover:bg-gradient-to-r from-blue-600 to-purple-600
        transition-all duration-300
      "
    >
      Courses
    </button>
  </Link>

  <Link href="/persona">
     <button
      className="
        px-6 py-2 rounded-full font-medium text-gray-600
        hover:bg-gradient-to-r from-blue-600 to-purple-600
        transition-all duration-300
      "
    >
      Persona
    </button>
  </Link>
</nav>

<Button className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white hover:opacity-90 rounded-full px-6 flex items-center gap-2 transition-all">
  Enroll Now
  <Sparkles className="h-4 w-4" />
</Button>
      </div>
    </header>
  )
}
