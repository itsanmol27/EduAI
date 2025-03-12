import analyseTestusingAi from "./analyseTestusingAi.js";

async function analyseTest(test){
    const {questions , answers} = test;
    let topicsPerformance = {};
    let score = 0;
    let total = 0;

    for(let i = 0 ; i < questions.length ; i++){
        const userAnswer = answers[i];
        const correctAnswer = questions[i].answer;

        console.log(userAnswer , correctAnswer)

        if (userAnswer === correctAnswer) {
            score += 1;

            if (!topicsPerformance[questions[i].topic]) {
                topicsPerformance[questions[i].topic] = { correct: 0, total: 0 };
            }
            topicsPerformance[questions[i].topic].correct += 1;
        }


        if (!topicsPerformance[questions[i].topic]) {
            topicsPerformance[questions[i].topic] = { correct: 0, total: 0 };
        }
        topicsPerformance[questions[i].topic].total += 1;
        total++;

    }

    test.score = score;
    test.total = total;
    test.topicsPerformance = topicsPerformance;
    await test.save();

    await analyseTestusingAi(test);

}

export default analyseTest