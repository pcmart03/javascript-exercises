const TABS_MODULE_TABS = [
  {
    name: 'Tab 1',
    key: 't1',
    content: '<p>Tab 1 content</p>',
  },
  {
    name: 'Tab 2',
    key: 't2',
    content: '<p>Tab 2 content</p>',
  },
];

const ANIMATIONS = [
  {
    text: 'Position',
    animation: '5s linear 0s infinite alternate none running move-block',
  },
  {
    text: 'Shape',
    animation: '1s ease 0s infinite alternate none running change-shape',
  },
  {
    text: 'Size',
    animation: '2s ease 0s infinite alternate none running change-size',
  },
  {
    text: 'Color',
    animation: '8s ease 0s infinite alternate none running change-color',
  },
];

export default {
  DISPLAY_CLASS_LIST: ['app-display', 'app-container'],
  SELECT_WRAP_CLASS_LIST: ['app-select-wrapper', 'app-container'],
  SELECT_CLASS_LIST: ['app-select'],
  SELECT_ID: 'module-select',
  SELECT_LABEL: 'Choose a module:',
  TABS_MODULE_TABS,
  ANIMATIONS,
};
