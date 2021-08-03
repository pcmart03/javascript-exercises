import fromAppBase from './app-module-base';

const { AppModuleBase } = fromAppBase;

describe('AppModuleBase', () => {
  let appModule;
  const testName = 'testModule';

  beforeEach(() => {
    appModule = new AppModuleBase(testName);
  });

  test('should create', () => {
    expect(appModule).toBeTruthy();
  });

  describe('register', () => {
    test('should return an obj with the name and class', () => {
      const result = appModule.register();
      expect(result.name).toEqual(testName);
      expect(result.module).toBe(appModule);
    });
  });
});
