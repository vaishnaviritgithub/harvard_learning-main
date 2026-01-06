import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

export function FeaturedCourses() {
  const courses = [
    {
      title: "Confidence & Personal Growth",
      level: "All Levels",
      description:
        "Build unshakeable confidence through evidence-based techniques, positive psychology frameworks, and personalized coaching sessions.",
      duration: "6 weeks",
      students: "500+",
      price: "INR 25,000",
      image: "/confident-person-standing-strong-professional.jpg",
    },
    {
      title: "AI Productivity Mastery",
      level: "Beginner",
      description:
        "Learn to harness AI tools to automate workflows, boost productivity, and work smarter with cutting-edge AI strategies.",
      duration: "4 weeks",
      students: "520+",
      price: "INR 60,000",
      image: "/artificial-intelligence-productivity-technology-fu.jpg",
    },
    {
      title: "Adaptive Leadership",
      level: "Intermediate",
      description:
        "Master the art of leading through change with adaptive leadership frameworks and develop resilience to navigate complex challenges.",
      duration: "8 weeks",
      students: "380+",
      price: "INR 20,000",
      image: "/leader-guiding-team-forward-business-professional.jpg",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            Top-Rated Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Workshops</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Transform your skills with our expertly crafted workshops designed for real-world impact and career
            advancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {course.level}
                </Badge>
                <CardTitle className="text-xl text-balance">{course.title}</CardTitle>
                <CardDescription className="leading-relaxed">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    Certificate
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting at</div>
                    <div className="text-xl font-bold text-primary">{course.price}</div>
                  </div>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
