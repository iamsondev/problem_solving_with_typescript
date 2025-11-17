//  ******************problem-01**********************
const formateValue = <T>(value: T): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  throw new Error("unsupported type ");
};

// ******************problem-2*****************************

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
