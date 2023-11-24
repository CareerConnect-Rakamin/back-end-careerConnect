const { UserModel, JobSeeker, Companies } = require('../models')

async function createJobSeeker({
  full_name,
  email,
  password,
  gender,
  phone_number,
  address,
  date_of_birth,
}) {
  return UserModel.create(
    {
      full_name,
      email,
      password,
      role: 'jobseeker',
      jobSeeker: {
        full_name,
        email,
        gender,
        phone_number,
        address,
        date_of_birth,
        is_open: true,
      },
    },
    {
      include: JobSeeker,
    },
  )
}

async function createCompanies({
  name,
  email,
  password,
  address,
  phone_number,
  type,
  website,
}) {
  return UserModel.create(
    {
      full_name: name,
      email,
      password,
      role: 'company',
      company: {
        name,
        email,
        address,
        phone_number,
        type,
        website,
        is_open: true,
      },
    },
    {
      include: Companies,
    },
  )
}

module.exports = {
  createJobSeeker,
  createCompanies,
}
