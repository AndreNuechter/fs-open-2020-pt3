require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const morganConfig = require('./morgan-config');
const routes = require('./src/routes');
const errorHandler = require('./error-handler');
const app = express();

app.use(express.static('build'), express.json(), morgan(morganConfig), cors());
routes.forEach(
    ({ method, route, cb }) => app[method](route, cb)
);
app.use((_, res) => res.sendStatus(404));
app.use(errorHandler);
app.listen(process.env.PORT || 3001);