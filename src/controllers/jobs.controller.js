const { jobsService } = require('../services');

async function getJobs(req, res) {
  try {
    const result = await jobsService.getJobs(req.query);
    res.json({
      status: 'Success',
      data: result
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { getJobs };
