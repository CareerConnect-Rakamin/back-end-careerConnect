const RegisterRepository = require('../repositories')

async function registerJobSeeker({
  full_name,
  email,
  password,
  gender,
  phone_number,
  address,
  date_of_birth,
}) {
  try {
    const user = await RegisterRepository.createJobSeeker({
      full_name,
      email,
      password,
      gender,
      phone_number,
      address,
      date_of_birth,
    })
    return { success: true, user }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Gagal melakukan registrasi jobseeker' }
  }
}

async function registerCompanies({
  name,
  email,
  password,
  address,
  phone_number,
  type,
  website,
}) {
  try {
    const user = await RegisterRepository.createCompanies({
      name,
      email,
      password,
      address,
      phone_number,
      type,
      website,
    })
    return { success: true, user }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Gagal melakukan registrasi perusahaan' }
  }
}

module.exports = {
  registerJobSeeker,
  registerCompanies,
}
