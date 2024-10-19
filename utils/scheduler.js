const cron = require('node-cron');
const scheduledJobs = new Map();

// Schedule a cron job
exports.scheduleCronJob = (job) => {
  const task = cron.schedule(job.schedule, () => {
    // Add your logic for executing the job
    console.log(`Executing job ${job.name}`);
  });
  scheduledJobs.set(job._id.toString(), task);
};

// Remove a scheduled cron job
exports.removeScheduledJob = (jobId) => {
  const task = scheduledJobs.get(jobId.toString());
  if (task) {
    task.destroy();
    scheduledJobs.delete(jobId.toString());
  }
};
