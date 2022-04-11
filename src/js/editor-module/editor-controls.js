import utils from '../utils/utils';
import formatter from './editor-formatter';

class EditorControls {
  controls;

  textArea;

  utils = utils;

  boldFormatter;

  italicFormatter;

  constructor(textArea) {
    this.textArea = textArea;
    this.boldFormatter = new formatter.EditorFormatter(
      'strong',
      ['STRONG', 'B'],
      this.textArea,
    );
    this.italicFormatter = new formatter.EditorFormatter(
      'em',
      ['EM', 'I'],
      this.textArea,
    );
    this.render();
  }

  getControls() {
    return this.controls;
  }

  render() {
    this.controls = this.utils.domUtils.createDiv({
      classList: ['text-editor-controls'],
    });

    const buttons = [
      {
        icon: 'format_bold',
        label: 'bold',
        onClick: this.boldFormatter.formatText,
      },
      {
        icon: 'format_italic',
        label: 'italic',
        onClick: this.italicFormatter.formatText,
      },
    ];

    buttons.forEach((button) => {
      this.controls.appendChild(this.makeButton(button));
    });
  }

  makeButton(options) {
    const {
      icon,
      onClick,
      label,
    } = options;

    const iconTextNode = document.createTextNode(icon);

    const iconSpan = this.utils.domUtils
      .createElement('span', {
        classList: ['material-icons'],
        children: [iconTextNode],
      });

    const button = this.utils.domUtils
      .createElement('button', {
        attrs: ['aria-label', label],
        classList: ['editor-button'],
        children: [iconSpan],
      });

    button.addEventListener('click', onClick);

    return button;
  }
}

export default { EditorControls };
