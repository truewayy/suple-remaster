export const subStr = (str, size) => {
  if (str.length >= size) {
    str = str.substr(0, size) + "...";
  }
  return str;
};
