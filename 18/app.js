const stage = document.querySelector("#stage");
const image = document.querySelector("#reference");

const pixel = document.createElement("canvas");
pixel.width = 1;
pixel.height = 1;
const context = pixel.getContext("2d", { willReadFrequently: true });

function matchLetterboxToFrame() {
  if (image.complete && image.naturalWidth > 0) {
    try {
      // Sample the GIF's corner pixel so the surrounding letterbox follows its black/white inversion.
      context.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 1);
      const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
      const brightness = (red + green + blue) / 3;
      stage.style.backgroundColor = brightness > 127 ? "#fff" : "#000";
    } catch {
      stage.style.backgroundColor = "#000";
    }
  }

  requestAnimationFrame(matchLetterboxToFrame);
}

matchLetterboxToFrame();
