class AppModuleBase {
  constructor(moduleName) {
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
