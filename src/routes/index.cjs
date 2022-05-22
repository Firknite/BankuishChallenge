const express = require('express');
const usersRouting = require('./users.cjs');
const { authenticateToken, generateAccessToken } = require('../utils/auth.cjs');

const router = express.Router();

router.get('/health', (req, res) =>
	res.status(200).send('The application is healthy!')
);

router.post('/getToken', (req, res) => {
	res.status(200).send({
		token: generateAccessToken(req.body.username),
	});
});

router.use('/user', usersRouting(router, authenticateToken));

module.exports = router;
