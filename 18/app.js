import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020609);
scene.fog = new THREE.Fog(0x020609, 28, 72);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 140);
const cameraTarget = new THREE.Vector3(0, 0.72, 0);
let cameraRadius = 18;
let cameraAzimuth = 0.42;
let cameraPolar = 1.34;
let modelWidth = 5.2;
let modelHeight = 8;

function placeCamera() {
  camera.position
    .setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth))
    .add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xe6f0ff, 0x15191d, 1.45));

const keyLight = new THREE.DirectionalLight(0xffe6b5, 5.2);
keyLight.position.set(-7, 10, 8);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 12;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xd2e3f0, 2.2);
fillLight.position.set(7, 5, 6);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0xffcf7b, 4.1);
rimLight.position.set(1, 8, -7);
scene.add(rimLight);

const baseLight = new THREE.PointLight(0xffd99b, 18, 20, 2);
baseLight.position.set(0, 3, 6);
scene.add(baseLight);

const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x111820,
  metalness: 0.18,
  roughness: 0.58,
});
const floor = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -3.29;
floor.receiveShadow = true;
scene.add(floor);

const fitGroup = new THREE.Group();
fitGroup.name = "mechanism-display";
scene.add(fitGroup);
let mixer = null;
let running = true;

function setMetalFinish(root) {
  root.traverse((object) => {
    if (!object.isMesh) return;

    const ancestry = [];
    for (let current = object; current && current !== root.parent; current = current.parent) {
      ancestry.push(current.name.toLowerCase());
    }
    const names = ancestry.join(" ");
    const isBase = names.includes("triple_pendulum_(base)") || object.name.toLowerCase().includes("base");
    const isOuterFrame = names.includes("external_fixed_arc");
    const isJoint = names.includes("sphere") || names.includes("pin") || names.includes("holder");

    const tint = isBase
      ? 0x172027
      : isOuterFrame
        ? 0xb8c3c7
        : isJoint
          ? 0xd0a04c
          : 0xb88b45;

    const originals = Array.isArray(object.material) ? object.material : [object.material];
    const finishes = originals.map((original) => {
      const material = original.clone();
      material.color.setHex(tint);
      material.metalness = isBase ? 0.76 : 0.86;
      material.roughness = isBase ? 0.24 : (isJoint ? 0.2 : 0.23);
      material.envMapIntensity = isBase ? 0.9 : 1.25;
      if ("clearcoat" in material) {
        material.clearcoat = isBase ? 0.55 : 0.8;
        material.clearcoatRoughness = 0.17;
      }
      return material;
    });

    object.material = Array.isArray(object.material) ? finishes : finishes[0];
    object.castShadow = true;
    object.receiveShadow = true;
  });
}

function fitModel(root) {
  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());

  modelHeight = size.y || 1;
  const scale = 8 / modelHeight;
  modelWidth = Math.max(size.x * scale, 1);

  fitGroup.scale.setScalar(scale);
  fitGroup.position.set(
    -center.x * scale,
    -bounds.min.y * scale - 3.25,
    -center.z * scale,
  );
  fitGroup.add(root);
  resize();
}

function loadMechanism() {
  const loader = new GLTFLoader();
  loader.load(
    "./assets/triple-pendulum/scene.gltf",
    (gltf) => {
      const root = gltf.scene;
      root.name = "triple-pendulum-model";
      setMetalFinish(root);
      fitModel(root);

      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(root);
        const action = mixer.clipAction(gltf.animations[0]);
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.timeScale = 0.72;
        action.play();
      }
    },
    undefined,
    (error) => {
      console.error("Could not load the pendulum mechanism.", error);
    },
  );
}
loadMechanism();

let dragging = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("pointerdown", (event) => {
  dragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  cameraAzimuth -= (event.clientX - lastX) * 0.005;
  cameraPolar = THREE.MathUtils.clamp(cameraPolar + (event.clientY - lastY) * 0.004, 0.78, 1.52);
  lastX = event.clientX;
  lastY = event.clientY;
  placeCamera();
});
canvas.addEventListener("pointerup", () => { dragging = false; });
canvas.addEventListener("pointercancel", () => { dragging = false; });
canvas.addEventListener("wheel", (event) => {
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.008, 9, 38);
  placeCamera();
}, { passive: true });

window.addEventListener("keydown", (event) => {
  if (event.code !== "Space" || event.repeat) return;
  event.preventDefault();
  running = !running;
});

function resize() {
  const aspect = window.innerWidth / window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = aspect;

  const fovHalf = THREE.MathUtils.degToRad(camera.fov / 2);
  const fitHeight = (modelHeight + 1.2) / (2 * Math.tan(fovHalf));
  const fitWidth = (modelWidth + 1.0) / (2 * Math.tan(fovHalf) * aspect);
  cameraRadius = Math.max(fitHeight, fitWidth) * 1.08;
  camera.updateProjectionMatrix();
  placeCamera();
}

window.addEventListener("resize", resize);
resize();

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  if (running && mixer) mixer.update(delta);
  renderer.render(scene, camera);
}
animate();
