import llm from "./llmProvider.js";

async function solveDoubt(doubtText) {
    const system_message = `You are an expert in solving conceptual multiple-choice questions (MCQs) and providing clear, step-by-step explanations. Please solve the following problem with a detailed explanation for the correct answer and reasoning.`;

    const messages = [
        ["system", system_message],
        ["human", `Here is a question submitted by a student:\n\n"${doubtText}"\n\nPlease solve the problem, evaluate all the given options, and explain why the correct answer is correct`]
    ];

    try {
        const response = await llm.invoke(messages);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default solveDoubt;
