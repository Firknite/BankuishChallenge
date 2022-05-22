const {
	generateAccessToken,
} = require('../../src/utils/auth.cjs');

describe('auth utils suite test', () => {
	beforeEach(() => {
		jest.resetModules(); // Most important - it clears the cache
	});

	describe('generateAccessToken', () => {
		it('it should generate and access token', () => {
			process.env.TOKEN_SECRET =
				'1b498848649dfa5cdbe72b4ecd8b9bccd212110c6cf3d7ed37ccc4ee0d94223749ee4bd05baead8528e84433c41f242bef804c7d2c13ffce9916a6d70c260441';
			process.env.TOKEN_EXPIRES = '7d';

			const result = generateAccessToken('testUser');
			expect(result).toHaveProperty('token');
		});
	});
});
