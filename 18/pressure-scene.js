import * as THREE from "three";

export function createPressureTraceScene(renderer) {
  const group = new THREE.Group();
  group.name = "pressure-trace-scene";
  const background = new THREE.Color(0x244d68);
  const floorColor = new THREE.Color(0x294d62);
  const boardY = -3.09;
  const top = boardY + 0.18;

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  const context = canvas.getContext("2d");
  context.fillStyle = "#6d9bb3";
  context.fillRect(0, 0, 512, 512);
  let seed = 20261118;
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 22000; i++) {
    const alpha = 0.04 + random() * 0.2;
    context.fillStyle = random() > 0.42
      ? "rgba(238,248,250," + alpha + ")"
      : "rgba(19,54,76," + alpha + ")";
    const size = random() > 0.92 ? 2 : 1;
    context.fillRect(random() * 512, random() * 512, size, size);
  }
  const paperTexture = new THREE.CanvasTexture(canvas);
  paperTexture.colorSpace = THREE.SRGBColorSpace;
  paperTexture.wrapS = paperTexture.wrapT = THREE.RepeatWrapping;
  paperTexture.repeat.set(2.2, 1.55);
  paperTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);

  const paper = new THREE.Shape();
  const w = 11.7, d = 8.25, r = 0.26;
  paper.moveTo(-w / 2 + r, -d / 2);
  paper.lineTo(w / 2 - r, -d / 2);
  paper.quadraticCurveTo(w / 2, -d / 2, w / 2, -d / 2 + r);
  paper.lineTo(w / 2, d / 2 - r);
  paper.quadraticCurveTo(w / 2, d / 2, w / 2 - r, d / 2);
  paper.lineTo(-w / 2 + r, d / 2);
  paper.quadraticCurveTo(-w / 2, d / 2, -w / 2, d / 2 - r);
  paper.lineTo(-w / 2, -d / 2 + r);
  paper.quadraticCurveTo(-w / 2, -d / 2, -w / 2 + r, -d / 2);

  const boardGeometry = new THREE.ExtrudeGeometry(paper, {
    depth: 0.36, bevelEnabled: true, bevelSegments: 5,
    bevelSize: 0.055, bevelThickness: 0.055, curveSegments: 12,
  });
  boardGeometry.translate(0, 0, -0.18);
  boardGeometry.rotateX(-Math.PI / 2);
  const board = new THREE.Mesh(
    boardGeometry,
    new THREE.MeshPhysicalMaterial({
      map: paperTexture, roughness: 0.78, metalness: 0.025,
      clearcoat: 0.08, clearcoatRoughness: 0.62,
    }),
  );
  board.position.y = boardY;
  board.castShadow = board.receiveShadow = true;
  group.add(board);

  const curve = new THREE.CatmullRomCurve3(
    [
      [-5.55,-1.2],[-4.45,-1.2],[-2.7,-1.2],[-0.9,-1.2],[0.55,-1.18],
      [1.45,-0.94],[1.88,-0.3],[1.62,0.35],[0.78,0.72],[-0.55,0.74],
      [-2.25,0.74],[-4.05,0.74],[-5.1,0.98],[-5.52,1.55],[-5.22,2.1],
      [-4.35,2.4],[-2.8,2.43],[-0.85,2.43],[1.35,2.43],[3.5,2.43],[5.55,2.43],
    ].map(([x,z]) => new THREE.Vector3(x,top,z)),
    false,
    "centripetal",
  );

  const rows = 420, cols = 14, channelWidth = 0.52, channelDepth = 0.15;
  const positions = [], colors = [], indices = [];
  const dark = new THREE.Color(0x142f41), rim = new THREE.Color(0x47788f);
  for (let i = 0; i <= rows; i++) {
    const point = curve.getPointAt(i / rows);
    const tangent = curve.getTangentAt(i / rows).setY(0).normalize();
    const side = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize();
    for (let j = 0; j <= cols; j++) {
      const across = j / cols * 2 - 1, edge = Math.abs(across);
      const bowl = Math.pow(1 - edge, 0.62);
      positions.push(
        point.x + side.x * across * channelWidth / 2,
        top - channelDepth * bowl + 0.01 * Math.pow(edge, 5),
        point.z + side.z * across * channelWidth / 2,
      );
      const color = dark.clone().lerp(rim, THREE.MathUtils.smoothstep(edge, 0.05, 0.96));
      colors.push(color.r, color.g, color.b);
    }
  }
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
    const a = i * (cols + 1) + j, b = a + cols + 1, c = a + 1, e = b + 1;
    indices.push(a, b, c, b, e, c);
  }
  const channelGeometry = new THREE.BufferGeometry();
  channelGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  channelGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  channelGeometry.setIndex(indices);
  channelGeometry.computeVertexNormals();
  const channel = new THREE.Mesh(
    channelGeometry,
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.46, metalness: 0.08, side: THREE.DoubleSide }),
  );
  channel.castShadow = channel.receiveShadow = true;
  group.add(channel);

  const stylus = new THREE.Group();
  stylus.name = "moving-metal-pressure-stylus";
  group.add(stylus);
  const silver = new THREE.MeshPhysicalMaterial({
    color: 0xd2d8da, metalness: 0.93, roughness: 0.16, clearcoat: 0.9, clearcoatRoughness: 0.12,
  });
  const darkMetal = new THREE.MeshPhysicalMaterial({ color: 0x273943, metalness: 0.86, roughness: 0.22, clearcoat: 0.7 });
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.28, 48), silver);
  tip.rotation.z = Math.PI;
  tip.position.y = 0.14;
  tip.castShadow = true;
  stylus.add(tip);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.118, 1.14, 48), silver);
  body.position.y = 0.83;
  body.castShadow = body.receiveShadow = true;
  stylus.add(body);
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.074, 0.2, 48), darkMetal);
  grip.position.y = 1.18;
  grip.castShadow = true;
  stylus.add(grip);
  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.064, 0.018, 10, 48),
    new THREE.MeshPhysicalMaterial({ color: 0xc4c6c5, metalness: 0.94, roughness: 0.18 }),
  );
  collar.position.y = 1.31;
  stylus.add(collar);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.07, 36, 24), silver);
  cap.position.y = 1.42;
  stylus.add(cap);

  function update(time) {
    const point = curve.getPointAt(0.5 + 0.47 * Math.sin(time * 0.3));
    const tangent = curve.getTangentAt(0.5 + 0.47 * Math.sin(time * 0.3));
    stylus.position.set(point.x, top - 0.105 + Math.sin(time * 4.2) * 0.012, point.z);
    const tilt = new THREE.Vector3(-tangent.x * 0.2, 1, -tangent.z * 0.2).normalize();
    stylus.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tilt);
  }
  update(0);
  return { group, background, floorColor, update };
}
