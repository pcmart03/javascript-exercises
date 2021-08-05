import base from '../app-module-base/app-module-base';
import utils from '../utils/utils';

/**
 * The classic starter. It displays "Hello, World!"
 * */
class HelloWorldModule extends base.AppModuleBase {
  domUtils = utils.domUtils;

  constructor() {
    super('Hello World');
  }

  render() {
    return this.domUtils.createParagraph({
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
