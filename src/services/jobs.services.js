const { jobsRepositories } = require('../repositories');
const { usersRepositories } = require('../repositories');

async function getJobs({ page = 1 }) {
  const jobs = await jobsRepositories.getJobs({
    page
  });

  if (!jobs.length) {
    return Promise.reject(new Error('Data Lowongan Pekerjaan Tidak Ditemukan'));
  }

  return jobs;
}

async function getJobByCompanyId(companies_id) {
  const jobs = await jobsRepositories.getJobByCompanyId(companies_id);

  if (!jobs.length) {
    throw new Error(404);
  }

  return jobs;
}

async function getJobById(id) {
  const jobs = await jobsRepositories.getJobById(id);

  if (!jobs) {
    throw new Error(404);
  }

  return jobs;
}

async function createJob({
  companies_id,
  name,
  description,
  what_will_you_do,
  what_will_you_need,
  location,
  category,
  job_type,
  salary,
  capacity
}) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }

  const jobs = await jobsRepositories.getJobByCompanyIdAndName({
    companies_id,
    name
  });

  if (jobs.length) {
    throw new Error(409);
  }

  const createJob = await jobsRepositories.createJob({
    companies_id,
    name,
    description,
    what_will_you_do,
    what_will_you_need,
    location,
    category,
    job_type,
    salary,
    capacity
  });

  return createJob;
}

async function updateJob({
  id,
  companies_id,
  name,
  description,
  what_will_you_do,
  what_will_you_need,
  location,
  category,
  job_type,
  salary,
  capacity,
  is_open
}) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }

  const jobs = await jobsRepositories.getJobById(id);
  if (!jobs) {
    throw new Error(404);
  }

  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  const existJobs = await jobsRepositories.getJobByCompanyIdAndName({
    companies_id,
    name
  });

  if (existJobs.length) {
    throw new Error(409);
  }

  const updateJob = await jobsRepositories.updateJob({
    id,
    companies_id,
    name,
    description,
    what_will_you_do,
    what_will_you_need,
    location,
    category,
    job_type,
    salary,
    capacity,
    is_open
  });

  return updateJob;
}

async function deleteJob({ id, companies_id }) {
  const user = await usersRepositories.getUserById(companies_id);
  if (!user) {
    throw new Error(404);
  }
  const jobs = await jobsRepositories.getJobById(id);

  if (!jobs) {
    throw new Error(404);
  }

  const access = await jobsRepositories.getJobByIdAndCompanyId({
    id,
    companies_id
  });
  if (!access) {
    throw new Error(403);
  }

  const deleteJob = await jobsRepositories.deleteJob(id);

  return deleteJob;
}

module.exports = {
  getJobs,
  getJobById,
  getJobByCompanyId,
  createJob,
  updateJob,
  deleteJob
};
