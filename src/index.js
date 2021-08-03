import './css/styles.css';
import AppModule from './js/app/app';
import helloWorld from './js/hello-world-module/hello-world-module';

const elem = document.getElementById('app');
const modules = [new helloWorld.HelloWorldModule()];
const app = new AppModule.App(elem, modules);

app.init();
