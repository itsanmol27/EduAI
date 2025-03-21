import llm from "./llmProvider.js";

async function generateQuestionwithContext(difficulty , content) {
    const system_message = `You are an expert professor who generates ${difficulty} level questions in from the given content on ${content}. Generate an appropriate question along with the correct answer.`

    const messages = [
        ["system", system_message],
        ["human", "Generate a JSON array of questions add 5 questions of above context. Each question should have the following properties: `topic`, `question`, `options`, `answer`, and `solution`. Ensure the options are multiple choice. Answer should be index from options."]
    ]

    try {
        const response = await llm.invoke(messages);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default generateQuestionwithContext