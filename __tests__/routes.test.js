const request = require('supertest');
const server = require('../server.js');

beforeAll(async () => {
 // do something before anything else runs
 console.log('Jest starting!');
});

// close the server after each test
afterAll(() => {
 server.close();
 console.log('server closed!');
});

describe('basic route tests', () => {
 test('get home route GET /', async () => {
 const response = await request(server).get('/');
 expect(response.status).toEqual(200);
 expect(response.text).toContain('Hello World!');
 });
});


describe('dog tests', () => {
  test('get all dogs  GET /dogs', async () => {
    const res= await request(server).get('/dogs');
    expect(res.status).toEqual(200);
    expect(res.text).toContain('affenpinscher');
  });
});
