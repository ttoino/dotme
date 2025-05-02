"use client";

import Link from "next/link";
import Image from "next/image";
import UserButtons from "./UserButtons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={30}
            className="mr-2"
          />
        </Link>

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

        {/* Right Section: Theme Toggle and User Buttons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButtons />
        </div>
      </div>
    </nav>
  );
}
