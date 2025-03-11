import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv"

dotenv.config();

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
});

export default llm