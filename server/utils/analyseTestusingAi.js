import llm from "./llmProvider.js";

async function analyseTestusingAi(test) {
  console.log(JSON.stringify(test.topicsPerformance));

  const system_message = `You are an expert professor in JEE level questions.
                            `;

  const messages = [
    ["system", system_message],
    [
      "human",
      `The student has completed a test. Below is their performance data:
                    ${JSON.stringify(test.topicsPerformance)}
                    Please generate a performance analysis with specific remarks on strengths, weaknesses,
                    and targeted areas for improvement. Make the feedback concise, with a focus on the most
                    important points. Generate a JSON of the analysis that will include Performance_Analysis ,Strengths, Weaknesses,
                    and targeted_areas_for_improvement in string format.`,
    ],
  ];

  try {
    const response = await llm.invoke(messages);
    
    let summaryContent = response.content.trim();
    summaryContent = summaryContent
    .replace(/```json/g, "")
    .replace(/```/g, "");
    
    test.summeryByAi = JSON.parse(summaryContent);
    console.log(summaryContent);

    await test.save();
  } catch (error) {
    console.log(error);
  }
}

export default analyseTestusingAi;
