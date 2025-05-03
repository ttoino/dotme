"use client";

import { use } from "react";
import Link from "next/link";
import { useSession } from "@/components/SessionProvider";
import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { renderRichText } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileGrid from "@/components/ui/profile-grid";
// import { getUser } from "@/lib/user";

export default function Portfolio(/* { id }: { id: string } */) {
  const { sessionPromise } = useSession();
  const userPromise = /* id ? getUser(id) : */ sessionPromise;
  const user_data = use(userPromise);
  useEffect(() => {
    if (window) {
      sessionStorage.setItem("user_data", JSON.stringify(user_data));
    }
  }, [user_data]);
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
            {user_data?.portfolio.info.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            {user_data?.portfolio.info.roles.join(", ")}
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
            {/* {!id && ( */}
            <Button variant="outline">
              <Link href="/exportcv">Export CV</Link>{" "}
            </Button>
            {/* )} */}
          </div>
        </section>
      </div>

      <div className="p-5">
        <Separator className="" />
      </div>

      <section className="w-1/2 items-center p-3">
        <Tabs defaultValue="about-me" className="">
          <TabsList className={`w-full`}>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            {user_data?.portfolio.areas.map((area, index) => (
              <TabsTrigger value={area.name} key={`area-${index}`}>
                {area.name.charAt(0).toUpperCase() + area.name.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="home">
            <ProfileGrid user={user_data!} />
          </TabsContent>
          <TabsContent value="about-me">
            {user_data?.portfolio.info.bio && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  About Me
                </h2>
                <div className="max-w-3xl mx-auto text-gray-600 mb-6">
                  {renderRichText(user_data.portfolio.info.bio)}
                </div>
              </>
            )}
          </TabsContent>
          {user_data?.portfolio.areas.map((area) => (
            <TabsContent
              className="my-5"
              value={area.name}
              key={`area-${area.name}`}
            >
              <div className="flex flex-col gap-5">
                {area.entries?.map((entry) => (
                  <Card className="" key={`entry-${entry.organization}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground foreground">
                        {entry.organization}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {entry.roles.map((role, index) => (
                        <div key={`role-${role.title}`}>
                          <div>
                            <p className="font-bold flex gap-2">{role.title}</p>
                            <p className="text-foreground">
                              {role.startDate} - {role.endDate}
                            </p>
                            {role.description && (
                              <span className="text-gray-600">
                                {renderRichText(role.description)}
                              </span>
                            )}
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
    </div>
  );
}
