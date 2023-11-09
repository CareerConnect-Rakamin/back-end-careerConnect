const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'company'),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    freezeTableName: true,
    timestamps: true,
  },
)

module.exports = User
