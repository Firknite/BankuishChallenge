const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes/index.cjs');

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(routes);

const server = app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

module.exports = server;
