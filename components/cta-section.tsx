import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function CTASection() {
  const benefits = ["30-Day Money Back", "Lifetime Access", "Expert Support"]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Limited Time Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Start Your Learning Journey <span className="text-primary">Today</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty leading-relaxed">
            Join over 50,000 professionals who have transformed their careers with EduMaster. Get instant access to 200+
            courses, expert mentorship, and a global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
