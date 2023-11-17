const { ProfileRepo } = require('../repositories');

const GetUserProfile = async (id) => {
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const response = await ProfileRepo.ProfileUser(id);
  return response;
};

const AddDataProfile = async (data) => {
  const {
    email,
    password,
    role,
    photo_profile,
    full_name,
    gender,
    place_of_birth,
    date_of_birth
  } = data;

  if (
    !full_name &&
    !gender &&
    !date_of_birth &&
    !photo_profile &&
    !email &&
    !password &&
    !role
  ) {
    return Promise.reject(new Error('Some value null...'));
  }

  const response = ProfileRepo.AddData({
    email,
    password,
    role,
    photo_profile,
    full_name,
    gender,
    place_of_birth,
    date_of_birth
  });
  return response;
};

const UpdateUserProfile = async (data) => {
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
  } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }

  const response = await ProfileRepo.UpdateData({
    id,
    full_name,
    bio,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth,
    on_work
  });
  return response;
};

const UpdateUser = async (data) => {
  const { id, email, password } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const response = await ProfileRepo.UpdateUser({ id, email, password });
  return response;
};

module.exports = {
  GetUserProfile,
  AddDataProfile,
  UpdateUserProfile,
  UpdateUser
};
