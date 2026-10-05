import { describe, test, expect } from "vitest";

import { Store, SortedStore } from "../src/Store.js";

describe("Store", () => {
  test("adds item", () => {
    const store = new Store();

    store.add({ id: 1, name: "Book", price: 100 });

    expect(store.find(1)).toEqual({
      id: 1,
      name: "Book",
      price: 100,
    });
  });

  test("removes item", () => {
    const store = new Store();

    store.add({ id: 1, price: 100 });
    store.remove(1);

    expect(store.find(1)).toBeUndefined();
  });

  test("returns false when removing missing item", () => {
    const store = new Store();

    expect(store.remove(999)).toBe(false);
  });

  test("calculates total", () => {
    const store = new Store();

    store.add({ id: 1, price: 100 });
    store.add({ id: 2, price: 200 });

    expect(store.total()).toBe(300);
  });

  test("getter returns count", () => {
    const store = new Store();

    store.add({ id: 1, price: 100 });

    expect(store.count).toBe(1);
  });

  test("static create works", () => {
    const store = Store.create([
      { id: 1, price: 50 },
      { id: 2, price: 100 },
    ]);

    expect(store.total()).toBe(150);
  });
});

describe("SortedStore", () => {
  test("inherits from Store", () => {
    const store = new SortedStore();

    expect(store).toBeInstanceOf(Store);
  });

  test("overrides add and uses super", () => {
    const store = new SortedStore();

    store.add({ id: 1, price: 300 });
    store.add({ id: 2, price: 100 });
    store.add({ id: 3, price: 200 });

    expect(store.items.map((item) => item.price)).toEqual([
      100,
      200,
      300,
    ]);
  });
});