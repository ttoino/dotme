"use client";

import Link from "next/link";
import Image from "next/image";
import UserButtons from "./UserButtons";

export default function Navbar() {
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
            href="/"
            className="hover:text-foreground transition-colors"
          >
            Feed
          </Link>
          <Link
            href="/market"
            className="hover:text-foreground transition-colors"
          >
            Market
          </Link>
          {/* <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link> */}
        </div>

        {/* Right Section: Icons and Avatar */}
        <UserButtons />
      </div>
    </nav>
  );
}
