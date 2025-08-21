import Hero from "./Hero"
import { Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { Code, Palette, Speed } from "@mui/icons-material"
import { useEffect, useRef } from "react"

function Home() {
  const sectionRef = useRef(null)

  const highlights = [
    {
      icon: <Code className="text-4xl text-primary-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Palette className="text-4xl text-primary-600" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive user interfaces with attention to detail.",
    },
    {
      icon: <Speed className="text-4xl text-primary-600" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />

      <section className="section-padding bg-white" ref={sectionRef}>
        <Container maxWidth="lg">
          <div className="text-center mb-12 animate-on-scroll">
            <Typography variant="h2" component="h2" className="font-bold mb-4">
              What I Do
            </Typography>
            <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
              I specialize in building modern web applications with a focus on user experience, performance, and
              maintainable code.
            </Typography>
          </div>

          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  className={`h-full text-center p-6 card-hover animate-on-scroll`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent>
                    <div className="mb-4 flex justify-center">{highlight.icon}</div>
                    <Typography variant="h5" component="h3" className="font-semibold mb-3">
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Home
