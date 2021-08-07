import '../../css/fun-with-animations.css';
import base from '../app-module-base/app-module-base';

class FunWithAnimationsModule extends base.AppModuleBase {
  container;

  controls;

  mover;

  animations;

  constructor(animations) {
    super('Fun with Animations');
    this.animations = animations;
    this.createControls();
    this.createMover();
    this.createContainer();
  }

  createControls() {
    this.controls = this.utils.domUtils
      .createDiv({
        classList: ['animation-controls'],
        children: this.animations.map((animation) => this.makeButton(animation)),
      });
  }

  createContainer() {
    this.container = this.utils.domUtils
      .createDiv({
        classList: ['animations-container'],
        children: [this.mover],
      });
  }

  createMover() {
    this.mover = this.utils.domUtils.createDiv({ classList: ['animation-mover'] });
  }

  makeButton(animationObj) {
    const button = this.utils.domUtils
      .createElement('button',
        {
          text: animationObj.text,
          classList: [
            'app-button',
            'app-button-default',
            'animations-button',
          ],
        });
    button.addEventListener('click', (event) => {
      const animationStyle = this.mover.style.animation;
      event.target.classList.toggle('active');
      this.mover.style.animation = this.utils.stringUtils
        .toggleSubString(animationStyle, animationObj.animation, ', ');
    });
    return button;
  }

  render() {
    return this.utils.domUtils
      .createDiv({
        classList: ['animation-wrapper'],
        children: [
          this.controls,
          this.container,
        ],
      });
  }
}

function getFunWithanimationsModule(animations) {
  return new FunWithAnimationsModule(animations);
}

export default {
  FunWithanimationsModule: FunWithAnimationsModule,
  getFunWithAnimationsModule: getFunWithanimationsModule,
};
