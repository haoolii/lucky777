"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("./foo");
test('adds 1 + 2 to equal 3', () => {
    expect((0, foo_1.foo)(1, 2)).toBe(3);
});
