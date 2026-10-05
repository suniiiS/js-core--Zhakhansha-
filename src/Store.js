export class Store {
  #items = [];

  add(item) {
    this.#items.push(item);
    return item;
  }

  remove(id) {
    const index = this.#items.findIndex((item) => item.id === id);

    if (index === -1) {
      return false;
    }

    this.#items.splice(index, 1);
    return true;
  }

  find(id) {
    return this.#items.find((item) => item.id === id);
  }

  total() {
    return this.#items.reduce((sum, item) => sum + item.price, 0);
  }

  get count() {
    return this.#items.length;
  }

  get items() {
    return [...this.#items];
  }

  static create(items = []) {
    const store = new Store();

    items.forEach((item) => store.add(item));

    return store;
  }
}

export class SortedStore extends Store {
  add(item) {
    super.add(item);

    const sorted = this.items.sort((a, b) => a.price - b.price);

    while (this.items.length > 0) {
      this.remove(this.items[0].id);
    }

    sorted.forEach((sortedItem) => super.add(sortedItem));

    return item;
  }
}