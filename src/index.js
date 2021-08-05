import './css/styles.css';
import AppModule from './js/app/app';
import helloWorld from './js/hello-world-module/hello-world-module';
import tabsModule from './js/tabs-module/tabs-module';
import constants from './js/constants/constants';

const elem = document.getElementById('app');
const modules = [
  helloWorld.getHelloWorldModule(),
  tabsModule.getTabsModule(constants.TABS_MODULE_TABS),
];
const app = new AppModule.App(elem, modules);

app.init();
