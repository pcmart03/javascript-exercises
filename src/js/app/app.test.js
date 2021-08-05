import appMod from './app';
import mockModules from '../../../__mocks__/appModulesMock';
import constants from '../constants/constants';

describe('App', () => {
  let app;
  const mockElement = document.createElement('div');
  beforeEach(() => {
    app = new appMod.App(mockElement, mockModules);
  });

  test('should create', () => {
    expect(app).toBeTruthy();
  });

  describe('createDisplayWindow', () => {
    beforeEach(() => {
      app.createDisplayWindow();
    });

    test('should create the element', () => {
      expect(app.displayWindow).toBeTruthy();
    });

    test('it should set the displaywindow classlist', () => {
      const { displayWindow } = app;
      expect(displayWindow.className).toEqual(constants.DISPLAY_CLASS_LIST.join(' '));
    });
  });

  describe('setDisplayContent', () => {
    const testText = 'Hello, world';
    let testElem;
    beforeEach(() => {
      const textNode = document.createTextNode(testText);
      testElem = document.createElement('p');
      testElem.appendChild(textNode);
      app.setDisplayContent(testElem);
    });

    it('should set the content', () => {
      expect(app.displayWindow.innerHTML).toEqual(`<p>${testText}</p>`);
    });
  });
});
