const CronJob = require('../models/cronJob');
const { scheduleCronJob, removeScheduledJob } = require('../utils/scheduler');

exports.createCronJob = async (req, res) => {
  const { name, triggerUrl, apiKey, schedule, startDate } = req.body;

  try {
    const newCronJob = new CronJob({ name, triggerUrl, apiKey, schedule, startDate });
    await newCronJob.save();
    
    // Schedule the job after saving
    scheduleCronJob(newCronJob);

    res.status(201).json(newCronJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllCronJobs = async (req, res) => {
  try {
    const cronJobs = await CronJob.find();
    res.status(200).json(cronJobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getCronJobById = async (req, res) => {
  try {
    const cronJob = await CronJob.findById(req.params.id);
    if (!cronJob) return res.status(404).json({ message: 'Cron job not found' });

    res.status(200).json(cronJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateCronJob = async (req, res) => {
  try {
    const updatedCronJob = await CronJob.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCronJob) return res.status(404).json({ message: 'Cron job not found' });

    // Update the cron job schedule
    removeScheduledJob(updatedCronJob._id);
    scheduleCronJob(updatedCronJob);

    res.status(200).json(updatedCronJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteCronJob = async (req, res) => {
  try {
    const cronJob = await CronJob.findByIdAndDelete(req.params.id);
    if (!cronJob) return res.status(404).json({ message: 'Cron job not found' });

    // Remove scheduled job
    removeScheduledJob(cronJob._id);

    res.status(200).json({ message: 'Cron job deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
