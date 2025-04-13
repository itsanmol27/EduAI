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

const AiSchema = new mongoose.Schema({
  Targeted_areas_for_Improvement: { type: String},
  Strengths: { type: String },
  Weaknesses: { type: String },
  Performance_Analysis: { type: String }
} , {id:false});

const testSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  questions: [testQuestionSchema],
  answers: [Number],
  score: { type: Number },
  total: { type: Number },
  topicsPerformance: {
    type: Map,
    of: summarySchema, 
  },
  summeryByAi: { type: AiSchema }
});

const Test = mongoose.model('Test', testSchema);

export default Test;
