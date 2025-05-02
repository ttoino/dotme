import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Briefcase, FileText, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="relative w-full max-w-md mx-4 hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for people, jobs, or updates..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <FileText className="h-4 w-4 mr-2" />
                Generate CV
              </Button>
              <Button size="sm">
                <Briefcase className="h-4 w-4 mr-2" />
                Update Profile
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Sarah Johnson</CardTitle>
                  <Badge variant="outline" className="ml-2">New Position</Badge>
                </div>
                <CardDescription>Product Designer • 2 hours ago</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I am excited to announce that I have joined <span className="font-medium">Acme Inc</span> as a Senior Product Designer! Looking forward to creating amazing user experiences with this talented team.
              </p>
              <div className="mt-4 bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="font-medium">Senior Product Designer at Acme Inc</p>
                    <p className="text-sm text-muted-foreground">May 2023 - Present • San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-between">
              <Button variant="ghost" size="sm">👏 Congratulate</Button>
              <Button variant="ghost" size="sm">💬 Comment</Button>
              <Button variant="ghost" size="sm">🔗 Share</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Michael Chen</CardTitle>
                  <Badge variant="outline" className="ml-2">Certification</Badge>
                </div>
                <CardDescription>Software Engineer • 1 day ago</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Just completed the AWS Solutions Architect certification! Excited to apply these cloud architecture skills to my projects.
              </p>
              <div className="mt-4 bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="font-medium">AWS Certified Solutions Architect - Associate</p>
                    <p className="text-sm text-muted-foreground">Issued May 2023 • Expires May 2026</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-between">
              <Button variant="ghost" size="sm">👏 Congratulate</Button>
              <Button variant="ghost" size="sm">💬 Comment</Button>
              <Button variant="ghost" size="sm">🔗 Share</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start space-x-4 pb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Rodriguez" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Emily Rodriguez</CardTitle>
                  <Badge variant="outline" className="ml-2">Project Launch</Badge>
                </div>
                <CardDescription>Frontend Developer • 3 days ago</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Thrilled to share that our team just launched the redesigned company website! Check it out at
                <Link href="#" className="text-primary hover:underline ml-1">example.com</Link>
              </p>
              <div className="mt-4 bg-card rounded-lg border border-border overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Website screenshot"
                  width={600}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium">Company Website Redesign</p>
                  <p className="text-sm text-muted-foreground">
                    A complete overhaul of our digital presence with improved UX and performance
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-between">
              <Button variant="ghost" size="sm">👏 Congratulate</Button>
              <Button variant="ghost" size="sm">💬 Comment</Button>
              <Button variant="ghost" size="sm">🔗 Share</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
