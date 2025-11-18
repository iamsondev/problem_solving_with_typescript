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

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);

const person2 = new Person("Alice", 25);

const filterByRating = (items: { title: string; rating: number }[]) => {
  return items.filter((item) => item.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
) => {
  return users.filter((user) => user.isActive);
};

const users1 = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users1));
