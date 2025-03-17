import React from "react";

interface TopicPerformance {
  correct: number;
  total: number;
}

interface Question {
  _id: string;
  topic: string;
  question: string;
  options: string[];
  answer: number;
  solution: string;
}

export interface TestData {
  _id: string;
  total: number;
  score: number;
  topicsPerformance: Record<string, TopicPerformance>;
  summeryByAi: {
    Performance_Analysis: string;
    Strengths: string;
    Weaknesses: string;
    Targeted_areas_for_improvement: string;
  }
  questions: Question[];
  answers: number[];
}

export default function Analysis({testData}: {testData: TestData}) {

  if (!testData) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">No test data available</h2>
        <p>Please return to the test page and try again.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Test Summary */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Test Analysis</h2>
        <p className="text-lg font-semibold">
          <span className="text-blue-700">Total Score:</span> {testData.score} / {testData.total}
        </p>
      </div>

      {/* Subject-wise Breakdown */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Subject-Wise Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {Object.entries(testData.topicsPerformance).map(([subject, data]) => (
            <div key={subject} className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">{subject}</h4>
              <p>Correct: {data.correct}</p>
              <p>Total: {data.total}</p>
              <p className="font-semibold text-blue-600">
                Accuracy: {((data.correct / data.total) * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Analysis Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">AI Performance Analysis</h3>
        <p className="bg-yellow-50 p-3 border-l-4 border-yellow-500">{testData.summeryByAi.Performance_Analysis}</p>

        <h4 className="text-lg font-semibold text-green-700 mt-4">Strengths</h4>
        <p className="bg-green-50 p-3 border-l-4 border-green-500">{testData.summeryByAi.Strengths}</p>

        <h4 className="text-lg font-semibold text-red-700 mt-4">Weaknesses</h4>
        <p className="bg-red-50 p-3 border-l-4 border-red-500">{testData.summeryByAi.Weaknesses}</p>

        <h4 className="text-lg font-semibold text-blue-700 mt-4">Areas for Improvement</h4>
        <p className="bg-blue-50 p-3 border-l-4 border-blue-500">{testData.summeryByAi.Targeted_areas_for_improvement}</p>
      </div>

      {/* Question Review Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Question Review</h3>
        <div className="mt-4">
          {testData.questions.map((q, index) => {
            const userAnswer = testData.answers[index];
            const isCorrect = userAnswer === q.answer;
            const isUnattempted = userAnswer === -1;
            const bgColor = isCorrect
              ? "bg-green-100 border-green-500"
              : isUnattempted
              ? "bg-yellow-100 border-yellow-500"
              : "bg-red-100 border-red-500";

            return (
              <div key={q._id} className={`p-4 border-l-4 ${bgColor} mt-3 rounded-lg`}>
                <h4 className="text-lg font-semibold">{q.question}</h4>
                <ul className="mt-2 space-y-1">
                  {q.options.map((option, i) => {
                    const optionColor =
                      i === q.answer
                        ? "text-green-700 font-semibold"
                        : i === userAnswer
                        ? "text-red-700"
                        : "";
                    return (
                      <li key={i} className={optionColor}>
                        {option}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-gray-600 mt-2">
                  <strong>Solution:</strong> {q.solution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
