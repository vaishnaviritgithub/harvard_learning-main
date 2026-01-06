import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Award, BookOpen, Sparkles, Globe } from "lucide-react"

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Access courses 24/7 and learn on your own schedule with lifetime access to all materials.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry leaders with years of real-world experience and proven track records.",
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Earn globally recognized certifications that boost your resume and career prospects.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "Deep-dive into topics with structured curriculum, practical exercises, and real projects.",
    },
    {
      icon: Sparkles,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team and community forums.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with learners worldwide, share experiences, and build lasting professional networks.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Choose <span className="text-primary">EduMaster</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We provide everything you need to succeed in your learning journey with cutting-edge tools and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
