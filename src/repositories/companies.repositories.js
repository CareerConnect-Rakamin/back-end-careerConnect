const { CompanyModel, UserModel } = require('../models');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');
const { col } = require('sequelize');

async function getCompanies({ page }) {
  try {
    const companies = await CompanyModel.findAll({
      offset: (page - 1) * 9,
      limit: 9
    });
    return companies;
  } catch (error) {
    throw new Error(`Error while fetching companies: ${error.message}`);
  }
}

const getCompanyById = async (id) => {
  const result = await CompanyModel.findByPk(id, {
    attributes: [
      'companies_id',
      [col(`user.email`), 'email'],
      [col(`user.role`), 'role'],
      'photo_profile',
      'name',
      'type',
      'description',
      'website',
      'email_company',
      'phone_number',
      'address'
    ],
    include: [
      {
        model: UserModel,
        attributes: [],
        as: 'user'
      }
    ],
    where: {
      id: id
    }
  });
  return result;
};

const updateCompanyById = async (id, data) => {
  const {
    email,
    password,
    name,
    type,
    description,
    website,
    email_company,
    phone_number,
    address
  } = data;
  if (password) {
    const password = await bcrypt.hash(password, 10);
  }
  await UserModel.update(
    {
      email,
      password
    },
    {
      where: {
        id: id
      }
    }
  );

  await CompanyModel.update(
    {
      name,
      type,
      description,
      website,
      email_company,
      phone_number,
      address
    },
    {
      where: {
        companies_id: id
      }
    }
  );
};

const createCompany = async (params) => {
  const { email, password, role } = params;
  const {
    photo_profile,
    name,
    type,
    address,
    phoneNumber,
    website,
    companyEmail
  } = params;

  const newUser = await UserModel.create({
    email: email,
    password,
    role
  });

  const id = newUser.id;
  await CompanyModel.create({
    companies_id: id,
    photo_profile,
    name,
    email_company: companyEmail,
    type,
    address,
    phone_number: phoneNumber,
    website
  });
};

module.exports = {
  getCompanies,
  getCompanyById,
  updateCompanyById,
  createCompany
};
