"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";

export default function Navbar() {
  const user = { name: "John Doe", image: "/avatar.png" };

  return (
    <nav className="w-full px-4 py-3 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={30}
            className="mr-2"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
          <Link
            href="/feed"
            className="hover:text-foreground transition-colors"
          >
            Feed
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* Right Section: Icons and Avatar */}
        <div className="flex items-center gap-4">
          <Link href="/me">
            <Button
              variant="ghost"
              className="rounded-full h-10 w-10 p-0 "
              aria-label="Profile"
            >
              <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </Link>

          {/* Settings */}
          <Link href="/settings">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Settings"
              title="Settings"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </Link>

          {/* Logout */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Logout"
            title="Logout"
            onClick={() => alert("Logged out")}
          >
            <LogOut className="h-5 w-5" />
          </Button>

          {/* Avatar -> Profile */}
        </div>
      </div>
    </nav>
  );
}
