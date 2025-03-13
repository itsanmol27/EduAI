"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What is Educhain?",
      answer: "Educhain is an AI-powered platform designed to help educators create high-quality educational materials quickly and efficiently. It leverages artificial intelligence to generate multiple-choice questions, lesson plans, assessments, and other teaching resources tailored to specific subjects and learning objectives."
    },
    {
      question: "How does Educhain work?",
      answer: "Educhain uses advanced AI models to analyze educational content and generate relevant teaching materials. Simply select the subject, topic, and type of content you need, provide any specific requirements, and the AI will create customized educational resources for you. You can then review, edit, and export these materials for use in your teaching."
    },
    {
      question: "What types of content can I generate with Educhain?",
      answer: "Educhain can generate a variety of educational content, including multiple-choice questions (MCQs), true/false questions, short answer questions, fill-in-the-blanks, comprehensive lesson plans, and educational content in various Indian languages. We're constantly adding new features and content types."
    },
    {
      question: "Is Educhain suitable for all subjects?",
      answer: "Yes, Educhain supports a wide range of subjects including Mathematics, Science, History, Literature, Geography, and many more. The platform is designed to be versatile and can adapt to various disciplines and educational levels."
    },
    {
      question: "How accurate is the AI-generated content?",
      answer: "Educhain's AI models are trained on extensive educational datasets to ensure accuracy and relevance. However, as with any AI-generated content, we recommend that educators review and potentially refine the outputs before use. We continuously improve our models based on user feedback to enhance accuracy."
    },
    {
      question: "Can I customize the difficulty level of the generated content?",
      answer: "Absolutely! Educhain allows you to specify the difficulty level of your generated content, making it suitable for students at different stages of learning and with varying abilities. This feature helps you create inclusive educational materials that cater to diverse student needs."
    },
    {
      question: "How do I get started with Educhain?",
      answer: "Getting started is simple! Sign up for an account, explore the different tools available, and begin creating your first educational resource. Our intuitive interface makes it easy to generate exactly what you need for your teaching objectives."
    },
    {
      question: "Is there a limit to how much content I can generate?",
      answer: "Educhain offers different plans with varying limits on content generation. Our free tier allows you to explore the platform's capabilities, while our premium plans offer expanded generation limits, additional features, and priority support."
    },
    {
      question: "Can I save and edit the generated content?",
      answer: "Yes, all content generated on Educhain can be saved to your account, edited as needed, and revisited later. You can also export the content in various formats for integration with your existing teaching materials and learning management systems."
    },
    {
      question: "Do you offer any training or support?",
      answer: "We provide comprehensive documentation, tutorial videos, and responsive customer support to help you make the most of Educhain. Premium plans include additional support options, including dedicated customer success managers for institutional accounts."
    },
    {
      question: "Can I try Educhain before subscribing?",
      answer: "Yes, we offer a free tier that allows you to explore Educhain's features and capabilities without any commitment. This gives you the opportunity to experience the platform's benefits before deciding on a subscription plan."
    },
  ];

  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium text-gray-800">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
