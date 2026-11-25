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
renderer.toneMappingExposure = 1.18;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const pmrem = new THREE.PMREMGenerator(renderer);
const studio = new RoomEnvironment();
scene.environment = pmrem.fromScene(studio, 0.04).texture;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 90);
const cameraTarget = new THREE.Vector3(-0.1, 0.35, 0);
let cameraRadius = 15.8;
let cameraAzimuth = 0.12;
let cameraPolar = 1.48;
function placeCamera() {
  camera.position.setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth)).add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xffffff, 0x151515, 1.25));
const keyLight = new THREE.DirectionalLight(0xffffff, 4.3);
keyLight.position.set(-3.5, 6.5, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0xffffff, 2.8);
rimLight.position.set(4, 2.5, -4);
scene.add(rimLight);
const frontLight = new THREE.PointLight(0xffffff, 42, 18, 2);
frontLight.position.set(0.5, 2.8, 5.5);
scene.add(frontLight);

const handRig = new THREE.Group();
handRig.name = "single-hand-rig";
scene.add(handRig);
const handMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0.025,
  roughness: 0.43,
  clearcoat: 0.32,
  clearcoatRoughness: 0.32,
  side: THREE.DoubleSide,
});
const nailMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0.04,
  roughness: 0.3,
  clearcoat: 0.48,
  clearcoatRoughness: 0.22,
  side: THREE.DoubleSide,
});
const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.BackSide,
  depthWrite: false,
});
const handMaterials = [handMaterial, nailMaterial];
const oppositeMaterials = [outlineMaterial];

const handBaseY = 1.42;
handRig.position.set(-0.82, handBaseY, 0);
let anchorBase = new THREE.Vector3(1.65, handBaseY + 0.35, 0.05);

function createContrastShell(mesh) {
  const shell = new THREE.Mesh(mesh.geometry, outlineMaterial);
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  mesh.updateMatrix();
  mesh.matrix.decompose(position, quaternion, scale);
  shell.position.copy(position);
  shell.quaternion.copy(quaternion);
  shell.scale.copy(scale).multiplyScalar(1.018);
  shell.renderOrder = mesh.renderOrder - 1;
  shell.castShadow = false;
  shell.receiveShadow = false;
  shell.frustumCulled = mesh.frustumCulled;
  shell.name = mesh.name + "-contrast-outline";
  shell.userData.isContrastShell = true;
  mesh.parent.add(shell);
}

function findFingertipAnchor(root) {
  root.updateMatrixWorld(true);
  let furthestX = -Infinity;
  const vertices = [];

  root.traverse((object) => {
    if (!object.isMesh || object.userData.isContrastShell) return;
    const attribute = object.geometry && object.geometry.getAttribute("position");
    if (!attribute) return;
    const point = new THREE.Vector3();
    for (let index = 0; index < attribute.count; index++) {
      point.fromBufferAttribute(attribute, index).applyMatrix4(object.matrixWorld);
      if (point.x > furthestX) furthestX = point.x;
      vertices.push(point.clone());
    }
  });

  if (!Number.isFinite(furthestX)) return anchorBase.clone();
  const tip = new THREE.Vector3();
  let count = 0;
  for (const point of vertices) {
    if (point.x < furthestX - 0.035) continue;
    tip.add(point);
    count++;
  }
  if (count) tip.multiplyScalar(1 / count);
  tip.x -= 0.055;
  tip.y -= 0.025;
  return tip;
}

function loadOneHand() {
  const loader = new GLTFLoader();
  loader.load(
    "./assets/creation-of-adam/creation-of-adam.glb",
    (gltf) => {
      gltf.scene.updateMatrixWorld(true);
      const sourceHand = gltf.scene.getObjectByName("export_0");
      if (!sourceHand) {
        console.error("The hand model did not contain the expected single-hand mesh.");
        return;
      }

      // Only export_0 is attached; the separate Other hand_1 is intentionally omitted.
      const hand = sourceHand.clone(true);
      hand.matrix.copy(sourceHand.matrixWorld);
      hand.matrixAutoUpdate = false;
      hand.name = "one-hand-only";

      const originalBounds = new THREE.Box3().setFromObject(hand);
      const originalSize = originalBounds.getSize(new THREE.Vector3());
      const originalCenter = originalBounds.getCenter(new THREE.Vector3());
      const centeredHand = new THREE.Group();
      centeredHand.name = "centered-hand-model";
      centeredHand.position.copy(originalCenter).multiplyScalar(-1);
      centeredHand.add(hand);

      const fittedHand = new THREE.Group();
      fittedHand.name = "hand-model-fit";
      fittedHand.rotation.y = Math.PI / 2;
      fittedHand.scale.set(
        1.18 / Math.max(originalSize.x, 0.001),
        3.3 / Math.max(originalSize.y, 0.001),
        5.35 / Math.max(originalSize.z, 0.001),
      );
      fittedHand.add(centeredHand);
      handRig.add(fittedHand);

      const handMeshes = [];
      hand.traverse((object) => {
        if (!object.isMesh) return;
        const isNail = object.name === "Object_5" || object.name.toLowerCase().includes("nail");
        object.material = isNail ? nailMaterial : handMaterial;
        object.castShadow = true;
        object.receiveShadow = true;
        object.userData.isOriginalHandMesh = true;
        handMeshes.push(object);
      });
      for (const mesh of handMeshes) createContrastShell(mesh);

      handRig.updateMatrixWorld(true);
      anchorBase.copy(findFingertipAnchor(hand));
    },
    undefined,
    (error) => {
      console.error("Could not load the pendulum hand model.", error);
    },
  );
}
loadOneHand();

const ballGroup = new THREE.Group();
ballGroup.name = "pendulum-bob";
scene.add(ballGroup);
const ballMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.56,
  roughness: 0.2,
  clearcoat: 1,
  clearcoatRoughness: 0.09,
});
const ball = new THREE.Mesh(new THREE.SphereGeometry(0.235, 72, 56), ballMaterial);
ball.castShadow = true;
ball.receiveShadow = true;
ballGroup.add(ball);
const ballBandMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness: 0.28,
  roughness: 0.25,
});
const ballBand = new THREE.Mesh(new THREE.TorusGeometry(0.237, 0.008, 8, 72), ballBandMaterial);
ballBand.rotation.x = Math.PI / 2;
ballGroup.add(ballBand);
const ballCap = new THREE.Mesh(new THREE.SphereGeometry(0.045, 28, 20), ballBandMaterial);
ballCap.position.y = 0.228;
ballGroup.add(ballCap);

const stringMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.16,
  roughness: 0.32,
});
const string = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.011, 1, 12), stringMaterial);
string.name = "pendulum-string";
scene.add(string);
const anchorFerrule = new THREE.Mesh(
  new THREE.SphereGeometry(0.038, 24, 18),
  new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.24 }),
);
scene.add(anchorFerrule);

const swingPeriod = 14.5;
const themePeriod = swingPeriod * 4;
const pendulumLength = 3.35;
let elapsed = 0;
let running = true;
const axis = new THREE.Vector3(0, 1, 0);
const anchorWorld = new THREE.Vector3();
const bobPosition = new THREE.Vector3();
const direction = new THREE.Vector3();
const stringEnd = new THREE.Vector3();

function setGray(material, tone) {
  material.color.setRGB(tone, tone, tone);
}

function updateTheme(themeValue) {
  const tone = THREE.MathUtils.clamp(themeValue, 0, 1);
  const opposite = 1 - tone;
  scene.background.setRGB(tone, tone, tone);
  for (const material of handMaterials) setGray(material, tone);
  for (const material of oppositeMaterials) setGray(material, opposite);
  setGray(stringMaterial, opposite);
  setGray(anchorFerrule.material, opposite);
  setGray(ballMaterial, opposite);
  setGray(ballBandMaterial, tone);
}

function updateAnimation(time) {
  const themePhase = time / themePeriod * Math.PI * 2;
  const theme = 0.5 - 0.5 * Math.cos(themePhase);
  const lift = 0.72 * theme;
  handRig.position.y = handBaseY + lift;

  anchorWorld.copy(anchorBase);
  anchorWorld.y += lift;

  const swingPhase = time / swingPeriod * Math.PI * 2;
  const angle = 0.48 * Math.sin(swingPhase);
  const plane = 0.19 * Math.sin(swingPhase + 0.7);
  const sinAngle = Math.sin(angle);
  bobPosition.set(
    anchorWorld.x + pendulumLength * sinAngle * Math.cos(plane),
    anchorWorld.y - pendulumLength * Math.cos(angle),
    anchorWorld.z + pendulumLength * sinAngle * Math.sin(plane),
  );

  ballGroup.position.copy(bobPosition);
  ballGroup.rotation.set(0.08 * Math.sin(swingPhase), 0.09 * Math.cos(swingPhase), -angle * 0.08);

  direction.copy(bobPosition).sub(anchorWorld);
  stringEnd.copy(bobPosition).addScaledVector(direction, -0.235 / direction.length());
  const stringDirection = stringEnd.clone().sub(anchorWorld);
  string.position.copy(anchorWorld).add(stringEnd).multiplyScalar(0.5);
  string.quaternion.setFromUnitVectors(axis, stringDirection.clone().normalize());
  string.scale.set(1, stringDirection.length(), 1);
  anchorFerrule.position.copy(anchorWorld);

  updateTheme(theme);
}

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
  cameraPolar = THREE.MathUtils.clamp(cameraPolar + (event.clientY - lastY) * 0.004, 0.8, 1.58);
  lastX = event.clientX;
  lastY = event.clientY;
  placeCamera();
});
canvas.addEventListener("pointerup", () => { dragging = false; });
canvas.addEventListener("pointercancel", () => { dragging = false; });
canvas.addEventListener("wheel", (event) => {
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.006, 8, 32);
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
  const fitHeight = 7.5 / (2 * Math.tan(fovHalf));
  const fitWidth = 8.7 / (2 * Math.tan(fovHalf) * aspect);
  cameraRadius = Math.max(fitHeight, fitWidth) * 1.04;
  camera.updateProjectionMatrix();
  placeCamera();
}
window.addEventListener("resize", resize);
resize();

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.04);
  if (running) elapsed += delta;
  updateAnimation(elapsed);
  renderer.render(scene, camera);
}
animate();
