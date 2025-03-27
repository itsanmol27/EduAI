"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface QuestionType {
  question: string;
  options: string[];
  answer: number;
  solution: string;
}

export default function MCQModal({ 
  onClose,
  subject,
  topic
}: {
  onClose: () => void;
  subject: string;
  topic: string;
}) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const generateQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/generate-mcq', {
        subject,
        topic,
        difficulty: "medium",
        count: 5
      });
      setQuestions(response.data.questions);
      setAnswers(new Array(response.data.questions.length).fill(-1));
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post('/api/submit-mcq', {
        questions,
        answers
      });
      router.push('/dashboard/results');
    } catch (error) {
      console.error("Error submitting answers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">MCQ Test: {topic}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          {questions.length === 0 ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Generate {topic} Questions</h3>
              <p className="text-gray-600 mb-6">
                Click the button below to generate MCQs for {topic} in {subject}
              </p>
              <Button 
                onClick={generateQuestions}
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                {isLoading ? "Generating..." : "Generate Questions"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((question, qIndex) => (
                <div key={qIndex} className="border-b pb-4">
                  <h4 className="font-semibold mb-3">
                    {qIndex + 1}. {question.question}
                  </h4>
                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <div 
                        key={oIndex}
                        className={`p-3 rounded-md cursor-pointer border ${
                          answers[qIndex] === oIndex 
                            ? "border-orange-500 bg-orange-50" 
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() => {
                          const newAnswers = [...answers];
                          newAnswers[qIndex] = oIndex;
                          setAnswers(newAnswers);
                        }}
                      >
                        {String.fromCharCode(65 + oIndex)}. {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-end gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setQuestions([]);
                    setAnswers([]);
                  }}
                >
                  Regenerate
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={isLoading || answers.some(a => a === -1)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {isLoading ? "Submitting..." : "Submit Test"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}