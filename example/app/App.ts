import { add } from "superxerox-sdk";

window.onload = () => {
  const result = add(2,2)
  document.body.textContent = result.toString();
};
