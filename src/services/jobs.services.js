const { jobsRepositories } = require('../repositories');

async function getJobs({ page = 1 }) {
  const jobs = await jobsRepositories.getJobs({
    page
  });

  if (!jobs.length) {
    return Promise.reject(new Error('Data Lowongan Pekerjaan Tidak Ditemukan'));
  }

  return jobs;
}

module.exports = { getJobs };
