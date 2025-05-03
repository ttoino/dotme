"use client";

import { use } from "react";
import { useSession } from "./SessionProvider";
import { User } from "@/types/user";
import { Button } from "./ui/button";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { logout } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

export default function UserButtons() {
  const { sessionPromise } = useSession();
  const session = use(sessionPromise);

  return session ? <LoggedInButtons user={session} /> : <LoggedOutButtons />;
}

function LoggedInButtons({ user }: { user: User }) {
  const name = user.portfolio.info.name;
  const image = user.portfolio.info.profile_picture;

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        className="rounded-full h-10 w-10 p-0 "
        aria-label="Profile"
        asChild
      >
        <Link href="/me">
          <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
            <Image
              src={image || "/default-profile.png"}
              alt="Profile Picture"
              fill
              className="object-cover object-center"
            />
          </div>
        </Link>
      </Button>

      {/* Settings */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Settings"
        title="Settings"
        asChild
      >
        <Link href="/settings">
          <Settings className="h-5 w-5" />
        </Link>
      </Button>

      {/* Logout */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Logout"
        title="Logout"
        onClick={logout}
      >
        <LogOut className="h-5 w-5" />
      </Button>

      {/* Avatar -> Profile */}
    </div>
  );
}

function LoggedOutButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
    </div>
  );
}
