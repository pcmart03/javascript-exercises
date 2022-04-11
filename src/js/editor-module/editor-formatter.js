/* eslint-disable class-methods-use-this */
import utils from '../utils/utils';

class EditorFormatter {
  spacer = '⁠⁠⁠⁠⁠⁠⁠';

  tag;

  tagNames;

  textArea;

  utils = utils;

  constructor(tag, parentTagNames, textArea) {
    this.tag = tag;
    this.tagNames = parentTagNames;
    this.textArea = textArea;
    this.formatText = this.formatText.bind(this);
  }

  formatText() {
    this.textArea.focus();
    const selection = document.getSelection();

    if (selection.anchorNode) {
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const formattedNode = this.#findClosestNode(container);
      if (this.textArea.contains(container)) {
        if (formattedNode) {
          if (this.#isEndOfElement(formattedNode, selection)) {
            this.#stopFormatting(range, selection, formattedNode);
          } else {
            this.#removeFormatting(formattedNode, selection);
          }
        } else if (!range.collapsed) {
          this.#addTags(range, selection);
        } else {
          this.#openFormatting(range, selection);
        }
      }
    }
  }

  #isFormatted(element) {
    return this.tagNames.length === 2
      ? (element.nodeName === this.tagNames[0] || element.nodeName === this.tagNames[1])
      : (element.nodeName === this.tagNames[0]);
  }

  #isEndOfElement(element, selection) {
    const textLength = element.innerText.length;
    return (textLength === selection.anchorOffset && textLength === selection.focusOffset);
  }

  #addTags(range, selection) {
    const strongTag = this.utils.domUtils.createElement(this.tag);
    const content = range.extractContents();
    content.querySelectorAll(this.tag)
      .forEach((element) => {
        element.replaceWith(...element.childNodes);
      });
    strongTag.appendChild(content);
    range.insertNode(strongTag);
    selection.selectAllChildren(strongTag);
  }

  #stopFormatting(range, selection, parentElm) {
    parentElm.insertAdjacentHTML('afterend', this.spacer);
    const nextNode = parentElm.nextSibling;
    selection.setBaseAndExtent(nextNode, this.spacer.length, nextNode, this.spacer.length);
  }

  #removeFormatting(container, selection) {
    const children = container.childNodes;
    const anchorNode = children[0];
    const focusNode = children[children.length - 1];
    container.replaceWith(...children);
    selection.setBaseAndExtent(anchorNode, 0, focusNode, focusNode.length);
  }

  #findClosestNode(container) {
    const findAncestor = (node) => {
      if (node && node !== this.textArea) {
        return this.#isFormatted(node)
          ? node
          : findAncestor(node.parentNode);
      }

      return null;
    };
    return findAncestor(container);
  }

  #openFormatting(range, selection) {
    const newElem = this.utils.domUtils.createElement(this.tag);
    newElem.innerText = this.spacer;
    range.insertNode(newElem);

    selection.setBaseAndExtent(newElem, 0, newElem, 1);
  }
}

export default { EditorFormatter };
