import '../../../css/nav-bar.css';
import utils from '../../utils/utils';

class NavBar {
  utils = utils;

  activeClass = 'active-tab';

  dataAttrString = 'tabkey'

  navBar;

  tabs;

  constructor(tabs, tabClick) {
    this.tabsChange = tabClick;
    this.clickHandler = this.clickHandler.bind(this);
    this.tabs = this.createTabs(tabs);
    this.navBar = this.createNavBar(this.tabs);
  }

  createTabs(tabs) {
    return tabs.map((tab) => {
      const anchor = this.utils.domUtils.createElement('a', { text: tab.name });
      return this.utils.domUtils.createElement('li',
        {
          attrs: [[`data-${this.dataAttrString}`, tab.key]],
          children: [anchor],
          classList: ['app-tab-li'],
        });
    });
  }

  createNavBar(tabs) {
    const navBar = this.utils.domUtils.createElement('nav', { classList: ['tabs-nav'] });
    const navList = this.utils.domUtils.createElement('ul',
      {
        classList: ['app-tab-ul'], children: tabs,
      });
    navList.addEventListener('click', this.clickHandler);
    navBar.appendChild(navList);
    return navBar;
  }

  clickHandler(event) {
    const tab = event.target.parentElement;
    const tabKey = tab.dataset[this.dataAttrString];
    this.setActiveTab(tab);
    this.tabsChange(tabKey);
  }

  setActiveTab(target) {
    this.tabs.forEach((tab) => {
      if (tab.dataset[this.dataAttrString] === target.dataset[this.dataAttrString]) {
        tab.classList.add(this.activeClass);
      } else {
        tab.classList.remove(this.activeClass);
      }
    });
  }

  render() {
    this.setActiveTab(this.tabs[0]);
    return this.navBar;
  }
}

export default { NavBar };
