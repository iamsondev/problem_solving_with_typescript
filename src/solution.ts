type ValueType = string | number | boolean;
const formatValue = (value: ValueType): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

const getLength = (value: string | unknown[]): number => {
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

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return items.filter((item) => item.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterActiveUsers = (
  Users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  return Users.filter((user) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availableBook = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableBook}`;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (array1[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(array1[i]!);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (array2[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array2[i]!);
    }
  }
  return result;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  return products.reduce((total, product) => {
    const price = product.price * product.quantity;
    const discountPrice = product.discount
      ? price * (1 - product.discount / 100)
      : price;
    return total + discountPrice;
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
