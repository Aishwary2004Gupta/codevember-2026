// Shape meshes used by the day-18 pendulum. The OBJ forms are the same
// models already supplied with day 18; they are normalized around the hidden
// suspension point so the original swing and framing stay unchanged.
export function parseOBJ(text, targetHeight = 0.43, maxWidth = 0.38) {
  const vertices = [];
  const faces = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith("v ")) {
      const p = line.split(/\s+/).slice(1, 4).map(Number);
      if (p.length === 3 && p.every(Number.isFinite)) vertices.push(p);
    } else if (line.startsWith("f ")) {
      const ids = line.split(/\s+/).slice(1).map((part) => {
        const index = Number.parseInt(part.split("/")[0], 10);
        return index < 0 ? vertices.length + index : index - 1;
      });
      for (let i = 1; i < ids.length - 1; i++) faces.push([ids[0], ids[i], ids[i + 1]]);
    }
  }
  if (!vertices.length || !faces.length) throw new Error("OBJ has no triangle geometry");

  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const p of vertices) for (let k = 0; k < 3; k++) {
    min[k] = Math.min(min[k], p[k]);
    max[k] = Math.max(max[k], p[k]);
  }
  const scale = Math.min(targetHeight / Math.max(max[1] - min[1], 1e-5), maxWidth / Math.max(max[0] - min[0], max[2] - min[2], 1e-5));
  const positions = new Float32Array(faces.length * 9);
  const normals = new Float32Array(faces.length * 9);
  const smooth = new Float64Array(vertices.length * 3);
  for (const face of faces) {
    const a = vertices[face[0]], b = vertices[face[1]], c = vertices[face[2]];
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const n = [ab[1] * ac[2] - ab[2] * ac[1], ab[2] * ac[0] - ab[0] * ac[2], ab[0] * ac[1] - ab[1] * ac[0]];
    for (const index of face) for (let k = 0; k < 3; k++) smooth[index * 3 + k] += n[k];
  }
  let cursor = 0;
  for (const face of faces) for (const index of face) {
    const p = vertices[index];
    positions.set([(p[0] - (min[0] + max[0]) * 0.5) * scale, (p[1] - max[1]) * scale, (p[2] - (min[2] + max[2]) * 0.5) * scale], cursor);
    const nx = smooth[index * 3], ny = smooth[index * 3 + 1], nz = smooth[index * 3 + 2];
    const length = Math.hypot(nx, ny, nz) || 1;
    normals.set([nx / length, ny / length, nz / length], cursor);
    cursor += 3;
  }
  return {
    positions,
    normals,
    count: positions.length / 3,
    height: (max[1] - min[1]) * scale,
    radius: Math.max(max[0] - min[0], max[2] - min[2]) * scale * 0.5,
  };
}

export function diamondMesh(c) {
  return { positions: c.pos, normals: c.normal, count: c.tris * 3, height: c.height, radius: c.radius };
}

export function sphereMesh() {
  const radius = 0.205;
  const stacks = 28;
  const slices = 48;
  const positions = [];
  const normals = [];
  const point = (i, j) => {
    const theta = (i / stacks) * Math.PI;
    const phi = (j / slices) * Math.PI * 2;
    const n = [Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi)];
    return { p: [radius * n[0], -radius + radius * n[1], radius * n[2]], n };
  };
  for (let i = 0; i < stacks; i++) for (let j = 0; j < slices; j++) {
    const a = point(i, j), b = point(i + 1, j), c = point(i + 1, j + 1), d = point(i, j + 1);
    for (const vertex of [a, c, b, a, d, c]) {
      positions.push(...vertex.p);
      normals.push(...vertex.n);
    }
  }
  return { positions: new Float32Array(positions), normals: new Float32Array(normals), count: positions.length / 3, height: radius * 2, radius };
}

export function donutMesh() {
  const major = 0.082;
  const tube = 0.043;
  const around = 56;
  const section = 20;
  const positions = [];
  const normals = [];
  const point = (u, v) => {
    const cu = Math.cos(u), su = Math.sin(u), cv = Math.cos(v), sv = Math.sin(v);
    return [
      (major + tube * cv) * cu,
      -0.086 + (major + tube * cv) * su,
      tube * sv,
    ];
  };
  for (let i = 0; i < around; i++) for (let j = 0; j < section; j++) {
    const a = (i / around) * Math.PI * 2, b = ((i + 1) / around) * Math.PI * 2;
    const c = (j / section) * Math.PI * 2, d = ((j + 1) / section) * Math.PI * 2;
    const verts = [point(a, c), point(b, c), point(b, d), point(a, c), point(b, d), point(a, d)];
    for (const p of verts) {
      positions.push(...p);
      const u = Math.atan2(p[1] + 0.086, p[0]);
      const radial = Math.hypot(p[0], p[1] + 0.086) - major;
      const n = [Math.cos(u) * radial, Math.sin(u) * radial, p[2]];
      const len = Math.hypot(...n) || 1;
      normals.push(n[0] / len, n[1] / len, n[2] / len);
    }
  }
  return { positions: new Float32Array(positions), normals: new Float32Array(normals), count: positions.length / 3, height: 0.258, radius: 0.125 };
}
