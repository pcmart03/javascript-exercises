import constants from '../constants/constants';
import utils from '../utils/utils';

class App {
  appElem;

  displayWindow;

  moduleNames;

  modulesMap;

  select;

  constructor(appElem, modules) {
    this.appElem = appElem;
    this.moduleNames = [];
    this.modulesMap = modules.reduce((acc, mod) => {
      const { name, module } = mod.register();
      const key = utils.stringUtils.toKebabCase(name);
      this.moduleNames = [...this.moduleNames, { key, name }];
      acc[key] = module;
      return acc;
    }, {});
    this.onSelectChange = this.onSelectChange.bind(this);

    this.createModuleSelector();
    this.createDisplayWindow();
  }

  init() {
    this.appElem.appendChild(this.displayWindow);
    this.setDisplayContent(this.modulesMap[this.moduleNames[0].key].render());
  }

  createDisplayWindow() {
    const classList = constants.DISPLAY_CLASS_LIST;
    this.displayWindow = utils.domUtils.createDiv({ classList });
  }

  createModuleSelector() {
    const wrapper = utils.domUtils.createDiv({ classList: constants.SELECT_WRAP_CLASS_LIST });
    const label = utils.domUtils.createElement('label', {
      text: constants.SELECT_LABEL,
      attrs: [['for', constants.SELECT_ID]],
    });
    const options = this.moduleNames.map(({ key, name }) => utils.domUtils.createElement('option', {
      attrs: [['value', key]],
      text: name,
    }));
    this.select = utils.domUtils.createElement(
      'select',
      {
        children: options,
        attrs: [['id', constants.SELECT_ID]],
        classList: constants.SELECT_CLASS_LIST,
      },
    );
    this.select.addEventListener('change', this.onSelectChange);
    wrapper.appendChild(label);
    wrapper.appendChild(this.select);
    this.appElem.appendChild(wrapper);
  }

  onSelectChange() {
    const { selectedIndex } = this.select;
    const { value } = this.select.options[selectedIndex];
    const newElem = this.modulesMap[value].render();
    this.setDisplayContent(newElem);
  }

  setDisplayContent(contentElem) {
    this.displayWindow.innerHTML = '';
    this.displayWindow.appendChild(contentElem);
  }
}

export default { App };
