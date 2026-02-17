const { helper, batch } = require('./index');

describe('instant-flexbox-helper', () => {
  test('should process string input', () => {
    expect(helper('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => helper(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = helper('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
