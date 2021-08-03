function toKebabCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

export default {
  toKebabCase,
};
