import llm from "./llmProvider.js";

async function generateJeeQuestion(difficulty , subject , topic) {
    const system_message = `You are an expert professor who generates ${difficulty} level JEE questions in ${subject} on the topic ${topic}. Generate an appropriate question along with the correct answer.`

    const messages = [
        ["system", system_message],
        ["human", "Generate a JSON array of subjects where each subject contains an array of 5 questions of each topics. Each question should have the following properties: `topic`, `question`, `options`, `answer`, and `solution`. Ensure the options are multiple choice. Use real-world problems in different subjects such as Physics, Chemistry, and Mathematics. For each subject, include multiple topics, and generate 5 questions for each topic."]
    ]

    try {
        const response = await llm.invoke(messages);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default generateJeeQuestion