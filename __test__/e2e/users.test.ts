const request = require('supertest');
const app = require('../../index.cjs');

describe('User endpoints', () => {

	it('should respond 200 with sorted data', async () => {
		const requestTestData = {
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
		const tokenTest =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvbGEiLCJpYXQiOjE2NTMxNTM1NjAsImV4cCI6MTY1NDE1MzU1OX0.CARg63zz_X3oXKqNbK4KvNkSgGBtKraOAF8gJQN4tKM';

		const responseExpected = {
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

        const result = await request(app)
        .post('/user/courses')
        .set('Authorization', `Bearer ${tokenTest}`)
        .send(requestTestData)

		expect(result.status).toBe(200);
		expect(result.body).toStrictEqual(responseExpected);
	});
});
