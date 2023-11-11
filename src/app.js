const express = require('express');
const { api, port } = require('./config');
const swaggerUi = require('swagger-ui-express');
const specs = require('./utils/swagger');
const router = require('./routes');
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(`/${api}`, router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
