import { Stage } from "./scene/stage.js";

const canvas = document.querySelector("#scene");
const shapeSelect = document.querySelector("#form-select");
const surfaceSelect = document.querySelector("#surface-select");
const spinButton = document.querySelector("#spin-button");

try {
  const stage = await Stage.create(canvas);
  shapeSelect.addEventListener("change", () => stage.shape(shapeSelect.value));
  surfaceSelect.addEventListener("change", () => stage.surface(surfaceSelect.value));
  spinButton.addEventListener("click", () => stage.spin());
  window.addEventListener("pagehide", () => stage.dispose(), { once: true });
  window.pendulumStage = stage;
} catch (error) {
  console.error(error);
  document.querySelector("#scene-error").hidden = false;
}
