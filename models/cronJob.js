const mongoose = require('mongoose');

// Cron Job Schema
const cronJobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  triggerUrl: { type: String, required: true },
  apiKey: { type: String, required: true },
  schedule: { type: String, required: true },
  startDate: { type: Date, required: true },
  history: [{ 
    timestamp: { type: Date, default: Date.now },
    status: { type: String },
    responseData: { type: Object }
  }]
});

const CronJob = mongoose.model('CronJob', cronJobSchema);
module.exports = CronJob;
