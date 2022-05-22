const {
	sortUserCourses,
} = require('../../src/controllers/users.controller.cjs');

describe('users controllers suite test', () => {
	it('sortUserCourses function', () => {
		const requestData = {
			userId: '30ecc27b-9df7-4dd3-b52f-d001e79bd035',
			courses: [
				{
					desiredCourse: 'PortfolioConstruction',
					requiredCourse: 'PortfolioTheories',
				},
				{
					desiredCourse: 'InvestmentManagement',
					requiredCourse: 'Investment',
				},
				{
					desiredCourse: 'Investment',
					requiredCourse: 'Finance',
				},
				{
					desiredCourse: 'PortfolioTheories',
					requiredCourse: 'Investment',
				},
				{
					desiredCourse: 'InvestmentStyle',
					requiredCourse: 'InvestmentManagement',
				},
			],
		};

		const orderedResponse = {
			userId: '30ecc27b-9df7-4dd3-b52f-d001e79bd035',
			courses: [
				{
					desiredCourse: 'Investment',
					requiredCourse: 'Finance',
				},
				{
					desiredCourse: 'InvestmentManagement',
					requiredCourse: 'Investment',
				},
				{
					desiredCourse: 'PortfolioTheories',
					requiredCourse: 'Investment',
				},
				{
					desiredCourse: 'InvestmentStyle',
					requiredCourse: 'InvestmentManagement',
				},
				{
					desiredCourse: 'PortfolioConstruction',
					requiredCourse: 'PortfolioTheories',
				},
			],
		};

		const result = sortUserCourses(requestData);

		expect(result).toStrictEqual(orderedResponse);
	});
});
