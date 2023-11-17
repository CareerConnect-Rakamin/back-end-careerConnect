const { UserService } = require('../services');
const bcrypt = require('bcrypt');

const GetUserProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await UserService.GetUserProfile(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const AddDataProfile = async (req, res) => {
  const { email, password, full_name, gender, place_of_birth, date_of_birth } =
    req.body;
  const roleUser = 'jobseeker';
  let photo = 'public/uploads/default/default.png';

  if (gender == 'M') {
    photo = 'public/uploads/default/man.png';
  } else {
    photo = 'public/uploads/default/woman.png';
  }

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await UserService.AddDataProfile({
      email,
      password: hashedPass,
      role: roleUser,
      photo_profile: photo,
      full_name,
      gender,
      place_of_birth,
      date_of_birth
    });
    if (result) {
      res
        .status(200)
        .json({ message: 'Data Profile successfully uploaded...', data : result });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

const UpdateUserProfile = async (req, res) => {
  const id = req.params.id;
  const {
    full_name,
    bio,
    gender,
    phone_number,
    address,
    place_of_birth,
    date_of_birth,
    on_work
  } = req.body;
  try {
    const result = await UserService.UpdateUserProfile({
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
    if (result) {
      res.status(200).json({ message: 'Data Profile successfully updated...' });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const { email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await UserService.UpdateUser({
      id,
      email,
      password: hashedPass
    });
    if (result) {
      res.status(200).json({ message: 'Data User successfully updated...', data : result });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

module.exports = {
  GetUserProfile,
  AddDataProfile,
  UpdateUserProfile,
  UpdateUser
};
