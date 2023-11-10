const { JobSeekerModel } = require('../models')

const jobseekers = []

const createJobSeeker = (
  id,
  photo_profile,
  full_name,
  bio,
  gender,
  phone_number,
  address,
  date_of_birth,
  cv_path,
  portfolio_path,
  on_work,
) => {
  try {
    const jobseeker = {
      id,
      photo_profile,
      full_name,
      bio,
      gender,
      phone_number,
      address,
      date_of_birth,
      cv_path,
      portfolio_path,
      on_work,
    }
    jobseekers.push(jobseeker)
    console.info('JobSeeker created successfully.')
  } catch (error) {
    console.error('Error creating jobseeker:', error)
  }
}

createJobSeeker(
  1,
  `public/uploads/default/man.png`,
  `John Doe`,
  `Bio of me as Job Seeker`,
  'M',
  `+6281312345565`,
  `Jln. Abal-abal, Jakarta, Wakanda`,
  new Date(2000, 6, 12),
  null,
  null,
  false,
)
createJobSeeker(
  3,
  `public/uploads/default/woman.png`,
  `Marry Doe`,
  `Bio of me as Job Seeker`,
  'F',
  `+628131232355365`,
  `Jln. Masih Abal-abal, Surabaya, Wakanda`,
  new Date(2002, 3, 14),
  null,
  null,
  false,
)
createJobSeeker(
  5,
  `public/uploads/default/man.png`,
  `Still Doe`,
  `Bio of me as Job Seeker`,
  'M',
  `+6281312345521`,
  `Jln. Abal-abal Again, Bandung, Wakanda`,
  new Date(1999, 10, 23),
  null,
  null,
  false,
)

const seedJobSeekers = async () => {
  try {
    await JobSeekerModel.bulkCreate(jobseekers)
    console.info('JobSeeker seed data inserted successfully.')
  } catch (error) {
    console.error('Error seeding jobseeker data:', error)
  }
}

module.exports = seedJobSeekers
