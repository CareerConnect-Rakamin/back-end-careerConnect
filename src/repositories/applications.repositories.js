const { ApplicationModel } = require('../models');

async function createApply({ jobs_id, jobseekers_id }) {
  return ApplicationModel.create({
    jobseekers_id,
    jobs_id,
    status: 'pending'
  });
}

async function getApplyBySeekerId(jobseekers_id) {
  return ApplicationModel.findAll({
    where: {
      jobseekers_id
    }
  });
}

async function getApplyByJobId(jobs_id) {
  return ApplicationModel.findAll({
    where: {
      jobs_id
    }
  });
}

async function getApplyBySeekerAndJobId({ jobs_id, jobseekers_id }) {
  return ApplicationModel.findAll({
    where: {
      jobseekers_id,
      jobs_id
    }
  });
}

async function updateApply({ jobs_id, jobseekers_id, status }) {
  return ApplicationModel.update(
    {
      status
    },
    {
      where: {
        jobseekers_id,
        jobs_id
      }
    }
  );
}

module.exports = {
  createApply,
  getApplyBySeekerId,
  getApplyByJobId,
  getApplyBySeekerAndJobId,
  updateApply
};
