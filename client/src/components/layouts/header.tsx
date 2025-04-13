"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

export default function Header() {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [])

  return (
    <header className="w-full bg-transparent">
      <div className="container max-w-7xl bg-transparent mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://web-assets.same.dev/481764797/1156539719.png"
            alt="EduAI Logo"
            width={120}
            height={32}
            className="h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about-us" className="text-sm font-medium hover:text-orange-500 transition-colors">
            About Us
          </Link>

          <Link href="/features" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Features
          </Link>

          <Link href="/contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </nav>

        {
          user ?
            <div>
              <Image
                src={user.profilePhoto}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"/>
            </div>
            :
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="outline">Sign In</Button>
              </Link>

              <Link href="/sign-up">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
              </Link>
            </div>
        }

        <Button variant="outline" className="md:hidden" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  );
}
