
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';

/* ---------- helpers ---------- */
const mul=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x)),lerp=(a,b,t)=>a+(b-a)*t,sm=(a,b,x)=>{x=clamp((x-a)/(b-a),0,1);return x*x*(3-2*x)};
const cv=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return[c,c.getContext('2d')]};
const tex=(c,rep)=>{const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;if(rep){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep[0],rep[1])}return t};

/* ---------- settings (all driven from the control panel) ---------- */
const cfg={openTime:3.2,spread:1,lean:0,rattle:true,wind:true,windAmt:1,vib:1,ripple:1,roam:true,speed:.55,turn:.8,pause:2.5,radius:5,stride:1,clickWalk:true,gaze:true,gazeSpeed:1,follow:true,autoRot:false,rotSpeed:.5,blur:.07,exposure:1.08,grassWind:1,grassH:1,pickFeathers:false,headWave:1};
/* ---------- renderer / scene ---------- */
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);
const scene=new THREE.Scene();

const pm=new THREE.PMREMGenerator(renderer);
scene.environment=pm.fromScene(new RoomEnvironment(),.04).texture;
scene.environmentIntensity=.55;renderer.toneMappingExposure=1.08;
// 360° forest photo: sky-dome background (slightly blurred, like depth of field) + image-based lighting from the same photo
new THREE.TextureLoader().load('data:image/jpeg;base64,'+document.getElementById('pano').textContent.trim(),tx=>{
 tx.mapping=THREE.EquirectangularReflectionMapping;tx.colorSpace=THREE.SRGBColorSpace;
 scene.background=tx;scene.backgroundBlurriness=cfg.blur;scene.environment=pm.fromEquirectangular(tx).texture});

// soft forest bokeh backdrop
{const[c,g]=cv(1024,512),r=mul(3),gr=g.createLinearGradient(0,0,0,512);gr.addColorStop(0,'#06170f');gr.addColorStop(.5,'#10301e');gr.addColorStop(1,'#1c4a2a');g.fillStyle=gr;g.fillRect(0,0,1024,512);
 try{g.filter='blur(9px)'}catch(e){}
 for(let i=0;i<16;i++){g.fillStyle=`rgba(4,16,9,${.25+r()*.3})`;g.fillRect(r()*1024,0,12+r()*40,512)}
 try{g.filter='blur(1.5px)'}catch(e){}
 g.globalCompositeOperation='lighter';
 for(let i=0;i<110;i++){const x=r()*1024,y=r()*430,R=7+r()*r()*60,a=.03+r()*.12,cc=r()>.5?'150,225,100':r()>.5?'210,230,120':'70,170,110',rg=g.createRadialGradient(x,y,R*.6,x,y,R);
  rg.addColorStop(0,`rgba(${cc},${a*.7})`);rg.addColorStop(.85,`rgba(${cc},${a})`);rg.addColorStop(1,`rgba(${cc},0)`);g.fillStyle=rg;g.beginPath();g.arc(x,y,R,0,6.2832);g.fill()}
 g.globalCompositeOperation='source-over';try{g.filter='none'}catch(e){}
 const v=g.createRadialGradient(512,250,120,512,250,620);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,6,3,.7)');g.fillStyle=v;g.fillRect(0,0,1024,512);
 scene.background=tex(c)}

const camera=new THREE.PerspectiveCamera(40,innerWidth/innerHeight,.1,120);
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;controls.dampingFactor=.07;controls.minDistance=2;controls.maxDistance=30;controls.maxPolarAngle=Math.PI*.495;controls.zoomSpeed=.8;

/* lights */
scene.add(new THREE.HemisphereLight(0xa8ffcc,0x3a2a1a,.4));
const key=new THREE.DirectionalLight(0xfff0d2,2.6);key.position.set(6,11,8);key.castShadow=true;
key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40});key.shadow.bias=-.0004;key.shadow.normalBias=.02;scene.add(key);
const fill=new THREE.DirectionalLight(0x7fd8ff,.9);fill.position.set(-9,4,5);scene.add(fill);
const rim=new THREE.DirectionalLight(0xbfffe8,2.0);rim.position.set(-3,6,-10);scene.add(rim);
const rim2=new THREE.DirectionalLight(0xffe9a8,1.1);rim2.position.set(8,5,-8);scene.add(rim2);

/* ground, contact shadow, trees (instanced) */
/* ---------- round platform with real instanced grass (wind-swayed, parts around the bird) ---------- */
const PR=18,gU={uTime:{value:0},uBird:{value:new THREE.Vector3()},uGW:{value:1}};
{const mk=(w,h,fn)=>{const[c,g]=cv(w,h);fn(g,mul(13));return c};
 const soil=tex(mk(512,128,(g,r)=>{g.fillStyle='#4a3622';g.fillRect(0,0,512,128);for(let i=0;i<900;i++){g.fillStyle=`hsla(${22+r()*12},${25+r()*20}%,${12+r()*22}%,.55)`;g.fillRect(r()*512,r()*128,4+r()*26,1+r()*3)}for(let y=0;y<128;y+=18){g.fillStyle='rgba(0,0,0,.18)';g.fillRect(0,y,512,2)}}),[8,1]);
 const turf=tex(mk(256,256,(g,r)=>{g.fillStyle='#16300f';g.fillRect(0,0,256,256);for(let i=0;i<4000;i++){g.strokeStyle=`hsla(${85+r()*40},55%,${12+r()*16}%,.7)`;const x=r()*256,y=r()*256;g.beginPath();g.moveTo(x,y);g.lineTo(x+(r()-.5)*5,y-3-r()*6);g.stroke()}}),[10,10]);
 const side=new THREE.Mesh(new THREE.CylinderGeometry(PR,PR*1.03,.5,96,1,true),new THREE.MeshStandardMaterial({map:soil,roughness:1,side:THREE.DoubleSide}));side.position.y=-.25;side.castShadow=side.receiveShadow=true;
 const top=new THREE.Mesh(new THREE.CircleGeometry(PR,96),new THREE.MeshStandardMaterial({map:turf,roughness:1}));top.rotation.x=-Math.PI/2;top.receiveShadow=true;
 const bottom=new THREE.Mesh(new THREE.CircleGeometry(PR*1.03,64),new THREE.MeshBasicMaterial({color:0x1a120a}));bottom.rotation.x=Math.PI/2;bottom.position.y=-.5;
 const catcher=new THREE.Mesh(new THREE.CircleGeometry(60,48),new THREE.ShadowMaterial({opacity:.35}));catcher.rotation.x=-Math.PI/2;catcher.position.y=-.52;catcher.receiveShadow=true;
 scene.add(side,top,bottom,catcher);
 const lv=[[0,.07,.35],[.4,.055,.6],[.75,.035,.85]],pos=[],cc=[];
 for(const[y,w,b]of lv){const z=y*y*.12;pos.push(-w,y,z,w,y,z);cc.push(b,b,b,b,b,b)}pos.push(0,1,.12);cc.push(1,1,1);
 const bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));bg.setAttribute('color',new THREE.Float32BufferAttribute(cc,3));
 bg.setAttribute('normal',new THREE.Float32BufferAttribute(new Array(21).fill(0).map((_,i)=>i%3==1?1:0),3));bg.setIndex([0,1,3,0,3,2,2,3,5,2,5,4,4,5,6]);
 const gm=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.65,side:THREE.DoubleSide});
 gm.onBeforeCompile=sh=>{sh.uniforms.uTime=gU.uTime;sh.uniforms.uGW=gU.uGW;sh.uniforms.uBird=gU.uBird;
  sh.vertexShader=sh.vertexShader.replace('#include <common>','uniform float uTime,uGW;uniform vec3 uBird;\n#include <common>').replace('#include <begin_vertex>',`#include <begin_vertex>
 {vec3 b=instanceMatrix[3].xyz;float q=position.y*position.y;
  float wv=sin(uTime*1.7+b.x*.55+b.z*.45)*.6+sin(uTime*3.3+b.x*1.3-b.z*.9)*.25+sin(uTime*.6+b.z*.2)*.3;
  wv*=uGW;vec3 wo=vec3(wv*.35+.12*sin(uTime*.9+b.z),0.,wv*.18);
  vec2 dd=b.xz-uBird.xz;float pu=smoothstep(1.1,0.,length(dd));wo.xz+=normalize(dd+1e-4)*pu*.7;
  vec3 c0=instanceMatrix[0].xyz,c1=instanceMatrix[1].xyz,c2=instanceMatrix[2].xyz;
  transformed+=q*vec3(dot(wo,c0)/dot(c0,c0),dot(wo,c1)/dot(c1,c1),dot(wo,c2)/dot(c2,c2));
  transformed.y-=q*pu*.25;}`);
  sh.fragmentShader=sh.fragmentShader.replace('#include <normal_fragment_begin>','#include <normal_fragment_begin>\n normal=normalize(normal*.3+normalize((viewMatrix*vec4(0.,1.,0.,0.)).xyz)*.9);')};
 const areaScale=(PR/7.2)**2,cnt=Math.round((innerWidth<700?32000:70000)*areaScale),gr=new THREE.InstancedMesh(bg,gm,cnt),mt=new THREE.Matrix4(),qq=new THREE.Quaternion(),ee=new THREE.Euler(),col=new THREE.Color(),rr=mul(77),v3=new THREE.Vector3(),sc=new THREE.Vector3();
 for(let i=0;i<cnt;i++){const a=rr()*6.2832,d=Math.sqrt(rr())*(PR-.05),h=.16+rr()*rr()*.5,w=.8+rr()*.7;
  ee.set((rr()-.5)*.25,rr()*6.2832,(rr()-.5)*.25);qq.setFromEuler(ee);mt.compose(v3.set(Math.cos(a)*d,0,Math.sin(a)*d),qq,sc.set(w,h,w));gr.setMatrixAt(i,mt);
  gr.setColorAt(i,col.setHSL(.22+rr()*.1,.5+rr()*.25,.18+rr()*.17))}
 gr.frustumCulled=false;gU.mesh=gr;scene.add(gr)}
const aoG=new THREE.Group();
{const[c,g]=cv(128,128);const rg=g.createRadialGradient(64,64,0,64,64,64);rg.addColorStop(0,'rgba(0,0,0,.65)');rg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=rg;g.fillRect(0,0,128,128);
 const ao=new THREE.Mesh(new THREE.PlaneGeometry(6,8),new THREE.MeshBasicMaterial({map:tex(c),transparent:true,depthWrite:false}));ao.rotation.x=-Math.PI/2;ao.position.set(0,.03,-1.2);aoG.add(ao);scene.add(aoG)}


/* ---------- procedural textures ---------- */
function featherTexture(seed,sy,plain=false){
 const r=mul(seed),W=256,H=640,[c,g]=cv(W*2,H*2),cx=W/2,eyeY=H*.27;g.scale(2,2);g.lineCap='round';
 for(let y=H;y>0;y-=1.5){const t=1-y/H;if(t<(plain?.9:.46)&&r()>(plain?.5:.38))continue;
  const hue=plain?18+r()*22:80+44*Math.sin(Math.PI*Math.min(1,t*1.05))+r()*16,L=plain?20+r()*16:22+r()*26+t*10;
  for(const s of[-1,1]){const len=cx*(.72+.28*r());g.strokeStyle=`hsla(${hue},${plain?28+r()*12:55+r()*30}%,${L}%,.92)`;g.lineWidth=1.1;
   g.beginPath();g.moveTo(cx,y);g.quadraticCurveTo(cx+s*len*.5,y-4,cx+s*len,y-14-r()*12);g.stroke()}}
 if(plain){g.strokeStyle='rgba(205,190,160,.8)';g.lineWidth=2.4;g.beginPath();g.moveTo(cx,H);g.lineTo(cx,0);g.stroke();return tex(c)}
 g.save();g.translate(cx,eyeY);g.scale(1,sy);
 const e=(rx,ry,fill,dy=0)=>{g.fillStyle=fill;g.beginPath();g.ellipse(0,dy,rx,ry,0,0,6.2832);g.fill()};
 e(124,150,'#5f8a22');e(116,142,'#d2cb4c');e(109,135,'#bcd48a');e(103,129,'#7aa33a');
 const br=g.createRadialGradient(0,20,10,0,0,130);br.addColorStop(0,'#f58f30');br.addColorStop(1,'#b4521a');e(86,108,br);
 e(60,60,'#17c4e6',-16);e(52,50,'#2288e0',-14);e(42,40,'#1b3fb3',-12);e(30,28,'#0b1470',-14);
 g.fillStyle='#17c4e6';g.beginPath();g.moveTo(-17,32);g.lineTo(0,-2);g.lineTo(17,32);g.closePath();g.fill();
 g.beginPath();g.ellipse(0,-16,124,150,0,0,6.2832);g.restore();g.save();g.translate(cx,eyeY);g.scale(1,sy);
 g.beginPath();g.ellipse(0,0,124,150,0,0,6.2832);g.clip();
 for(let y=-150;y<150;y+=2.2){for(const s of[-1,1]){g.strokeStyle='rgba(0,0,0,.14)';g.lineWidth=1;g.beginPath();g.moveTo(0,y);g.lineTo(s*126,y-14);g.stroke();
   g.strokeStyle='rgba(255,255,255,.07)';g.beginPath();g.moveTo(0,y+1.2);g.lineTo(s*126,y-12.8);g.stroke()}}
 g.restore();
 g.strokeStyle='rgba(215,190,130,.75)';g.lineWidth=2.4;g.beginPath();g.moveTo(cx,H);g.lineTo(cx,0);g.stroke();
 return tex(c)}

function skinTex(base,hi,rep,rs=6){const[c,g]=cv(256,256);g.fillStyle=base;g.fillRect(0,0,256,256);const r=mul(7);g.lineWidth=1.4;
 for(let y=0;y<256;y+=rs)for(let x=(y/rs%2)*rs;x<256;x+=rs*2){g.strokeStyle=hi;g.globalAlpha=.2+r()*.4;g.beginPath();g.arc(x,y,rs*1.1,.2,Math.PI-.2);g.stroke()}
 return tex(c,rep)}
function wingTex(){const[c,g]=cv(256,256),r=mul(9);g.fillStyle='#c9b48e';g.fillRect(0,0,256,256);
 for(let y=0;y<256;y+=10){g.strokeStyle=r()>.3?'#2b1b0e':'#6b4a26';g.lineWidth=2+r()*2.5;g.globalAlpha=.85;g.beginPath();for(let x=0;x<=256;x+=8)g.lineTo(x,y+Math.sin(x*.09+y)*3);g.stroke()}
 g.globalAlpha=.25;for(let i=0;i<1800;i++){g.fillStyle=r()>.5?'#fff2cf':'#1b1208';g.fillRect(r()*256,r()*256,1,5)}return tex(c,[2,2])}

/* ---------- curved feather geometry ---------- */
function featherGeo(len,wid,bend){
 const g=new THREE.PlaneGeometry(1,1,6,26),p=g.attributes.position,n=p.count,X=new Float32Array(n),T=new Float32Array(n);
 for(let i=0;i<n;i++){const u=p.getX(i),t=p.getY(i)+.5,w=(.2+.8*sm(.42,.78,t))*(1-.4*sm(.93,1,t));X[i]=u*wid*w;T[i]=t;p.setXYZ(i,X[i],t*len,-bend*t*t*len)}
 g.userData={X,T,len,bend,c:0};g.computeVertexNormals();g.computeBoundingSphere();return g}
/* closed tail: each feather arcs from the body's down-slope to lie along the ground (c=1 closed, 0 open); CPU-side so raycasting matches */
function bendGeo(g,c){const d=g.userData;if(Math.abs(c-d.c)<.004)return;d.c=c;const p=g.attributes.position,ph=Math.max(c*.5,1e-4),R=d.len/ph;
 for(let i=0;i<p.count;i++){const t=d.T[i],a=ph*t;p.setXYZ(i,d.X[i],R*Math.sin(a),R*(1-Math.cos(a))-d.bend*t*t*d.len*(1-c))}
 p.needsUpdate=true;g.computeVertexNormals();g.computeBoundingSphere()}

/* view-dependent structural-colour shift: blues turn teal/green at grazing angles */
function shimmer(m,k,a='map_fragment'){m.onBeforeCompile=sh=>{sh.fragmentShader=sh.fragmentShader.replace(`#include <${a}>`,`#include <${a}>
 {float fr=1.-abs(dot(normalize(vNormal),normalize(vViewPosition)));diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.gbr*vec3(1.,1.15,1.25),smoothstep(.25,.95,fr)*${k.toFixed(2)});}`)}}
/* tip flex: the outer part of the feather bends (lags) with the feather's own motion */
function flexPatch(m,u){const p=m.onBeforeCompile||(()=>{});m.onBeforeCompile=sh=>{p(sh);Object.assign(sh.uniforms,u);
 sh.vertexShader=sh.vertexShader.replace('#include <common>','uniform float uFx,uFz,uLen;\n#include <common>').replace('#include <begin_vertex>',`#include <begin_vertex>
 {float q=clamp(position.y/uLen,0.,1.);q*=q;transformed.x+=uFx*q;transformed.z+=uFz*q;}`)}}
/* ---------- Feather: own pivot, geometry, material, interaction ---------- */
const BASE=new THREE.Vector3(0,.99,-.55);
class Feather{
 constructor(o,tex_,depth){
  Object.assign(this,o);this.h=0;this.hT=0;this.k=0;this.kT=0;this.ph=Math.random()*6.283;
  this.pivot=new THREE.Group();this.pivot.position.copy(BASE);
  this.geo=featherGeo(o.len,o.wid,.1);
  this.mat=new THREE.MeshPhysicalMaterial({map:tex_,bumpMap:tex_,bumpScale:.8,alphaTest:.45,side:THREE.DoubleSide,roughness:.42,metalness:.3,iridescence:.75,iridescenceIOR:1.7,iridescenceThicknessRange:[150,520],emissive:0xffffff,emissiveMap:tex_,emissiveIntensity:.04,envMapIntensity:1});
  shimmer(this.mat,.5);this.u={uFx:{value:0},uFz:{value:0},uLen:{value:o.len}};this.ox=this.oy=this.vx=this.vy=0;this.nb=[];flexPatch(this.mat,this.u);this.mesh=new THREE.Mesh(this.geo,this.mat);this.mesh.castShadow=true;this.mesh.customDepthMaterial=depth;this.mesh.position.z=o.layer;this.mesh.userData.f=this;
  this.glow=new THREE.Mesh(this.geo,new THREE.MeshBasicMaterial({map:tex_,color:0x74fff0,transparent:true,opacity:0,alphaTest:.3,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide,fog:false}));
  flexPatch(this.glow.material,this.u);this.glow.scale.set(1.14,1.015,1);this.glow.position.z=o.layer+.004;this.glow.raycast=()=>{};this.glow.renderOrder=2;
  this.pivot.add(this.mesh,this.glow);
 }
 kick(a,b){this.vx+=a*4*cfg.ripple;this.vy+=b*3*cfg.ripple}
 update(dt,t,open,wind){
  let p=clamp(open*1.5-this.d*.5,0,1);p=p*p*(3-2*p);bendGeo(this.geo,1-p);          // centre feathers lead
  const e1=1-Math.exp(-dt*9),e2=1-Math.exp(-dt*6);
  this.h+=(this.hT-this.h)*e1;this.k+=(this.kT-this.k)*e2;
  {const nb=this.nb,n=nb.length||1,ax=nb.reduce((a,f)=>a+f.ox,0)/n,ay=nb.reduce((a,f)=>a+f.oy,0)/n;
   this.vx+=(-70*this.ox-5.5*this.vx+34*(ax-this.ox))*dt;this.vy+=(-70*this.oy-5.5*this.vy+34*(ay-this.oy))*dt;
   this.ox+=this.vx*dt;this.oy+=this.vy*dt;
   this.u.uFx.value=clamp(-this.vx*.07-this.ox*.5,-.5,.5);this.u.uFz.value=clamp(-this.vy*.09-this.oy*.6,-.5,.5)}
  const sway=Math.sin(t*1.1+this.ph)*.014+Math.sin(t*.63+this.ph*2.3)*.01,vib=Math.sin(t*17+this.ph*5)*.0035*cfg.vib;
  const ang=this.ox+lerp(this.cA,this.oA*cfg.spread,p)+(sway+vib*p)*wind*(.4+p)+this.jit*p+Math.sin(t*26+this.ph*3)*.007*(this.shiv||0)*p+Math.sign(this.oA||1)*this.k*.04;
  const tilt=this.oy+lerp(this.cT,this.oT+cfg.lean,p)+(Math.sin(t*.9+this.ph*1.7)*.016+vib)*wind*(.3+p)+this.h*.05+this.k*.22;
  this.pivot.rotation.set(tilt,0,ang,'ZXY');
  this.mesh.scale.setScalar(1+this.k*.05+this.h*.015);
  const pulse=.7+.3*Math.sin(t*3+this.ph);
  this.mat.emissiveIntensity=.04+.5*this.h+.55*this.k*pulse;
  this.glow.material.opacity=.5*this.h+.35*this.k*pulse;
  this.glow.visible=this.glow.material.opacity>.01;
 }
}

/* ---------- Peacock ---------- */
class Peacock{
 constructor(){
  this.root=new THREE.Group();scene.add(this.root);this.feathers=[];this.meshes=[];
  this.buildTail();this.buildBody();this.root.traverse(o=>{if(o.isMesh&&!o.userData.f&&o.material&&!o.customDepthMaterial)o.castShadow=true});
  this.cw=0;this.cv=0;this.pvx=0;this.uCw={value:new THREE.Vector2()};this.hd=0;this.spd=0;this.ph=0;this.amp=0;this.st='idle';this.stT=1.2;this.wp=new THREE.Vector3();this.uPh={value:0};this.uAm={value:0};this.lookY=0;this.lookT=0;this.lookTime=2;this.blinkTime=3;this.blink=-1;
 }
 buildTail(){
  const texes=[1,2,3,4].map(s=>featherTexture(s*17,.595)),depths=texes.map(t=>new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:t,alphaTest:.45,side:THREE.DoubleSide}));
  const rows=[{n:25,len:3.8,wid:.9,span:1.45,oT:-.2,cT:-2.06,layer:0},{n:22,len:3.45,wid:.82,span:1.36,oT:-.13,cT:-2.05,layer:.035},{n:19,len:3.1,wid:.74,span:1.25,oT:-.06,cT:-2.04,layer:.07},{n:15,len:2.75,wid:.66,span:1.1,oT:.01,cT:-2.03,layer:.105}];
  const r=mul(21);
  rows.forEach((row,ri)=>{const rf=[];for(let i=0;i<row.n;i++){
   const oA=(i/(row.n-1)-.5)*2*row.span,v=(r()*4)|0;
   const f=new Feather({len:row.len,wid:row.wid,oA,oT:row.oT+(r()-.5)*.03,cA:oA*.07+(r()-.5)*.02,cT:row.cT+(r()-.5)*.05,d:Math.abs(oA)/1.42,jit:(r()-.5)*.03,layer:row.layer+i*.002},texes[v],depths[v]);
   this.root.add(f.pivot);this.feathers.push(f);this.meshes.push(f.mesh);rf.push(f)}rf.forEach((f,i)=>{f.nb=[rf[i-1],rf[i+1]].filter(Boolean)})});
  // plain brown support feathers behind the eyed train
  const pT=[5,6].map(q=>featherTexture(q*13,.4717,true)),pD=pT.map(t=>new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:t,alphaTest:.45,side:THREE.DoubleSide}));
  for(let i=0;i<23;i++){const oA=(i/22-.5)*3,v=i&1,f=new Feather({len:3.9,wid:.62,oA,oT:-.26,cA:oA*.07,cT:-2.07,d:Math.abs(oA)/1.5,jit:(r()-.5)*.04,layer:-.12-i*.002},pT[v],pD[v]);this.root.add(f.pivot);this.feathers.push(f);this.meshes.push(f.mesh)}
 }
 buildBody(){return this.loadModel().catch(e=>console.error('model load failed',e))}
 async loadModel(){
  const bin=Uint8Array.from(atob(document.getElementById('pm').textContent.trim()),c=>c.charCodeAt(0));
  const buf=await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('deflate'))).arrayBuffer();
  const dv=new DataView(buf),n=dv.getUint32(0,true),m=dv.getUint32(4,true),bb=new Float32Array(buf,8,6);
  let o=32;const q=new Uint16Array(buf,o,n*3);o+=6*n;const nr=new Int8Array(buf,o,n*3);o+=3*n;const cl=new Uint8Array(buf,o,n*3);o+=3*n;o=(o+3)&~3;const ix=new Uint32Array(buf,o,m*3);
  const pos=new Float32Array(n*3),nrm=new Float32Array(n*3),col=new Float32Array(n*3),lut=Float32Array.from({length:256},(_,i)=>Math.pow((i/255+.055)/1.055,2.4));
  for(let i=0;i<n*3;i++){const k=i%3;pos[i]=bb[k]+q[i]/65535*(bb[k+3]-bb[k]);nrm[i]=nr[i]/127;col[i]=lut[cl[i]]}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('normal',new THREE.BufferAttribute(nrm,3));g.setAttribute('color',new THREE.BufferAttribute(col,3));g.setIndex(new THREE.BufferAttribute(ix,1));g.computeBoundingSphere();
  const mat=new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.52,metalness:.08,clearcoat:.25,clearcoatRoughness:.35,side:THREE.DoubleSide,envMapIntensity:.9});
  shimmer(mat,.3,'color_fragment');const sh0=mat.onBeforeCompile;this.uL={value:0};this.uN={value:0};
  mat.onBeforeCompile=sh=>{sh0(sh);sh.uniforms.uLook=this.uL;
   sh.uniforms.uNod=this.uN;sh.uniforms.uPh=this.uPh;sh.uniforms.uAm=this.uAm;sh.uniforms.uCw=this.uCw;
   sh.vertexShader=sh.vertexShader.replace('#include <common>',`uniform float uLook,uNod,uPh,uAm;uniform vec2 uCw;
vec3 hrot(vec3 p,vec3 pv,float wy,float wp){p-=pv;float a=uLook*wy,c=cos(a),s=sin(a);p=vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);float b=uNod*wp,d=cos(b),e=sin(b);p=vec3(p.x,d*p.y-e*p.z,e*p.y+d*p.z);return p+pv;}
#include <common>`).replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
 objectNormal=hrot(objectNormal,vec3(0.),smoothstep(.3,.58,position.y),smoothstep(.45,.6,position.y));`).replace('#include <begin_vertex>',`#include <begin_vertex>
 transformed=hrot(transformed,vec3(0.,.5,.41),smoothstep(.3,.58,position.y),smoothstep(.45,.6,position.y));
 {float wc=smoothstep(.655,.715,position.y);wc*=wc;transformed.xz+=uCw*.06*wc;transformed.y-=length(uCw)*.012*wc;}
 {float lw=1.-smoothstep(.05,.24,position.y),sg=position.x>0.?1.:-1.,ph=uPh+(sg>0.?3.14159:0.);transformed.z+=sin(ph)*uAm*.05*lw;transformed.y+=max(0.,cos(ph))*uAm*.028*lw;}`)};
  this.model=new THREE.Group();this.model.scale.setScalar(4);this.model.position.set(0,0,-.5);
  const mesh=new THREE.Mesh(g,mat);mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;this.model.add(mesh);this.root.add(this.model);
  // small hub hidden by the feather roots (the body mesh itself now tapers into the tail axis: no cap, no bump)
  const hub=new THREE.Mesh(new THREE.SphereGeometry(1,16,12),new THREE.MeshStandardMaterial({color:0x1d5a3a,roughness:.6}));hub.scale.set(.14,.12,.2);hub.position.copy(BASE);this.root.add(hub);
 }
 walk(dt){
  const R=this.root,P=R.position;this.stT-=dt;
  if(this.st==='idle'&&this.stT<0&&cfg.roam){const a=Math.random()*6.2832,d=Math.sqrt(Math.random())*cfg.radius;this.wp.set(Math.cos(a)*d,0,Math.sin(a)*d);if(this.wp.distanceTo(P)<1.8)this.wp.sub(P).setLength(2.4).add(P);this.st='walk'}
  let want=0,turn=0;
  if(this.st==='walk'&&!cfg.roam&&!this.man){this.st='idle';this.stT=0}   // roaming switched off: cancel the wander, stand still
  if(this.st==='walk'){const dx=this.wp.x-P.x,dz=this.wp.z-P.z,dist=Math.hypot(dx,dz);let err=Math.atan2(dx,dz)-this.hd;err=Math.atan2(Math.sin(err),Math.cos(err));
   this.hd+=clamp(err,-cfg.turn*dt,cfg.turn*dt);turn=Math.abs(err)>.05?.4:0;want=Math.abs(err)<.5?clamp(dist/1.2,.35,1):0;
   if(dist<.2){this.st='idle';this.man=false;this.stT=cfg.pause*(.5+Math.random())}}
  this.spd+=(want*cfg.speed-this.spd)*(1-Math.exp(-dt*(want>0?3:9)));
  P.x+=Math.sin(this.hd)*this.spd*dt;P.z+=Math.cos(this.hd)*this.spd*dt;const r=Math.hypot(P.x,P.z);if(r>6){P.x*=6/r;P.z*=6/r}
  const tg=this.spd<.05?turn:0;this.amp+=(clamp(this.spd/.95+tg,0,1)-this.amp)*(1-Math.exp(-dt*5));
  this.ph+=dt*(6.8*this.spd/.95+3.2*tg);
  R.rotation.y=this.hd;P.y=(1-Math.cos(this.ph*2))*.012*this.amp;
  this.uPh.value=this.ph;this.uAm.value=this.amp*cfg.stride;if(this.model)this.model.rotation.z=Math.sin(this.ph)*.025*this.amp;
 }
 goTo(v){this.wp.copy(v);this.wp.y=0;this.st='walk';this.man=true}
 update(dt,t,open,wind){
  this.walk(dt);
  this.shT=(this.shT||0)-dt;if(open>=1&&cfg.rattle&&this.shT<0){this.shT=6+Math.random()*5;this.shiv=1;for(const f of this.feathers)f.kick((Math.random()-.5)*.3,(Math.random()-.5)*.2)}
  this.shiv=Math.max(0,(this.shiv||0)-dt*.5);
  for(const f of this.feathers){f.shiv=this.shiv;f.update(dt,t,open,wind)}
  if(!this.model)return;
  const br=Math.sin(t*1.7);this.model.scale.set(4,4*(1+.01*br),4*(1+.004*br));
  this.lookTime-=dt;if(this.lookTime<0){this.lookT=(Math.random()-.5)*1.1;this.lookTime=3+Math.random()*4}
  {let over=0,raw=0;                                       // cursor over the head? its sideways speed drives a spring-damped crest sway
   if(performance.now()-gz.t<5000){gv.set(gz.x,gz.y,.5).unproject(camera).sub(camera.position).normalize();
    const sh=Math.sin(this.hd),ch=Math.cos(this.hd);HS.center.set(this.root.position.x+1.2*sh,2.62,this.root.position.z+1.2*ch);HR.origin.copy(camera.position);HR.direction.copy(gv);over=HR.intersectsSphere(HS)?1:0;
    raw=this.pgx===undefined?0:clamp((gz.x-this.pgx)/Math.max(dt,1e-3),-5,5)}
   this.pgx=gz.x;this.pvx+=(raw-this.pvx)*(1-Math.exp(-dt*10));
   const fo=over*this.pvx*4*cfg.headWave+Math.sin(t*1.7)*.35;this.cv+=(-24*this.cw-4.5*this.cv+fo)*dt;this.cw=clamp(this.cw+this.cv*dt,-1.4,1.4);
   camera.updateMatrixWorld();const rg=gq.setFromMatrixColumn(camera.matrixWorld,0),h1=Math.sin(this.hd),h2=Math.cos(this.hd);
   this.uCw.value.set(this.cw*(rg.x*h2-rg.z*h1),this.cw*(rg.x*h1+rg.z*h2))}
  let ty=this.lookT,tn=Math.sin(t*.5)*.05;
  if(cfg.gaze&&performance.now()-gz.t<5000){                       // follow the cursor while it is active
   gv.set(gz.x,gz.y,.5).unproject(camera).sub(camera.position).normalize();
   const sh=Math.sin(this.hd),ch=Math.cos(this.hd);HEAD.set(this.root.position.x+1.22*sh,2.52,this.root.position.z+1.22*ch);
   const dist=camera.position.distanceTo(HEAD)*.8,T=gq.copy(camera.position).addScaledVector(gv,dist).sub(HEAD),lx=T.x*ch-T.z*sh,lz=T.x*sh+T.z*ch;
   ty=clamp(Math.atan2(lx,Math.max(lz,1e-4)),-1.05,1.05);tn=-clamp(Math.atan2(T.y,Math.hypot(lx,lz))*.8,-.4,.45)}
  const gs=cfg.gazeSpeed,ease=1-Math.exp(-dt*2*gs),stepY=clamp((ty-this.lookY)*ease,-1.1*dt*gs,1.1*dt*gs),stepN=clamp((tn-(this.nod||0))*ease,-.7*dt*gs,.7*dt*gs); // eased + speed-limited = slow, natural
  this.lookY+=stepY;this.nod=(this.nod||0)+stepN;
  this.uL.value=this.lookY;this.uN.value=this.nod;
 }
}
const gz={x:0,y:0,t:-1e9},gv=new THREE.Vector3(),gq=new THREE.Vector3(),HEAD=new THREE.Vector3(0,2.52,1.22),HS=new THREE.Sphere(new THREE.Vector3(),.5),HR=new THREE.Ray();
addEventListener('pointermove',e=>{gz.x=e.clientX/innerWidth*2-1;gz.y=-(e.clientY/innerHeight)*2+1;gz.t=performance.now()});
const peacock=new Peacock();

/* ---------- state, framing, UI ---------- */
let open=0,target=0,auto=true,autoT=0,windOn=true,windAmt=1,lastState='';
const view={t:new THREE.Vector3(),d:10,time:0},tanH=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
const fit=v=>{const a=camera.aspect,hh=lerp(2.7,3.4,v),hw=lerp(2.4,4.3,v);return Math.max(hh/tanH,hw/(tanH*a))*1.2};
const frame=(v,time=3)=>{{const rp=peacock.root.position;view.t.set(rp.x-Math.sin(peacock.hd)*.7,lerp(1.7,2.3,v),rp.z-Math.cos(peacock.hd)*.7)}view.d=fit(v);view.time=time};
const dirHome=new THREE.Vector3(-.5,.3,.81).normalize();
function home(){frame(target,0);controls.target.copy(view.t);camera.position.copy(view.t).addScaledVector(dirHome,view.d);controls.update()}
home();controls.addEventListener('start',()=>view.time=0);

const $=id=>document.getElementById(id),stEl=$('state'),stTx=$('stateText');
/* ---------- control panel ---------- */
const refs=[],DEF=JSON.parse(JSON.stringify(cfg)),el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function applyCfg(){scene.backgroundBlurriness=cfg.blur;renderer.toneMappingExposure=cfg.exposure;controls.autoRotate=cfg.autoRot;controls.autoRotateSpeed=cfg.rotSpeed*2;gU.uGW.value=cfg.grassWind;if(gU.mesh)gU.mesh.scale.y=cfg.grassH;if(!cfg.pickFeathers)for(const f of peacock.feathers){f.kT=0;f.hT=0}}
const sld=(label,key,min,max,step,dec=2)=>{const w=el('label','sl'),f=el('i'),out=el('output'),inp=el('input');w.append(f,el('span','',label),out,inp);Object.assign(inp,{type:'range',min,max,step});
 const sync=()=>{inp.value=cfg[key];out.textContent=(+cfg[key]).toFixed(dec);f.style.width=(cfg[key]-min)/(max-min)*100+'%'};inp.oninput=()=>{cfg[key]=+inp.value;sync();applyCfg()};refs.push(sync);sync();return w};
const tgl=(label,key)=>{const b=el('button','tg',`<span>${label}</span><i></i>`);b.type='button';const sync=()=>{b.classList.toggle('on',!!cfg[key]);b.setAttribute('aria-pressed',!!cfg[key])};b.onclick=()=>{cfg[key]=!cfg[key];sync();applyCfg()};refs.push(sync);sync();return b};
const btn=(label,id,fn,c='')=>{const b=el('button','btn '+c,label);b.type='button';if(id)b.id=id;if(fn)b.onclick=fn;return b};
const sec=(title,rows,open=true)=>{const d=el('div','sec'),h=el('button','sh',`<span>${title}</span><b>⌄</b>`),c=el('div','sb');c.append(...rows);h.type='button';h.onclick=()=>d.classList.toggle('shut');if(!open)d.classList.add('shut');d.append(h,c);return d};
{const panel=$('panel'),gear=$('gear'),body=el('div'),head=el('header','','<b>Settings</b><small>Peacock &amp; scene</small>'),acts=el('div','acts');body.id='pbody';
 const setOpen=o=>{panel.classList.toggle('open',o);gear.classList.toggle('open',o);gear.setAttribute('aria-expanded',o)};
 gear.onclick=()=>setOpen(!panel.classList.contains('open'));addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
 acts.append(btn('Open feathers','bOpen'),btn('Close feathers','bClose'),btn('Auto display','bAuto'),btn('Reset','bReset'));
 body.append(acts,
  sec('Tail',[sld('Open time (s)','openTime',1,8,.1,1),sld('Fan spread','spread',.6,1.15,.01),sld('Fan lean','lean',-.3,.3,.01),tgl('Auto rattle','rattle')]),
  sec('Feather motion',[tgl('Wind','wind'),sld('Wind strength','windAmt',0,2.5,.05),sld('Vibration','vib',0,3,.05),sld('Touch ripple','ripple',0,2.5,.05),tgl('Pick feathers (click)','pickFeathers')]),
  sec('Movement',[tgl('Roam around','roam'),sld('Walk speed','speed',.3,1.8,.05),sld('Turn speed','turn',.4,3,.05),sld('Pause (s)','pause',.3,8,.1,1),sld('Roam radius','radius',1,5.5,.1,1),sld('Stride','stride',.4,1.6,.05),tgl('Click grass to walk','clickWalk'),btn('Walk somewhere now',null,()=>{const a=Math.random()*6.2832,d=Math.sqrt(Math.random())*cfg.radius;peacock.goTo(new THREE.Vector3(Math.cos(a)*d,0,Math.sin(a)*d))},'wide')]),
  sec('Head',[tgl('Look at cursor','gaze'),sld('Look speed','gazeSpeed',.3,3,.05),sld('Head wave','headWave',0,2.5,.05)]),
  sec('Camera',[tgl('Follow the bird','follow'),tgl('Auto-rotate','autoRot'),sld('Rotate speed','rotSpeed',.1,3,.05)],false),
  sec('Scene',[sld('Background blur','blur',0,.4,.01),sld('Exposure','exposure',.5,1.8,.01),sld('Grass wind','grassWind',0,3,.05),sld('Grass height','grassH',.5,1.8,.05)],false),
  btn('Reset settings',null,()=>{Object.assign(cfg,DEF);refs.forEach(f=>f());applyCfg()},'wide'),
  el('div','foot','Drag to orbit · scroll to zoom<br>Wave the cursor over the head to sway the crest<br>Click the grass to send the peacock there'));
 panel.append(head,body);setOpen(false);applyCfg()}
function setTarget(v){target=v;frame(v)}
function setState(){const s=open<=0&&target===0?'Closed':open>=1&&target===1?'Fully Open':target===1?'Opening':'Closing';
 if(s!==lastState){lastState=s;stTx.textContent=s;stEl.classList.toggle('moving',s==='Opening'||s==='Closing');autoT=0}}
const setTog=(b,on)=>{b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)};
setTog($('bAuto'),auto);
$('bOpen').onclick=()=>{auto=false;setTog($('bAuto'),false);setTarget(1)};
$('bClose').onclick=()=>{auto=false;setTog($('bAuto'),false);setTarget(0)};
$('bAuto').onclick=e=>{auto=!auto;setTog(e.currentTarget,auto);autoT=0};

$('bReset').onclick=()=>{auto=false;setTog($('bAuto'),false);cfg.wind=true;refs.forEach(f=>f());target=0;for(const f of peacock.feathers)f.kT=0;frame(0);
 view.time=3;const off=dirHome.clone().multiplyScalar(view.d);camera.position.copy(view.t).add(off)};

/* ---------- raycasting (per-feather) ---------- */
const ray=new THREE.Raycaster(),ptr=new THREE.Vector2();let ptrDirty=false,hover=null,down=null;
const pick=()=>{ray.setFromCamera(ptr,camera);const h=ray.intersectObjects(peacock.meshes,false);return h.length?h[0].object.userData.f:null};
const setPtr=e=>{const r=renderer.domElement.getBoundingClientRect();ptr.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1)};
const cvs=renderer.domElement;
const gPlane=new THREE.Plane(new THREE.Vector3(0,1,0),0),gHit=new THREE.Vector3();let ptrDx=0;cvs.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||e.buttons)return;ptrDx=e.movementX||ptrDx*.5;setPtr(e);ptrDirty=true});
cvs.addEventListener('pointerleave',()=>{if(hover)hover.hT=0;hover=null;cvs.style.cursor=''});
cvs.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,t:performance.now()}});
cvs.addEventListener('pointerup',e=>{if(!down)return;const moved=Math.hypot(e.clientX-down.x,e.clientY-down.y),dt=performance.now()-down.t;down=null;
 if(moved<6&&dt<500){setPtr(e);const f=pick();if(f){if(cfg.pickFeathers){f.kT=f.kT?0:1;f.kick(.5,.7)}}else if(cfg.clickWalk){ray.setFromCamera(ptr,camera);if(ray.ray.intersectPlane(gPlane,gHit)&&Math.hypot(gHit.x,gHit.z)<6)peacock.goTo(gHit)}}});
cvs.addEventListener('dblclick',e=>{setPtr(e);const f=pick();if(f&&cfg.pickFeathers){f.mesh.updateWorldMatrix(true,false);view.t.copy(f.mesh.localToWorld(new THREE.Vector3(0,f.len*.73,0)));view.d=3.4;view.time=3}});

/* ---------- main loop ---------- */
const clock=new THREE.Clock(),lastRP=new THREE.Vector3();
function loop(){
 requestAnimationFrame(loop);
 const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
 if(open!==target){open+=(target>open?1:-1)*dt/cfg.openTime;if((target>open)===(target<open)||Math.abs(open-target)<.0005)open=target;open=clamp(open,0,1)}
 setState();
 if(auto&&(lastState==='Closed'||lastState==='Fully Open')){autoT+=dt;if(autoT>(lastState==='Closed'?1.4:3.4))setTarget(target?0:1)}
 windAmt+=((cfg.wind?1:0)-windAmt)*(1-Math.exp(-dt*2));
 if(ptrDirty){ptrDirty=false;const f=pick();if(f!==hover){if(hover)hover.hT=0;if(f){if(cfg.pickFeathers)f.hT=1;f.kick(clamp(ptrDx*.012,-.45,.45)||.12,.4)}hover=f;cvs.style.cursor=f&&cfg.pickFeathers?'pointer':''}}
 peacock.update(dt,t,open,windAmt*cfg.windAmt);
 {const rp=peacock.root.position,dx=rp.x-lastRP.x,dz=rp.z-lastRP.z;if(cfg.follow){controls.target.x+=dx;controls.target.z+=dz;camera.position.x+=dx;camera.position.z+=dz}lastRP.copy(rp);
  gU.uTime.value=t;gU.uBird.value.set(rp.x+Math.sin(peacock.hd)*.5,0,rp.z+Math.cos(peacock.hd)*.5);aoG.position.set(rp.x,0,rp.z);aoG.rotation.y=peacock.hd}
 if(view.time>0){view.time-=dt;const k=1-Math.exp(-dt*3);controls.target.lerp(view.t,k);
  const off=camera.position.clone().sub(controls.target),L=off.length();off.setLength(L+(view.d-L)*k);camera.position.copy(controls.target).add(off)}
 controls.update();renderer.render(scene,camera);
}
loop();

addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);frame(target,1.5)});
