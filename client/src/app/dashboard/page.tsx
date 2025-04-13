"use client";

import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import axios from "axios";
import { generateQuestionsRoute, submitQuestionsRoute, generateQuestionsWithContentRoute, solveDoubtRoute, lessonGenerateRoute } from "@/lib/routeProvider";
import Analysis, { TestData } from "@/lib/Analysis";
import { LoadingSpinner, FullPageLoader } from "@/lib/loading";
import LessonPlanModal from "@/lib/LessonPlan";
import { UserContext } from "@/context/UserContext";

interface QuestionType {
  topic: string;
  question: string;
  options: string[];
  answer: number;
  solution: string;
  _id: string;
}

export interface DoubtSolution {
  userId: string;
  imageUrl?: string;
  imageText: string;
  answer: string;
  _id: string;
}

interface LessonPlanType{
  title: string;
    gradeLevel: string;
    subject: string;
    timeAllotment: string;
    objective: {
      overall: string;
      specific: string[];
    };
    prerequisites: string[];
    introduction: {
      hook: string;
      overview: string;
    };
    contentOutline: {
      day: number;
      topic: string;
      details: string;
    }[];
    activities: {
      day: number;
      activity: string;
      materials: string;
    }[];
    assessment: {
      formative: string[];
      summative: string[];
    };
    differentiation: {
      support: string;
      challenge: string;
    };
    resources: string[];
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
  const [isResult, setIsResult] = useState<boolean>(false);
  const [result, setResult] = useState<TestData>();
  const [content, setContent] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [doubtSolution, setDoubtSolution] = useState<DoubtSolution | null>(null);
  const [language, setLanguage] = useState<string>('English');
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const [grade, setGrade] = useState<string>('');
  const [lessonPlan, setLessonPlan] = useState<LessonPlanType>();
  const [isLessonPlanModalOpen, setIsLessonPlanModalOpen] = useState(false);
  const {user} = useContext(UserContext);


  async function handleGenerateQuestions() {
    setIsLoading(true);
    setLoadingText("Generating questions...");

    try {
      const response = await axios.post(generateQuestionsRoute, { userId:user?._id ,subjects, topics, difficulty, language });
      if (response.data.status) {
        setQuestions(response.data.test.questions);
        setTestId(response.data.test._id);
        setAnswers(Array.from({ length: response.data.test.questions.length }, () => -1));
        setSubjects([]);
        setTopics([]);
      }
    } catch (error) {
      console.error("Error generating questions:", error);

    } finally {
      setIsLoading(false);
      setLoadingText(null);
    }
  }


  async function handleGenerateQuestionswithContent() {
    setIsLoading(true);
    setLoadingText("Generating questions from content...");
    try {
      const response = await axios.post(generateQuestionsWithContentRoute, { userId:user?._id ,content, difficulty });
      if (response.data.status) {
        setQuestions(response.data.test.questions);
        setTestId(response.data.test._id);
        setAnswers(Array.from({ length: response.data.test.questions.length }, () => -1));
        setContent('');
      }
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setIsLoading(false);
      setLoadingText(null);
    }
  }

  function handleSelectOption(questionindex: number, ansindex: number) {
    const newAnswers = [...answers];
    newAnswers[questionindex] = ansindex;
    setAnswers(newAnswers);
    console.log(newAnswers);
  }

  async function handleSubmit() {
    setIsLoading(true);
    setLoadingText("Submitting your test...");
    try {
      const response = await axios.post(submitQuestionsRoute, { testId, answers });
      if (response.data.status) {
        setQuestions([]);
        setAnswers([]);
        setTestId([]);
        setIsResult(true);
        setResult(response.data.test);
      }
    } catch (error) {
      console.error("Error submitting test:", error);
    } finally {
      setIsLoading(false);
      setLoadingText(null);
    }
  }

  async function handleSolveDoubt() {
    setIsLoading(true);
    setLoadingText("Analyzing your doubt...");
    try {
      const formData = new FormData();
      formData.append('subject', 'Your subject value here');
      formData.append('question', 'Your question value here');
      formData.append('gradeLevel', 'Your grade level value here');

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await axios.post(solveDoubtRoute, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status) {
        setDoubtSolution(response.data.doubt);
        setIsSolutionModalOpen(true);
      }
    } catch (error) {
      console.error('Error solving doubt:', error);
      // You might want to show an error toast here
    } finally {
      setIsLoading(false);
      setLoadingText(null);
    }
  }

  function formatSolutionText(text: string) {
    // Convert markdown-style bold (**text**) to HTML
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert numbered lists - alternative approach without s flag
    formattedText = formattedText.split('\n').map(line => {
      // Match lines starting with number followed by dot
      if (/^\d+\.\s/.test(line)) {
        return `<li>${line.replace(/^\d+\.\s/, '')}</li>`;
      }
      return line;
    }).join('\n');

    // Add paragraph tags for double line breaks
    formattedText = formattedText.replace(/\n\n/g, '</p><p>');

    // Add line breaks for single line breaks
    formattedText = formattedText.replace(/\n(?!\n)/g, '<br>');

    return `<p>${formattedText}</p>`;
  }

  async function handleGenerateLessonPlan() {
    setIsLoading(true);
    setLoadingText("Generating lesson plan...");
    try {
      const response = await axios.post(lessonGenerateRoute, { subjects, topics, grade });
      if (response.data.status) {
        console.log("Lesson Plan:", response.data.plan);
        setIsLessonPlanModalOpen(true);
        setLessonPlan(response.data.plan);
        setSubjects([]);
        setTopics([]);
        setGrade('');
      }
    }
    catch (error) {
      console.error("Error generating lesson plan:", error);
    }
    finally {
      setIsLoading(false);
      setLoadingText(null);
    }
  }

  if (isResult && result) {
    return <Analysis testData={result} setIsResult={setIsResult} />
  }

  return (
    <div>
      <Header />
      {isLoading && <FullPageLoader loadingText={loadingText} />}

      <div className="container py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Student</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Upgrade to Pro</Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                T
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold">Student Account</div>
                <div className="text-xs text-gray-500">Student@example.com</div>
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
                            <Button
                              disabled={isLoading}
                              onClick={handleGenerateQuestions}
                              className="bg-orange-500 hover:bg-orange-600 text-white disabled:cursor-not-allowed"
                            >
                              {isLoading && loadingText === "Generating questions..." ? (
                                <div className="flex items-center gap-2">
                                  <LoadingSpinner className="h-4 w-4" />
                                  Generating...
                                </div>
                              ) : (
                                "Generate Questions"
                              )}
                            </Button>

                          </div>
                        </TabsContent>
                        <TabsContent value="advanced" className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Enter Your Content</label>
                            <Textarea
                              placeholder="Paste text or enter content from which to generate questions..."
                              className="min-h-[200px]"
                              onChange={(e) => { setContent(e.target.value) }}
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
                            <Button
                              disabled={isLoading}
                              onClick={handleGenerateQuestionswithContent}
                              className="bg-orange-500 hover:bg-orange-600 text-white disabled:cursor-not-allowed"
                            >
                              {isLoading && loadingText === "Generating questions from content..." ? (
                                <div className="flex items-center gap-2">
                                  <LoadingSpinner className="h-4 w-4" />
                                  Generating...
                                </div>
                              ) : (
                                "Generate Questions"
                              )}
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      // <div className=" flex flex-col gap-4">
                      //   {questions.map((question, questionIndex) => (
                      //     <div key={questionIndex}>
                      //       <div className=" font-semibold"><span className=" font-medium">{questionIndex + 1}.</span> {question.question}</div>
                      //       <div className=" flex flex-wrap">
                      //         {question.options.map((option, ansindex) => (
                      //           <button disabled={isLoading} onClick={() => { handleSelectOption(questionIndex, ansindex) }} className={` text-left font-medium text-sm w-[48%] bg-gray-100 text-black m-1 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed ${answers[questionIndex] === ansindex ? " bg-orange-500 text-white" : ""}`} key={ansindex}><span>{ansindex + 1}. </span>{option}</button>
                      //         ))}
                      //       </div>
                      //     </div>
                      //   ))}
                      //   <div className="flex justify-end">
                      //     <Button
                      //       onClick={handleSubmit}
                      //       disabled={isLoading || answers.some(a => a === -1)}
                      //       className="bg-orange-500 hover:bg-orange-600 text-white"
                      //     >
                      //       {isLoading && loadingText === "Submitting your test..." ? (
                      //         <div className="flex items-center gap-2">
                      //           <LoadingSpinner className="h-4 w-4" />
                      //           Submitting...
                      //         </div>
                      //       ) : (
                      //         "Submit Test"
                      //       )}
                      //     </Button>
                      //   </div>
                      // </div>
                  }
                </CardContent>
              </Card>
            )}

            {questions.length > 0 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">MCQ Test</h2>
                      <button
                        onClick={() => {
                          setQuestions([]);
                          setAnswers([]);
                          setTestId([]);
                        }}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-6">
                      {questions.map((question, questionIndex) => (
                        <div key={question._id} className="border-b pb-4">
                          <h3 className="font-semibold mb-3">
                            {questionIndex + 1}. {question.question}
                          </h3>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <button
                                key={optionIndex}
                                disabled={isLoading}
                                className={`p-3 rounded-md border w-full text-left disabled:cursor-not-allowed ${answers[questionIndex] === optionIndex
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:bg-gray-50"
                                  }`}
                                onClick={() => {
                                  const newAnswers = [...answers];
                                  newAnswers[questionIndex] = optionIndex;
                                  setAnswers(newAnswers);
                                }}
                              >
                                {String.fromCharCode(65 + optionIndex)}. {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3 pt-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setQuestions([]);
                          setAnswers([]);
                          setTestId([]);
                        }}
                      >
                        Cancel
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
                </div>
              </div>
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
                    <Input disabled={isLoading} placeholder="e.g. Science, Mathematics, History" onChange={(e) => { setSubjects(e.target.value.split(",")); }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Topic/Lesson Title</label>
                    <Input disabled={isLoading} placeholder="e.g. Photosynthesis, Linear Equations, World War II" onChange={(e) => { setTopics(e.target.value.split(",")); }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Grade/Age Level</label>
                    <Input disabled={isLoading} placeholder="e.g. 10th Grade, 8-10 years" onChange={(e) => { setGrade(e.target.value) }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Specific Requirements (Optional)</label>
                    <Textarea placeholder="Any specific points you want to include in the lesson plan..." />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleGenerateLessonPlan}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <LoadingSpinner className="h-4 w-4" />
                          Generating...
                        </div>
                      ) : (
                        "Generate Lesson Plan"
                      )}
                    </Button>

                  </div>
                </CardContent>
              </Card>
            )}

            {isLessonPlanModalOpen && lessonPlan && (
              <LessonPlanModal
                isOpen={isLessonPlanModalOpen}
                onClose={() => setIsLessonPlanModalOpen(false)}
                lessonPlan={lessonPlan}
              />
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
                    <label className="text-sm font-medium">Subject</label>
                    <Input disabled={isLoading} placeholder="e.g. Physics, Mathematics, History" onChange={(e) => { setSubjects(e.target.value.split(",")); }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Topic</label>
                    <Input disabled={isLoading} placeholder="e.g. Kinematics, Algebra, American Revolution" onChange={(e) => { setTopics(e.target.value.split(",")); }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <select onChange={(e) => { setLanguage(e.target.value) }} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                      <option value="hindi">English</option>
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
                    <Button
                      disabled={isLoading}
                      onClick={handleGenerateQuestions}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <LoadingSpinner className="h-4 w-4" />
                          Generating...
                        </div>
                      ) : (
                        "Generate Content"
                      )}
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
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload Image (Optional)</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="doubt-image"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setImagePreview(event.target?.result as string);
                              setSelectedImage(file);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <label
                        htmlFor="doubt-image"
                        className="px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
                      >
                        Choose Image
                      </label>
                      {imagePreview && (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="h-20 w-20 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                            onClick={() => {
                              setImagePreview(null);
                              setSelectedImage(null);
                            }}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={handleSolveDoubt}
                      disabled={isLoading}
                    >
                      {isLoading && loadingText === "Analyzing your doubt..." ? (
                        <div className="flex items-center gap-2">
                          <LoadingSpinner className="h-4 w-4" />
                          Analyzing...
                        </div>
                      ) : (
                        "Solve Doubt"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {isSolutionModalOpen && doubtSolution && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                  <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-xl font-bold">Doubt Solution</h3>
                    <button
                      onClick={() => setIsSolutionModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>

                  <div className="overflow-y-auto p-6 flex-1">
                    {doubtSolution.imageUrl && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Uploaded Image:</h4>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <img
                              src={doubtSolution.imageUrl}
                              alt="Doubt image"
                              className="max-h-60 w-auto rounded-md border"
                            />
                          </div>
                          <div className="flex-1 bg-gray-50 p-4 rounded-md">
                            <h4 className="font-semibold mb-2">Extracted Text:</h4>
                            <div className="whitespace-pre-wrap text-sm">
                              {doubtSolution.imageText}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="prose max-w-none">
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <div
                        className="text-gray-700 whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: formatSolutionText(doubtSolution.answer) }}
                      />
                    </div>
                  </div>

                  <div className="border-t p-4 flex justify-end">
                    <Button
                      onClick={() => setIsSolutionModalOpen(false)}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
