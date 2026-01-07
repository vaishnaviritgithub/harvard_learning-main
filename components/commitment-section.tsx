










import Image from "next/image"

export default function CommitmentSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Left Side – Text */}
          <div className="p-12 lg:p-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Committed to Your{" "}
              <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Success
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Harvard Learning, your success is at the heart of everything we do.
                We empower individuals to grow, adapt, and thrive in an ever-changing world.
              </p>

              <p>
                Through industry-relevant curricula and continuous learner support,
                we help bridge the gap between learning and real-world application.
              </p>
            </div>
          </div>

          {/* Right Side – Image */}
          <div className="relative h-full min-h-[350px] lg:min-h-[520px]">
            <Image
              src="/image.jpg"  
              alt="Global partnership and commitment"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}