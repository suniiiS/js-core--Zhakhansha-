# JS Core Lab 4

## How to run

Install dependencies:

```bash
npm i
Functions

This project contains six JavaScript functions:

unique removes duplicate values from an array.
groupBy groups objects using a calculated key.
chunk splits an array into smaller arrays.
deepClone creates a deep copy of an object.
memoize stores previous function results.
counter creates an independent counter.
Closures in my code

I used closures in the memoize function and in the counter function. A closure allows an inner function to remember variables from the outer function. In memoize, the returned function remembers the cache even after the outer function has finished. This allows previously calculated results to be reused. In counter, the returned methods remember the current value of the counter. Because the value is stored inside the closure, it cannot be changed directly from outside. This makes closures useful for keeping private state.

Unit tests

The project uses Vitest and contains more than 12 unit tests. The tests cover normal cases and edge cases such as empty arrays, zero values and incorrect types.

AI tools

I used ChatGPT to help with explanations, code structure and debugging. I reviewed the generated code and tested the functions myself.
![alt text](image.png)