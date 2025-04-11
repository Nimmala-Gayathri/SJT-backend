const express = require('express');
const router = express.Router();
const {
  addJob,
  getJobs,
  updateJob,
  deleteJob
} = require('../controllers/jobcontroller');

router.post('/jobs', addJob);
router.get('/jobs', getJobs);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

module.exports = router;
