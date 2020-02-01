import { hello } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    let greetings = hello()
    expect(greetings).toEqual('Hello, World!');
  });
});
