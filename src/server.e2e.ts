import { bootstrap } from '@wix/yoshi-serverless-testing';
import HttpClient from '@wix/yoshi-serverless-client';
import { fetchComments } from './api/comments.api';

const serverlessApp = bootstrap();
serverlessApp.beforeAndAfter();
let client: HttpClient;

beforeAll(async () => {
  client = new HttpClient({ baseUrl: serverlessApp.getUrl() });
});

test('should fetch comments', async () => {
  const response = await client.request(fetchComments)();
  console.log('Test Comments Response:', response);
  expect(response.greet).toBe([]);
});
