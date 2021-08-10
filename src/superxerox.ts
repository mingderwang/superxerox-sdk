// TODO: add features

export class Point {
  x = 1000;
  y = 100;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  printX(): number {
    return this.x;
  }
}
