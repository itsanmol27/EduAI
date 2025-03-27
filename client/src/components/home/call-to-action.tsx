"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Transform Your learning Experience Today!
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Start creating AI-powered educational materials in minutes. Sign up now and experience the future of learning absolutely free!
      </p>
      <Link href="/sign-up">
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 h-auto text-lg">
          Try it now
        </Button>
      </Link>
      <p className="text-sm text-gray-500 mt-4">
        No credit card required.
      </p>
    </div>
  );
}
