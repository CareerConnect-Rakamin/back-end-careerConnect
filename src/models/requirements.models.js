const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')
const Job = require('./jobs.models')

const Requirement = sequelize.define(
  'requirements',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jobs_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Job,
        key: 'id',
      },
    },
    what_will_you_do: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    what_will_you_need: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'requirements',
    freezeTableName: true,
    timestamps: true,
  },
)

Requirement.belongsTo(Job, { foreignKey: 'jobs_id' })

module.exports = Requirement
