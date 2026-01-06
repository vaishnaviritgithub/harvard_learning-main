import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImpactNumbers } from "@/components/impact-numbers"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FeaturedCourses } from "@/components/featured-courses"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImpactNumbers />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <CTASection />
      <Footer />
    </div>
  )
}
