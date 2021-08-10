// TODO: add features

export const add = (a: number, b: number) => a + b;
export class Point {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  printX(): number {
      return this.x
  }
}