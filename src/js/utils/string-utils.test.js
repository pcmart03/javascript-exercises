import stringUtils from './string-utils';

describe('utils', () => {
  describe('toKebabCase', () => {
    test('should convert to kebab case', () => {
      const testCases = [
        ['Test Value', 'test-value'],
        ['test', 'test'],
        ['TEST', 'test'],
        ['A very Long aNd weird T3T', 'a-very-long-and-weird-t3t'],
      ];
      testCases.forEach((testCase) => {
        const result = stringUtils.toKebabCase(testCase[0]);
        expect(result).toEqual(testCase[1]);
      });
    });
  });
});
