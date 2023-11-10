const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')
const Company = require('./companies.models')

const Job = sequelize.define(
  'jobs',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    companies_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Company,
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        'Information',
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Sales',
        'Marketing',
        'Engineering',
        'Customer_Service',
        'Human_Resources',
      ),
      allowNull: false,
    },
    job_type: {
      type: DataTypes.ENUM('WFO', 'WFH'),
      allowNull: false,
    },
    salary: {
      type: DataTypes.BIGINT,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'jobs',
    freezeTableName: true,
    timestamps: true,
  },
)

Job.belongsTo(Company, { foreignKey: 'companies_id' })

module.exports = Job
