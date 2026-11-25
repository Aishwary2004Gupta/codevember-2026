import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
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
const cameraTarget = new THREE.Vector3(-0.12, 0.62, 0);
let cameraRadius = 12.6;
let cameraAzimuth = 0.12;
let cameraPolar = 1.48;
function placeCamera() {
  camera.position.setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth)).add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xffffff, 0x000000, 1.55));
const keyLight = new THREE.DirectionalLight(0xffffff, 4.4);
keyLight.position.set(-3.5, 6.5, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0xffffff, 2.6);
rimLight.position.set(4, 2.5, -4);
scene.add(rimLight);
const frontLight = new THREE.PointLight(0xffffff, 48, 18, 2);
frontLight.position.set(0.5, 2.8, 5.5);
scene.add(frontLight);

const handGroup = new THREE.Group();
scene.add(handGroup);
const skinMaterials = [];
const contourMaterials = [];
const nailMaterials = [];

function addSkinMaterial(material) {
  skinMaterials.push(material);
  return material;
}
function addContourMaterial(material) {
  contourMaterials.push(material);
  return material;
}
function addNailMaterial(material) {
  nailMaterials.push(material);
  return material;
}

const skin = addSkinMaterial(new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0.08,
  roughness: 0.48,
  clearcoat: 0.12,
  clearcoatRoughness: 0.35,
  side: THREE.DoubleSide,
}));
const ink = addContourMaterial(new THREE.MeshBasicMaterial({ color: 0xffffff }));
const lineInk = addContourMaterial(new THREE.LineBasicMaterial({ color: 0xffffff }));
const nail = addNailMaterial(new THREE.MeshPhysicalMaterial({ color: 0x303030, metalness: 0.08, roughness: 0.3, clearcoat: 0.45 }));

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

const palmGeometry = new THREE.ExtrudeGeometry(palmShape, {
  depth: 0.34,
  bevelEnabled: true,
  bevelSegments: 5,
  bevelSize: 0.055,
  bevelThickness: 0.065,
  curveSegments: 32,
});
palmGeometry.translate(0, 0, -0.18);
const palm = new THREE.Mesh(palmGeometry, skin);
palm.castShadow = true;
palm.receiveShadow = true;
handGroup.add(palm);
const palmEdges = new THREE.LineSegments(new THREE.EdgesGeometry(palmGeometry, 12), lineInk);
handGroup.add(palmEdges);
const palmContourPoints = palmShape.getPoints(160).map((point) => new THREE.Vector3(point.x, point.y, 0.205));
const palmContour = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3(palmContourPoints, true, "centripetal"), 320, 0.013, 8, true),
  ink,
);
handGroup.add(palmContour);

function taperedFingerGeometry(points, radii, radialSegments = 20, curveSegments = 72) {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(point[0], point[1], point[2])), false, "centripetal");
  const positions = [];
  const indices = [];
  for (let i = 0; i <= curveSegments; i++) {
    const t = i / curveSegments;
    const point = curve.getPoint(t);
    const tangent = curve.getTangent(t).normalize();
    const side = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
    const binormal = new THREE.Vector3(0, 0, 1);
    const radiusPosition = t * (radii.length - 1);
    const radiusIndex = Math.min(radii.length - 2, Math.floor(radiusPosition));
    const radiusMix = THREE.MathUtils.smoothstep(radiusPosition - radiusIndex, 0, 1);
    const radius = THREE.MathUtils.lerp(radii[radiusIndex], radii[radiusIndex + 1], radiusMix);
    for (let j = 0; j < radialSegments; j++) {
      const a = j / radialSegments * Math.PI * 2;
      const offset = side.clone().multiplyScalar(Math.cos(a) * radius).addScaledVector(binormal, Math.sin(a) * radius * 0.88);
      positions.push(point.x + offset.x, point.y + offset.y, point.z + offset.z);
      if (i < curveSegments) {
        const current = i * radialSegments + j;
        const nextRing = current + radialSegments;
        const around = i * radialSegments + (j + 1) % radialSegments;
        const aroundNext = nextRing - j + (j + 1) % radialSegments;
        indices.push(current, around, nextRing, around, aroundNext, nextRing);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function addFinger(name, points, radii) {
  const finger = new THREE.Mesh(taperedFingerGeometry(points, radii), skin);
  finger.name = name;
  finger.castShadow = true;
  finger.receiveShadow = true;
  handGroup.add(finger);

  const curvePoints = points.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const curve = new THREE.CatmullRomCurve3(curvePoints, false, "centripetal");
  function radiusAt(t) {
    const radiusPosition = t * (radii.length - 1);
    const radiusIndex = Math.min(radii.length - 2, Math.floor(radiusPosition));
    const mix = THREE.MathUtils.smoothstep(radiusPosition - radiusIndex, 0, 1);
    return THREE.MathUtils.lerp(radii[radiusIndex], radii[radiusIndex + 1], mix);
  }
  for (const sideSign of [-1, 1]) {
    const edgePoints = [];
    for (let i = 0; i <= 48; i++) {
      const t = i / 48;
      const center = curve.getPoint(t);
      const tangent = curve.getTangent(t).normalize();
      const side = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
      const radius = radiusAt(t);
      center.addScaledVector(side, sideSign * radius * 0.94);
      center.z += radius * 0.72;
      edgePoints.push(center);
    }
    const edgeCurve = new THREE.CatmullRomCurve3(edgePoints, false, "centripetal");
    handGroup.add(new THREE.Mesh(new THREE.TubeGeometry(edgeCurve, 64, 0.008, 6, false), ink));
  }
  for (const t of [0.24, 0.51, 0.77]) {
    const point = curve.getPoint(t);
    const tangent = curve.getTangent(t).normalize();
    const side = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
    const approximateRadius = THREE.MathUtils.lerp(radii[1], radii[2], Math.abs(t - 0.5) * 1.2);
    const creasePoints = [
      point.clone().addScaledVector(side, -approximateRadius * 0.54).add(new THREE.Vector3(0, 0, approximateRadius * 0.66)),
      point.clone().add(new THREE.Vector3(0, 0, approximateRadius * 0.84)),
      point.clone().addScaledVector(side, approximateRadius * 0.54).add(new THREE.Vector3(0, 0, approximateRadius * 0.66)),
    ];
    const creaseCurve = new THREE.CatmullRomCurve3(creasePoints);
    const crease = new THREE.Mesh(new THREE.TubeGeometry(creaseCurve, 12, 0.006, 6, false), ink);
    handGroup.add(crease);
  }

  const tip = points[points.length - 1];
  const tipSphere = new THREE.Mesh(new THREE.SphereGeometry(radii[radii.length - 1] * 0.96, 24, 18), skin);
  tipSphere.position.set(tip[0], tip[1], tip[2]);
  tipSphere.scale.z = 0.86;
  tipSphere.castShadow = true;
  handGroup.add(tipSphere);
  const nailPlate = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 18), nail);
  nailPlate.position.set(tip[0] + 0.025, tip[1] + 0.005, tip[2] + radii[radii.length - 1] * 0.86);
  nailPlate.scale.set(radii[radii.length - 1] * 0.58, radii[radii.length - 1] * 0.38, 0.012);
  handGroup.add(nailPlate);
}

addFinger("index finger", [
  [-0.32, 2.36, 0.10], [-0.04, 2.55, 0.11], [0.50, 2.61, 0.13], [1.00, 2.53, 0.16], [1.49, 2.38, 0.19], [1.76, 2.19, 0.21],
], [0.14, 0.125, 0.118, 0.098, 0.077]);
addFinger("middle finger", [
  [-0.27, 2.09, 0.09], [0.14, 2.18, 0.11], [0.72, 2.14, 0.14], [1.24, 1.98, 0.18], [1.64, 1.77, 0.22], [1.70, 1.58, 0.26],
], [0.15, 0.135, 0.126, 0.108, 0.081]);
addFinger("ring finger", [
  [-0.25, 1.83, 0.08], [0.20, 1.85, 0.11], [0.70, 1.68, 0.15], [1.13, 1.44, 0.19], [1.43, 1.20, 0.22], [1.40, 1.04, 0.24],
], [0.14, 0.13, 0.12, 0.102, 0.073]);
addFinger("little finger", [
  [-0.31, 1.58, 0.06], [0.08, 1.51, 0.09], [0.48, 1.30, 0.13], [0.84, 1.05, 0.17], [1.04, 0.83, 0.21], [1.00, 0.69, 0.23],
], [0.12, 0.108, 0.098, 0.083, 0.06]);
addFinger("thumb", [
  [-0.23, 1.30, 0.12], [0.09, 1.06, 0.15], [0.52, 1.00, 0.19], [0.95, 1.17, 0.24], [1.34, 1.43, 0.29], [1.64, 1.56, 0.33],
], [0.18, 0.16, 0.145, 0.12, 0.085]);

// Raised thumb muscle and palm folds add volume to the palm silhouette.
const thenar = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 32), skin);
thenar.position.set(-0.1, 1.31, 0.11);
thenar.scale.set(0.38, 0.56, 0.17);
thenar.castShadow = true;
handGroup.add(thenar);
const palmCreaseMaterial = ink;
function addPalmCrease(points, radius = 0.009) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, z = 0.235]) => new THREE.Vector3(x, y, z)));
  handGroup.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, radius, 8, false), palmCreaseMaterial));
}
addPalmCrease([[-0.50, 1.38], [-0.05, 1.50], [0.35, 1.60], [0.70, 1.63]]);
addPalmCrease([[-0.45, 1.72], [-0.03, 1.81], [0.35, 1.85], [0.69, 1.81]], 0.008);
addPalmCrease([[-1.27, 1.10], [-1.08, 1.48], [-0.99, 1.91], [-1.14, 2.27]], 0.007);

const anchorLocal = new THREE.Vector3(1.67, 1.61, 0.39);
const anchorWorld = new THREE.Vector3();
const grip = new THREE.Mesh(new THREE.SphereGeometry(0.063, 28, 20), skin);
grip.position.copy(anchorLocal);
handGroup.add(grip);
const gripContour = new THREE.Mesh(new THREE.TorusGeometry(0.066, 0.009, 8, 36), ink);
gripContour.position.copy(anchorLocal);
handGroup.add(gripContour);

const ballGroup = new THREE.Group();
scene.add(ballGroup);
const ballMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.09 });
const ball = new THREE.Mesh(new THREE.SphereGeometry(0.235, 72, 56), ballMaterial);
ball.castShadow = true;
ball.receiveShadow = true;
ballGroup.add(ball);
const ballBandMaterial = addSkinMaterial(new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.15, roughness: 0.28 }));
const ballBand = new THREE.Mesh(new THREE.TorusGeometry(0.237, 0.008, 8, 72), ballBandMaterial);
ballBand.rotation.x = Math.PI / 2;
ballGroup.add(ballBand);
const ballCapMaterial = addSkinMaterial(new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.12, roughness: 0.3 }));
const ballCap = new THREE.Mesh(new THREE.SphereGeometry(0.045, 28, 20), ballCapMaterial);
ballCap.position.y = 0.228;
ballGroup.add(ballCap);

const stringMaterial = addContourMaterial(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.18, roughness: 0.28 }));
const string = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.011, 1, 12), stringMaterial);
scene.add(string);
const stringLineMaterial = addContourMaterial(new THREE.LineBasicMaterial({ color: 0xffffff }));
const stringLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([anchorWorld, anchorWorld]), stringLineMaterial);
scene.add(stringLine);

const swingPeriod = 14.5;
const themePeriod = swingPeriod * 4;
const pendulumLength = 3.35;
let elapsed = 0;
let running = true;
const axis = new THREE.Vector3(0, 1, 0);

function setMaterialTone(material, tone) {
  material.color.setRGB(tone, tone, tone);
}

function updateTheme(themeValue) {
  const tone = THREE.MathUtils.clamp(themeValue, 0, 1);
  const inverse = 1 - tone;
  scene.background.setRGB(tone, tone, tone);
  for (const material of skinMaterials) setMaterialTone(material, tone);
  for (const material of contourMaterials) setMaterialTone(material, inverse);
  for (const material of nailMaterials) setMaterialTone(material, THREE.MathUtils.lerp(tone, inverse, 0.22));
  setMaterialTone(ballMaterial, inverse);
}

function updateAnimation(time) {
  const themePhase = time / themePeriod * Math.PI * 2;
  const theme = 0.5 - 0.5 * Math.cos(themePhase);
  const lift = 0.72 * theme;
  handGroup.position.y = lift;
  anchorWorld.copy(anchorLocal);
  anchorWorld.y += lift;

  const swingPhase = time / swingPeriod * Math.PI * 2;
  const angle = 0.5 * Math.sin(swingPhase);
  const plane = 0.16 * Math.sin(swingPhase + 0.7);
  const bobPosition = new THREE.Vector3(
    anchorWorld.x + pendulumLength * Math.sin(angle) * Math.cos(plane),
    anchorWorld.y - pendulumLength * Math.cos(angle),
    anchorWorld.z + pendulumLength * Math.sin(angle) * Math.sin(plane),
  );
  ballGroup.position.copy(bobPosition);
  ballGroup.rotation.set(0.08 * Math.sin(swingPhase), 0.09 * Math.cos(swingPhase), -angle * 0.08);

  const direction = bobPosition.clone().sub(anchorWorld);
  string.position.copy(anchorWorld).add(bobPosition).multiplyScalar(0.5);
  string.quaternion.setFromUnitVectors(axis, direction.clone().normalize());
  string.scale.set(1, direction.length() - 0.22, 1);
  const stringEnd = bobPosition.clone().add(direction.clone().normalize().multiplyScalar(0.22));
  stringLine.geometry.setFromPoints([anchorWorld, stringEnd]);

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
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.006, 7.5, 32);
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
  const fitHeight = 5.55 / (2 * Math.tan(fovHalf));
  const fitWidth = 6.9 / (2 * Math.tan(fovHalf) * aspect);
  cameraRadius = Math.max(fitHeight, fitWidth) * 1.08;
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
