import base from '../app-module-base/app-module-base';
import nav from './nav-bar/nav-bar';
import panel from './tab-panel/tab-panel';

class TabsModule extends base.AppModuleBase {
  navBar;

  panel;

  tabs;

  constructor(tabs) {
    super('Tabs Module');
    this.setActiveTab = this.setActiveTab.bind(this);
    const navInstance = new nav.NavBar(tabs, this.setActiveTab);
    this.navBar = navInstance.render();
    this.panel = new panel.TabPanel();
    this.panel.setContent(tabs[0].content);
    this.tabs = tabs.reduce((acc, tab) => {
      const { key } = tab;
      acc[key] = tab;
      return acc;
    }, {});
  }

  setActiveTab(tabKey) {
    const { content } = this.tabs[tabKey];
    this.panel.setContent(content);
  }

  render() {
    return this.utils.domUtils.createDiv({ children: [this.navBar, this.panel.render()] });
  }
}

function getTabsModule(tabs) {
  return new TabsModule(tabs);
}

export default {
  TabsModule,
  getTabsModule,
};
