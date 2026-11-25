import * as THREE from "three";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x080c10, 0.026);
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
const target = new THREE.Vector3(0, 1.55, 0);
let cameraRadius = 13.2;
let cameraAzimuth = 0.66;
let cameraPolar = 1.14;

function placeCamera() {
  const spherical = new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth);
  camera.position.setFromSpherical(spherical).add(target);
  camera.lookAt(target);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xa3c8ca, 0x152124, 1.45));
const keyLight = new THREE.DirectionalLight(0xffe3b1, 4.2);
keyLight.position.set(-3.2, 8.5, 5.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.left = -6;
keyLight.shadow.camera.right = 6;
keyLight.shadow.camera.top = 7;
keyLight.shadow.camera.bottom = -5;
scene.add(keyLight);
const tealLight = new THREE.PointLight(0x58eac3, 32, 9, 2);
tealLight.position.set(3.6, 2.4, 2.2);
scene.add(tealLight);
const warmLight = new THREE.PointLight(0xffb563, 22, 8, 2);
warmLight.position.set(-3, 2.6, -2.5);
scene.add(warmLight);

const materials = {
  frame: new THREE.MeshStandardMaterial({ color: 0x526267, metalness: 0.84, roughness: 0.28 }),
  frameDark: new THREE.MeshStandardMaterial({ color: 0x17262a, metalness: 0.9, roughness: 0.31 }),
  brass: new THREE.MeshStandardMaterial({ color: 0xb99b64, metalness: 0.82, roughness: 0.2 }),
  weight: new THREE.MeshPhysicalMaterial({ color: 0xa9c4b4, metalness: 0.72, roughness: 0.19, clearcoat: 0.85, clearcoatRoughness: 0.16 }),
  mint: new THREE.MeshBasicMaterial({ color: 0x8ce6c5 }),
  glow: new THREE.MeshBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false }),
  floor: new THREE.MeshStandardMaterial({ color: 0x10191d, metalness: 0.62, roughness: 0.4, transparent: true, opacity: 0.94 }),
};

const stage = new THREE.Group();
scene.add(stage);
const pivotY = 3.72;
const pivot = new THREE.Vector3(0, pivotY, 0);

function addMesh(geometry, material, parent, position, castShadow = false, receiveShadow = false) {
  const mesh = new THREE.Mesh(geometry, material);
  if (position) mesh.position.set(...position);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = receiveShadow;
  parent.add(mesh);
  return mesh;
}

// A suspended, open instrument frame gives the pivot a physical home in the scene.
const support = new THREE.Group();
stage.add(support);
addMesh(new THREE.CylinderGeometry(0.025, 0.034, 1.18, 16), materials.frame, support, [0, 4.14, 0], true);
const upperRing = addMesh(new THREE.TorusGeometry(0.49, 0.018, 8, 80), materials.brass, support, [0, 4.69, 0]);
upperRing.rotation.x = Math.PI / 2;
const topCap = addMesh(new THREE.CylinderGeometry(0.09, 0.105, 0.11, 32), materials.frameDark, support, [0, 3.77, 0], true);
const pivotPin = addMesh(new THREE.SphereGeometry(0.085, 24, 16), materials.brass, support, [0, pivotY, 0], true);
addMesh(new THREE.TorusGeometry(0.12, 0.012, 8, 36), materials.mint, support, [0, pivotY, 0]).rotation.x = Math.PI / 2;

// The floor dial is deliberately sparse: its rings make the weight's path legible.
const dial = new THREE.Group();
stage.add(dial);
const base = addMesh(new THREE.CylinderGeometry(3.25, 3.35, 0.13, 96), materials.floor, dial, [0, 0.0, 0], false, true);
base.receiveShadow = true;
const dialTop = addMesh(new THREE.CircleGeometry(3.25, 96), new THREE.MeshStandardMaterial({ color: 0x0d161a, metalness: 0.42, roughness: 0.53 }), dial, [0, 0.071, 0]);
dialTop.rotation.x = -Math.PI / 2;
const ringMaterial = new THREE.LineBasicMaterial({ color: 0x63827c, transparent: true, opacity: 0.25 });
const ringBright = new THREE.LineBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.38 });
function addFloorRing(radius, material) {
  const points = [];
  for (let i = 0; i <= 160; i++) {
    const a = i / 160 * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(a) * radius, 0.078, Math.sin(a) * radius));
  }
  dial.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material));
}
addFloorRing(0.57, ringBright);
addFloorRing(1.14, ringMaterial);
addFloorRing(1.82, ringMaterial);
addFloorRing(2.56, ringMaterial);
addFloorRing(3.06, ringMaterial);
const radialPoints = [];
for (let i = 0; i < 48; i++) {
  const a = i / 48 * Math.PI * 2;
  const inner = i % 4 === 0 ? 2.92 : 3.00;
  radialPoints.push(new THREE.Vector3(Math.cos(a) * inner, 0.08, Math.sin(a) * inner));
  radialPoints.push(new THREE.Vector3(Math.cos(a) * 3.16, 0.08, Math.sin(a) * 3.16));
}
const ticks = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(radialPoints), new THREE.LineBasicMaterial({ color: 0xb9cbaa, transparent: true, opacity: 0.4 }));
dial.add(ticks);

const halo = addMesh(new THREE.TorusGeometry(0.52, 0.009, 6, 96), new THREE.MeshBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.3 }), stage, [0, 2.83, 0]);
halo.rotation.x = Math.PI / 2;
const halo2 = addMesh(new THREE.TorusGeometry(0.68, 0.006, 6, 96), new THREE.MeshBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.15 }), stage, [0, 2.83, 0]);
halo2.rotation.x = Math.PI / 2;

const cable = addMesh(new THREE.CylinderGeometry(0.016, 0.021, 1, 10), materials.brass, stage, [0, 0, 0], true);
const cableTip = addMesh(new THREE.SphereGeometry(0.052, 16, 12), materials.frame, stage, [0, 0, 0], true);
const bob = new THREE.Group();
stage.add(bob);
const outerBody = addMesh(new THREE.SphereGeometry(0.37, 64, 48), materials.weight, bob, [0, 0, 0], true, true);
const core = addMesh(new THREE.SphereGeometry(0.25, 40, 32), new THREE.MeshStandardMaterial({ color: 0x56796d, metalness: 0.8, roughness: 0.19, emissive: 0x112b26, emissiveIntensity: 0.35 }), bob, [0, 0, 0], true);
const innerGlow = addMesh(new THREE.SphereGeometry(0.43, 32, 24), materials.glow, bob, [0, 0, 0]);
const equator = addMesh(new THREE.TorusGeometry(0.379, 0.014, 8, 80), materials.brass, bob, [0, 0, 0]);
equator.rotation.x = Math.PI / 2;
const latitude = addMesh(new THREE.TorusGeometry(0.31, 0.009, 8, 80), new THREE.MeshStandardMaterial({ color: 0x9be9ca, metalness: 0.4, roughness: 0.26, emissive: 0x163f35, emissiveIntensity: 0.3 }), bob, [0, 0, 0]);
latitude.rotation.x = Math.PI / 3;
latitude.rotation.y = Math.PI / 4;
const bobFoot = addMesh(new THREE.CylinderGeometry(0.23, 0.29, 0.1, 40), materials.brass, bob, [0, -0.31, 0], true);
const bobCap = addMesh(new THREE.SphereGeometry(0.085, 24, 18), materials.brass, bob, [0, 0.33, 0], true);
const bobLight = new THREE.PointLight(0x6ef2c0, 2.1, 2.7, 2);
bob.add(bobLight);

// A capped dynamic line remembers the last few seconds of motion without growing forever.
const trailCapacity = 430;
const trailGeometry = new THREE.BufferGeometry();
const trailPositions = new Float32Array(trailCapacity * 3);
trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3).setUsage(THREE.DynamicDrawUsage));
trailGeometry.setDrawRange(0, 0);
const trailMaterial = new THREE.LineBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.67, depthWrite: false });
const trail = new THREE.Line(trailGeometry, trailMaterial);
trail.frustumCulled = false;
stage.add(trail);
const trailPoints = [];

// Fine dust catches the lighting and makes the dark volume feel deep.
let seed = 4218;
function random() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
const dustPositions = [];
for (let i = 0; i < 360; i++) {
  const radius = 2.5 + random() * 7;
  const angle = random() * Math.PI * 2;
  dustPositions.push(Math.cos(angle) * radius, 0.3 + random() * 7.2, Math.sin(angle) * radius);
}
const dustGeometry = new THREE.BufferGeometry();
dustGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dustPositions, 3));
const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xb7d5c5, size: 0.018, transparent: true, opacity: 0.45, sizeAttenuation: true }));
scene.add(dust);

const params = { length: 2.8, gravity: 9.8, damping: 0.002, amplitude: 28 };
const motion = { theta: 28 * Math.PI / 180, phi: 0, thetaVelocity: 0, phiVelocity: 0 };
let preset = "plane";
let running = true;
let accumulator = 0;
let elapsed = 0;
let readoutClock = 0;
const fixedStep = 1 / 120;
const bobWorld = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);
const direction = new THREE.Vector3();

const descriptions = {
  plane: "A clean arc through a single plane.",
  drift: "A slow precession loosens the line.",
  orbit: "A steady cone, circling without end.",
};

function launchPreset(name, clear = true) {
  preset = name;
  motion.theta = params.amplitude * Math.PI / 180;
  motion.phi = 0;
  motion.thetaVelocity = 0;
  if (name === "plane") motion.phiVelocity = 0;
  if (name === "drift") motion.phiVelocity = 0.31;
  if (name === "orbit") {
    motion.theta = Math.min(0.44, params.amplitude * 0.72 * Math.PI / 180);
    motion.phiVelocity = Math.sqrt(params.gravity / (params.length * Math.max(0.1, Math.cos(motion.theta))));
  }
  document.querySelectorAll(".preset").forEach((button) => {
    const selected = button.dataset.preset === name;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector("#presetDescription").textContent = descriptions[name];
  if (clear) trailPoints.length = 0;
  updateGeometry();
  updateReadouts(true);
}

function derivative(state) {
  const sine = Math.sin(state.theta);
  const cosine = Math.cos(state.theta);
  const safeSine = Math.max(Math.abs(sine), 0.035);
  return {
    theta: state.thetaVelocity,
    phi: state.phiVelocity,
    thetaVelocity: sine * cosine * state.phiVelocity * state.phiVelocity - params.gravity / params.length * sine - params.damping * state.thetaVelocity,
    phiVelocity: -2 * cosine / safeSine * state.thetaVelocity * state.phiVelocity - params.damping * state.phiVelocity,
  };
}

function addState(state, derivativeState, scale) {
  return {
    theta: state.theta + derivativeState.theta * scale,
    phi: state.phi + derivativeState.phi * scale,
    thetaVelocity: state.thetaVelocity + derivativeState.thetaVelocity * scale,
    phiVelocity: state.phiVelocity + derivativeState.phiVelocity * scale,
  };
}

function integrate(dt) {
  const s = { ...motion };
  const k1 = derivative(s);
  const k2 = derivative(addState(s, k1, dt / 2));
  const k3 = derivative(addState(s, k2, dt / 2));
  const k4 = derivative(addState(s, k3, dt));
  motion.theta += dt / 6 * (k1.theta + 2 * k2.theta + 2 * k3.theta + k4.theta);
  motion.phi += dt / 6 * (k1.phi + 2 * k2.phi + 2 * k3.phi + k4.phi);
  motion.thetaVelocity += dt / 6 * (k1.thetaVelocity + 2 * k2.thetaVelocity + 2 * k3.thetaVelocity + k4.thetaVelocity);
  motion.phiVelocity += dt / 6 * (k1.phiVelocity + 2 * k2.phiVelocity + 2 * k3.phiVelocity + k4.phiVelocity);
  if (motion.theta < 0.025) {
    motion.theta = 0.025;
    if (motion.thetaVelocity < 0) {
      // Crossing the vertical axis continues the swing in the opposite azimuth.
      motion.phi += Math.PI;
      motion.thetaVelocity = -motion.thetaVelocity;
    }
  } else if (motion.theta > 1.28) {
    motion.theta = 1.28;
    motion.thetaVelocity = Math.min(0, motion.thetaVelocity);
  }
}

function updateGeometry() {
  bobWorld.set(
    params.length * Math.sin(motion.theta) * Math.sin(motion.phi),
    pivotY - params.length * Math.cos(motion.theta),
    params.length * Math.sin(motion.theta) * Math.cos(motion.phi),
  );
  bob.position.copy(bobWorld);
  direction.copy(bobWorld).sub(pivot);
  cable.position.copy(pivot).add(bobWorld).multiplyScalar(0.5);
  cable.quaternion.setFromUnitVectors(up, direction.clone().normalize());
  cable.scale.set(1, direction.length(), 1);
  cableTip.position.copy(bobWorld).lerp(pivot, 0.055);
  bob.rotation.set(motion.phi * 0.2, motion.phi * 0.16, Math.sin(motion.theta) * 0.11);
  bob.scale.setScalar(1 + Math.sin(elapsed * 2.1) * 0.012);
}

function writeTrail() {
  trailPoints.push(bobWorld.clone().add(new THREE.Vector3(0, 0.02, 0)));
  if (trailPoints.length > trailCapacity) trailPoints.shift();
  for (let i = 0; i < trailPoints.length; i++) {
    const point = trailPoints[i];
    trailPositions[i * 3] = point.x;
    trailPositions[i * 3 + 1] = point.y;
    trailPositions[i * 3 + 2] = point.z;
  }
  trailGeometry.attributes.position.needsUpdate = true;
  trailGeometry.setDrawRange(0, trailPoints.length);
  trailGeometry.computeBoundingSphere();
}

function updateReadouts(force = false) {
  if (!force && readoutClock < 0.08) return;
  readoutClock = 0;
  const thetaDegrees = Math.abs(motion.theta * 180 / Math.PI);
  const tangentialSpeed = params.length * Math.sqrt(motion.thetaVelocity ** 2 + Math.sin(motion.theta) ** 2 * motion.phiVelocity ** 2);
  const period = 2 * Math.PI * Math.sqrt(params.length / params.gravity);
  document.querySelector("#angleRead").textContent = `${thetaDegrees.toFixed(1)}°`;
  document.querySelector("#speedRead").innerHTML = `${tangentialSpeed.toFixed(2)} <i>m/s</i>`;
  document.querySelector("#periodRead").innerHTML = `${period.toFixed(2)} <i>s</i>`;
}

function setRunning(value) {
  running = value;
  document.body.classList.toggle("is-paused", !running);
  document.querySelector("#playButton").setAttribute("aria-label", running ? "Pause animation" : "Resume animation");
  document.querySelector("#playLabel").textContent = running ? "PAUSE MOTION" : "RESUME MOTION";
  document.querySelector("#runState").textContent = running ? "IN MOTION" : "PAUSED";
  document.querySelector("#liveLabel").textContent = running ? "LIVE SIMULATION" : "SIMULATION PAUSED";
}

function setRangeFill(input) {
  const min = Number(input.min), max = Number(input.max), value = Number(input.value);
  input.style.setProperty("--fill", `${(value - min) / (max - min) * 100}%`);
}

function bindRange(selector, outputSelector, setter, formatter) {
  const input = document.querySelector(selector);
  const output = document.querySelector(outputSelector);
  const update = () => {
    const value = Number(input.value);
    setter(value);
    output.innerHTML = formatter(value);
    setRangeFill(input);
    updateReadouts(true);
  };
  input.addEventListener("input", update);
  update();
}

bindRange("#amplitude", "#amplitudeOut", (value) => {
  params.amplitude = value;
  launchPreset(preset);
}, (value) => `${value.toFixed(0)}°`);
bindRange("#gravity", "#gravityOut", (value) => { params.gravity = value; }, (value) => `${value.toFixed(1)} <i>m/s²</i>`);
bindRange("#length", "#lengthOut", (value) => { params.length = value; }, (value) => `${value.toFixed(2)} <i>m</i>`);
bindRange("#damping", "#dampingOut", (value) => { params.damping = value; }, (value) => value.toFixed(3));

document.querySelectorAll(".preset").forEach((button) => button.addEventListener("click", () => launchPreset(button.dataset.preset)));
document.querySelector("#playButton").addEventListener("click", () => setRunning(!running));
document.querySelector("#resetButton").addEventListener("click", () => launchPreset(preset));

let dragging = false;
let lastPointerX = 0;
let lastPointerY = 0;
canvas.addEventListener("pointerdown", (event) => {
  dragging = true;
  lastPointerX = event.clientX;
  lastPointerY = event.clientY;
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const dx = event.clientX - lastPointerX;
  const dy = event.clientY - lastPointerY;
  lastPointerX = event.clientX;
  lastPointerY = event.clientY;
  cameraAzimuth -= dx * 0.006;
  cameraPolar = THREE.MathUtils.clamp(cameraPolar + dy * 0.005, 0.48, 1.48);
  placeCamera();
});
canvas.addEventListener("pointerup", () => { dragging = false; });
canvas.addEventListener("pointercancel", () => { dragging = false; });
canvas.addEventListener("wheel", (event) => {
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.008, 8, 19);
  placeCamera();
}, { passive: true });

function resize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);

const clock = new THREE.Clock();
let frameCount = 0;
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.04);
  if (running) {
    accumulator += delta;
    let steps = 0;
    while (accumulator >= fixedStep && steps < 8) {
      integrate(fixedStep);
      accumulator -= fixedStep;
      steps++;
    }
    elapsed += delta;
    readoutClock += delta;
    updateGeometry();
    if (frameCount % 2 === 0) writeTrail();
    updateReadouts();
  }
  halo.rotation.z += delta * 0.055;
  halo2.rotation.z -= delta * 0.035;
  dust.rotation.y += delta * 0.003;
  renderer.render(scene, camera);
  frameCount++;
}

launchPreset("plane");
updateGeometry();
setRunning(true);
animate();
