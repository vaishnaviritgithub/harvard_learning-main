import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Globe, Award } from "lucide-react"

export function ImpactNumbers() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      title: "Active Students",
      description: "Learning worldwide",
    },
    {
      icon: BookOpen,
      number: "200+",
      title: "Expert Courses",
      description: "Across all disciplines",
    },
    {
      icon: Globe,
      number: "150+",
      title: "Countries",
      description: "Global presence",
    },
    {
      icon: Award,
      number: "98%",
      title: "Success Rate",
      description: "Student satisfaction",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
  Our Impact in{' '}
  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 bg-clip-text text-transparent">
    Numbers
  </span>
</h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Join a thriving community of learners and professionals achieving their goals every day.
          </p>
        </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {stats.map((stat, index) => (
    <Card
      key={index}
      className="text-center border-2 border-gray-200 rounded-xl
      transition-all duration-300 ease-out
      hover:border-blue-400/60 hover:shadow-lg hover:scale-[1.03]"
    >
      <CardHeader>
        <stat.icon className="h-12 w-12 mx-auto text-blue-500 mb-4" />
        <CardTitle className="text-4xl font-bold">{stat.number}</CardTitle>
        <CardDescription className="text-base">{stat.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{stat.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
      </div>
    </section>
  )
}
