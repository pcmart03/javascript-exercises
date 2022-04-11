import '../../css/editor.css';
import base from '../app-module-base/app-module-base';
import controls from './editor-controls';

class EditorModule extends base.AppModuleBase {
  controls;

  textArea;

  constructor() {
    super('Text Editor');
    this.createTextArea();
    this.createControls(this.textArea);
  }

  render() {
    return this.utils.domUtils
      .createDiv({
        children: [
          this.controls,
          this.textArea,
        ],
      });
  }

  createControls(textArea) {
    this.controls = new controls.EditorControls(textArea).getControls();
  }

  createTextArea() {
    this.textArea = this.utils.domUtils.createDiv({
      classList: ['editor-text-area'],
      attrs: [['contenteditable', true]],
    });
  }
}

function getEditorModule() {
  return new EditorModule();
}

export default {
  EditorModule,
  getEditorModule,
};
