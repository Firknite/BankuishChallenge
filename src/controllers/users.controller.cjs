function sortUserCourses(body) {
	const { courses, userId } = body;

	const sortedPreferences = [
		'Finance',
		'Investment',
		'InvestmentManagement',
		'PortfolioTheories',
		'InvestmentStyle',
		'PortfolioConstruction',
	];

	let sortedCourses = [];

	sortedPreferences.forEach((preference) => {
		courses.forEach((course) => {
			if (preference == course.requiredCourse) {
				sortedCourses.push(course);
			}
		});
	});

	return { userId, courses: sortedCourses };
}

module.exports = { sortUserCourses };
