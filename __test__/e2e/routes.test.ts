const request = require('supertest');
const app = require('../../index.cjs');

describe('Routes endpoint suite test', () => {
	describe('User endpoints', () => {
		describe('/user/courses endpoint', () => {
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
					.send(requestTestData);

				expect(result.status).toBe(200);
				expect(result.body).toStrictEqual(responseExpected);
			});
		});

		describe('/user/courses endpoint', () => {
			it('should respond 401', async () => {
				const result = await request(app)
					.post('/user/courses')
					.send({});

				expect(result.status).toBe(401);
			});
		});

		describe('/user/courses endpoint', () => {
			it('should respond 403', async () => {
				const result = await request(app)
					.post('/user/courses')
					.set('Authorization', `Bearer faketoken`)
					.send({});

				expect(result.status).toBe(403);
			});
		});
	});

	describe('General endpoints', () => {
		describe('health endpoint', () => {
			it('it should respond ok', async () => {
				const result = await request(app).get('/health').send();
				expect(result.status).toBe(200);
			});
		});

		describe('getToken endpoint', () => {
			it('it shoud respond a token', async () => {
				const result = await request(app)
					.post('/getToken')
					.send({ username: 'testUser' });

				expect(result.status).toBe(200);
				expect(result.body).toHaveProperty('token');
			});
		});
	});
});
