import llm from "./llmProvider.js";

async function generateQuestion(difficulty, subject, topic, language) {
    const system_message = `Generate 5 multiple choice ${difficulty} questions in ${subject} on ${topic} in ${language}. Each question must include: topic, question, options, answer (index of correct option), and a solution.`;

    const messages = [
        ["system", system_message],
        ["human", "Generate a JSON array of questions."]
    ];

    try {
        const response = await llm.invoke(messages);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default generateQuestion;
