






import { Header } from "@/components/header"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"

import CommitmentSection from "@/components/commitment-section"
import { LeadershipSection } from "@/components/leadership-section"
import { PromisesSection } from "@/components/promises-section"
import { Footer } from "@/components/footer"
import { CultureSection } from "@/components/culture-section"

export const metadata = {
  title: "About Us - Harvard Learning",
  description:
    "Empowering Success Through Learning. We believe that personal and professional growth should be accessible to everyone, anywhere, at any time.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />
      <AboutHero />
      <MissionSection />
      <CommitmentSection />
      <LeadershipSection />
      <PromisesSection />
      <CultureSection />
      <Footer />
    </div>
  )
}
