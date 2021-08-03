import base from '../app-module-base/app-module-base';
import utils from '../utils/utils';

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

export default { HelloWorldModule };
