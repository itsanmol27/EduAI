"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  color: string;
}

function FeatureCard({ icon, title, description, image, color }: FeatureCardProps) {
  return (
    <div className={`rounded-lg p-6 ${color} relative overflow-hidden`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link href={`/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <Button variant="link" className="flex items-center text-gray-700 p-0">
          Explore Feature
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
            className="ml-2 h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </Link>

      <div className="mt-8">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const features = [
    {
      icon: (
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
          className="lucide lucide-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      ),
      title: "MCQ Generation",
      description: "Utilize advanced AI to generate high-quality multiple-choice questions that challenge students and assess their understanding effectively.",
      image: "https://web-assets.same.dev/893215686/4209703986.png",
      color: "bg-blue-100",
    },
    {
      icon: (
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
          className="lucide lucide-database"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      title: "MCQ from Data",
      description: "Transform your existing content into multiple-choice questions, saving time and ensuring comprehensive coverage of topics.",
      image: "https://web-assets.same.dev/1263190731/2620095189.png",
      color: "bg-purple-100",
    },
    {
      icon: (
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
          className="lucide lucide-book-open"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Lesson Plans Generation",
      description: "Develop detailed, engaging lesson plans with our AI assistant, ensuring your classes are well-structured and meet learning objectives.",
      image: "https://web-assets.same.dev/2095154121/3018221415.png",
      color: "bg-green-100",
    },
    {
      icon: (
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
          className="lucide lucide-globe"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Indian Language Support",
      description: "Create MCQs, lesson plans, and educational content in various Indian languages including Hindi, Marathi, Gujarati, Telugu, Kannada, and more.",
      image: "https://web-assets.same.dev/2415791364/3223527165.png",
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          color={feature.color}
        />
      ))}
    </div>
  );
}
