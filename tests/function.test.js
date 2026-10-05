import { describe, test, expect } from "vitest";

import {
  unique,
  groupBy,
  chunk,
  deepClone,
  memoize,
  counter,
} from "../src/functions.js";

describe("unique", () => {
  test("removes duplicates", () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test("works with empty array", () => {
    expect(unique([])).toEqual([]);
  });
});

describe("groupBy", () => {
  test("groups objects by key", () => {
    const users = [
      { name: "A", age: 20 },
      { name: "B", age: 20 },
      { name: "C", age: 30 },
    ];

    expect(groupBy(users, (user) => user.age)).toEqual({
      20: [
        { name: "A", age: 20 },
        { name: "B", age: 20 },
      ],
      30: [{ name: "C", age: 30 }],
    });
  });

  test("works with empty array", () => {
    expect(groupBy([], (x) => x)).toEqual({});
  });
});

describe("chunk", () => {
  test("splits array into chunks", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });

  test("works with empty array", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test("throws for zero size", () => {
    expect(() => chunk([1, 2], 0)).toThrow();
  });
});

describe("deepClone", () => {
  test("creates independent copy", () => {
    const original = {
      name: "John",
      address: {
        city: "Almaty",
      },
    };

    const copy = deepClone(original);

    copy.address.city = "Astana";

    expect(original.address.city).toBe("Almaty");
  });

  test("clones arrays", () => {
    expect(deepClone([1, { a: 2 }])).toEqual([1, { a: 2 }]);
  });
});

describe("memoize", () => {
  test("caches function result", () => {
    let calls = 0;

    const add = memoize((a, b) => {
      calls++;
      return a + b;
    });

    expect(add(2, 3)).toBe(5);
    expect(add(2, 3)).toBe(5);
    expect(calls).toBe(1);
  });

  test("throws for wrong type", () => {
    expect(() => memoize(123)).toThrow();
  });
});

describe("counter", () => {
  test("increments value", () => {
    const c = counter();

    c.inc();
    c.inc();

    expect(c.value).toBe(2);
  });

  test("decrements value", () => {
    const c = counter(5);

    c.dec();

    expect(c.value).toBe(4);
  });

  test("starts from zero", () => {
    const c = counter();

    expect(c.value).toBe(0);
  });
});