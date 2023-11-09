const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')
const User = require('./users.models')

const Company = sequelize.define(
  'companies',
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Retail',
        'Entertainment',
        'Manufacturing',
        'Consulting',
        'Energy',
      ),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    website: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'companies',
    freezeTableName: true,
    timestamps: true,
  },
)

Company.belongsTo(User, { foreignKey: 'id' })

module.exports = Company
