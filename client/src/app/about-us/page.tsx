import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutUsPage() {
  return (
    <div>
      <Header/>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduAI</h1>
          <p className="text-xl text-gray-600 mb-10">Revolutionizing Education with AI</p>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8">
              At EduAI, we're on a mission to transform the learning experience through the power of artificial intelligence.
              Founded in 2024, our platform empowers educators worldwide to create high-quality, personalized learning materials
              with unprecedented ease and efficiency.
            </p>

            <div className="flex justify-center mb-16">
              <Link href="/auth-callback">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Sign Up for Free
                </Button>
              </Link>
            </div>

            <div className="flex justify-between items-center gap-8 mb-16">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500 mb-2">750+</h3>
                <p className="text-sm text-gray-600">Trusted by People</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500 mb-2">900+</h3>
                <p className="text-sm text-gray-600">Leveraged by People</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                <strong>EduAI was born from a simple yet powerful idea:</strong> What if we could harness
                the potential of AI to free up teachers' time, allowing them to focus on what truly matters -
                inspiring and guiding their students?
              </p>
              <p className="text-gray-700 mb-6">
                After months of rigorous development and testing with educators across the globe, EduAI was launched,
                quickly becoming an indispensable tool for teachers worldwide.
              </p>
            </div>
            <div>
              <Image
                src="https://web-assets.same.dev/961078143/3044962477.jpeg"
                alt="Team at office"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            We believe that every student deserves access to high-quality, personalized education, and every teacher deserves
            the tools to make that possible. Our mission is to empower educators with AI-driven solutions that enhance their
            learning capabilities, save time, and ultimately improve learning outcomes for students.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4">AI-Powered Innovation</h3>
              <p className="text-gray-700">
                Our cutting-edge AI technology generates educational content that is not only accurate but also
                tailored to specific learning objectives and student needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4">Teacher-Centric Design</h3>
              <p className="text-gray-700">
                Every feature of EduAI is designed with teachers in mind, ensuring an intuitive and efficient user experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4">Customization & Flexibility</h3>
              <p className="text-gray-700">
                EduAI offers unparalleled customization options, allowing teachers to maintain their personal
                learning style while leveraging AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
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
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">MCQ Generation</h3>
              </div>
              <p className="text-gray-700 text-center">
                Create tailored multiple-choice questions across various subjects and difficulty levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
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
                </div>
                <h3 className="text-xl font-bold mb-2">Lesson Plan Creation</h3>
              </div>
              <p className="text-gray-700 text-center">
                Generate comprehensive, customizable lesson plans in seconds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Question Generation</h3>
              </div>
              <p className="text-gray-700 text-center">
                Craft diverse question sets for quizzes, homework, and exams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
