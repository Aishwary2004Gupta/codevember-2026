import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.querySelector("#scene");
const previousButton = document.querySelector("#previous-scene");
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
const pendulumBackground = new THREE.Color(0xb9c2cb);
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

  fitHeight = Math.max(fitHeight, 8.8);
  fitWidth = Math.max(fitWidth, size.x * scale + 1.1, 7.2);
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
    },
    undefined,
    (error) => {
      console.error("Could not load the triple-pendulum model.", error);
    },
  );
}
loadTriplePendulum();

const pendulumFrame = new THREE.Group();
pendulumFrame.name = "uploaded-pendulum-scene";
pendulumFrame.visible = false;
scene.add(pendulumFrame);
let pendulumMixer = null;
let activeScene = 0;

function fitUploadedPendulum(root) {
  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const scale = 8 / Math.max(size.y, 0.001);

  fitHeight = Math.max(fitHeight, 8.8);
  fitWidth = Math.max(fitWidth, size.x * scale + 1.1, 7.2);
  pendulumFrame.scale.setScalar(scale);
  pendulumFrame.position.set(
    -center.x * scale,
    -bounds.min.y * scale - 3.25,
    -center.z * scale,
  );
  pendulumFrame.add(root);
  resize();
}

function loadUploadedPendulum() {
  const loader = new GLTFLoader();
  loader.load(
    "./assets/colored-pendulum/scene.gltf",
    (gltf) => {
      const root = gltf.scene;
      root.name = "uploaded-pendulum-model";
      root.traverse((object) => {
        if (!object.isMesh) return;
        object.castShadow = true;
        object.receiveShadow = true;
      });
      fitUploadedPendulum(root);

      if (gltf.animations && gltf.animations.length) {
        pendulumMixer = new THREE.AnimationMixer(root);
        const action = pendulumMixer.clipAction(gltf.animations[0]);
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.timeScale = 0.62;
        action.play();
      }
      pendulumFrame.visible = activeScene === 2;
    },
    undefined,
    (error) => {
      console.error("Could not load the uploaded pendulum model.", error);
    },
  );
}
loadUploadedPendulum();

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
  color: 0xc2c5c7,
  metalness: 0.92,
  roughness: 0.1,
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

const orbitCenter = new THREE.Vector3(0, 1.12, 0);
const fixedTrack = new THREE.Mesh(new THREE.TorusGeometry(3.08, 0.034, 12, 240), paleMetalMaterial);
fixedTrack.position.copy(orbitCenter);
fixedTrack.rotation.set(0.38, 0.08, 0.06);
fixedTrack.castShadow = true;
fixedTrack.receiveShadow = true;
armillaryGroup.add(fixedTrack);

const fixedTrackTrim = new THREE.Mesh(new THREE.TorusGeometry(3.015, 0.01, 8, 240), brassMaterial);
fixedTrackTrim.position.copy(orbitCenter);
fixedTrackTrim.rotation.copy(fixedTrack.rotation);
fixedTrackTrim.position.z += 0.055;
armillaryGroup.add(fixedTrackTrim);

const trackRotation = new THREE.Quaternion().setFromEuler(fixedTrack.rotation);
for (const side of [-1, 1]) {
  const attach = new THREE.Vector3(side * 1.45, -Math.sqrt(3.08 ** 2 - 1.45 ** 2), 0)
    .applyQuaternion(trackRotation)
    .add(orbitCenter);
  const foot = new THREE.Vector3(side * 1.48, -2.53, -0.48);
  addCylinderBetween(armillaryGroup, foot, attach, 0.055, darkMetalMaterial, 24);

  const bearing = new THREE.Mesh(new THREE.SphereGeometry(0.12, 28, 20), brassMaterial);
  bearing.position.copy(attach);
  bearing.castShadow = true;
  armillaryGroup.add(bearing);

  const footCap = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.12, 32), darkMetalMaterial);
  footCap.position.copy(foot);
  footCap.y = -2.55;
  footCap.castShadow = true;
  armillaryGroup.add(footCap);
}
const rotorA = new THREE.Group();
rotorA.position.copy(orbitCenter);
armillaryGroup.add(rotorA);

const rotorB = new THREE.Group();
rotorB.position.copy(orbitCenter);
armillaryGroup.add(rotorB);

const rotorC = new THREE.Group();
rotorC.position.copy(orbitCenter);
armillaryGroup.add(rotorC);

const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.62, 0.035, 12, 220), paleMetalMaterial);
ringA.rotation.set(0.22, 0.1, 0.05);
ringA.castShadow = true;
ringA.receiveShadow = true;
rotorA.add(ringA);

const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.03, 12, 200), paleMetalMaterial);
ringB.rotation.set(1.0, 0.15, 0.28);
ringB.castShadow = true;
ringB.receiveShadow = true;
rotorB.add(ringB);

const ringC = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.025, 10, 180), brassMaterial);
ringC.rotation.set(0.54, 0.62, -0.18);
ringC.castShadow = true;
ringC.receiveShadow = true;
rotorC.add(ringC);

addCylinderBetween(
  ringA,
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
  ringA.add(weight);

  const outerDisk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.11, 40), brassMaterial);
  outerDisk.rotation.z = Math.PI / 2;
  outerDisk.position.set(x, 0, 0);
  outerDisk.castShadow = true;
  outerDisk.receiveShadow = true;
  ringA.add(outerDisk);
}

const hub = new THREE.Mesh(new THREE.SphereGeometry(0.79, 64, 48), centralOrbMaterial);
hub.position.copy(orbitCenter);
hub.castShadow = true;
hub.receiveShadow = true;
armillaryGroup.add(hub);

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

const thirdBallCarrier = new THREE.Group();
ringC.add(thirdBallCarrier);
const thirdOrbitingBall = new THREE.Mesh(new THREE.SphereGeometry(0.24, 40, 32), paleMetalMaterial);
thirdOrbitingBall.position.set(1.92, 0, 0);
thirdOrbitingBall.castShadow = true;
thirdOrbitingBall.receiveShadow = true;
thirdBallCarrier.add(thirdOrbitingBall);

armillaryGroup.visible = false;

const mechanicalGroup = new THREE.Group();
mechanicalGroup.name = "arched-double-pendulum-scene";
mechanicalGroup.visible = false;
scene.add(mechanicalGroup);

const mechanismGold = new THREE.MeshPhysicalMaterial({
  color: 0xc29a4c,
  metalness: 0.9,
  roughness: 0.2,
  clearcoat: 0.85,
  clearcoatRoughness: 0.13,
});
const mechanismDark = new THREE.MeshPhysicalMaterial({
  color: 0x11161c,
  metalness: 0.82,
  roughness: 0.22,
  clearcoat: 0.8,
});

const mechanismBase = new THREE.Mesh(
  new THREE.CylinderGeometry(2.48, 2.57, 0.5, 128),
  mechanismDark,
);
mechanismBase.position.y = -2.94;
mechanismBase.castShadow = true;
mechanismBase.receiveShadow = true;
mechanicalGroup.add(mechanismBase);

const mechanismBaseRim = new THREE.Mesh(
  new THREE.CylinderGeometry(2.53, 2.54, 0.1, 128),
  paleMetalMaterial,
);
mechanismBaseRim.position.y = -2.66;
mechanismBaseRim.castShadow = true;
mechanismBaseRim.receiveShadow = true;
mechanicalGroup.add(mechanismBaseRim);

const mechanismBasePlate = new THREE.Mesh(
  new THREE.CylinderGeometry(2.46, 2.46, 0.09, 128),
  mechanismDark,
);
mechanismBasePlate.position.y = -2.565;
mechanismBasePlate.castShadow = true;
mechanismBasePlate.receiveShadow = true;
mechanicalGroup.add(mechanismBasePlate);

for (const [radius, tube, material] of [
  [2.42, 0.022, mechanismGold],
  [2.26, 0.012, paleMetalMaterial],
  [1.9, 0.013, mechanismGold],
  [1.58, 0.009, paleMetalMaterial],
]) {
  addHorizontalRing(mechanicalGroup, radius, tube, material, -2.51);
}

const mechanismTickGeometry = new THREE.BoxGeometry(0.045, 0.012, 0.024);
for (let index = 0; index < 96; index++) {
  const angle = (index / 96) * Math.PI * 2;
  const tick = new THREE.Mesh(mechanismTickGeometry, mechanismGold);
  tick.position.set(2.08 * Math.cos(angle), -2.506, 2.08 * Math.sin(angle));
  tick.rotation.y = -angle;
  mechanicalGroup.add(tick);
}

const archPoints = [
  [-2.17, -2.54, -0.16],
  [-2.2, -0.35, -0.16],
  [-2.02, 1.76, -0.16],
  [-1.55, 3.35, -0.16],
  [-0.86, 4.35, -0.16],
  [-0.05, 4.77, -0.16],
  [0.68, 4.66, -0.16],
  [1.46, 3.75, -0.16],
  [2.02, 1.82, -0.16],
  [2.2, -0.34, -0.16],
  [2.17, -2.54, -0.16],
].map(([x, y, z]) => new THREE.Vector3(x, y, z));

for (const zOffset of [-0.15, 0.15]) {
  const railPoints = archPoints.map((point) => new THREE.Vector3(point.x, point.y, point.z + zOffset));
  const archRail = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(railPoints), 220, 0.036, 12, false),
    paleMetalMaterial,
  );
  archRail.castShadow = true;
  archRail.receiveShadow = true;
  mechanicalGroup.add(archRail);
}

const archAccentPoints = archPoints.map((point) => new THREE.Vector3(point.x, point.y, point.z + 0.24));
const archAccent = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3(archAccentPoints), 220, 0.012, 8, false),
  mechanismGold,
);
mechanicalGroup.add(archAccent);

for (const x of [-2.17, 2.17]) {
  for (const z of [-0.15, 0.15]) {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.15, 40), mechanismDark);
    foot.position.set(x, -2.55, z);
    foot.castShadow = true;
    foot.receiveShadow = true;
    mechanicalGroup.add(foot);
    const footCollar = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.018, 8, 40), mechanismGold);
    footCollar.rotation.x = Math.PI / 2;
    footCollar.position.set(x, -2.47, z);
    mechanicalGroup.add(footCollar);
  }
}

const rearSupport = addCylinderBetween(
  mechanicalGroup,
  new THREE.Vector3(0.58, -2.5, -0.33),
  new THREE.Vector3(0.58, 0.7, -0.33),
  0.052,
  paleMetalMaterial,
  32,
);
const rearSupportAccent = addCylinderBetween(
  mechanicalGroup,
  new THREE.Vector3(0.58, -2.48, -0.27),
  new THREE.Vector3(0.58, 0.66, -0.27),
  0.018,
  mechanismGold,
  20,
);
rearSupport.name = "rear-balance-column";
rearSupportAccent.name = "balance-column-gold-inlay";

function addMechanismPivot(parent, x, y, z, radius) {
  const housing = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 40, 32),
    mechanismGold,
  );
  housing.position.set(x, y, z - 0.04);
  housing.castShadow = true;
  housing.receiveShadow = true;
  parent.add(housing);

  const axle = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.74, radius * 0.74, 0.42, 48),
    paleMetalMaterial,
  );
  axle.rotation.x = Math.PI / 2;
  axle.position.set(x, y, z + 0.035);
  axle.castShadow = true;
  axle.receiveShadow = true;
  parent.add(axle);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.58, radius * 0.085, 10, 56),
    mechanismGold,
  );
  rim.position.set(x, y, z + 0.255);
  parent.add(rim);

  const face = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.48, radius * 0.48, 0.035, 48),
    mechanismDark,
  );
  face.rotation.x = Math.PI / 2;
  face.position.set(x, y, z + 0.255);
  parent.add(face);

  const center = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.31, 40),
    paleMetalMaterial,
  );
  center.position.set(x, y, z + 0.28);
  parent.add(center);
}

const topAxle = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.76, 48), paleMetalMaterial);
topAxle.rotation.x = Math.PI / 2;
topAxle.position.set(0, 4.45, -0.01);
topAxle.castShadow = true;
topAxle.receiveShadow = true;
mechanicalGroup.add(topAxle);

const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.27, 0.22, 64), mechanismDark);
crown.position.set(0, 4.77, 0);
crown.castShadow = true;
crown.receiveShadow = true;
mechanicalGroup.add(crown);

const crownBand = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.025, 10, 64), mechanismGold);
crownBand.rotation.x = Math.PI / 2;
crownBand.position.set(0, 4.68, 0);
mechanicalGroup.add(crownBand);
addMechanismPivot(mechanicalGroup, 0, 4.45, 0.03, 0.32);

const mechanismUpperPivot = new THREE.Group();
mechanismUpperPivot.position.set(0, 4.45, 0.02);
mechanicalGroup.add(mechanismUpperPivot);

for (const x of [-0.19, 0.19]) {
  addCylinderBetween(
    mechanismUpperPivot,
    new THREE.Vector3(x, -0.06, 0),
    new THREE.Vector3(x, -3.63, 0),
    0.045,
    paleMetalMaterial,
    24,
  );
  addCylinderBetween(
    mechanismUpperPivot,
    new THREE.Vector3(x, -0.08, 0.055),
    new THREE.Vector3(x, -3.61, 0.055),
    0.012,
    mechanismGold,
    12,
  );
}

for (const y of [-0.35, -1.13, -1.92, -2.71, -3.48]) {
  addCylinderBetween(
    mechanismUpperPivot,
    new THREE.Vector3(-0.2, y, 0.015),
    new THREE.Vector3(0.2, y, 0.015),
    0.034,
    mechanismDark,
    20,
  );
  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.09, 0.13), mechanismGold);
  collar.position.set(0, y, 0.025);
  collar.castShadow = true;
  mechanismUpperPivot.add(collar);
}

addMechanismPivot(mechanismUpperPivot, 0, -3.63, 0.04, 0.34);

const mechanismLowerPivot = new THREE.Group();
mechanismLowerPivot.position.set(0, -3.63, 0.05);
mechanismUpperPivot.add(mechanismLowerPivot);

addCylinderBetween(
  mechanismLowerPivot,
  new THREE.Vector3(0, -0.17, -0.02),
  new THREE.Vector3(0, -1.4, -0.02),
  0.077,
  mechanismGold,
  28,
);
addCylinderBetween(
  mechanismLowerPivot,
  new THREE.Vector3(0, -0.22, 0.045),
  new THREE.Vector3(0, -1.36, 0.045),
  0.018,
  paleMetalMaterial,
  16,
);

const mechanismWeight = new THREE.Group();
mechanismWeight.position.set(0, -1.78, -0.02);
mechanismLowerPivot.add(mechanismWeight);

const weightCore = new THREE.Mesh(new THREE.SphereGeometry(0.49, 64, 48), mechanismGold);
weightCore.castShadow = true;
weightCore.receiveShadow = true;
mechanismWeight.add(weightCore);

const weightBand = new THREE.Mesh(new THREE.TorusGeometry(0.475, 0.026, 12, 96), paleMetalMaterial);
weightBand.rotation.set(0.54, 0.22, -0.42);
weightBand.position.z = 0.045;
weightBand.castShadow = true;
weightBand.receiveShadow = true;
mechanismWeight.add(weightBand);

const weightGoldSeam = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.012, 8, 96), mechanismDark);
weightGoldSeam.rotation.set(-0.24, 0.31, 0.58);
mechanismWeight.add(weightGoldSeam);

for (const z of [-0.18, 0.18]) {
  const bearing = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.12, 40), mechanismDark);
  bearing.rotation.x = Math.PI / 2;
  bearing.position.set(0, -3.63, z);
  bearing.castShadow = true;
  bearing.receiveShadow = true;
  mechanismUpperPivot.add(bearing);
}

const darkFloorColor = new THREE.Color(0x10161b);
const lightFloorColor = new THREE.Color(0x777276);
const pendulumFloorColor = new THREE.Color(0x818a93);
const sceneGroups = [tripleFrame, armillaryGroup, pendulumFrame, mechanicalGroup];
const sceneKeys = ["triple", "armillary", "pendulum", "mechanical"];
const sceneLabels = [
  "An animated brass triple-pendulum mechanism on a dark display base.",
  "A magnetic pendulum with three smaller orbiting metal balls around a chrome sphere.",
  "An animated blue, rose, and chrome pendulum sculpture.",
  "A looping gold double pendulum inside a polished arched frame.",
];
const sceneBackgrounds = [darkBackground, lightBackground, pendulumBackground, darkBackground];
const sceneFloors = [darkFloorColor, lightFloorColor, pendulumFloorColor, darkFloorColor];
const transitionStartBg = darkBackground.clone();
const transitionTargetBg = darkBackground.clone();
const transitionStartFloor = darkFloorColor.clone();
const transitionTargetFloor = darkFloorColor.clone();
let sceneTransition = 1;
let running = true;

function showScene(index) {
  activeScene = ((index % sceneKeys.length) + sceneKeys.length) % sceneKeys.length;
  sceneGroups.forEach((group, sceneIndex) => { group.visible = sceneIndex === activeScene; });
  document.body.dataset.scene = sceneKeys[activeScene];
  canvas.style.visibility = "visible";
  canvas.setAttribute("aria-label", sceneLabels[activeScene]);

  transitionStartBg.copy(scene.background);
  transitionTargetBg.copy(sceneBackgrounds[activeScene]);
  transitionStartFloor.copy(floorMaterial.color);
  transitionTargetFloor.copy(sceneFloors[activeScene]);
  sceneTransition = 0;
}
nextButton.addEventListener("click", () => showScene(activeScene + 1));
previousButton.addEventListener("click", () => showScene(activeScene - 1));

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
    if (pendulumMixer) pendulumMixer.update(delta);
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
    mechanismUpperPivot.rotation.z = 0.12 * Math.cos(elapsed * 0.48);
    mechanismLowerPivot.rotation.z = -1.35 + 1.18 * Math.sin(elapsed * 0.76 - 1.05);
    mechanismWeight.rotation.y = elapsed * 0.16;
  }

  updateSceneTransition(delta);
  renderer.render(scene, camera);
}
animate();
