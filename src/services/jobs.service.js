const { jobsRepository } = require('../repositories');

async function getJobs({ page = 1, limit = 12 }) {
  if (page < 1 || limit < 1) {
    return Promise.reject(new Error('Halaman dan/atau batas tidak valid.'));
  }

  const jobs = await jobsRepository.getJobs({
    page,
    limit
  });

  if (!jobs.length) {
    return Promise.reject(new Error('Data Lowongan Pekerjaan Tidak Ditemukan'));
  }

  return jobs;
}

module.exports = { getJobs };
