import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const pmrem = new THREE.PMREMGenerator(renderer);
const room = new RoomEnvironment();
const scene = new THREE.Scene();
scene.environment = pmrem.fromScene(room, 0.04).texture;
pmrem.dispose();
scene.background = new THREE.Color(0x155d60);
scene.fog = new THREE.Fog(0x155d60, 17, 38);
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 80);
const cameraTarget = new THREE.Vector3(-0.5, 2.55, 0);
let cameraRadius = 10.6;
let cameraAzimuth = 0.52;
let cameraPolar = 1.13;

function placeCamera() {
  camera.position.setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth)).add(cameraTarget);
  camera.lookAt(cameraTarget);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xe2eee1, 0x123f42, 2.0));
const keyLight = new THREE.DirectionalLight(0xffe8c5, 4.3);
keyLight.position.set(-4.5, 9, 5.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -7;
keyLight.shadow.camera.right = 7;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -7;
keyLight.shadow.bias = -0.0002;
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xb4e4e1, 2.0);
fillLight.position.set(5, 4, -5);
scene.add(fillLight);
const rimLight = new THREE.PointLight(0xf0c88c, 35, 12, 2);
rimLight.position.set(2.8, 4.3, 3.2);
scene.add(rimLight);
const skyBounce = new THREE.PointLight(0x75d4cb, 18, 15, 2);
skyBounce.position.set(-4, 2, -4);
scene.add(skyBounce);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshStandardMaterial({ color: 0x175e61, roughness: 0.82, metalness: 0.02 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.025;
floor.receiveShadow = true;
scene.add(floor);

let randomSeed = 18018;
function random() {
  randomSeed = randomSeed * 16807 % 2147483647;
  return (randomSeed - 1) / 2147483646;
}

function makeTerrazzoTexture() {
  const size = 1024;
  const canvasTextureSource = document.createElement("canvas");
  canvasTextureSource.width = size;
  canvasTextureSource.height = size;
  const context = canvasTextureSource.getContext("2d");
  context.fillStyle = "#e3dfd4";
  context.fillRect(0, 0, size, size);
  const chips = ["#6f706a", "#9b9487", "#4d5554", "#b7ad9d", "#777d78", "#d0c7b8"];
  for (let i = 0; i < 2100; i++) {
    const x = random() * size;
    const y = random() * size;
    const radius = 0.55 + random() * 2.45;
    context.globalAlpha = 0.43 + random() * 0.42;
    context.fillStyle = chips[Math.floor(random() * chips.length)];
    context.beginPath();
    context.ellipse(x, y, radius * (0.55 + random()), radius * (0.45 + random() * 0.9), random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }
  context.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvasTextureSource);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function makeAnnulusGeometry(outerRadius, innerRadius, depth, bevel = 0) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
  const hole = new THREE.Path();
  hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 4,
    steps: 1,
    curveSegments: 128,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();
  return geometry;
}

const terrazzo = makeTerrazzoTexture();
const stoneMaterial = new THREE.MeshStandardMaterial({ map: terrazzo, color: 0xf0ede3, roughness: 0.77, metalness: 0.015 });
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x344d4b, metalness: 0.62, roughness: 0.34 });
const brassMaterial = new THREE.MeshStandardMaterial({ color: 0xb89962, metalness: 0.84, roughness: 0.19, envMapIntensity: 1.45 });

// A low, stationary bearing holds the revolving terrazzo platter above the floor.
const bearing = new THREE.Mesh(makeAnnulusGeometry(2.38, 0.48, 0.25), baseMaterial);
bearing.position.y = 0.43;
bearing.castShadow = true;
bearing.receiveShadow = true;
scene.add(bearing);
const bearingLip = new THREE.Mesh(new THREE.TorusGeometry(2.27, 0.026, 10, 144), brassMaterial);
bearingLip.rotation.x = Math.PI / 2;
bearingLip.position.y = 0.69;
scene.add(bearingLip);

const feetMaterial = new THREE.MeshStandardMaterial({ color: 0xd7d2c6, roughness: 0.82, metalness: 0.01, map: terrazzo });
for (let i = 0; i < 4; i++) {
  const angle = Math.PI / 4 + i * Math.PI / 2;
  const foot = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 24), feetMaterial);
  foot.position.set(Math.cos(angle) * 1.72, 0.21, Math.sin(angle) * 1.72);
  foot.scale.set(1, 0.82, 1);
  foot.castShadow = true;
  foot.receiveShadow = true;
  scene.add(foot);
}

const turntable = new THREE.Group();
turntable.name = "Harmonic ring platter";
scene.add(turntable);
const platterDepth = 0.54;
const platterTop = 0.74 + platterDepth + 0.035;
const platter = new THREE.Mesh(makeAnnulusGeometry(2.46, 0.5, platterDepth, 0.035), stoneMaterial);
platter.position.y = 0.74;
platter.castShadow = true;
platter.receiveShadow = true;
turntable.add(platter);

function addHorizontalTrim(radius, tube, material, y) {
  const trim = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 10, 160), material);
  trim.rotation.x = Math.PI / 2;
  trim.position.y = y;
  turntable.add(trim);
  return trim;
}
addHorizontalTrim(2.42, 0.018, brassMaterial, platterTop - 0.015);
addHorizontalTrim(0.51, 0.023, brassMaterial, platterTop - 0.01);
addHorizontalTrim(2.31, 0.006, new THREE.MeshBasicMaterial({ color: 0xf0d49b, transparent: true, opacity: 0.7 }), platterTop - 0.02);

// The engraved channel is the exact closed path followed by the pendulum.
const pathRadiusX = 1.22;
const pathRadiusZ = 0.83;
const pathSegments = 360;
const grooveAcross = 6;
function trackPoint(u) {
  return { x: pathRadiusX * Math.cos(u), z: pathRadiusZ * Math.sin(u) };
}
function createGrooveGeometry() {
  const positions = [];
  const indices = [];
  for (let i = 0; i <= pathSegments; i++) {
    const u = i / pathSegments * Math.PI * 2;
    const point = trackPoint(u);
    const tangentX = -pathRadiusX * Math.sin(u);
    const tangentZ = pathRadiusZ * Math.cos(u);
    const tangentLength = Math.hypot(tangentX, tangentZ);
    const normalX = tangentZ / tangentLength;
    const normalZ = -tangentX / tangentLength;
    for (let j = 0; j < grooveAcross; j++) {
      const across = j / (grooveAcross - 1) * 2 - 1;
      const depth = 0.035 * (1 - Math.abs(across));
      positions.push(
        point.x + normalX * across * 0.105,
        platterTop - depth + 0.002,
        point.z + normalZ * across * 0.105,
      );
      if (i < pathSegments && j < grooveAcross - 1) {
        const a = i * grooveAcross + j;
        const b = a + grooveAcross;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}
const groove = new THREE.Mesh(
  createGrooveGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x343b38, metalness: 0.28, roughness: 0.37, side: THREE.DoubleSide }),
);
turntable.add(groove);

// A moving inlay makes the slow platter rotation easy to read at a glance.
const platterMarker = new THREE.Mesh(new THREE.SphereGeometry(0.048, 24, 18), brassMaterial);
platterMarker.position.set(2.25, platterTop + 0.022, 0);
platterMarker.castShadow = true;
turntable.add(platterMarker);
const markerFoot = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.04, 12), brassMaterial);
markerFoot.position.set(2.25, platterTop + 0.002, 0);
turntable.add(markerFoot);

// A soft highlight travels just behind the polished bob along the engraved loop.
const afterimageCount = 64;
const afterimageGeometry = new THREE.BufferGeometry();
const afterimagePositions = new Float32Array(afterimageCount * 3);
afterimageGeometry.setAttribute("position", new THREE.BufferAttribute(afterimagePositions, 3).setUsage(THREE.DynamicDrawUsage));
afterimageGeometry.setDrawRange(0, afterimageCount);
const afterimageMaterial = new THREE.LineBasicMaterial({ color: 0xf0e5b8, transparent: true, opacity: 0.48, depthWrite: false });
const afterimage = new THREE.Line(afterimageGeometry, afterimageMaterial);
afterimage.frustumCulled = false;
turntable.add(afterimage);

// The pendulum has a fixed string length and two sinusoidal horizontal components.
const pendulumPivot = new THREE.Vector3(0, 5.08, 0);
const pendulumLength = 3.48;
const swingPeriod = 4.6;
const ringRatio = 8;
const bob = new THREE.Group();
scene.add(bob);
const bobShell = new THREE.Mesh(
  new THREE.SphereGeometry(0.225, 64, 48),
  new THREE.MeshPhysicalMaterial({ color: 0x68716e, metalness: 0.96, roughness: 0.105, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 2.0 }),
);
bobShell.castShadow = true;
bobShell.receiveShadow = true;
bob.add(bobShell);
const bobBand = new THREE.Mesh(new THREE.TorusGeometry(0.226, 0.009, 8, 64), brassMaterial);
bobBand.rotation.x = Math.PI / 2;
bob.add(bobBand);
const bobCap = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 16), brassMaterial);
bobCap.position.y = 0.218;
bob.add(bobCap);
const bobLight = new THREE.PointLight(0xffd9a0, 1.15, 2.6, 2);
bob.add(bobLight);

const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.065, 32, 24), brassMaterial);
pivot.position.copy(pendulumPivot);
pivot.castShadow = true;
scene.add(pivot);
const pivotLoop = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.009, 8, 48), new THREE.MeshBasicMaterial({ color: 0xe8d4a7, transparent: true, opacity: 0.7 }));
pivotLoop.position.copy(pendulumPivot);
pivotLoop.rotation.x = Math.PI / 2;
scene.add(pivotLoop);
const filament = new THREE.Mesh(
  new THREE.CylinderGeometry(0.006, 0.009, 1, 10),
  new THREE.MeshStandardMaterial({ color: 0xd8d1bd, metalness: 0.68, roughness: 0.28 }),
);
filament.castShadow = true;
scene.add(filament);

const up = new THREE.Vector3(0, 1, 0);
const ringAxis = new THREE.Vector3(0, 1, 0);
let elapsed = 0;
let running = true;

function updatePendulum(phase) {
  const ringPhase = phase / ringRatio;
  const pathPhase = phase - ringPhase;
  const local = trackPoint(pathPhase);
  const horizontal = new THREE.Vector3(local.x, 0, local.z).applyAxisAngle(ringAxis, ringPhase);
  const horizontalRadiusSq = local.x * local.x + local.z * local.z;
  const verticalDrop = Math.sqrt(Math.max(0.1, pendulumLength * pendulumLength - horizontalRadiusSq));
  const position = new THREE.Vector3(horizontal.x, pendulumPivot.y - verticalDrop, horizontal.z);

  bob.position.copy(position);
  bob.rotation.set(0.18 * Math.sin(phase), 0.12 * Math.cos(phase), Math.atan2(horizontal.x, horizontal.z) * 0.06);
  const rodVector = position.clone().sub(pendulumPivot);
  filament.position.copy(pendulumPivot).add(position).multiplyScalar(0.5);
  filament.quaternion.setFromUnitVectors(up, rodVector.clone().normalize());
  filament.scale.set(1, rodVector.length(), 1);

  turntable.rotation.y = ringPhase;
  for (let i = 0; i < afterimageCount; i++) {
    const u = pathPhase - (afterimageCount - 1 - i) * 0.009;
    const point = trackPoint(u);
    afterimagePositions[i * 3] = point.x;
    afterimagePositions[i * 3 + 1] = platterTop + 0.008;
    afterimagePositions[i * 3 + 2] = point.z;
  }
  afterimageGeometry.attributes.position.needsUpdate = true;
}

const toggle = document.querySelector("#motionToggle");
toggle.addEventListener("click", () => {
  running = !running;
  document.body.classList.toggle("is-paused", !running);
  toggle.setAttribute("aria-label", running ? "Pause animation" : "Resume animation");
  document.querySelector("#toggleLabel").textContent = running ? "PAUSE" : "RESUME";
});

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
  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;
  lastX = event.clientX;
  lastY = event.clientY;
  cameraAzimuth -= dx * 0.005;
  cameraPolar = THREE.MathUtils.clamp(cameraPolar + dy * 0.004, 0.7, 1.42);
  placeCamera();
});
canvas.addEventListener("pointerup", () => { dragging = false; });
canvas.addEventListener("pointercancel", () => { dragging = false; });
canvas.addEventListener("wheel", (event) => {
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.006, 7.3, 16);
  placeCamera();
}, { passive: true });

function resize() {
  const mobile = window.innerWidth < 760;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.fov = mobile ? 37 : 34;
  cameraTarget.set(mobile ? 0 : -0.5, mobile ? 2.4 : 2.55, 0);
  if (mobile && cameraRadius < 12) cameraRadius = 12.5;
  if (!mobile && cameraRadius > 12.5) cameraRadius = 10.6;
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
