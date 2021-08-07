import base from '../app-module-base/app-module-base';

/**
 * The classic starter. It displays "Hello, World!"
 * */
class HelloWorldModule extends base.AppModuleBase {
  constructor() {
    super('Hello World');
  }

  render() {
    return this.utils.domUtils.createParagraph({
      text: 'Hello, World!',
    });
  }
}

function getHelloWorldModule() {
  return new HelloWorldModule();
}

export default {
  HelloWorldModule,
  getHelloWorldModule,
};
