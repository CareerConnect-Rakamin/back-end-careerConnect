const { col } = require('sequelize');
const { JobModel, CompanyModel } = require('../models');

async function getJobs({ page }) {
  const offset = (page - 1) * 12;
  return JobModel.findAll({
    attributes: [
      'id',
      'companies_id',
      [col('company.name'), 'company_name'],
      [col('company.photo_profile'), 'company_photo'],
      'name',
      'description',
      'location',
      'category',
      'job_type',
      'salary',
      'capacity',
      'is_open'
    ],
    offset,
    limit: 12,
    include: [
      {
        model: CompanyModel,
        required: true,
        attributes: [],
        as: 'company'
      }
    ]
  });
}

async function getJobByCompanyId(companies_id) {
  return JobModel.findAll({
    where: [
      {
        companies_id
      }
    ]
  });
}

async function getJobById(id) {
  return JobModel.findByPk(id);
}

async function getJobByIdAndCompanyId({ id, companies_id }) {
  return JobModel.findOne({
    where: [
      {
        id,
        companies_id
      }
    ]
  });
}

async function getJobByCompanyIdAndName({ companies_id, name }) {
  return JobModel.findAll({
    where: [
      {
        companies_id,
        name
      }
    ]
  });
}

async function createJob({
  companies_id,
  name,
  description,
  location,
  category,
  job_type,
  salary,
  capacity
}) {
  return JobModel.create({
    companies_id,
    name,
    description,
    location,
    category,
    job_type,
    salary,
    capacity,
    is_open: true
  });
}

async function updateJob({
  id,
  companies_id,
  name,
  description,
  location,
  category,
  job_type,
  salary,
  capacity,
  is_open
}) {
  return JobModel.update(
    {
      id,
      companies_id,
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity,
      is_open
    },
    {
      where: {
        id
      }
    }
  );
}

async function deleteJob(id) {
  return JobModel.destroy({
    where: {
      id
    }
  });
}

module.exports = {
  getJobs,
  getJobById,
  getJobByCompanyId,
  getJobByIdAndCompanyId,
  getJobByCompanyIdAndName,
  createJob,
  updateJob,
  deleteJob
};
