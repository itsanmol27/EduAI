import mongoose from "mongoose";

const lessonPlanSchema = new mongoose.Schema({
  title: {
    type: String
  },
  gradeLevel: {
    type: String
  },
  subject: {
    type: String
  },
  timeAllotment: {
    type: String
  },
  objective: {
    overall: {
      type: String
    },
    specific: [{
      type: String
    }]
  },
  prerequisites: [{
    type: String
  }],
  introduction: {
    hook: {
      type: String
    },
    overview: {
      type: String
    }
  },
  contentOutline: [{
    day: {
      type: Number
    },
    topic: {
      type: String
    },
    details: {
      type: String
    }
  }],
  activities: [{
    day: {
      type: Number
    },
    activity: {
      type: String
    },
    materials: {
      type: String
    }
  }],
  assessment: {
    formative: [{
      type: String
    }],
    summative: [{
      type: String
    }]
  }
});

const LessonPlan = mongoose.model('LessonPlan', lessonPlanSchema);

export default LessonPlan