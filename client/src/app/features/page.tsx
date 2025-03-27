import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  color: string;
  bgColor: string;
}

function Feature({
  icon,
  title,
  description,
  image,
  color,
  bgColor,
}: FeatureProps) {
  return (
    <>
    {/* <Header/> */}
    <div className="mb-24">
      <div className={`rounded-lg p-8 ${bgColor} relative overflow-hidden`}>
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold ml-4">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6 max-w-3xl">{description}</p>
        <Link href="#">
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
            width={800}
            height={450}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default function FeaturesPage() {
  return (
    <div>
      <Header/>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            Discover Our Features
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Modern Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of AI-powered tools designed to revolutionize your learning experience.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 max-w-7xl mx-auto">
          <Feature
            icon={
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
                className="text-blue-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            }
            title="MCQ Generation"
            description="Utilize advanced AI to generate high-quality multiple-choice questions that challenge students and assess their understanding effectively."
            image="https://web-assets.same.dev/893215686/4209703986.png"
            color="bg-blue-100"
            bgColor="bg-blue-50"
          />

          <Feature
            icon={
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
                className="text-purple-600"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
            }
            title="MCQ from Data"
            description="Transform your existing content into multiple-choice questions, saving time and ensuring comprehensive coverage of topics."
            image="https://web-assets.same.dev/1263190731/2620095189.png"
            color="bg-purple-100"
            bgColor="bg-purple-50"
          />

          <Feature
            icon={
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
                className="text-green-600"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }
            title="Lesson Plans Generation"
            description="Develop detailed, engaging lesson plans with our AI assistant, ensuring your classes are well-structured and meet learning objectives."
            image="https://web-assets.same.dev/2095154121/3018221415.png"
            color="bg-green-100"
            bgColor="bg-green-50"
          />

          <Feature
            icon={
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
                className="text-pink-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            }
            title="Indian Language Support"
            description="Create MCQs, lesson plans, and educational content in various Indian languages including Hindi, Marathi, Gujarati, Telugu, Kannada, and more."
            image="https://web-assets.same.dev/2415791364/3223527165.png"
            color="bg-pink-100"
            bgColor="bg-pink-50"
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}
