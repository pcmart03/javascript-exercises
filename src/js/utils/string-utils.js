function toKebabCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

function toggleSubString(str, subString, splitter) {
  let parts = str.length ? str.split(splitter) : [];
  const index = parts.indexOf(subString);
  if (index >= 0) {
    parts = [...parts.slice(0, index), ...parts.slice(index + 1)];
  } else {
    parts = [...parts, subString];
  }
  return parts.join(',');
}

export default {
  toKebabCase,
  toggleSubString,
};
