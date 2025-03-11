import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    answer: { type: String, required: true },
    solution: { type: String, required: true }
  });
  
const topicSchema = new mongoose.Schema({
topic: { type: String, required: true },
questions: [questionSchema]
});

const testQuestionSchema = new mongoose.Schema({
subject: { type: String, required: true },
topics: [topicSchema]
});

const testSchema = new mongoose.Schema({
userId: { type: String, required: true },
questions: [testQuestionSchema],
answers: [String],
score: { type: Number }
});

const Test = mongoose.model('Test', testSchema);

export default Test;