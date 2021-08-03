function setElementClassList(elem, classList) {
  elem.classList.add(...classList);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function parseOptions(elem, options) {
  if (options.classList) {
    setElementClassList(elem, options.classList);
  }

  if (options.text) {
    elem.appendChild(createTextNode(options.text));
  }

  if (options.children) {
    options.children.forEach((child) => elem.appendChild(child));
  }

  if (options.attrs) {
    options.attrs.forEach((attr) => elem.setAttribute(attr[0], attr[1]));
  }
}

function createElement(tag, options = null) {
  const element = document.createElement(tag);
  if (options) {
    parseOptions(element, options);
  }
  return element;
}

function createDiv(options = null) {
  return createElement('div', options);
}

function createParagraph(options = null) {
  return createElement('p', options);
}

export default {
  createElement,
  createDiv,
  createParagraph,
  createTextNode,
};
