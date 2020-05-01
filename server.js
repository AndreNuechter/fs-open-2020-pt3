const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const morganConfig = require('./morgan-config');
const routes = require('./src/routes');
const app = express();

app.use(express.json(), morgan(morganConfig), cors());
routes.forEach(
    ({ method, route, cb }) => app[method](route, cb)
);
app.use((_, res) => res.sendStatus(404));
app.listen(process.env.PORT || 3001);