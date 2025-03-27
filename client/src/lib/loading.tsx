"use client";

import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
    return (
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
            className={cn("animate-spin h-4 w-4", className)} // Added h-4 w-4 as default
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    );
}

interface FullPageLoaderProps {
    loadingText?: string | null;
  }
  
  export function FullPageLoader({ loadingText }: FullPageLoaderProps) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-2">
          <LoadingSpinner className="h-12 w-12 text-orange-500" />
          <p className="text-gray-600">
            {loadingText !== null ? loadingText : "Loading..."}
          </p>
        </div>
      </div>
    );
  }
  