import { Point } from "superxerox-sdk";

window.onload = () => {
  const point = new Point()
  console.log(point)
  point.scale(3)
  document.body.textContent = point.printX();
};
