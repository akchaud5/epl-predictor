// Set default environment variables for tests
process.env.DB_USER = process.env.DB_USER || 'postgres';
process.env.DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
process.env.DB_NAME = process.env.DB_NAME || 'epl_prediction';
process.env.DB_HOST = process.env.DB_HOST || 'localhost';
process.env.DB_PORT = process.env.DB_PORT || '5432';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'test_secret';
process.env.SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001';

// Mock axios for Python API calls
jest.mock('axios', () => ({
  create: jest.fn().mockReturnValue({
    post: jest.fn().mockImplementation((url) => {
      if (url === '/api/predict') {
        return Promise.resolve({ data: { result: 'mocked prediction' } });
      }
      if (url === '/api/predict-custom') {
        return Promise.resolve({ data: { result: 'mocked custom prediction' } });
      }
      return Promise.reject(new Error('Not found'));
    }),
    get: jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: {} });
    }),
  }),
}));

// Increase default test timeout
jest.setTimeout(30000);