const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')
const User = require('./users.models')

const JobSeeker = sequelize.define(
  'jobseekers',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    photo_profile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.TEXT,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cv_path: {
      type: DataTypes.STRING(255),
    },
    portfolio_path: {
      type: DataTypes.STRING(255),
    },
    on_work: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'jobseekers',
    freezeTableName: true,
    timestamps: true,
  },
)

JobSeeker.belongsTo(User, { foreignKey: 'id' })

module.exports = JobSeeker
