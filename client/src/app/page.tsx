"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroQuizCreator from "@/components/home/hero-quiz-creator";
import FeatureSection from "@/components/home/feature-section";
import TestimonialSection from "@/components/home/testimonial-section";
import FaqSection from "@/components/home/faq-section";
import CallToAction from "@/components/home/call-to-action";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <section className="py-12 md:py-20">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reimagine Education with AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              Learning Made Easy
            </h2>
            <p className="text-gray-600 mb-8">
              Generate educational content easily with EduAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline">
                  Features
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mt-10 mb-16 mx-auto max-w-4xl">
            <Image
              src="https://web-assets.same.dev/2177753787/849522504.png"
              alt="EduAI Platform"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quiz Creator Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Create AI-powered questions quickly from any topic
          </h2>
          <HeroQuizCreator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Features</h2>
          <p className="text-center text-gray-600 mb-16">
            Explore our range of AI-powered tools designed to revolutionize your learning and learning experience.
          </p>
          <FeatureSection />
        </div>
      </section>

      {/* Meet EduAI Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="bg-orange-500 text-white rounded-lg p-6 inline-block mb-6">
            AI-Powered Education
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet EduAI.</h2>
              <h3 className="text-2xl font-bold mb-6">Reimagine Education with AI</h3>
              <p className="text-gray-600 mb-8">
                Generate a wide range of educational materials tailored to your specific needs and requirements, all with just a few clicks. From MCQs to comprehensive lesson plans, EduAI is here to revolutionize your learning experience.
              </p>
              <Link href="/dashboard">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                </Button>
              </Link>
              <div className="flex gap-6 mt-8">
                <div>Effortless.</div>
                <div>Efficient.</div>
                <div>Effective.</div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="font-bold">AI-Powered</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">Comprehensive</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">Adaptive Learning</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">Instant Generation</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  T
                </div>
                <div>
                  <div className="font-bold">Student</div>
                  <div className="text-sm text-gray-600">
                    Generate MCQs for <span className="font-bold">PHYSICS</span> with focus on <span className="font-bold">MECHANICS</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  E
                </div>
                <div>
                  <div className="font-bold">EduAI AI</div>
                  <div className="text-sm text-gray-600">
                    Generating a set of physics MCQs focusing on mechanics now.
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 mb-4">Generated MCQs</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2">
                      N
                    </div>
                    <div className="font-bold">Newton's Laws</div>
                    <div className="text-sm text-gray-600">5 questions</div>
                    <div className="text-xs text-gray-500 mt-2">MECHANICS</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mb-2">
                      K
                    </div>
                    <div className="font-bold">Kinematics</div>
                    <div className="text-sm text-gray-600">5 questions</div>
                    <div className="text-xs text-gray-500 mt-2">MECHANICS</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mb-2">
                      E
                    </div>
                    <div className="font-bold">Energy Conservation</div>
                    <div className="text-sm text-gray-600">5 questions</div>
                    <div className="text-xs text-gray-500 mt-2">MECHANICS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-center text-gray-600 mb-12">
            EduAI is used by hundreds of educators around the globe.
          </p>
          <TestimonialSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about EduAI
          </p>
          <FaqSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 max-w-7xl mx-auto">
          <CallToAction />
        </div>
      </section>
      <Footer />
    </div>
  );
}
