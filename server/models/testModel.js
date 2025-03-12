import mongoose from "mongoose";

const testQuestionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: Number, required: true },
  solution: { type: String, required: true }
},{id:false});

const summarySchema = new mongoose.Schema({
  correct: { type: Number, required: true },
  total: { type: Number, required: true }
} , {id:false});

const testSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  questions: [testQuestionSchema],
  answers: [Number],
  score: { type: Number },
  total: { type: Number },
  topicsPerformance: {
    type: Map,
    of: summarySchema, 
  },
  summeryByAi: { type: String }
});

const Test = mongoose.model('Test', testSchema);

export default Test;
