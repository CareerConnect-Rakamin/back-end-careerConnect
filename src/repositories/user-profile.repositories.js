const {
  JobSeekerModel,
  UserModel,
  CertificateModel,
  ApplicationModel
} = require('../models');

const ProfileUser = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = params;
      const profile = await UserModel.findByPk(id);
      const dataProfile = await JobSeekerModel.findByPk(id);
      const dataCertificates = await CertificateModel.findAll({
        where: {
          jobseekers_id: id
        }
      });
      const ApplyJobs = await ApplicationModel.findAll({
        where: {
          jobseekers_id: id
        }
      });
      resolve({ profile, dataProfile, dataCertificates, ApplyJobs });
    } catch (err) {
      reject(err);
    }
  });
};

const AddData = (params) => {
  return new Promise(async (resolve, reject) => {
    const { email, password, role } = params;

    const { photo_profile, full_name, gender, place_of_birth, date_of_birth } =
      params;

    try {
      const addUser = await UserModel.create({
        email: email,
        password: password,
        role: role
      });

      const userId = addUser.id;
      const addData = await JobSeekerModel.create({
        id: userId,
        photo_profile: photo_profile,
        full_name: full_name,
        gender: gender,
        place_of_birth: place_of_birth,
        date_of_birth: date_of_birth
      });

      resolve({ addUser, addData });
    } catch (error) {
      reject(error);
    }
  });
};

const UpdateData = (params) => {
  return new Promise(async (resolve, reject) => {
    const {
      id,
      full_name,
      bio,
      gender,
      phone_number,
      address,
      place_of_birth,
      date_of_birth,
      on_work
    } = params;
    try {
      const updateData = await JobSeekerModel.update(
        {
          full_name: full_name,
          bio: bio,
          gender: gender,
          phone_number: phone_number,
          address: address,
          place_of_birth: place_of_birth,
          date_of_birth: date_of_birth,
          on_work: on_work
        },
        {
          where: {
            id: id
          }
        }
      );
      resolve(updateData);
    } catch (error) {
      reject(error);
    }
  });
};

const UpdateUser = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, email, password } = params;
    try {
      const updateUser = await UserModel.update(
        {
          email: email,
          password: password
        },
        {
          where: {
            id: id
          }
        }
      );
      resolve(updateUser);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  ProfileUser,
  UpdateUser,
  AddData,
  UpdateData
};
