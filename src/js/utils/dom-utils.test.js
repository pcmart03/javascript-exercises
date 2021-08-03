import domUtils from './dom-utils';

describe('domUtils', () => {
  describe('createElement', () => {
    const testCases = [
      ['p', 'P'],
      ['div', 'DIV'],
      ['li', 'LI'],
    ];

    test('should return a dom elemnt', () => {
      testCases.forEach((testCase) => {
        const elem = domUtils.createElement(testCase[0]);
        expect(elem.tagName).toEqual(testCase[1]);
      });
    });
  });
});
