"use client";

import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { areas } from "@/mock/cv1";
import { renderRichText } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileGrid from "@/components/ui/profile-grid";

export default function Portfolio() {
  const [viewMode, /* setViewMode */] = useState("chronological"); // chronological | group by area

  // const [data, setData] = useState({});

  useEffect(() => {}, [viewMode]);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex w-1/2">
        <section className="flex flex-col gap-3 items-center p-3">
          <div className="w-[190px] h-[190px] relative rounded-full overflow-hidden">
            <Image
              src="/IMG_9846.JPG"
              alt="Profile Picture"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="flex flex-col gap-3 justify-center items-center flex-grow p-3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Ruben Esteves
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Department Manager @ Kidzania
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
      </div>

      <div className="p-5">
        <Separator className="" />
      </div>

      <section className="w-1/2 items-center p-3">
        <Tabs defaultValue="home" className="">
          <TabsList className={`w-full`}>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            {areas.map((area, index) => (
              <TabsTrigger value={area.name} key={`area-${index}`}>
                {area.name.charAt(0).toUpperCase() + area.name.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="home">
            <ProfileGrid/>
          </TabsContent>
          <TabsContent value="about-me">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                I&apos;m a passionate Full Stack Developer with 5+ years of
                experience building web applications. I specialize in React,
                Next.js, Node.js, and modern web technologies. My goal is to
                create intuitive, efficient, and beautiful digital experiences.
              </p>
            </div>
          </TabsContent>
          {areas.map((area, index) => (
            <TabsContent
              className="my-5"
              value={area.name}
              key={`area-${area.name}`}
            >
              <div className="flex flex-col gap-5">
                {area.entries.map((entry) => (
                  <Card className="" key={`entry-${entry.organization}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl text-black">
                        {entry.organization}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {entry.roles.map((role, index) => (
                        <div key={`role-${role.title}`}>
                          <div>
                            <p className="font-bold flex gap-2">{role.title}</p>
                            <p className="text-gray-600">
                              {role.startDate} - {role.endDate}
                            </p>
                            <span className="text-gray-600">
                              {renderRichText(role.description)}
                            </span>
                          </div>
                          {index < entry.roles.length - 1 && (
                            <Separator className="my-4" />
                          )}{" "}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* <section className="w-50% flex justify-center">
        <div className="flex flex-col gap-5 p-3">
          {roles.map((role, index) => (
            <div key={index}>
              <article>
                <span className="font-bold flex gap-2">
                  <p>{role.title}</p>
                  <p className="text-blue-400">@</p>
                </span>
                <p className="text-gray-600">
                  {role.startDate} - {role.endDate}
                </p>
                <span className="text-gray-600">
                  {renderRichText(role.description)}
                </span>
              </article>
              {index < roles.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
      {/* <section className="py-12 md:py-24 bg-gray-50">
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
      </section> */}
      {/* Skills Section */}
      {/* <section className="py-12 md:py-24">
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
      </section> */}
    </div>
  );
}

// const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "PostgreSQL",
//   "GraphQL",
//   "Tailwind CSS",
//   "Git",
//   "Docker",
// ];
