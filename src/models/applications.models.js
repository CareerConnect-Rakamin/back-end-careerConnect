const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const JobSeeker = require('./jobSeekers.models');
const Job = require('./jobs.models');

const Application = sequelize.define('applications', {
  jobseekers_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: JobSeeker,
      key: 'id',
    },
  },
  jobs_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Job,
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('pending', 'interview', 'accepted', 'rejected'),
    allowNull: false,
  },
},
{
    tableName: 'applications',
    freezeTableName: true,
    timestamps: true,
});

Application.belongsTo(JobSeeker, { foreignKey: 'jobseekers_id' });
Application.belongsTo(Job, { foreignKey: 'jobs_id' });

module.exports = Application;
