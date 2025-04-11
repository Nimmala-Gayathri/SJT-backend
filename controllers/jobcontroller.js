const Job = require('../models/Job');

// Add a job
const addJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all jobs with optional filters
const getJobs = async (req, res) => {
  try {
    const { status, sortByDate } = req.query;
    const filter = status ? { status } : {};
    const jobs = await Job.find(filter).sort(sortByDate ? { appliedDate: -1 } : {});
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update status
const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete job
const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addJob, getJobs, updateJob, deleteJob };
