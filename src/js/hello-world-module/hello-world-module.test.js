import base from './hello-world-module';

describe('HelloWorldModule', () => {
  let helloWorldModule;
  beforeEach(() => {
    helloWorldModule = new base.HelloWorldModule();
  });

  test('should create', () => {
    expect(helloWorldModule).toBeTruthy();
  });
});
