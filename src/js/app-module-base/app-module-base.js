import utils from '../utils/utils';

class AppModuleBase {
  utils;

  constructor(moduleName) {
    this.utils = utils;
    this.moduleName = moduleName;
  }

  register() {
    return {
      name: this.moduleName,
      module: this,
    };
  }
}

export default { AppModuleBase };
