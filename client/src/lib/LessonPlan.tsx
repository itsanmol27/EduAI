import React from "react";

interface LessonPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonPlan: {
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
  };
}

const LessonPlanModal: React.FC<LessonPlanModalProps> = ({ isOpen, onClose, lessonPlan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header with close button */}
        <div className="sticky top-0 bg-white p-6 pb-4 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">{lessonPlan.title}</h1>
              <p className="text-gray-600">{lessonPlan.gradeLevel} | {lessonPlan.subject}</p>
              <p className="mt-1 text-sm text-gray-500">Time Allotment: {lessonPlan.timeAllotment}</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Objective Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Objective</h2>
            <p className="text-gray-600 mt-2">{lessonPlan.objective.overall}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              {lessonPlan.objective.specific.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Prerequisites */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Prerequisites</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              {lessonPlan.prerequisites.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Introduction</h2>
            <div className="mt-2 space-y-2 text-gray-600">
              <p><strong className="text-gray-700">Hook:</strong> {lessonPlan.introduction.hook}</p>
              <p><strong className="text-gray-700">Overview:</strong> {lessonPlan.introduction.overview}</p>
            </div>
          </section>

          {/* Content Outline */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Content Outline</h2>
            <ul className="mt-2 space-y-3 text-gray-600">
              {lessonPlan.contentOutline.map((content, idx) => (
                <li key={idx} className="pl-4 border-l-4 border-blue-500 py-1">
                  <strong className="text-gray-700">Day {content.day}:</strong> {content.topic}
                  <p className="text-gray-600 ml-1">{content.details}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Activities */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Activities</h2>
            <ul className="mt-2 space-y-3 text-gray-600">
              {lessonPlan.activities.map((activity, idx) => (
                <li key={idx} className="pl-4 border-l-4 border-green-500 py-1">
                  <strong className="text-gray-700">Day {activity.day}:</strong> {activity.activity}
                  <p className="text-sm text-gray-500 mt-1">Materials: {activity.materials}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Assessment */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Assessment</h2>
            <div className="mt-2 space-y-3">
              <div>
                <p className="text-gray-700 font-medium">Formative:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-600">
                  {lessonPlan.assessment.formative.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Summative:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-600">
                  {lessonPlan.assessment.summative.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Differentiation */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Differentiation</h2>
            <div className="mt-2 space-y-2 text-gray-600">
              <p><strong className="text-gray-700">Support:</strong> {lessonPlan.differentiation.support}</p>
              <p><strong className="text-gray-700">Challenge:</strong> {lessonPlan.differentiation.challenge}</p>
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Resources</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              {lessonPlan.resources.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanModal;