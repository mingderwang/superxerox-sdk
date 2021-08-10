// TODO: add tests

import { Point } from './superxerox';

describe('point', () => {
  it('point create', () => {
    const point = new Point();
    expect(point.printX()).toBe(10);
  });
  it('point scale', () => {
    const point = new Point();
    point.scale(2);
    expect(point.printX()).toBe(20);
  });
});
