import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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
const target = new THREE.Vector3(0, 1.45, 0);
let cameraRadius = 9.8;
let cameraAzimuth = 0.18;
let cameraPolar = 1.25;

function placeCamera() {
  camera.position.setFromSpherical(new THREE.Spherical(cameraRadius, cameraPolar, cameraAzimuth)).add(target);
  camera.lookAt(target);
}
placeCamera();

scene.add(new THREE.HemisphereLight(0xa3c8ca, 0x152124, 1.65));
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

const dial = new THREE.Group();
scene.add(dial);
const base = new THREE.Mesh(
  new THREE.CylinderGeometry(3.25, 3.35, 0.13, 96),
  new THREE.MeshStandardMaterial({ color: 0x10191d, metalness: 0.62, roughness: 0.4, transparent: true, opacity: 0.94 }),
);
base.position.y = 0;
base.receiveShadow = true;
dial.add(base);
const dialTop = new THREE.Mesh(new THREE.CircleGeometry(3.25, 96), new THREE.MeshStandardMaterial({ color: 0x0d161a, metalness: 0.42, roughness: 0.53 }));
dialTop.position.y = 0.071;
dialTop.rotation.x = -Math.PI / 2;
dialTop.receiveShadow = true;
dial.add(dialTop);

const ringMaterial = new THREE.LineBasicMaterial({ color: 0x63827c, transparent: true, opacity: 0.25 });
const ringBright = new THREE.LineBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.38 });
function addFloorRing(radius, material) {
  const points = [];
  for (let i = 0; i <= 160; i++) {
    const angle = i / 160 * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0.078, Math.sin(angle) * radius));
  }
  dial.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material));
}
addFloorRing(0.57, ringBright);
addFloorRing(1.14, ringMaterial);
addFloorRing(1.82, ringMaterial);
addFloorRing(2.56, ringMaterial);
addFloorRing(3.06, ringMaterial);
const tickPoints = [];
for (let i = 0; i < 48; i++) {
  const angle = i / 48 * Math.PI * 2;
  const inner = i % 4 === 0 ? 2.92 : 3.00;
  tickPoints.push(new THREE.Vector3(Math.cos(angle) * inner, 0.08, Math.sin(angle) * inner));
  tickPoints.push(new THREE.Vector3(Math.cos(angle) * 3.16, 0.08, Math.sin(angle) * 3.16));
}
dial.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(tickPoints), new THREE.LineBasicMaterial({ color: 0xb9cbaa, transparent: true, opacity: 0.4 })));

const trailCapacity = 430;
const trailGeometry = new THREE.BufferGeometry();
const trailPositions = new Float32Array(trailCapacity * 3);
trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3).setUsage(THREE.DynamicDrawUsage));
trailGeometry.setDrawRange(0, 0);
const trailMaterial = new THREE.LineBasicMaterial({ color: 0x8ce6c5, transparent: true, opacity: 0.68, depthWrite: false });
const trail = new THREE.Line(trailGeometry, trailMaterial);
trail.frustumCulled = false;
scene.add(trail);
const trailPoints = [];

let seed = 4218;
function random() {
  seed = seed * 16807 % 2147483647;
  return (seed - 1) / 2147483646;
}
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

const modelStatus = document.querySelector("#liveLabel");
const phaseInput = document.querySelector("#phaseControl");
let mechanismRoot = null;
let mechanism = null;
let motionTarget = null;
let mixer = null;
let animationClip = null;
let running = true;
let playbackRate = 1;
let selectedPreset = "natural";
let scaleFactor = 11;
let trailOpacity = 0.68;
let readoutClock = 0;
let frameCount = 0;
const trailPoint = new THREE.Vector3();

const profiles = {
  slow: { speed: 0.55, description: "A slower look at the mechanism's changing rhythm." },
  natural: { speed: 1, description: "The mechanism follows its original rhythm." },
  fast: { speed: 1.45, description: "A quicker cycle brings the linkages into focus." },
};

function setRangeFill(input) {
  const min = Number(input.min), max = Number(input.max), value = Number(input.value);
  input.style.setProperty("--fill", `${(value - min) / (max - min) * 100}%`);
}

function selectProfile(name) {
  selectedPreset = name;
  playbackRate = profiles[name].speed;
  document.querySelector("#speedControl").value = String(playbackRate);
  document.querySelector("#speedOut").textContent = `${playbackRate.toFixed(2)}×`;
  setRangeFill(document.querySelector("#speedControl"));
  document.querySelector("#presetDescription").textContent = profiles[name].description;
  document.querySelectorAll(".preset").forEach((button) => {
    const active = button.dataset.preset === name;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateReadouts(force = false) {
  if (!force && readoutClock < 0.08) return;
  readoutClock = 0;
  const duration = animationClip?.duration ?? 49.97;
  const time = mixer ? ((mixer.time % duration) + duration) % duration : 0;
  document.querySelector("#angleRead").innerHTML = `${time.toFixed(1).padStart(4, "0")} <i>s</i>`;
  document.querySelector("#speedRead").textContent = `${playbackRate.toFixed(2)}×`;
  document.querySelector("#periodRead").innerHTML = `${duration.toFixed(1)} <i>s</i>`;
  if (document.activeElement !== phaseInput && !phaseInput.matches(":active")) phaseInput.value = time.toFixed(1);
  document.querySelector("#phaseOut").innerHTML = `${time.toFixed(1).padStart(4, "0")} <i>s</i>`;
  setRangeFill(phaseInput);
}

function clearTrail() {
  trailPoints.length = 0;
  trailGeometry.setDrawRange(0, 0);
  trailGeometry.attributes.position.needsUpdate = true;
}

function updateTrail() {
  if (!motionTarget || trailOpacity <= 0.005) {
    trailGeometry.setDrawRange(0, 0);
    return;
  }
  motionTarget.getWorldPosition(trailPoint);
  trailPoint.y += 0.014;
  trailPoints.push(trailPoint.clone());
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

function setRunning(value) {
  running = value;
  document.body.classList.toggle("is-paused", !running);
  document.querySelector("#playButton").setAttribute("aria-label", running ? "Pause animation" : "Resume animation");
  document.querySelector("#playLabel").textContent = running ? "PAUSE MOTION" : "RESUME MOTION";
  document.querySelector("#runState").textContent = running ? "IN MOTION" : "PAUSED";
  if (mechanism) modelStatus.textContent = running ? "LIVE MECHANISM" : "MECHANISM PAUSED";
}

function resetMotion() {
  if (mixer) mixer.setTime(0);
  phaseInput.value = "0";
  clearTrail();
  updateReadouts(true);
}

function loadMechanism(gltf) {
  mechanism = gltf.scene;
  mechanism.name = "Triple Pendulum Mechanism";
  mechanism.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  const bounds = new THREE.Box3().setFromObject(mechanism);
  const center = bounds.getCenter(new THREE.Vector3());
  mechanism.position.sub(center);
  mechanismRoot = new THREE.Group();
  mechanismRoot.name = "Mechanism display rig";
  mechanismRoot.scale.setScalar(scaleFactor);
  mechanismRoot.position.set(0, 1.62, 0);
  mechanismRoot.add(mechanism);
  scene.add(mechanismRoot);

  motionTarget = mechanism.getObjectByName("Triple_Pendulum_(sphere)_2")
    ?? mechanism.getObjectByName("Triple_Pendulum_(sphere)")
    ?? mechanism;
  mixer = new THREE.AnimationMixer(mechanism);
  animationClip = gltf.animations[0] ?? null;
  if (animationClip) {
    const action = mixer.clipAction(animationClip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.play();
    phaseInput.max = Math.max(0.1, animationClip.duration - 0.1).toFixed(1);
    mixer.setTime(0);
  }
  modelStatus.textContent = running ? "LIVE MECHANISM" : "MECHANISM PAUSED";
  document.querySelector("#presetDescription").textContent = profiles[selectedPreset].description;
  updateReadouts(true);
}

const loader = new GLTFLoader();
loader.load(
  "./assets/triple-pendulum/scene.gltf",
  loadMechanism,
  (event) => {
    if (event.total > 0) modelStatus.textContent = `LOADING ${Math.round(event.loaded / event.total * 100)}%`;
  },
  (error) => {
    console.error("Unable to load the pendulum mechanism.", error);
    modelStatus.textContent = "MODEL LOAD ERROR";
    document.querySelector("#presetDescription").textContent = "Serve this folder over HTTP to load the model files.";
  },
);

document.querySelectorAll(".preset").forEach((button) => button.addEventListener("click", () => selectProfile(button.dataset.preset)));
document.querySelector("#playButton").addEventListener("click", () => setRunning(!running));
document.querySelector("#resetButton").addEventListener("click", resetMotion);

const speedInput = document.querySelector("#speedControl");
speedInput.addEventListener("input", () => {
  playbackRate = Number(speedInput.value);
  document.querySelector("#speedOut").textContent = `${playbackRate.toFixed(2)}×`;
  setRangeFill(speedInput);
  const matching = Object.entries(profiles).find(([, profile]) => Math.abs(profile.speed - playbackRate) < 0.025);
  if (matching) selectProfile(matching[0]);
  else {
    selectedPreset = "custom";
    document.querySelectorAll(".preset").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    });
    document.querySelector("#presetDescription").textContent = "A custom pace for the recorded mechanism.";
  }
  updateReadouts(true);
});

phaseInput.addEventListener("input", () => {
  if (mixer) mixer.setTime(Number(phaseInput.value));
  document.querySelector("#phaseOut").innerHTML = `${Number(phaseInput.value).toFixed(1).padStart(4, "0")} <i>s</i>`;
  clearTrail();
  updateReadouts(true);
});

const scaleInput = document.querySelector("#scaleControl");
scaleInput.addEventListener("input", () => {
  scaleFactor = Number(scaleInput.value);
  if (mechanismRoot) mechanismRoot.scale.setScalar(scaleFactor);
  document.querySelector("#scaleOut").textContent = `${scaleFactor.toFixed(1)}×`;
  setRangeFill(scaleInput);
});

const trailInput = document.querySelector("#trailControl");
trailInput.addEventListener("input", () => {
  trailOpacity = Number(trailInput.value) / 100;
  trailMaterial.opacity = trailOpacity;
  document.querySelector("#trailOut").textContent = `${Math.round(trailOpacity * 100)}%`;
  setRangeFill(trailInput);
  if (trailOpacity <= 0.005) clearTrail();
});

for (const input of [speedInput, phaseInput, scaleInput, trailInput]) setRangeFill(input);

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
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.008, 6.5, 16);
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
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.04);
  if (running && mixer) {
    mixer.update(delta * playbackRate);
    readoutClock += delta;
    if (frameCount % 2 === 0) updateTrail();
    updateReadouts();
  }
  dust.rotation.y += delta * 0.003;
  renderer.render(scene, camera);
  frameCount++;
}

selectProfile("natural");
updateReadouts(true);
animate();
