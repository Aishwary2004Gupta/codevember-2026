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

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 100);
const cameraTarget = new THREE.Vector3(0, -0.8, 0);
let cameraRadius = 18;
let cameraAzimuth = 0.08;
let cameraPolar = 1.48;

function placeCamera() {
  camera.position
    .setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth))
    .add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xffffff, 0x101010, 1.35));

const keyLight = new THREE.DirectionalLight(0xffffff, 3.25);
keyLight.position.set(-4, 7, 8);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xffffff, 2.1);
rimLight.position.set(4, 3, -5);
scene.add(rimLight);

const frontLight = new THREE.PointLight(0xffffff, 30, 28, 2);
frontLight.position.set(1, 2.5, 8);
scene.add(frontLight);

const handRig = new THREE.Group();
handRig.name = "single-hand-and-forearm";
handRig.position.set(-1.5, 1.65, 0);
scene.add(handRig);

const skinMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0.015,
  roughness: 0.46,
  clearcoat: 0.22,
  clearcoatRoughness: 0.34,
  side: THREE.DoubleSide,
});
const nailMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0.025,
  roughness: 0.33,
  clearcoat: 0.3,
  clearcoatRoughness: 0.25,
  side: THREE.DoubleSide,
});
const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.BackSide,
  depthWrite: false,
});
const handTones = [skinMaterial, nailMaterial];
const contourTones = [outlineMaterial];

function addHandOutline(mesh) {
  const shell = new THREE.Mesh(mesh.geometry, outlineMaterial);
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();

  mesh.updateMatrix();
  mesh.matrix.decompose(position, quaternion, scale);
  shell.position.copy(position);
  shell.quaternion.copy(quaternion);
  shell.scale.copy(scale).multiplyScalar(1.018);
  shell.name = mesh.name + "-contrast-edge";
  shell.userData.contrastEdge = true;
  shell.frustumCulled = mesh.frustumCulled;
  mesh.parent.add(shell);
}

function makeForearmGeometry(expansion = 0) {
  const ringCount = 56;
  const radialCount = 36;
  const positions = [];
  const indices = [];

  for (let ring = 0; ring <= ringCount; ring++) {
    const t = ring / ringCount;
    const eased = t * t * (3 - 2 * t);
    const x = THREE.MathUtils.lerp(-7.35, -1.92, t);
    const centerY = THREE.MathUtils.lerp(0.52, 0.16, eased) + 0.06 * Math.sin(Math.PI * t);
    const radiusY = THREE.MathUtils.lerp(1.16, 0.48, eased) + expansion;
    const radiusZ = THREE.MathUtils.lerp(0.5, 0.34, eased) + expansion;

    for (let side = 0; side < radialCount; side++) {
      const angle = (side / radialCount) * Math.PI * 2;
      positions.push(
        x,
        centerY + Math.cos(angle) * radiusY,
        Math.sin(angle) * radiusZ,
      );

      if (ring < ringCount) {
        const current = ring * radialCount + side;
        const next = current + radialCount;
        const around = ring * radialCount + (side + 1) % radialCount;
        const aroundNext = next - side + (side + 1) % radialCount;
        indices.push(current, around, next, around, aroundNext, next);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

const forearmOutline = new THREE.Mesh(makeForearmGeometry(0.045), outlineMaterial);
forearmOutline.name = "forearm-contrast-edge";
forearmOutline.userData.contrastEdge = true;
handRig.add(forearmOutline);

const forearm = new THREE.Mesh(makeForearmGeometry(), skinMaterial);
forearm.name = "single-forearm-extension";
forearm.castShadow = true;
forearm.receiveShadow = true;
handRig.add(forearm);

const handBaseY = handRig.position.y;
let anchorBase = new THREE.Vector3(1.15, 2.05, 0.02);

function findTipAnchor(root) {
  root.updateMatrixWorld(true);
  const vertices = [];
  let farthestX = -Infinity;

  root.traverse((object) => {
    if (!object.isMesh || object.userData.contrastEdge) return;
    const positions = object.geometry && object.geometry.getAttribute("position");
    if (!positions) return;

    const point = new THREE.Vector3();
    for (let index = 0; index < positions.count; index++) {
      point.fromBufferAttribute(positions, index).applyMatrix4(object.matrixWorld);
      vertices.push(point.clone());
      farthestX = Math.max(farthestX, point.x);
    }
  });

  if (!Number.isFinite(farthestX)) return anchorBase.clone();

  const tip = new THREE.Vector3();
  let count = 0;
  for (const point of vertices) {
    if (point.x < farthestX - 0.035) continue;
    tip.add(point);
    count++;
  }

  if (count) tip.multiplyScalar(1 / count);
  tip.x -= 0.045;
  tip.y -= 0.03;
  return tip;
}

function loadSingleHand() {
  const loader = new GLTFLoader();
  loader.load(
    "./assets/creation-of-adam/creation-of-adam.glb",
    (gltf) => {
      gltf.scene.updateMatrixWorld(true);
      const sourceHand = gltf.scene.getObjectByName("export_0");
      if (!sourceHand) {
        console.error("The one-hand model could not be found.");
        return;
      }

      // Attach just the export_0 hand; leave the model's second hand out of the scene.
      const hand = sourceHand.clone(true);
      hand.matrix.copy(sourceHand.matrixWorld);
      hand.matrixAutoUpdate = false;
      hand.name = "single-hand-model";

      const sourceBounds = new THREE.Box3().setFromObject(hand);
      const sourceSize = sourceBounds.getSize(new THREE.Vector3());
      const sourceCenter = sourceBounds.getCenter(new THREE.Vector3());

      const centeredHand = new THREE.Group();
      centeredHand.position.copy(sourceCenter).multiplyScalar(-1);
      centeredHand.add(hand);

      const fittedHand = new THREE.Group();
      fittedHand.rotation.y = Math.PI / 2;
      fittedHand.scale.set(
        1.18 / Math.max(sourceSize.x, 0.001),
        3.3 / Math.max(sourceSize.y, 0.001),
        5.35 / Math.max(sourceSize.z, 0.001),
      );
      fittedHand.add(centeredHand);
      handRig.add(fittedHand);

      const meshes = [];
      hand.traverse((object) => {
        if (!object.isMesh) return;
        object.material = object.name === "Object_5" ? nailMaterial : skinMaterial;
        object.castShadow = true;
        object.receiveShadow = true;
        meshes.push(object);
      });
      for (const mesh of meshes) addHandOutline(mesh);

      handRig.updateMatrixWorld(true);
      anchorBase.copy(findTipAnchor(hand));
    },
    undefined,
    (error) => {
      console.error("Could not load the single-hand model.", error);
    },
  );
}
loadSingleHand();

const pendulumLength = 8.2;
const ballRadius = 2.05;
const ballGroup = new THREE.Group();
ballGroup.name = "pendulum-bob";
scene.add(ballGroup);

const ballMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.08,
  roughness: 0.24,
  clearcoat: 0.72,
  clearcoatRoughness: 0.12,
});
const ball = new THREE.Mesh(new THREE.SphereGeometry(ballRadius, 72, 56), ballMaterial);
ball.castShadow = true;
ball.receiveShadow = true;
ballGroup.add(ball);

const stringMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.1,
  roughness: 0.36,
});
const string = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 1, 12), stringMaterial);
string.name = "long-pendulum-string";
scene.add(string);

const anchorFerruleMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.18,
  roughness: 0.28,
});
const anchorFerrule = new THREE.Mesh(new THREE.SphereGeometry(0.055, 24, 18), anchorFerruleMaterial);
scene.add(anchorFerrule);

const animationPeriod = 14.5;
const maximumAngle = 1.08;
let elapsed = 0;
let running = true;

const upAxis = new THREE.Vector3(0, 1, 0);
const anchorWorld = new THREE.Vector3();
const bobPosition = new THREE.Vector3();
const bobDirection = new THREE.Vector3();
const stringEnd = new THREE.Vector3();
const stringVector = new THREE.Vector3();
const ballPlane = 1.67;

function setGray(material, tone) {
  material.color.setRGB(tone, tone, tone);
}

function updateTheme(theme) {
  const lightness = THREE.MathUtils.clamp(theme, 0, 1);
  const opposite = 1 - lightness;

  scene.background.setRGB(lightness, lightness, lightness);
  for (const material of handTones) setGray(material, lightness);
  for (const material of contourTones) setGray(material, opposite);
  setGray(stringMaterial, opposite);
  setGray(anchorFerruleMaterial, opposite);
  setGray(ballMaterial, opposite);
}

function updateAnimation(time) {
  const phase = (time / animationPeriod) * Math.PI * 2;
  const theme = 0.5 - 0.5 * Math.cos(phase);
  const lift = 0.42 * theme;

  handRig.position.y = handBaseY + lift;
  anchorWorld.copy(anchorBase);
  anchorWorld.y += lift;

  // The bob completes one smooth forward-and-return arc as the scene inverts.
  const angle = maximumAngle * (1 - Math.cos(phase)) * 0.5;
  const plane = ballPlane + 0.1 * Math.sin(phase);
  const swing = pendulumLength * Math.sin(angle);
  bobPosition.set(
    anchorWorld.x + swing * Math.cos(plane),
    anchorWorld.y - pendulumLength * Math.cos(angle),
    anchorWorld.z + swing * Math.sin(plane),
  );

  ballGroup.position.copy(bobPosition);

  bobDirection.copy(bobPosition).sub(anchorWorld);
  stringEnd.copy(bobPosition).addScaledVector(bobDirection, -ballRadius / bobDirection.length());
  stringVector.copy(stringEnd).sub(anchorWorld);
  string.position.copy(anchorWorld).add(stringEnd).multiplyScalar(0.5);
  string.quaternion.setFromUnitVectors(upAxis, stringVector.clone().normalize());
  string.scale.set(1, stringVector.length(), 1);
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
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.006, 10, 34);
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
  const fitHeight = 9 / (2 * Math.tan(fovHalf));
  const fitWidth = 12 / (2 * Math.tan(fovHalf) * aspect);
  cameraRadius = Math.max(fitHeight, fitWidth) * 1.02;
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
