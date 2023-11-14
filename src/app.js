const { port } = require('./config');
const logger = require('./utils/logger');
const app = require('./server');

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
