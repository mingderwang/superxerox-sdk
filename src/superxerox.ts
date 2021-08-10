// TODO: add features

export class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  printX(): number {
    return this.x;
  }
}
