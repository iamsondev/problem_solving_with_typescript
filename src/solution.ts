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

console.log(formateValue("gold"));
console.log(formateValue(5));
console.log(formateValue(true));
