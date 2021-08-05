import helloWorld from './hello-world-module';

describe('HelloWorldModule', () => {
  let helloWorldModule;
  beforeEach(() => {
    helloWorldModule = helloWorld.getHelloWorldModule();
  });

  test('should create', () => {
    expect(helloWorldModule).toBeTruthy();
  });

  describe('render', () => {
    let result;

    beforeEach(() => {
      result = helloWorldModule.render();
    });

    test('it should return a paragraph node', () => {
      expect(result.tagName).toBe('P');
    });

    test("it should contain the text, 'Hello, World!", () => {
      expect(result.textContent).toBe('Hello, World!');
    });
  });
});
