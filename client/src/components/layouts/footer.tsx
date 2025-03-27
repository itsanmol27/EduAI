"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative">
      <div className="px-8 py-20 relative">
        <div className="max-w-7xl mx-auto text-sm text-neutral-700 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div>Copyright © 2024 EduAI</div>
            <div className="mt-2">
              by{" "}
              <a
                className="text-orange-500 underline underline-offset-2"
                target="_blank"
                href="https://buildfastwithai.com"
                rel="noopener noreferrer"
              >
                Build Fast with AI
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm">
                Refund Policy
              </Link>
            </div>

            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                target="_blank"
                className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://x.com/BuildFastWithAI"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                target="_blank"
                className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://www.linkedin.com/company/build-fast-with-ai"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                className="transition-colors hover:text-foreground dark:text-muted-foreground dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://github.com/buildfastwithai"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500/10 to-orange-500/20 inset-x-0">
        EduAI
      </p>

      <div className="border border-t border-gray-100 text-center flex flex-col items-center space-y-1 text-gray-500 py-4">
        <p className="mb-3">EduAI is built on top of Open Source package</p>
        <a
          target="_blank"
          className="flex space-x-3 hover:underline underline-offset-4"
          href="https://github.com/itsanmol27/EduAI"
          rel="noopener noreferrer"
        >
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
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <span>Check out source code</span>
        </a>
      </div>
    </div>
  );
}
