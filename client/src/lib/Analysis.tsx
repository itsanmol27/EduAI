"use client";
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
    Targeted_areas_for_Improvement: string;
  };
  questions: Question[];
  answers: number[];
}

export default function Analysis({ testData, setIsResult }: { testData: TestData, setIsResult: (result: boolean) => void }) {

  if (!testData) {
    return (
      <div className="container mx-auto p-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No test data available</h2>
          <p className="text-gray-600 mb-4">Please return to the test page and try again.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700  font-medium py-2 px-4 rounded-lg transition duration-200"
            onClick={() => { setIsResult(false) }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Calculate overall percentage
  const overallPercentage = (testData.score / testData.total) * 100;

  // Determine performance color based on percentage
  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getPerformanceBgColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-red-100";
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-7xl">
      {/* Back button */}
      <button
        onClick={() => { setIsResult(false) }}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      {/* Header with overall score */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Score summary */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
              Test Analysis Report
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${overallPercentage}, 100`}
                    className={getPerformanceColor(overallPercentage)}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold ">
                    {overallPercentage.toFixed(0)}%
                  </span>
                  <span className="text-sm text-blue-100 mt-1">Percentage</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg min-w-[150px]">
                  <p className="text-sm text-blue-100">Score</p>
                  <p className="text-3xl font-bold ">
                    {testData.score} <span className="text-xl text-blue-200">/ {testData.total}</span>
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg min-w-[150px]">
                  <p className="text-sm text-blue-100">Correct</p>
                  <p className="text-3xl font-bold ">{testData.score}</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg min-w-[150px]">
                  <p className="text-sm text-blue-100">Incorrect</p>
                  <p className="text-3xl font-bold ">{testData.total - testData.score}</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg min-w-[150px]">
                  <p className="text-sm text-blue-100">Total</p>
                  <p className="text-3xl font-bold ">{testData.total}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="hidden xl:block relative w-48 h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subject-wise Breakdown */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Subject-Wise Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Object.entries(testData.topicsPerformance).map(([subject, data]) => {
            const percentage = (data.correct / data.total) * 100;
            return (
              <div
                key={subject}
                className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition duration-200 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{subject}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(
                      percentage
                    )} bg-opacity-20 ${getPerformanceBgColor(percentage).replace(
                      "text-",
                      "bg-"
                    )}`}
                  >
                    {percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${getPerformanceBgColor(percentage)}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Correct: {data.correct}</span>
                  <span>Total: {data.total}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Performance Insights */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          AI Performance Insights
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Performance Analysis
            </h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700">{testData.summeryByAi.Performance_Analysis}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Strengths
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-gray-700">{testData.summeryByAi.Strengths}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Weaknesses
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-gray-700">{testData.summeryByAi.Weaknesses}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              Areas for Improvement
            </h3>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <div className="space-y-4">
                {testData.summeryByAi?.Targeted_areas_for_Improvement.split("\n")
                  .filter((item) => item.trim().length > 0)
                  .map((item, index) => {
                    const boldTextMatch = item.match(/\*\*(.*?)\*\*/);
                    const boldText = boldTextMatch ? boldTextMatch[1] : "";
                    const remainingText = item.replace(/\*\*(.*?)\*\*/, "").trim();

                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-2 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          {boldText && (
                            <span className="font-semibold text-purple-700">
                              {boldText}
                            </span>
                          )}
                          <span className="text-gray-700"> {remainingText}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Review Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Detailed Question Review
        </h2>
        <div className="space-y-6">
          {testData.questions.map((q, index) => {
            const userAnswer = testData.answers[index];
            const isCorrect = userAnswer === q.answer;
            const isUnattempted = userAnswer === -1;

            return (
              <div
                key={q._id}
                className={`border rounded-lg overflow-hidden ${isCorrect
                    ? "border-green-200 bg-green-50"
                    : isUnattempted
                      ? "border-yellow-200 bg-yellow-50"
                      : "border-red-200 bg-red-50"
                  }`}
              >
                <div
                  className={`p-4 ${isCorrect
                      ? "bg-green-100"
                      : isUnattempted
                        ? "bg-yellow-100"
                        : "bg-red-100"
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Question {index + 1}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${isCorrect
                          ? "bg-green-500 "
                          : isUnattempted
                            ? "bg-yellow-500 "
                            : ""
                        }`}
                    >
                      {isCorrect ? "Correct" : isUnattempted ? "Unattempted" : "Incorrect"}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{q.question}</p>
                </div>

                <div className="p-4">
                  <h5 className="font-medium text-gray-700 mb-2">Options:</h5>
                  <ul className="space-y-2">
                    {q.options.map((option, i) => {
                      let optionClass = "p-3 rounded-lg border";
                      if (i === q.answer) {
                        optionClass += " bg-green-100 border-green-300";
                      } else if (i === userAnswer) {
                        optionClass += " bg-red-100 border-red-300";
                      } else {
                        optionClass += " bg-gray-50 border-gray-200";
                      }

                      return (
                        <li key={i} className={optionClass}>
                          <div className="flex items-center">
                            <span
                              className={`inline-block w-5 h-5 rounded-full mr-3 flex-shrink-0 ${i === q.answer
                                  ? "bg-green-500"
                                  : i === userAnswer
                                    ? ""
                                    : "bg-gray-300"
                                }`}
                            ></span>
                            <span
                              className={
                                i === q.answer
                                  ? "font-medium text-green-800"
                                  : i === userAnswer
                                    ? "font-medium text-red-800"
                                    : "text-gray-700"
                              }
                            >
                              {option}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h5 className="font-medium text-blue-800 mb-2">Solution:</h5>
                    <p className="text-gray-700">{q.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}