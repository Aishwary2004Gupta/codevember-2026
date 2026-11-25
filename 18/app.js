import * as THREE from "three";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 80);
const cameraTarget = new THREE.Vector3(-0.12, 0.58, 0);
let cameraRadius = 10.1;
let cameraAzimuth = 0.12;
let cameraPolar = 1.48;

function placeCamera() {
  camera.position.setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth)).add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xffffff, 0x000000, 1.2));
const key = new THREE.DirectionalLight(0xffffff, 4.6);
key.position.set(-3.5, 6.5, 7);
scene.add(key);
const rim = new THREE.DirectionalLight(0xffffff, 2.5);
rim.position.set(4, 2.5, -4);
scene.add(rim);
const front = new THREE.PointLight(0xffffff, 70, 20, 2);
front.position.set(0.5, 2.8, 5.5);
scene.add(front);

const handGroup = new THREE.Group();
scene.add(handGroup);
const blackSkin = new THREE.MeshPhysicalMaterial({ color: 0x000000, metalness: 0.16, roughness: 0.34, clearcoat: 0.75, clearcoatRoughness: 0.26, side: THREE.DoubleSide });
const blackInk = new THREE.MeshBasicMaterial({ color: 0x000000 });
const whiteInk = new THREE.MeshBasicMaterial({ color: 0xffffff });
const whiteLine = new THREE.LineBasicMaterial({ color: 0xffffff });

const palmShape = new THREE.Shape();
palmShape.moveTo(-3.32, 1.08);
palmShape.bezierCurveTo(-3.04, 0.91, -2.58, 0.89, -2.13, 1.00);
palmShape.bezierCurveTo(-1.65, 1.13, -1.22, 1.06, -0.79, 1.09);
palmShape.bezierCurveTo(-0.42, 1.12, -0.16, 1.35, -0.12, 1.68);
palmShape.lineTo(-0.36, 2.36);
palmShape.bezierCurveTo(-0.47, 2.66, -0.23, 2.91, 0.08, 2.91);
palmShape.bezierCurveTo(0.41, 2.91, 0.54, 2.62, 0.57, 2.33);
palmShape.bezierCurveTo(0.83, 2.52, 1.14, 2.51, 1.35, 2.33);
palmShape.bezierCurveTo(1.58, 2.13, 1.33, 1.91, 1.14, 1.76);
palmShape.bezierCurveTo(1.45, 1.91, 1.74, 1.81, 1.85, 1.61);
palmShape.bezierCurveTo(1.96, 1.39, 1.68, 1.23, 1.46, 1.20);
palmShape.bezierCurveTo(1.61, 1.02, 1.44, 0.78, 1.18, 0.68);
palmShape.bezierCurveTo(0.85, 0.54, 0.55, 0.68, 0.33, 0.88);
palmShape.bezierCurveTo(0.03, 1.05, -0.23, 1.03, -0.51, 0.97);
palmShape.bezierCurveTo(-0.91, 0.84, -1.27, 0.86, -1.68, 0.83);
palmShape.bezierCurveTo(-2.22, 0.75, -2.83, 0.77, -3.32, 0.94);
palmShape.closePath();

const palmGeometry = new THREE.ExtrudeGeometry(palmShape, { depth: 0.34, bevelEnabled: false, curveSegments: 24 });
palmGeometry.translate(0, 0, -0.18);
const palm = new THREE.Mesh(palmGeometry, blackSkin);
palm.castShadow = true;
palm.receiveShadow = true;
handGroup.add(palm);

const palmEdges = new THREE.LineSegments(new THREE.EdgesGeometry(palmGeometry, 12), whiteLine);
handGroup.add(palmEdges);
const palmFront = palmShape.getPoints(140).map((point) => new THREE.Vector3(point.x, point.y, 0.172));
handGroup.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(palmFront), whiteLine));
const palmBack = palmShape.getPoints(140).map((point) => new THREE.Vector3(point.x, point.y, -0.182));
handGroup.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(palmBack), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })));

function curveFrom(points) {
  return new THREE.CatmullRomCurve3(points.map(([x, y, z = 0.08]) => new THREE.Vector3(x, y, z)), false, "centripetal");
}

function addFinger(name, points, radius) {
  const curve = curveFrom(points);
  const outline = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, radius, 14, false), whiteInk);
  const coreCurve = curveFrom(points.map(([x, y, z = 0.08]) => [x, y, z + 0.034]));
  const core = new THREE.Mesh(new THREE.TubeGeometry(coreCurve, 48, radius * 0.77, 14, false), blackInk);
  outline.name = `${name} white contour`;
  core.name = `${name} black volume`;
  outline.castShadow = true;
  core.castShadow = true;
  handGroup.add(outline, core);

  for (let i = 1; i < points.length - 1; i += 2) {
    const [x, y, z = 0.08] = points[i];
    const joint = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.74, 18, 14), blackSkin);
    joint.position.set(x, y, z + 0.042);
    joint.castShadow = true;
    handGroup.add(joint);
    const jointRing = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.76, 0.007, 6, 28), whiteInk);
    jointRing.position.set(x, y, z + 0.105);
    handGroup.add(jointRing);
  }
}

addFinger("index", [
  [-0.38, 2.35, 0.10], [-0.05, 2.56, 0.12], [0.48, 2.63, 0.13], [1.00, 2.56, 0.16], [1.50, 2.39, 0.18], [1.75, 2.22, 0.19],
], 0.108);
addFinger("middle", [
  [-0.32, 2.08, 0.10], [0.12, 2.19, 0.12], [0.69, 2.15, 0.14], [1.22, 1.99, 0.17], [1.63, 1.76, 0.20], [1.69, 1.58, 0.23],
], 0.119);
addFinger("ring", [
  [-0.29, 1.84, 0.09], [0.18, 1.86, 0.11], [0.68, 1.69, 0.14], [1.12, 1.45, 0.18], [1.42, 1.20, 0.20], [1.39, 1.05, 0.22],
], 0.108);
addFinger("little", [
  [-0.30, 1.59, 0.08], [0.09, 1.52, 0.10], [0.48, 1.31, 0.12], [0.84, 1.06, 0.15], [1.05, 0.84, 0.18], [1.00, 0.70, 0.19],
], 0.092);
addFinger("thumb", [
  [-0.22, 1.29, 0.12], [0.10, 1.05, 0.15], [0.52, 0.99, 0.18], [0.94, 1.16, 0.21], [1.33, 1.42, 0.25], [1.63, 1.56, 0.29],
], 0.132);

function addCrease(points, radius = 0.008) {
  const curve = curveFrom(points.map(([x, y]) => [x, y, 0.225]));
  const crease = new THREE.Mesh(new THREE.TubeGeometry(curve, 36, radius, 8, false), whiteInk);
  handGroup.add(crease);
}
addCrease([[-0.47, 1.38], [-0.03, 1.51], [0.37, 1.61], [0.74, 1.64]], 0.009);
addCrease([[-0.42, 1.72], [-0.02, 1.82], [0.34, 1.86], [0.68, 1.82]], 0.008);
addCrease([[-1.3, 1.09], [-1.08, 1.47], [-0.99, 1.91], [-1.15, 2.29]], 0.008);

const anchor = new THREE.Vector3(1.67, 1.61, 0.38);
const knot = new THREE.Mesh(new THREE.SphereGeometry(0.064, 28, 20), blackSkin);
knot.position.copy(anchor);
handGroup.add(knot);
const knotOutline = new THREE.Mesh(new THREE.TorusGeometry(0.066, 0.009, 8, 36), whiteInk);
knotOutline.position.copy(anchor);
handGroup.add(knotOutline);

const pendulum = new THREE.Group();
scene.add(pendulum);
const ballMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.12, roughness: 0.24, clearcoat: 0.9, clearcoatRoughness: 0.12 });
const ball = new THREE.Mesh(new THREE.SphereGeometry(0.235, 64, 48), ballMaterial);
ball.castShadow = true;
ball.receiveShadow = true;
pendulum.add(ball);
const ballEquator = new THREE.Mesh(new THREE.TorusGeometry(0.237, 0.008, 8, 64), blackInk);
ballEquator.rotation.x = Math.PI / 2;
pendulum.add(ballEquator);
const ballCap = new THREE.Mesh(new THREE.SphereGeometry(0.045, 24, 18), blackInk);
ballCap.position.y = 0.226;
pendulum.add(ballCap);

const string = new THREE.Mesh(
  new THREE.CylinderGeometry(0.008, 0.011, 1, 10),
  new THREE.MeshBasicMaterial({ color: 0xffffff }),
);
scene.add(string);
const stringHighlight = new THREE.Line(new THREE.BufferGeometry().setFromPoints([anchor, anchor]), whiteLine);
scene.add(stringHighlight);
const axis = new THREE.Vector3(0, 1, 0);
const pendulumLength = 3.35;
const swingPeriod = 14.5;
let elapsed = 0;
let running = true;

function updatePendulum(phase) {
  const swingAngle = 0.5 * Math.sin(phase);
  const swingPlane = 0.16 * Math.sin(phase + 0.7);
  const horizontal = pendulumLength * Math.sin(swingAngle);
  const bobPosition = new THREE.Vector3(
    anchor.x + horizontal * Math.cos(swingPlane),
    anchor.y - pendulumLength * Math.cos(swingAngle),
    anchor.z + horizontal * Math.sin(swingPlane),
  );
  pendulum.position.copy(bobPosition);
  pendulum.rotation.set(0.08 * Math.sin(phase), 0.09 * Math.cos(phase), -swingAngle * 0.08);

  const direction = bobPosition.clone().sub(anchor);
  string.position.copy(anchor).add(bobPosition).multiplyScalar(0.5);
  string.quaternion.setFromUnitVectors(axis, direction.clone().normalize());
  string.scale.set(1, direction.length() - 0.22, 1);
  const stringEnd = bobPosition.clone().add(direction.clone().normalize().multiplyScalar(0.22));
  stringHighlight.geometry.setFromPoints([anchor, stringEnd]);
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
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.006, 7.5, 26);
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
  const objectHeight = 4.75;
  const objectWidth = 6.7;
  const fitHeight = objectHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
  const fitWidth = objectWidth / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * aspect);
  cameraRadius = Math.max(fitHeight, fitWidth) * 1.12;
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
  const phase = elapsed / swingPeriod * Math.PI * 2;
  updatePendulum(phase);
  renderer.render(scene, camera);
}
animate();
