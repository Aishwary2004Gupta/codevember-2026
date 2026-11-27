import * as THREE from "three";
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/OBJLoader.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.shadowMap.enabled = false;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe7e5df);
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
const titleElement = document.querySelector("#wall-title");

function makeWallTexture() {
  const surface = document.createElement("canvas");
  surface.width = 1280;
  surface.height = 900;
  const ctx = surface.getContext("2d");
  const wash = ctx.createLinearGradient(0, 0, 0, surface.height);
  wash.addColorStop(0, "#efeee9");
  wash.addColorStop(0.54, "#e8e6e0");
  wash.addColorStop(1, "#d9d9d5");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, surface.width, surface.height);
  const light = ctx.createRadialGradient(630, 290, 50, 630, 320, 680);
  light.addColorStop(0, "rgba(255,255,250,.62)");
  light.addColorStop(1, "rgba(255,255,250,0)");
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, surface.width, surface.height);
  for (let i = 0; i < 11500; i += 1) {
    const alpha = Math.random() * 0.035;
    ctx.fillStyle = i % 2 ? "rgba(72,69,61," + alpha + ")" : "rgba(255,255,255," + alpha + ")";
    ctx.fillRect(Math.random() * surface.width, Math.random() * surface.height, 1, 1);
  }
  const texture = new THREE.CanvasTexture(surface);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const wall = new THREE.Mesh(
  new THREE.PlaneGeometry(40, 26),
  new THREE.MeshBasicMaterial({ map: makeWallTexture(), toneMapped: false }),
);
wall.position.set(0, 0, -3.8);
scene.add(wall);

scene.add(new THREE.HemisphereLight(0xffffff, 0xb6b4ae, 1.45));
const keyLight = new THREE.DirectionalLight(0xfff7e9, 3.1);
keyLight.position.set(-4.2, 6.5, 7);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xcbd9e1, 1.15);
fillLight.position.set(5, 2.5, 5);
scene.add(fillLight);
const edgeLight = new THREE.DirectionalLight(0xffffff, 1.25);
edgeLight.position.set(0, 4, -1.5);
scene.add(edgeLight);


const gold = new THREE.MeshStandardMaterial({ color: 0x9c8461, metalness: 0.62, roughness: 0.3 });
const cordMaterial = new THREE.MeshStandardMaterial({ color: 0x555452, metalness: 0.34, roughness: 0.42 });
const swingSet = [];

function makeSoftShadowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  gradient.addColorStop(0, "rgba(58,53,46,.25)");
  gradient.addColorStop(0.45, "rgba(58,53,46,.13)");
  gradient.addColorStop(1, "rgba(58,53,46,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}
const softShadowTexture = makeSoftShadowTexture();

function makeBob(model, color, targetSize) {
  const bounds = new THREE.Box3().setFromObject(model);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const largest = Math.max(size.x, size.y, size.z) || 1;
  const scale = targetSize / largest;
  model.scale.setScalar(scale);
  model.position.copy(center).multiplyScalar(-scale);
  const surface = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.12,
    roughness: 0.42,
    clearcoat: 0.35,
    clearcoatRoughness: 0.32,
    side: THREE.DoubleSide,
  });
  model.traverse((part) => {
    if (!part.isMesh) return;
    part.material = surface;
    part.geometry.computeVertexNormals();
    part.castShadow = false;
    part.receiveShadow = false;
  });
  const bob = new THREE.Group();
  bob.add(model);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.055, 20, 14), gold);
  cap.position.y = size.y * scale * 0.49 + 0.025;
  bob.add(cap);
  const capRing = new THREE.Mesh(new THREE.TorusGeometry(0.058, 0.012, 8, 24), gold);
  capRing.position.y = cap.position.y - 0.025;
  bob.add(capRing);
  return bob;
}

function makePendulum({ x, length, model, color, amplitude, frequency, phase }) {
  const pivot = new THREE.Group();
  pivot.position.set(x, 2.22, -1.35);
  scene.add(pivot);

  const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.012, 8, 24), gold);
  pivot.add(eyelet);
  const pin = new THREE.Mesh(new THREE.SphereGeometry(0.023, 14, 10), gold);
  pin.position.z = 0.018;
  pivot.add(pin);

  const cord = new THREE.Mesh(
    new THREE.CylinderGeometry(0.009, 0.012, length, 8, 1),
    cordMaterial,
  );
  cord.position.y = -length / 2;
  pivot.add(cord);

  const bob = makeBob(model, color, 0.76);
  bob.position.set(0, -length, 0.025);
  pivot.add(bob);

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.05, 0.62),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  shadow.position.set(x + 0.12, 2.22 - length - 0.12, -3.77);
  scene.add(shadow);
  swingSet.push({ pivot, bob, length, amplitude, frequency, phase, shadow });
}

function fitCamera() {
  const width = Math.max(window.innerWidth, 1);
  const height = Math.max(window.innerHeight, 1);
  const aspect = width / height;
  camera.aspect = aspect;
  camera.fov = aspect < 0.72 ? 39 : 34;
  const fitHeight = 5.15;
  const fitWidth = 7.25;
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const distance = Math.max(
    fitHeight / (2 * Math.tan(halfFov)),
    fitWidth / (2 * Math.tan(halfFov) * aspect),
  ) * 1.12;
  camera.position.set(0, 0.04, distance);
  camera.lookAt(0, 0.04, 0);
  camera.updateProjectionMatrix();
  const viewWidth = 2 * distance * Math.tan(halfFov) * aspect;
  const desiredTitleWidth = (5.45 / viewWidth) * width;
  const titleScale = desiredTitleWidth / Math.max(titleElement.offsetWidth, 1);
  titleElement.style.setProperty("--title-scale-x", String(titleScale));
}

async function buildScene() {
  const objLoader = new OBJLoader();
  const objects = [
    { x: -2.28, length: 2.87, model: "skull", color: 0xe6e2d8, amplitude: 0.22, frequency: 1.06, phase: 0.1 },
    { x: -0.77, length: 3.12, model: "duck", color: 0xc9a668, amplitude: 0.2, frequency: 0.92, phase: 1.05 },
    { x: 0.77, length: 2.98, model: "hand", color: 0x9eb8b7, amplitude: 0.24, frequency: 1.12, phase: 2.0 },
    { x: 2.28, length: 3.22, model: "astronaut", color: 0xc8cbc7, amplitude: 0.19, frequency: 0.98, phase: 2.8 },
  ];
  const loadedModels = await Promise.all(
    objects.map((item) => objLoader.loadAsync(new URL("./assets/" + item.model + ".obj", import.meta.url).href)),
  );

  objects.forEach((item, index) => makePendulum({ ...item, model: loadedModels[index] }));
}

const clock = new THREE.Clock();
function render() {
  const elapsed = clock.getElapsedTime();
  for (const item of swingSet) {
    const phase = elapsed * item.frequency + item.phase;
    item.pivot.rotation.z = item.amplitude * Math.sin(phase);
    item.pivot.rotation.x = 0.045 * Math.sin(phase + 0.8);
    item.bob.rotation.y = 0.07 * Math.sin(phase * 0.64 + item.phase);
    const center = item.pivot.localToWorld(new THREE.Vector3(0, -item.length, 0));
    item.shadow.position.set(center.x + 0.16, center.y - 0.14, -3.77);
    item.shadow.rotation.z = -item.pivot.rotation.z * 0.25;
  }
  renderer.render(scene, camera);
}
function resize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  fitCamera();
}
window.addEventListener("resize", resize);

buildScene()
  .then(() => {
    resize();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) render();
    else renderer.setAnimationLoop(render);
  })
  .catch((error) => console.error("Could not build the pendulum scene.", error));