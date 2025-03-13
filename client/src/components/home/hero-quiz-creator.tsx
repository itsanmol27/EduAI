"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroQuizCreator() {
  const [activeTab, setActiveTab] = useState<'simple' | 'advanced'>('simple');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedQuestionType, setSelectedQuestionType] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [questionCount, setQuestionCount] = useState(5);

  const topics = ['Math', 'Science', 'History', 'Literature', 'Geography'];
  const questionTypes = ['Multiple Choice', 'True/False', 'Short Answer', 'Fill in the Blank'];

  return (
    <Card className="max-w-3xl mx-auto border-orange-200 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex space-x-2 mb-6">
          <Button
            variant={activeTab === 'simple' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('simple')}
            className={activeTab === 'simple' ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            Simple
          </Button>
          <Button
            variant={activeTab === 'advanced' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('advanced')}
            className={activeTab === 'advanced' ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            Advanced
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-md font-semibold mb-3">Select Your Quiz Topic</h3>
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <Button
                  key={topic}
                  variant="outline"
                  size="sm"
                  className={selectedTopic === topic ? 'bg-orange-100 border-orange-500' : ''}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3">Select Question Type</h3>
            <div className="flex flex-wrap gap-3">
              {questionTypes.map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  size="sm"
                  className={selectedQuestionType === type ? 'bg-orange-100 border-orange-500' : ''}
                  onClick={() => setSelectedQuestionType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3">Select Language</h3>
            <Button
              variant="outline"
              size="sm"
              className="bg-orange-100 border-orange-500"
            >
              English
            </Button>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-3">Number of Questions</h4>
            <div className="flex items-center">
              <div className="text-sm text-gray-600">{questionCount} Questions</div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Generate Quiz
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
