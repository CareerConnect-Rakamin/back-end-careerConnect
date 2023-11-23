const { requirementsService } = require('../services');
const logger = require('../utils/logger');

const getRequirementsByJobsId = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await requirementsService.getRequirementsByJobsId(id);
    res.json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    if (err.message == 404) {
      res.status(404).json({
        status: 'failed',
        message: err.message
      });
    }
    logger.error(err.message);
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  getRequirementsByJobsId
};
