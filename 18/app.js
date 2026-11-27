import * as THREE from "three";
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/TextGeometry.js";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x171621);
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
const composition = new THREE.Group();
scene.add(composition);

function makeBackdropTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 768;
  const ctx = c.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, c.height);
  gradient.addColorStop(0, "#292238");
  gradient.addColorStop(0.48, "#191925");
  gradient.addColorStop(1, "#11151d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, c.width, c.height);
  const glow = ctx.createRadialGradient(260, 210, 10, 260, 210, 340);
  glow.addColorStop(0, "rgba(184, 112, 77, .22)");
  glow.addColorStop(1, "rgba(184, 112, 77, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, c.width, c.height);
  for (let i = 0; i < 1500; i += 1) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    const alpha = Math.random() * 0.12;
    ctx.fillStyle = "rgba(239, 218, 181, " + alpha + ")";
    ctx.fillRect(x, y, 1, 1);
  }
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const backdrop = new THREE.Mesh(
  new THREE.PlaneGeometry(40, 26),
  new THREE.MeshBasicMaterial({ map: makeBackdropTexture(), toneMapped: false }),
);
backdrop.position.set(0, 0.5, -7.5);
scene.add(backdrop);

const hemisphere = new THREE.HemisphereLight(0xe8d8ef, 0x302028, 1.45);
scene.add(hemisphere);
const keyLight = new THREE.DirectionalLight(0xffd395, 3.2);
keyLight.position.set(-4, 7, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 7;
keyLight.shadow.camera.bottom = -6;
keyLight.shadow.bias = -0.0003;
keyLight.shadow.radius = 4;
scene.add(keyLight);
const coolFill = new THREE.DirectionalLight(0x89b9e8, 1.6);
coolFill.position.set(5, 4, 5);
scene.add(coolFill);
const textLight = new THREE.DirectionalLight(0xffe7c0, 1.65);
textLight.position.set(0, 2.5, 9);
scene.add(textLight);
const rimLight = new THREE.DirectionalLight(0xff8a69, 2.1);
rimLight.position.set(1, 5, -4);
scene.add(rimLight);
const frontGlow = new THREE.PointLight(0xf5d6a2, 24, 13, 2);
frontGlow.position.set(-1.8, 1.8, 4);
scene.add(frontGlow);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(36, 24),
  new THREE.MeshStandardMaterial({ color: 0x1a1a25, roughness: 0.72, metalness: 0.12 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2.85;
floor.receiveShadow = true;
scene.add(floor);

const textMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffdba0,
  metalness: 0.36,
  roughness: 0.23,
  clearcoat: 1,
  clearcoatRoughness: 0.16,
  emissive: 0x6a3b17,
  emissiveIntensity: 0.2,
});

const pendulums = [];
const jointMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xf1d6a0,
  metalness: 0.78,
  roughness: 0.19,
  clearcoat: 1,
});
const chainMaterial = new THREE.MeshStandardMaterial({
  color: 0xb6a58f,
  metalness: 0.72,
  roughness: 0.3,
});

function addBob(type, palette) {
  const bob = new THREE.Group();
  const main = new THREE.MeshPhysicalMaterial({
    color: palette.main,
    metalness: palette.metalness,
    roughness: palette.roughness,
    clearcoat: 0.92,
    clearcoatRoughness: 0.18,
  });
  const accent = new THREE.MeshStandardMaterial({
    color: palette.accent,
    metalness: 0.7,
    roughness: 0.25,
  });

  if (type === "donut") {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.13, 20, 56), main);
    ring.castShadow = true;
    ring.receiveShadow = true;
    bob.add(ring);
    const glaze = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.018, 8, 56), accent);
    glaze.position.z = 0.126;
    bob.add(glaze);
    const core = new THREE.Mesh(
      new THREE.TorusGeometry(0.155, 0.018, 8, 40),
      jointMaterial,
    );
    core.position.z = 0.11;
    bob.add(core);
  } else if (type === "skull") {
    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.36, 32, 24), main);
    cranium.scale.set(0.9, 1, 0.73);
    cranium.position.y = 0.06;
    cranium.castShadow = true;
    bob.add(cranium);
    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.265, 28, 20), main);
    jaw.scale.set(1, 0.64, 0.73);
    jaw.position.set(0, -0.19, 0.055);
    jaw.castShadow = true;
    bob.add(jaw);
    const socketMat = new THREE.MeshStandardMaterial({ color: 0x291d27, roughness: 0.42 });
    for (const side of [-1, 1]) {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.105, 20, 16), socketMat);
      socket.scale.set(1, 1.15, 0.42);
      socket.position.set(side * 0.145, 0.08, 0.249);
      bob.add(socket);
      const glint = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 10), jointMaterial);
      glint.position.set(side * 0.145 - 0.018, 0.09, 0.287);
      bob.add(glint);
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 14), main);
      cheek.scale.set(1, 0.74, 0.56);
      cheek.position.set(side * 0.22, -0.105, 0.18);
      bob.add(cheek);
    }
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 3), accent);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, -0.075, 0.29);
    bob.add(nose);
    for (let i = 0; i < 4; i += 1) {
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.09, 0.07), jointMaterial);
      tooth.position.set((i - 1.5) * 0.09, -0.285, 0.25);
      bob.add(tooth);
    }
  } else if (type === "monkey") {
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 28, 22), main);
    head.scale.set(1, 1.04, 0.78);
    head.position.y = 0.015;
    head.castShadow = true;
    bob.add(head);
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 16), main);
      ear.scale.set(0.78, 1, 0.58);
      ear.position.set(side * 0.34, 0.04, -0.005);
      ear.castShadow = true;
      bob.add(ear);
      const earInner = new THREE.Mesh(
        new THREE.SphereGeometry(0.083, 16, 12),
        new THREE.MeshStandardMaterial({ color: 0xd38b67, roughness: 0.52 }),
      );
      earInner.scale.set(0.8, 1, 0.34);
      earInner.position.set(side * 0.35, 0.04, 0.075);
      bob.add(earInner);
      const eyeWhite = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 16, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe6c5, roughness: 0.3 }),
      );
      eyeWhite.scale.set(0.9, 1.1, 0.45);
      eyeWhite.position.set(side * 0.12, 0.105, 0.252);
      bob.add(eyeWhite);
      const pupil = new THREE.Mesh(
        new THREE.SphereGeometry(0.033, 14, 10),
        new THREE.MeshStandardMaterial({ color: 0x201b20, roughness: 0.2 }),
      );
      pupil.position.set(side * 0.12, 0.105, 0.286);
      bob.add(pupil);
      const muzzle = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 20, 16),
        new THREE.MeshStandardMaterial({ color: 0xdba77f, roughness: 0.48 }),
      );
      muzzle.scale.set(0.78, 0.7, 0.72);
      muzzle.position.set(side * 0.085, -0.13, 0.245);
      bob.add(muzzle);
    }
    const mouthCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, -0.18, 0.34),
      new THREE.Vector3(-0.07, -0.23, 0.355),
      new THREE.Vector3(0.05, -0.23, 0.355),
      new THREE.Vector3(0.15, -0.18, 0.34),
    ]);
    bob.add(new THREE.Mesh(new THREE.TubeGeometry(mouthCurve, 18, 0.012, 6, false), accent));
    const brow = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.018, 8, 28, Math.PI), accent);
    brow.position.set(0, 0.14, 0.25);
    brow.rotation.z = Math.PI;
    bob.add(brow);
  } else if (type === "crystal") {
    const stone = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.42, 0),
      new THREE.MeshPhysicalMaterial({
        color: palette.main,
        metalness: 0.42,
        roughness: 0.16,
        transmission: 0.22,
        thickness: 0.55,
        clearcoat: 1,
      }),
    );
    stone.castShadow = true;
    stone.receiveShadow = true;
    bob.add(stone);
    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(stone.geometry),
      new THREE.LineBasicMaterial({ color: 0xd9f5e8, transparent: true, opacity: 0.82 }),
    );
    edge.scale.setScalar(1.002);
    bob.add(edge);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), jointMaterial);
    cap.position.y = 0.43;
    bob.add(cap);
  }
  return bob;
}

function addAnchor(x, y, length, type, palette, amplitude, frequency, phase) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, 0.24);
  composition.add(pivot);

  const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.018, 8, 28), jointMaterial);
  eyelet.position.set(0, -0.015, 0.03);
  pivot.add(eyelet);
  const pin = new THREE.Mesh(new THREE.SphereGeometry(0.052, 16, 12), jointMaterial);
  pin.position.set(0, 0.01, 0.03);
  pivot.add(pin);

  const chain = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.019, length, 10, 1),
    chainMaterial,
  );
  chain.position.y = -length / 2;
  chain.castShadow = true;
  pivot.add(chain);

  const bob = addBob(type, palette);
  bob.position.set(0, -length, 0.04);
  pivot.add(bob);
  pendulums.push({ pivot, bob, amplitude, frequency, phase });
}

async function buildScene() {
  const font = await new FontLoader().loadAsync(
    new URL("./assets/helvetiker_regular.typeface.json", import.meta.url).href,
  );
  const textGeometry = new TextGeometry("pendulum", {
    font,
    size: 1.05,
    depth: 0.18,
    curveSegments: 14,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.026,
    bevelSegments: 4,
  });
  textGeometry.computeBoundingBox();
  const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
  textGeometry.scale(5.9 / textWidth, 1, 1);
  textGeometry.center();

  const title = new THREE.Group();
  title.position.set(0, 2.23, 0.05);
  composition.add(title);
  const letters = new THREE.Mesh(textGeometry, textMaterial);
  letters.castShadow = false;
  letters.receiveShadow = false;
  title.add(letters);

  const anchorY = 1.56;
  const defs = [
    { x: -2.48, length: 2.05, type: "donut", main: 0xe58b61, accent: 0xffd2a2, metal: 0.43, rough: 0.28, amp: 0.24, speed: 1.24, phase: 0.0 },
    { x: -0.83, length: 2.35, type: "skull", main: 0xe7deca, accent: 0xa96d45, metal: 0.25, rough: 0.34, amp: 0.20, speed: 1.08, phase: 0.78 },
    { x: 0.83, length: 2.13, type: "monkey", main: 0x895439, accent: 0xe7bd82, metal: 0.32, rough: 0.3, amp: 0.23, speed: 1.31, phase: 1.58 },
    { x: 2.48, length: 2.47, type: "crystal", main: 0x72c6c7, accent: 0xf2d39a, metal: 0.4, rough: 0.18, amp: 0.19, speed: 1.02, phase: 2.3 },
  ];
  for (const item of defs) {
    addAnchor(
      item.x,
      anchorY,
      item.length,
      item.type,
      { main: item.main, accent: item.accent, metalness: item.metal, roughness: item.rough },
      item.amp,
      item.speed,
      item.phase,
    );
  }
}

function fitCamera() {
  const width = Math.max(window.innerWidth, 1);
  const height = Math.max(window.innerHeight, 1);
  const aspect = width / height;
  camera.aspect = aspect;
  camera.fov = aspect < 0.78 ? 38 : 34;
  const scale = Math.min(1, Math.max(0.4, aspect / 1.08));
  composition.scale.setScalar(scale);
  const fitHeight = 5.75 * scale;
  const fitWidth = 7.1 * scale;
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const distance = Math.max(
    fitHeight / (2 * Math.tan(halfFov)),
    fitWidth / (2 * Math.tan(halfFov) * aspect),
  ) * 1.12;
  camera.position.set(0, 0.58 + distance * 0.045, distance);
  camera.lookAt(0, 0.38, 0);
  camera.updateProjectionMatrix();
}

function resize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  fitCamera();
}
window.addEventListener("resize", resize);

const clock = new THREE.Clock();
function animate() {
  const elapsed = clock.getElapsedTime();
  for (const item of pendulums) {
    const phase = elapsed * item.frequency + item.phase;
    item.pivot.rotation.z = item.amplitude * Math.sin(phase);
    item.pivot.rotation.x = 0.055 * Math.sin(phase + 1.05);
    item.bob.rotation.y = 0.11 * Math.sin(phase * 0.7 + item.phase);
  }
  renderer.render(scene, camera);
}

buildScene()
  .then(() => {
    resize();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) animate();
    else renderer.setAnimationLoop(animate);
  })
  .catch((error) => {
    console.error("Could not build the pendulum scene.", error);
  });