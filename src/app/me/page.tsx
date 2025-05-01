import Image from "next/image";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col gap-3 items-center p-3">
        <div className="w-[258px] h-[258px] relative rounded-full overflow-hidden">
          <Image
            src="/IMG_9846.JPG"
            alt="Profile Picture"
            fill
            className="object-cover object-center"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Ruben Safadinho
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Maladndrinho full-time @ Kidzania
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3 items-center p-3">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            I'm a passionate Full Stack Developer with 5+ years of experience
            building web applications. I specialize in React, Next.js, Node.js,
            and modern web technologies. My goal is to create intuitive,
            efficient, and beautiful digital experiences.
          </p>
          <Button>Download Resume</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3 items-center p-3">
        <div className="grid grid-cols-8 grid-rows-8 gap-6"></div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 flex items-center justify-center mb-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt={skill}
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-center font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 John Doe. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Sample data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with payment processing and inventory management.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["React", "Firebase", "Material UI", "TypeScript"],
  },
  {
    title: "Health & Fitness Tracker",
    description:
      "Mobile-first application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["React Native", "Redux", "Node.js", "Express"],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Git",
  "Docker",
];
