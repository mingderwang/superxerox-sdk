// TODO: add tests

import { add, Point } from './superxerox';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('point', () => {
  it('point create', () => {
    let point = new Point();
    expect(point.printX()).toBe(10);
  });
  it('point scale', () => {
    let point = new Point();
    point.scale(2)
    expect(point.printX()).toBe(20);
  });
});
