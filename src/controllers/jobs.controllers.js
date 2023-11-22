const { jobsServices } = require('../services');
const logger = require('../utils/logger');

async function getJobs(req, res) {
  try {
    const result = await jobsServices.getJobs(req.query);
    res.json({
      status: 'Success',
      data: result
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getJobByCompanyId(req, res) {
  try {
    const result = await jobsServices.getJobByCompanyId(req.params.compId);
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function getJobById(req, res) {
  try {
    const result = await jobsServices.getJobById(req.params.jobId);
    res.status(200).json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function createJob(req, res) {
  try {
    const {
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity
    } = req.body;
    const result = await jobsServices.createJob({
      companies_id: req.userdata.id,
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity
    });
    res.status(201).json({
      status: 'Success',
      message: 'Job Created'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    if (err.message == 409) {
      return res.status(409).json({
        status: 'failed',
        message: 'Jobs already exists'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function updateJob(req, res) {
  try {
    const {
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity,
      is_open
    } = req.body;
    const result = await jobsServices.updateJob({
      id: req.params.jobId,
      companies_id: req.userdata.id,
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity,
      is_open
    });
    res.status(200).json({
      status: 'Success',
      message: 'Job Updated'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    if (err.message == 403) {
      return res.status(403).json({
        status: 'failed',
        message: "You don't have access"
      });
    }
    if (err.message == 409) {
      return res.status(409).json({
        status: 'failed',
        message: 'Jobs already exists'
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

async function deleteJob(req, res) {
  try {
    const result = await jobsServices.deleteJob({
      id: req.params.jobId,
      companies_id: req.userdata.id
    });
    res.status(200).json({
      status: 'Success',
      message: 'Job Deleted'
    });
  } catch (err) {
    if (err.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    if (err.message == 403) {
      return res.status(403).json({
        status: 'failed',
        message: "You don't have access"
      });
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

module.exports = {
  getJobs,
  getJobById,
  getJobByCompanyId,
  createJob,
  updateJob,
  deleteJob
};
