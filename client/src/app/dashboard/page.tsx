"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import axios from "axios"
import { generateQuestionsRoute, submitQuestionsRoute } from "@/lib/routeProvider";

interface QuestionType {
  topic: string;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  _id: string;
}

const tools = [
  {
    id: "mcq-generator",
    title: "MCQ Generator",
    description: "Create multiple-choice questions from any topic",
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
        className="text-blue-500"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    color: "bg-blue-100",
  },
  {
    id: "lesson-plans",
    title: "Lesson Plans",
    description: "Generate detailed lesson plans for any subject",
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
        className="text-green-500"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "bg-green-100",
  },
  {
    id: "indic-language",
    title: "Indic Language",
    description: "Create content in various Indian languages",
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
        className="text-purple-500"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    color: "bg-purple-100",
  },
  {
    id: "doubt-solver",
    title: "Doubt Solver",
    description: "Get answers to student questions instantly",
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
        className="text-orange-500"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    color: "bg-orange-100",
  },
];

export default function DashboardPage() {
  const [selectedTool, setSelectedTool] = useState("mcq-generator");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("medium");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [testId, setTestId] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleGenerateQuestions() {
    setIsLoading(true);
    const response = await axios.post(generateQuestionsRoute, { subjects, topics, difficulty });

    if (response.data.status) {
      setQuestions(response.data.test.questions);
      setTestId(response.data.test._id);
      setAnswers(Array.from({ length: response.data.test.questions.length }, () => -1));
    }
    setIsLoading(false);
  }

  function handleSelectOption(questionindex: number, ansindex: number) {
    const newAnswers = [...answers];
    newAnswers[questionindex] = ansindex;
    setAnswers(newAnswers);
    console.log(newAnswers);
  }

  async function handleSubmit() {
    setIsLoading(true);

    const respone = await axios.post(submitQuestionsRoute, { testId, answers })
    if (respone.data.status) {
      alert("Test Submitted Successfully");
      setQuestions([]);
      setAnswers([]);
      setTestId([]);
    }
    setIsLoading(false);
  }

  return (
    <div>
      <Header />
      <div className="container py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Teacher</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Upgrade to Pro</Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                T
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold">Teacher Account</div>
                <div className="text-xs text-gray-500">teacher@example.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div className="text-lg font-semibold mb-2">AI Tools</div>
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedTool === tool.id ? tool.color : "bg-gray-50 hover:bg-gray-100"
                  }`}
                onClick={() => setSelectedTool(tool.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="mt-1">{tool.icon}</div>
                  <div>
                    <div className="font-medium">{tool.title}</div>
                    <div className="text-xs text-gray-600">{tool.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            {selectedTool === "mcq-generator" && (
              <Card>
                <CardHeader>
                  <CardTitle>MCQ Generator</CardTitle>
                  <CardDescription>
                    Create high-quality multiple-choice questions for any subject or topic.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {
                    questions.length === 0 ?
                      <Tabs defaultValue="simple">
                        <TabsList className="mb-4">
                          <TabsTrigger value="simple">Simple</TabsTrigger>
                          <TabsTrigger value="advanced">Advanced</TabsTrigger>
                        </TabsList>
                        <TabsContent value="simple" className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Subject</label>
                            <Input disabled={isLoading} placeholder="e.g. Physics, Mathematics, History" onChange={(e) => { setSubjects(e.target.value.split(",")); }} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Topic</label>
                            <Input disabled={isLoading} placeholder="e.g. Kinematics, Algebra, American Revolution" onChange={(e) => { setTopics(e.target.value.split(",")); }} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Number of Questions</label>
                            <Input disabled={isLoading} type="number" defaultValue="5" min="1" max="20" />
                          </div>
                          <div className="flex justify-end">
                            <Button disabled={isLoading} onClick={handleGenerateQuestions} className="bg-orange-500 hover:bg-orange-600 text-white disabled:cursor-not-allowed">
                              Generate Questions
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="advanced" className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Enter Your Content</label>
                            <Textarea
                              placeholder="Paste text or enter content from which to generate questions..."
                              className="min-h-[200px]"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Number of Questions</label>
                              <Input disabled={isLoading} type="number" defaultValue="5" min="1" max="20" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Difficulty Level</label>
                              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                                <option value="mixed">Mixed</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Button disabled={isLoading} className="bg-orange-500 hover:bg-orange-600 text-white disabled:cursor-not-allowed">
                              Generate Questions
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                      :
                      <div className=" flex flex-col gap-4">
                        {questions.map((question, questionIndex) => (
                          <div key={questionIndex}>
                            <div className=" font-semibold"><span className=" font-medium">{questionIndex + 1}.</span> {question.question}</div>
                            <div className=" flex flex-wrap">
                              {question.options.map((option, ansindex) => (
                                <button disabled={isLoading} onClick={() => { handleSelectOption(questionIndex, ansindex) }} className={` text-left font-medium text-sm w-[48%] bg-gray-100 m-1 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed ${answers[questionIndex] === ansindex ? " bg-blue-600 text-white" : ""}`} key={ansindex}><span>{ansindex + 1}. </span>{option}</button>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-end">
                          <Button disabled={isLoading} onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-600 text-white disabled:cursor-not-allowed">
                            Submit
                          </Button>
                        </div>
                      </div>
                  }
                </CardContent>
              </Card>
            )}

            {selectedTool === "lesson-plans" && (
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Plan Generator</CardTitle>
                  <CardDescription>
                    Create detailed, structured lesson plans for any subject or topic.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input disabled={isLoading} placeholder="e.g. Science, Mathematics, History" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Topic/Lesson Title</label>
                    <Input disabled={isLoading} placeholder="e.g. Photosynthesis, Linear Equations, World War II" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Grade/Age Level</label>
                    <Input disabled={isLoading} placeholder="e.g. 10th Grade, 8-10 years" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Specific Requirements (Optional)</label>
                    <Textarea placeholder="Any specific points you want to include in the lesson plan..." />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Generate Lesson Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTool === "indic-language" && (
              <Card>
                <CardHeader>
                  <CardTitle>Indic Language Content Generator</CardTitle>
                  <CardDescription>
                    Create educational content in various Indian languages.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Content Type</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                      <option value="mcq">Multiple Choice Questions</option>
                      <option value="lesson">Lesson Plan</option>
                      <option value="summary">Topic Summary</option>
                      <option value="worksheet">Worksheet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject/Topic</label>
                    <Input disabled={isLoading} placeholder="e.g. Science, Mathematics, History" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                      <option value="hindi">Hindi</option>
                      <option value="marathi">Marathi</option>
                      <option value="gujarati">Gujarati</option>
                      <option value="telugu">Telugu</option>
                      <option value="kannada">Kannada</option>
                      <option value="tamil">Tamil</option>
                      <option value="bengali">Bengali</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Content Details</label>
                    <Textarea placeholder="Specific details about the content you want to generate..." />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Generate Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTool === "doubt-solver" && (
              <Card>
                <CardHeader>
                  <CardTitle>Doubt Solver</CardTitle>
                  <CardDescription>
                    Get instant answers to student questions or academic doubts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="e.g. Physics, Mathematics, Biology" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Student Question/Doubt</label>
                    <Textarea
                      placeholder="Enter the student's question or doubt here..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Grade/Age Level</label>
                    <Input placeholder="e.g. 10th Grade, 8-10 years" />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Solve Doubt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
