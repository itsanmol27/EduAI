import llm from "./llmProvider.js";

async function generateLessonPlan(subject, topic, grade) {
    const system_message = `Create a detailed lesson plan for ${subject} on ${topic} for grade ${grade}. The lesson plan should include the following sections:
    1. Objective
    2. Prerequisites
    3. Introduction
    4. Content_Outline
    5. Activities
    6. Assessment`

    const messages = [
        ["system", system_message],
        ["human", "Generate a structured lesson plan in JSON format."]
    ];

    try {
        const response = await llm.invoke(messages);
        let lessonPlanContent = response.content;
        lessonPlanContent = lessonPlanContent.trim();
        lessonPlanContent = lessonPlanContent.replace(/```json/g, '').replace(/```/g, '');
        console.log(lessonPlanContent);
        return lessonPlanContent;
    } catch (error) {
        console.log(error);
    }
}

export default generateLessonPlan;
