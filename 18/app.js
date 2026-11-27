// Starting point: https://github.com/aquaNeon/codevember-2026/tree/main/018
// The source scene is transpiled to browser-native JavaScript in ./scene.
const IDLE_MS = 1200;
const root = document.querySelector("[data-cv]");

if (root && !root.hasAttribute("data-cv-mounted")) {
  root.setAttribute("data-cv-mounted", "");
  const canvas = root.querySelector("[data-cv-canvas]");
  const spin = root.querySelector("[data-cv-spin]");
  const params = new URLSearchParams(location.search);
  const showStill = () => root.setAttribute("data-cv-still", "");

  if (!canvas || params.has("still")) {
    showStill();
  } else {
    afterLoad(() => import("./scene/stage.js"))
      .then(({ Stage }) => Stage.create(canvas))
      .then((stage) => {
        root.setAttribute("data-cv-live", "");
        stage.onShown = () => canvas.setAttribute("data-cv-shown", "");
        spin?.addEventListener("click", () => stage.spin());
        stage.onLost = () => {
          stage.dispose();
          showStill();
        };
      })
      .catch(showStill);
  }
}

function afterLoad(loadScene) {
  return new Promise((resolve) => {
    const idle = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(resolve, { timeout: IDLE_MS });
      } else {
        setTimeout(resolve, 200);
      }
    };
    if (document.readyState === "complete") idle();
    else addEventListener("load", idle, { once: true });
  }).then(loadScene);
}