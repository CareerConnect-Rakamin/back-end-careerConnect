const express = require('express');
const { api } = require('./config');
const swaggerUi = require('swagger-ui-express');
const specs = require('./utils/swagger');
const { morganMiddleware } = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(morganMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(`/${api}`, routes);

module.exports = app;