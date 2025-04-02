import LessonPlan from "../models/lessonPlanModel.js";
import llm from "./llmProvider.js";

async function generateLessonPlan(subject, topic, grade) {
    const system_message = `Create a detailed lesson plan for ${subject} on ${topic} for grade ${grade}. The lesson plan should be structured as a JSON object with the following fields:
    {
        "title": "Lesson Title",
        "gradeLevel": "Grade ${grade}",
        "subject": "${subject}",
        "timeAllotment": "Duration of lesson",
        "objective": {
            "overall": "Main goal of the lesson",
            "specific": ["Specific learning objectives"]
        },
        "prerequisites": ["Required knowledge or skills"],
        "introduction": {
            "hook": "Engaging start to the lesson",
            "overview": "Brief introduction to the topic"
        },
        "contentOutline": [
            {"day": 1, "topic": "Topic name", "details": "Lesson details"}
        ],
        "activities": [
            {"day": 1, "activity": "Activity description", "materials": "Required materials"}
        ],
        "assessment": {
            "formative": ["Formative assessment methods"],
            "summative": ["Summative assessment methods"]
        },
        "differentiation": {
            "support": "Support strategies for struggling students",
            "challenge": "Challenge strategies for advanced students"
        },
        "resources": ["Additional learning materials"]
    }
    Make sure the response is a valid JSON object with all these fields.`;

    const messages = [
        ["system", system_message],
        ["human", "Generate a structured lesson plan in JSON format."]
    ];

    try {
        const response = await llm.invoke(messages);
        let lessonPlanContent = response.content.trim();
        
        // Ensure LLM response does not contain unnecessary code blocks
        lessonPlanContent = lessonPlanContent.replace(/```json/g, '').replace(/```/g, '');

        // Parse JSON safely
        let parsedLessonPlan = JSON.parse(lessonPlanContent);

        // Validate and fill missing fields
        const completeLessonPlan = {
            title: parsedLessonPlan.title || "Untitled Lesson",
            gradeLevel: parsedLessonPlan.gradeLevel || `Grade ${grade}`,
            subject: parsedLessonPlan.subject || subject,
            timeAllotment: parsedLessonPlan.timeAllotment || "45 minutes",
            objective: parsedLessonPlan.objective || {
                overall: "No objective provided",
                specific: []
            },
            prerequisites: parsedLessonPlan.prerequisites || [],
            introduction: parsedLessonPlan.introduction || {
                hook: "No hook provided",
                overview: "No overview provided"
            },
            contentOutline: Array.isArray(parsedLessonPlan.contentOutline) ? parsedLessonPlan.contentOutline : [],
            activities: Array.isArray(parsedLessonPlan.activities) ? parsedLessonPlan.activities : [],
            assessment: parsedLessonPlan.assessment || {
                formative: [],
                summative: []
            },
            differentiation: parsedLessonPlan.differentiation || {
                support: "No support strategies provided",
                challenge: "No challenge strategies provided"
            },
            resources: parsedLessonPlan.resources || []
        };

        console.log(completeLessonPlan);
        return completeLessonPlan;
    } catch (error) {
        console.error("Error generating lesson plan:", error);
        return null;
    }
}

export default generateLessonPlan;
