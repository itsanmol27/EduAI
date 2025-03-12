import llm from "./llmProvider.js";

async function analyseTestusingAi(test){

    console.log(JSON.stringify(test.topicsPerformance));

    const system_message = `You are an expert professor in JEE level questions.
                            `
    
    const messages = [
        ["system" , system_message],
        ["human" , `The student has completed a test. Below is their performance data:
                    ${JSON.stringify(test.topicsPerformance)}
                    Please generate a performance analysis with specific remarks on strengths, weaknesses,
                    and targeted areas for improvement. Make the feedback concise, with a focus on the most
                    important points.`]
    ]

    try {
        const response = await llm.invoke(messages);
        console.log(response.content)
        test.summeryByAi = response.content;
        await test.save();
    } catch (error) {
        console.log(error);
    }
}

export default analyseTestusingAi;