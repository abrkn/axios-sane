import {saneAxios} from './index';

test('fetch example.com', async () => {
  const { data } = await saneAxios.get('http://example.com');

  expect(data).toMatch(/Example Domain/);
});
