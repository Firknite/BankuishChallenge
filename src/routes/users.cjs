const { sortUserCourses } = require('../controllers/users.controller.cjs');

function usersRouting(router, authenticateToken) {
	router.post('/courses', authenticateToken, (req, res) => {
		const sortedCourses = sortUserCourses(req.body);
		res.status(200).send(sortedCourses);
	});
	return router;
}

module.exports = usersRouting;
