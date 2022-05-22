const jwt = require('jsonwebtoken');

const generateAccessToken = (username) =>
	jwt.sign({ username }, process.env.TOKEN_SECRET, {
		expiresIn: process.env.TOKEN_EXPIRES,
	});

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

module.exports = { generateAccessToken, authenticateToken };
