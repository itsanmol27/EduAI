"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: "jack",
      name: "Jack",
      role: "High School Teacher",
      quote: "I've never seen anything like this before. It's amazing. The AI-generated MCQs have saved me hours of work!",
      avatarUrl: "https://web-assets.same.dev/2667175546/695932796.png",
    },
    {
      id: "jill",
      name: "Jill",
      role: "Elementary School Teacher",
      quote: "I'm speechless. This app has revolutionized my lesson planning process. The custom prompt templates are a game-changer!",
      avatarUrl: "https://web-assets.same.dev/3111804200/2300747059.png",
    },
    {
      id: "sarah",
      name: "Sarah",
      role: "Middle School Teacher",
      quote: "The advanced analytics have given me incredible insights into my students' progress. I can't imagine learning without this tool now.",
      avatarUrl: "https://web-assets.same.dev/3738101369/4092384792.png",
    },
    {
      id: "mike",
      name: "Mike",
      role: "University Professor",
      quote: "Generating tailored educational materials has never been easier. This app is a must-have for any modern educator.",
      avatarUrl: "https://web-assets.same.dev/1407624505/2376258898.png",
    },
    {
      id: "emily",
      name: "Emily",
      role: "Special Education Teacher",
      quote: "The ability to customize difficulty levels for MCQs is fantastic. It helps me cater to all my students' needs effortlessly.",
      avatarUrl: "https://web-assets.same.dev/169481029/4196735870.png",
    },
    {
      id: "david",
      name: "David",
      role: "High School Principal",
      quote: "I love how I can export questions to various formats. It integrates seamlessly with our existing workflow.",
      avatarUrl: "https://web-assets.same.dev/3950967796/2617400172.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex items-start mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <blockquote className="text-gray-700 italic">
            "{testimonial.quote}"
          </blockquote>
        </div>
      ))}
    </div>
  );
}
