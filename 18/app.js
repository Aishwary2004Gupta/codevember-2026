import { Stage } from "./scene/stage.js?v=glass-grab-10";

const canvas = document.querySelector("#scene");
const shapeSelect = document.querySelector("#form-select");

try {
  const stage = await Stage.create(canvas);
  shapeSelect.addEventListener("change", () => stage.shape(shapeSelect.value));
  window.addEventListener("pagehide", () => stage.dispose(), { once: true });
  window.pendulumStage = stage;
} catch (error) {
  console.error(error);
  document.querySelector("#scene-error").hidden = false;
}
