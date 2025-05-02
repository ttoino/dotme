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
              alt="Logo (light)"
              width={120}
              height={30}
              className="hidden dark:block mr-2"
              priority
            />
            <Image
              src="/dotme_logo_dark.svg"
              alt="Logo (dark)"
              width={120}
              height={30}
              className="block dark:hidden mr-2"
              priority
            />
        
        </Link>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
          <Link href="/feed" className="hover:text-foreground transition-colors">
            Feed
          </Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButtons />
        </div>
      </div>
    </nav>
  );
}
