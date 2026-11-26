import * as THREE from "three";

export function createPressureTraceScene(renderer) {
  const group = new THREE.Group();
  group.name = "pressure-trace-scene";
  const background = new THREE.Color(0x244f69);
  const floorColor = new THREE.Color(0x34586b);
  const boardY = -3.09;
  const top = boardY + 0.18;
  const boardWidth = 16;
  const boardDepth = 13;

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1024;
  const context = canvas.getContext("2d");
  context.fillStyle = "#4d7f99";
  context.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 20261118;
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 36000; i++) {
    const alpha = 0.035 + random() * 0.17;
    context.fillStyle = random() > 0.38
      ? "rgba(223,241,247," + alpha + ")"
      : "rgba(10,38,56," + alpha + ")";
    const size = random() > 0.985 ? 2 : 1;
    context.fillRect(random() * canvas.width, random() * canvas.height, size, size);
  }

  const paperTexture = new THREE.CanvasTexture(canvas);
  paperTexture.colorSpace = THREE.SRGBColorSpace;
  paperTexture.wrapS = paperTexture.wrapT = THREE.RepeatWrapping;
  paperTexture.repeat.set(3.1, 2.7);
  paperTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);

  const sheetShape = new THREE.Shape();
  const halfW = boardWidth / 2;
  const halfD = boardDepth / 2;
  const corner = 0.2;
  sheetShape.moveTo(-halfW + corner, -halfD);
  sheetShape.lineTo(halfW - corner, -halfD);
  sheetShape.quadraticCurveTo(halfW, -halfD, halfW, -halfD + corner);
  sheetShape.lineTo(halfW, halfD - corner);
  sheetShape.quadraticCurveTo(halfW, halfD, halfW - corner, halfD);
  sheetShape.lineTo(-halfW + corner, halfD);
  sheetShape.quadraticCurveTo(-halfW, halfD, -halfW, halfD - corner);
  sheetShape.lineTo(-halfW, -halfD + corner);
  sheetShape.quadraticCurveTo(-halfW, -halfD, -halfW + corner, -halfD);

  const boardGeometry = new THREE.ExtrudeGeometry(sheetShape, {
    depth: 0.36,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.055,
    bevelThickness: 0.055,
    curveSegments: 12,
  });
  boardGeometry.translate(0, 0, -0.18);
  boardGeometry.rotateX(-Math.PI / 2);

  const board = new THREE.Mesh(
    boardGeometry,
    new THREE.MeshPhysicalMaterial({
      map: paperTexture,
      roughness: 0.68,
      metalness: 0.055,
      clearcoat: 0.16,
      clearcoatRoughness: 0.58,
    }),
  );
  board.position.y = boardY;
  board.castShadow = true;
  board.receiveShadow = true;
  group.add(board);

  const curve = new THREE.CatmullRomCurve3(
    [
      [-5.55, -1.2], [-4.45, -1.2], [-2.7, -1.2], [-0.9, -1.2], [0.55, -1.18],
      [1.45, -0.94], [1.88, -0.3], [1.62, 0.35], [0.78, 0.72], [-0.55, 0.74],
      [-2.25, 0.74], [-4.05, 0.74], [-5.1, 0.98], [-5.52, 1.55], [-5.22, 2.1],
      [-4.35, 2.4], [-2.8, 2.43], [-0.85, 2.43], [1.35, 2.43], [3.5, 2.43], [5.55, 2.43],
    ].map(([x, z]) => new THREE.Vector3(x * 0.82, top, z * 1.7)),
    false,
    "centripetal",
  );

  // A swept, bowl-shaped ribbon makes the groove read as a pressed channel,
  // with a deep graphite center and a raised blue shoulder on each side.
  const rows = 720;
  const cols = 24;
  const channelWidth = 0.94;
  const channelDepth = 0.28;
  const positions = [];
  const colors = [];
  const indices = [];
  const dark = new THREE.Color(0x101b22);
  const inner = new THREE.Color(0x1b303b);
  const shoulder = new THREE.Color(0x54849b);

  for (let i = 0; i <= rows; i++) {
    const t = i / rows;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).setY(0).normalize();
    const side = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize();

    for (let j = 0; j <= cols; j++) {
      const across = (j / cols) * 2 - 1;
      const edge = Math.abs(across);
      const bowl = Math.pow(1 - edge, 0.58);
      const raisedLip = 0.018 * Math.exp(-Math.pow((edge - 0.87) / 0.11, 2));
      positions.push(
        point.x + side.x * across * channelWidth / 2,
        top - channelDepth * bowl + raisedLip,
        point.z + side.z * across * channelWidth / 2,
      );

      const color = edge < 0.48
        ? dark.clone().lerp(inner, THREE.MathUtils.smoothstep(edge, 0, 0.48))
        : inner.clone().lerp(shoulder, THREE.MathUtils.smoothstep(edge, 0.42, 1));
      colors.push(color.r, color.g, color.b);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const a = i * (cols + 1) + j;
      const b = a + cols + 1;
      const c = a + 1;
      const d = b + 1;
      indices.push(a, b, c, b, d, c);
    }
  }

  const grooveGeometry = new THREE.BufferGeometry();
  grooveGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  grooveGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  grooveGeometry.setIndex(indices);
  grooveGeometry.computeVertexNormals();

  const groove = new THREE.Mesh(
    grooveGeometry,
    new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.43,
      metalness: 0.11,
      clearcoat: 0.28,
      clearcoatRoughness: 0.36,
      side: THREE.DoubleSide,
    }),
  );
  groove.castShadow = true;
  groove.receiveShadow = true;
  group.add(groove);

  const stylus = new THREE.Group();
  stylus.name = "moving-metal-pressure-stylus";
  group.add(stylus);

  const polishedSteel = new THREE.MeshPhysicalMaterial({
    color: 0xc6d0d4,
    metalness: 0.96,
    roughness: 0.14,
    clearcoat: 0.9,
    clearcoatRoughness: 0.12,
  });
  const darkSteel = new THREE.MeshPhysicalMaterial({
    color: 0x293a42,
    metalness: 0.91,
    roughness: 0.2,
    clearcoat: 0.7,
  });

  const pointedNib = new THREE.Mesh(
    new THREE.ConeGeometry(0.085, 0.23, 56),
    polishedSteel,
  );
  pointedNib.rotation.z = Math.PI;
  pointedNib.position.y = 0.115;
  pointedNib.castShadow = true;
  stylus.add(pointedNib);

  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.074, 0.9, 64, 1, false),
    polishedSteel,
  );
  shaft.position.y = 0.64;
  shaft.castShadow = true;
  shaft.receiveShadow = true;
  stylus.add(shaft);

  const lowerCollar = new THREE.Mesh(
    new THREE.TorusGeometry(0.074, 0.012, 12, 56),
    darkSteel,
  );
  lowerCollar.rotation.x = Math.PI / 2;
  lowerCollar.position.y = 0.24;
  stylus.add(lowerCollar);

  const topInset = new THREE.Mesh(
    new THREE.CircleGeometry(0.105, 48),
    new THREE.MeshStandardMaterial({ color: 0x25343a, metalness: 0.82, roughness: 0.3 }),
  );
  topInset.rotation.x = -Math.PI / 2;
  topInset.position.y = 1.088;
  stylus.add(topInset);

  const topLip = new THREE.Mesh(
    new THREE.TorusGeometry(0.113, 0.016, 12, 56),
    polishedSteel,
  );
  topLip.rotation.x = Math.PI / 2;
  topLip.position.y = 1.09;
  stylus.add(topLip);

  function update(time) {
    const cycle = 0.5 + 0.5 * Math.sin(time * 0.82);
    const progress = 0.035 + cycle * 0.93;
    const point = curve.getPointAt(progress);
    const tangent = curve.getTangentAt(progress).setY(0).normalize();
    const travelSign = Math.cos(time * 0.82) >= 0 ? 1 : -1;

    stylus.position.set(
      point.x,
      top - channelDepth - 0.016 + Math.sin(time * 2.8) * 0.004,
      point.z,
    );
    const lean = new THREE.Vector3(
      -tangent.x * 0.15 * travelSign,
      1,
      -tangent.z * 0.15 * travelSign,
    ).normalize();
    stylus.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), lean);
  }

  update(0);
  return { group, background, floorColor, update };
}