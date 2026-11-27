import * as THREE from "three";

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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd9c5ce);

const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 100);
const cameraTarget = new THREE.Vector3(0, 1.35, -0.15);

function fitCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  camera.fov = aspect < 0.82 ? 46 : 34;
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const neededHeight = 8.3;
  const neededWidth = 8.2;
  const heightDistance = neededHeight / (2 * Math.tan(halfFov));
  const widthDistance = neededWidth / (2 * Math.tan(halfFov) * aspect);
  const distance = Math.max(heightDistance, widthDistance) * 1.04;
  camera.position.set(
    cameraTarget.x + distance * 0.07,
    cameraTarget.y + distance * 0.22,
    cameraTarget.z + distance * 0.98,
  );
  camera.lookAt(cameraTarget);
  camera.updateProjectionMatrix();
}

const hemisphere = new THREE.HemisphereLight(0xfff8f4, 0x8c727b, 2.05);
scene.add(hemisphere);

const keyLight = new THREE.DirectionalLight(0xfff1df, 3.1);
keyLight.position.set(-4.5, 8.5, 6.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 9;
keyLight.shadow.camera.bottom = -6;
keyLight.shadow.bias = -0.00025;
keyLight.shadow.radius = 4;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xd7d5e8, 1.4);
fillLight.position.set(5, 4, 5);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0xffffff, 1.6);
rimLight.position.set(2, 6, -5);
scene.add(rimLight);

function makeBackdropTexture() {
  const backdropCanvas = document.createElement("canvas");
  backdropCanvas.width = 512;
  backdropCanvas.height = 1024;
  const context = backdropCanvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, backdropCanvas.height);
  gradient.addColorStop(0, "#c9aebd");
  gradient.addColorStop(0.56, "#e4d2d8");
  gradient.addColorStop(1, "#f0e4df");
  context.fillStyle = gradient;
  context.fillRect(0, 0, backdropCanvas.width, backdropCanvas.height);

  const texture = new THREE.CanvasTexture(backdropCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const backdrop = new THREE.Mesh(
  new THREE.PlaneGeometry(32, 20),
  new THREE.MeshBasicMaterial({ map: makeBackdropTexture(), toneMapped: false }),
);
backdrop.position.set(0, 5, -6.5);
scene.add(backdrop);

function makeWoodTexture() {
  const woodCanvas = document.createElement("canvas");
  woodCanvas.width = 1536;
  woodCanvas.height = 1024;
  const context = woodCanvas.getContext("2d");
  const base = context.createLinearGradient(0, 0, 0, woodCanvas.height);
  base.addColorStop(0, "#c5a184");
  base.addColorStop(0.48, "#b68e70");
  base.addColorStop(1, "#a47a60");
  context.fillStyle = base;
  context.fillRect(0, 0, woodCanvas.width, woodCanvas.height);

  let seed = 21418;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  for (let index = 0; index < 340; index += 1) {
    const y = random() * woodCanvas.height;
    const wave = (random() - 0.5) * 28;
    const alpha = 0.035 + random() * 0.11;
    context.beginPath();
    context.moveTo(-10, y);
    context.bezierCurveTo(
      woodCanvas.width * 0.28, y + wave,
      woodCanvas.width * 0.66, y - wave * 0.55,
      woodCanvas.width + 10, y + (random() - 0.5) * 14,
    );
    context.strokeStyle = random() > 0.46
      ? "rgba(246, 222, 197, " + alpha + ")"
      : "rgba(91, 58, 43, " + alpha + ")";
    context.lineWidth = 0.6 + random() * 2.1;
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(woodCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.25, 1.1);
  return texture;
}

const woodSide = new THREE.MeshStandardMaterial({
  color: 0x9f745b,
  roughness: 0.76,
});
const woodTop = new THREE.MeshStandardMaterial({
  map: makeWoodTexture(),
  roughness: 0.8,
});
const table = new THREE.Mesh(
  new THREE.BoxGeometry(14, 0.38, 12),
  [woodSide, woodSide, woodTop, woodSide, woodSide, woodSide],
);
table.position.set(0, -2.1, 0);
table.castShadow = true;
table.receiveShadow = true;
scene.add(table);

const boardRadius = 2.85;
const boardRoot = new THREE.Group();
boardRoot.position.set(0, -1.9, -0.52);
scene.add(boardRoot);

const boardShape = new THREE.Shape();
boardShape.moveTo(-boardRadius, 0);
boardShape.absarc(0, 0, boardRadius, Math.PI, 0, true);
boardShape.lineTo(-boardRadius, 0);

function addCircleOpening(shape, x, y, radius) {
  const hole = new THREE.Path();
  hole.absarc(x, y, radius, 0, Math.PI * 2, false);
  shape.holes.push(hole);
}

function addSquareOpening(shape, x, y, side, angle = 0) {
  const hole = new THREE.Path();
  const half = side / 2;
  for (let corner = 0; corner < 4; corner += 1) {
    const theta = angle + Math.PI / 4 + (corner * Math.PI) / 2;
    const px = x + Math.cos(theta) * half * Math.SQRT2;
    const py = y + Math.sin(theta) * half * Math.SQRT2;
    if (corner === 0) hole.moveTo(px, py);
    else hole.lineTo(px, py);
  }
  hole.closePath();
  shape.holes.push(hole);
}

function addPlusOpening(shape, x, y, outerHalf, armHalf) {
  const points = [
    [-armHalf, -outerHalf], [armHalf, -outerHalf], [armHalf, -armHalf],
    [outerHalf, -armHalf], [outerHalf, armHalf], [armHalf, armHalf],
    [armHalf, outerHalf], [-armHalf, outerHalf], [-armHalf, armHalf],
    [-outerHalf, armHalf], [-outerHalf, -armHalf], [-armHalf, -armHalf],
  ];
  const hole = new THREE.Path();
  points.forEach(([px, py], index) => {
    if (index === 0) hole.moveTo(x + px, y + py);
    else hole.lineTo(x + px, y + py);
  });
  hole.closePath();
  shape.holes.push(hole);
}
function addStarOpening(shape, x, y, outerRadius, innerRadius, points = 5) {
  const hole = new THREE.Path();
  for (let vertex = 0; vertex < points * 2; vertex += 1) {
    const radius = vertex % 2 === 0 ? outerRadius : innerRadius;
    const theta = -Math.PI / 2 + (vertex * Math.PI) / points;
    const px = x + Math.cos(theta) * radius;
    const py = y + Math.sin(theta) * radius;
    if (vertex === 0) hole.moveTo(px, py);
    else hole.lineTo(px, py);
  }
  hole.closePath();
  shape.holes.push(hole);
}

addSquareOpening(boardShape, -0.94, 1.8, 1.02, 0);
addCircleOpening(boardShape, 0, 1.7, 0.48);
addPlusOpening(boardShape, 0.94, 1.8, 0.52, 0.19);
addCircleOpening(boardShape, -2.0, 1.86, 0.3);
addCircleOpening(boardShape, 2.0, 1.86, 0.3);

const boardGeometry = new THREE.ExtrudeGeometry(boardShape, {
  depth: 0.22,
  bevelEnabled: true,
  bevelSegments: 4,
  steps: 1,
  bevelSize: 0.035,
  bevelThickness: 0.04,
});
boardGeometry.translate(0, 0, -0.11);

const boardMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xf0ece5,
  metalness: 0.04,
  roughness: 0.42,
  clearcoat: 0.22,
  clearcoatRoughness: 0.3,
});
const board = new THREE.Mesh(boardGeometry, boardMaterial);
board.castShadow = true;
board.receiveShadow = true;
boardRoot.add(board);

const trimMaterial = new THREE.MeshStandardMaterial({
  color: 0xc8ad8b,
  metalness: 0.52,
  roughness: 0.38,
});
const archPoints = [];
for (let index = 0; index <= 100; index += 1) {
  const angle = Math.PI - (index / 100) * Math.PI;
  archPoints.push(new THREE.Vector3(
    boardRadius * Math.cos(angle),
    boardRadius * Math.sin(angle),
    0.135,
  ));
}
const archTrim = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3(archPoints), 180, 0.018, 8, false),
  trimMaterial,
);
boardRoot.add(archTrim);

const baseTrim = new THREE.Mesh(
  new THREE.BoxGeometry(boardRadius * 2, 0.028, 0.04),
  trimMaterial,
);
baseTrim.position.set(0, 0.018, 0.13);
boardRoot.add(baseTrim);

for (const x of [-2.2, 2.2]) {
  const mount = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.1, 0.54),
    new THREE.MeshStandardMaterial({ color: 0xe3d9cf, roughness: 0.55 }),
  );
  mount.position.set(x, 0.045, -0.36);
  mount.castShadow = true;
  boardRoot.add(mount);
}

const brassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xc58b4a,
  metalness: 0.76,
  roughness: 0.23,
  clearcoat: 0.72,
});
const cordMaterial = new THREE.MeshStandardMaterial({
  color: 0x2d292c,
  roughness: 0.63,
});
const cordHighlight = new THREE.MeshStandardMaterial({
  color: 0x948275,
  metalness: 0.3,
  roughness: 0.48,
});

const pivot = new THREE.Group();
pivot.position.set(0, 4.2, 0.72);
scene.add(pivot);

const pivotCap = new THREE.Mesh(new THREE.SphereGeometry(0.105, 32, 24), brassMaterial);
pivotCap.castShadow = true;
pivot.add(pivotCap);

const pivotRing = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.018, 10, 48), cordHighlight);
pivotRing.position.z = 0.015;
pivot.add(pivotRing);

const pendulumLength = 4.4;
const cord = new THREE.Mesh(
  new THREE.CylinderGeometry(0.014, 0.014, 1, 14),
  cordMaterial,
);
cord.castShadow = true;
pivot.add(cord);

const cordGlint = new THREE.Mesh(
  new THREE.CylinderGeometry(0.003, 0.003, 1, 8),
  cordHighlight,
);
pivot.add(cordGlint);

const shapeSegments = 64;
const shapeGeometry = new THREE.BufferGeometry();
const shapePositions = new Float32Array((shapeSegments * 4 + 2) * 3);
const shapeIndices = [];
const frontCenter = 0;
const innerFrontStart = 1;
const outerFrontStart = innerFrontStart + shapeSegments;
const outerBackStart = outerFrontStart + shapeSegments;
const innerBackStart = outerBackStart + shapeSegments;
const backCenter = innerBackStart + shapeSegments;

for (let index = 0; index < shapeSegments; index += 1) {
  const next = (index + 1) % shapeSegments;
  const innerFront = innerFrontStart + index;
  const innerFrontNext = innerFrontStart + next;
  const outerFront = outerFrontStart + index;
  const outerFrontNext = outerFrontStart + next;
  const outerBack = outerBackStart + index;
  const outerBackNext = outerBackStart + next;
  const innerBack = innerBackStart + index;
  const innerBackNext = innerBackStart + next;

  shapeIndices.push(frontCenter, innerFront, innerFrontNext);
  shapeIndices.push(innerFront, outerFront, outerFrontNext, innerFront, outerFrontNext, innerFrontNext);
  shapeIndices.push(outerFront, outerBack, outerBackNext, outerFront, outerBackNext, outerFrontNext);
  shapeIndices.push(backCenter, innerBackNext, innerBack);
  shapeIndices.push(innerBack, outerBackNext, outerBack, innerBack, innerBackNext, outerBackNext);
}
shapeGeometry.setAttribute("position", new THREE.BufferAttribute(shapePositions, 3));
shapeGeometry.setIndex(shapeIndices);

const bob = new THREE.Group();
bob.position.y = -pendulumLength;
pivot.add(bob);

const bobMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xe64724,
  metalness: 0.1,
  roughness: 0.24,
  clearcoat: 0.72,
  clearcoatRoughness: 0.18,
  side: THREE.DoubleSide,
});
const bobBody = new THREE.Mesh(shapeGeometry, bobMaterial);
bobBody.castShadow = true;
bobBody.receiveShadow = true;
bob.add(bobBody);

const bobCollar = new THREE.Mesh(
  new THREE.CylinderGeometry(0.105, 0.16, 0.13, 10),
  brassMaterial,
);
bobCollar.position.y = 0.37;
bobCollar.castShadow = true;
bob.add(bobCollar);

const bobEyelet = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 8, 32), brassMaterial);
bobEyelet.rotation.x = Math.PI / 2;
bobEyelet.position.set(0, 0.44, 0);
bob.add(bobEyelet);

const bobPin = new THREE.Mesh(new THREE.SphereGeometry(0.035, 20, 16), brassMaterial);
bobPin.position.set(0, 0.44, 0.08);
bob.add(bobPin);

function smoothstep(edge0, edge1, value) {
  const amount = THREE.MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return amount * amount * (3 - 2 * amount);
}

function radiusForSilhouette(angle, x) {
  const cosine = Math.abs(Math.cos(angle));
  const sine = Math.abs(Math.sin(angle));
  const squareRadius = 0.36 / Math.max(cosine, sine);
  const circleRadius = 0.34;
  const crossOuter = 0.4;
  const crossArm = 0.145;
  const horizontalArm = Math.min(
    crossOuter / Math.max(cosine, 0.0001),
    crossArm / Math.max(sine, 0.0001),
  );
  const verticalArm = Math.min(
    crossArm / Math.max(cosine, 0.0001),
    crossOuter / Math.max(sine, 0.0001),
  );
  const crossRadius = Math.max(horizontalArm, verticalArm);

  if (x < 0) {
    const morph = smoothstep(-0.98, 0, x);
    return THREE.MathUtils.lerp(squareRadius, circleRadius, morph);
  }
  const morph = smoothstep(0, 0.98, x);
  return THREE.MathUtils.lerp(circleRadius, crossRadius, morph);
}

function updateBobSilhouette(x) {
  const toCircle = x < 0 ? smoothstep(-0.98, 0, x) : 0;
  const toCross = x > 0 ? smoothstep(0, 0.98, x) : 0;
  const depth = THREE.MathUtils.lerp(
    THREE.MathUtils.lerp(0.44, 0.5, toCircle),
    0.38,
    toCross,
  );
  const bevel = 0.055;
  const positions = shapeGeometry.attributes.position.array;

  positions[frontCenter * 3 + 2] = depth / 2;
  positions[backCenter * 3 + 2] = -depth / 2;
  for (let index = 0; index < shapeSegments; index += 1) {
    const angle = (index / shapeSegments) * Math.PI * 2;
    const radius = radiusForSilhouette(angle, x);
    const innerRadius = radius * 0.91;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const vertices = [
      [innerFrontStart + index, innerRadius, depth / 2],
      [outerFrontStart + index, radius, depth / 2 - bevel],
      [outerBackStart + index, radius, -depth / 2 + bevel],
      [innerBackStart + index, innerRadius, -depth / 2],
    ];
    for (const [vertex, vertexRadius, z] of vertices) {
      const offset = vertex * 3;
      positions[offset] = cosine * vertexRadius;
      positions[offset + 1] = sine * vertexRadius;
      positions[offset + 2] = z;
    }
  }
  shapeGeometry.attributes.position.needsUpdate = true;
  shapeGeometry.computeVertexNormals();
  shapeGeometry.computeBoundingSphere();
}

const floorBounce = new THREE.PointLight(0xf7d2bf, 36, 16, 2);
floorBounce.position.set(-1, 3, 5);
scene.add(floorBounce);

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
const cableUp = new THREE.Vector3(0, 1, 0);
const cableEnd = new THREE.Vector3();
const cableDirection = new THREE.Vector3();
function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  const swingAngle = 0.57 * Math.sin(elapsed * 0.72);
  const swingX = pendulumLength * Math.sin(swingAngle);
  const enterBoard = smoothstep(-1.42, -0.56, swingX);
  const leaveBoard = smoothstep(0.56, 1.42, swingX);
  const throughWeight = enterBoard * (1 - leaveBoard);

  pivot.rotation.z = swingAngle;
  bob.position.z = THREE.MathUtils.lerp(0.08, -1.58, throughWeight);
  bob.rotation.z = -elapsed * 0.52;
  bob.rotation.y = 0.12 * Math.sin(elapsed * 0.58);
  updateBobSilhouette(swingX);

  cableEnd.set(bob.position.x, bob.position.y + 0.42, bob.position.z);
  const cableLength = cableEnd.length();
  cableDirection.copy(cableEnd).normalize();
  cord.position.copy(cableEnd).multiplyScalar(0.5);
  cord.quaternion.setFromUnitVectors(cableUp, cableDirection);
  cord.scale.set(1, cableLength, 1);
  cordGlint.position.copy(cord.position).add(new THREE.Vector3(0.009, 0, 0.012));
  cordGlint.quaternion.copy(cord.quaternion);
  cordGlint.scale.set(1, cableLength, 1);

  renderer.render(scene, camera);
}
animate();