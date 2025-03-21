const mongoose = require('mongoose');

const lessonPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  gradeLevel: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  timeAllocation: {
    type: String,
    required: true
  },
  objectives: [{
    type: String,
    required: true
  }],
  prerequisites: [{
    type: String,
    required: true
  }],
  introduction: {
    type: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  contentOutline: [{
    day: {
      type: Number,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    activities: [{
      type: String,
      required: true
    }]
  }],
  activities: [{
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }],
  assessment: {
    formative: [{
      type: String,
      required: true
    }],
    summative: {
      type: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  },
  materials: [{
    type: String,
    required: true
  }],
  differentiation: {
    support: {
      type: String,
      required: true
    },
    challenge: {
      type: String,
      required: true
    }
  }
});

const LessonPlan = mongoose.model('LessonPlan', lessonPlanSchema);

module.exports = LessonPlan;
