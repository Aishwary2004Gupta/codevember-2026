import * as THREE from "three";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c3c43);
const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 100);
const cameraTarget = new THREE.Vector3(0, 0.45, -0.15);

function fitCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  camera.fov = aspect < 0.82 ? 44 : 36;
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const heightDistance = 8.1 / (2 * Math.tan(halfFov));
  const widthDistance = 7.8 / (2 * Math.tan(halfFov) * aspect);
  const distance = Math.max(heightDistance, widthDistance) * 1.06;
  camera.position.set(
    cameraTarget.x + distance * 0.035,
    cameraTarget.y + distance * 0.12,
    cameraTarget.z + distance * 0.99,
  );
  camera.lookAt(cameraTarget);
  camera.updateProjectionMatrix();
}

const hemisphere = new THREE.HemisphereLight(0xe5f6fa, 0x23535a, 2.0);
scene.add(hemisphere);
const keyLight = new THREE.DirectionalLight(0xffe6bd, 3.1);
keyLight.position.set(-4.5, 8.5, 6.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -6;
keyLight.shadow.bias = -0.00025;
keyLight.shadow.radius = 4;
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xa5d8ed, 1.35);
fillLight.position.set(5, 4, 5);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0xffffff, 1.7);
rimLight.position.set(2, 6, -5);
scene.add(rimLight);

function makeBackdropTexture() {
  const backdropCanvas = document.createElement("canvas");
  backdropCanvas.width = 512;
  backdropCanvas.height = 1024;
  const context = backdropCanvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, backdropCanvas.height);
  gradient.addColorStop(0, "#07363c");
  gradient.addColorStop(0.6, "#0c4d52");
  gradient.addColorStop(1, "#1a5a60");
  context.fillStyle = gradient;
  context.fillRect(0, 0, backdropCanvas.width, backdropCanvas.height);
  const texture = new THREE.CanvasTexture(backdropCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const backdrop = new THREE.Mesh(
  new THREE.PlaneGeometry(36, 24),
  new THREE.MeshBasicMaterial({ map: makeBackdropTexture(), toneMapped: false }),
);
backdrop.position.set(0, 4, -6.5);
scene.add(backdrop);

const floorSide = new THREE.MeshStandardMaterial({ color: 0x82539a, roughness: 0.82 });
const floorTop = new THREE.MeshStandardMaterial({ color: 0xb276c9, roughness: 0.78 });
const floor = new THREE.Mesh(
  new THREE.BoxGeometry(22, 0.36, 18),
  [floorSide, floorSide, floorTop, floorSide, floorSide, floorSide],
);
floor.position.set(0, -2.08, 0);
floor.receiveShadow = true;
scene.add(floor);

const railMaterial = new THREE.MeshStandardMaterial({
  color: 0xe78648,
  roughness: 0.58,
  metalness: 0.04,
});
for (const side of [-1, 1]) {
  const rail = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.09, 0.18), railMaterial);
  rail.position.set(side * 2.72, -1.83, -0.72);
  rail.castShadow = true;
  rail.receiveShadow = true;
  scene.add(rail);
}

const wheelRadius = 2.58;
const wheelCenterY = -1.32;
const wheelRoot = new THREE.Group();
wheelRoot.position.set(0, wheelCenterY, -0.52);
scene.add(wheelRoot);

const wheelShape = new THREE.Shape();
wheelShape.absarc(0, 0, wheelRadius, 0, Math.PI * 2, false);
wheelShape.closePath();

function addPolygonOpening(shape, points) {
  const hole = new THREE.Path();
  points.forEach(([x, y], index) => {
    if (index === 0) hole.moveTo(x, y);
    else hole.lineTo(x, y);
  });
  hole.closePath();
  shape.holes.push(hole);
}

const leftSlot = [
  [-2.12, -0.2],
  [-1.58, 0.92],
  [-0.62, 0.06],
];
const rightSlot = [
  [2.12, -0.2],
  [0.62, 0.06],
  [1.58, 0.92],
];
addPolygonOpening(wheelShape, leftSlot);
addPolygonOpening(wheelShape, rightSlot);

const wheelGeometry = new THREE.ExtrudeGeometry(wheelShape, {
  depth: 0.26,
  bevelEnabled: true,
  bevelSegments: 3,
  steps: 1,
  bevelSize: 0.045,
  bevelThickness: 0.045,
});
wheelGeometry.translate(0, 0, -0.13);
const wheelMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xd8d0b0,
  metalness: 0.08,
  roughness: 0.42,
  clearcoat: 0.2,
  clearcoatRoughness: 0.32,
});
const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
wheel.castShadow = true;
wheel.receiveShadow = true;
wheelRoot.add(wheel);

const blueTrim = new THREE.MeshStandardMaterial({
  color: 0x477e9c,
  metalness: 0.42,
  roughness: 0.34,
});
const outerRim = new THREE.Mesh(new THREE.TorusGeometry(wheelRadius, 0.025, 8, 160), blueTrim);
outerRim.position.z = 0.16;
wheelRoot.add(outerRim);
function addSlotOutline(points) {
  for (let index = 0; index < points.length; index += 1) {
    const [ax, ay] = points[index];
    const [bx, by] = points[(index + 1) % points.length];
    const start = new THREE.Vector3(ax, ay, 0.16);
    const end = new THREE.Vector3(bx, by, 0.16);
    const direction = end.clone().sub(start);
    const length = direction.length();
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.019, length, 8), blueTrim);
    edge.position.copy(start).add(end).multiplyScalar(0.5);
    edge.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    wheelRoot.add(edge);
  }
}
addSlotOutline(leftSlot);
addSlotOutline(rightSlot);

const pivot = new THREE.Group();
pivot.position.set(0, 4.48, 0.72);
scene.add(pivot);

const brassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xd69a29,
  metalness: 0.78,
  roughness: 0.2,
  clearcoat: 0.9,
  clearcoatRoughness: 0.16,
});
const pivotSteel = new THREE.MeshPhysicalMaterial({
  color: 0xc7d0d1,
  metalness: 0.82,
  roughness: 0.2,
});
const pivotCap = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 16), brassMaterial);
pivotCap.castShadow = true;
pivot.add(pivotCap);
const pivotRing = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 8, 40), pivotSteel);
pivotRing.position.z = 0.012;
pivot.add(pivotRing);

const pendulumLength = 5.68;
const tether = new THREE.Mesh(
  new THREE.CylinderGeometry(0.012, 0.012, 1, 12),
  new THREE.MeshStandardMaterial({ color: 0x253137, metalness: 0.34, roughness: 0.5 }),
);
tether.castShadow = true;
pivot.add(tether);

const bob = new THREE.Group();
bob.position.y = -pendulumLength;
pivot.add(bob);
const bobBody = new THREE.Mesh(
  new THREE.ConeGeometry(0.42, 0.82, 12, 1, false),
  brassMaterial,
);
bobBody.castShadow = true;
bobBody.receiveShadow = true;
bob.add(bobBody);
const bobBase = new THREE.Mesh(new THREE.CylinderGeometry(0.405, 0.405, 0.055, 12), brassMaterial);
bobBase.position.y = -0.37;
bobBase.castShadow = true;
bob.add(bobBase);
const bobBand = new THREE.Mesh(
  new THREE.TorusGeometry(0.37, 0.018, 8, 48),
  pivotSteel,
);
bobBand.rotation.x = Math.PI / 2;
bobBand.position.y = -0.34;
bob.add(bobBand);

function smoothstep(edge0, edge1, value) {
  const amount = THREE.MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return amount * amount * (3 - 2 * amount);
}

function resize() {
  const width = Math.max(window.innerWidth, 1);
  const height = Math.max(window.innerHeight, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  fitCamera();
}
window.addEventListener("resize", resize);
resize();

const clock = new THREE.Clock();
const upAxis = new THREE.Vector3(0, 1, 0);
const cordEnd = new THREE.Vector3();
const cordDirection = new THREE.Vector3();
function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  const swingPhase = elapsed * 0.66 + Math.PI / 2 - 0.12;
  const lateralTravel = 1.46;
  const forwardTravel = 1.42;
  const crossingDepth = wheelRoot.position.z - pivot.position.z;
  const bobX = lateralTravel * Math.sin(swingPhase);
  const bobZ = crossingDepth + forwardTravel * Math.cos(swingPhase);
  const bobY = -Math.sqrt(
    pendulumLength ** 2 - bobX ** 2 - bobZ ** 2,
  );

  // The bob traces a 3D ellipse, crossing the wheel only at the side triangles.
  bob.position.set(bobX, bobY, bobZ);
  bob.rotation.y = 0.05 * Math.sin(elapsed * 0.8);

  cordEnd.set(bobX, bobY + 0.41, bobZ);
  const cordLength = cordEnd.length();
  cordDirection.copy(cordEnd).normalize();
  tether.position.copy(cordEnd).multiplyScalar(0.5);
  tether.quaternion.setFromUnitVectors(upAxis, cordDirection);
  tether.scale.set(1, cordLength, 1);

  renderer.render(scene, camera);
}
animate();