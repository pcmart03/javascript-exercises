import '../../../css/tab-panel.css';
import utils from '../../utils/utils';

class TabPanel {
  panel;

  utils = utils;

  constructor() {
    this.panel = this.utils.domUtils.createDiv({ classList: ['tab-panel'] });
  }

  render() {
    return this.panel;
  }

  setContent(content) {
    this.panel.innerHTML = content;
  }
}

export default { TabPanel };
