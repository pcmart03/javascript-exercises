import './css/styles.css';
import AppModule from './js/app/app';
import helloWorld from './js/hello-world-module/hello-world-module';
import tabsModule from './js/tabs-module/tabs-module';
import animationsModule from './js/fun-with-animations-module/fun-with-animations-module';
import constants from './js/constants/constants';
import editorModule from './js/editor-module/editor-module';

const elem = document.getElementById('app');
const modules = [
  helloWorld.getHelloWorldModule(),
  tabsModule.getTabsModule(constants.TABS_MODULE_TABS),
  animationsModule.getFunWithAnimationsModule(constants.ANIMATIONS),
  editorModule.getEditorModule(),
];
const app = new AppModule.App(elem, modules);

app.init();
