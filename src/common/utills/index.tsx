export const genRandomNumberArray = (length: number) => {
  let _result: number[] = [];
  while (_result.length < length) {
    Math.random()
      .toString()
      .split("")
      .slice(2)
      .map((each) => {
        _result.push(parseInt(each));
      });
    if (_result.length >= length) break;
  }
  return _result.slice(0, length);
};
