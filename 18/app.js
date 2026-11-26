import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.querySelector("#scene");
const nextButton = document.querySelector("#next-scene");
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
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const darkBackground = new THREE.Color(0x020609);
const lightBackground = new THREE.Color(0xafa6a8);
scene.background = darkBackground.clone();
scene.fog = new THREE.Fog(darkBackground.clone(), 28, 74);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 140);
const cameraTarget = new THREE.Vector3(0, 0.72, 0);
let cameraRadius = 18;
let cameraAzimuth = 0.42;
let cameraPolar = 1.34;
let fitWidth = 7.2;
let fitHeight = 8.2;

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
  color: 0x10161b,
  metalness: 0.12,
  roughness: 0.7,
});
const floor = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -3.29;
floor.receiveShadow = true;
scene.add(floor);

const tripleFrame = new THREE.Group();
tripleFrame.name = "triple-pendulum-scene";
scene.add(tripleFrame);
let tripleMixer = null;
let tripleLoaded = false;

function recolorMechanism(root) {
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
      ? 0x151b20
      : isOuterFrame
        ? 0xb8c3c7
        : isJoint
          ? 0xd0a04c
          : 0xb88b45;

    const sourceMaterials = Array.isArray(object.material) ? object.material : [object.material];
    const materials = sourceMaterials.map((source) => {
      const material = source.clone();
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

    object.material = Array.isArray(object.material) ? materials : materials[0];
    object.castShadow = true;
    object.receiveShadow = true;
  });
}

function fitTripleModel(root) {
  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const scale = 8 / Math.max(size.y, 0.001);

  fitHeight = 8.8;
  fitWidth = Math.max(size.x * scale + 1.1, 7.2);
  tripleFrame.scale.setScalar(scale);
  tripleFrame.position.set(
    -center.x * scale,
    -bounds.min.y * scale - 3.25,
    -center.z * scale,
  );
  tripleFrame.add(root);
  resize();
}

function loadTriplePendulum() {
  const loader = new GLTFLoader();
  loader.load(
    "./assets/triple-pendulum/scene.gltf",
    (gltf) => {
      const root = gltf.scene;
      root.name = "triple-pendulum-model";
      recolorMechanism(root);
      fitTripleModel(root);

      if (gltf.animations && gltf.animations.length) {
        tripleMixer = new THREE.AnimationMixer(root);
        const action = tripleMixer.clipAction(gltf.animations[0]);
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.timeScale = 0.72;
        action.play();
      }
      tripleLoaded = true;
    },
    undefined,
    (error) => {
      console.error("Could not load the triple-pendulum model.", error);
    },
  );
}
loadTriplePendulum();

const armillaryGroup = new THREE.Group();
armillaryGroup.name = "orbital-armillary-scene";
armillaryGroup.visible = false;
scene.add(armillaryGroup);

const brassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xb9873c,
  metalness: 0.9,
  roughness: 0.2,
  clearcoat: 0.8,
  clearcoatRoughness: 0.16,
});
const paleMetalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xc4c6c5,
  metalness: 0.94,
  roughness: 0.18,
  clearcoat: 0.72,
  clearcoatRoughness: 0.15,
});
const darkMetalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x171b20,
  metalness: 0.84,
  roughness: 0.23,
  clearcoat: 0.65,
  clearcoatRoughness: 0.18,
});
const centralOrbMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xc2b6a2,
  metalness: 0.92,
  roughness: 0.14,
  clearcoat: 1,
  clearcoatRoughness: 0.08,
});

function addCylinderBetween(parent, start, end, radius, material, radialSegments = 24) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, length, radialSegments, 1, false),
    material,
  );
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addHorizontalRing(parent, radius, tube, material, y) {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 10, 160), material);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y;
  ring.castShadow = true;
  ring.receiveShadow = true;
  parent.add(ring);
  return ring;
}

function makeSupportArch(depth, scale = 1, material = paleMetalMaterial, radius = 0.035) {
  const points = [];
  const baseY = -2.61;
  for (let index = 0; index <= 96; index++) {
    const t = index / 96;
    const angle = Math.PI - Math.PI * t;
    const sine = Math.sin(angle);
    const cosine = Math.cos(angle);
    const x = scale * (1.56 * cosine + 1.3 * sine * cosine);
    const y = baseY + 6.78 * sine;
    points.push(new THREE.Vector3(x, y, depth));
  }

  const curve = new THREE.CatmullRomCurve3(points, false, "centripetal");
  const arch = new THREE.Mesh(new THREE.TubeGeometry(curve, 320, radius, 12, false), material);
  arch.castShadow = true;
  arch.receiveShadow = true;
  armillaryGroup.add(arch);
  return arch;
}

const baseBody = new THREE.Mesh(
  new THREE.CylinderGeometry(1.86, 2.02, 0.58, 112, 1, false),
  darkMetalMaterial,
);
baseBody.position.y = -2.96;
baseBody.castShadow = true;
baseBody.receiveShadow = true;
armillaryGroup.add(baseBody);

const baseLip = new THREE.Mesh(
  new THREE.CylinderGeometry(1.94, 1.98, 0.11, 112, 1, false),
  darkMetalMaterial,
);
baseLip.position.y = -2.66;
baseLip.castShadow = true;
baseLip.receiveShadow = true;
armillaryGroup.add(baseLip);

const topPlate = new THREE.Mesh(
  new THREE.CylinderGeometry(1.78, 1.84, 0.1, 112, 1, false),
  darkMetalMaterial,
);
topPlate.position.y = -2.58;
topPlate.castShadow = true;
topPlate.receiveShadow = true;
armillaryGroup.add(topPlate);

addHorizontalRing(armillaryGroup, 1.9, 0.022, brassMaterial, -2.7);
addHorizontalRing(armillaryGroup, 1.72, 0.012, paleMetalMaterial, -2.52);
addHorizontalRing(armillaryGroup, 1.34, 0.012, brassMaterial, -2.515);
addHorizontalRing(armillaryGroup, 0.92, 0.009, brassMaterial, -2.51);

const tickGeometry = new THREE.BoxGeometry(0.055, 0.014, 0.022);
for (let index = 0; index < 72; index++) {
  const angle = (index / 72) * Math.PI * 2;
  const tick = new THREE.Mesh(tickGeometry, brassMaterial);
  tick.position.set(1.51 * Math.cos(angle), -2.506, 1.51 * Math.sin(angle));
  tick.rotation.y = -angle;
  armillaryGroup.add(tick);
}

makeSupportArch(-0.58, 1, paleMetalMaterial, 0.034);
makeSupportArch(0.58, 1, paleMetalMaterial, 0.034);
makeSupportArch(-0.49, 0.975, brassMaterial, 0.009);
makeSupportArch(0.49, 0.975, brassMaterial, 0.009);

for (const x of [-1.56, 1.56]) {
  for (const z of [-0.58, 0.58]) {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.28, 32), darkMetalMaterial);
    foot.position.set(x, -2.48, z);
    foot.castShadow = true;
    foot.receiveShadow = true;
    armillaryGroup.add(foot);

    const footRing = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 8, 40), brassMaterial);
    footRing.rotation.x = Math.PI / 2;
    footRing.position.set(x, -2.39, z);
    armillaryGroup.add(footRing);
  }
}

const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 0.34, 48), darkMetalMaterial);
crown.position.set(0, 4.12, 0);
crown.castShadow = true;
crown.receiveShadow = true;
armillaryGroup.add(crown);

const crownBand = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.025, 10, 48), brassMaterial);
crownBand.rotation.x = Math.PI / 2;
crownBand.position.set(0, 4.0, 0);
armillaryGroup.add(crownBand);

const orbitCenter = new THREE.Vector3(0, 1.12, 0);
const rotorA = new THREE.Group();
rotorA.position.copy(orbitCenter);
armillaryGroup.add(rotorA);

const rotorB = new THREE.Group();
rotorB.position.copy(orbitCenter);
armillaryGroup.add(rotorB);

const rotorC = new THREE.Group();
rotorC.position.copy(orbitCenter);
armillaryGroup.add(rotorC);

const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.58, 0.035, 12, 200), paleMetalMaterial);
ringA.rotation.set(0.22, 0.1, 0.05);
ringA.castShadow = true;
ringA.receiveShadow = true;
rotorA.add(ringA);

const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.22, 0.03, 12, 180), brassMaterial);
ringB.rotation.set(1.0, 0.15, 0.28);
ringB.castShadow = true;
ringB.receiveShadow = true;
rotorB.add(ringB);

const ringC = new THREE.Mesh(new THREE.TorusGeometry(1.86, 0.025, 10, 160), paleMetalMaterial);
ringC.rotation.set(0.54, 0.62, -0.18);
ringC.castShadow = true;
ringC.receiveShadow = true;
rotorC.add(ringC);

addCylinderBetween(
  rotorA,
  new THREE.Vector3(-2.38, 0, 0),
  new THREE.Vector3(2.38, 0, 0),
  0.055,
  paleMetalMaterial,
  32,
);

const satelliteMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x20262c,
  metalness: 0.86,
  roughness: 0.19,
  clearcoat: 0.8,
});
for (const x of [-2.38, 2.38]) {
  const weight = new THREE.Mesh(new THREE.SphereGeometry(0.31, 40, 32), satelliteMaterial);
  weight.position.set(x, 0, 0);
  weight.castShadow = true;
  weight.receiveShadow = true;
  rotorA.add(weight);

  const outerDisk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.11, 40), brassMaterial);
  outerDisk.rotation.z = Math.PI / 2;
  outerDisk.position.set(x, 0, 0);
  outerDisk.castShadow = true;
  outerDisk.receiveShadow = true;
  rotorA.add(outerDisk);

}

const hub = new THREE.Mesh(new THREE.SphereGeometry(0.79, 64, 48), centralOrbMaterial);
hub.position.set(0, 0, 0);
hub.castShadow = true;
hub.receiveShadow = true;
rotorA.add(hub);

addCylinderBetween(
  rotorB,
  new THREE.Vector3(-1.7, -1.55, 0),
  new THREE.Vector3(1.7, 1.55, 0),
  0.035,
  brassMaterial,
  24,
);
addCylinderBetween(
  rotorC,
  new THREE.Vector3(-1.35, 0, 0),
  new THREE.Vector3(1.35, 0, 0),
  0.025,
  paleMetalMaterial,
  20,
);

const lowerOrb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 40, 32), brassMaterial);
lowerOrb.position.set(1.15, -2.42, 0.74);
lowerOrb.castShadow = true;
lowerOrb.receiveShadow = true;
armillaryGroup.add(lowerOrb);
addCylinderBetween(
  armillaryGroup,
  new THREE.Vector3(1.15, -2.54, 0.74),
  new THREE.Vector3(1.15, -2.23, 0.74),
  0.05,
  paleMetalMaterial,
  20,
);

armillaryGroup.visible = false;

const darkFloorColor = new THREE.Color(0x10161b);
const lightFloorColor = new THREE.Color(0x777276);
const transitionStartBg = darkBackground.clone();
const transitionTargetBg = darkBackground.clone();
const transitionStartFloor = darkFloorColor.clone();
const transitionTargetFloor = darkFloorColor.clone();
let sceneTransition = 1;
let activeScene = 0;

function changeScene() {
  activeScene = activeScene === 0 ? 1 : 0;
  tripleFrame.visible = activeScene === 0;
  armillaryGroup.visible = activeScene === 1;
  document.body.dataset.scene = activeScene === 0 ? "triple" : "armillary";
  canvas.setAttribute(
    "aria-label",
    activeScene === 0
      ? "An animated brass triple-pendulum mechanism on a dark display base."
      : "A rotating silver and brass armillary pendulum on a dark circular base.",
  );

  transitionStartBg.copy(scene.background);
  transitionTargetBg.copy(activeScene === 0 ? darkBackground : lightBackground);
  transitionStartFloor.copy(floorMaterial.color);
  transitionTargetFloor.copy(activeScene === 0 ? darkFloorColor : lightFloorColor);
  sceneTransition = 0;
}
nextButton.addEventListener("click", changeScene);

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
  cameraRadius = THREE.MathUtils.clamp(cameraRadius + event.deltaY * 0.008, 8, 40);
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
  const neededHeight = Math.max(fitHeight, 8.2);
  const neededWidth = Math.max(fitWidth, 7.2);
  const radiusForHeight = neededHeight / (2 * Math.tan(fovHalf));
  const radiusForWidth = neededWidth / (2 * Math.tan(fovHalf) * aspect);
  cameraRadius = Math.max(radiusForHeight, radiusForWidth) * 1.08;
  camera.updateProjectionMatrix();
  placeCamera();
}

function updateSceneTransition(delta) {
  if (sceneTransition >= 1) return;
  sceneTransition = Math.min(sceneTransition + delta / 0.85, 1);
  const eased = sceneTransition * sceneTransition * (3 - 2 * sceneTransition);
  scene.background.copy(transitionStartBg).lerp(transitionTargetBg, eased);
  scene.fog.color.copy(scene.background);
  floorMaterial.color.copy(transitionStartFloor).lerp(transitionTargetFloor, eased);
}

window.addEventListener("resize", resize);
resize();

const clock = new THREE.Clock();
let elapsed = 0;
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  if (running) {
    elapsed += delta;
    if (tripleMixer) tripleMixer.update(delta);
    rotorA.rotation.set(
      0.12 + 0.22 * Math.sin(elapsed * 0.28),
      elapsed * 0.34,
      0.08 + elapsed * 0.12,
    );
    rotorB.rotation.set(
      0.95 + 0.26 * Math.sin(elapsed * 0.21 + 1.1),
      elapsed * 0.22,
      0.28 - elapsed * 0.18,
    );
    rotorC.rotation.set(
      0.5 + elapsed * 0.15,
      0.62 + 0.18 * Math.sin(elapsed * 0.17),
      -0.18 + elapsed * 0.11,
    );
  }

  updateSceneTransition(delta);
  renderer.render(scene, camera);
}
animate();
