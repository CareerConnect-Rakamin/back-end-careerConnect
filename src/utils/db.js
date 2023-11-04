const { 
    ApplicationModel, CertificateModel, CompanyModel, 
    JobModel, JobSeekerModel, RequirementModel, UserModel  
} = require('../models');

async function syncTables() {
    try {
        await UserModel.sync({ force: true });
        await JobSeekerModel.sync({ force: true });
        await CompanyModel.sync({ force: true });
        await CertificateModel.sync({ force: true });
        await JobModel.sync({ force: true });
        await RequirementModel.sync({ force: true });
        await ApplicationModel.sync({ force: true });

        console.log('Tables synced successfully.');
    } catch (error) {
        console.error('Error syncing tables:', error);
    }
}

syncTables();
