const createLoggerArr = () => {
  // create new array and fill it with 100 null
  const arrTemp = new Array(100).fill(null);
  const functionsArr = arrTemp.map((el, idx) => {
    return () => console.log(idx);
  });
  return functionsArr;
};

const loggerArr = createLoggerArr();
loggerArr[0](); //LOG: 0
loggerArr[74](); //LOG: 74
loggerArr[120](); //TypeError: a[120] is not a function.
