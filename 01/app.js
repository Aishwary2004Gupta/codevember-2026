var qu=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};function mm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qf(){let i=gr("canvas");return i.style.display="block",i}function lh(...i){let e="THREE."+i.shift();Es?Es("log",e,...i):console.log(e,...i)}function e0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=e0(i);let e="THREE."+i.shift();if(Es)Es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=e0(i);let e="THREE."+i.shift();if(Es)Es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ur(...i){let e=i.join(" ");e in Zu||(Zu[e]=!0,Ne(...i))}function t0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function vm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xm(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function _m(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function ym(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function Mm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wm(i,e){return i+Math.random()*(e-i)}function Tm(i){return i*(.5-Math.random())}function Em(i){i!==void 0&&(Ku=i);let e=Ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Am(i){return i*fr}function Cm(i){return i*Zi}function Rm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Im(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),d=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*d,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*d,o*c);break;case"ZYZ":i.set(l*d,l*p,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function uh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function i0(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function s0(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Lm(){let i={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gt?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ws]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}function _c(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ac(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function $m(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:i}}function Ua(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ia),i.getVertexPosition(l,La),i.getVertexPosition(c,Na);let h=$m(i,e,t,n,Ia,La,Na,uf);if(h){let u=new P;bi.getBarycoord(uf,Ia,La,Na,u),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,u,new _e)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,u,new _e)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};bi.getNormal(Ia,La,Na,f.normal),h.face=f,h.barycoord=u}return h}function es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mf(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=es(i[t]);for(let s in n)e[s]=n[s]}return e}function mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ka(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function a0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function e1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function t1(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=a0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=e1(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function vf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function n1(){this._document.hidden===!1&&this.reset()}function gh(i,e,t,n){let s=u1(n);switch(t){case ih:return i*e;case Os:return i*e/s.components*s.byteLength;case Ao:return i*e/s.components*s.byteLength;case $n:return i*e*2/s.components*s.byteLength;case Co:return i*e*2/s.components*s.byteLength;case sh:return i*e*3/s.components*s.byteLength;case St:return i*e*4/s.components*s.byteLength;case Ro:return i*e*4/s.components*s.byteLength;case zr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:case No:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Lo:return Math.max(i,8)*Math.max(e,8)/2;case Do:case Fo:case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Wr:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case el:case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xr:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(i){switch(i){case Bt:case Qc:return{byteLength:1,components:1};case Us:case eh:case ze:return{byteLength:2,components:1};case To:case Eo:return{byteLength:2,components:4};case Gn:case wo:case pt:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Ii,Li,bf,Vc,Sf,Or,wf,Ns,qn,Vt,rn,Vn,Ds,Gc,Hc,Wc,xo,Yn,Tf,Ef,Af,Cf,Rf,Ji,Pf,If,Xc,qc,Lf,Nf,Df,Ff,Uf,Of,Bf,kf,zf,Wa,Xa,qa,Ss,Ya,$a,Za,Ka,_o,Vf,Gf,Pn,Yc,$c,Zc,Br,Kc,Jc,jc,yo,ji,Fs,Mo,bo,Ja,ht,ja,Xe,Hf,kr,et,So,ci,Bt,Qc,eh,Us,wo,Gn,pt,ze,To,Eo,Qi,th,nh,ih,sh,St,ai,hi,Os,Ao,$n,Co,Ro,zr,Vr,Gr,Hr,Po,Io,Lo,No,Do,Fo,Uo,Oo,Bo,Wr,ko,zo,Vo,Go,Ho,Wo,Xo,qo,Yo,$o,Zo,Ko,Jo,jo,Qo,el,tl,nl,il,sl,Xr,rl,pr,Qa,Ga,Dc,Fc,Uc,Oc,Wf,al,Xf,Gt,sn,ws,mr,ot,Ha,qf,Yf,$f,Zf,qr,Kf,Jf,rh,ah,jf,oh,jt,An,Ts,Zu,Es,n0,Bn,Yt,Ku,fr,Zi,ol,_e,bt,P,pc,Ju,Fe,mc,ju,Qu,Ke,ls,eo,Nm,As,Dm,vc,cn,lt,to,dt,vr,no,Be,cs,Fn,Fm,Um,vi,Ma,mn,ef,tf,oi,xr,Om,nf,hs,Qn,ba,rr,Bm,km,sf,rf,af,of,zm,us,xc,Zt,si,Vm,Cs,r0,xi,Sa,Te,$t,Kt,Un,ei,yc,ti,fs,ds,lf,Mc,bc,Sc,wc,Tc,Ec,bi,xn,ni,On,wa,ps,ms,gs,_i,yi,Xi,ar,Ta,Ea,qi,At,Aa,Gm,Mt,_r,yr,De,Hm,or,Cc,Cn,Wm,En,Rc,vs,gn,lr,Ot,Ye,Pc,Xm,qm,vn,Ym,Si,ii,Ic,Ca,Ra,Rs,kn,cf,Yi,Pa,hf,Ia,La,Na,Lc,Da,uf,Fa,rt,wi,Ti,xs,ff,Oa,df,Zm,cr,hr,li,$i,Km,Ba,Ei,pf,io,Mr,_n,br,Sr,Ai,wr,Tr,Er,zn,Ki,Ar,Cr,dh,jm,Qm,Jt,Rn,Rr,so,ro,Ci,ao,oo,lo,co,yn,Ri,ho,uo,fo,Pr,Pi,po,mo,o0,Ir,Lr,Nr,Nc,xf,_f,go,za,Va,Xn,Dr,Mi,yf,Mf,zt,Bc,Fr,Pt,ys,Ms,Ps,vo,Is,ph,i1,mh,s1,r1,a1,o1,l1,c1,h1,kc,gt,u4,Ls,zc,Ur,vh=qu(()=>{Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,Vc=1,Sf=2,Or=1,wf=2,Ns=3,qn=0,Vt=1,rn=2,Vn=0,Ds=1,Gc=2,Hc=3,Wc=4,xo=5,Yn=100,Tf=101,Ef=102,Af=103,Cf=104,Rf=200,Ji=201,Pf=202,If=203,Xc=204,qc=205,Lf=206,Nf=207,Df=208,Ff=209,Uf=210,Of=211,Bf=212,kf=213,zf=214,Wa=0,Xa=1,qa=2,Ss=3,Ya=4,$a=5,Za=6,Ka=7,_o=0,Vf=1,Gf=2,Pn=0,Yc=1,$c=2,Zc=3,Br=4,Kc=5,Jc=6,jc=7,yo=300,ji=301,Fs=302,Mo=303,bo=304,Ja=1e3,ht=1001,ja=1002,Xe=1003,Hf=1004,kr=1005,et=1006,So=1007,ci=1008,Bt=1009,Qc=1010,eh=1011,Us=1012,wo=1013,Gn=1014,pt=1015,ze=1016,To=1017,Eo=1018,Qi=1020,th=35902,nh=35899,ih=1021,sh=1022,St=1023,ai=1026,hi=1027,Os=1028,Ao=1029,$n=1030,Co=1031,Ro=1033,zr=33776,Vr=33777,Gr=33778,Hr=33779,Po=35840,Io=35841,Lo=35842,No=35843,Do=36196,Fo=37492,Uo=37496,Oo=37488,Bo=37489,Wr=37490,ko=37491,zo=37808,Vo=37809,Go=37810,Ho=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,$o=37816,Zo=37817,Ko=37818,Jo=37819,jo=37820,Qo=37821,el=36492,tl=36494,nl=36495,il=36283,sl=36284,Xr=36285,rl=36286,pr=2300,Qa=2301,Ga=2302,Dc=2303,Fc=2400,Uc=2401,Oc=2402,Wf=3200,al=0,Xf=1,Gt="",sn="srgb",ws="srgb-linear",mr="linear",ot="srgb",Ha=7680,qf=519,Yf=512,$f=513,Zf=514,qr=515,Kf=516,Jf=517,rh=518,ah=519,jf=35044,oh=35048,jt="300 es",An=2e3,Ts=2001;Zu={},Es=null;n0={[Wa]:Wa,[qa]:Za,[Ya]:Ya,[Ss]:$a,[Xa]:Xa,[Za]:qa,[Ka]:Ka,[$a]:Ss},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,fr=Math.PI/180,Zi=180/Math.PI;ol={DEG2RAD:fr,RAD2DEG:Zi,generateUUID:Bs,clamp:qe,euclideanModulo:ch,mapLinear:vm,inverseLerp:xm,lerp:dr,damp:_m,pingpong:ym,smoothstep:Mm,smootherstep:bm,randInt:Sm,randFloat:wm,randFloatSpread:Tm,seededRandom:Em,degToRad:Am,radToDeg:Cm,isPowerOfTwo:Rm,ceilPowerOfTwo:Pm,floorPowerOfTwo:hh,setQuaternionFromProperEuler:Im,normalize:s0,denormalize:i0},_e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],d=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==p||h!==d){let g=l*f+c*p+h*d+u*v;g<0&&(f=-f,p=-p,d=-d,v=-v,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),T=Math.sin(_);m=Math.sin(m*_)/T,o=Math.sin(o*_)/T,l=l*m+f*o,c=c*m+p*o,h=h*m+d*o,u=u*m+v*o}else{l=l*m+f*o,c=c*m+p*o,h=h*m+d*o,u=u*m+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],d=r[a+3];return e[t]=o*d+h*u+l*p-c*f,e[t+1]=l*d+h*f+c*u-o*p,e[t+2]=c*d+h*p+o*f-l*u,e[t+3]=h*d-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),d=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"YXZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"ZXY":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"ZYX":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"YZX":this._x=f*h*u+c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u-f*p*d;break;case"XZY":this._x=f*h*u-c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u+f*p*d;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new P,Ju=new bt,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],d=n[8],v=s[0],g=s[3],m=s[6],_=s[1],T=s[4],M=s[7],E=s[2],w=s[5],x=s[8];return r[0]=a*v+o*_+l*E,r[3]=a*g+o*T+l*w,r[6]=a*m+o*M+l*x,r[1]=c*v+h*_+u*E,r[4]=c*g+h*T+u*w,r[7]=c*m+h*M+u*x,r[2]=f*v+p*_+d*E,r[5]=f*g+p*T+d*w,r[8]=f*m+p*M+d*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,d=t*u+n*f+s*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/d;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new Fe,ju=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=Lm();eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=gr("canvas")),ls.width=e.width,ls.height=e.height;let s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,As=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gc(s[a].image)):r.push(gc(s[a]))}else r=gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Dm=0,vc=new P,cn=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ht,s=ht,r=et,a=ci,o=St,l=Bt,c=i.DEFAULT_ANISOTROPY,h=Gt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Bs(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ja:e.x=e.x-Math.floor(e.x);break;case ht:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ja:e.y=e.y-Math.floor(e.y);break;case ht:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yo;cn.DEFAULT_ANISOTROPY=1;lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],d=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(d+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,M=(p+1)/2,E=(m+1)/2,w=(h+f)/4,x=(u+v)/4,y=(d+g)/4;return T>M&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-d)*(g-d)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-d)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},to=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new As(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dt=class extends to{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},no=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Be=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,d,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,d,v,g)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,d,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=d,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,d=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+d*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=d+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,d=c*h,v=c*u;t[0]=f+v*o,t[4]=d*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-d,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,d=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=d+p*o,t[1]=p+d*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,d=o*h,v=o*u;t[0]=l*h,t[4]=d*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-d,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,d=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=d*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+d,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,p=a*c,d=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-d,t[2]=d*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Um)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),vi.crossVectors(n,mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),vi.crossVectors(n,mn)),vi.normalize(),Ma.crossVectors(mn,vi),s[0]=vi.x,s[4]=Ma.x,s[8]=mn.x,s[1]=vi.y,s[5]=Ma.y,s[9]=mn.y,s[2]=vi.z,s[6]=Ma.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],d=n[2],v=n[6],g=n[10],m=n[14],_=n[3],T=n[7],M=n[11],E=n[15],w=s[0],x=s[4],y=s[8],R=s[12],C=s[1],L=s[5],B=s[9],X=s[13],N=s[2],F=s[6],O=s[10],G=s[14],ee=s[3],H=s[7],$=s[11],te=s[15];return r[0]=a*w+o*C+l*N+c*ee,r[4]=a*x+o*L+l*F+c*H,r[8]=a*y+o*B+l*O+c*$,r[12]=a*R+o*X+l*G+c*te,r[1]=h*w+u*C+f*N+p*ee,r[5]=h*x+u*L+f*F+p*H,r[9]=h*y+u*B+f*O+p*$,r[13]=h*R+u*X+f*G+p*te,r[2]=d*w+v*C+g*N+m*ee,r[6]=d*x+v*L+g*F+m*H,r[10]=d*y+v*B+g*O+m*$,r[14]=d*R+v*X+g*G+m*te,r[3]=_*w+T*C+M*N+E*ee,r[7]=_*x+T*L+M*F+E*H,r[11]=_*y+T*B+M*O+E*$,r[15]=_*R+T*X+M*G+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],d=e[3],v=e[7],g=e[11],m=e[15],_=l*p-c*f,T=o*p-c*u,M=o*f-l*u,E=a*p-c*h,w=a*f-l*h,x=a*u-o*h;return t*(v*_-g*T+m*M)-n*(d*_-g*E+m*w)+s*(d*T-v*E+m*x)-r*(d*M-v*w+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],d=e[12],v=e[13],g=e[14],m=e[15],_=t*o-n*a,T=t*l-s*a,M=t*c-r*a,E=n*l-s*o,w=n*c-r*o,x=s*c-r*l,y=h*v-u*d,R=h*g-f*d,C=h*m-p*d,L=u*g-f*v,B=u*m-p*v,X=f*m-p*g,N=_*X-T*B+M*L+E*C-w*R+x*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/N;return e[0]=(o*X-l*B+c*L)*F,e[1]=(s*B-n*X-r*L)*F,e[2]=(v*x-g*w+m*E)*F,e[3]=(f*w-u*x-p*E)*F,e[4]=(l*C-a*X-c*R)*F,e[5]=(t*X-s*C+r*R)*F,e[6]=(g*M-d*x-m*T)*F,e[7]=(h*x-f*M+p*T)*F,e[8]=(a*B-o*C+c*y)*F,e[9]=(n*C-t*B-r*y)*F,e[10]=(d*w-v*M+m*_)*F,e[11]=(u*M-h*w-p*_)*F,e[12]=(o*R-a*L-l*y)*F,e[13]=(t*L-n*R+s*y)*F,e[14]=(v*T-d*E-g*_)*F,e[15]=(h*E-u*T+f*_)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,d=r*u,v=a*h,g=a*u,m=o*u,_=l*c,T=l*h,M=l*u,E=n.x,w=n.y,x=n.z;return s[0]=(1-(v+m))*E,s[1]=(p+M)*E,s[2]=(d-T)*E,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+m))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(d+T)*x,s[9]=(g-_)*x,s[10]=(1-(f+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,h=1/o,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,v;if(l)d=r/(a-r),v=a*r/(a-r);else if(o===An)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ts)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),d,v;if(l)d=1/(a-r),v=a/(a-r);else if(o===An)d=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ts)d=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new P,Fn=new Be,Fm=new P(0,0,0),Um=new P(1,1,1),vi=new P,Ma=new P,mn=new P,ef=new Be,tf=new bt,oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Om=0,nf=new P,hs=new bt,Qn=new Be,ba=new P,rr=new P,Bm=new P,km=new bt,sf=new P(1,0,0),rf=new P(0,1,0),af=new P(0,0,1),of={type:"added"},zm={type:"removed"},us={type:"childadded",child:null},xc={type:"childremoved",child:null},Zt=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new oi,n=new bt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(rr,ba,this.up):Qn.lookAt(ba,rr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Qn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),us.child=e,this.dispatchEvent(us),us.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new P(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;si=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,d=.005;c.inputState.pinching&&f>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=ch(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_c(a,r,e+1/3),this.g=_c(a,r,e),this.b=_c(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=r0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ke.workingToColorSpace($t.copy(this),e),Math.round(qe($t.r*255,0,255))*65536+Math.round(qe($t.g*255,0,255))*256+Math.round(qe($t.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=sn){Ke.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Sa);let n=dr(xi.h,Sa.h,t),s=dr(xi.s,Sa.s,t),r=dr(xi.l,Sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Te;Te.NAMES=r0;Kt=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new P,ei=new P,yc=new P,ti=new P,fs=new P,ds=new P,lf=new P,Mc=new P,bc=new P,Sc=new P,wc=new lt,Tc=new lt,Ec=new lt,bi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ei.subVectors(n,t),yc.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(ei),l=Un.dot(yc),c=ei.dot(ei),h=ei.dot(yc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,d=(a*h-o*l)*f;return r.set(1-p-d,d,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ei.subVectors(e,t),Un.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Un.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;fs.subVectors(s,n),ds.subVectors(r,n),Mc.subVectors(e,n);let l=fs.dot(Mc),c=ds.dot(Mc);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,s);let h=fs.dot(bc),u=ds.dot(bc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(fs,a);Sc.subVectors(e,r);let p=fs.dot(Sc),d=ds.dot(Sc);if(d>=0&&p<=d)return t.copy(r);let v=p*c-l*d;if(v<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ds,o);let g=h*d-p*u;if(g<=0&&u-h>=0&&p-d>=0)return lf.subVectors(r,s),o=(u-h)/(u-h+(p-d)),t.copy(s).addScaledVector(lf,o);let m=1/(g+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(fs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Ta.subVectors(this.max,ar),ps.subVectors(e.a,ar),ms.subVectors(e.b,ar),gs.subVectors(e.c,ar),_i.subVectors(ms,ps),yi.subVectors(gs,ms),Xi.subVectors(ps,gs);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Xi.z,Xi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Xi.z,0,-Xi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Xi.y,Xi.x,0];return!Ac(t,ps,ms,gs,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,ps,ms,gs,Ta))?!1:(Ea.crossVectors(_i,yi),t=[Ea.x,Ea.y,Ea.z],Ac(t,ps,ms,gs,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,wa=new xn,ps=new P,ms=new P,gs=new P,_i=new P,yi=new P,Xi=new P,ar=new P,Ta=new P,Ea=new P,qi=new P;At=new P,Aa=new _e,Gm=0,Mt=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=pt,this.version=0,this._normalizationScale=e!==void 0?uh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):i0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):s0(e,this.array)}},_r=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},De=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hm=new xn,or=new P,Cc=new P,Cn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Cc)),this.expandByPoint(or.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wm=0,En=new Be,Rc=new Zt,vs=new P,gn=new xn,lr=new xn,Ot=new P,Ye=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mm(e)?yr:_r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(gn.min,lr.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,lr.max),gn.expandByPoint(Ot)):(gn.expandByPoint(lr.min),gn.expandByPoint(lr.max))}gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Ot.add(vs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;let h=new P,u=new P,f=new P,p=new _e,d=new _e,v=new _e,g=new P,m=new P;function _(R,C,L){c[R]=c[C]=c[L]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,L),p.fromBufferAttribute(r,R),d.fromBufferAttribute(r,C),v.fromBufferAttribute(r,L),u.sub(h),f.sub(h),d.sub(p),v.sub(p);let B=1/(d.x*v.y-v.x*d.y);isFinite(B)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(B),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(B),o[R].add(g),o[C].add(g),o[L].add(g),l[R].add(m),l[C].add(m),l[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,C=T.length;R<C;++R){let L=T[R],B=L.start,X=L.count;for(let N=B,F=B+X;N<F;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new P,E=new P,w=new P,x=new P;function y(R){w.fromBufferAttribute(s,R),x.copy(w);let C=o[R];M.copy(C),M.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(x,C);let B=E.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,B)}for(let R=0,C=n.count;R<C;++R)c[R]&&y(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let d=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,d=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)f[d++]=c[p++]}return new Mt(f,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new P,Xm=new P,qm=new Fe,vn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(Xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qm.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ym=0,Si=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Ds,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ii=new P,Ic=new P,Ca=new P,Ra=new P,Rs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ic.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(Ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ra.dot(this.direction),l=-Ra.dot(Ca),c=Ra.lengthSq(),h=Math.abs(1-a*a),u,f,p,d;if(h>0)if(u=a*l-o,f=a*o-l,d=r*h,u>=0)if(f>=-d)if(f<=d){let v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-d?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=d?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ic).addScaledVector(Ca,f),p}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,d=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,T=n.z-a.z,M=Math.abs(l),E=Math.abs(c),w=Math.abs(h),x,y,R,C,L,B,X,N,F,O,G,ee;if(M>=E&&M>=w?(R=l,B=u,F=d,ee=m,l>=0?(x=c,y=h,C=f,L=p,X=v,N=g,O=_,G=T):(x=h,y=c,C=p,L=f,X=g,N=v,O=T,G=_)):E>=w?(R=c,B=f,F=v,ee=_,c>=0?(x=h,y=l,C=p,L=u,X=g,N=d,O=T,G=m):(x=l,y=h,C=u,L=p,X=d,N=g,O=m,G=T)):(R=h,B=p,F=g,ee=T,h>=0?(x=l,y=c,C=u,L=f,X=d,N=v,O=m,G=_):(x=c,y=l,C=f,L=u,X=v,N=d,O=_,G=m)),R===0)return null;let H=x/R,$=y/R,te=1/R,xe=C-H*B,Pe=L-$*B,Y=X-H*F,se=N-$*F,ge=O-H*ee,Re=G-$*ee,Q=ge*se-Re*Y,ye=xe*Re-Pe*ge,nt=Y*Pe-se*xe;if(s){if(Q<0||ye<0||nt<0)return null}else if((Q<0||ye<0||nt<0)&&(Q>0||ye>0||nt>0))return null;let Me=Q+ye+nt;if(Me===0)return null;let je=te*(Q*B+ye*F+nt*ee);return(Me>0?je<0:je>0)?null:this.at(je/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cf=new Be,Yi=new Rs,Pa=new Cn,hf=new P,Ia=new P,La=new P,Na=new P,Lc=new P,Da=new P,uf=new P,Fa=new P,rt=class extends Zt{constructor(e=new Ye,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lc.fromBufferAttribute(u,e),a?Da.addScaledVector(Lc,h):Da.addScaledVector(Lc.sub(t),h))}t.add(Da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Pa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Pa,hf)===null||Yi.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,v=f.length;d<v;d++){let g=f[d],m=a[g.materialIndex],_=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=_,E=T;M<E;M+=3){let w=o.getX(M),x=o.getX(M+1),y=o.getX(M+2);s=Ua(this,m,e,n,c,h,u,w,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=d,m=v;g<m;g+=3){let _=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);s=Ua(this,a,e,n,c,h,u,_,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,v=f.length;d<v;d++){let g=f[d],m=a[g.materialIndex],_=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=_,E=T;M<E;M+=3){let w=M,x=M+1,y=M+2;s=Ua(this,m,e,n,c,h,u,w,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=d,m=v;g<m;g+=3){let _=g,T=g+1,M=g+2;s=Ua(this,a,e,n,c,h,u,_,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};wi=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xe,h=Xe,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Be,ff=new Be,Oa=[],df=new xn,Zm=new Be,cr=new rt,hr=new Cn,li=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),df.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),hr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),ff.multiplyMatrices(n,xs),cr.matrixWorld=ff,cr.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){let l=Oa[a];l.instanceId=r,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(s*this.count),s,this.count,Os,pt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new Cn,Km=new _e(.5,.5),Ba=new P,Ei=class{constructor(e=new vn,t=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],d=r[8],v=r[9],g=r[10],m=r[11],_=r[12],T=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,p-h,m-d,E-_).normalize(),s[1].setComponents(c+a,p+h,m+d,E+_).normalize(),s[2].setComponents(c+o,p+u,m+v,E+T).normalize(),s[3].setComponents(c-o,p-u,m-v,E-T).normalize(),n)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,p-f,m-g,E-M).normalize();else if(s[4].setComponents(c-l,p-f,m-g,E-M).normalize(),t===An)s[5].setComponents(c+l,p+f,m+g,E+M).normalize();else if(t===Ts)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Km.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pf=new Be,io=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];pf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ei),n[s].setFromProjectionMatrix(pf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Mr=class extends cn{constructor(e=[],t=ji,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends cn{constructor(e,t,n=Gn,s,r,a,o=Xe,l=Xe,c,h=ai,u=1){if(h!==ai&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},br=class extends _n{constructor(e,t=Gn,n=ji,s,r,a=Xe,o=Xe,l,c=ai){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class i extends Ye{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function d(v,g,m,_,T,M,E,w,x,y,R){let C=M/x,L=E/y,B=M/2,X=E/2,N=w/2,F=x+1,O=y+1,G=0,ee=0,H=new P;for(let $=0;$<O;$++){let te=$*L-X;for(let xe=0;xe<F;xe++){let Pe=xe*C-B;H[v]=Pe*_,H[g]=te*T,H[m]=N,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[m]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(xe/x),u.push(1-$/y),G+=1}}for(let $=0;$<y;$++)for(let te=0;te<x;te++){let xe=f+te+F*$,Pe=f+te+F*($+1),Y=f+(te+1)+F*($+1),se=f+(te+1)+F*$;l.push(xe,Pe,se),l.push(Pe,Y,se),ee+=6}o.addGroup(p,ee,R),p+=ee,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},wr=class i extends Ye{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tr=class i extends Ye{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let T=new P,M=new P,E=new P;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],M),p(t[w+2],E),l(T,M,E,_)}function l(_,T,M,E){let w=E+1,x=[];for(let y=0;y<=w;y++){x[y]=[];let R=_.clone().lerp(M,y/w),C=T.clone().lerp(M,y/w),L=w-y;for(let B=0;B<=L;B++)B===0&&y===w?x[y][B]=R:x[y][B]=R.clone().lerp(C,B/L)}for(let y=0;y<w;y++)for(let R=0;R<2*(w-y)-1;R++){let C=Math.floor(R/2);R%2===0?(f(x[y][C+1]),f(x[y+1][C]),f(x[y][C])):(f(x[y][C+1]),f(x[y+1][C+1]),f(x[y+1][C]))}}function c(_){let T=new P;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(_),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let _=new P;for(let T=0;T<r.length;T+=3){_.x=r[T+0],_.y=r[T+1],_.z=r[T+2];let M=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;a.push(M,1-E)}d(),u()}function u(){for(let _=0;_<a.length;_+=6){let T=a[_+0],M=a[_+2],E=a[_+4],w=Math.max(T,M,E),x=Math.min(T,M,E);w>.9&&x<.1&&(T<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,T){let M=_*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function d(){let _=new P,T=new P,M=new P,E=new P,w=new _e,x=new _e,y=new _e;for(let R=0,C=0;R<r.length;R+=9,C+=6){_.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),w.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),E.copy(_).add(T).add(M).divideScalar(3);let L=g(E);v(w,C+0,_,L),v(x,C+2,T,L),v(y,C+4,M,L)}}function v(_,T,M,E){E<0&&_.x===1&&(a[T]=_.x-1),M.x===0&&M.z===0&&(a[T]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Er=class i extends Tr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zn=class i extends Tr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ki=class i extends Ye{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],d=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*f-a;for(let T=0;T<c;T++){let M=T*u-r;d.push(M,-_,0),v.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let T=_+c*m,M=_+c*(m+1),E=_+1+c*(m+1),w=_+1+c*m;p.push(T,M,w),p.push(M,E,w)}this.setIndex(p),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ar=class i extends Ye{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,f=new P,p=[],d=[],v=[],g=[];for(let m=0;m<=n;m++){let _=[],T=m/n,M=a+T*o,E=e*Math.cos(M),w=Math.sqrt(e*e-E*E),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let R=y/t,C=s+R*r;u.x=-w*Math.cos(C),u.y=E,u.z=w*Math.sin(C),d.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(R+x,1-T),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let T=h[m][_+1],M=h[m][_],E=h[m+1][_],w=h[m+1][_+1];(m!==0||a>0)&&p.push(T,M,w),(m!==n-1||l<Math.PI)&&p.push(M,E,w)}this.setIndex(p),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Cr=class i extends Ye{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new P,p=new P,d=new P;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let m=0;m<=s;m++){let _=m/s*r;p.x=(e+t*Math.cos(g))*Math.cos(_),p.y=(e+t*Math.cos(g))*Math.sin(_),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),d.subVectors(p,f).normalize(),h.push(d.x,d.y,d.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,T=(s+1)*(v-1)+g,M=(s+1)*v+g;l.push(m,_,M),l.push(_,T,M)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};dh={clone:es,merge:Qt},jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rn=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rr=class extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},so=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ao=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=e,o=2*t-n;break;case Oc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=e,l=2*n-t;break;case Oc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,d=(n-t)/(s-t),v=d*d,g=v*d,m=-f*g+2*f*v-f*d,_=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*d+1,T=(-1-p)*g+(1.5+p)*v+.5*d,M=p*g-p*v;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+_*a[c+E]+T*a[l+E]+M*a[u+E];return r}},oo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},lo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},co=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let d=(n-t)/(s-t),v=1-d;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*d;return r}let f=o*2,p=e-1;for(let d=0;d!==o;++d){let v=a[c+d],g=a[l+d],m=p*f+d*2,_=u[m],T=u[m+1],M=e*f+d*2,E=h[M],w=h[M+1],x=t1(n,t,_,E,s);r[d]=a0(x,v,T,w,g)}return r}};yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ka(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break;case Dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ka(this.settings)&&(gf(this.settings.inTangents,e),gf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ka(this.settings)&&(vf(this.settings.inTangents,e),vf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&gm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let d=0;d!==n;++d){let v=t[u+d];if(v!==t[f+d]||v!==t[p+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ka(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Qa;Ri=class extends yn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=pr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;ho=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ho.prototype.ValueTypeName="color";uo=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};uo.prototype.ValueTypeName="number";fo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pr=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;Pi=class extends yn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=pr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;po=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};po.prototype.ValueTypeName="vector";mo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],d=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o0=new mo,Ir=class{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";Lr=class extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Nr=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nc=new Be,xf=new P,_f=new P,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Nc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},za=new P,Va=new bt,Xn=new P,Dr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Va,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(za,Va,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new P,yf=new _e,Mf=new _e,zt=class extends Dr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,yf,Mf),t.subVectors(Mf,yf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bc=class extends go{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Fr=class extends Lr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pt=class extends Dr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ys=-90,Ms=1,Ps=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ys,Ms,e,t);s.layers=this.layers,this.add(s);let r=new zt(ys,Ms,e,t);r.layers=this.layers,this.add(r);let a=new zt(ys,Ms,e,t);a.layers=this.layers,this.add(a);let o=new zt(ys,Ms,e,t);o.layers=this.layers,this.add(o);let l=new zt(ys,Ms,e,t);l.layers=this.layers,this.add(l);let c=new zt(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},vo=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Is=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=n1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};ph="\\[\\]\\.:\\/",i1=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",s1="[^"+ph.replace("\\.","")+"]",r1=/((?:WC+[\/:])*)/.source.replace("WC",mh),a1=/(WCOD+)?/.source.replace("WCOD",s1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),l1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),c1=new RegExp("^"+r1+a1+o1+l1+"$"),h1=["material","materials","bones","map"],kc=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i1,"")}static parseTrackName(e){let t=c1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=kc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];u4=new Float32Array(1),Ls=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},zc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},Ur=class extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function R0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M1(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,d)=>p.start-d.start);let f=0;for(let p=1;p<u.length;p++){let d=u[f],v=u[p];v.start<=d.start+d.count+1?d.count=Math.max(d.count,v.start+v.count-d.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,d=u.length;p<d;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function n3(i,e,t,n,s,r){let a=new Te(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let M=_.backgroundBlurriness>0;T=e.get(T,M)}return T}function d(_){let T=!1,M=p(_);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,T){let M=p(T);M&&M.isCubeTexture?(c===void 0&&(c=new rt(new Ai(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:es(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t3.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(P0),c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ot,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new rt(new Ki(2,2),new Jt({name:"BackgroundMaterial",uniforms:es(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,T){_.getRGB(ll,fh(i)),t.buffers.color.setClear(ll.r,ll.g,ll.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:d,addToRenderList:v,dispose:m}}function i3(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,B,X,N,F){let O=!1,G=u(L,N,X,B);r!==G&&(r=G,c(r.object)),O=p(L,N,X,F),O&&d(L,N,X,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(L,B,X,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,B,X,N){let F=N.wireframe===!0,O=n[B.id];O===void 0&&(O={},n[B.id]=O);let G=L.isInstancedMesh===!0?L.id:0,ee=O[G];ee===void 0&&(ee={},O[G]=ee);let H=ee[X.id];H===void 0&&(H={},ee[X.id]=H);let $=H[F];return $===void 0&&($=f(l()),H[F]=$),$}function f(L){let B=[],X=[],N=[];for(let F=0;F<t;F++)B[F]=0,X[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,B,X,N){let F=r.attributes,O=B.attributes,G=0,ee=X.getAttributes();for(let H in ee)if(ee[H].location>=0){let te=F[H],xe=O[H];if(xe===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),te===void 0||te.attribute!==xe||xe&&te.data!==xe.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function d(L,B,X,N){let F={},O=B.attributes,G=0,ee=X.getAttributes();for(let H in ee)if(ee[H].location>=0){let te=O[H];te===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let xe={};xe.attribute=te,te&&te.data&&(xe.data=te.data),F[H]=xe,G++}r.attributes=F,r.attributesNum=G,r.index=N}function v(){let L=r.newAttributes;for(let B=0,X=L.length;B<X;B++)L[B]=0}function g(L){m(L,0)}function m(L,B){let X=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;X[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),F[L]!==B&&(i.vertexAttribDivisor(L,B),F[L]=B)}function _(){let L=r.newAttributes,B=r.enabledAttributes;for(let X=0,N=B.length;X<N;X++)B[X]!==L[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function T(L,B,X,N,F,O,G){G===!0?i.vertexAttribIPointer(L,B,X,F,O):i.vertexAttribPointer(L,B,X,N,F,O)}function M(L,B,X,N){v();let F=N.attributes,O=X.getAttributes(),G=B.defaultAttributeValues;for(let ee in O){let H=O[ee];if(H.location>=0){let $=F[ee];if($===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let te=$.normalized,xe=$.itemSize,Pe=e.get($);if(Pe===void 0)continue;let Y=Pe.buffer,se=Pe.type,ge=Pe.bytesPerElement,Re=se===i.INT||se===i.UNSIGNED_INT||$.gpuType===wo;if($.isInterleavedBufferAttribute){let Q=$.data,ye=Q.isInterleavedBuffer===!0?Q.stride:Q.itemSize,nt=$.offset;if(Q.isInstancedInterleavedBuffer||Q.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<H.locationSize;Me++)g(H.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Me=0;Me<H.locationSize;Me++)T(H.location+Me,xe/H.locationSize,se,te,ye*ge,(nt+xe/H.locationSize*Me)*ge,Re)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q,$.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Q=0;Q<H.locationSize;Q++)T(H.location+Q,xe/H.locationSize,se,te,xe*ge,xe/H.locationSize*Q*ge,Re)}}else if(G!==void 0){let te=G[ee];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(H.location,te);break;case 3:i.vertexAttrib3fv(H.location,te);break;case 4:i.vertexAttrib4fv(H.location,te);break;default:i.vertexAttrib1fv(H.location,te)}}}}_()}function E(){R();for(let L in n){let B=n[L];for(let X in B){let N=B[X];for(let F in N){let O=N[F];for(let G in O)h(O[G].object),delete O[G];delete N[F]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let X in B){let N=B[X];for(let F in N){let O=N[F];for(let G in O)h(O[G].object),delete O[G];delete N[F]}}delete n[L.id]}function x(L){for(let B in n){let X=n[B];for(let N in X){let F=X[N];if(F[L.id]===void 0)continue;let O=F[L.id];for(let G in O)h(O[G].object),delete O[G];delete F[L.id]}}}function y(L){for(let B in n){let X=n[B],N=L.isInstancedMesh===!0?L.id:0,F=X[N];if(F!==void 0){for(let O in F){let G=F[O];for(let ee in G)h(G[ee].object),delete G[ee];delete F[O]}delete X[N],Object.keys(X).length===0&&delete n[B]}}}function R(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function s3(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function r3(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==St&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let y=x===ze&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Bt&&x!==pt&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:w}}function a3(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let d=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||d===null||d.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,T=_*4,M=m.clippingState||null;l.value=M,M=h(d,f,T,p);for(let E=0;E!==T;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,d){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,d!==!0||g===null){let m=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=p;T!==v;++T,M+=4)a.copy(u[T]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function c0(i,e,t){return new Zr(i,{minFilter:ci,generateMipmaps:e,type:ze,colorSpace:ws,depthBuffer:t})}function Kr(i,e,t){return new Jt({name:i,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Vt,blending:Vn,depthTest:!1,depthWrite:!1})}function f3(){return Kr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${I0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function d3(){return Kr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:L0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function p3(){return Kr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l3}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function h0(){return Kr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function u0(){return Kr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m3(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Mo||p===bo)if(e.has(f)){let d=e.get(f).texture;return o(d,f.mapping)}else{let d=f.image;if(d&&d.height>0){let v=new Zr(d.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,d=p===Mo||p===bo,v=p===ji||p===Fs;if(d||v){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new zs(i)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return d&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new zs(i)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,p){return p===Mo?f.mapping=ji:p===bo&&(f.mapping=Fs),f}function l(f){let p=0,d=6;for(let v=0;v<d;v++)f[v]!==void 0&&p++;return p===d}function c(f){let p=f.target;p.removeEventListener("dispose",c);let d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function g3(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ur("WebGLRenderer: "+n+" extension not supported."),s}}}function v3(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(d=>delete s[d]);function o(d){l(d.target)}function l(d){d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id],a.unregister(d);let v=r.get(d);v&&(e.remove(v),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(d,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(d){let v=d.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(d){let v=d.index,g=d.attributes.position,m=0;if(g===void 0)return;let _=v!==null?v.array.length:g.array.length/3-1,T=g.count>=65535?yr:_r,M=new T(Math.ceil(_/3)*6,1),E=M.array;if(v!==null){let x=v.array;m=v.version;for(let y=0,R=0;y<_;y+=3){let C=x[y+0],L=x[y+1],B=x[y+2];E[R++]=C,E[R++]=L,E[R++]=L,E[R++]=B,E[R++]=B,E[R++]=C}}else{m=g.version;for(let x=0,y=0;x<_;x+=3){let R=x+0,C=x+1,L=x+2;E[y++]=R,E[y++]=C,E[y++]=C,E[y++]=L,E[y++]=L,E[y++]=R}}M.version=m;let w=r.get(d);w&&e.remove(w),r.set(d,M)}function f(d){let v=r.get(d);if(v){let g=d.index;g!==null&&v.version<g.version&&u(d)}else u(d);return r.get(d)}function p(){for(let d in s){let v=s[d].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function x3(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _3(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function y3(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;p===!0&&(T=1),d===!0&&(T=2),v===!0&&(T=3);let M=o.attributes.position.count*T,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*E*4*u),x=new vr(w,M,E,u);x.type=pt,x.needsUpdate=!0;let y=T*4;for(let C=0;C<u;C++){let L=g[C],B=m[C],X=_[C],N=M*E*4*C;for(let F=0;F<L.count;F++){let O=F*y;p===!0&&(s.fromBufferAttribute(L,F),w[N+O+0]=s.x,w[N+O+1]=s.y,w[N+O+2]=s.z,w[N+O+3]=0),d===!0&&(s.fromBufferAttribute(B,F),w[N+O+4]=s.x,w[N+O+5]=s.y,w[N+O+6]=s.z,w[N+O+7]=0),v===!0&&(s.fromBufferAttribute(X,F),w[N+O+8]=s.x,w[N+O+9]=s.y,w[N+O+10]=s.z,w[N+O+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new _e(M,E)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let d=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function M3(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function S3(i,e,t,n,s,r){let a=new dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ye;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let u=new Rn({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new rt(h,u),p=new Pt(-1,1,1,-1,0,1),d=null,v=null,g=!1,m,_=null,T=[],M=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let x=0;x<T.length;x++){let y=T[x];y.setSize&&y.setSize(E,w)}},this.setEffects=function(E){T=E,M=T.length>0&&T[0].isRenderPass===!0;let w=a.width,x=a.height;T.length>0&&o===null&&(o=new dt(w,x,{type:ze,depthBuffer:!1,stencilBuffer:!1}),l=new dt(w,x,{type:ze,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&T.some(R=>R.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new _n(w,x),r===!0&&(c.format=hi,c.type=Qi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let R=0;R<T.length;R++){let C=T[R];C.setSize&&C.setSize(w,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,w){if(g||E.toneMapping===Pn&&T.length===0)return!1;if(_=w,w!==null){let x=w.width,y=w.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return M===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Pn,!0},this.hasRenderPass=function(){return M},this.end=function(E,w){E.toneMapping=m,g=!0;let x=a,y=o;for(let R=0;R<T.length;R++){let C=T[R];C.enabled!==!1&&(C.render(E,y,x,w),C.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(d!==E.outputColorSpace||v!==E.toneMapping){d=E.outputColorSpace,v=E.toneMapping,u.defines={},Ke.getTransfer(d)===ot&&(u.defines.SRGB_TRANSFER="");let R=b3[v];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(f,p),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=f0[s];if(r===void 0&&(r=new Float32Array(s),f0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ul(i,e){let t=d0[e];t===void 0&&(t=new Int32Array(e),d0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function w3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function E3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function A3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function C3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;g0.set(n),i.uniformMatrix2fv(this.addr,!1,g0),Lt(t,n)}}function R3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;m0.set(n),i.uniformMatrix3fv(this.addr,!1,m0),Lt(t,n)}}function P3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;p0.set(n),i.uniformMatrix4fv(this.addr,!1,p0),Lt(t,n)}}function I3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function N3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function D3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function F3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function O3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function B3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function fl(i){return i.version===0&&(i.compareFunction=ah,i.needsUpdate=!0),i}function k3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=fl(D0):r=N0,t.setTexture2D(e||r,s)}function z3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||O0,s)}function V3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=fl(F0):r=B0,t.setTextureCube(e||r,s)}function G3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||U0,s)}function H3(i){switch(i){case 5126:return w3;case 35664:return T3;case 35665:return E3;case 35666:return A3;case 35674:return C3;case 35675:return R3;case 35676:return P3;case 5124:case 35670:return I3;case 35667:case 35671:return L3;case 35668:case 35672:return N3;case 35669:case 35673:return D3;case 5125:return F3;case 36294:return U3;case 36295:return O3;case 36296:return B3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return z3;case 35680:case 36300:case 36308:case 36293:return V3;case 36289:case 36303:case 36311:case 36292:return G3}}function W3(i,e){i.uniform1fv(this.addr,e)}function X3(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function q3(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Y3(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function $3(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Z3(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function K3(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J3(i,e){i.uniform1iv(this.addr,e)}function j3(i,e){i.uniform2iv(this.addr,e)}function Q3(i,e){i.uniform3iv(this.addr,e)}function e2(i,e){i.uniform4iv(this.addr,e)}function t2(i,e){i.uniform1uiv(this.addr,e)}function n2(i,e){i.uniform2uiv(this.addr,e)}function i2(i,e){i.uniform3uiv(this.addr,e)}function s2(i,e){i.uniform4uiv(this.addr,e)}function r2(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fl(D0):a=N0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function a2(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||O0,r[a])}function o2(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=fl(F0):a=B0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function l2(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||U0,r[a])}function c2(i){switch(i){case 5126:return W3;case 35664:return X3;case 35665:return q3;case 35666:return Y3;case 35674:return $3;case 35675:return Z3;case 35676:return K3;case 5124:case 35670:return J3;case 35667:case 35671:return j3;case 35668:case 35672:return Q3;case 35669:case 35673:return e2;case 5125:return t2;case 36294:return n2;case 36295:return i2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}function v0(i,e){i.seq.push(e),i.map[e.id]=e}function h2(i,e,t){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),a=xh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){v0(t,c===void 0?new yh(o,i,e):new Mh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new bh(o),v0(t,u)),t=u}}}function x0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function d2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function p2(i){Ke._getMatrix(_0,Ke.workingColorSpace,i);let e=`mat3( ${_0.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function y0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d2(i.getShaderSource(e),o)}else return r}function m2(i,e){let t=p2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function v2(i,e){let t=g2[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x2(){Ke.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function y2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $r(i){return i!==""}function M0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function b0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Sh(i){return i.replace(b2,S2)}function S2(i,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}function S0(i){return i.replace(w2,T2)}function T2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function w0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function A2(i){return E2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function R2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function I2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P2[i.combine]||"ENVMAP_BLENDING_NONE"}function L2(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A2(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=R2(t),u=I2(t),f=_2(t),p=y2(r),d=s.createProgram(),v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),g.length>0&&(g+=`
`)):(v=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?v2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,m2("linearToOutputTexel",t.outputColorSpace),x2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Sh(a),a=M0(a,t),a=b0(a,t),o=Sh(o),o=M0(o,t),o=b0(o,t),a=S0(a),o=S0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===jt?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+v+a,T=m+g+o,M=x0(s,s.VERTEX_SHADER,_),E=x0(s,s.FRAGMENT_SHADER,T);s.attachShader(d,M),s.attachShader(d,E),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function w(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(d)||"",B=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(E)||"",N=L.trim(),F=B.trim(),O=X.trim(),G=!0,ee=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,M,E);else{let H=y0(s,M,"vertex"),$=y0(s,E,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+H+`
`+$)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(ee=!1);ee&&(C.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:v},fragmentShader:{log:O,prefix:g}})}s.deleteShader(M),s.deleteShader(E),x=new ks(s,d),y=M2(s,d)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(d,u2)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}function D2(i){return i===$n||i===Wr||i===Xr}function F2(i,e,t,n,s,r){let a=new xr,o=new wh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,y,R,C,L,B){let X=C.fog,N=L.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||F,O),ee=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=$!==void 0?$.length:0,xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let Pe,Y,se,ge;if(ee){let pe=Kn[ee];Pe=pe.vertexShader,Y=pe.fragmentShader}else{Pe=x.vertexShader,Y=x.fragmentShader;let pe=o.getVertexShaderStage(x),ct=o.getFragmentShaderStage(x);o.update(x,pe,ct),se=pe.id,ge=ct.id}let Re=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),ye=L.isInstancedMesh===!0,nt=L.isBatchedMesh===!0,Me=!!x.map,je=!!x.matcap,it=!!G,We=it&&G.isPMREMTexture===!0,Tt=!!x.aoMap,Ct=!!x.lightMap,ln=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Wn=!!x.displacementMap,Dt=!!x.emissiveMap,bn=!!x.metalnessMap,Sn=!!x.roughnessMap,wn=x.anisotropy>0,U=x.clearcoat>0,Tn=x.diffuseRoughness>0,vt=x.dispersion>0,xt=x.retroreflectivity>0,de=x.iridescence>0,Rt=x.sheen>0,Le=x.transmission>0,Oe=wn&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,b=U&&!!x.clearcoatNormalMap,z=U&&!!x.clearcoatRoughnessMap,ne=Tn&&!!x.diffuseRoughnessMap,j=de&&!!x.iridescenceMap,ae=de&&!!x.iridescenceThicknessMap,ue=Rt&&!!x.sheenColorMap,Z=Rt&&!!x.sheenRoughnessMap,K=!!x.specularMap,le=!!x.specularColorMap,I=!!x.specularIntensityMap,J=Le&&!!x.transmissionMap,q=Le&&!!x.thicknessMap,ce=!!x.gradientMap,re=!!x.alphaMap,oe=x.alphaTest>0,Ce=!!x.alphaHash,Ge=!!x.extensions,ie=Pn;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ie=We?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ve={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:Y,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:nt,batchingColor:nt&&L._colorsTexture!==null,instancing:ye,instancingColor:ye&&L.instanceColor!==null,instancingMorph:ye&&L.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:je,envMap:it,envMapMode:it&&G.mapping,envMapPMREM:We,envMapMaxLod:We?Ie.length-1:null,envMapSize:We?Ie[0].width:null,aoMap:Tt,lightMap:Ct,bumpMap:ln,normalMap:_t,displacementMap:Wn,emissiveMap:Dt,normalMapObjectSpace:_t&&x.normalMapType===Xf,normalMapTangentSpace:_t&&x.normalMapType===al,packedNormalMap:_t&&x.normalMapType===al&&D2(x.normalMap.format),metalnessMap:bn,roughnessMap:Sn,anisotropy:wn,anisotropyMap:Oe,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:z,diffuseRoughness:Tn,diffuseRoughnessMap:ne,dispersion:vt,retroreflection:xt,iridescence:de,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:Rt,sheenColorMap:ue,sheenRoughnessMap:Z,specularMap:K,specularColorMap:le,specularIntensityMap:I,transmission:Le,transmissionMap:J,thicknessMap:q,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Ce,combine:x.combine,mapUv:Me&&p(x.map.channel),aoMapUv:Tt&&p(x.aoMap.channel),lightMapUv:Ct&&p(x.lightMap.channel),bumpMapUv:ln&&p(x.bumpMap.channel),normalMapUv:_t&&p(x.normalMap.channel),displacementMapUv:Wn&&p(x.displacementMap.channel),emissiveMapUv:Dt&&p(x.emissiveMap.channel),metalnessMapUv:bn&&p(x.metalnessMap.channel),roughnessMapUv:Sn&&p(x.roughnessMap.channel),anisotropyMapUv:Oe&&p(x.anisotropyMap.channel),clearcoatMapUv:A&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&p(x.sheenRoughnessMap.channel),specularMapUv:K&&p(x.specularMap.channel),specularColorMapUv:le&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:J&&p(x.transmissionMap.channel),thicknessMapUv:q&&p(x.thicknessMap.channel),alphaMapUv:re&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||wn),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Me||re),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function v(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(y,x),m(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function g(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function m(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let y=f[x.type],R;if(y){let C=Kn[y];R=dh.clone(C.uniforms)}else R=x.uniforms;return R}function T(x,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new L2(i,y,x,s),c.push(R),h.set(y,R)),R}function M(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:w}}function U2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function E0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,d,v,g,m){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:d,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=d,_.materialVariant=a(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=g,_.group=m),e++,_}function l(f,p,d,v,g,m,_){_.reversedDepth===!0&&(g=-g);let T=o(f,p,d,v,g,m);d.transmission>0?n.push(T):d.transparent===!0?s.push(T):t.push(T)}function c(f,p,d,v,g,m){let _=o(f,p,d,v,g,m);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function h(f,p){t.length>1&&t.sort(f||O2),n.length>1&&n.sort(p||T0),s.length>1&&s.sort(p||T0)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function B2(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new E0,i.set(n,[a])):s>=r.length?(a=new E0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function k2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function z2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function G2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H2(i){let e=new k2,t=z2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Be,a=new Be;function o(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,d=0,v=0,g=0,m=0,_=0,T=0,M=0,E=0,w=0,x=0,y=0,R=0,C=0;c.sort(G2);for(let B=0,X=c.length;B<X;B++){let N=c[B],F=N.color,O=N.intensity,G=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===$n?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],O);C++}else if(N.isSunLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[d]=te,n.sunShadowMap[d]=ee;let xe=$.getViewportCount();for(let Pe=0;Pe<xe;Pe++)n.sunShadowMatrix[v+Pe]=$.getMatrix(Pe),n.sunShadowCascade[v+Pe]=$._cascadeData[Pe];v+=xe,d++}n.sun[p]=H,p++}else if(N.isDirectionalLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ee,n.directionalShadowMatrix[g]=N.shadow.matrix,E++}n.directional[g]=H,g++}else if(N.isSpotLight){let H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[_]=H;let $=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,$.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[_]=$.matrix,N.castShadow){let te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,n.spotShadow[_]=te,n.spotShadowMap[_]=ee,x++}_++}else if(N.isRectAreaLight){let H=e.get(N);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=H,T++}else if(N.isPointLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=N.shadow.matrix,w++}n.point[m]=H,m++}else if(N.isHemisphereLight){let H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(O),H.groundColor.copy(N.groundColor).multiplyScalar(O),n.hemi[M]=H,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==d||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==y||L.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=g,n.spot.length=_,n.rectArea.length=T,n.point.length=m,n.hemi.length=M,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.sunLength=p,L.directionalLength=g,L.pointLength=m,L.spotLength=_,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=d,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=y,L.numLightProbes=C,n.version=V2++)}function l(c,h){let u=0,f=0,p=0,d=0,v=0,g=0,m=h.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){let M=c[_];if(M.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isSpotLight){let E=n.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function A0(i){let e=new H2(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W2(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new A0(i),e.set(s,[o])):r>=a.length?(o=new A0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Z2(i,e,t){let n=new Ei,s=new _e,r=new _e,a=new lt,o=new so,l=new ro,c={},h=t.maxTextureSize,u={[qn]:Vt,[Vt]:qn,[rn]:rn},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:X2,fragmentShader:q2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let d=new Ye;d.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new rt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let m=this.type;this.render=function(w,x,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===wf&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Or);let R=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=m!==this.type;X&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=w.length;N<F;N++){let O=w[N],G=O.shadow;if(G===void 0){Ne("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();s.multiply(ee),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ns){if(O.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dt(s.x,s.y,{format:$n,type:ze,minFilter:et,magFilter:et,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new _n(s.x,s.y,pt),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=ai,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe}else O.isPointLight?(G.map=new Zr(s.x),G.map.depthTexture=new br(s.x,Gn)):(G.map=new dt(s.x,s.y),G.map.depthTexture=new _n(s.x,s.y,Gn)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=ai,this.type===Or?(G.map.depthTexture.compareFunction=H?rh:qr,G.map.depthTexture.minFilter=et,G.map.depthTexture.magFilter=et):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();O.isPointLight!==!0&&G.updateMatrices(O,y);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let xe=0;xe<$;xe++){let Pe=G.getCamera(xe);if(O.isPointLight){let Y=G.camera,se=G.matrix,ge=O.distance||Y.far;ge!==Y.far&&(Y.far=ge,Y.updateProjectionMatrix()),Yr.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Yr),_h.copy(Y.position),_h.add(Y2[xe]),Y.up.copy($2[xe]),Y.lookAt(_h),Y.updateMatrixWorld(),se.makeTranslation(-Yr.x,-Yr.y,-Yr.z),C0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(C0,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(G.map),i.clear());let Y=G.getViewport(xe);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),B.viewport(a)}n=G.getFrustum(xe),M(x,y,Pe,O,te,this.type)}G.isPointLightShadow!==!0&&this.type===Ns&&_(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,C,L)};function _(w,x){let y=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new dt(s.x,s.y,{format:$n,type:ze}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,y,p,v,null)}function T(w,x,y,R){let C=null,L=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=C.uuid,X=x.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let F=N[X];F===void 0&&(F=C.clone(),N[X]=F,x.addEventListener("dispose",E)),C=F}if(C.visible=x.visible,C.wireframe=x.wireframe,R===Ns?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=y}return C}function M(w,x,y,R,C,L){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ns)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let N=e.update(w),F=w.material;if(Array.isArray(F)){let O=N.groups;for(let G=0,ee=O.length;G<ee;G++){let H=O[G],$=F[H.materialIndex];if($&&$.visible){let te=T(w,$,R,L);w.onBeforeShadow(i,w,x,y,N,te,H),i.renderBufferDirect(y,null,N,te,w,H),w.onAfterShadow(i,w,x,y,N,te,H)}}}else if(F.visible){let O=T(w,F,R,L);w.onBeforeShadow(i,w,x,y,N,O,null),i.renderBufferDirect(y,null,N,O,w,null),w.onAfterShadow(i,w,x,y,N,O,null)}}let X=w.children;for(let N=0,F=X.length;N<F;N++)M(X[N],x,y,R,C,L)}function E(w){w.target.removeEventListener("dispose",E);for(let y in c){let R=c[y],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function K2(i,e){function t(){let I=!1,J=new lt,q=null,ce=new lt(0,0,0,0);return{setMask:function(re){q!==re&&!I&&(i.colorMask(re,re,re,re),q=re)},setLocked:function(re){I=re},setClear:function(re,oe,Ce,Ge,ie){ie===!0&&(re*=Ge,oe*=Ge,Ce*=Ge),J.set(re,oe,Ce,Ge),ce.equals(J)===!1&&(i.clearColor(re,oe,Ce,Ge),ce.copy(J))},reset:function(){I=!1,q=null,ce.set(-1,0,0,0)}}}function n(){let I=!1,J=!1,q=null,ce=null,re=null;return{setReversed:function(oe){if(J!==oe){let Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),J=oe;let Ge=re;re=null,this.setClear(Ge)}},getReversed:function(){return J},setTest:function(oe){oe?Q(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(oe){q!==oe&&!I&&(i.depthMask(oe),q=oe)},setFunc:function(oe){if(J&&(oe=n0[oe]),ce!==oe){switch(oe){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=oe}},setLocked:function(oe){I=oe},setClear:function(oe){re!==oe&&(re=oe,J&&(oe=1-oe),i.clearDepth(oe))},reset:function(){I=!1,q=null,ce=null,re=null,J=!1}}}function s(){let I=!1,J=null,q=null,ce=null,re=null,oe=null,Ce=null,Ge=null,ie=null;return{setTest:function(Ie){I||(Ie?Q(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ie){J!==Ie&&!I&&(i.stencilMask(Ie),J=Ie)},setFunc:function(Ie,Ve,pe){(q!==Ie||ce!==Ve||re!==pe)&&(i.stencilFunc(Ie,Ve,pe),q=Ie,ce=Ve,re=pe)},setOp:function(Ie,Ve,pe){(oe!==Ie||Ce!==Ve||Ge!==pe)&&(i.stencilOp(Ie,Ve,pe),oe=Ie,Ce=Ve,Ge=pe)},setLocked:function(Ie){I=Ie},setClear:function(Ie){ie!==Ie&&(i.clearStencil(Ie),ie=Ie)},reset:function(){I=!1,J=null,q=null,ce=null,re=null,oe=null,Ce=null,Ge=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},p=new WeakMap,d=[],v=null,g=!1,m=null,_=null,T=null,M=null,E=null,w=null,x=null,y=new Te(0,0,0),R=0,C=!1,L=null,B=null,X=null,N=null,F=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=ee>=2);let $=null,te={},xe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Y=new lt().fromArray(xe),se=new lt().fromArray(Pe);function ge(I,J,q,ce){let re=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<q;Ce++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(J+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return oe}let Re={};Re[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ss),ln(!1),_t(Vc),Q(i.CULL_FACE),Tt(Vn);function Q(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ye(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function nt(I,J){return f[I]!==J?(i.bindFramebuffer(I,J),f[I]=J,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=J),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Me(I,J){let q=d,ce=!1;if(I){q=p.get(J),q===void 0&&(q=[],p.set(J,q));let re=I.textures;if(q.length!==re.length||q[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ce=re.length;oe<Ce;oe++)q[oe]=i.COLOR_ATTACHMENT0+oe;q.length=re.length,ce=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(q)}function je(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let it={[Yn]:i.FUNC_ADD,[Tf]:i.FUNC_SUBTRACT,[Ef]:i.FUNC_REVERSE_SUBTRACT};it[Af]=i.MIN,it[Cf]=i.MAX;let We={[Rf]:i.ZERO,[Ji]:i.ONE,[Pf]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Of]:i.CONSTANT_COLOR,[Bf]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(I,J,q,ce,re,oe,Ce,Ge,ie,Ie){if(I===Vn){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),I!==xo){if(I!==m||Ie!==C){if((_!==Yn||E!==Yn)&&(i.blendEquation(i.FUNC_ADD),_=Yn,E=Yn),Ie)switch(I){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gc:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",I);break}else switch(I){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",I);break}T=null,M=null,w=null,x=null,y.set(0,0,0),R=0,m=I,C=Ie}return}re=re||J,oe=oe||q,Ce=Ce||ce,(J!==_||re!==E)&&(i.blendEquationSeparate(it[J],it[re]),_=J,E=re),(q!==T||ce!==M||oe!==w||Ce!==x)&&(i.blendFuncSeparate(We[q],We[ce],We[oe],We[Ce]),T=q,M=ce,w=oe,x=Ce),(Ge.equals(y)===!1||ie!==R)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ie),y.copy(Ge),R=ie),m=I,C=!1}function Ct(I,J){I.side===rn?ye(i.CULL_FACE):Q(i.CULL_FACE);let q=I.side===Vt;J&&(q=!q),ln(q),I.blending===Ds&&I.transparent===!1?Tt(Vn):Tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ce=I.stencilWrite;o.setTest(ce),ce&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ln(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function _t(I){I!==bf?(Q(i.CULL_FACE),I!==B&&(I===Vc?i.cullFace(i.BACK):I===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),B=I}function Wn(I){I!==X&&(G&&i.lineWidth(I),X=I)}function Dt(I,J,q){I?(Q(i.POLYGON_OFFSET_FILL),(N!==J||F!==q)&&(N=J,F=q,a.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):ye(i.POLYGON_OFFSET_FILL)}function bn(I){I?Q(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Sn(I){I===void 0&&(I=i.TEXTURE0+O-1),$!==I&&(i.activeTexture(I),$=I)}function wn(I,J,q){q===void 0&&($===null?q=i.TEXTURE0+O-1:q=$);let ce=te[q];ce===void 0&&(ce={type:void 0,texture:void 0},te[q]=ce),(ce.type!==I||ce.texture!==J)&&($!==q&&(i.activeTexture(q),$=q),i.bindTexture(I,J||Re[I]),ce.type=I,ce.texture=J)}function U(){let I=te[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Tn(){try{i.compressedTexImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function xt(){try{i.texSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function de(){try{i.texSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Oe(){try{i.texStorage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function b(){try{i.texImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function z(){try{i.texImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ne(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function j(I,J){u[I]!==J&&(i.pixelStorei(I,J),u[I]=J)}function ae(I){Y.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function ue(I){se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Z(I,J){let q=c.get(J);q===void 0&&(q=new WeakMap,c.set(J,q));let ce=q.get(I);ce===void 0&&(ce=i.getUniformBlockIndex(J,I.name),i.uniformBlockBinding(J,ce,ce),q.set(I,ce))}function K(I,J,q){let re=c.get(J).get(I);l[re]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,q),l[re]=q)}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,te={},f={},l={},p=new WeakMap,d=[],v=null,g=!1,m=null,_=null,T=null,M=null,E=null,w=null,x=null,y=new Te(0,0,0),R=0,C=!1,L=null,B=null,X=null,N=null,F=null,Y.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ye,bindFramebuffer:nt,drawBuffers:Me,useProgram:je,setBlending:Tt,setMaterial:Ct,setFlipSided:ln,setCullFace:_t,setLineWidth:Wn,setPolygonOffset:Dt,setScissorTest:bn,activeTexture:Sn,bindTexture:wn,unbindTexture:U,compressedTexImage2D:Tn,compressedTexImage3D:vt,texImage2D:b,texImage3D:z,pixelStorei:j,getParameter:ne,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Oe,texStorage3D:A,texSubImage2D:xt,texSubImage3D:de,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Le,scissor:ae,viewport:ue,reset:le}}function J2(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u=new Set,f,p=new WeakMap,d=new Set,v=new FinalizationRegistry(A=>d.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return g?new OffscreenCanvas(A,b):gr("canvas")}function _(A,b,z){let ne=1,j=Oe(A);if((j.width>z||j.height>z)&&(ne=z/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(ne*j.width),ue=Math.floor(ne*j.height);f===void 0&&(f=m(ae,ue));let Z=b?m(ae,ue):f;return Z.width=ae,Z.height=ue,Z.getContext("2d").drawImage(A,0,0,ae,ue),Ne("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ue+")."),Z}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function T(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,b,z,ne,j,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),z===i.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),z===i.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),z===i.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){let K=ae?mr:Ke.getTransfer(j);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=K===ot?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),z===i.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(A,b){let z;return A?b===null||b===Gn||b===Qi?z=i.DEPTH24_STENCIL8:b===pt?z=i.DEPTH32F_STENCIL8:b===Us&&(z=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gn||b===Qi?z=i.DEPTH_COMPONENT24:b===pt?z=i.DEPTH_COMPONENT32F:b===Us&&(z=i.DEPTH_COMPONENT16),z}function y(A,b){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==et?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=new WeakRef(A);n.get(A).__ref=b,d.add(b),v.register(A,b,b)}function C(A){let b=n.get(A).__ref;b!==void 0&&(d.delete(b),v.unregister(b))}function L(A){X(A.target)}function B(A){N(A.target)}function X(A){A.removeEventListener("dispose",L),C(A),O(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function N(A){A.removeEventListener("dispose",B),C(A),ee(A)}function F(){for(let A of d){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):X(b))}d.clear(),u.clear()}function O(A){let b=n.get(A);if(b.__webglInit===void 0)return;let z=A.source,ne=p.get(z);if(ne){let j=ne[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(A),Object.keys(ne).length===0&&p.delete(z)}n.remove(A)}function G(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let z=A.source,ne=p.get(z);delete ne[b.__cacheKey],a.memory.textures--}function ee(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&X(z),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ae=0;ae<b.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(b.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ne=A.textures;for(let j=0,ae=ne.length;j<ae;j++){let ue=n.get(ne[j]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(A)}let H=0;function $(){H=0}function te(){return H}function xe(A){H=A}function Pe(){let A=H;return A>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function Y(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function se(A,b){let z=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let ne=A.image;if(ne===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(z,A,b);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function ge(A,b){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ct(z,A,b);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function Re(A,b){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ct(z,A,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function Q(A,b){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ln(z,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let ye={[Ja]:i.REPEAT,[ht]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},nt={[Xe]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[et]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Me={[Yf]:i.NEVER,[ah]:i.ALWAYS,[$f]:i.LESS,[qr]:i.LEQUAL,[Zf]:i.EQUAL,[rh]:i.GEQUAL,[Kf]:i.GREATER,[Jf]:i.NOTEQUAL};function je(A,b){if(b.type===pt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===et||b.magFilter===So||b.magFilter===kr||b.magFilter===ci||b.minFilter===et||b.minFilter===So||b.minFilter===kr||b.minFilter===ci)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ye[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ye[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ye[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xe||b.minFilter!==kr&&b.minFilter!==ci||b.type===pt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function it(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",L),R(b));let ne=b.source,j=p.get(ne);j===void 0&&(j={},p.set(ne,j));let ae=Y(b);if(ae!==A.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ae].usedTimes++;let ue=j[A.__cacheKey];ue!==void 0&&(j[A.__cacheKey].usedTimes--,ue.usedTimes===0&&G(b)),A.__cacheKey=ae,A.__webglTexture=j[ae].texture}return z}function We(A,b,z){return Math.floor(Math.floor(A/z)/b)}function Tt(A,b,z,ne){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,ne,b.data);else{ae.sort((I,J)=>I.start-J.start);let ue=0;for(let I=1;I<ae.length;I++){let J=ae[ue],q=ae[I],ce=J.start+J.count,re=We(q.start,b.width,4),oe=We(J.start,b.width,4);q.start<=ce+1&&re===oe&&We(q.start+q.count-1,b.width,4)===re?J.count=Math.max(J.count,q.start+q.count-J.start):(++ue,ae[ue]=q)}ae.length=ue+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let I=0,J=ae.length;I<J;I++){let q=ae[I],ce=Math.floor(q.start/4),re=Math.ceil(q.count/4),oe=ce%b.width,Ce=Math.floor(ce/b.width),Ge=re,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,oe,Ce,Ge,ie,z,ne,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Ct(A,b,z){let ne=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=i.TEXTURE_3D);let j=it(A,b),ae=b.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+z);let ue=n.get(ae);if(ae.version!==ue.__version||j===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ie=Ke.getPrimaries(Ke.workingColorSpace),Ie=b.colorSpace===Gt?null:Ke.getPrimaries(b.colorSpace),Ve=b.colorSpace===Gt||ie===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let K=_(b.image,!1,s.maxTextureSize);K=Le(b,K);let le=r.convert(b.format,b.colorSpace),I=r.convert(b.type),J=w(b.internalFormat,le,I,b.normalized,b.colorSpace,b.isVideoTexture);je(ne,b);let q,ce=b.mipmaps,re=b.isVideoTexture!==!0,oe=ue.__version===void 0||j===!0,Ce=ae.dataReady,Ge=y(b,K);if(b.isDepthTexture)J=x(b.format===hi,b.type),oe&&(re?t.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,le,I,null));else if(b.isDataTexture)if(ce.length>0){re&&oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let ie=0,Ie=ce.length;ie<Ie;ie++)q=ce[ie],re?Ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,I,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,le,I,q.data);b.generateMipmaps=!1}else re?(oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,K.width,K.height),Ce&&Tt(b,K,le,I)):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,le,I,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){re&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,ce[0].width,ce[0].height,K.depth);for(let ie=0,Ie=ce.length;ie<Ie;ie++)if(q=ce[ie],b.format!==St)if(le!==null)if(re){if(Ce)if(b.layerUpdates.size>0){let Ve=gh(q.width,q.height,b.format,b.type);for(let pe of b.layerUpdates){let ct=q.data.subarray(pe*Ve/q.data.BYTES_PER_ELEMENT,(pe+1)*Ve/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,pe,q.width,q.height,1,le,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,K.depth,le,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,K.depth,0,q.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,K.depth,le,I,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,K.depth,0,le,I,q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{re&&oe&&t.texStorage2D(i.TEXTURE_2D,Ge,J,ce[0].width,ce[0].height);for(let ie=0,Ie=ce.length;ie<Ie;ie++)q=ce[ie],b.format!==St?le!==null?re?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,q.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,le,I,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,le,I,q.data)}else if(b.isDataArrayTexture)if(re){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,J,K.width,K.height,K.depth),Ce)if(b.layerUpdates.size>0){let ie=gh(K.width,K.height,b.format,b.type);for(let Ie of b.layerUpdates){let Ve=K.data.subarray(Ie*ie/K.data.BYTES_PER_ELEMENT,(Ie+1)*ie/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,K.width,K.height,1,le,I,Ve)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,I,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,le,I,K.data);else if(b.isData3DTexture)re?(oe&&t.texStorage3D(i.TEXTURE_3D,Ge,J,K.width,K.height,K.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,I,K.data)):t.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,le,I,K.data);else if(b.isFramebufferTexture){if(oe)if(re)t.texStorage2D(i.TEXTURE_2D,Ge,J,K.width,K.height);else{let ie=K.width,Ie=K.height;for(let Ve=0;Ve<Ge;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,J,ie,Ie,0,le,I,null),ie>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),K.parentNode!==ie){ie.appendChild(K),u.add(b),ie.onpaint=Ie=>{let Ve=Ie.changedElements;for(let pe of u)Ve.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Ve=i.RGBA,pe=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,pe,ct,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){let ie=Oe(ce[0]);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}for(let ie=0,Ie=ce.length;ie<Ie;ie++)q=ce[ie],re?Ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,le,I,q):t.texImage2D(i.TEXTURE_2D,ie,J,le,I,q);b.generateMipmaps=!1}else if(re){if(oe){let ie=Oe(K);t.texStorage2D(i.TEXTURE_2D,Ge,J,ie.width,ie.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,I,K)}else t.texImage2D(i.TEXTURE_2D,0,J,le,I,K);T(b)&&b.mipmapsAutoUpdate===!0&&M(ne),ue.__version=ae.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ln(A,b,z){if(b.image.length!==6)return;let ne=it(A,b),j=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let ae=n.get(j);if(j.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let ue=Ke.getPrimaries(Ke.workingColorSpace),Z=b.colorSpace===Gt?null:Ke.getPrimaries(b.colorSpace),K=b.colorSpace===Gt||ue===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let le=b.isCompressedTexture||b.image[0].isCompressedTexture,I=b.image[0]&&b.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!le&&!I?J[pe]=_(b.image[pe],!0,s.maxCubemapSize):J[pe]=I?b.image[pe].image:b.image[pe],J[pe]=Le(b,J[pe]);let q=J[0],ce=r.convert(b.format,b.colorSpace),re=r.convert(b.type),oe=w(b.internalFormat,ce,re,b.normalized,b.colorSpace),Ce=b.isVideoTexture!==!0,Ge=ae.__version===void 0||ne===!0,ie=j.dataReady,Ie=y(b,q);je(i.TEXTURE_CUBE_MAP,b);let Ve;if(b.isDepthTexture){if(oe=x(b.format===hi,b.type),Ge)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,q.width,q.height);else for(let pe=0;pe<6;pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,q.width,q.height,0,ce,re,null)}else if(le){Ce&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,oe,q.width,q.height);for(let pe=0;pe<6;pe++){Ve=J[pe].mipmaps;for(let ct=0;ct<Ve.length;ct++){let Ft=Ve[ct];b.format!==St?ce!==null?Ce?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct,0,0,Ft.width,Ft.height,ce,Ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct,oe,Ft.width,Ft.height,0,Ft.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct,0,0,Ft.width,Ft.height,ce,re,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct,oe,Ft.width,Ft.height,0,ce,re,Ft.data)}}}else{if(Ve=b.mipmaps,Ce&&Ge){Ve.length>0&&Ie++;let pe=Oe(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(I){Ce?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,J[pe].width,J[pe].height,ce,re,J[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,J[pe].width,J[pe].height,0,ce,re,J[pe].data);for(let ct=0;ct<Ve.length;ct++){let mi=Ve[ct].image[pe].image;Ce?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct+1,0,0,mi.width,mi.height,ce,re,mi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct+1,oe,mi.width,mi.height,0,ce,re,mi.data)}}else{Ce?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,re,J[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,re,J[pe]);for(let ct=0;ct<Ve.length;ct++){let Ft=Ve[ct];Ce?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct+1,0,0,ce,re,Ft.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ct+1,oe,ce,re,Ft.image[pe])}}}T(b)&&b.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ae.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,z,ne,j,ae){let ue=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),K=w(z.internalFormat,ue,Z,z.normalized,z.colorSpace),le=n.get(b),I=n.get(z);if(I.__renderTarget=b,!le.__hasExternalTextures){let J=Math.max(1,b.width>>ae),q=Math.max(1,b.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,K,J,q,b.depth,0,ue,Z,null):t.texImage2D(j,ae,K,J,q,0,ue,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,I.__webglTexture,0,xt(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,I.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wn(A,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let ne=b.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,ae=x(b.stencilBuffer,j),ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(b),ae,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(b),ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{let ne=b.textures;for(let j=0;j<ne.length;j++){let ae=ne[j],ue=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),K=w(ae.internalFormat,ue,Z,ae.normalized,ae.colorSpace);de(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(b),K,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(b),K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,b,z){let ne=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);j.__renderTarget=b;let ae=ne?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||ae.width!==b.width||ae.height!==b.height)&&(ae.width=b.width,ae.height=b.height,b.depthTexture.needsUpdate=!0),ne?Q(b.depthTexture,0):se(b.depthTexture,0);let ue=j.__webglTexture,Z=xt(b),K=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,le=b.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ai)de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,K,ue,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,le,K,ue,0);else if(b.depthTexture.format===hi)de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,K,ue,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,le,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bn(A){let b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=ne}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)Dt(b.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?Dt(b.__webglFramebuffer[0],A,0):Dt(b.__webglFramebuffer,A,0);else if(z){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=i.createRenderbuffer(),Wn(b.__webglDepthbuffer[ne],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Wn(b.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Sn(A,b,z){let ne=n.get(A);b!==void 0&&_t(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&bn(A)}function wn(A){let b=A.texture,z=n.get(A),ne=n.get(b);A.addEventListener("dispose",B),R(A);let j=A.textures,ae=A.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=b.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let K=0;K<b.mipmaps.length;K++)z.__webglFramebuffer[Z][K]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(b.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Z=0,K=j.length;Z<K;Z++){let le=n.get(j[Z]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let K=j[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let le=r.convert(K.format,K.colorSpace),I=r.convert(K.type),J=w(K.internalFormat,le,I,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),q=xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Wn(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),je(i.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)_t(z.__webglFramebuffer[Z][K],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else _t(z.__webglFramebuffer[Z],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(b)?M(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Z=0,K=j.length;Z<K;Z++){let le=j[Z],I=n.get(le),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,I.__webglTexture),je(J,le),_t(z.__webglFramebuffer,A,le,i.COLOR_ATTACHMENT0+Z,J,0),T(le)&&M(J)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ne.__webglTexture),je(Z,b),b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)_t(z.__webglFramebuffer[K],A,b,i.COLOR_ATTACHMENT0,Z,K);else _t(z.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,Z,0);T(b)?M(Z):b.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&bn(A)}function U(A){let b=A.textures;for(let z=0,ne=b.length;z<ne;z++){let j=b[z];if(T(j)&&j.mipmapsAutoUpdate===!0){let ae=E(A),ue=n.get(j).__webglTexture;t.bindTexture(ae,ue),M(ae),t.unbindTexture()}}}let Tn=[];function vt(A){if(A.samples>0){if(de(A)===!1){let b=A.textures,z=A.width,ne=A.height,j=i.COLOR_BUFFER_BIT,ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),Z=b.length>1;if(Z)for(let le=0;le<b.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<b.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let I=n.get(b[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,j,i.NEAREST),l===!0&&(Tn.length=0,Tn.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Tn.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<b.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let I=n.get(b[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function de(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Le(A,b){let z=A.colorSpace,ne=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ws&&z!==Gt&&(Ke.getTransfer(z)===ot?(ne!==St||j!==Bt)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",z)),b}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=$,this.getTextureUnits=te,this.setTextureUnits=xe,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=Re,this.setTextureCube=Q,this.rebindTextures=Sn,this.setupRenderTarget=wn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=bn,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=de,this.dispose=F}function j2(i,e){function t(n,s=Gt){let r,a=Ke.getTransfer(s);if(n===Bt)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qc)return i.BYTE;if(n===eh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===pt)return i.FLOAT;if(n===ze)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===St)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Os)return i.RED;if(n===Ao)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===zr||n===Vr||n===Gr||n===Hr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Io||n===Lo||n===No)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Fo||n===Uo||n===Oo||n===Bo||n===Wr||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Fo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return r.COMPRESSED_R11_EAC;if(n===Bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zo||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===Xr||n===rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function nx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,fh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),T=_.envMap,M=_.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(k0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ix(i,e,t,n){let s={},r={};function a(_,T){let M=T.program;n.uniformBlockBinding(_,M,s[_.id])}function o(_,T){let M=s[_.id];M===void 0&&(d(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",g));let E=T.program;n.updateUBOMapping(_,E);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let T=i.createBuffer(),M=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(_){let T=s[_.id],M=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,x=M.length;w<x;w++){let y=M[w];if(Array.isArray(y))for(let R=0,C=y.length;R<C;R++)h(y[R],w,R,E);else h(y,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,T,M,E){if(f(_,T,M,E)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let y=0;for(let R=0;R<x.length;R++){let C=x[R],L=v(C,!0);u(C,_.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function u(_,T,M){typeof _=="number"||typeof _=="boolean"?T[M]=_:_.isMatrix3?(T[M]=_.elements[0],T[M+1]=_.elements[1],T[M+2]=_.elements[2],T[M+3]=0,T[M+4]=_.elements[3],T[M+5]=_.elements[4],T[M+6]=_.elements[5],T[M+7]=0,T[M+8]=_.elements[6],T[M+9]=_.elements[7],T[M+10]=_.elements[8],T[M+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-M),M):_.toArray(T,M)}function f(_,T,M,E){let w=_.value,x=T+"_"+M;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);let y=E[x],R=!1;for(let C=0;C<w.length;C++)p(w[C],y,C)===!0&&(R=!0);return R}return p(w,E,x)}function p(_,T,M){if(T[M]===void 0)return typeof _=="number"||typeof _=="boolean"?T[M]=_:ArrayBuffer.isView(_)?T[M]=_.slice():T[M]=_.clone(),!0;{let E=T[M];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return T[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function d(_){let T=_.uniforms,M=0,E=16;for(let x=0,y=T.length;x<y;x++){let R=Array.isArray(T[x])?T[x]:[T[x]];for(let C=0,L=R.length;C<L;C++){let B=R[C],X=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(T[x])||Array.isArray(B.value),F=M;for(let G=0,ee=X.length;G<ee;G++){let H=X[G],$=v(H,N),te=M%E,xe=te%$.boundary,Pe=te+xe;M+=xe,Pe!==0&&E-Pe<$.storage&&(M+=E-Pe),G===0&&(F=M),M+=$.storage}let O=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new O((M-F)/Float32Array.BYTES_PER_ELEMENT),B.__offset=F}}let w=M%E;return w>0&&(M+=E-w),_.__size=M,_.__cache={},this}function v(_,T){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(_){let T=_.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:m}}function rx(){return Zn===null&&(Zn=new wi(sx,16,16,$n,ze),Zn.name="DFG_LUT",Zn.minFilter=et,Zn.magFilter=et,Zn.wrapS=ht,Zn.wrapT=ht,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var b1,S1,w1,T1,E1,A1,C1,R1,P1,I1,L1,N1,D1,F1,U1,O1,B1,k1,z1,V1,G1,H1,W1,X1,q1,Y1,$1,Z1,K1,J1,j1,Q1,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,fg,dg,pg,mg,gg,vg,xg,_g,yg,Mg,bg,Sg,wg,Tg,Eg,Ag,Cg,Rg,Pg,Ig,Lg,Ng,Dg,Fg,Ug,Og,Bg,kg,zg,Vg,Gg,Hg,Wg,Xg,qg,Yg,$g,Zg,Kg,Jg,jg,Qg,ev,tv,nv,iv,sv,rv,av,ov,lv,cv,hv,uv,fv,dv,pv,mv,gv,vv,xv,_v,yv,Mv,bv,Sv,wv,Tv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Nv,Dv,Fv,Uv,Ov,Bv,kv,zv,Vv,Gv,Hv,Wv,Xv,qv,Yv,$v,Zv,Kv,Jv,jv,Qv,e3,He,me,Kn,ll,t3,P0,Zr,l0,o3,l3,I0,L0,c3,h3,u3,zs,b3,N0,D0,F0,U0,O0,B0,f0,d0,p0,m0,g0,yh,Mh,bh,xh,ks,u2,f2,_0,g2,cl,b2,w2,E2,C2,P2,N2,wh,Th,V2,X2,q2,Y2,$2,C0,Yr,_h,Q2,ex,Eh,Ah,tx,k0,sx,Zn,hl,wt=qu(()=>{vh();vh();b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",j1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_g=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,av=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:b1,alphahash_pars_fragment:S1,alphamap_fragment:w1,alphamap_pars_fragment:T1,alphatest_fragment:E1,alphatest_pars_fragment:A1,aomap_fragment:C1,aomap_pars_fragment:R1,batching_pars_vertex:P1,batching_vertex:I1,begin_vertex:L1,beginnormal_vertex:N1,bsdfs:D1,iridescence_fragment:F1,bumpmap_pars_fragment:U1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:z1,color_fragment:V1,color_pars_fragment:G1,color_pars_vertex:H1,color_vertex:W1,common:X1,defaultnormal_vertex:q1,displacementmap_pars_vertex:Y1,displacementmap_vertex:$1,emissivemap_fragment:Z1,emissivemap_pars_fragment:K1,colorspace_fragment:J1,colorspace_pars_fragment:j1,envmap_fragment:Q1,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:dg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:ag,fog_pars_fragment:og,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:ug,lights_pars_begin:fg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:vg,lights_physical_fragment:xg,lights_physical_pars_fragment:_g,lights_fragment_begin:yg,lights_fragment_maps:Mg,lights_fragment_end:bg,lightprobes_pars_fragment:Sg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Dg,morphcolor_vertex:Fg,morphnormal_vertex:Ug,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:kg,normal_fragment_maps:zg,normal_pars_fragment:Vg,normal_pars_vertex:Gg,normal_vertex:Hg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:Zg,packing:Kg,premultiplied_alpha_fragment:Jg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:av,skinbase_vertex:ov,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:hv,specularmap_fragment:uv,specularmap_pars_fragment:fv,tonemapping_fragment:dv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:vv,uv_pars_vertex:xv,uv_vertex:_v,worldpos_vertex:yv,background_vert:Mv,background_frag:bv,backgroundCube_vert:Sv,backgroundCube_frag:wv,cube_vert:Tv,cube_frag:Ev,depth_vert:Av,depth_frag:Cv,distance_vert:Rv,distance_frag:Pv,equirect_vert:Iv,equirect_frag:Lv,linedashed_vert:Nv,linedashed_frag:Dv,meshbasic_vert:Fv,meshbasic_frag:Uv,meshlambert_vert:Ov,meshlambert_frag:Bv,meshmatcap_vert:kv,meshmatcap_frag:zv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Hv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:Yv,meshtoon_frag:$v,points_vert:Zv,points_frag:Kv,shadow_vert:Jv,shadow_frag:jv,sprite_vert:Qv,sprite_frag:e3},me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Kn={basic:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Qt([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Qt([me.lights,me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Kn.physical={uniforms:Qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};ll={r:0,b:0,g:0},t3=new Be,P0=new Fe;P0.set(-1,0,0,0,1,0,0,0,1);Zr=class extends dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Vn});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=et),new Ps(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},l0=256,o3=3,l3=20,I0=256,L0=16,c3=3,h3=new P,u3=new Te,zs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ps(1,10,null),this._boxMesh=new rt(new Ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=h3}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,d=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(u3));let g=new Ps(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=d,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(l0,hh(e))}_fromTexture(e,t){e.mapping===ji||e.mapping===Fs?this._setSize(e.image.length===0?l0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=c0(e,!1,!1),n=Math.log2(e)-o3;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=c0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ji||e.mapping===Fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=h0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=f3(),this._integrationMaterial=d3());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/L0);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-c3)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(I0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p3());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};b3={[Yc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};N0=new cn,D0=new _n(1,1),F0=new br(1),U0=new vr,O0=new no,B0=new Mr,f0=[],d0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H3(t.type)}},Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c2(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);h2(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};u2=37297,f2=0;_0=new Fe;g2={[Yc]:"Linear",[$c]:"Reinhard",[Zc]:"Cineon",[Br]:"ACESFilmic",[Jc]:"AgX",[jc]:"Neutral",[Kc]:"Custom"};cl=new P;b2=/^[ \t]*#include +<([\w\d./]+)>/gm;w2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;E2={[Or]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};C2={[Fs]:"ENVMAP_MODE_REFRACTION"};P2={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Vf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};N2=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Th(e),t.set(e,n)),n}},Th=class{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}};V2=0;X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y2=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],$2=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],C0=new Be,Yr=new P,_h=new P;Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:Q2,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,d=null,v=typeof XRWebGLBinding<"u",g=new Eh,m={},_=t.getContextAttributes(),T=null,M=null,E=[],w=[],x=new _e,y=null,R=null,C=new zt;C.viewport=new lt;let L=new zt;L.viewport=new lt;let B=[C,L],X=new vo,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=E[Y];return se===void 0&&(se=new Cs,E[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=E[Y];return se===void 0&&(se=new Cs,E[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=E[Y];return se===void 0&&(se=new Cs,E[Y]=se),se.getHandSpace()};function O(Y){let se=w.indexOf(Y.inputSource);if(se===-1)return;let ge=E[se];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<E.length;Y++){let se=w[Y];se!==null&&(w[Y]=null,E[Y].disconnect(se))}N=null,F=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(T),p=null,f=null,u=null,s=null,M=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Re=null,Q=null;_.depth&&(Q=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?hi:ai,Re=_.stencil?Qi:Gn);let ye={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new dt(f.textureWidth,f.textureHeight,{format:St,type:Bt,depthTexture:new _n(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new dt(p.framebufferWidth,p.framebufferHeight,{format:St,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(Y){for(let se=0;se<Y.removed.length;se++){let ge=Y.removed[se],Re=w.indexOf(ge);Re>=0&&(w[Re]=null,E[Re].disconnect(ge))}for(let se=0;se<Y.added.length;se++){let ge=Y.added[se],Re=w.indexOf(ge);if(Re===-1){for(let ye=0;ye<E.length;ye++)if(ye>=w.length){w.push(ge),Re=ye;break}else if(w[ye]===null){w[ye]=ge,Re=ye;break}if(Re===-1)break}let Q=E[Re];Q&&Q.connect(ge)}}function H(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let se=Y.near,ge=Y.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),X.near=L.near=C.near=se,X.far=L.far=C.far=ge,(N!==X.near||F!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,F=X.far),X.layers.mask=Y.layers.mask|6,C.layers.mask=X.layers.mask&-5,L.layers.mask=X.layers.mask&-3;let Re=Y.parent,Q=X.cameras;H(X,Re);for(let ye=0;ye<Q.length;ye++)H(Q[ye],Re);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),$(Y,X,Re)};function $(Y,se,ge){ge===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(Y){return m[Y]};let te=null;function xe(Y,se){if(h=se.getViewerPose(c||a),d=se,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;ge.length!==X.cameras.length&&(X.cameras.length=0,Re=!0);for(let Me=0;Me<ge.length;Me++){let je=ge[Me],it=null;if(p!==null)it=p.getViewport(je);else{let Tt=u.getViewSubImage(f,je);it=Tt.viewport,Me===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(M))}let We=B[Me];We===void 0&&(We=new zt,We.layers.enable(Me),We.viewport=new lt,B[Me]=We),We.matrix.fromArray(je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(it.x,it.y,it.width,it.height),Me===0&&(X.matrix.copy(We.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Re===!0&&X.cameras.push(We)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Me=u.getDepthInformation(ge[0]);Me&&Me.isValid&&Me.texture&&g.init(Me,s.renderState)}if(Q&&Q.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Me=0;Me<ge.length;Me++){let je=ge[Me].camera;if(je){let it=m[je];it||(it=new Sr,m[je]=it);let We=u.getCameraImage(je);it.sourceTexture=We}}}}for(let ge=0;ge<E.length;ge++){let Re=w[ge],Q=E[ge];Re!==null&&Q!==void 0&&Q.update(Re,se,c||a)}te&&te(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),d=null}let Pe=new R0;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}},tx=new Be,k0=new Fe;k0.set(-1,0,0,0,1,0,0,0,1);sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;hl=class{constructor(e={}){let{canvas:t=Qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Bt}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let v=p,g=new Set([Ro,Co,Ao]),m=new Set([Bt,Gn,Us,Qi,To,Eo]),_=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,w=null,x=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,X=null,N=null,F=null;this._outputColorSpace=sn;let O=0,G=0,ee=null,H=-1,$=null,te=new lt,xe=new lt,Pe=null,Y=new Te(0),se=0,ge=t.width,Re=t.height,Q=1,ye=null,nt=null,Me=new lt(0,0,ge,Re),je=new lt(0,0,ge,Re),it=!1,We=new Ei,Tt=new io,Ct=!1,ln=!1,_t=new Be,Wn=new P,Dt=new lt,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Sn=!1;function wn(){return ee===null?Q:1}let U=n;function Tn(S,D){return t.getContext(S,D)}let vt,xt,de,Rt,Le,Oe,A,b,z,ne,j,ae,ue,Z,K,le,I,J,q,ce,re,oe,Ce;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){let D="webgl2";if(U=Tn(D,S),U===null)throw Tn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(S){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ue("WebGLRenderer: "+S.message),S}function Ge(){vt=new g3(U),vt.init(),re=new j2(U,vt),xt=new r3(U,vt,e,re),de=new K2(U,vt),xt.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),X=U.createFramebuffer(),N=U.createFramebuffer(),F=U.createFramebuffer(),Rt=new _3(U),Le=new U2,Oe=new J2(U,vt,de,Le,xt,re,Rt),A=new m3(C),b=new M1(U),oe=new i3(U,b),z=new v3(U,b,Rt,oe),ne=new M3(U,z,b,oe,Rt),J=new y3(U,xt,Oe),K=new a3(Le),j=new F2(C,A,vt,xt,oe,K),ae=new nx(C,Le),ue=new B2,Z=new W2(vt),I=new n3(C,A,de,ne,d,l),le=new Z2(C,ne,xt),Ce=new ix(U,Rt,xt,de),q=new s3(U,vt,Rt),ce=new x3(U,vt,Rt),Rt.programs=j.programs,C.capabilities=xt,C.extensions=vt,C.properties=Le,C.renderLists=ue,C.shadowMap=le,C.state=de,C.info=Rt}v!==Bt&&(R=new S3(v,t.width,t.height,o,s,r));let ie=new Ah(C,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(ge,Re,!1))},this.getSize=function(S){return S.set(ge,Re)},this.setSize=function(S,D,W=!0){if(ie.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=S,Re=D,t.width=Math.floor(S*Q),t.height=Math.floor(D*Q),W===!0&&(t.style.width=S+"px",t.style.height=D+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(ge*Q,Re*Q).floor()},this.setDrawingBufferSize=function(S,D,W){ge=S,Re=D,Q=W,t.width=Math.floor(S*W),t.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(v===Bt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,D,W,k){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,D,W,k),de.viewport(te.copy(Me).multiplyScalar(wn()).round())},this.getScissor=function(S){return S.copy(je)},this.setScissor=function(S,D,W,k){S.isVector4?je.set(S.x,S.y,S.z,S.w):je.set(S,D,W,k),de.scissor(xe.copy(je).multiplyScalar(wn()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){de.setScissorTest(it=S)},this.setOpaqueSort=function(S){ye=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let k=0;if(S){let V=!1;if(ee!==null){let fe=ee.texture.format;V=g.has(fe)}if(V){let fe=ee.texture.type,be=m.has(fe),he=I.getClearColor(),ve=I.getClearAlpha(),Ae=he.r,ke=he.g,$e=he.b;be?(_[0]=Ae,_[1]=ke,_[2]=$e,_[3]=ve,U.clearBufferuiv(U.COLOR,0,_)):(T[0]=Ae,T[1]=ke,T[2]=$e,T[3]=ve,U.clearBufferiv(U.COLOR,0,T))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),I.dispose(),ue.dispose(),Z.dispose(),Oe.dispose(),Le.dispose(),A.dispose(),ne.dispose(),z.dispose(),oe.dispose(),Ce.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Uu),ie.removeEventListener("sessionend",Ou),Vi.stop()};function Ie(S){S.preventDefault(),lh("WebGLRenderer: Context Lost."),L=!0}function Ve(){lh("WebGLRenderer: Context Restored."),L=!1;let S=Rt.autoReset,D=le.enabled,W=le.autoUpdate,k=le.needsUpdate,V=le.type;Ge(),Rt.autoReset=S,le.enabled=D,le.autoUpdate=W,le.needsUpdate=k,le.type=V}function pe(S){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ct(S){let D=S.target;D.removeEventListener("dispose",ct),Ft(D)}function Ft(S){mi(S),Le.remove(S)}function mi(S){let D=Le.get(S).programs;D!==void 0&&(D.forEach(function(W){j.releaseProgram(W)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,k,V,fe){D===null&&(D=bn);let be=V.isMesh&&V.matrixWorld.determinantAffine()<0,he=hm(S,D,W,k,V);de.setMaterial(k,be);let ve=W.index,Ae=1;if(k.wireframe===!0){if(ve=z.getWireframeAttribute(W),ve===void 0)return;Ae=2}let ke=W.drawRange,$e=W.attributes.position,Se=ke.start*Ae,Ze=(ke.start+ke.count)*Ae;fe!==null&&(Se=Math.max(Se,fe.start*Ae),Ze=Math.min(Ze,(fe.start+fe.count)*Ae)),ve!==null?(Se=Math.max(Se,0),Ze=Math.min(Ze,ve.count)):$e!=null&&(Se=Math.max(Se,0),Ze=Math.min(Ze,$e.count));let Et=Ze-Se;if(Et<0||Et===1/0)return;oe.setup(V,k,he,W,ve);let ft,ut=q;if(ve!==null&&(ft=b.get(ve),ut=ce,ut.setIndex(ft)),V.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*wn()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(V.isLine){let Xt=k.linewidth;Xt===void 0&&(Xt=1),de.setLineWidth(Xt*wn()),V.isLineSegments?ut.setMode(U.LINES):V.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else V.isPoints?ut.setMode(U.POINTS):V.isSprite&&ut.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xt=V._multiDrawStarts,we=V._multiDrawCounts,nn=V._multiDrawCount,st=ve?b.get(ve).bytesPerElement:1,Gi=Le.get(k).currentProgram.getUniforms();for(let qt=0;qt<nn;qt++)Gi.setValue(U,"_gl_DrawID",qt),ut.render(Xt[qt]/st,we[qt])}else if(V.isInstancedMesh)ut.renderInstances(Se,Et,V.count);else if(W.isInstancedBufferGeometry){let Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Xt);ut.renderInstances(Se,Et,we)}else ut.render(Se,Et)};function Fu(S,D,W,k){B!==null&&S.isNodeMaterial&&B.setObject(k,S),Ct===!0&&K.setState(S,W,!1),S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,ir(S,D,k),S.side=qn,S.needsUpdate=!0,ir(S,D,k),S.side=rn):ir(S,D,k)}this.compile=function(S,D,W=null){W===null&&(W=S),B!==null&&B.renderStart(S,D,W),w=Z.get(W),w.init(D),y.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),ln=this.localClippingEnabled,Ct=K.init(this.clippingPlanes,ln),Ct===!0&&K.setGlobalState(this.clippingPlanes,D),B!==null&&le.render(w.state.shadowsArray,W,D);let k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let fe=V.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){let he=fe[be];Fu(he,W,D,V),k.add(he)}else Fu(fe,W,D,V),k.add(fe)}),w=y.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(S,D,W=null){let k=this.compile(S,D,W);return new Promise(V=>{function fe(){if(k.forEach(function(be){let ve=Le.get(be).currentProgram;(ve===void 0||ve.isReady())&&k.delete(be)}),k.size===0){V(S);return}setTimeout(fe,10)}vt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let fc=null;function lm(S){fc&&fc(S)}function Uu(){Vi.stop()}function Ou(){Vi.start()}let Vi=new R0;Vi.setAnimationLoop(lm),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(S){fc=S,ie.setAnimationLoop(S),S===null?Vi.stop():Vi.start()},ie.addEventListener("sessionstart",Uu),ie.addEventListener("sessionend",Ou),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(S,D);let W=ie.enabled===!0&&ie.isPresenting===!0,k=R!==null&&(ee===null||W)&&R.begin(C,ee);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,ee),w=Z.get(S,y.length),w.init(D),w.state.textureUnits=Oe.getTextureUnits(),y.push(w),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Tt.setFromArrayCamera(D):We.setFromProjectionMatrix(_t,An,D.reversedDepth),ln=this.localClippingEnabled,Ct=K.init(this.clippingPlanes,ln),E=ue.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let be=C.xr.getDepthSensingMesh();be!==null&&dc(be,D,-1/0,C.sortObjects)}dc(S,D,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(ye,nt),Sn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Sn&&I.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&K.beginShadows();let V=w.state.shadowsArray;if(le.render(V,S,D),Ct===!0&&K.endShadows(),(k&&R.hasRenderPass())===!1){let be=E.opaque,he=E.transmissive;if(w.setupLights(),D.isArrayCamera){let ve=D.cameras;if(he.length>0)for(let Ae=0,ke=ve.length;Ae<ke;Ae++){let $e=ve[Ae];ku(be,he,S,$e)}Sn&&I.render(S);for(let Ae=0,ke=ve.length;Ae<ke;Ae++){let $e=ve[Ae];Bu(E,S,$e,$e.viewport)}}else he.length>0&&ku(be,he,S,D),Sn&&I.render(S),Bu(E,S,D)}ee!==null&&G===0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee)),k&&R.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),oe.resetDefaultState(),H=-1,$=null,y.pop(),y.length>0?(w=y[y.length-1],Oe.setTextureUnits(w.state.textureUnits),Ct===!0&&K.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,B!==null&&B.renderEnd()};function dc(S,D,W,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let be=D.isArrayCamera?Tt:We;if(!S.frustumCulled||S.intersectsFrustum(be)){k&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);let he=ne.update(S),ve=S.material;ve.visible&&E.push(S,he,ve,W,Dt.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let be=D.isArrayCamera?Tt:We;if(!S.frustumCulled||S.intersectsFrustum(be)){let he=ne.update(S),ve=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Dt.copy(he.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(ve)){let Ae=he.groups;for(let ke=0,$e=Ae.length;ke<$e;ke++){let Se=Ae[ke],Ze=ve[Se.materialIndex];Ze&&Ze.visible&&E.push(S,he,Ze,W,Dt.z,Se,D)}}else ve.visible&&E.push(S,he,ve,W,Dt.z,null,D)}}}let fe=S.children;for(let be=0,he=fe.length;be<he;be++)dc(fe[be],D,W,k)}function Bu(S,D,W,k){let{opaque:V,transmissive:fe,transparent:be}=S;w.setupLightsView(W),Ct===!0&&K.setGlobalState(C.clippingPlanes,W),k&&de.viewport(te.copy(k)),V.length>0&&va(V,D,W),fe.length>0&&va(fe,D,W),be.length>0&&va(be,D,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ku(S,D,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Se=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new dt(1,1,{generateMipmaps:!0,type:Se?ze:Bt,minFilter:ci,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let fe=w.state.transmissionRenderTarget[k.id],be=k.viewport||te;fe.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),ve=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Y),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),Sn&&I.render(W);let ke=C.toneMapping;C.toneMapping=Pn;let $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ct===!0&&K.setGlobalState(C.clippingPlanes,k),va(S,W,k),Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ze=0,Et=D.length;Ze<Et;Ze++){let ft=D[Ze],{object:ut,geometry:Xt,material:we,group:nn}=ft;if(we.side===rn&&ut.layers.test(k.layers)){let st=we.side;we.side=Vt,we.needsUpdate=!0,zu(ut,W,k,Xt,we,nn),we.side=st,we.needsUpdate=!0,Se=!0}}Se===!0&&(Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe))}C.setRenderTarget(he,ve,Ae),C.setClearColor(Y,se),$e!==void 0&&(k.viewport=$e),C.toneMapping=ke}function va(S,D,W){let k=D.isScene===!0?D.overrideMaterial:null;for(let V=0,fe=S.length;V<fe;V++){let be=S[V],{object:he,geometry:ve,group:Ae}=be,ke=be.material;ke.allowOverride===!0&&k!==null&&(ke=k),he.layers.test(W.layers)&&zu(he,D,W,ve,ke,Ae)}}function zu(S,D,W,k,V,fe){B!==null&&V.isNodeMaterial&&B.setObject(S,V),S.onBeforeRender(C,D,W,k,V,fe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,D,W,k,S,fe),V.transparent===!0&&V.side===rn&&V.forceSinglePass===!1?(V.side=Vt,V.needsUpdate=!0,C.renderBufferDirect(W,D,k,V,S,fe),V.side=qn,V.needsUpdate=!0,C.renderBufferDirect(W,D,k,V,S,fe),V.side=rn):C.renderBufferDirect(W,D,k,V,S,fe),S.onAfterRender(C,D,W,k,V,fe)}function Vu(S){let D=0;for(let W of S)W.texture!==null&&D++;return D}function ir(S,D,W){D.isScene!==!0&&(D=bn);let k=Le.get(S),V=w.state.lights,fe=w.state.shadowsArray,be=V.state.version,he=j.getParameters(S,V.state,fe,D,W,w.state.lightProbeGridArray),ve=j.getProgramCacheKey(he),Ae=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=A.get(S.envMap||k.environment,ke),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",ct),Ae=new Map,k.programs=Ae,k.programVariants=new Map);let $e=Ae.get(ve);if($e!==void 0){if(k.currentProgram===$e&&k.lightsStateVersion===be)return Hu(S,he),$e}else he.uniforms=j.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,W,he),S.onBeforeCompile(he,C),$e=j.acquireProgram(he,ve),Ae.set(ve,$e),k.uniforms=he.uniforms;let Se=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=K.uniform),Hu(S,he),k.needsLights=fm(S),k.lightsStateVersion=be,k.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Vu(w.state.lightProbeGridArray),k.currentProgram=$e,k.uniformsList=null,$e}function cm(S,D,W,k,V){let fe=Le.get(S),be=fe.currentProgram.id+","+k+","+V,he=fe.programVariants.get(be);return he===void 0?(he=ir(S,D,W),fe.programVariants.set(be,he)):(fe.currentProgram=he,fe.uniformsList=null,fe.outputColorSpace=k,fe.toneMapping=V),he}function Gu(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=ks.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Hu(S,D){let W=Le.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function hm(S,D,W,k,V){D.isScene!==!0&&(D=bn),Oe.resetTextureUnits();let fe=D.fog,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,he=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ke.workingColorSpace,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=A.get(k.envMap||be,ve),ke=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color,ft=Pn;k.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ft=C.toneMapping);let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=ut!==void 0?ut.length:0,we=Le.get(k),nn=w.state.lights;if(Ct===!0&&(ln===!0||S!==$)){let yt=S===$&&k.id===H;K.setState(k,S,yt)}let st=!1,Gi=!1;k.version===we.__version?we.needsLights&&we.lightsStateVersion!==nn.state.version||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ae||k.fog===!0&&we.fog!==fe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==K.numPlanes||we.numIntersection!==K.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==$e||we.morphTargets!==Se||we.morphNormals!==Ze||we.morphColors!==Et||we.morphTargetsCount!==Xt||we.numLightProbeGrids!==Vu(w.state.lightProbeGridArray)?st=!0:(we.outputColorSpace!==he||we.toneMapping!==ft)&&(Gi=!0):(st=!0,we.__version=k.version);let qt=we.currentProgram;(st===!0||Gi===!0)&&(qt=Gi===!0?cm(k,D,V,he,ft):ir(k,D,V),B&&k.isNodeMaterial&&B.onUpdateProgram(k,qt,we));let xa=!1,gi=!1,Hi=!1,Qe=qt.getUniforms(),kt=we.uniforms;if(de.useProgram(qt.program)&&(xa=!0,gi=!0,Hi=!0),k.id!==H&&(H=k.id,gi=!0),xa||$!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Qe.setValue(U,"projectionMatrix",S.projectionMatrix),Qe.setValue(U,"viewMatrix",S.matrixWorldInverse);let Ut=Qe.map.cameraPosition;Ut!==void 0&&Ut.setValue(U,Wn.setFromMatrixPosition(S.matrixWorld)),xt.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,gi=!0,Hi=!0)}if(we.needsLights&&(nn.state.sunShadowMap.length>0&&Qe.setValue(U,"sunShadowMap",nn.state.sunShadowMap,Oe),nn.state.directionalShadowMap.length>0&&Qe.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,Oe),nn.state.spotShadowMap.length>0&&Qe.setValue(U,"spotShadowMap",nn.state.spotShadowMap,Oe),nn.state.pointShadowMap.length>0&&Qe.setValue(U,"pointShadowMap",nn.state.pointShadowMap,Oe)),V.isSkinnedMesh){Qe.setOptional(U,V,"bindMatrix"),Qe.setOptional(U,V,"bindMatrixInverse");let yt=V.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Qe.setValue(U,"boneTexture",yt.boneTexture,Oe))}V.isBatchedMesh&&(Qe.setOptional(U,V,"batchingTexture"),Qe.setValue(U,"batchingTexture",V._matricesTexture,Oe),Qe.setOptional(U,V,"batchingIdTexture"),Qe.setValue(U,"batchingIdTexture",V._indirectTexture,Oe),Qe.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Qe.setValue(U,"batchingColorTexture",V._colorsTexture,Oe));let Dn=W.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&J.update(V,W,qt),(gi||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,Qe.setValue(U,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(kt.envMapIntensity.value=D.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=rx()),gi){if(Qe.setValue(U,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&um(kt,Hi),fe&&k.fog===!0&&ae.refreshFogUniforms(kt,fe),ae.refreshMaterialUniforms(kt,k,Q,Re,w.state.transmissionRenderTarget[S.id]),we.needsLights&&we.numLightProbeGrids>0){let yt=M,Ut=0;for(let jn of w.state.lightProbeGridArray)jn.texture!==null&&(yt.textures[Ut]=jn.texture,yt.min[Ut]=jn.boundingBox.min,yt.max[Ut]=jn.boundingBox.max,yt.resolution[Ut]=jn.resolution,Ut++);for(let jn in yt)yt[jn].length=Ut;kt.probesSH.value=yt.textures,kt.probesMin.value=yt.min,kt.probesMax.value=yt.max,kt.probesResolution.value=yt.resolution}ks.upload(U,Gu(we),kt,Oe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ks.upload(U,Gu(we),kt,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qe.setValue(U,"center",V.center),Qe.setValue(U,"modelViewMatrix",V.modelViewMatrix),Qe.setValue(U,"normalMatrix",V.normalMatrix),Qe.setValue(U,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let yt=k.uniformsGroups;for(let Ut=0,jn=yt.length;Ut<jn;Ut++){let Xu=yt[Ut];Ce.update(Xu,qt),Ce.bind(Xu,qt)}}return qt}function um(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function fm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(S,D,W){let k=Le.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Le.get(S.texture).__webglTexture=D,Le.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let W=Le.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){ee=S,O=D,G=W;let k=null,V=!1,fe=!1;if(S){let he=Le.get(S);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),te.copy(S.viewport),xe.copy(S.scissor),Pe=S.scissorTest,de.viewport(te),de.scissor(xe),de.setScissorTest(Pe),H=-1;return}else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(S);else if(he.__hasExternalTextures)Oe.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ke=S.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(S)}}let ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ae=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?k=Ae[D][W]:k=Ae[D],V=!0):S.samples>0&&Oe.useMultisampledRTT(S)===!1?k=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[W]:k=Ae,te.copy(S.viewport),xe.copy(S.scissor),Pe=S.scissorTest}else te.copy(Me).multiplyScalar(Q).floor(),xe.copy(je).multiplyScalar(Q).floor(),Pe=it;if(W!==0&&(k=X),de.bindFramebuffer(U.FRAMEBUFFER,k)&&de.drawBuffers(S,k),de.viewport(te),de.scissor(xe),de.setScissorTest(Pe),V){let he=Le.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,he.__webglTexture,W)}else if(fe){let he=D;for(let ve=0;ve<S.textures.length;ve++){let Ae=Le.get(S.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Ae.__webglTexture,W,he)}}else if(S!==null&&W!==0){let he=Le.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,W)}H=-1};function Wu(S){let D=Le.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=xt.textureFormatReadable(S.format),D.__typeReadable=xt.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,k,V,fe,be,he=0){if(!(S&&S.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve){de.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Ae=S.textures[he],ke=Ae.format,$e=Ae.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Se=Wu(Ae);if(Se.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&W>=0&&W<=S.height-V&&U.readPixels(D,W,k,V,re.convert(ke),re.convert($e),fe)}finally{let Ae=ee!==null?Le.get(ee).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,k,V,fe,be,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve)if(D>=0&&D<=S.width-k&&W>=0&&W<=S.height-V){de.bindFramebuffer(U.FRAMEBUFFER,ve);let Ae=S.textures[he],ke=Ae.format,$e=Ae.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Se=Wu(Ae);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(D,W,k,V,re.convert(ke),re.convert($e),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Et=ee!==null?Le.get(ee).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Et);let ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await t0(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){let k=Math.pow(2,-W),V=Math.floor(S.image.width*k),fe=Math.floor(S.image.height*k),be=D!==null?D.x:0,he=D!==null?D.y:0;Oe.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,be,he,V,fe),de.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,k=null,V=0,fe=0){let be,he,ve,Ae,ke,$e,Se,Ze,Et,ft=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(W!==null)be=W.max.x-W.min.x,he=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,ke=W.min.y,$e=W.isBox3?W.min.z:0;else{let Qe=Math.pow(2,-V);be=Math.floor(ft.width*Qe),he=Math.floor(ft.height*Qe),S.isDataArrayTexture?ve=ft.depth:S.isData3DTexture?ve=Math.floor(ft.depth*Qe):ve=1,Ae=0,ke=0,$e=0}k!==null?(Se=k.x,Ze=k.y,Et=k.z):(Se=0,Ze=0,Et=0);let ut=re.convert(D.format),Xt=re.convert(D.type),we;D.isData3DTexture?(Oe.setTexture3D(D,0),we=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Oe.setTexture2DArray(D,0),we=U.TEXTURE_2D_ARRAY):(Oe.setTexture2D(D,0),we=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let nn=de.getParameter(U.UNPACK_ROW_LENGTH),st=de.getParameter(U.UNPACK_IMAGE_HEIGHT),Gi=de.getParameter(U.UNPACK_SKIP_PIXELS),qt=de.getParameter(U.UNPACK_SKIP_ROWS),xa=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),de.pixelStorei(U.UNPACK_SKIP_ROWS,ke),de.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);let gi=S.isDataArrayTexture||S.isData3DTexture,Hi=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Qe=Le.get(S),kt=Le.get(D),Dn=Le.get(Qe.__renderTarget),yt=Le.get(kt.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,Dn.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ut=0;Ut<ve;Ut++)gi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,V,$e+Ut),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(D).__webglTexture,fe,Et+Ut)),U.blitFramebuffer(Ae,ke,Ae+be,ke+he,Se,Ze,Se+be,Ze+he,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Le.has(S)){let Qe=Le.get(S),kt=Le.get(D);de.bindFramebuffer(U.READ_FRAMEBUFFER,N),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let Dn=0;Dn<ve;Dn++)gi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.__webglTexture,V,$e+Dn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qe.__webglTexture,V),Hi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,fe,Et+Dn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,fe),V!==0?U.blitFramebuffer(Ae,ke,Ae+be,ke+he,Se,Ze,Se+be,Ze+he,U.COLOR_BUFFER_BIT,U.NEAREST):Hi?U.copyTexSubImage3D(we,fe,Se,Ze,Et+Dn,Ae,ke,be,he):U.copyTexSubImage2D(we,fe,Se,Ze,Ae,ke,be,he);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hi?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(we,fe,Se,Ze,Et,be,he,ve,ut,Xt,ft.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(we,fe,Se,Ze,Et,be,he,ve,ut,ft.data):U.texSubImage3D(we,fe,Se,Ze,Et,be,he,ve,ut,Xt,ft):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Se,Ze,be,he,ut,Xt,ft.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Se,Ze,ft.width,ft.height,ut,ft.data):U.texSubImage2D(U.TEXTURE_2D,fe,Se,Ze,be,he,ut,Xt,ft);de.pixelStorei(U.UNPACK_ROW_LENGTH,nn),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Gi),de.pixelStorei(U.UNPACK_SKIP_ROWS,qt),de.pixelStorei(U.UNPACK_SKIP_IMAGES,xa),fe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(we),de.unbindTexture()},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&Oe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){O=0,G=0,ee=null,de.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});var Yu=Math.random;function dm(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function pm(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0}var _a;function sr(i){return _a=String(i),Math.random=dm(pm(_a)),_a}function ya(){return _a}function $u(){let i=Math.floor(Yu()*4294967295).toString(36),e=new URL(window.location.href);return e.searchParams.set("seed",i),history.replaceState(null,"",e),sr(i)}var Wi=new URLSearchParams(window.location.search).get("seed");sr(Wi||Math.floor(Yu()*4294967295).toString(36));wt();wt();var z0={type:"change"},Rh={type:"start"},G0={type:"end"},dl=new Rs,V0=new vn,ax=Math.cos(70*ol.DEG2RAD),Nt=new P,hn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6,pl=class extends Ur{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new bt,this._lastTargetPosition=new P,this._quat=new bt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ls,this._sphericalDelta=new Ls,this._scale=1,this._panOffset=new P,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new P,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lx.bind(this),this._onPointerDown=ox.bind(this),this._onPointerUp=cx.bind(this),this._onContextMenu=gx.bind(this),this._onMouseWheel=fx.bind(this),this._onKeyDown=dx.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onMouseDown=hx.bind(this),this._onMouseMove=ux.bind(this),this._interceptControlDown=vx.bind(this),this._interceptControlUp=xx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=at.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(z0),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Nt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<ax?this.object.lookAt(this.target):(V0.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(V0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(z0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ox(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(G0),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Rh)}function ux(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fx(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(G0))}function dx(i){this.enabled!==!1&&this._handleKeyDown(i)}function px(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1){this.state=at.NONE;break}this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1){this.state=at.NONE;break}this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Rh)}function mx(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function gx(i){this.enabled!==!1&&i.preventDefault()}function vx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}wt();wt();wt();var LM=new Pt(-1,1,1,-1,0,1),Ph=class extends Ye{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},NM=new Ph;var ed=typeof requestAnimationFrame=="function",td=()=>typeof performance<"u"&&performance.now?performance.now():Date.now(),Vh=ed?i=>requestAnimationFrame(i):i=>setTimeout(()=>i(td()),16),nd=ed?i=>cancelAnimationFrame(i):i=>clearTimeout(i),Ln=null,Ni=0,xl=new Set,_l=[],Gh=0,Hh=[],Ih=0,yx=1e5,Mx=class{constructor(i,e){this.fn=i,this.scheduler=e,this.deps=new Set,this.active=!0,this.paused=!1,this.dirty=!1,this.cleanupFn=null,this.children=null,this.downstream=null,this.stale=!1,this.unschedule=null,this.pass=0,this.passRuns=0,Ln&&(Ln.children??=[]).push(this)}notify(){if(this.active){if(this.paused){this.dirty=!0;return}this.scheduler?this.scheduler(this):this.run()}}pause(){this.paused=!0,this.unschedule&&this.unschedule(this)&&(this.dirty=!0)}runQueued(){this.paused?this.dirty=!0:this.run()}resume(){this.paused&&(this.paused=!1,this.dirty&&(this.dirty=!1,this.run()))}run(){if(!this.active)return;this.stopChildren(),this.runCleanup(),this.cleanup();let i=Ln;Ln=this;try{let e=this.fn();return typeof e=="function"&&(this.cleanupFn=e),e}finally{Ln=i,this.active||this.dispose()}}runCleanup(){if(!this.cleanupFn)return;let i=this.cleanupFn;this.cleanupFn=null,Tl(i)}cleanup(){this.deps.forEach(i=>i.delete(this)),this.deps.clear()}stopChildren(){if(!this.children)return;let i=this.children;this.children=null,i.forEach(e=>e.stop())}dispose(){this.stopChildren(),this.runCleanup(),this.cleanup()}stop(){this.active&&(this.active=!1,this.unschedule&&this.unschedule(this),this.dispose())}};function bx(i){Ln&&Ln.active&&(i.add(Ln),Ln.deps.add(i))}function Kh(i,e="effect threw"){typeof console<"u"&&console.error(`[guspira] ${e}:`,i)}function id(){Ni++,Ih++;try{for(;Gh<_l.length;){let i=_l[Gh++];if(xl.delete(i),!(i.downstream&&!i.stale)){if(i.pass!==Ih&&(i.pass=Ih,i.passRuns=0),++i.passRuns>yx)throw H0(),new Error("[guspira] reactive update never settled \u2014 an effect is very likely writing a signal it also reads. Use peek() to read without subscribing, or untrack().");try{i.notify()}catch(e){Kh(e)}}}H0()}finally{Ni--}}function H0(){xl.clear(),_l.length=0,Gh=0;for(let i of Hh)i.stale=!1;Hh.length=0}function Sx(i){let e=[i];for(;e.length;){let t=e.pop();t.stale||(t.stale=!0,Hh.push(t),t.downstream.forEach(n=>{n.downstream&&!n.stale&&e.push(n)}))}}function wx(i){if(i.size!==0){Ni++;try{i.forEach(e=>{e.downstream&&Sx(e),!xl.has(e)&&(xl.add(e),_l.push(e))})}finally{Ni--,Ni===0&&id()}}}function Tx(i,e){return Object.is(i,e)?!0:Array.isArray(i)&&Array.isArray(e)&&i.length===e.length?i.every((t,n)=>Object.is(t,e[n])):!1}function Ex(i){let e=i,t=new Set,n=()=>(bx(t),e);return n.set=s=>{Tx(e,s)||(e=s,wx(t))},n.update=s=>n.set(s(e)),n.peek=()=>e,n.isSignal=!0,n.target=n,{sig:n,subscribers:t}}function un(i){return Ex(i).sig}function sd(i=null){let e=new Set,t=null,n=!1,s=()=>{if(t=null,n)return 0;let a=[...e];e.clear();for(let o of a)try{o.runQueued()}catch(l){Kh(l)}return a.length};return{schedule:a=>{e.add(a),i&&!t&&!n&&(t=i(s))},unschedule:a=>e.delete(a),flush:s,get size(){return e.size},clear(){e.clear(),t&&t(),t=null},pause(){n=!0,t&&t(),t=null},resume(){n&&(n=!1,e.size&&s())},get paused(){return n}}}var KM=sd(i=>{let e=Vh(i);return()=>nd(e)}),JM=sd(i=>{let e=!1;return queueMicrotask(()=>{e||i()}),()=>{e=!0}});function yl(i,e={}){let{scheduler:t,lazy:n=!1}=e,s=t?typeof t=="function"?t:o=>t.schedule(o):void 0,r=new Mx(i,s);t&&typeof t.unschedule=="function"&&(r.unschedule=o=>t.unschedule(o)),n||r.run();let a=()=>r.stop();return a.stop=()=>r.stop(),a.run=()=>r.run(),a.pause=()=>r.pause(),a.resume=()=>r.resume(),a}function Wh(i){Ni++;try{return i()}finally{Ni--,Ni===0&&id()}}function Tl(i){let e=Ln;Ln=null;try{return i()}finally{Ln=e}}var W0=(i,e,t)=>i+(e-i)*t;function ml(i,e=400,t=s=>s,n=W0){let s=un(i),r=un(i),a=i,o=i,l=null,c=null,h=()=>{c!==null&&nd(c),c=null,l=null},u=d=>{l===null&&(l=d);let v=Math.min(Math.max(0,d-l)/e,1);s.set(v<1?n(a,o,t(v)):o),v<1?c=Vh(u):h()},f=()=>s();f.peek=s.peek,f.isSignal=!0;let p=()=>r();return p.peek=r.peek,p.isSignal=!0,p.set=d=>f.set(d),p.update=d=>f.update(d),f.target=p,f.set=d=>{if(n===W0&&(typeof d!="number"||!isFinite(d))){Kh(new Error(`tweened() interpolates numbers; got ${String(d)}`),"write refused");return}d!==o&&(h(),a=s.peek(),o=d,r.set(d),e===0?s.set(o):(l=td(),c=Vh(u)))},f.update=d=>f.set(d(r.peek())),f.reset=d=>{h(),a=d,o=d,r.set(d),s.set(d)},Object.defineProperties(f,{duration:{get:()=>e,set:d=>{e=Math.max(0,d)}},easing:{get:()=>t,set:d=>{t=typeof d=="function"?d:v=>v}}}),f}var Ax=i=>typeof i=="function"&&i.isSignal===!0,Mn=i=>Ax(i)?i:un(i);function X0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i&&(e*=10,t++,!(t>10)););return t}var rd=(i,e)=>Math.max(X0(i),isFinite(e)?X0(e):0);function Qr(i,e,t=0){return parseFloat(i).toFixed(rd(e,t))}function In(i,e,t,n){let s=isFinite(t)?t:0,r=s+Math.round((i-s)/e)*e;return Math.max(t,Math.min(n,parseFloat(r.toFixed(rd(e,s)))))}function Ml(i){if(i==null||i==="")return 1;if(i==="log")return"log";let e=typeof i=="string"?parseFloat(i):Number(i);if(!Number.isFinite(e)||e<=0)throw new TypeError(`[guspira] curve must be a positive number or "log", not ${JSON.stringify(i)}`);return e}function Xh(i,e,t){return i!=="log"||e!==0&&t!==0&&Math.sign(e)===Math.sign(t)}function q0(i,e,t,n="range-slider"){if(!Xh(i,e,t))throw new RangeError(`[guspira] ${n}: curve "log" needs min and max to be non-zero and the same sign (given ${e} to ${t}) \u2014 0 has no logarithm. Use a number like curve: 2 for a low-end bias on a range that includes zero.`)}function gl(i,e,t,n=1){if(n==="log")return e*Math.pow(t/e,i);let s=n===1?i:Math.pow(Math.max(0,i),n);return e+s*(t-e)}function Cx(i,e,t,n=1){if(n==="log"){let a=t/e;return a<=0||a===1?0:Math.log(i/e)/Math.log(a)}let s=t-e;if(!s)return 0;let r=(i-e)/s;return n===1?r:Math.pow(Math.max(0,r),1/n)}var Rx=class extends HTMLElement{static formAssociated=!0;constructor(){super(),this.internals_=this.attachInternals(),this.attachShadow({mode:"open"}),this.isDragging=!1,this.currentHandle="max",this._min=0,this._max=100,this._step=1,this._curve=1,this._valMin=0,this._valMax=50,this._syncingAttribute=!1,this._listening=!1,this._dragRect=null,this._valueSet=!1,this._wasDual=!1,this._pointerId=null,this._curveChecked=!0,this._onPointerMove=i=>this.handleDragMove(i),this._onPointerUp=i=>this.handleDragEnd(i)}static get observedAttributes(){return["min","max","step","value","dual","disabled","curve"]}get template(){return`
      <style>
        :host {
          display: inline-block;
          width: 100%;
          height: var(--gui-row-height, 24px);
          user-select: none;
          touch-action: none;
          vertical-align: middle;
          --track-height: var(--gui-track-height, 4px);
          --track-color: var(--gui-track, #333);
          --fill-color: var(--gui-fill, #e0e0e0);
          --thumb-size: 8px;
          --thumb-color: var(--gui-thumb, #fff);
          --thumb-border: 2px solid var(--gui-track, #333);
          --thumb-hover: var(--gui-thumb-hover, #f0f0f0);
          cursor: pointer;
          border-radius: var(--gui-radius, 4px);
        }

        :host([disabled]) {
          opacity: 0.5;
          pointer-events: none;
        }

        :host(:focus-visible) {
          outline: 2px solid var(--gui-focus, #888);
          outline-offset: 2px;
        }

        .container:hover {
          --thumb-size: 16px;
        }

        .container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .track {
          position: absolute;
          width: 100%;
          height: var(--track-height);
          background-color: var(--track-color);
          border-radius: 4px;
        }

        /* Dragging must not lag behind the pointer, so the eased transitions that make
           programmatic changes look smooth are switched off for the duration. */
        .container.immediate .thumb,
        .container.immediate .fill {
          transition: none;
        }

        .fill {
          position: absolute;
          height: var(--track-height);
          background-color: var(--fill-color);
          border-radius: 4px;
          pointer-events: none;
          transition: width .1s ease-in, left .1s ease-in;
        }

        .thumb {
          position: absolute;
          width: var(--thumb-size);
          height: var(--thumb-size);
          background-color: var(--thumb-color);
          border: var(--thumb-border);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0.5px 1.5px rgba(0, 0, 0, 0.2);
          transition: left .1s ease-in, transform .1s ease-in, width .1s ease-in, height .1s ease-in;
          z-index: 2;
          box-sizing: border-box;
        }

        .thumb:hover {
          background-color: var(--thumb-hover);
          transform: translateX(-50%) scale(1.1);
        }

        .thumb:active {
          transform: translateX(-50%) scale(0.95);
        }

        :host(:not([dual])) .thumb-min {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .thumb, .fill { transition: none; }
        }
      </style>

      <div class="container" id="container">
        <div class="track"></div>
        <div class="fill" id="fill"></div>
        <div class="thumb thumb-min" id="thumbMin"></div>
        <div class="thumb thumb-max" id="thumbMax"></div>
      </div>
    `}connectedCallback(){this.elements||(this.shadowRoot.innerHTML=this.template,this.elements={container:this.shadowRoot.getElementById("container"),fill:this.shadowRoot.getElementById("fill"),thumbMin:this.shadowRoot.getElementById("thumbMin"),thumbMax:this.shadowRoot.getElementById("thumbMax")}),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","slider"),this._checkCurveSoon(),this.updateUI(),this.addEventListeners()}disconnectedCallback(){this._stopTracking(),this.isDragging=!1,this._dragRect=null,this.elements&&this.elements.container.classList.remove("immediate")}_stopTracking(){window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("pointercancel",this._onPointerUp),this._pointerId=null}_track(){return Xh(this._curve,this._min,this._max)?this._curve:1}_checkCurveSoon(){this._curveChecked&&(this._curveChecked=!1,queueMicrotask(()=>{this._curveChecked=!0,this.isConnected&&!Xh(this._curve,this._min,this._max)&&console.warn(`[guspira] range-slider: curve "log" needs min and max to be non-zero and the same sign (given ${this._min} to ${this._max}) \u2014 using a linear track instead`)}))}_setStep(i){let e=parseFloat(i);Number.isFinite(e)&&e>0&&(this._step=e)}_defaultValue(){this._valueSet||(this.hasAttribute("dual")?(this._valMin=this._min,this._valMax=this._max):this._valMax=In((this._min+this._max)/2,this._step,this._min,this._max))}attributeChangedCallback(i,e,t){if(!(e===t||this._syncingAttribute)){switch(i){case"min":this._min=parseFloat(t),this._checkCurveSoon();break;case"max":this._max=parseFloat(t),this._checkCurveSoon();break;case"step":this._setStep(t);break;case"curve":this._curve=Ml(t),this._checkCurveSoon();break;case"value":if(t===null)break;if(this._valueSet=!0,t.includes(",")){let n=t.split(",");this._valMin=parseFloat(n[0]),this._valMax=parseFloat(n[1])}else this._valMax=parseFloat(t),this.hasAttribute("dual")||(this._valMin=this._min);break}this.updateUI()}}addEventListeners(){this._listening||(this._listening=!0,this.elements.container.addEventListener("pointerdown",i=>this.handleDragStart(i)),this.addEventListener("keydown",i=>this.handleKeyDown(i)))}handleDragStart(i){if(this.hasAttribute("disabled")||i.button!==0)return;this.elements.container.classList.add("immediate"),this.isDragging=!0,this._pointerId=i.pointerId,window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerUp),this.focus({preventScroll:!0}),this._dragRect=this.getBoundingClientRect(),this.elements.thumbMin.style.zIndex=2,this.elements.thumbMax.style.zIndex=2;let e=this._dragRect,t=i.clientX-e.left,n=Math.max(0,Math.min(1,t/e.width)),s=this.percentageToValue(n);if(this.hasAttribute("dual")){let r=Math.abs(s-this._valMin),a=Math.abs(s-this._valMax);this._valMin===this._valMax?this._valMin===this._max?this.currentHandle="min":this._valMin===this._min?this.currentHandle="max":this.currentHandle=s<this._valMin?"min":"max":this.currentHandle=r<a?"min":"max";let o=this.currentHandle==="min"?this.elements.thumbMin:this.elements.thumbMax;o.style.zIndex=3}else this.currentHandle="max";this.updateValueFromPointer(i)}handleDragMove(i){!this.isDragging||i.pointerId!==this._pointerId||this.updateValueFromPointer(i)}handleDragEnd(i){!this.isDragging||i&&i.pointerId!==this._pointerId||(this._stopTracking(),this.isDragging=!1,this._dragRect=null,this.dispatchEvent(new Event("change",{bubbles:!0})),this.updateFormValue(),this.elements.container.classList.remove("immediate"))}handleKeyDown(i){if(this.hasAttribute("disabled"))return;let e=this.hasAttribute("dual"),t=this._step*10,n=0,s=null;switch(i.key){case"ArrowRight":case"ArrowUp":n=this._step;break;case"ArrowLeft":case"ArrowDown":n=-this._step;break;case"PageUp":n=t;break;case"PageDown":n=-t;break;case"Home":s=this._min;break;case"End":s=this._max;break;default:return}i.preventDefault();let r=e&&i.shiftKey?"min":"max",a=r==="min"?this._valMin:this._valMax;this.currentHandle=r,this.applyValue(s!==null?s:a+n),this.dispatchEvent(new Event("input",{bubbles:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}updateValueFromPointer(i){let e=this._dragRect||this.getBoundingClientRect(),t=Math.max(0,Math.min(1,(i.clientX-e.left)/e.width));this.applyValue(this.percentageToValue(t)),this.dispatchEvent(new Event("input",{bubbles:!0}))}applyValue(i){this._valueSet=!0;let e=In(i,this._step,this._min,this._max);this.currentHandle==="min"?(e>this._valMax&&(e=this._valMax),this._valMin=e):(this.hasAttribute("dual")&&e<this._valMin&&(e=this._valMin),this._valMax=e),this.updateUI()}percentageToValue(i){return gl(i,this._min,this._max,this._track())}valueToPercentage(i){return Cx(i,this._min,this._max,this._track())*100}updateUI(){if(this._defaultValue(),!this.elements)return;let i=this.hasAttribute("dual"),e=s=>Math.max(0,Math.min(100,s)),t=e(this.valueToPercentage(i?this._valMin:this._min)),n=e(this.valueToPercentage(this._valMax));i&&(this.elements.thumbMin.style.left=`${t}%`),this.elements.thumbMax.style.left=`${n}%`,this.elements.fill.style.left=`${t}%`,this.elements.fill.style.width=`${n-t}%`,this._ariaBounds!==`${this._min}/${this._max}`&&(this._ariaBounds=`${this._min}/${this._max}`,this.setAttribute("aria-valuemin",this._min),this.setAttribute("aria-valuemax",this._max)),this.setAttribute("aria-valuenow",this._valMax),i?this.setAttribute("aria-valuetext",`${this._valMin} to ${this._valMax}`):this._wasDual&&this.removeAttribute("aria-valuetext"),this._wasDual=i,this.updateFormValue()}updateFormValue(){let i=this.hasAttribute("dual")?`${this._valMin},${this._valMax}`:`${this._valMax}`;this.internals_.setFormValue(i),this._syncingAttribute=!0,this.setAttribute("value",i),this._syncingAttribute=!1}get value(){return this.hasAttribute("dual")?[this._valMin,this._valMax]:this._valMax}set value(i){let e=this._valueSet;if(this._valueSet=!0,Array.isArray(i)){if(e&&i[0]===this._valMin&&i[1]===this._valMax)return;this._valMin=i[0],this._valMax=i[1]}else{if(e&&i===this._valMax)return;this._valMax=i}this.updateUI()}get min(){return this._min}set min(i){this._min=parseFloat(i),this._checkCurveSoon(),this.updateUI()}get max(){return this._max}set max(i){this._max=parseFloat(i),this._checkCurveSoon(),this.updateUI()}get step(){return this._step}set step(i){this._setStep(i),this.updateUI()}get curve(){return this._curve}set curve(i){this._curve=Ml(i),this._checkCurveSoon(),this.updateUI()}};customElements.get("range-slider")||customElements.define("range-slider",Rx);var Jr=["--gui-series-1, #4c7c0c","--gui-series-2, #fcb300","--gui-series-3, #c74900","--gui-series-4, #850700","--gui-series-5, #284280"],Px=137.5,Ix=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._min=0,this._max=void 0,this._over=void 0,this._below=void 0,this._samples=96,this._history=[],this._source=null,this._series=null,this._legendAt=0,this._formatValue=i=>Math.abs(i)>=100?i.toFixed(0):i.toFixed(1),this._visible=!0,this._dirty=!1,this._frame=null,this._observers=[]}static get observedAttributes(){return["min","max","over","below","samples","stacked"]}attributeChangedCallback(i,e,t){e!==t&&(i==="samples"?this._samples=Math.max(2,parseInt(t,10)||96):i!=="stacked"&&(this[`_${i}`]=t===null?void 0:parseFloat(t)),this.draw())}connectedCallback(){if(this.canvas||(this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; width: 100%; }
          .plot {
            height: var(--gui-graph-height, 38px);
            background: var(--gui-field-bg, #3e3e3e);
            border: 1px solid var(--gui-border, #555);
            border-radius: var(--gui-radius, 4px);
            overflow: hidden;
          }
          canvas { display: block; width: 100%; height: 100%; }
          /* Wraps, because a panel row is narrow and four series will not sit on one line. */
          .legend {
            display: flex;
            flex-wrap: wrap;
            gap: 1px 9px;
            margin-top: 3px;
            font-size: calc(var(--gui-font-size, 13px) - 3px);
            line-height: 1.5;
            color: var(--gui-muted, #888);
          }
          .legend:empty { display: none; }
          .legend span { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
          .legend i {
            width: 7px;
            height: 7px;
            border-radius: 2px;
            flex: 0 0 auto;
          }
          .legend b {
            font-weight: 600;
            color: var(--gui-fg, #e0e0e0);
            font-variant-numeric: tabular-nums;
          }
        </style>
        <div class="plot"><canvas></canvas></div>
        <div class="legend"></div>`,this.canvas=this.shadowRoot.querySelector("canvas"),this.legendEl=this.shadowRoot.querySelector(".legend"),this.ctx=this.canvas.getContext("2d"),this._buildLegend()),typeof IntersectionObserver=="function"){let i=new IntersectionObserver(([e])=>{e.isIntersecting&&!this._visible&&(this._dirty=!0),this._visible=e.isIntersecting});i.observe(this),this._observers.push(i)}if(typeof ResizeObserver=="function"){let i=new ResizeObserver(()=>{this._dirty=!0});i.observe(this),this._observers.push(i)}this._loop()}disconnectedCallback(){this._frame!==null&&cancelAnimationFrame(this._frame),this._frame=null,this._observers.forEach(i=>i.disconnect()),this._observers.length=0}_loop(){let i=()=>{if(this._visible){let e=this._source?this._source():void 0;e!==void 0?this.push(e):this._dirty&&this.draw(),this._dirty=!1}this._frame=requestAnimationFrame(i)};this._frame=requestAnimationFrame(i)}set series(i){this._series=Array.isArray(i)&&i.length?i.slice():null,this._buildLegend()}get series(){return this._series?this._series.slice():null}set formatValue(i){typeof i=="function"&&(this._formatValue=i)}get formatValue(){return this._formatValue}_buildLegend(){this.legendEl&&(this.legendEl.textContent="",this._legendValues=null,this._series&&(this._legendValues=this._series.map((i,e)=>{let t=document.createElement("span"),n=document.createElement("i");n.style.background=this._swatch(e);let s=document.createElement("b");return t.append(n,document.createTextNode(i),s),this.legendEl.append(t),s}),this._legendAt=0))}_updateLegend(i){if(!this._legendValues||i-this._legendAt<100)return;this._legendAt=i;let e=this._history[this._history.length-1],t=Array.isArray(e)?e:[e];this._legendValues.forEach((n,s)=>{let r=t[s];n.textContent=r===void 0?"":` ${this._formatValue(r)}`})}push(i){for(this._history.push(i);this._history.length>this._samples;)this._history.shift();return this._visible&&this.draw(),this}clear(){return this._history.length=0,this.draw(),this}get history(){return this._history.slice()}get current(){let i=this._history[this._history.length-1];return i===void 0?0:Array.isArray(i)?i.reduce((e,t)=>e+t,0):i}_colour(i,e=getComputedStyle(this)){if(i>=Jr.length)return`hsl(${(i-Jr.length+1)*Px%360} 62% 52%)`;let[t,n]=Jr[i].split(", ");return e.getPropertyValue(t).trim()||n}_swatch(i){return i<Jr.length?`var(${Jr[i]})`:this._colour(i)}draw(){if(!this.ctx)return;let i=Math.min(window.devicePixelRatio||1,2),e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;let n=Math.round(e*i),s=Math.round(t*i);(this.canvas.width!==n||this.canvas.height!==s)&&(this.canvas.width=n,this.canvas.height=s);let r=this.ctx;if(r.setTransform(i,0,0,i,0,0),r.clearRect(0,0,e,t),!this._history.length)return;let a=v=>Array.isArray(v)?v.reduce((g,m)=>g+m,0):v,o=this._min??0,c=(this._max??Math.max(...this._history.map(a),this._over??0,o+1))-o||1,h=v=>t-Math.max(0,Math.min(1,(v-o)/c))*t,u=e/this._samples,f=this.hasAttribute("stacked"),p=getComputedStyle(this),d=p.getPropertyValue("--gui-warn").trim()||"#c74900";if(this._updateLegend(performance.now()),f){let v=[];this._history.forEach((g,m)=>{let _=Array.isArray(g)?g:[g],T=o;_.forEach((M,E)=>{r.fillStyle=v[E]??=this._colour(E,p);let w=h(T+M);r.fillRect(m*u,w,Math.max(1,u-.5),h(T)-w),T+=M})})}else{let v=p.getPropertyValue("--gui-fill").trim()||"#e0e0e0";r.beginPath(),r.moveTo(0,t),this._history.forEach((g,m)=>r.lineTo(m*u,h(a(g)))),r.lineTo((this._history.length-1)*u,t),r.closePath(),r.globalAlpha=.22,r.fillStyle=v,r.fill(),r.globalAlpha=1,r.beginPath(),this._history.forEach((g,m)=>{let _=[m*u,h(a(g))];m?r.lineTo(..._):r.moveTo(..._)}),r.strokeStyle=this._breached(a(this._history[this._history.length-1]))?d:v,r.lineWidth=1.5,r.stroke()}for(let v of[this._over,this._below])v==null||Number.isNaN(v)||(r.strokeStyle=d,r.globalAlpha=.6,r.setLineDash([3,3]),r.beginPath(),r.moveTo(0,h(v)),r.lineTo(e,h(v)),r.stroke(),r.setLineDash([]),r.globalAlpha=1)}_breached(i){return this._over!==void 0&&!Number.isNaN(this._over)&&i>this._over||this._below!==void 0&&!Number.isNaN(this._below)&&i<this._below}get breached(){return this._breached(this.current)}set source(i){this._source=typeof i=="function"?i:null}get source(){return this._source}set samples(i){this._samples=Math.max(2,i|0)}get samples(){return this._samples}set min(i){this._min=i==null?void 0:parseFloat(i),this.draw()}get min(){return this._min}set max(i){this._max=i==null?void 0:parseFloat(i),this.draw()}get max(){return this._max}set over(i){this._over=i==null?void 0:parseFloat(i),this.draw()}get over(){return this._over}set below(i){this._below=i==null?void 0:parseFloat(i),this.draw()}get below(){return this._below}};customElements.get("stats-graph")||customElements.define("stats-graph",Ix);var vl=i=>i<0?0:i>1?1:i,Lh=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Nh=i=>i<=.0031308?i*12.92:1.055*Math.pow(i,1/2.4)-.055,bl=i=>typeof i=="string"&&/^#[0-9a-f]{6}$/i.test(i);function Sl(i){return[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255]}function qh(i){return`#${i.map(e=>Math.round(vl(e)*255).toString(16).padStart(2,"0")).join("")}`}function Y0([i,e,t]){let n=Lh(i),s=Lh(e),r=Lh(t),a=Math.cbrt(.4122214708*n+.5363325363*s+.0514459929*r),o=Math.cbrt(.2119034982*n+.6806995451*s+.1073969566*r),l=Math.cbrt(.0883024619*n+.2817188376*s+.6299787005*r);return[.2104542553*a+.793617785*o-.0040720468*l,1.9779984951*a-2.428592205*o+.4505937099*l,.0259040371*a+.7827717662*o-.808675766*l]}function Lx([i,e,t]){let n=(i+.3963377774*e+.2158037573*t)**3,s=(i-.1055613458*e-.0638541728*t)**3,r=(i-.0894841775*e-1.291485548*t)**3;return[Nh(vl(4.0767416621*n-3.3077115913*s+.2309699292*r)),Nh(vl(-1.2684380046*n+2.6097574011*s-.3413193965*r)),Nh(vl(-.0041960863*n-.7034186147*s+1.707614701*r))]}function Nx(i,e,t){if(t<=0)return i;if(t>=1)return e;let n=Y0(i),s=Y0(e);return Lx([n[0]+(s[0]-n[0])*t,n[1]+(s[1]-n[1])*t,n[2]+(s[2]-n[2])*t])}function Dx(i,e,t){return t<=0?i:t>=1?e:qh(Nx(Sl(i),Sl(e),t))}var Fx={hex:{toHex:i=>bl(i)?i:"#000000",fromHex:i=>i},rgb:{toHex:i=>qh(i),fromHex:i=>Sl(i)},rgb255:{toHex:i=>qh(i.map(e=>e/255)),fromHex:i=>Sl(i).map(e=>Math.round(e*255))}};function Ux(i="hex"){if(i==null||typeof i=="string"){let e=Fx[i||"hex"];if(!e)throw new TypeError(`[guspira] unknown colour format ${JSON.stringify(i)} \u2014 use "hex", "rgb", "rgb255", or a { toHex, fromHex } pair of your own`);return e}if(typeof i.toHex=="function"&&typeof i.fromHex=="function")return i;throw new TypeError("[guspira] a custom colour format needs both { toHex, fromHex } \u2014 fromHex is also handed the value it is replacing, for the components hex cannot carry")}var Gs=Math.random;function ad(i){Gs=i}var Dh=()=>Gs(),Fh=(i,e)=>i+Gs()*(e-i),$0=i=>i[Math.floor(Gs()*i.length)],Ox=(i=.5)=>Gs()<i;function Bx(){let i=()=>Math.floor(Gs()*256).toString(16).padStart(2,"0");return`#${i()}${i()}${i()}`}var kx=new Set(["INPUT","SELECT","TEXTAREA"]),zx=new Set(["Space","Enter","NumpadEnter"]),Vx=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","PageUp","PageDown"]),Gx="button, summary, a[href], [role=button], [role=tab], [role=radio]",Hx="range-slider, [role=slider], [role=application], [role=radiogroup], [role=tablist]";function Wx(i,e){return!i||typeof i.closest!="function"?!1:kx.has(i.tagName)||i.isContentEditable===!0?!0:zx.has(e)?i.closest(Gx)!==null:Vx.has(e)?i.closest(Hx)!==null:!1}function Jh(i,e,t={}){let{ctrl:n=!1,shift:s=!1,alt:r=!1,meta:a=!1,allowWhileTyping:o=!1,repeat:l=!1,target:c=window,preventDefault:h=!1}=t,u=f=>{f.code===i&&(f.ctrlKey!==n||f.shiftKey!==s||f.altKey!==r||f.metaKey===a&&(f.repeat&&!l||!o&&Wx(f.target,i)||(h&&f.preventDefault(),e(f))))};return c.addEventListener("keydown",u),()=>c.removeEventListener("keydown",u)}var Z0='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';function Xx(i,e,t,n){return`${Qr(i,t,n)}\u2013${Qr(e,t,n)}`}function Ht(i){return typeof i=="function"&&console.warn("[guspira] a function was passed where options go \u2014 use { onChange: fn }"),i&&typeof i=="object"?i:{}}function jr(...i){for(let e of i)if(e!=null)return typeof e=="function"?e:()=>e;return null}var qx=3;function K0(i,{step:e,onScrub:t,enabled:n}){let s=null,r=!1;i.classList.add("gui-scrubbable");let a=c=>{if(!(c.button!==0||!n()||document.activeElement===i)){c.preventDefault(),s={x:c.clientX,value:parseFloat(i.value)||0},r=!1;try{i.setPointerCapture(c.pointerId)}catch{}}},o=c=>{if(!s)return;if(!(c.buttons&1))return l(c);let h=c.clientX-s.x;if(!r){if(Math.abs(h)<qx)return;r=!0,document.body.classList.add("gui-scrubbing")}t(s.value+h*e()*(c.shiftKey?10:1))},l=c=>{if(s){try{i.hasPointerCapture(c.pointerId)&&i.releasePointerCapture(c.pointerId)}catch{}!r&&c.type==="pointerup"&&(i.focus(),i.select()),s=null,r=!1,document.body.classList.remove("gui-scrubbing")}};return i.addEventListener("pointerdown",a),i.addEventListener("pointermove",o),i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l),()=>{i.removeEventListener("pointerdown",a),i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",l),i.removeEventListener("pointercancel",l),document.body.classList.remove("gui-scrubbing")}}function Uh(i,e,t){return i!==void 0?i:e!==void 0&&t!==void 0?(t-e)/200:1}var Je=i=>i.target||i,J0="button, input, select, textarea";function Yh(i){for(let e of i.querySelectorAll(`${J0}, [tabindex]`)){let t=e.closest(".gui-row.disabled, .gui-section.disabled")!==null;e.matches(J0)?t&&!e.disabled?(e.disabled=!0,e.dataset.guiOff=""):!t&&"guiOff"in e.dataset&&(e.disabled=!1,delete e.dataset.guiOff):t&&e.tabIndex>=0&&!("guiTabindex"in e.dataset)?(e.dataset.guiTabindex=e.getAttribute("tabindex"),e.tabIndex=-1):!t&&"guiTabindex"in e.dataset&&(e.setAttribute("tabindex",e.dataset.guiTabindex),delete e.dataset.guiTabindex)}}function $h(i,e){i.classList.toggle("disabled",e),e?i.setAttribute("aria-disabled","true"):i.removeAttribute("aria-disabled"),Yh(i),queueMicrotask(()=>Yh(i))}var Oh=i=>i.row.closest(".gui-row.disabled, .gui-section.disabled")!==null;function j0(i,e,t,n){if(i===void 0){let s=Math.abs(t-e);return s>0&&Number.isFinite(s)?10**Math.floor(Math.log10(s/100)):1}if(typeof i!="number"||!(i>0)||!Number.isFinite(i))throw new TypeError(`[guspira] ${n}: step must be a positive number, not ${JSON.stringify(i)} \u2014 options go after it, or leave it out for a hundredth of the range`);return i}var Q0="Click, or press Alt+R with the control focused, to randomize",Yx=0,$x=0,ui=i=>Array.isArray(i)?i[0]:i,Bh=i=>Array.isArray(i)?i[1]:i,wl=class{constructor(i,e){this.gui=i,this.row=e,this.el=null,this.labelEl=null,this._randomize=null,this._stops=[],this._destroyed=!1}get randomize(){return this._randomize}set randomize(i){this._randomize=typeof i=="function"?i:null;let e=this.labelEl;e&&(e.classList.toggle("gui-randomizable",!!this._randomize),this._randomize&&!e.title?e.title=Q0:!this._randomize&&e.title===Q0&&(e.title=""))}bind(i){return this._stops.push(Tl(()=>yl(i))),this}labelled(i){return this.labelEl&&(this.labelEl.id||(this.labelEl.id=`gui-label-${++$x}`),i.setAttribute("aria-labelledby",this.labelEl.id)),i}onDestroy(i){return this._stops.push(i),this}setVisible(i){return this.row.classList.toggle("gui-hidden",!i),this}setDisabled(i){return $h(this.row,!!i),this}destroy(){this._destroyed||(this._destroyed=!0,this._stops.forEach(i=>i()),this._stops.length=0,this.row.remove(),this.gui._forget(this))}};function od(i,e){[...i.gui._controllers].forEach(t=>{t!==i&&e.contains(t.row)&&t.destroy()})}var kh=class extends wl{constructor(i,e,t,n){super(i,e),this.body=t,this.open=n}destroy(){this._destroyed||(od(this,this.body),super.destroy())}setOpen(i){return this.open.set(!!i),this}toggle(){return this.setOpen(!this.open())}},zh=class extends wl{constructor(i,e,t,n,s){super(i,e),this.panel=t,this.button=n,this.index=s}select(){return this.gui.selectTab(this.index),this}destroy(){this._destroyed||(od(this,this.panel),this.button.remove(),super.destroy())}},Zx=class{constructor(i="Settings",e=document.body,t={}){this.options=t,this._storageKey=t.storageKey||null,this._controllers=[],this._unbinds=[],this.container=document.createElement("div"),this.container.className="gui",t.className&&this.container.classList.add(t.className);let n=document.createElement("button");n.type="button",n.className="gui-title",n.textContent=i,this.titleEl=n;let s=document.createElement("span");s.className="gui-chevron",s.innerHTML=Z0,n.append(s),this.container.append(n),this.scroller=document.createElement("div"),this.scroller.className="gui-scroller",this.container.append(this.scroller),this.rows=document.createElement("div"),this.rows.className="gui-rows",this.scroller.append(this.rows),this._current=this.rows,this._currentTab=this.rows,this._tabBar=null,this._tabs=[],this._activeTab=un(0);let r=window.innerWidth>950;this.rowsExpanded=un(this._readUIState("expanded",t.expanded??r)),n.addEventListener("click",()=>{this.rowsExpanded.set(!this.rowsExpanded.peek()),this._writeUIState("expanded",this.rowsExpanded.peek())}),this._stops=Tl(()=>[yl(()=>{let a=this.rowsExpanded();this.rows.classList.toggle("visible",a),this.rows.inert=!a,this.container.classList.toggle("collapsed",!a),n.setAttribute("aria-expanded",String(a))}),yl(()=>this._syncTabs(this._activeTab()))]),e.append(this.container),t.visible!==!1&&this.show()}show(){return this.container.classList.add("visible"),this}hide(){return this.container.classList.remove("visible"),this}destroy(){[...this._controllers].forEach(i=>i.destroy()),this._unbinds.forEach(i=>i()),this._unbinds.length=0,this._stops.forEach(i=>i()),this._stops.length=0,this.container.remove()}_syncTabs(i=this._activeTab.peek()){this._tabs.forEach((e,t)=>{let n=t===i;e.panel.classList.toggle("active",n),e.button.classList.toggle("active",n),e.button.setAttribute("aria-selected",String(n)),e.button.tabIndex=n?0:-1})}_forget(i){let e=this._controllers.indexOf(i);e!==-1&&this._controllers.splice(e,1);let t=this._tabs.indexOf(i);if(t!==-1){this._tabs.splice(t,1),this._tabs.forEach((a,o)=>a.index=o);let s=this._activeTab.peek(),r=Math.min(t<s?s-1:s,this._tabs.length-1);this._activeTab.set(Math.max(0,r)),this._syncTabs()}let n=s=>s===i.row||i.row.contains(s);n(this._currentTab)&&(this._currentTab=this._tabs.length?this._tabs[this._tabs.length-1].panel:this.rows),n(this._current)&&(this._current=this._currentTab)}_readUIState(i,e){if(!this._storageKey)return e;try{let t=localStorage.getItem(`${this._storageKey}:ui:${i}`);return t===null?e:JSON.parse(t)}catch{return e}}_writeUIState(i,e){if(this._storageKey)try{localStorage.setItem(`${this._storageKey}:ui:${i}`,JSON.stringify(e))}catch{}}addTab(i){this._tabBar||(this._tabBar=document.createElement("div"),this._tabBar.className="gui-tabbar",this._tabBar.setAttribute("role","tablist"),this._tabBar.addEventListener("keydown",r=>{let a=this._tabs.length-1,o=this._activeTab.peek(),l=null;r.key==="ArrowRight"?l=o>=a?0:o+1:r.key==="ArrowLeft"?l=o<=0?a:o-1:r.key==="Home"?l=0:r.key==="End"&&(l=a),l!==null&&(r.preventDefault(),this.selectTab(l),this._tabs[l].button.focus())}),this.rows.append(this._tabBar));let e=this._tabs.length,t=document.createElement("div");t.className="gui-tab-panel",t.setAttribute("role","tabpanel"),this.rows.append(t);let n=document.createElement("button");n.className="gui-tab-btn",n.type="button",n.setAttribute("role","tab"),n.textContent=i,this._tabBar.append(n);let s=new zh(this,t,t,n,e);return n.onclick=()=>this.selectTab(s.index),this._tabs.push(s),this._controllers.push(s),this._currentTab=t,this._current=t,this._readUIState("tab",null)===i?this._activeTab.set(e):this._syncTabs(),s}selectTab(i){let e=this._tabs[i];return e?(this._activeTab.set(i),this._writeUIState("tab",e.button.textContent),this):this}addSection(i,e={}){let{collapsible:t=!0}=e,n=jr(e.visibleWhen,e.visible),s=jr(e.disabledWhen,e.disabled),r=document.createElement("div");r.className="gui-section";let a=document.createElement(t?"button":"div");t&&(a.type="button"),a.className="gui-section-title",a.textContent=i,a.id=`gui-section-${++Yx}`;let o=document.createElement("div");o.className="gui-section-body",o.setAttribute("role","group"),o.setAttribute("aria-labelledby",a.id),r.append(a,o),this._currentTab.append(r),this._current=o;let l=this._tabs.find(p=>p.panel===this._currentTab),h=`section:${l?l.button.textContent:""}/${i}`,u=un(t?this._readUIState(h,e.open??!0):!0),f=new kh(this,r,o,u);if(t){let p=document.createElement("span");p.className="gui-chevron",p.innerHTML=Z0,a.append(p),a.classList.add("gui-collapsible"),a.addEventListener("click",()=>{f.toggle(),this._writeUIState(h,u.peek())}),f.bind(()=>{let d=u();r.classList.toggle("open",d),o.inert=!d,a.setAttribute("aria-expanded",String(d))})}else r.classList.add("open");return n&&f.bind(()=>r.classList.toggle("gui-hidden",!n())),s&&f.bind(()=>$h(r,!!s())),this._controllers.push(f),f}endSection(){return this._current=this._currentTab,this}into(i,e){let t=i instanceof kh?i.body:i instanceof zh?i.panel:i,n=this._current,s=this._currentTab;if(this._current=t,i instanceof zh&&(this._currentTab=i.panel),i instanceof kh){let r=this._tabs.find(a=>a.panel.contains(i.row));this._currentTab=r?r.panel:this.rows}if(!e)return this;try{return e()}finally{this._current=n,this._currentTab=s}}createRow(i,e={}){let t=document.createElement("div");t.className="gui-row";let n=new wl(this,t);if(i){let o=document.createElement("span");o.className="gui-label",o.textContent=i,e.title&&(o.title=e.title),t.append(o),n.labelEl=o}let s=jr(e.disabledWhen,e.disabled);s&&n.bind(()=>$h(t,!!s()));let r=jr(e.visibleWhen,e.visible);r&&n.bind(()=>t.classList.toggle("gui-hidden",!r()));let a=()=>{!n.randomize||Oh(n)||(this._beforeRandomize(),n.randomize())};return t.addEventListener("keydown",o=>{(/^[a-z]$/i.test(o.key)?o.key.toLowerCase()!=="r":o.code!=="KeyR")||!o.altKey||o.ctrlKey||o.metaKey||!n.randomize||(o.preventDefault(),a())}),n.labelEl&&n.labelEl.addEventListener("click",a),this._current.append(t),queueMicrotask(()=>{Oh(n)&&Yh(t)}),this._controllers.push(n),n}_randomizable(i,e,t){t.randomizable!==!1&&(i.randomize=e)}_beforeRandomize(){this.options.onBeforeRandomize&&this.options.onBeforeRandomize()}randomizeAll(i=0){let e=i;if(i instanceof wl){let t=this._controllers.indexOf(i);if(t===-1)return this;e=t+1}return this._beforeRandomize(),Wh(()=>{this._controllers.slice(Math.max(0,e)).forEach(t=>{!t.randomize||Oh(t)||t.randomize()})}),this}addButton(i,e,t){let n=Ht(t),s=this.createRow(null,n),r=document.createElement("button");return r.className="gui-btn",r.type="button",r.textContent=i,r.onclick=e,s.row.append(r),s.el=r,s.setLabel=a=>(r.textContent=a,s),s}addRandomizeButton(i="Randomize",e=()=>{},t){let n=Ht(t),s=null,r=()=>{this.randomizeAll(n.scope==="following"?s:0),e()};if(s=this.addButton(i,r,n),n.key!==null){let a=Jh(n.key||"KeyR",r,{repeat:!0});this._unbinds.push(a),s.onDestroy(a)}return s}addButtons(i,e,t){let n=Ht(t),s=this.createRow(i,n),r=document.createElement("div");return r.className=i?"gui-control gui-btn-group":"gui-btn-group",s.buttons=e.map(({label:a,onClick:o,title:l})=>{let c=document.createElement("button");return c.className="gui-btn",c.type="button",c.textContent=a,l&&(c.title=l),c.onclick=o,r.append(c),c}),s.row.append(r),s.el=r,s}addCheckbox(i,e,t){let n=Ht(t),s=Mn(e),r=this.createRow(i,n);this._randomizable(r,()=>{s.set(Ox()),n.onChange&&n.onChange(Je(s).peek())},n);let a=document.createElement("input");return a.type="checkbox",a.className="gui-checkbox",a.onchange=()=>{s.set(a.checked),n.onChange&&n.onChange(a.checked)},r.bind(()=>a.checked=Je(s)()),r.row.append(r.labelled(a)),r.el=a,r.signal=s,r}addSelect(i,e,t,n){let s=Ht(n),r=Mn(e),a=this.createRow(i,s);this._randomizable(a,()=>{r.set(ui($0(a.options))),s.onChange&&s.onChange(Je(r).peek())},s);let o=document.createElement("select");o.className="gui-select",o.onchange=()=>{let c=a.options.find(u=>String(ui(u))===o.value),h=c===void 0?o.value:ui(c);r.set(h),s.onChange&&s.onChange(h)};let l=new Set;return a.setOptions=c=>(a.options=c,l=new Set(c.map(h=>String(ui(h)))),o.innerHTML="",c.forEach(h=>{let u=document.createElement("option");u.value=ui(h),u.textContent=Bh(h),o.append(u)}),o.value=String(r.peek()),a),a.setOptions(t),a.bind(()=>{let c=String(Je(r)());l.has(c)&&(o.value=c)}),a.row.append(a.labelled(o)),a.el=o,a.signal=r,a}addSlider(i,e,t,n,s,r){let a=Ht(r);s=j0(s,t,n,"addSlider");let o=Mn(e),l=Ml(a.curve);q0(l,t,n,"addSlider");let c=this.createRow(i,a);this._randomizable(c,()=>{o.set(In(gl(Dh(),t,n,l),s,t,n)),a.onChange&&a.onChange(Je(o).peek())},a);let h=document.createElement("div");h.className="gui-slider-container";let u=document.createElement("range-slider");u.className="gui-slider",u.min=t,u.max=n,u.step=s,l!==1&&(u.curve=l),u.oninput=()=>{let d=parseFloat(u.value);o.set(d),a.onChange&&a.onChange(d)};let f=document.createElement("span");f.className="gui-slider-val",f.title="Click to type a value";let p=()=>{if(c.row.classList.contains("disabled")||f.dataset.editing)return;f.dataset.editing="1";let d=document.createElement("input");d.type="text",d.className="gui-slider-edit",d.value=Qr(Je(o).peek(),s,t),f.replaceWith(d),d.focus(),d.select();let v=!1,g=(m,_)=>{if(!v){if(v=!0,d.onblur=null,m){let T=parseFloat(d.value);if(isFinite(T)){let M=In(T,s,t,n);o.set(M),a.onChange&&a.onChange(M)}}d.replaceWith(f),delete f.dataset.editing,_&&u.focus()}};d.onblur=()=>g(!0,!1),d.onkeydown=m=>{m.key==="Enter"?g(!0,!0):m.key==="Escape"&&g(!1,!0)}};return f.addEventListener("click",p),u.addEventListener("keydown",d=>{d.key!=="Enter"&&d.key!=="F2"||(d.preventDefault(),p())}),c.bind(()=>{let d=Je(o)();u.value=d,f.textContent=Qr(d,s,t)}),h.append(c.labelled(u),f),c.row.append(h),c.el=u,c.signal=o,c}addRangeSlider(i,e,t,n,s,r){let a=Ht(r);s=j0(s,t,n,"addRangeSlider");let o=Mn(e),l=Ml(a.curve);q0(l,t,n,"addRangeSlider");let c=this.createRow(i,a);this._randomizable(c,()=>{let p=Dh(),d=Dh(),v=In(gl(Math.min(p,d),t,n,l),s,t,n),g=In(gl(Math.max(p,d),t,n,l),s,t,n);o.set([v,g]),a.onChange&&a.onChange(Je(o).peek())},a);let h=document.createElement("div");h.className="gui-slider-container";let u=document.createElement("range-slider");u.setAttribute("dual",""),u.className="gui-slider",u.min=t,u.max=n,u.step=s,l!==1&&(u.curve=l),u.oninput=()=>{let[p,d]=u.value;o.set([parseFloat(p),parseFloat(d)]),a.onChange&&a.onChange(Je(o).peek())};let f=document.createElement("span");return f.className="gui-slider-val gui-range-val",c.bind(()=>{let[p,d]=Je(o)();u.value=[p,d],f.textContent=Xx(p,d,s,t)}),h.append(c.labelled(u),f),c.row.append(h),c.el=u,c.signal=o,c}addColor(i,e,t){let n=Ht(t),s=Mn(e),r=Ux(n.format),a=this.createRow(i,n);this._randomizable(a,()=>{s.set(r.fromHex(Bx(),Je(s).peek())),n.onChange&&n.onChange(Je(s).peek())},n);let o=document.createElement("input");return o.type="color",o.className="gui-color",o.oninput=()=>{let l=r.fromHex(o.value,Je(s).peek());s.set(l),n.onChange&&n.onChange(l)},a.bind(()=>o.value=r.toHex(Je(s)())),a.row.append(a.labelled(o)),a.el=o,a.signal=s,a}addTextInput(i,e,t){let n=Ht(t),s=Mn(e),r=this.createRow(i,n),a=document.createElement("input");a.type="text",a.className="gui-input-text",n.placeholder&&(a.placeholder=n.placeholder),a.oninput=()=>{s.set(a.value),n.onChange&&n.onChange(a.value)};let o=()=>a.value=Je(s).peek()??"";return r.bind(()=>{Je(s)(),document.activeElement!==a&&o()}),a.addEventListener("blur",o),r.row.append(r.labelled(a)),r.el=a,r.signal=s,r}addNumber(i,e,t){let n=Ht(t),s=Mn(e),r=this.createRow(i,n),a=document.createElement("input");a.type="number",a.className="gui-input-number",n.min!==void 0&&(a.min=n.min),n.max!==void 0&&(a.max=n.max),n.step!==void 0&&(a.step=n.step);let o=h=>{s.set(h),n.onChange&&n.onChange(h)},l=h=>n.step===void 0?Math.min(n.max??1/0,Math.max(n.min??-1/0,h)):In(h,n.step,n.min??-1/0,n.max??1/0);a.oninput=()=>{let h=parseFloat(a.value);isFinite(h)&&o(l(h))},n.scrub!==!1&&r.onDestroy(K0(a,{step:()=>Uh(n.step,n.min,n.max),enabled:()=>!r.row.classList.contains("disabled"),onScrub:h=>o(In(h,Uh(n.step,n.min,n.max),n.min??-1/0,n.max??1/0))}));let c=()=>a.value=Je(s).peek();return r.bind(()=>{Je(s)(),document.activeElement!==a&&c()}),a.addEventListener("blur",c),r.row.append(r.labelled(a)),r.el=a,r.signal=s,r}addVector(i,e,t){let n=Ht(t),s=Mn(e),r=Je(s).peek();if(!Array.isArray(r))throw new TypeError("[guspira] addVector needs a signal holding an array \u2014 signal([0, 0, 0]) for a vec3");let a=n.axes||["x","y","z","w"].slice(0,r.length),o=(p,d)=>Array.isArray(p)?p[d]:p,l=this.createRow(i,n),c=document.createElement("div");c.className="gui-control gui-vector";let h=(p,d)=>{let v=o(n.step,p),g=o(n.min,p),m=o(n.max,p),_=v===void 0?Math.min(m??1/0,Math.max(g??-1/0,d)):In(d,v,g??-1/0,m??1/0),T=[...Je(s).peek()];T[p]=_,s.set(T),n.onChange&&n.onChange(T)},u=a.map((p,d)=>{let v=document.createElement("input");v.type="number",v.className="gui-input-number gui-vector-axis",v.title=p,v.setAttribute("aria-label",i?`${i} ${p}`:p);let g=o(n.step,d),m=o(n.min,d),_=o(n.max,d);return g!==void 0&&(v.step=g),m!==void 0&&(v.min=m),_!==void 0&&(v.max=_),v.oninput=()=>{let T=parseFloat(v.value);isFinite(T)&&h(d,T)},n.scrub!==!1&&l.onDestroy(K0(v,{step:()=>Uh(g,m,_),enabled:()=>!l.row.classList.contains("disabled"),onScrub:T=>h(d,T)})),c.append(v),v}),f=(p,d)=>{let v=Je(s).peek(),g=o(n.step,d);p.value=g===void 0?v[d]:Qr(v[d],g,o(n.min,d))};return l.bind(()=>{Je(s)(),u.forEach((p,d)=>{document.activeElement!==p&&f(p,d)})}),u.forEach((p,d)=>p.addEventListener("blur",()=>f(p,d))),this._randomizable(l,()=>{let p=a.map((d,v)=>{let g=o(n.min,v)??-1,m=o(n.max,v)??1;return In(Fh(g,m),o(n.step,v)??.01,g,m)});s.set(p),n.onChange&&n.onChange(p)},n),l.row.append(c),l.el=c,l.inputs=u,l.signal=s,l}addPad(i,e,t){let n=Ht(t),s=Mn(e),r=Je(s).peek();if(!Array.isArray(r))throw new TypeError("[guspira] addPad needs a signal holding an [x, y] array");let a=this.createRow(i,n),o=(y,R,C)=>{let L=Array.isArray(y)?y[R]:y;return L===void 0?C:L},l=o(n.min,0,0),c=o(n.max,0,1),h=o(n.min,1,0),u=o(n.max,1,1),f=o(n.step,0,(c-l)/100),p=o(n.step,1,(u-h)/100),d=!!n.invertY,v=document.createElement("div");v.className="gui-control gui-pad",v.tabIndex=0,v.setAttribute("role","application"),v.setAttribute("aria-label",`${i||"Pad"} \u2014 arrow keys to move, shift for bigger steps`),n.height!==void 0&&v.style.setProperty("--gui-pad-height",typeof n.height=="number"?`${n.height}px`:n.height);let g=document.createElement("div");g.className="gui-pad-dot",v.append(g);let m=y=>Math.min(1,Math.max(0,y)),_=(y,R,C)=>C===R?0:(y-R)/(C-R),T=(y,R)=>{let C=[In(y,f,l,c),In(R,p,h,u)];s.set(C),n.onChange&&n.onChange(C)},M=y=>{let R=v.getBoundingClientRect(),C=m((y.clientX-R.left)/R.width),L=m((y.clientY-R.top)/R.height);T(l+C*(c-l),h+(d?1-L:L)*(u-h))},E=()=>!a.row.classList.contains("disabled");v.addEventListener("pointerdown",y=>{if(!(y.button!==0||!E())){try{v.setPointerCapture(y.pointerId)}catch{}v.focus({preventScroll:!0}),M(y)}}),v.addEventListener("pointermove",y=>{v.hasPointerCapture(y.pointerId)&&M(y)});let w=y=>{v.hasPointerCapture(y.pointerId)&&v.releasePointerCapture(y.pointerId)};v.addEventListener("pointerup",w),v.addEventListener("pointercancel",w);let x={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};return v.addEventListener("keydown",y=>{let R=x[y.key];if(!R||!E())return;y.preventDefault();let C=y.shiftKey?10:1,[L,B]=Je(s).peek();T(L+R[0]*f*C,B+(d?-R[1]:R[1])*p*C)}),a.bind(()=>{let[y,R]=Je(s)(),C=m(_(y,l,c)),L=m(_(R,h,u));g.style.left=`${C*100}%`,g.style.top=`${(d?1-L:L)*100}%`}),this._randomizable(a,()=>T(Fh(l,c),Fh(h,u)),n),a.row.append(v),a.el=v,a.signal=s,a}addSegmented(i,e,t,n){let s=Ht(n),r=Mn(e),a=this.createRow(i,s),o=document.createElement("div");o.className="gui-control gui-segmented",o.setAttribute("role","radiogroup"),i&&o.setAttribute("aria-label",i);let l=t.map(c=>{let h=document.createElement("button");return h.type="button",h.className="gui-segment",h.textContent=Bh(c),h.title=String(Bh(c)),h.setAttribute("role","radio"),h.onclick=()=>{ui(c)!==Je(r).peek()&&(r.set(ui(c)),s.onChange&&s.onChange(Je(r).peek()))},o.append(h),{button:h,value:ui(c)}});return o.addEventListener("keydown",c=>{let h={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[c.key];if(!h||a.row.classList.contains("disabled"))return;c.preventDefault();let u=l.findIndex(d=>d.value===Je(r).peek()),f=u===-1&&h<0?0:u,p=l[(f+h+l.length)%l.length];p.value!==Je(r).peek()&&(r.set(p.value),s.onChange&&s.onChange(Je(r).peek()),p.button.focus())}),a.bind(()=>{let c=Je(r)();l.forEach(({button:h,value:u})=>{let f=u===c;h.classList.toggle("active",f),h.setAttribute("aria-checked",String(f)),h.tabIndex=f?0:-1}),!l.some(({button:h})=>h.tabIndex===0)&&l.length&&(l[0].button.tabIndex=0)}),this._randomizable(a,()=>{r.set(ui($0(t))),s.onChange&&s.onChange(Je(r).peek())},s),a.row.append(o),a.el=o,a.options=t,a.signal=r,a}addTextArea(i,e,t){let n=Ht(t),s=Mn(e),r=this.createRow(i,n);r.row.classList.add("gui-row-block");let a=document.createElement("div");a.className="gui-block-head",r.labelEl&&a.append(r.labelEl);let o=document.createElement("textarea");o.className="gui-textarea",o.rows=n.rows??3,n.placeholder&&(o.placeholder=n.placeholder),n.spellcheck!==void 0&&(o.spellcheck=n.spellcheck),o.oninput=()=>{s.set(o.value),n.onChange&&n.onChange(o.value)};let l=()=>o.value=Je(s).peek()??"";return r.bind(()=>{Je(s)(),document.activeElement!==o&&l()}),o.addEventListener("blur",l),r.row.append(a,r.labelled(o)),r.el=o,r.signal=s,r}addGraph(i,e,t){let n=Ht(t),s=(Array.isArray(e)?e:[e]).map(Mn),r=this.createRow(i,n);r.row.classList.add("gui-row-block");let a=document.createElement("div");a.className="gui-block-head",r.labelEl&&a.append(r.labelEl);let o=document.createElement("div");o.className="gui-control gui-graph";let l=document.createElement("stats-graph");(n.stacked||s.length>1)&&l.setAttribute("stacked",""),n.min!==void 0&&(l.min=n.min),n.max!==void 0&&(l.max=n.max),n.over!==void 0&&(l.over=n.over),n.below!==void 0&&(l.below=n.below),n.samples!==void 0&&(l.samples=n.samples);let c=s.length>1?()=>s.map(d=>d.peek()):()=>s[0].peek(),h=jr(n.pausedWhen,n.paused);if(l.source=h?()=>h()?void 0:c():c,h&&r.bind(()=>o.classList.toggle("gui-graph-paused",!!h())),l.hasAttribute("stacked")&&s.length>1){let d=n.series||s.map(v=>v.counterName).filter(Boolean);d.length===s.length&&(l.series=d)}let u=document.createElement("span");u.className="gui-monitor gui-graph-val";let f=n.format||(d=>Math.abs(d)>=100?d.toFixed(0):d.toFixed(1));l.formatValue=f;let p=setInterval(()=>{l.isConnected&&(u.textContent=f(l.current),u.classList.toggle("gui-over",l.breached))},n.interval??100);return r.onDestroy(()=>clearInterval(p)),a.append(u),o.append(l),r.row.append(a,o),r.el=l,r.signal=s[0],r.signals=s,r}addMonitor(i,e,t){let n=Ht(t),s=Mn(e),r=this.createRow(i,n),a=document.createElement("span");a.className="gui-monitor";let o=n.format||(c=>String(c)),l=c=>n.over!==void 0&&c>n.over||n.below!==void 0&&c<n.below;return r.bind(()=>{let c=s();a.textContent=o(c),a.classList.toggle("gui-over",typeof c=="number"&&l(c))}),r.row.append(a),r.el=a,r.signal=s,r}addFileButton(i,e,t){let n=Ht(t),s=this.addButton(i,()=>r.click(),n),r=document.createElement("input");return r.type="file",r.hidden=!0,n.accept&&(r.accept=n.accept),r.addEventListener("change",()=>{let a=r.files&&r.files[0];a&&e(a),r.value=""}),s.row.append(r),s.fileInput=r,s}addLabel(i,e={}){return this.createRow(i,e)}addText(i,e={}){let t=this.createRow(null,e),n=document.createElement("div");return n.className="gui-text",n.innerHTML=i,t.row.append(n),t.el=n,t}addSeparator(i={}){let e=this.createRow(null,i),t=document.createElement("div");return t.className="gui-separator",e.row.append(t),e.el=t,e}addElement(i,e={}){let t=this.createRow(e.label,e);return t.row.append(i),t.el=i,t}addPresets(i,e={}){let t={};if(e.builtin!==!1&&i.builtinNames().length>1){let c=i.builtinNames(),h=un(c.includes(i.current.peek())?i.current.peek():c[0]);t.builtin=this.addSelect(e.label||"Preset",h,c,{randomizable:!1,onChange:u=>i.apply(u)}),t.builtin.bind(()=>h.set(c.includes(i.current())?i.current():c[0]))}let n=(c,h,u,f)=>{c.row.classList.add("gui-compact");let p=document.createElement("button");return p.className="gui-btn gui-btn-mini",p.type="button",p.textContent=h,p.title=u,p.onclick=f,c.row.append(p),p},s=un("");t.saved=this.addSelect("Saved",s,[],{randomizable:!1});let r=c=>{let h=i.userNames();t.saved.setOptions(h.length?h:[["","(none saved)"]]);let u=c&&h.includes(c)?c:h[0]||"";s.set(u),t.saved.el.value=u};r(),t.load=n(t.saved,"Load","Load the selected preset",()=>{s()&&i.load(s())}),t.remove=n(t.saved,"\u2715","Delete the selected preset",()=>{s()&&(i.remove(s()),r())});let a=un("");t.name=this.addTextInput("Name",a,{placeholder:"name this look"}),t.save=n(t.name,e.saveLabel||"Save","Save the current values",()=>{let c=a().trim();c&&(i.save(c),r(c))});let o=c=>i.importFile(c).then(()=>r(i.current.peek())).catch(h=>{console.warn("[guspira] could not import preset:",h),e.onImportError&&e.onImportError(h)}),l=document.createElement("input");return l.type="file",l.hidden=!0,l.accept="application/json,.json",l.addEventListener("change",()=>{let c=l.files&&l.files[0];c&&o(c),l.value=""}),t.files=this.addButtons(null,[{label:"Export",title:"Download the current values as JSON",onClick:()=>{let c=i.current.peek(),h=i.userNames().includes(c)?c:"preset";i.exportFile(a().trim()||h,i.snapshot())}},{label:"Import",title:"Load values from a JSON file",onClick:()=>l.click()}]),t.files.row.append(l),t.refresh=r,t}},ld=Zx,Zh=(i,e)=>Array.isArray(e)?Array.isArray(i)&&i.length===e.length&&i.every((t,n)=>Zh(t,e[n])):Array.isArray(i)?!1:typeof e=="number"?typeof i=="number"&&(Number.isFinite(i)||!Number.isFinite(e)):bl(e)?bl(i):typeof i==typeof e;function Kx(i,e){if(typeof e=="number"){let t=parseFloat(i);return isFinite(t)?t:void 0}if(typeof e=="boolean")return i==="true"||i==="1"?!0:i==="false"||i==="0"?!1:void 0;if(Array.isArray(e)){let t=i.split(",").map(n=>parseFloat(n));return t.length!==e.length||t.some(n=>!isFinite(n))?void 0:t}return i}function Jx(i){try{let e=JSON.parse(localStorage.getItem(i));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function jx(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch{return!1}}function cd(i,e={}){let{storageKey:t=null,exclude:n=[],url:s=!1,migrate:r=null,delay:a=250,ease:o=null}=e,l=typeof o=="number"?{duration:o}:o,c=Object.keys(i),h=c.filter(y=>!n.includes(y)),u=t?Jx(t):{};if(r&&(u=r(u)||u),s&&typeof location<"u"){let y=Array.isArray(s)?s:c,R=new URLSearchParams(location.search);for(let C of y){if(!R.has(C))continue;let L=Kx(R.get(C),i[C]);L!==void 0&&(u[C]=L)}}let f=(y,R,C)=>y.map((L,B)=>L+(R[B]-L)*C),p=y=>Array.isArray(y)&&y.length>0&&y.every(R=>typeof R=="number"),d=(y,R)=>{if(!l)return un(R);let{duration:C=400,easing:L,only:B=null,skip:X=[],interpolate:N={}}=l;if(!((B?B.includes(y):!0)&&!X.includes(y)))return un(R);let O=N[y],G=i[y];return O?ml(R,C,L,O):typeof G=="number"?ml(R,C,L):bl(G)?ml(R,C,L,Dx):p(G)?ml(R,C,L,f):un(R)},v={};for(let y of c){let R=y in u&&Zh(u[y],i[y])?u[y]:i[y];v[y]=d(y,R)}let g=(y=h)=>{let R={};for(let C of y)R[C]=v[C].target();return R},m=y=>{if(!y||typeof y!="object")return[];let R=[];return Wh(()=>{for(let[C,L]of Object.entries(y))!(C in v)||!Zh(L,i[C])||(v[C].set(L),R.push(C))}),R},_=(y=c)=>{Wh(()=>y.forEach(R=>v[R].set(i[R])))},T=y=>String(v[y].target())===String(i[y]),M=null,E=()=>{},w=()=>{};if(t){E=()=>{clearTimeout(M),M=null,jx(t,g(h.filter(X=>!T(X))))};let y=()=>{clearTimeout(M),M=setTimeout(E,a)},R=!1,C=Tl(()=>h.map(X=>yl(()=>{v[X].target(),R&&y()})));R=!0;let L=()=>{M!==null&&E()},B=typeof addEventListener=="function";B&&addEventListener("pagehide",L),w=()=>{clearTimeout(M),M=null,C.forEach(X=>X()),B&&removeEventListener("pagehide",L)}}let x={$defaults:i,$keys:c,$persisted:h,$snapshot:g,$apply:m,$reset:_,$flush:E,$stop:w,$ease:y=>{for(let R of c)v[R].target!==v[R]&&(v[R].duration=y)},$clear:()=>{if(clearTimeout(M),M=null,t)try{localStorage.removeItem(t)}catch{}},$toQuery:()=>{let y=new URLSearchParams;for(let R of h){if(T(R))continue;let C=v[R].target();y.set(R,Array.isArray(C)?C.join(","):String(C))}return y.toString()}};for(let[y,R]of Object.entries(x))Object.defineProperty(v,y,{value:R,enumerable:!1});return v}var jM=typeof performance<"u"&&performance.now?()=>performance.now():()=>Date.now();(function(){var i=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||this,e=function(t){if(t instanceof e)return t;if(!(this instanceof e))return new e(t);this._wrapped=t};typeof exports<"u"&&!exports.nodeType?(typeof module<"u"&&!module.nodeType&&module.exports&&(exports=module.exports=e),exports.Maf=e):i.Maf=e,e.VERSION="1.0.0",e.PI=Math.PI,e.TAU=2*e.PI,e.clamp=function(t,n,s){return Math.min(s,Math.max(n,t))},e.step=function(t,n){return n<t?0:1},e.smoothStep=function(t,n,s){var r=e.clamp((s-t)/(n-t),0,1);return r*r*(3-2*r)},e.deg2Rad=function(t){return t*Math.PI/180},e.toRadians=e.deg2Rad,e.rad2Deg=function(t){return t*180/Math.PI},e.toDegrees=e.rad2Deg,e.clamp01=function(t){return e.clamp(t,0,1)},e.mix=function(t,n,s){return s<=0?t:s>=1?n:t+s*(n-t)},e.lerp=e.mix,e.inverseMix=function(t,n,s){return(s-t)/(n-t)},e.inverseLerp=e.inverseMix,e.mixUnclamped=function(t,n,s){return t+s*(n-t)},e.lerpUnclamped=e.mixUnclamped,e.fract=function(t){return t-Math.floor(t)},e.frac=e.fract,e.isPowerOfTwo=function(t){return(t-1&t)==0},e.closestPowerOfTwo=function(t){return Math.pow(2,Math.round(Math.log(t)/Math.log(2)))},e.nextPowerOfTwo=function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)))},e.mod=function(t,n){return(t%n+n)%n},e.deltaAngle=function(t,n){var s=e.mod(n-t,360);return s>180&&(s-=360),s},e.deltaAngleDeg=e.deltaAngle,e.deltaAngleRad=function(t,n){return e.toRadians(e.deltaAngle(e.toDegrees(t),e.toDegrees(n)))},e.lerpAngle=function(t,n,s){var r=e.deltaAngle(t,n);return e.mod(t+e.lerp(0,r,s),360)},e.lerpAngleDeg=e.lerpAngle,e.lerpAngleRad=function(t,n,s){return e.toRadians(e.lerpAngleDeg(e.toDegrees(t),e.toDegrees(n),s))},e.gammaToLinearSpace=function(t){return Math.pow(t,2.2)},e.linearToGammaSpace=function(t){return Math.pow(t,1/2.2)},e.map=function(t,n,s,r,a){return t===n?s:s+(a-t)*(r-s)/(n-t)},e.scale=e.map,e.almostIdentity=function(t,n,s){if(t>n)return t;var r=2*s-n,a=2*n-3*s,o=t/n;return(r*o+a)*o*o+s},e.impulse=function(t,n){var s=t*n;return s*Math.exp(1-s)},e.cubicPulse=function(t,n,s){return s=Math.abs(s-t),s>n?0:(s/=n,1-s*s*(3-2*s))},e.expStep=function(t,n,s){return Math.exp(-n*Math.pow(t,s))},e.parabola=function(t,n){return Math.pow(4*t*(1-t),n)},e.powerCurve=function(t,n,s){var r=Math.pow(n+s,n+s)/(Math.pow(n,n)*Math.pow(s,s));return r*Math.pow(t,n)*Math.pow(1-t,s)},e.latLonToCartesian=function(t,n){n+=180,t=e.clamp(t,-85,85);var s=e.toRadians(90-t),r=e.toRadians(180-n),a=Math.sin(s)*Math.cos(r),o=Math.cos(s),l=Math.sin(s)*Math.sin(r);return{x:a,y:o,z:l}},e.cartesianToLatLon=function(t,n,s){var r=Math.sqrt(t*t+n*n+s*s),a=90-e.toDegrees(Math.acos(n/r)),o=-e.toDegrees(Math.atan2(s,t));return{lat:a,lon:o}},e.randomInRange=function(t,n){return t+Math.random()*(n-t)},e.intRandomInRange=(t,n)=>Math.floor(e.randomInRange(t,n)),e.randomElement=function(t){return t[e.intRandomInRange(0,t.length)]},e.norm=function(t,n,s){return(t-n)/(s-n)},e.hash=function(t){return e.fract((1+Math.cos(t))*415.92653)},e.noise2d=function(t,n){var s=e.hash(t*37),r=e.hash(n*57);return e.fract(s+r)},e.smoothMin=function(t,n,s){var r=Math.exp(-s*t)+Math.exp(-s*n);return-Math.log(r)/s},e.smoothMax=function(t,n,s){return Math.log(Math.exp(s*t)+Math.exp(s*n))/s},e.almost=function(t,n){return Math.abs(t-n)<1e-4}})();var El=window.Maf;var Qx=["Fold","Shatter","Melt","Tangle","Moss","Orrery","Hollow","Tesseract","Membrane","Caustic","Rust","Feather","Labyrinth","Tension","Mirage","Spore","Kelp","Pendulum","Erosion","Cocoon","Bolt","Echo","Magma","Nest","Veil","Anamorph","Burrow","Hive","Portal","Dissolve"],e_=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],t_=[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19],Hs=Qx.map((i,e)=>({day:e+1,prompt:i,title:e_.includes(e+1)?i:"",explainer:t_.includes(e+1)})),ea=2026,Al="Codevember";var fi=new URLSearchParams(window.location.search);{let i=new Set,e=new Set,t=window.AudioContext??window.webkitAudioContext;t&&(window.AudioContext=class extends t{constructor(...r){super(...r),i.add(this)}});let n=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(...r){return e.add(this),n.apply(this,r)};let s=new Set;document.addEventListener("visibilitychange",()=>{if(document.hidden){for(let r of i)r.state==="running"&&s.add(r)&&r.suspend().catch(()=>{});for(let r of e)r.paused||s.add(r)&&r.pause()}else{for(let r of s)r instanceof HTMLMediaElement?r.play().catch(()=>{}):r.resume().catch(()=>{});s.clear()}})}var na=[],au=new Map,jh=new Map;function gd(i,e){let t=cd(i,e);return na.push(t),au.set(t,{...i}),t}var n_=new Set(["seed","size","w","h","dpr","capture","quality"]),Rl=i=>n_.has(i)?`_${i}`:i,vd=(i,e)=>String(i)===String(e);function i_(i,e){if(typeof e=="number"){let t=parseFloat(i);return Number.isFinite(t)?t:void 0}if(typeof e=="boolean")return i==="true"||i==="1";if(Array.isArray(e)){let t=i.split(",").map(Number);return t.every(Number.isFinite)?t:void 0}return i}function xd(i){let e=na.map(t=>t.$snapshot(t.$keys));for(let t of Rd)t(i);na.forEach((t,n)=>{let s=t.$snapshot(t.$keys);jh.has(t)||jh.set(t,new Set);let r=jh.get(t),a={};for(let o of t.$keys)vd(s[o],e[n][o])||r.add(o),a[o]=r.has(o)?s[o]:t.$defaults[o];au.set(t,a)})}function s_(){for(let i of na){let e={};for(let t of i.$keys){if(!fi.has(Rl(t)))continue;let n=i_(fi.get(Rl(t)),i.$defaults[t]);n!==void 0&&(e[t]=n)}i.$apply(e)}}var _d=!!Wi,hd="";function yd(){let i=new URL(window.location.href);_d&&i.searchParams.set("seed",ya());for(let t of na){let n=au.get(t);for(let s of t.$keys){let r=t[s].target();vd(r,n[s])?i.searchParams.delete(Rl(s)):i.searchParams.set(Rl(s),Array.isArray(r)?r.join(","):String(r))}}let e=i.toString();e!==hd&&(hd=e,e!==window.location.href&&history.replaceState(null,"",e))}ad(()=>Math.random());var r_=35,a_=parseFloat(fi.get("dpr"))||2,Md=[],bd=[],nu=null,ud=document.documentElement.dataset.canvas==="pipeline",fn=new hl({antialias:!ud,depth:!ud,alpha:!0,preserveDrawingBuffer:fi.has("capture")});fn.outputColorSpace=sn;fn.toneMapping=Br;fn.toneMappingExposure=1;document.body.appendChild(fn.domElement);var Qh=null,iu=parseInt(fi.get("size"))||0;function ou(){return nu??(iu?1:Math.min(window.devicePixelRatio,a_))}function lu(){let i=iu||parseInt(fi.get("w"))||window.innerWidth,e=iu||parseInt(fi.get("h"))||window.innerHeight;return{w:i,h:e}}function Sd(i,e,t){let n=e/t;if(i.isPerspectiveCamera){let s=i.userData.baseFov;if(i.aspect=n,n<1){let r=Math.tan(El.toRadians(s)/2);i.fov=El.toDegrees(2*Math.atan(r/n))}else i.fov=s}if(i.isOrthographicCamera){let s=i.userData.frustumHeight;i.top=s/2,i.bottom=-s/2,i.left=-s*n/2,i.right=s*n/2}i.updateProjectionMatrix()}function ia(){let{w:i,h:e}=lu(),t=ou();fn.setPixelRatio(t),fn.setSize(i,e),Qh&&(Qh.setPixelRatio(t),Qh.setSize(i,e));for(let n of Md)Sd(n,i,e);for(let n of bd)n(i,e,t)}window.addEventListener("resize",ia);function wd(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{ia(),wd()},{once:!0})}wd();function Td(i){bd.push(i);let{w:e,h:t}=lu();i(e,t,ou())}function o_(i=r_,e=.1,t=100){let n=new zt(i,1,e,t);n.userData.baseFov=i,Md.push(n);let{w:s,h:r}=lu();return Sd(n,s,r),n}ia();var Wt=o_(),an=new pl(Wt,fn.domElement),Di=!0,Ed=[];function sa(){return Di}function cu(i){Di=i,document.body.classList.toggle("paused",!Di);let e=document.querySelector("#pause-button"),t=e?.querySelector("img");e&&(e.title=Di?"Pause":"Play"),t&&(t.src=t.src.replace(/(pause|play)\.svg/,Di?"pause.svg":"play.svg"),t.alt=e.title);for(let n of Ed)n(Di)}function Ad(){cu(!Di)}function Cd(i){Ed.push(i)}var Rd=[];function ra(i){Rd.push(i)}function Xs(){$u(),_d=!0,xd(ya()),yd()}function l_(){let i=document.documentElement;document.fullscreenElement||document.webkitFullscreenElement?(document.exitFullscreen??document.webkitExitFullscreen)?.call(document):(i.requestFullscreen??i.webkitRequestFullscreen)?.call(i)?.catch?.(()=>{})}var Pd=[];function qs(i,e,t,n){return Pd.push({code:i,description:e}),Jh(i,t,{preventDefault:!0,...n})}function Id(){let i={Space:"Space",Tab:"Tab"};return Pd.filter(e=>e.description).map(e=>`<p>Press ${i[e.code]??e.code.replace(/^Key|^Digit/,"")} to ${e.description}.</p>`).join("")}qs("Space","toggle animation",Ad);qs("KeyR","randomize",Xs);qs("KeyF","toggle fullscreen",l_);qs("Tab","toggle this GUI",()=>document.body.classList.toggle("hide-ui"));qs("KeyP","save a screenshot (Shift+P for 2x)",()=>Bd(1));qs("KeyP",null,()=>Bd(2),{shift:!0});fi.has("capture")&&document.body.classList.add("hide-ui");var en=document.querySelector("#loading");fi.has("capture")&&en?.remove();var Cl=null;function Ld(i,e=i){Cl=matchMedia("(pointer: coarse)").matches?e:i}var c_=null;var ta=[],eu=0;function hu(i=1,e=null){let t={weight:i,label:e,value:0,set(n){t.value=Math.max(t.value,Math.min(1,n)),fd()},done(){t.set(1)},track(n,s=0){let r=performance.now(),a=s>0&&setInterval(()=>t.set(.9*(1-Math.exp((r-performance.now())/1e3/s))),100),o=()=>{clearInterval(a),t.done()};return n.then(o,o),n}};return ta.push(t),fd(),t}function fd(){let i=en?.querySelector("span");if(!i||en.classList.contains("hint"))return;let e=ta.reduce((n,s)=>n+s.weight,0),t=ta.reduce((n,s)=>n+s.weight*s.value,0);if(eu=Math.max(eu,e>0?t/e:0),en.classList.add("progress"),i.style.setProperty("--progress",eu),ta.some(n=>n.label)){en.dataset.text??=i.textContent;let n=ta.find(s=>s.label&&s.value<1);i.textContent=n?n.label:en.dataset.text}}function dd(){!en.isConnected||en.classList.contains("done")||(en.classList.add("done"),setTimeout(()=>en.remove(),700))}function h_(){if(!en?.isConnected||en.classList.contains("done"))return;let i=en.querySelector("span");if(!Cl||!i)return dd();if(c_?.()&&!navigator.userActivation?.hasBeenActive){let r=document.createElement("span");r.className="sound-hint";let a=document.createElement("img");a.src="../assets/sound.svg",a.alt="",r.append(a,matchMedia("(pointer: coarse)").matches?"Tap anywhere for sound":"Click anywhere for sound"),en.append(r)}let e=i.getBoundingClientRect().width;i.style.width=`${e}px`,en.classList.add("hint");let t=["pointerdown","wheel","keydown","touchstart"],n=()=>{t.forEach(r=>removeEventListener(r,n,!0)),dd()};t.forEach(r=>addEventListener(r,n,{capture:!0,passive:!0})),setTimeout(()=>{i.replaceChildren(...Cl.split(/\{(\w+)\}/).map((a,o)=>{if(o%2===0)return a;let l=document.createElement("img");return l.src=`../assets/${a}.svg`,l.alt=a,l})),i.style.width="";let r=i.getBoundingClientRect().width;i.style.width=`${e}px`,i.getBoundingClientRect(),i.style.width=`${r}px`,setTimeout(()=>en.classList.add("shown"),350)},250);let s=Cl.split(/\s+/).filter(r=>/\w/.test(r)).length;setTimeout(n,1e3*Math.min(16,Math.max(6,2+.3*s)))}var pd=["compact","no-arrows","no-explainer","no-home"];function u_(){let i=document.querySelector("#info");if(!i)return;i.classList.remove(...pd);let e=[...document.querySelectorAll("#main-gui > .button")].map(n=>n.getBoundingClientRect()).filter(n=>n.width);if(!e.length)return;let t=Math.min(...e.map(n=>n.left))-6;for(let n of pd){if(i.getBoundingClientRect().right<=t)return;i.classList.add(n)}}var tu=!1;function Nd(){tu||(tu=!0,requestAnimationFrame(()=>{tu=!1,u_()}))}addEventListener("resize",Nd);document.querySelector("#randomize-button")?.addEventListener("click",Xs);document.querySelector("#pause-button")?.addEventListener("click",Ad);function Dd(){return parseInt(window.location.pathname.split("/").at(-2))}function Fd(i=Dd()){if(isNaN(i))return document.title=`${Al} ${ea}`,"Template";let e=Hs.find(h=>h.day===i),t=e?`${i}. ${e.prompt}`:`${i}`;document.title=`${Al} ${ea} - ${t}`;let n=document.createElement("nav");n.id="info";let s=(h,u,f)=>`<a href="${h}"${f?` title="${f}" aria-label="${f}"`:""}>${u}</a>`,r=h=>`<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="${h}" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,a='<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor"><rect x="2.5" y="2.5" width="4.75" height="4.75" rx="0.75"/><rect x="8.75" y="2.5" width="4.75" height="4.75" rx="0.75"/><rect x="2.5" y="8.75" width="4.75" height="4.75" rx="0.75"/><rect x="8.75" y="8.75" width="4.75" height="4.75" rx="0.75"/></svg>',o='<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 4.2C6.8 3.3 5.2 2.9 2.8 2.9v9.3c2.4 0 4 .4 5.2 1.3 1.2-.9 2.8-1.3 5.2-1.3V2.9c-2.4 0-4 .4-5.2 1.3zM8 4.2v9.3"/></svg>',l=Hs.find(h=>h.day===i-1),c=Hs.find(h=>h.day===i+1);return n.innerHTML=[l?.title?s(`../${l.day}/`,`${r("M11 3.5v9L4.5 8z")}<span>${l.day}</span>`,`Previous: ${l.day}. ${l.title}`):"",`<a class="home" href="../">${a}<span>[vibe-]Codevember ${ea}</span></a>`,c?.title?s(`../${c.day}/`,`<span>${c.day}</span>${r("M5 3.5v9L11.5 8z")}`,`Next: ${c.day}. ${c.title}`):"",e?.explainer?`<a class="explainer" href="explainer.html" title="How ${e.prompt} works">${o}<span>How it works</span></a>`:""].join(""),document.body.append(n),Nd(),t}var su=new Is;su.connect(document);var ru=0,Ws=0,Ud=null,md=!1;function uu(){md||(md=!0,Wi&&(sr(Wi),xd(Wi)),s_())}function Od(i){return Ws===0&&uu(),Ud=i,fn.setAnimationLoop(e=>{su.update(e);let t=Di?El.clamp(su.getDelta(),0,.1):0;ru+=t,i({time:ru,dt:t,frame:Ws}),Ws===0&&h_(),Ws%30===0&&yd(),Ws++}),()=>fn.setAnimationLoop(null)}function Bd(i=1){nu=ou()*i,ia(),Ud?.({time:ru,dt:0,frame:Ws}),fn.domElement.toBlob(t=>{let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s;let r=Dd()||"template";n.download=`${Al.toLowerCase()}-${ea}-${r}-${ya()}.png`,n.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)},"image/png"),nu=null,ia()}wt();wt();function di(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l=[],c=new Map,h=[],u=["getX","getY","getZ","getW"],f=e*.5,p=Math.log10(1/e),d=Math.pow(10,p),v=f*d;for(let m=0;m<r;m++){let _=n?n.getX(m):m,T="";for(let M=0,E=o.length;M<E;M++){let w=o[M],x=i.getAttribute(w),y=x.itemSize;for(let R=0;R<y;R++)T+=`${Math.trunc(x[u[R]](_)*d+v)},`}T in t?h.push(t[T]):(l.push(_),t[T]=a,h.push(a),a++)}let g=i.clone();for(let m in i.attributes)g.setAttribute(m,kd(i.attributes[m],l,c));for(let m in i.morphAttributes)g.morphAttributes[m]=i.morphAttributes[m].map(_=>kd(_,l,c));return g.setIndex(h),g}function kd(i,e,t=new Map){let n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize,a=n?t.get(s):void 0;if(a===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];a=n?new s.constructor(l,r,s.meshPerAttribute):new i.constructor(l,i.itemSize,i.normalized,i.meshPerAttribute),a.setUsage(s.usage),n&&t.set(s,a)}let o=n?new i.constructor(a,i.itemSize,i.offset,i.normalized):a;return o.name=i.name,n||(o.gpuType=i.gpuType),o}wt();wt();var Ee={resolution:{value:new _e},cameraNear:{value:.1},cameraFar:{value:100},projectionMatrixInverse:{value:new Be},viewMatrixInverse:{value:new Be},prevViewProjection:{value:new Be},jitter:{value:new _e},frame:{value:0},time:{value:0},prevTime:{value:0},motionPass:{value:0},envMap:{value:null},envMapMaxLod:{value:0},envIntensity:{value:1},envRotation:{value:new Fe},shIrradiance:{value:Array.from({length:9},()=>new P)},lightDirection:{value:new P(.5,1,.3).normalize()},lightColor:{value:new Te(1,1,1)},lightSpecular:{value:1},lightSheen:{value:1},specularShadow:{value:0},shadowMap:{value:null},shadowMapCmp:{value:null},shadowMatrix:{value:new Be},shadowMapSize:{value:new _e(2048,2048)},shadowLightSize:{value:.05},shadowSoftness:{value:1},shadowBias:{value:5e-4},shadowNormalBias:{value:.02},shadowEnabled:{value:0},shadowMaxRadius:{value:.12},shadowTwoSided:{value:0},shadowTranslucency:{value:0},shadowLayerT:{value:.33},shadowLayerSpacing:{value:.02},shadowMinTexels:{value:0},shadowMask:{value:null},shadowMaskEnabled:{value:0},giMap:{value:null},giEnabled:{value:0},aoIntensity:{value:1},giIntensity:{value:1},aoColor:{value:new Te(0,0,0)},aoPower:{value:1},aoDirect:{value:0},aoMin:{value:0},aoMultiBounce:{value:0},depthTexture:{value:null},giGeoMap:{value:null},occluders:{value:Array.from({length:16},()=>new lt)},occluderCount:{value:0},occluderStrength:{value:1},occluderReach:{value:4},pipelineDebug:{value:0}};wt();var zd=new kn({visible:!1});function Pl(i,e){return!i?.isPipelineMaterial||e==="prepass"&&i.transparent?null:i.getVariant(e)}var Ys=[];function $s(i,e,t,n,s,r){Ys.length=0,e.traverseVisible(l=>{let c=l.material;if(!c)return;let h=null;if(!r||r(l))if(Array.isArray(c)){let u=c.map(f=>Pl(f,n));h=u.some(Boolean)?u.map(f=>f??zd):null}else h=Pl(c,n);Ys.push(l,c),l.material=h??zd});let a=e.background,o=e.overrideMaterial;e.background=null,e.overrideMaterial=null;try{s!==void 0&&i.setRenderTarget(s),i.render(e,t)}finally{e.background=a,e.overrideMaterial=o;for(let l=0;l<Ys.length;l+=2)Ys[l].material=Ys[l+1];Ys.length=0}}function Il(i,e,t,n,s){let r=[];e.traverse(a=>{let o=a.material;if(!o)return;let l=null;if(!s||s(a))if(Array.isArray(o)){let c=o.map(h=>Pl(h,n)).filter(Boolean);l=c.length?c:null}else l=Pl(o,n);r.push(a,o),a.material=l});try{return i.compileAsync(e,t)}finally{for(let a=0;a<r.length;a+=2)r[a].material=r[a+1]}}wt();wt();wt();var f_=new Float64Array(1024);for(let i=0;i<1024;i++)f_[i]=Math.pow(i*.003717127+.0521327014,2.4);var Nl=-2,fu=-6,Ll=5,d_=22,Vd=44,Gd=44,p_=46,Hd=.035,m_=.82,Dl=7,aa=new P;function g_(i,e){let t=[];for(let d=0;d<=24;d++){let v=d/24;t.push([Gd+(fu-Gd)*v,Nl,1])}let s=24;for(let d=1;d<=s;d++){let v=d/s*Math.PI*.5;t.push([fu-Ll*Math.sin(v),Nl+Ll*(1-Math.cos(v)),1-d/s])}let r=fu-Ll,a=Nl+Ll,o=12;for(let d=1;d<=o;d++)t.push([r,a+(d_-a)*d/o,0]);let l=16,c=[],h=[],u=[];for(let d=0;d<=l;d++){let v=-Vd+2*Vd*d/l;for(let[g,m,_]of t){c.push(v,m,g);let T=e+(i-e)*_;h.push(T,T,T)}}let f=t.length;for(let d=0;d<l;d++)for(let v=0;v<f-1;v++){let g=d*f+v,m=g+f;u.push(g,m,g+1,m,m+1,g+1)}let p=new Ye;return p.setAttribute("position",new De(c,3)),p.setAttribute("color",new De(h,3)),p.setIndex(u),p.computeVertexNormals(),p}function Wd(i,e,t,n=1){let s=Dl*Math.tan(e),r=2*s*Math.sqrt(n),a=2*s/Math.sqrt(n),o=new Ki(r,a,32,32),l=o.attributes.position,c=[],h=0;for(let f=0;f<l.count;f++){let p=2*l.getX(f)/r,d=2*l.getY(f)/a,v=Math.pow(p**4+d**4,.25),g=1-v_(.82,1,v),m=t*(1.15-.3*v*v)*g;c.push(m,m,m),h+=m}o.setAttribute("color",new De(c,3));let u=new rt(o,null);return u.position.copy(i).multiplyScalar(Dl),Math.abs(i.y)>.99&&u.up.set(0,0,-1),u.lookAt(0,0,0),u.updateMatrixWorld(),{mesh:u,power:h/l.count*r*a}}function v_(i,e,t){let n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)}function Xd(i,e){let t=new Fr(e,i.power,0,Math.PI/2,1,2);return t.position.copy(i.mesh.position),t.target.position.set(0,0,0),t.updateMatrixWorld(),t.target.updateMatrixWorld(),t}function qd(i,e){aa.set(0,Nl,0).sub(i);let t=aa.lengthSq();aa.normalize();let n=Math.max(-aa.dot(i.clone().normalize()),0),s=Math.max(-aa.y,0);return e*n*s/t}function x_(i){let e=Ee;e.envMap.value=i.envMap,e.envMapMaxLod.value=Math.max(i.envMap.mipmaps.length-1,0);for(let t=0;t<9;t++)e.shIrradiance.value[t].copy(i.sh[t]);e.lightDirection.value.copy(i.lightDirection),i.lightColor&&e.lightColor.value.copy(i.lightColor),i.shadowLightSize!==void 0&&(e.shadowLightSize.value=i.shadowLightSize)}function Yd(i,e={}){return y_(i,__(e),e)}function __({keyDirection:i=new P(-.55,.72,.45),keyIntensity:e=8,keySize:t=.4,fill:n=.6,fillColor:s=16777215,floor:r=.9,tint:a=16777215,ceiling:o=0,wall:l=m_}){let c=new Te(a),h=i.clone().normalize(),u=new P(-h.x||1,.15,Math.abs(h.z)+.4).normalize(),f=new Kt;f.background=new Te(0,0,0);let p=new kn({color:c,vertexColors:!0,side:rn}),d=new Rr({color:c,vertexColors:!0,side:rn}),v=new kn({color:c.clone().multiplyScalar(Hd),side:Vt}),g=new rt(new Ar(p_,32,16),v),m=new rt(g_(r,l),d),_=Wd(h,t,e,.8),T=Wd(u,t*1.6,n,.7),M=c.clone().multiply(new Te(s)),E=new kn({color:M,vertexColors:!0,side:rn});_.mesh.material=p,T.mesh.material=E,f.add(g,m,_.mesh,T.mesh);let w=new kn({color:c.clone().multiplyScalar(o),side:rn});if(o>0){let L=new rt(new wr(24,48),w);L.position.y=18,L.rotation.x=Math.PI/2,f.add(L)}f.add(Xd(_,c),Xd(T,M));let x=qd(_.mesh.position,_.power)+qd(T.mesh.position,T.power),y=c.clone().multiplyScalar(r*x*.6),R=c.clone().multiplyScalar(Math.PI*Hd+.15*x+1.5*o);return f.add(new Nr(R,y,1)),{scene:f,key:_,tintColor:c,keyDir:h,keySize:t,materials:[p,E,d,v,w]}}function y_(i,{scene:e,key:t,tintColor:n,keyDir:s,keySize:r,materials:a},{apply:o=!0,size:l=256}){let c=new zs(i),h=c.fromScene(e,0,.1,100,{size:l});t.mesh.visible=!1;let u=c.fromScene(e,0,.1,100,{size:l});t.mesh.visible=!0,c.dispose();let f=S_(i,u.texture);u.dispose(),e.traverse(v=>v.geometry?.dispose());for(let v of a)v.dispose();let d={envMap:h.texture,renderTarget:h,sh:f,lightDirection:s,lightColor:n.clone().multiplyScalar(t.power/(Dl*Dl)),shadowLightSize:Math.tan(r)*.8};return o&&x_(d),d}var Fi=128,ts=64,M_=()=>new Jt({glslVersion:jt,depthTest:!1,depthWrite:!1,uniforms:{envMap:{value:null},flip:{value:1},lod:{value:0},size:{value:[Fi,ts]}},vertexShader:`
      void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,fragmentShader:`
      uniform samplerCube envMap;
      uniform float flip;
      uniform float lod;
      uniform vec2 size;
      out vec4 fragColor;
      void main() {
        vec2 uv = gl_FragCoord.xy / size;
        float theta = uv.y * 3.141592653589793;
        float phi = uv.x * 6.283185307179586;
        vec3 d = vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi));
        fragColor = vec4(textureLod(envMap, vec3(flip * d.x, d.yz), lod).rgb, 1.0);
      }
    `}),b_=[1,2/3,2/3,2/3,1/4,1/4,1/4,1/4,1/4];function S_(i,e){let t=new dt(Fi,ts,{type:pt,format:St,minFilter:Xe,magFilter:Xe,depthBuffer:!1,generateMipmaps:!1}),n=M_();n.uniforms.envMap.value=e,n.uniforms.flip.value=e.isRenderTargetTexture?1:-1,n.uniforms.lod.value=Math.max((e.mipmaps?.length??1)-3,0);let s=new Ye;s.setAttribute("position",new De([-1,-1,0,3,-1,0,-1,3,0],3));let r=new rt(s,n);r.frustumCulled=!1;let a=new Pt,o=i.getRenderTarget();i.setRenderTarget(t),i.render(r,a);let l=new Float32Array(Fi*ts*4);i.readRenderTargetPixels(t,0,0,Fi,ts,l),i.setRenderTarget(o),t.dispose(),n.dispose(),s.dispose();let c=Array.from({length:9},()=>new P),h=Math.PI/ts,u=2*Math.PI/Fi,f=new Array(9);for(let p=0;p<ts;p++){let d=(p+.5)/ts*Math.PI,v=Math.sin(d),g=Math.cos(d),m=v*h*u;for(let _=0;_<Fi;_++){let T=(_+.5)/Fi*2*Math.PI,M=v*Math.cos(T),E=v*Math.sin(T);w_(M,g,E,f);let w=(p*Fi+_)*4,x=l[w]*m,y=l[w+1]*m,R=l[w+2]*m;for(let C=0;C<9;C++)c[C].x+=x*f[C],c[C].y+=y*f[C],c[C].z+=R*f[C]}}for(let p=0;p<9;p++)c[p].multiplyScalar(b_[p]);return c}function w_(i,e,t,n){return n[0]=.282095,n[1]=.488603*e,n[2]=.488603*t,n[3]=.488603*i,n[4]=1.092548*i*e,n[5]=1.092548*e*t,n[6]=.315392*(3*t*t-1),n[7]=1.092548*i*t,n[8]=.546274*(i*i-e*e),n}var $d=`
vec3 evalSH(vec3 n) {
  return shIrradiance[0] * 0.282095
    + shIrradiance[1] * (0.488603 * n.y)
    + shIrradiance[2] * (0.488603 * n.z)
    + shIrradiance[3] * (0.488603 * n.x)
    + shIrradiance[4] * (1.092548 * n.x * n.y)
    + shIrradiance[5] * (1.092548 * n.y * n.z)
    + shIrradiance[6] * (0.315392 * (3.0 * n.z * n.z - 1.0))
    + shIrradiance[7] * (1.092548 * n.x * n.z)
    + shIrradiance[8] * (0.546274 * (n.x * n.x - n.y * n.y));
}
`;var Fl=`
#ifndef SHADOW_UNIFORMS_DECLARED
#define SHADOW_UNIFORMS_DECLARED
uniform highp sampler2D shadowMap;
uniform highp sampler2DShadow shadowMapCmp;
uniform mat4 shadowMatrix;
uniform vec2 shadowMapSize;
uniform float shadowLightSize;
uniform float shadowSoftness;
uniform float shadowBias;
uniform float shadowNormalBias;
uniform float shadowEnabled;
uniform float shadowMaxRadius;
uniform float shadowTwoSided;
uniform float shadowTranslucency;
uniform float shadowLayerT;
uniform float shadowLayerSpacing;
uniform float shadowMinTexels;
#endif

#ifndef SHADOW_FRAME
#define SHADOW_FRAME frame
#endif
#ifndef SHADOW_BLOCKER_SAMPLES
#define SHADOW_BLOCKER_SAMPLES 24
#endif
#ifndef SHADOW_PCF_SAMPLES
#define SHADOW_PCF_SAMPLES 20
#endif

// Per-pixel white noise: without temporal accumulation it reads as grain, where IGN shows diagonal hatching.
vec2 shadowNoise(vec2 p) {
  uvec3 v = uvec3(ivec3(ivec2(p), int(mod(float(SHADOW_FRAME), 1024.0))));
  v = v * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x;
  return vec2(v.xy) * (1.0 / 4294967296.0);
}

// getShadow's PCF kernel radius in shadow uv (0 when it returned early), for the mask's blur.
float shadowKernelRadius = 0.0;

vec2 shadowVogel(int i, int n, float phi, float jitter) {
  float r = sqrt((float(i) + jitter) / float(n));
  float a = float(i) * 2.399963229728653 + phi;
  return r * vec2(cos(a), sin(a));
}

// Depth change per shadow uv across the receiver's plane (depth grows away from the light), length capped.
vec2 shadowPlaneGradient(vec3 N, float ndl, float worldPerUV, float worldPerDepth) {
  vec3 X = normalize(vec3(shadowMatrix[0][0], shadowMatrix[1][0], shadowMatrix[2][0]));
  vec3 Y = normalize(vec3(shadowMatrix[0][1], shadowMatrix[1][1], shadowMatrix[2][1]));
  vec2 g = vec2(dot(N, X), dot(N, Y)) / max(ndl, 0.125) * (worldPerUV / worldPerDepth);
  return g;
}

// Compare reference at offset o: follows the plane where it rises toward the light (so wide kernels
// don't self-shadow tilted receivers) but never moves past the receiver where it falls away.
float shadowRef(float zR, vec2 grad, vec2 o, float texel) {
  return zR - shadowBias + min(dot(grad, o), 0.0) - length(grad) * texel;
}

float getShadow(vec3 worldPos, vec3 worldNormal) {
  shadowKernelRadius = 0.0;
  if (shadowEnabled < 0.5) return 1.0;

  // The shadow camera is orthographic with near = 0, so its scale and axis come out of the matrix.
  vec3 row0 = vec3(shadowMatrix[0][0], shadowMatrix[1][0], shadowMatrix[2][0]);
  vec3 row2 = vec3(shadowMatrix[0][2], shadowMatrix[1][2], shadowMatrix[2][2]);
  vec3 L = -normalize(row2);
  float worldPerUV = 2.0 / length(row0);
  float worldPerDepth = 2.0 / length(row2);

  vec3 N = normalize(worldNormal);
  float ndl = dot(N, L);
  if (shadowTwoSided > 0.5 && ndl < 0.0) {
    N = -N;
    ndl = -ndl;
  }
  if (ndl <= 0.0) return 1.0;
  // Normal offset grows with texel size and toward grazing, where acne starts.
  float texelWorld = worldPerUV / shadowMapSize.x;
  vec3 offset = N * (shadowNormalBias + texelWorld * (1.5 + 3.0 * (1.0 - ndl)));
  vec4 sc = shadowMatrix * vec4(worldPos + offset, 1.0);
  vec3 c = sc.xyz / sc.w * 0.5 + 0.5;

  vec2 edge = min(c.xy, 1.0 - c.xy);
  float fade = smoothstep(0.0, 0.02, min(edge.x, edge.y)) * step(0.0, c.z);
  if (fade <= 0.0) return 1.0;

  // Receivers past the far plane compare at it (every caster is nearer); distances use the real depth.
  float zR = min(c.z, 1.0);
  vec2 grad = shadowPlaneGradient(N, ndl, worldPerUV, worldPerDepth);
  vec2 noise = shadowNoise(gl_FragCoord.xy);
  float phi = noise.x * 6.283185307179586;

  // shadowLightSize is tan(angular radius of the light); penumbra grows with the world-space gap.
  // The search covers the widest kernel softness can ask for.
  float texel = 1.0 / shadowMapSize.x;
  float searchRadius = clamp(shadowLightSize * max(shadowSoftness, 1.0) * c.z * worldPerDepth / worldPerUV, texel, shadowMaxRadius);
  searchRadius = max(searchRadius, shadowMinTexels * texel);
  // The receiver's own texel always counts, so a wide search cannot miss a contact blocker.
  float dC = textureLod(shadowMap, c.xy, 0.0).r;
  float blockers = dC < shadowRef(zR, grad, vec2(0.0), texel) ? 1.0 : 0.0;
  float blockerSum = dC * blockers;
  for (int i = 0; i < SHADOW_BLOCKER_SAMPLES; i++) {
    // Radius linear in i (not sqrt): denser near the centre, where small and contact blockers are.
    vec2 o = shadowVogel(i, SHADOW_BLOCKER_SAMPLES, phi, noise.y);
    o *= length(o) * searchRadius;
    float d = textureLod(shadowMap, c.xy + o, 0.0).r;
    if (d < shadowRef(zR, grad, o, texel)) {
      blockerSum += d;
      blockers += 1.0;
    }
  }
  if (blockers == 0.0) return 1.0;
  float zB = blockerSum / blockers;

  float penumbra = (c.z - zB) * worldPerDepth * shadowLightSize / worldPerUV;
  float radius = clamp(penumbra * shadowSoftness, texel, shadowMaxRadius);
  radius = max(radius, shadowMinTexels * texel);
  shadowKernelRadius = radius;

  // Hardware comparison: each tap is a bilinear 2x2 PCF. Zero gradients (not textureLod) keep
  // ANGLE/D3D from emitting a gradient sample inside divergent flow.
  float lit = 0.0;
  for (int i = 0; i < SHADOW_PCF_SAMPLES; i++) {
    vec2 o = shadowVogel(i, SHADOW_PCF_SAMPLES, phi, noise.y) * radius;
    lit += textureGrad(shadowMapCmp, vec3(c.xy + o, shadowRef(zR, grad, o, texel)), vec2(0.0), vec2(0.0));
  }
  float result = mix(1.0, lit / float(SHADOW_PCF_SAMPLES), fade);
  if (shadowTranslucency > 0.0) {
    // Thin layers close above pass some light: one layer per shadowLayerSpacing of gap to the blockers.
    vec4 s0 = shadowMatrix * vec4(worldPos, 1.0);
    float layers = max(1.0, (s0.z / s0.w * 0.5 + 0.5 - zB) * worldPerDepth / shadowLayerSpacing);
    result = mix(result, result + (1.0 - result) * pow(shadowLayerT, layers), shadowTranslucency * fade);
  }
  // Near the terminator direct light is ~0 anyway, and fading hides acne; only for blockers a few
  // texels away (self-shadowing), so shadows cast on receivers under a low light keep their strength.
  float selfShadow = 1.0 - smoothstep(2.0, 6.0, (c.z - zB) * worldPerDepth / texelWorld);
  return mix(1.0, result, mix(1.0, smoothstep(0.0, 0.12, ndl), selfShadow));
}

// Noise-free fixed-radius PCF (12 taps), for soft secondary terms that are never denoised.
float getShadowFixed(vec3 worldPos, vec3 worldNormal, float radiusTexels) {
  if (shadowEnabled < 0.5) return 1.0;
  vec3 row0 = vec3(shadowMatrix[0][0], shadowMatrix[1][0], shadowMatrix[2][0]);
  vec3 row2 = vec3(shadowMatrix[0][2], shadowMatrix[1][2], shadowMatrix[2][2]);
  vec3 L = -normalize(row2);
  float worldPerUV = 2.0 / length(row0);
  float worldPerDepth = 2.0 / length(row2);
  vec3 N = normalize(worldNormal);
  float ndl = dot(N, L);
  if (ndl <= 0.0) return 1.0;
  float texelWorld = worldPerUV / shadowMapSize.x;
  vec3 offset = N * (shadowNormalBias + texelWorld * (1.5 + 3.0 * (1.0 - ndl)));
  vec4 sc = shadowMatrix * vec4(worldPos + offset, 1.0);
  vec3 c = sc.xyz / sc.w * 0.5 + 0.5;
  vec2 edge = min(c.xy, 1.0 - c.xy);
  float fade = smoothstep(0.0, 0.02, min(edge.x, edge.y)) * step(0.0, c.z);
  if (fade <= 0.0) return 1.0;
  float zR = min(c.z, 1.0);
  vec2 grad = shadowPlaneGradient(N, ndl, worldPerUV, worldPerDepth);
  float radius = radiusTexels / shadowMapSize.x;
  float lit = 0.0;
  for (int i = 0; i < 12; i++) {
    vec2 o = shadowVogel(i, 12, 0.0, 0.5) * radius;
    lit += textureGrad(shadowMapCmp, vec3(c.xy + o, shadowRef(zR, grad, o, 1.0 / shadowMapSize.x)), vec2(0.0), vec2(0.0));
  }
  return mix(1.0, lit / 12.0, fade * smoothstep(0.0, 0.12, ndl));
}
`;var pi=`
precision highp float;
precision highp int;
precision highp sampler2D;

#define GI_PI 3.14159265358979
#define GI_HALF_PI 1.57079632679490

uniform vec2 fullRes;
uniform vec2 halfRes;
uniform vec4 projInfo;  // P00, P11, P20 - P30, P21 - P31
uniform vec2 depthInfo; // P22, P32
uniform float isOrtho;

// Ortho depth is measured from the near plane (+1e-3) so it stays > 0; 0 marks background.
float linearDepth(float d) {
  float ndc = d * 2.0 - 1.0;
  return isOrtho > 0.5 ? (-1.0 - ndc) / depthInfo.x + 1e-3 : depthInfo.y / (ndc + depthInfo.x);
}

vec3 viewPosition(vec2 uv, float z) {
  vec2 xy = (uv * 2.0 - 1.0 + projInfo.zw) / projInfo.xy * (isOrtho > 0.5 ? 1.0 : z);
  return vec3(xy, -z);
}

vec2 halfToUv(ivec2 h) {
  return (vec2(h * 2) + 0.5) / fullRes;
}

ivec2 halfToFull(ivec2 h) {
  return min(h * 2, ivec2(fullRes) - 1);
}

vec2 octEncode(vec3 n) {
  n /= abs(n.x) + abs(n.y) + abs(n.z);
  if (n.z < 0.0) {
    vec2 s = vec2(n.x >= 0.0 ? 1.0 : -1.0, n.y >= 0.0 ? 1.0 : -1.0);
    n.xy = (1.0 - abs(n.yx)) * s;
  }
  return n.xy;
}

vec3 octDecode(vec2 e) {
  vec3 n = vec3(e, 1.0 - abs(e.x) - abs(e.y));
  float t = max(-n.z, 0.0);
  n.x += n.x >= 0.0 ? -t : t;
  n.y += n.y >= 0.0 ? -t : t;
  return normalize(n);
}

// The half-res geometry is x = linear depth, y = oct normal as two exact 12-bit integers.
float packNormal(vec3 n) {
  vec2 q = round(clamp(octEncode(n) * 0.5 + 0.5, 0.0, 1.0) * 4095.0);
  return q.x * 4096.0 + q.y;
}

vec3 unpackNormal(float v) {
  float a = floor(v / 4096.0);
  return octDecode(vec2(a, v - a * 4096.0) / 4095.0 * 2.0 - 1.0);
}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,Ul=`
in vec3 position;
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Zd=`${pi}
uniform sampler2D tDepth;
uniform sampler2D tNormalVelocity;
uniform mat4 uViewInverse;

layout(location = 0) out vec4 outGeo;

void main() {
  ivec2 p = halfToFull(ivec2(gl_FragCoord.xy));
  float d = texelFetch(tDepth, p, 0).r;
  if (d >= 1.0) {
    outGeo = vec4(0.0);
    return;
  }
  vec3 nv = octDecode(texelFetch(tNormalVelocity, p, 0).xy);
  vec3 nw = normalize(mat3(uViewInverse) * nv);
  outGeo = vec4(linearDepth(d), packNormal(nw), 0.0, 0.0);
}
`,Kd=`${pi}
uniform sampler2D tGeo;
uniform sampler2D tNormalVelocity;
uniform sampler2D tPrevColor;
uniform mat4 uView;
uniform float radius;
uniform float thickness;
uniform float thicknessScale;
uniform vec2 depthFade;
uniform float maxRadiusPixels;
uniform float radianceClamp;
uniform float prevColorValid;
uniform float noiseFrame;
uniform int slices;
uniform int steps;
#ifdef GI_SKIP
uniform sampler2D tSkip;
#endif

layout(location = 0) out vec4 outGI;

uint popCount(uint v) {
  v = v - ((v >> 1u) & 0x55555555u);
  v = (v & 0x33333333u) + ((v >> 2u) & 0x33333333u);
  return (((v + (v >> 4u)) & 0x0F0F0F0Fu) * 0x01010101u) >> 24u;
}

// acos to ~7e-5 rad (Abramowitz & Stegun 4.4.45), far cheaper than the built-in.
float fastAcos(float x) {
  float a = abs(x);
  float r = (((-0.0187293 * a + 0.0742610) * a - 0.2121144) * a + 1.5707288) * sqrt(1.0 - a);
  return x < 0.0 ? GI_PI - r : r;
}
vec2 fastAcos(vec2 x) { return vec2(fastAcos(x.x), fastAcos(x.y)); }

// Cosine-weighted slice measure (GTAO arc integral) from the view vector to angle x.
float arc(float x, float n, float cn, float sn) {
  return sign(x) * (cn - cos(2.0 * x - n) + 2.0 * x * sn) * 0.25;
}

void main() {
  ivec2 h = ivec2(gl_FragCoord.xy);
  vec4 g = texelFetch(tGeo, h, 0);
  if (g.x <= 0.0) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

#ifdef GI_SKIP
  if (texelFetch(tSkip, h / 8, 0).r > 0.5) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
#endif
  vec3 P = viewPosition(halfToUv(h), g.x);
  vec3 N = normalize(mat3(uView) * unpackNormal(g.y));
  vec3 V = isOrtho > 0.5 ? vec3(0.0, 0.0, 1.0) : normalize(-P);

  float screenR = radius * projInfo.y * 0.5 * halfRes.y / (isOrtho > 0.5 ? 1.0 : g.x);
  // Where the march is cut short on screen, the cut is jittered per pixel and frame, so it accumulates into a ramp.
  float cut = ign(gl_FragCoord.xy + 5.588238 * mod(noiseFrame, 64.0) + vec2(13.0, 71.0));
  screenR = min(screenR, maxRadiusPixels * mix(0.35, 1.0, cut));
  // Far away the march covers too few texels to resolve depth; fade to neutral.
  float fade = (1.0 - smoothstep(depthFade.x, depthFade.y, g.x)) * smoothstep(1.0, 3.0, screenR);
  if (fade <= 0.0) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  float thick = thickness * (1.0 + thicknessScale * g.x);

  vec2 noiseCoord = gl_FragCoord.xy + 5.588238 * mod(noiseFrame, 64.0);
  float n0 = ign(noiseCoord);
  float n1 = ign(noiseCoord + vec2(47.0, 17.0));

  vec3 gi = vec3(0.0);
  float vis = 0.0;
  float wsum = 0.0;

  for (int i = 0; i < slices; i++) {
    float phi = (float(i) + n0) * GI_PI / float(slices);
    vec3 dir = vec3(cos(phi), sin(phi), 0.0);
    vec3 orthoDir = dir - dot(dir, V) * V;
    vec3 axis = normalize(cross(orthoDir, V));
    vec3 projN = N - axis * dot(N, axis);
    float projLen = length(projN);
    if (projLen < 1e-4) continue;

    float n = sign(dot(orthoDir, projN)) * fastAcos(clamp(dot(projN, V) / projLen, 0.0, 1.0));
    float cn = cos(n);
    float sn = sin(n);
    float lo = arc(n - GI_HALF_PI, n, cn, sn);
    float total = max(cn + n * sn, 1e-4);

    uint occluded = 0u;
    vec3 sliceGI = vec3(0.0);

    for (int side = 0; side < 2; side++) {
      float sd = side == 0 ? 1.0 : -1.0;
      for (int s = 0; s < steps; s++) {
        float t = (float(s) + n1) / float(steps);
        float off = 1.0 + t * t * (screenR - 1.0);
        ivec2 sh = ivec2(floor(gl_FragCoord.xy + dir.xy * sd * off));
        if (any(lessThan(sh, ivec2(0))) || any(greaterThanEqual(sh, ivec2(halfRes)))) break;
        if (sh == h) continue;

        vec4 sg = texelFetch(tGeo, sh, 0);
        if (sg.x <= 0.0) continue;

        vec2 suv = halfToUv(sh);
        vec3 delta = viewPosition(suv, sg.x) - P;
        float dist = length(delta);
        if (dist < 1e-5) continue;

        // Stochastic falloff over the outer half of the radius; temporal accumulation smooths it.
        float rnd = fract(n1 * 7.13 + float(s) * 0.618034 + float(side) * 0.5 + float(i) * 0.31);
        if (dist > radius * mix(0.5, 1.0, rnd)) continue;

        vec3 deltaDir = delta / dist;
        vec2 fb = vec2(dot(deltaDir, V), dot(normalize(delta - V * thick), V));
        fb = sd * fastAcos(clamp(fb, -1.0, 1.0));
        fb = clamp(fb, n - GI_HALF_PI, n + GI_HALF_PI);
        vec2 u = vec2(arc(fb.x, n, cn, sn), arc(fb.y, n, cn, sn));
        u = clamp((u - lo) / total, 0.0, 1.0);

        uint start = uint(round(min(u.x, u.y) * 32.0));
        uint end = uint(round(max(u.x, u.y) * 32.0));
        uint count = end - start;
        uint mask = count > 0u ? (0xFFFFFFFFu >> (32u - count)) << start : 0u;

        uint fresh = popCount(mask & ~occluded);
        if (fresh > 0u && prevColorValid > 0.5) {
          vec2 vel = texelFetch(tNormalVelocity, halfToFull(sh), 0).zw;
          vec2 puv = suv - 0.5 * vel;
          if (all(greaterThanEqual(puv, vec2(0.0))) && all(lessThanEqual(puv, vec2(1.0)))) {
            vec3 L = max(textureLod(tPrevColor, puv, 0.0).rgb, vec3(0.0));
            float peak = max(max(L.r, L.g), L.b);
            L *= min(1.0, radianceClamp / max(peak, 1e-4));
            vec3 Ns = mat3(uView) * unpackNormal(sg.y);
            float facing = clamp(dot(Ns, -deltaDir), 0.0, 1.0);
            sliceGI += L * facing * float(fresh) / 32.0;
          }
        }
        occluded |= mask;
      }
    }

    float w = projLen * total;
    vis += w * (1.0 - float(popCount(occluded)) / 32.0);
    gi += w * sliceGI;
    wsum += w;
  }

  vec4 r = wsum > 0.0 ? vec4(gi / wsum, vis / wsum) : vec4(0.0, 0.0, 0.0, 1.0);
  outGI = mix(vec4(0.0, 0.0, 0.0, 1.0), r, fade);
}
`,Jd=`${pi}
uniform sampler2D tGeo;
uniform mat4 uView;

layout(location = 0) out vec4 outTile;

void main() {
  ivec2 base = ivec2(gl_FragCoord.xy) * 8;
  ivec2 hs = ivec2(halfRes) - 1;
  ivec2 rt = min(base + 4, hs);
  vec4 ref = texelFetch(tGeo, rt, 0);
  if (ref.x <= 0.0) {
    for (int i = 0; i < 64; i++) {
      ivec2 t = min(base + ivec2(i & 7, i >> 3), hs);
      vec4 g = texelFetch(tGeo, t, 0);
      if (g.x > 0.0) {
        ref = g;
        rt = t;
        break;
      }
    }
    if (ref.x <= 0.0) {
      outTile = vec4(0.0);
      return;
    }
  }
  vec3 P0 = viewPosition(halfToUv(rt), ref.x);
  vec3 N0 = mat3(uView) * unpackNormal(ref.y);
  for (int i = 0; i < 64; i++) {
    ivec2 t = min(base + ivec2(i & 7, i >> 3), hs);
    vec4 g = texelFetch(tGeo, t, 0);
    if (g.x <= 0.0) continue;
    vec3 P = viewPosition(halfToUv(t), g.x);
    vec3 N = mat3(uView) * unpackNormal(g.y);
    if (dot(N, N0) < 0.998 || abs(dot(N0, P - P0)) > 0.02 * length(P - P0) + 1e-4 * g.x) {
      outTile = vec4(0.0, 0.0, 0.0, -1.0);
      return;
    }
  }
  outTile = vec4(P0, ref.y);
}
`,jd=`${pi}
uniform sampler2D tTile;
uniform mat4 uView;
uniform float radius;
uniform float maxRadiusPixels;

layout(location = 0) out vec4 outSkip;

void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 ts = textureSize(tTile, 0) - 1;
  vec4 own = texelFetch(tTile, c, 0);
  if (own.w < 0.0) {
    outSkip = vec4(0.0);
    return;
  }
  if (own.z == 0.0) {
    outSkip = vec4(1.0);
    return;
  }
  vec3 P0 = own.xyz;
  vec3 N0 = mat3(uView) * unpackNormal(own.w);
  float z = isOrtho > 0.5 ? 1.0 : -P0.z;
  // Trace radius in half-res texels, with margin for depth across the tile.
  float screenR = min(radius * projInfo.y * 0.5 * halfRes.y / (z * 0.8), maxRadiusPixels);
  int R = int(ceil(screenR / 8.0)) + 1;
  for (int y = -R; y <= R; y++) {
    for (int x = -R; x <= R; x++) {
      vec4 t = texelFetch(tTile, clamp(c + ivec2(x, y), ivec2(0), ts), 0);
      if (t.w < 0.0) {
        outSkip = vec4(0.0);
        return;
      }
      if (t.z == 0.0) continue;
      vec3 d = t.xyz - P0;
      vec3 N = mat3(uView) * unpackNormal(t.w);
      // Neighbouring planes must match and rise no more than ~3 degrees above this one.
      if (dot(N, N0) < 0.998 || dot(N0, d) > 0.05 * length(d) + 1e-4 * z) {
        outSkip = vec4(0.0);
        return;
      }
    }
  }
  outSkip = vec4(1.0);
}
`,Ol=`${pi}
uniform sampler2D tCurrent;
uniform sampler2D tGeo;
uniform sampler2D tHistory;
uniform sampler2D tHistoryGeo;
uniform sampler2D tNormalVelocity;
uniform mat4 uView;
uniform mat4 uViewInverse;
uniform mat4 uPrevViewProjection;
uniform float historyValid;
uniform float maxHistory;
uniform float depthTolerance;
uniform float normalThreshold;
uniform float historyClamp;

layout(location = 0) out vec4 outAccum;
layout(location = 1) out vec4 outGeo;

void main() {
  ivec2 h = ivec2(gl_FragCoord.xy);
  vec4 g = texelFetch(tGeo, h, 0);
  vec4 cur = texelFetch(tCurrent, h, 0);
  if (g.x <= 0.0) {
    outAccum = vec4(0.0, 0.0, 0.0, 1.0);
    outGeo = vec4(0.0);
    return;
  }

  vec4 hist = vec4(0.0);
  float len = 0.0;

  if (historyValid > 0.5) {
    vec2 uv = halfToUv(h);
    vec2 vel = texelFetch(tNormalVelocity, halfToFull(h), 0).zw;
    vec2 puv = uv - 0.5 * vel;

    vec3 P = viewPosition(uv, g.x);
    vec3 nw = unpackNormal(g.y);
    vec3 V = isOrtho > 0.5 ? vec3(0.0, 0.0, 1.0) : normalize(-P);
    float expectZ = g.x;
    vec4 pc = uPrevViewProjection * (uViewInverse * vec4(P, 1.0));
    if (isOrtho > 0.5) expectZ = max((-1.0 - pc.z / pc.w) / depthInfo.x + 1e-3, 1e-3);
    else if (pc.w > 0.0) expectZ = pc.w;
    // Grazing surfaces change depth fast across a texel, so widen the tolerance there.
    float grazing = max(abs(dot(mat3(uView) * nw, V)), 0.05);
    float tol = depthTolerance / grazing;

    vec2 f = (puv * fullRes - 0.5) * 0.5;
    ivec2 b = ivec2(floor(f));
    vec2 fr = f - vec2(b);
    float wsum = 0.0;
    for (int i = 0; i < 4; i++) {
      ivec2 o = ivec2(i & 1, i >> 1);
      ivec2 t = b + o;
      if (any(lessThan(t, ivec2(0))) || any(greaterThanEqual(t, ivec2(halfRes)))) continue;
      vec4 hg = texelFetch(tHistoryGeo, t, 0);
      if (hg.x <= 0.0) continue;
      vec2 bw2 = mix(1.0 - fr, fr, vec2(o));
      float dz = abs(hg.x - expectZ) / expectZ;
      float wd = clamp(1.0 - dz / tol, 0.0, 1.0);
      float wn = step(normalThreshold, dot(unpackNormal(hg.y), nw));
      float w = bw2.x * bw2.y * wd * wn;
      hist += texelFetch(tHistory, t, 0) * w;
      len += hg.w * w;
      wsum += w;
    }
    if (wsum > 1e-3) {
      hist /= wsum;
      len = len / wsum * clamp(wsum * 2.0, 0.0, 1.0);
    } else {
      len = 0.0;
    }
    // Variance clipping against this frame's 3x3 neighbourhood, so history from moving casters can't trail.
    if (historyClamp > 0.0 && len > 0.0) {
      vec4 m1 = vec4(0.0);
      vec4 m2 = vec4(0.0);
      float n = 0.0;
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          ivec2 t = clamp(h + ivec2(x, y), ivec2(0), ivec2(halfRes) - 1);
          if (texelFetch(tGeo, t, 0).x <= 0.0) continue;
          vec4 c = texelFetch(tCurrent, t, 0);
          m1 += c;
          m2 += c * c;
          n += 1.0;
        }
      }
      m1 /= n;
      vec4 sigma = sqrt(max(m2 / n - m1 * m1, 0.0));
      hist = clamp(hist, m1 - historyClamp * sigma, m1 + historyClamp * sigma);
    }
  }

  len = min(len + 1.0, maxHistory);
  outAccum = mix(hist, cur, 1.0 / len);
  outGeo = vec4(g.xy, 0.0, len);
}
`,Bl=`${pi}
uniform sampler2D tInput;
uniform sampler2D tGeo;
uniform mat4 uView;
uniform float stepSize;
uniform float planeSigma;
uniform float normalPower;
#ifdef GI_SKIP
uniform sampler2D tSkip;
uniform int skipReach;
#endif

layout(location = 0) out vec4 outGI;

void main() {
  ivec2 h = ivec2(gl_FragCoord.xy);
  vec4 g = texelFetch(tGeo, h, 0);
  if (g.x <= 0.0) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

#ifdef GI_SKIP
  // Skipped tiles as far as this and the earlier passes reach: every tap is vec4(0, 0, 0, 1) already.
  ivec2 tc = h / 8;
  ivec2 ts = textureSize(tSkip, 0) - 1;
  float skip = skipReach > 0 ? 1.0 : 0.0;
  for (int y = -skipReach; y <= skipReach; y++)
    for (int x = -skipReach; x <= skipReach; x++) skip = min(skip, texelFetch(tSkip, clamp(tc + ivec2(x, y), ivec2(0), ts), 0).r);
  if (skip > 0.5) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
#endif
  vec3 P = viewPosition(halfToUv(h), g.x);
  vec3 nw = unpackNormal(g.y);
  vec3 nv = mat3(uView) * nw;
  float k[3] = float[3](0.375, 0.25, 0.0625);
  int st = int(stepSize);
  float sigma = max(planeSigma * stepSize * g.x, 1e-6);
#ifdef PENUMBRA_LIMIT
  // Shadow mask: taps stay within the PCF kernel radius (.g), so hard and contact edges aren't smeared.
  float reach = max(texelFetch(tInput, h, 0).g, 0.5);
#endif

  vec4 sum = vec4(0.0);
  float wsum = 0.0;
  for (int y = -2; y <= 2; y++) {
    for (int x = -2; x <= 2; x++) {
      ivec2 t = h + ivec2(x, y) * st;
      if (any(lessThan(t, ivec2(0))) || any(greaterThanEqual(t, ivec2(halfRes)))) continue;
#ifdef PENUMBRA_LIMIT
      if (float(max(abs(x), abs(y)) * st) > reach) continue;
#endif
      vec4 tg = texelFetch(tGeo, t, 0);
      if (tg.x <= 0.0) continue;
      vec3 Pt = viewPosition(halfToUv(t), tg.x);
      float plane = abs(dot(nv, Pt - P));
      float wd = exp(-plane / sigma);
      float wn = pow(max(dot(nw, unpackNormal(tg.y)), 0.0), normalPower);
      float w = k[abs(x)] * k[abs(y)] * wd * wn;
      sum += texelFetch(tInput, t, 0) * w;
      wsum += w;
    }
  }
  outGI = wsum > 1e-6 ? sum / wsum : texelFetch(tInput, h, 0);
}
`,Qd=`${pi}
uniform sampler2D tInput;
uniform sampler2D tMask;
uniform sampler2D tGeo;
uniform mat4 uView;
uniform float stepSize;
uniform float planeSigma;
uniform float normalPower;
#ifdef GI_SKIP
uniform sampler2D tSkip;
uniform int skipReach;
#endif

layout(location = 0) out vec4 outGI;
layout(location = 1) out vec4 outMask;

void main() {
  ivec2 h = ivec2(gl_FragCoord.xy);
  vec4 g = texelFetch(tGeo, h, 0);
  if (g.x <= 0.0) {
    outGI = vec4(0.0, 0.0, 0.0, 1.0);
    outMask = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  bool giSkip = false;
#ifdef GI_SKIP
  ivec2 tc = h / 8;
  ivec2 ts = textureSize(tSkip, 0) - 1;
  float skip = skipReach > 0 ? 1.0 : 0.0;
  for (int y = -skipReach; y <= skipReach; y++)
    for (int x = -skipReach; x <= skipReach; x++) skip = min(skip, texelFetch(tSkip, clamp(tc + ivec2(x, y), ivec2(0), ts), 0).r);
  giSkip = skip > 0.5;
#endif
  vec3 P = viewPosition(halfToUv(h), g.x);
  vec3 nw = unpackNormal(g.y);
  vec3 nv = mat3(uView) * nw;
  float k[3] = float[3](0.375, 0.25, 0.0625);
  int st = int(stepSize);
  float sigma = max(planeSigma * stepSize * g.x, 1e-6);
  float reach = max(texelFetch(tMask, h, 0).g, 0.5);

  vec4 sum = vec4(0.0);
  float wsum = 0.0;
  vec4 msum = vec4(0.0);
  float mwsum = 0.0;
  for (int y = -2; y <= 2; y++) {
    for (int x = -2; x <= 2; x++) {
      ivec2 t = h + ivec2(x, y) * st;
      if (any(lessThan(t, ivec2(0))) || any(greaterThanEqual(t, ivec2(halfRes)))) continue;
      bool inMask = !(float(max(abs(x), abs(y)) * st) > reach);
      if (giSkip && !inMask) continue;
      vec4 tg = texelFetch(tGeo, t, 0);
      if (tg.x <= 0.0) continue;
      vec3 Pt = viewPosition(halfToUv(t), tg.x);
      float plane = abs(dot(nv, Pt - P));
      float wd = exp(-plane / sigma);
      float wn = pow(max(dot(nw, unpackNormal(tg.y)), 0.0), normalPower);
      float w = k[abs(x)] * k[abs(y)] * wd * wn;
      if (!giSkip) {
        sum += texelFetch(tInput, t, 0) * w;
        wsum += w;
      }
      if (inMask) {
        msum += texelFetch(tMask, t, 0) * w;
        mwsum += w;
      }
    }
  }
  outGI = giSkip ? vec4(0.0, 0.0, 0.0, 1.0) : wsum > 1e-6 ? sum / wsum : texelFetch(tInput, h, 0);
  outMask = mwsum > 1e-6 ? msum / mwsum : texelFetch(tMask, h, 0);
}
`,ep=`
#ifndef GI_CHUNK
#define GI_CHUNK
uniform sampler2D giMap;
uniform float giEnabled;
uniform sampler2D depthTexture;
uniform highp sampler2D giGeoMap;
#ifndef PIPELINE_CAMERA_UNIFORMS
#define PIPELINE_CAMERA_UNIFORMS
uniform float cameraNear;
uniform float cameraFar;
#endif

float giLinearDepth(float d) {
  return isOrthographic
    ? d * (cameraFar - cameraNear) + 1e-3
    : cameraNear * cameraFar / (cameraFar - d * (cameraFar - cameraNear));
}

vec3 giOctDecode(vec2 e) {
  vec3 n = vec3(e, 1.0 - abs(e.x) - abs(e.y));
  float t = max(-n.z, 0.0);
  n.x += n.x >= 0.0 ? -t : t;
  n.y += n.y >= 0.0 ? -t : t;
  return normalize(n);
}

vec3 giUnpackNormal(float v) {
  float a = floor(v / 4096.0);
  return giOctDecode(vec2(a, v - a * 4096.0) / 4095.0 * 2.0 - 1.0);
}

// Depth tolerance for giUpsample; widens with the pixel's own depth slope (half-res texels are 2 px
// apart). Call it in uniform control flow (it uses derivatives).
float giDepthTolerance() {
  float z = giLinearDepth(gl_FragCoord.z);
  return 0.02 * z + 2.0 * fwidth(z);
}

// Upsampling weights for half-res buffers laid out like giGeoMap, so several maps can share them:
// bilinear over the four texels around this pixel, weighted by depth and normal similarity; when
// none match, the best texel of the 3x3. match is 1 when a texel matched this pixel, else the
// fallback's weight (thin geometry missing from the half-res buffer gets a low match).
struct GIUpsample {
  ivec2 t0, t1, t2, t3;
  vec4 w;
  float match;
};

GIUpsample giUpsampleWeights(vec3 worldNormal, float zTol) {
  GIUpsample u = GIUpsample(ivec2(0), ivec2(0), ivec2(0), ivec2(0), vec4(0.0), 1.0);
  ivec2 hs = textureSize(giGeoMap, 0);
  float z = giLinearDepth(gl_FragCoord.z);
  // A zero normal (the no-argument overload) disables the normal weight.
  bool useN = dot(worldNormal, worldNormal) > 0.0;
  vec3 n = useN ? normalize(worldNormal) : vec3(0.0);
  vec2 f = (gl_FragCoord.xy - 0.5) * 0.5;
  ivec2 b = ivec2(floor(f));
  vec2 fr = f - vec2(b);
  u.t0 = clamp(b, ivec2(0), hs - 1);
  u.t1 = clamp(b + ivec2(1, 0), ivec2(0), hs - 1);
  u.t2 = clamp(b + ivec2(0, 1), ivec2(0), hs - 1);
  u.t3 = clamp(b + ivec2(1, 1), ivec2(0), hs - 1);
  ivec2 ts[4] = ivec2[4](u.t0, u.t1, u.t2, u.t3);
  float ws[4] = float[4](0.0, 0.0, 0.0, 0.0);
  for (int i = 0; i < 4; i++) {
    ivec2 o = ivec2(i & 1, i >> 1);
    vec4 g = texelFetch(giGeoMap, ts[i], 0);
    float dz = abs(g.x - z) / zTol;
    float wn = useN ? pow(max(dot(n, giUnpackNormal(g.y)), 0.0), 8.0) : 1.0;
    vec2 bw = mix(1.0 - fr, fr, vec2(o));
    ws[i] = bw.x * bw.y * exp(-dz) * wn;
  }
  u.w = vec4(ws[0], ws[1], ws[2], ws[3]);
  float wsum = ws[0] + ws[1] + ws[2] + ws[3];
  if (wsum > 0.02) {
    u.w /= wsum;
  } else {
    float bestW = 0.0;
    ivec2 best = u.t0;
    ivec2 c = ivec2(round(f));
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        ivec2 t = clamp(c + ivec2(x, y), ivec2(0), hs - 1);
        vec4 g = texelFetch(giGeoMap, t, 0);
        float dz = abs(g.x - z) / zTol;
        float wn = useN ? pow(max(dot(n, giUnpackNormal(g.y)), 0.0), 8.0) : 1.0;
        float w = exp(-dz) * (0.05 + wn);
        if (w > bestW) {
          bestW = w;
          best = t;
        }
      }
    }
    u.t0 = best;
    u.t1 = best;
    u.t2 = best;
    u.t3 = best;
    u.w = vec4(bestW > 0.0 ? 1.0 : 0.0, 0.0, 0.0, 0.0);
    u.match = bestW;
  }
  return u;
}

vec4 giUpsampleApply(sampler2D map, GIUpsample u) {
  vec4 r = vec4(0.0, 0.0, 0.0, 1.0);
  if (u.w.y + u.w.z + u.w.w > 0.0) r = texelFetch(map, u.t0, 0) * u.w.x + texelFetch(map, u.t1, 0) * u.w.y + texelFetch(map, u.t2, 0) * u.w.z + texelFetch(map, u.t3, 0) * u.w.w;
  else if (u.w.x > 0.0) r = texelFetch(map, u.t0, 0);
  return r;
}

vec4 giUpsample(sampler2D map, vec3 worldNormal, float zTol, out float match) {
  GIUpsample u = giUpsampleWeights(worldNormal, zTol);
  match = u.match;
  return giUpsampleApply(map, u);
}

vec4 giUpsample(sampler2D map, vec3 worldNormal, float zTol) {
  float match;
  return giUpsample(map, worldNormal, zTol, match);
}

vec4 giUpsample(sampler2D map, vec3 worldNormal) {
  return giUpsample(map, worldNormal, giDepthTolerance());
}

vec4 sampleGI(vec3 worldNormal, float zTol) {
  if (giEnabled < 0.5) return vec4(0.0, 0.0, 0.0, 1.0);
  return giUpsample(giMap, worldNormal, zTol);
}

vec4 sampleGI(GIUpsample u) {
  if (giEnabled < 0.5) return vec4(0.0, 0.0, 0.0, 1.0);
  return giUpsampleApply(giMap, u);
}

vec4 sampleGI(vec3 worldNormal) {
  return sampleGI(worldNormal, giDepthTolerance());
}

vec4 sampleGI() {
  return sampleGI(vec3(0.0));
}
#endif
`;var tp=`
#ifndef BRDF_CHUNK
#define BRDF_CHUNK
#define PIPELINE_PI 3.141592653589793
#define PIPELINE_INV_PI 0.3183098861837907

float pipelineMax3(vec3 v) { return max(v.x, max(v.y, v.z)); }

vec3 F_Schlick(float u, vec3 f0) {
  float f = pow(1.0 - u, 5.0);
  return f0 + (1.0 - f0) * f;
}

float D_GGX(float NdotH, float alpha) {
  float a2 = alpha * alpha;
  float f = NdotH * NdotH * (a2 - 1.0) + 1.0;
  return a2 / (PIPELINE_PI * f * f);
}

// Height-correlated Smith, already divided by 4 NdotL NdotV.
float V_SmithGGXCorrelated(float alpha, float NdotV, float NdotL) {
  float a2 = alpha * alpha;
  float gv = NdotL * sqrt(NdotV * NdotV * (1.0 - a2) + a2);
  float gl = NdotV * sqrt(NdotL * NdotL * (1.0 - a2) + a2);
  return 0.5 / max(gv + gl, 1e-6);
}

float D_Charlie(float roughness, float NdotH) {
  float alpha = roughness * roughness;
  float invAlpha = 1.0 / alpha;
  float sin2h = max(1.0 - NdotH * NdotH, 0.0078125);
  return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PIPELINE_PI);
}

float V_Neubelt(float NdotV, float NdotL) {
  return clamp(1.0 / (4.0 * (NdotL + NdotV - NdotL * NdotV)), 0.0, 1.0);
}

// Karis' analytic fit of the split-sum DFG.
vec2 EnvBRDFApprox(float roughness, float NdotV) {
  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);
  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);
  vec4 r = roughness * c0 + c1;
  float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
  return vec2(-1.04, 1.04) * a004 + r.zw;
}

// three.js' fit of the directional albedo of the Charlie sheen lobe.
float IBLSheenBRDF(float NdotV, float roughness) {
  float r2 = roughness * roughness;
  float rInv = 1.0 / (roughness + 0.1);
  float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
  float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
  return clamp(exp(a * NdotV + b), 0.0, 1.0);
}

// Lagarde's specular occlusion from ambient occlusion.
float specularOcclusion(float NdotV, float ao, float roughness) {
  return clamp(pow(NdotV + ao, exp2(-16.0 * roughness - 1.0)) - 1.0 + ao, 0.0, 1.0);
}
#endif
`;var kl=`
#ifndef OCTAHEDRAL_CHUNK
#define OCTAHEDRAL_CHUNK
vec2 octEncode(vec3 n) {
  n /= abs(n.x) + abs(n.y) + abs(n.z);
  if (n.z < 0.0) {
    vec2 s = vec2(n.x >= 0.0 ? 1.0 : -1.0, n.y >= 0.0 ? 1.0 : -1.0);
    n.xy = (1.0 - abs(n.yx)) * s;
  }
  return n.xy;
}

vec3 octDecode(vec2 e) {
  vec3 n = vec3(e, 1.0 - abs(e.x) - abs(e.y));
  float t = max(-n.z, 0.0);
  n.x += n.x >= 0.0 ? -t : t;
  n.y += n.y >= 0.0 ? -t : t;
  return normalize(n);
}
#endif
`;var zl={key:"prevMatrixWorld"},T_={color:"PIPELINE_COLOR",prepass:"PIPELINE_PREPASS",shadow:"PIPELINE_SHADOW",depth:"PIPELINE_DEPTH"};function np(i,e){return Object.entries(i).map(([t,n])=>`${e} ${n} ${t};`).join(`
`)}function E_({vertexPars:i,vertex:e,vertexMain:t,varyings:n}){return`
#ifdef PIPELINE_INVARIANT
invariant gl_Position;
#endif
uniform mat4 prevModelMatrix;
uniform mat4 prevViewProjection;
uniform float time;
#ifdef PIPELINE_PREPASS
uniform float prevTime;
#if defined(USE_INSTANCING) && defined(PIPELINE_PREV_INSTANCING)
in mat4 prevInstanceMatrix;
#endif
#endif

out vec3 vObjectPosition;
out vec3 vObjectNormal;
out vec3 vWorldPosition;
out vec3 vWorldNormal;
out vec2 vUv;
out vec3 vColor;
#ifdef PIPELINE_PREPASS
out vec4 vCurrClip;
out vec4 vPrevClip;
#endif
${np(n,"out")}

// True while displace() computes the previous pose for velocity (prepass only).
bool pipelinePrevPose = false;

#if defined(PIPELINE_PREPASS) && defined(PIPELINE_DISPLACE)
// Lets the prepass re-run displace() at prevTime for velocity.
float pipelineCurrentTime() { return time; }
float pipelineTime;
#define time pipelineTime
#endif

${i}
${e}

void main() {
#if defined(PIPELINE_PREPASS) && defined(PIPELINE_DISPLACE)
  pipelineTime = pipelineCurrentTime();
#endif
  vec3 p = position;
  vec3 n = normal;
#ifdef PIPELINE_DISPLACE
  p = displace(p, n);
#endif
  vObjectPosition = p;
  vObjectNormal = n;
  vUv = uv;
#ifdef USE_COLOR
  vColor = color.rgb;
#else
  vColor = vec3(1.0);
#endif
#ifdef USE_INSTANCING_COLOR
  vColor *= instanceColor;
#endif

  vec4 local = vec4(p, 1.0);
#ifdef USE_INSTANCING
  local = instanceMatrix * local;
  mat3 im = mat3(instanceMatrix);
  n = im * (n / vec3(dot(im[0], im[0]), dot(im[1], im[1]), dot(im[2], im[2])));
#endif
  vec4 world = modelMatrix * local;
  vWorldPosition = world.xyz;
  // normalMatrix is the inverse transpose of modelView; the view rotation cancels out.
  vWorldNormal = normalize(transpose(mat3(viewMatrix)) * (normalMatrix * n));
  gl_Position = projectionMatrix * viewMatrix * world;
#ifdef PIPELINE_PREPASS
  vCurrClip = gl_Position;
  vec4 prevLocal = vec4(position, 1.0);
  #ifdef PIPELINE_DISPLACE
  vec3 prevNormal = normal;
  pipelineTime = prevTime;
  pipelinePrevPose = true;
  prevLocal.xyz = displace(prevLocal.xyz, prevNormal);
  pipelinePrevPose = false;
  pipelineTime = pipelineCurrentTime();
  #endif
  #if defined(USE_INSTANCING) && defined(PIPELINE_PREV_INSTANCING)
  prevLocal = prevInstanceMatrix * prevLocal;
  #elif defined(USE_INSTANCING)
  prevLocal = instanceMatrix * prevLocal;
  #endif
  vPrevClip = prevViewProjection * prevModelMatrix * prevLocal;
#endif
  ${t}
}
`}function A_({fragmentPars:i,surface:e,varyings:t,fragmentPrelude:n=""}){return`
uniform vec2 resolution;
uniform mat4 projectionMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform mat4 prevViewProjection;
uniform vec2 jitter;
uniform float time;
uniform float frame;
uniform samplerCube envMap;
uniform float envMapMaxLod;
uniform float envIntensity;
uniform mat3 envRotation;
uniform vec3 shIrradiance[9];
uniform vec3 lightDirection;
uniform vec3 lightColor;
uniform float lightSpecular;
uniform float lightSheen;
uniform float specularShadow;
uniform float aoIntensity;
uniform float giIntensity;
uniform vec3 aoColor;
uniform float aoPower;
uniform float aoDirect;
uniform float aoMin;
uniform float aoMultiBounce;
uniform vec4 occluders[16];
uniform int occluderCount;
uniform float occluderStrength;
uniform float occluderReach;
uniform sampler2D shadowMask;
uniform float shadowMaskEnabled;
uniform float pipelineDebug;

uniform vec3 baseColor;
uniform float roughness;
uniform float metalness;
uniform float sheen;
uniform vec3 sheenColor;
uniform float sheenRoughness;
uniform vec3 emissive;
uniform float opacity;
uniform vec3 transmission;

in vec3 vObjectPosition;
in vec3 vObjectNormal;
in vec3 vWorldPosition;
in vec3 vWorldNormal;
in vec2 vUv;
in vec3 vColor;
#ifdef PIPELINE_PREPASS
in vec4 vCurrClip;
in vec4 vPrevClip;
#endif
${np(t,"in")}

layout(location = 0) out vec4 outColor;
${n}

struct Surface {
  vec3 albedo;
  float alpha;
  float roughness;
  float metalness;
  vec3 normal;
  vec3 emissive;
  vec3 sheenColor;
  float sheenRoughness;
  float occlusion;
  vec3 transmission; // thin-sheet diffuse transmission (light through the back face)
  float specular; // scales the dielectric F0 (1 = 0.04)
  float transmissionOcclusion; // thinSheet only: how open the far side is to the environment
  float transmissionForward; // thinSheet only: Henyey-Greenstein g of the key light through the sheet (0 = diffuse)
  float anisotropy; // anisotropy only: -1..1, stretches the highlight along anisotropyDirection (> 0) or across it
  vec3 anisotropyDirection; // anisotropy only: world-space direction in the surface plane
  float fiber; // thinSheet only: 0..1, how much the key lights the sheet as round fibres along fiberAxis (edge-on vanes)
  vec3 fiberAxis; // thinSheet only: world-space fibre direction
  float shadow; // opt-in key visibility, 0..1, used instead of the per-pixel shadow lookup (< 0: look it up, the default)
};

#if defined(PIPELINE_DENOISED_SHADOWS) && (defined(OPAQUE) || defined(ALPHA_TO_COVERAGE))
// With the denoised mask, getShadow only fills the mask's rare gaps; a small kernel keeps the main shader light.
#define SHADOW_BLOCKER_SAMPLES 8
#define SHADOW_PCF_SAMPLES 8
#endif
${Fl}
${ep}
${tp}
${kl}
${$d}

// Visibility from the analytic sphere occluders (Quilez sphere AO), faded out by occluderReach * r.
float sphereOcclusion(vec3 p, vec3 n) {
  float vis = 1.0;
  for (int i = 0; i < 16; i++) {
    if (i >= occluderCount) break;
    vec4 o = occluders[i];
    vec3 D = o.xyz - p;
    float d = length(D);
    float r = max(o.w, 1e-6);
    // Points deep inside the sphere (the occluder's own surface) are left alone; contact at d ~ r is not.
    float outside = smoothstep(0.3 * r, 0.6 * r, d);
    float occ = (r * r) / max(d * d, r * r) * clamp(dot(n, D / max(d, 1e-4)), 0.0, 1.0);
    occ *= outside * (1.0 - smoothstep(0.5 * occluderReach * r, occluderReach * r, d));
    vis *= o.w > 0.0 ? exp(-occ * occluderStrength) : 1.0;
  }
  return vis;
}

${i}
${e}

void main() {
#ifdef FLAT_SHADED
  vec3 N = normalize(cross(dFdx(vWorldPosition), dFdy(vWorldPosition)));
#else
  vec3 N = normalize(vWorldNormal);
  #ifdef FLIP_SIDED
  N = -N;
  #endif
  #ifdef DOUBLE_SIDED
  N *= gl_FrontFacing ? 1.0 : -1.0;
  #endif
#endif

  Surface s;
  s.albedo = baseColor * vColor;
  s.alpha = opacity;
  s.roughness = roughness;
  s.metalness = metalness;
  s.normal = N;
  s.emissive = emissive;
  s.sheenColor = sheenColor * sheen;
  s.sheenRoughness = sheenRoughness;
  s.occlusion = 1.0;
  s.transmission = transmission;
  s.specular = 1.0;
  s.transmissionOcclusion = 1.0;
  s.transmissionForward = 0.0;
  s.anisotropy = 0.0;
  s.anisotropyDirection = vec3(1.0, 0.0, 0.0);
  s.fiber = 0.0;
  s.fiberAxis = vec3(1.0, 0.0, 0.0);
  s.shadow = -1.0;
#ifdef PIPELINE_SURFACE
  surface(s);
#endif

#if defined(PIPELINE_SHADOW)
  #ifdef PIPELINE_STOCHASTIC_SHADOW
  // Opt-in: alpha is the chance of blocking the light, drawn afresh every frame (interleaved gradient noise), so
  // the filtered, denoised shadow converges to partial shadows that multiply through stacked layers.
  vec2 shadowNoiseP = gl_FragCoord.xy + 5.588238 * mod(frame, 64.0);
  if (s.alpha <= fract(52.9829189 * fract(dot(shadowNoiseP, vec2(0.06711056, 0.00583715))))) discard;
  #else
  if (s.alpha < 0.5) discard;
  #endif
  // The shadow map's raw depth (ShadowPass).
  outColor = vec4(gl_FragCoord.z);
#elif defined(PIPELINE_DEPTH)
  // Pipeline depthPrepass: depth only, with the main pass's own cutout.
  if (s.alpha < 0.5) discard;
  outColor = vec4(0.0);
#elif defined(PIPELINE_PREPASS)
  if (s.alpha < 0.5) discard;
  vec3 nv = normalize(mat3(viewMatrix) * normalize(s.normal));
  vec2 velocity = (vCurrClip.xy / vCurrClip.w - jitter) - vPrevClip.xy / vPrevClip.w;
  outColor = vec4(octEncode(nv), velocity);
#else
  #ifdef OPAQUE
  if (s.alpha < 0.5) discard;
  #endif
  #ifdef ALPHA_TO_COVERAGE
  // Opt-in (alphaToCoverage: true): alpha becomes MSAA coverage; opaque otherwise.
  if (s.alpha < 0.02) discard;
  #endif
  vec3 P = vWorldPosition;
  vec3 n = normalize(s.normal);
  vec3 V = isOrthographic
    ? normalize(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]))
    : normalize(cameraPosition - P);
  float rough = clamp(s.roughness, 0.03, 1.0);
  float alpha = rough * rough;
  float metal = clamp(s.metalness, 0.0, 1.0);
  vec3 diffuseColor = s.albedo * (1.0 - metal);
  vec3 f0 = mix(vec3(0.04 * s.specular), s.albedo, metal);
  float NdotV = clamp(dot(n, V), 1e-4, 1.0);
  float sheenScale = 1.0 - 0.157 * pipelineMax3(s.sheenColor);
  float sheenRough = clamp(s.sheenRoughness, 0.07, 1.0);

  // Direct key light; lightColor is irradiance, so diffuse = lightColor * NdotL * albedo / pi.
  vec3 L = normalize(lightDirection);
  vec3 H = normalize(L + V);
  // A geometric back face gets no key, even where the shading normal tilts toward it.
  #if defined(PIPELINE_THIN_SHEET)
  // Thin sheets: near the terminator the lighting follows the geometric normal, so the front and back terms meet.
  vec3 nl = normalize(mix(N, n, smoothstep(0.0, 0.25, abs(dot(N, L)))));
  float NdotL = max(dot(nl, L), 0.0) * step(0.0, dot(N, L));
  if (s.fiber > 0.0) {
    // A sheet of round fibres seen edge-on is still lit: each fibre's visible half faces the key by how close the key
    // and the eye are round the fibre (Kajiya-Kay diffuse, the lit fraction of the visible side).
    vec3 A = normalize(s.fiberAxis);
    vec3 Lp = L - dot(L, A) * A, Vp = V - dot(V, A) * A;
    float fl = length(Lp) * (0.5 + 0.5 * dot(Lp, Vp) / max(length(Lp) * length(Vp), 1e-4));
    NdotL = mix(NdotL, fl, clamp(s.fiber, 0.0, 1.0));
  }
  #elif defined(PIPELINE_SOFT_TERMINATOR)
  // Opt-in: fades it over the terminator instead, for strong per-pixel relief.
  float NdotL = clamp(dot(n, L), 0.0, 1.0) * smoothstep(-0.25, 0.15, dot(N, L));
  #else
  float NdotL = clamp(dot(n, L), 0.0, 1.0) * step(0.0, dot(N, L));
  #endif
  float NdotH = clamp(dot(n, H), 0.0, 1.0);
  float VdotH = clamp(dot(V, H), 0.0, 1.0);
  #if defined(OPAQUE) || defined(ALPHA_TO_COVERAGE)
  // The shadow mask and GI share one set of upsampling weights.
  float zTol = giDepthTolerance();
  GIUpsample giU = GIUpsample(ivec2(0), ivec2(0), ivec2(0), ivec2(0), vec4(0.0), 0.0);
  if (shadowMaskEnabled > 0.5 || giEnabled > 0.5) giU = giUpsampleWeights(N, zTol);
  // Pixels the half-res mask has no match for (thin geometry) trace their own shadow.
  float shadow = s.shadow;
  if (s.shadow < 0.0) {
    float maskMatch = 0.0;
    shadow = 1.0;
    if (shadowMaskEnabled > 0.5) {
      shadow = giUpsampleApply(shadowMask, giU).a;
      maskMatch = giU.match;
    }
    #ifdef PIPELINE_THIN_SHEET
    // Thin sheets seen edge-on rarely match the half-res mask: their fallback is the noise-free kernel (the noisy
    // PCSS read shows as grain without the mask's denoising), from the side the light reaches.
    if (maskMatch < 0.05) {
      vec3 nf = shadowTwoSided > 0.5 && dot(n, L) < 0.0 ? -n : n;
      shadow = getShadowFixed(P, nf, max(4.0, shadowMinTexels));
    }
    #else
    if (maskMatch < 0.05) shadow = getShadow(P, N);
    #endif
  }
  #else
  float shadow = s.shadow >= 0.0 ? s.shadow : getShadow(P, N);
  #endif
  vec3 E = lightColor * NdotL * shadow;
  #ifdef PIPELINE_ANISOTROPY
  // Opt-in anisotropic GGX (Burley / Filament): roughness grows along the anisotropy direction.
  vec3 aT = normalize(s.anisotropyDirection - dot(s.anisotropyDirection, n) * n);
  vec3 aB = cross(n, aT);
  float at = max(alpha * (1.0 + s.anisotropy), 0.002);
  float ab = max(alpha * (1.0 - s.anisotropy), 0.002);
  float ToH = dot(aT, H), BoH = dot(aB, H), ToV = dot(aT, V), BoV = dot(aB, V), ToL = dot(aT, L), BoL = dot(aB, L);
  float aD = ToH * ToH / (at * at) + BoH * BoH / (ab * ab) + NdotH * NdotH;
  float D_a = 1.0 / (PIPELINE_PI * at * ab * aD * aD);
  float V_a = 0.5 / max(NdotL * length(vec3(at * ToV, ab * BoV, NdotV)) + NdotV * length(vec3(at * ToL, ab * BoL, NdotL)), 1e-5);
  vec3 directSpecular = E * F_Schlick(VdotH, f0) * D_a * V_a * lightSpecular;
  #else
  vec3 directSpecular = E * F_Schlick(VdotH, f0) * D_GGX(NdotH, alpha) * V_SmithGGXCorrelated(alpha, NdotV, NdotL) * lightSpecular;
  #endif
  vec3 directDiffuse = E * diffuseColor * PIPELINE_INV_PI;
  bool hasSheen = pipelineMax3(s.sheenColor) > 0.0;
  vec3 directSheen = vec3(0.0);
  if (hasSheen) directSheen = E * s.sheenColor * D_Charlie(sheenRough, NdotH) * V_Neubelt(NdotV, NdotL) * lightSheen;
  // Thin sheet: the key lighting the back side, shadowed from there.
  vec3 directTransmission = vec3(0.0);
  if (pipelineMax3(s.transmission) > 0.0) {
    #ifdef PIPELINE_THIN_SHEET
    // Lit through the sheet only when the key is geometrically behind it; with two-sided shadows the (denoised)
    // shadow above is already the back side's.
    float backNdotL = max(-dot(nl, L), 0.0) * step(0.0, -dot(N, L));
    float backShadow = shadowTwoSided > 0.5 || s.shadow >= 0.0 ? shadow : getShadowFixed(P, -N, 3.0);
    #else
    float backNdotL = clamp(-dot(n, L), 0.0, 1.0);
    float backShadow = backNdotL > 0.0 ? (s.shadow >= 0.0 ? s.shadow : getShadowFixed(P, -N, 3.0)) : 0.0;
    #endif
    if (backNdotL > 0.0) directTransmission = lightColor * backNdotL * backShadow * s.transmission * diffuseColor * PIPELINE_INV_PI;
    #ifdef PIPELINE_THIN_SHEET
    // Forward scattering (Henyey-Greenstein, normalized to keep the transmitted energy): edges glow toward the light.
    float g = s.transmissionForward;
    float hg = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * dot(V, -L), 1.5);
    directTransmission *= min(hg / (1.0 + 2.6 * g), 6.0);
    #endif
  }

  // Indirect: SH env irradiance with AO, screen-space GI, prefiltered env specular.
  #if defined(OPAQUE) || defined(ALPHA_TO_COVERAGE)
  vec4 gi = sampleGI(giU);
  #else
  vec4 gi = vec4(0.0, 0.0, 0.0, 1.0);
  #endif
  gi.a = pow(clamp(gi.a, 0.0, 1.0), aoPower);
  if (aoMultiBounce > 0.0) {
    // Bright surfaces fill their own crevices with interreflections (Jimenez et al. 2016).
    float rho = clamp(dot(diffuseColor * (1.0 + s.transmission), vec3(0.2126, 0.7152, 0.0722)), 0.0, 0.95);
    float ma = 2.0404 * rho - 0.3324, mb = -4.7951 * rho + 0.6417, mc = 2.7552 * rho + 0.6903, x = gi.a;
    gi.a = mix(x, max(x, ((x * ma + mb) * x + mc) * x), aoMultiBounce);
  }
  float sphereVis = occluderCount > 0 ? sphereOcclusion(P, n) : 1.0;
  float ao = max(mix(1.0, gi.a, aoIntensity) * s.occlusion * sphereVis, aoMin);
  vec3 aoTint = max(mix(vec3(1.0), mix(aoColor, vec3(1.0), gi.a), aoIntensity) * s.occlusion * sphereVis, vec3(aoMin));
  directDiffuse *= mix(1.0, ao, aoDirect) * mix(1.0, sphereVis, 0.5);
  vec3 irradiance = max(evalSH(envRotation * n), vec3(0.0)) * envIntensity;

  vec2 dfg = EnvBRDFApprox(rough, NdotV);
  vec3 FssEss = f0 * dfg.x + dfg.y;
  float Ems = 1.0 - (dfg.x + dfg.y);
  vec3 Favg = f0 + (1.0 - f0) * 0.047619;
  vec3 multiScatter = FssEss * Favg / (1.0 - Ems * Favg) * Ems;
  vec3 kD = diffuseColor * (1.0 - pipelineMax3(FssEss + multiScatter));
  #ifdef PIPELINE_THIN_SHEET
  // What the surface reflects specularly doesn't enter the sheet.
  float enterE = 1.0 - pipelineMax3(FssEss + multiScatter);
  directDiffuse *= enterE;
  directTransmission *= enterE;
  #endif

  #ifdef PIPELINE_ANISOTROPY
  // Bent reflection normal for the environment (Filament's approximation).
  vec3 aDir = s.anisotropy >= 0.0 ? aB : aT;
  vec3 aTangent = cross(aDir, V);
  vec3 aNormal = cross(aTangent, aDir);
  float bend = abs(s.anisotropy) * clamp(5.0 * rough, 0.0, 1.0);
  vec3 R = reflect(-V, normalize(mix(n, aNormal, bend)));
  #else
  vec3 R = reflect(-V, n);
  #endif
  R = normalize(mix(R, n, alpha * alpha));
  vec3 radiance = textureLod(envMap, envRotation * R, envMapMaxLod * rough * (2.0 - rough)).rgb * envIntensity;
  #ifdef PIPELINE_REFLECTIONS
  // The material's own tracer (fragmentPars) replaces the environment where its reflection ray hits something.
  vec4 traced = traceReflection(P, R, rough);
  radiance = mix(radiance, traced.rgb, clamp(traced.a, 0.0, 1.0));
  #endif
  float so = specularOcclusion(NdotV, ao, alpha);

  vec3 indirectDiffuse = kD * (irradiance * aoTint + gi.rgb * giIntensity);
  vec3 indirectSpecular = (radiance * FssEss + multiScatter * irradiance) * so;
  vec3 indirectSheen = vec3(0.0);
  if (hasSheen) indirectSheen = s.sheenColor * IBLSheenBRDF(NdotV, sheenRough) * irradiance * ao;
  float specShadow = mix(1.0, shadow, specularShadow);
  indirectSpecular *= specShadow;
  indirectSheen *= specShadow;

  #ifdef PIPELINE_THIN_SHEET
  // Environment light from the far side through the sheet; screen-space AO is this side's, so the surface says
  // how open the far side is.
  directTransmission += s.transmission * diffuseColor * max(evalSH(envRotation * -n), vec3(0.0)) * envIntensity * s.transmissionOcclusion;
  #endif
  vec3 color = (directDiffuse + directSpecular + indirectDiffuse + indirectSpecular + directTransmission) * sheenScale
    + directSheen + indirectSheen + s.emissive;

  if (pipelineDebug > 0.5) {
    int d = int(pipelineDebug + 0.5);
    color = d == 1 ? vec3(shadow) : d == 2 ? vec3(ao) : d == 3 ? gi.rgb : s.albedo;
  }

  #ifdef OPAQUE
  outColor = vec4(color, 1.0);
  #elif defined(ALPHA_TO_COVERAGE)
  outColor = vec4(color, clamp(s.alpha, 0.0, 1.0));
  #else
  float a = clamp(s.alpha, 0.0, 1.0);
  outColor = vec4(color * a, a);
  #endif
#endif
}
`}var Zs=class extends Jt{constructor(e={}){let{color:t=16052198,roughness:n=.8,metalness:s=0,sheen:r=0,sheenColor:a=16777215,sheenRoughness:o=.5,emissive:l=0,transmission:c=0,transmissionColor:h=16777215,opacity:u=1,transparent:f=!1,side:p=qn,flatShading:d=!1,uniforms:v={},vertexPars:g="",vertex:m="",vertexMain:_="",varyings:T={},fragmentPars:M="",fragmentPrelude:E="",surface:w="",defines:x={},instanceMotion:y=!1,thinSheet:R=!1,anisotropy:C=!1,stochasticShadows:L=!1,reflections:B=!1,...X}=e,N={baseColor:{value:new Te(t)},roughness:{value:n},metalness:{value:s},sheen:{value:r},sheenColor:{value:new Te(a)},sheenRoughness:{value:o},emissive:{value:new Te(l)},opacity:{value:u},transmission:{value:new Te(h).multiplyScalar(c)},prevModelMatrix:{value:new Be}},F={vertexPars:g,vertex:m,vertexMain:_,varyings:T,fragmentPars:M,fragmentPrelude:E,surface:w},O={...x};m.trim()&&(O.PIPELINE_DISPLACE=""),w.trim()&&(O.PIPELINE_SURFACE=""),y&&(O.PIPELINE_PREV_INSTANCING=""),R&&(O.PIPELINE_THIN_SHEET=""),C&&(O.PIPELINE_ANISOTROPY=""),L&&(O.PIPELINE_STOCHASTIC_SHADOW=""),B&&(O.PIPELINE_REFLECTIONS=""),super({...X,glslVersion:jt,uniforms:{...Ee,...N,...v},defines:{...O,PIPELINE_COLOR:""},vertexShader:E_(F),fragmentShader:A_(F),transparent:f,side:p}),this.flatShading=d,this.isPipelineMaterial=!0,this.type="PipelineMaterial",this.toneMapped=!1,this.premultipliedAlpha=!0,this.lights=!1,this.fog=!1,this.instanceMotion=y,this._source=F,this._baseDefines=O,this._variants={}}copy(e){let t=e.uniforms,n={};for(let a in t)t[a]!==Ee[a]&&!t[a].value?.isRenderTargetTexture&&(n[a]=t[a]);e.uniforms=n;try{super.copy(e)}finally{e.uniforms=t}let s=this.uniforms,r={};for(let a in t)a in s?r[a]=s[a]:r[a]=t[a]===Ee[a]?Ee[a]:{value:t[a].value};return this.uniforms=r,this.flatShading=e.flatShading,this.isPipelineMaterial=!0,this.type="PipelineMaterial",this.toneMapped=!1,this.premultipliedAlpha=e.premultipliedAlpha,this.lights=!1,this.fog=!1,this.instanceMotion=e.instanceMotion,this._source=e._source,this._baseDefines={...e._baseDefines},this._variants={},this}get color(){return this.uniforms.baseColor.value}set color(e){this.uniforms.baseColor.value.set(e)}get roughness(){return this.uniforms.roughness.value}set roughness(e){this.uniforms.roughness.value=e}get metalness(){return this.uniforms.metalness.value}set metalness(e){this.uniforms.metalness.value=e}get sheen(){return this.uniforms.sheen.value}set sheen(e){this.uniforms.sheen.value=e}get sheenColor(){return this.uniforms.sheenColor.value}set sheenColor(e){this.uniforms.sheenColor.value.set(e)}get sheenRoughness(){return this.uniforms.sheenRoughness.value}set sheenRoughness(e){this.uniforms.sheenRoughness.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value.set(e)}get opacity(){return this.uniforms?.opacity?.value??this._opacity??1}set opacity(e){this.uniforms?.opacity?this.uniforms.opacity.value=e:this._opacity=e}customProgramCacheKey(){return"pipeline-color"}get variants(){return{prepass:this.getVariant("prepass"),shadow:this.getVariant("shadow")}}getVariant(e){if(e==="color")return this;let t=this._variants[e];return t||(t=new Jt({glslVersion:jt,uniforms:this.uniforms,vertexShader:this.vertexShader,fragmentShader:this.fragmentShader}),t.isPipelineVariant=!0,t.toneMapped=!1,t.lights=!1,t.fog=!1,t.customProgramCacheKey=()=>`pipeline-${e}`,e==="prepass"&&(t.onBeforeRender=(n,s,r,a,o)=>{this.uniforms.prevModelMatrix.value.copy(o.userData[zl.key]??o.matrixWorld),t.uniformsNeedUpdate=!0}),t.userData.sourceVersion=-1,this._variants[e]=t),this._syncVariant(t,e),t}_syncVariant(e,t){if(e.side=t==="shadow"?this.shadowSide??this.side:this.side,e.flatShading=this.flatShading,e.vertexColors=this.vertexColors,e.wireframe=this.wireframe,e.clippingPlanes=this.clippingPlanes,e.clipShadows=this.clipShadows,e.depthTest=!0,e.depthWrite=!0,e.transparent=!1,e.colorWrite=!0,e.userData.sourceVersion!==this.version){let n={...this.defines};delete n.PIPELINE_COLOR,n[T_[t]]="",e.defines=n,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.needsUpdate=!0,e.userData.sourceVersion=this.version}}dispose(){for(let e of Object.values(this._variants))e.dispose();super.dispose()}};wt();var ip=new Be,Vl=new bt,sp=new bt,ns=new P,du=new P,C_=new P,rp=new Te,R_=i=>!i.userData.noShadow,Gl=class{constructor({mapSize:e=2048}={}){this.mapSize=e,this.compareTexture=new _n(e,e,pt),this.compareTexture.minFilter=et,this.compareTexture.magFilter=et,this.compareTexture.wrapS=ht,this.compareTexture.wrapT=ht,this.compareTexture.compareFunction=qr,this.target=new dt(e,e,{format:Os,type:pt,minFilter:Xe,magFilter:Xe,wrapS:ht,wrapT:ht,depthBuffer:!0,depthTexture:this.compareTexture,generateMipmaps:!1}),this.depthTexture=this.target.texture,this.camera=new Pt(-1,1,1,-1,0,3),this.bounds=new Cn(new P,5),this.filter=R_}fit(e){e.isBox3?e.getBoundingSphere(this.bounds):this.bounds.copy(e),this.updateCamera()}updateCamera(){let e=Ee.lightDirection.value,t=Math.pow(2,Math.ceil(Math.log2(Math.max(this.bounds.radius,.001))*8)/8),n=2*t/this.mapSize;du.set(0,1,0),Math.abs(e.y)>.99&&du.set(0,0,1),ip.lookAt(e,C_,du),Vl.setFromRotationMatrix(ip),sp.copy(Vl).invert(),ns.copy(this.bounds.center).applyQuaternion(sp),ns.x=Math.round(ns.x/n)*n,ns.y=Math.round(ns.y/n)*n,ns.applyQuaternion(Vl);let s=this.camera;s.quaternion.copy(Vl),s.position.copy(ns).addScaledVector(e,2*t),s.left=-t,s.right=t,s.top=t,s.bottom=-t,s.near=0,s.far=3*t+n,s.updateProjectionMatrix(),s.updateMatrixWorld(!0)}render(e,t){this.updateCamera();let n=this.camera,s=e.getRenderTarget(),r=e.autoClear;e.getClearColor(rp);let a=e.getClearAlpha();e.setRenderTarget(this.target),e.setClearColor(16777215,1),e.clear(!0,!0,!1),e.setClearColor(rp,a),e.autoClear=!1,$s(e,t,n,"shadow",this.target,this.filter),e.autoClear=r,e.setRenderTarget(s);let o=Ee;o.shadowMap.value=this.depthTexture,o.shadowMapCmp.value=this.compareTexture,o.shadowMatrix.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),o.shadowMapSize.value.set(this.mapSize,this.mapSize),o.shadowEnabled.value=1}dispose(){this.target.dispose(),this.compareTexture.dispose(),Ee.shadowMap.value===this.depthTexture&&(Ee.shadowMap.value=null,Ee.shadowMapCmp.value=null,Ee.shadowEnabled.value=0)}};wt();function Ui(i,e=Xe,t=1,n=St){return new dt(1,1,{type:i,format:n,minFilter:e,magFilter:e,wrapS:ht,wrapT:ht,colorSpace:Gt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,count:t})}var pu=new wi(new Float32Array([0,0,0,0]),1,1,St,pt);pu.needsUpdate=!0;var Hl=class{constructor({slices:e=2,steps:t=8,radius:n=1,thickness:s=.5,thicknessScale:r=.05,fadeStart:a=null,fadeEnd:o=null,temporal:l=!0,maxHistory:c=32,maxRadiusPixels:h=128,radianceClamp:u=8,blurPasses:f=2,depthTolerance:p=.03,normalThreshold:d=.8,historyClamp:v=2.5,planeSigma:g=.01,normalPower:m=16,skipFlat:_=!1}={}){Object.assign(this,{slices:e,steps:t,radius:n,thickness:s,thicknessScale:r,fadeStart:a,fadeEnd:o,temporal:l,maxHistory:c,maxRadiusPixels:h,radianceClamp:u,blurPasses:f,depthTolerance:p,normalThreshold:d,planeSigma:g,normalPower:m,historyClamp:v}),this.fullRes=new _e(1,1),this.halfRes=new _e(1,1);let T={fullRes:{value:this.fullRes},halfRes:{value:this.halfRes},projInfo:{value:new lt},depthInfo:{value:new _e},isOrtho:{value:0},uView:{value:new Be},uViewInverse:{value:new Be}};this.shared=T;let M=(w,x,y={})=>new Rn({glslVersion:jt,vertexShader:Ul,fragmentShader:w,defines:y,uniforms:{...T,...x},depthTest:!1,depthWrite:!1});this.geometryMaterial=M(Zd,{tDepth:{value:null},tNormalVelocity:{value:null}}),this.traceMaterial=M(Kd,{tGeo:{value:null},tNormalVelocity:{value:null},tPrevColor:{value:pu},radius:{value:n},thickness:{value:s},thicknessScale:{value:r},depthFade:{value:new _e},maxRadiusPixels:{value:h},radianceClamp:{value:u},prevColorValid:{value:0},noiseFrame:{value:0},slices:{value:e},steps:{value:t},tSkip:{value:null}}),this.tileMaterial=M(Jd,{tGeo:{value:null}}),this.skipMaterial=M(jd,{tTile:{value:null},radius:{value:n},maxRadiusPixels:{value:h}}),this.temporalMaterial=M(Ol,{tCurrent:{value:null},tGeo:{value:null},tHistory:{value:null},tHistoryGeo:{value:null},tNormalVelocity:{value:null},uPrevViewProjection:{value:Ee.prevViewProjection.value},historyValid:{value:0},maxHistory:{value:c},depthTolerance:{value:p},normalThreshold:{value:d},historyClamp:{value:v}}),this.blurMaterial=M(Bl,{tInput:{value:null},tGeo:{value:null},stepSize:{value:1},planeSigma:{value:g},normalPower:{value:m},tSkip:{value:null},skipReach:{value:0}}),this.blurPairMaterial=M(Qd,{tInput:{value:null},tMask:{value:null},tGeo:{value:null},stepSize:{value:1},planeSigma:{value:g},normalPower:{value:m},tSkip:{value:null},skipReach:{value:0}}),this.skipFlat=_,this.geometryTarget=Ui(pt,Xe,1,$n),this.traceTarget=Ui(ze),this.history=[0,1].map(()=>{let w=Ui(ze,Xe,2);return w.textures[1].type=pt,w}),this.blurTargets=[Ui(ze,et),Ui(ze,et)],this.blurPairTargets=[0,1].map(()=>{let w=Ui(ze,et,2);return w.textures[1].minFilter=w.textures[1].magFilter=Xe,w}),this.tileTarget=Ui(pt),this.skipTarget=Ui(Bt),this.historyIndex=0,this.historyValid=!1,this.lastTemporal=l,this.output=this.blurTargets[1];let E=new Ye;E.setAttribute("position",new De([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new rt(E,this.geometryMaterial),this.quad.frustumCulled=!1,this.scene=new Kt,this.scene.add(this.quad),this.quadCamera=new Pt(-1,1,1,-1,0,1)}setSize(e,t){let n=Math.max(1,Math.ceil(e/2)),s=Math.max(1,Math.ceil(t/2));if(this.fullRes.set(e,t),!(n===this.halfRes.x&&s===this.halfRes.y)){this.halfRes.set(n,s);for(let r of[this.geometryTarget,this.traceTarget,...this.history,...this.blurTargets,...this.blurPairTargets])r.setSize(n,s);for(let r of[this.tileTarget,this.skipTarget])r.setSize(Math.ceil(n/8),Math.ceil(s/8));this.historyValid=!1}}get skipFlat(){return this._skipFlat}set skipFlat(e){if(e=!!e,e!==this._skipFlat){this._skipFlat=e;for(let t of[this.traceMaterial,this.blurMaterial,this.blurPairMaterial])e?t.defines.GI_SKIP="":delete t.defines.GI_SKIP,t.needsUpdate=!0}}get texture(){return this.output.texture}resetHistory(){this.historyValid=!1}_pass(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.render(this.scene,this.quadCamera)}_updateCamera(e){let t=e.projectionMatrix.elements,n=e.isOrthographicCamera?1:0,s=this.shared;s.projInfo.value.set(t[0],t[5],t[8]-t[12],t[9]-t[13]),s.depthInfo.value.set(t[10],t[14]),s.isOrtho.value=n,s.uView.value.copy(e.matrixWorldInverse),s.uViewInverse.value.copy(e.matrixWorld)}renderGeometry(e,{depthTexture:t,normalVelocity:n,camera:s}){let r=e.getRenderTarget();this._updateCamera(s);let a=this.geometryMaterial.uniforms;a.tDepth.value=t,a.tNormalVelocity.value=n,this._pass(e,this.geometryMaterial,this.geometryTarget),e.setRenderTarget(r),Ee.giGeoMap.value=this.geometryTarget.texture}render(e,{depthTexture:t,normalVelocity:n,prevColor:s,camera:r,blur:a=!0}){let o=e.getRenderTarget(),l=e.autoClear;if(e.autoClear=!1,this.temporal!==this.lastTemporal&&(this.historyValid=!1),this.lastTemporal=this.temporal,this.renderGeometry(e,{depthTexture:t,normalVelocity:n,camera:r}),this.skipFlat){this.tileMaterial.uniforms.tGeo.value=this.geometryTarget.texture,this._pass(e,this.tileMaterial,this.tileTarget);let f=this.skipMaterial.uniforms;f.tTile.value=this.tileTarget.texture,f.radius.value=this.radius,f.maxRadiusPixels.value=this.maxRadiusPixels/2,this._pass(e,this.skipMaterial,this.skipTarget),this.traceMaterial.uniforms.tSkip.value=this.skipTarget.texture,this.blurMaterial.uniforms.tSkip.value=this.skipTarget.texture}let c=Ee.frame.value,h=this.traceMaterial.uniforms;h.tGeo.value=this.geometryTarget.texture,h.tNormalVelocity.value=n,h.tPrevColor.value=s||pu,h.prevColorValid.value=s&&this.historyValid?1:0,h.radius.value=this.radius,h.thickness.value=this.thickness,h.thicknessScale.value=this.thicknessScale,h.depthFade.value.set(this.fadeStart??r.far*.3,this.fadeEnd??r.far*.5),h.maxRadiusPixels.value=this.maxRadiusPixels/2,h.radianceClamp.value=this.radianceClamp,h.slices.value=Math.max(1,Math.round(this.slices)),h.steps.value=Math.max(1,Math.round(this.steps)),h.noiseFrame.value=this.temporal?c:0,this._pass(e,this.traceMaterial,this.traceTarget);let u=this.traceTarget.texture;if(this.temporal){let f=this.history[this.historyIndex],p=this.history[1-this.historyIndex],d=this.temporalMaterial.uniforms;d.tCurrent.value=this.traceTarget.texture,d.tGeo.value=this.geometryTarget.texture,d.tHistory.value=f.textures[0],d.tHistoryGeo.value=f.textures[1],d.tNormalVelocity.value=n,d.uPrevViewProjection.value=Ee.prevViewProjection.value,d.historyValid.value=this.historyValid?1:0,d.maxHistory.value=Math.max(1,this.maxHistory),d.depthTolerance.value=this.depthTolerance,d.normalThreshold.value=this.normalThreshold,d.historyClamp.value=this.historyClamp,this._pass(e,this.temporalMaterial,p),this.historyIndex=1-this.historyIndex,u=p.textures[0]}this.historyValid=!0,this.blurSource=u,a&&this._blur(e,u,0),e.setRenderTarget(o),e.autoClear=l,a&&(Ee.giMap.value=this.output.texture),Ee.depthTexture.value=t,Ee.giEnabled.value=1}get blurPassCount(){return Math.max(0,Math.round(this.blurPasses))}_blur(e,t,n){let s=e.getRenderTarget(),r=this.blurMaterial.uniforms;r.tGeo.value=this.geometryTarget.texture,r.planeSigma.value=this.planeSigma,r.normalPower.value=this.normalPower;let a=this.blurPassCount;for(let o=n;o<Math.max(a,1);o++){let l=this.blurTargets[(Math.max(a,1)-1-o)%2===0?1:0];r.tInput.value=t,r.stepSize.value=a===0?0:1<<o,r.skipReach.value=this._skipReach(o),this._pass(e,this.blurMaterial,l),t=l.texture}this.output={texture:t},e.setRenderTarget(s)}_skipReach(e){return!this.temporal||this.historyClamp>0?Math.ceil((2*((1<<e+1)-1)+1)/8):0}blurWith(e,t){let n=e.getRenderTarget(),s=this.blurPassCount,r=t.blurPassCount,a=t.blurMaterial.uniforms.planeSigma.value===this.planeSigma&&t.blurMaterial.uniforms.normalPower.value===this.normalPower,o=s>0&&r>0&&a?Math.min(s,r):0,l=this.blurSource,c=t.blurSource,h=this.blurPairMaterial.uniforms;h.tGeo.value=this.geometryTarget.texture,h.planeSigma.value=this.planeSigma,h.normalPower.value=this.normalPower;for(let u=0;u<o;u++){let f=this.blurPairTargets[u%2];h.tInput.value=l,h.tMask.value=c,h.stepSize.value=1<<u,h.skipReach.value=this._skipReach(u),this._pass(e,this.blurPairMaterial,f),l=f.textures[0],c=f.textures[1]}e.setRenderTarget(n),this._blur(e,l,o),t._blur(e,c,o),Ee.giMap.value=this.output.texture}dispose(){for(let e of[this.geometryTarget,this.traceTarget,...this.history,...this.blurTargets,...this.blurPairTargets,this.tileTarget,this.skipTarget])e.dispose();for(let e of[this.geometryMaterial,this.traceMaterial,this.temporalMaterial,this.blurMaterial,this.blurPairMaterial,this.tileMaterial,this.skipMaterial])e.dispose();this.quad.geometry.dispose(),Ee.giMap.value===this.output.texture&&(Ee.giMap.value=null,Ee.giEnabled.value=0)}};wt();var ap=`${pi}
uniform sampler2D tGeo;
uniform mat4 uView;
uniform mat4 uViewInverse;
uniform float noiseFrame;

#define SHADOW_FRAME noiseFrame
${Fl}

layout(location = 0) out vec4 outShadow;

void main() {
  ivec2 h = ivec2(gl_FragCoord.xy);
  vec4 g = texelFetch(tGeo, h, 0);
  if (g.x <= 0.0) {
    outShadow = vec4(1.0);
    return;
  }
  vec3 P = (uViewInverse * vec4(viewPosition(halfToUv(h), g.x), 1.0)).xyz;
  float s = getShadow(P, unpackNormal(g.y));
  // Kernel radius in world, then in half-res texels at this depth.
  vec3 row0 = vec3(shadowMatrix[0][0], shadowMatrix[1][0], shadowMatrix[2][0]);
  float radiusWorld = shadowKernelRadius * 2.0 / length(row0);
  vec3 Pv = viewPosition(halfToUv(h), g.x);
  float texelWorld = length(viewPosition(halfToUv(h + ivec2(0, 1)), g.x) - Pv);
  outShadow = vec4(s, radiusWorld / max(texelWorld, 1e-6), s, s);
}
`;function Wl(i,e=1){return new dt(1,1,{type:i,format:St,minFilter:Xe,magFilter:Xe,wrapS:ht,wrapT:ht,colorSpace:Gt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,count:e})}var Ks=class{constructor(e,{maxHistory:t=8,historyClamp:n=2,blurPasses:s=2,pcfSamples:r=16,blockerSamples:a=16}={}){this.gi=e,this.maxHistory=t,this.historyClamp=n,this.blurPasses=s;let o=(h,u,f={})=>new Rn({glslVersion:jt,vertexShader:Ul,fragmentShader:h,uniforms:{...e.shared,...u},defines:f,depthTest:!1,depthWrite:!1}),l=Ee;this.traceMaterial=o(ap,{tGeo:{value:null},noiseFrame:{value:0},shadowMap:l.shadowMap,shadowMapCmp:l.shadowMapCmp,shadowMatrix:l.shadowMatrix,shadowMapSize:l.shadowMapSize,shadowLightSize:l.shadowLightSize,shadowSoftness:l.shadowSoftness,shadowBias:l.shadowBias,shadowNormalBias:l.shadowNormalBias,shadowEnabled:l.shadowEnabled,shadowMaxRadius:l.shadowMaxRadius,shadowTwoSided:l.shadowTwoSided,shadowTranslucency:l.shadowTranslucency,shadowLayerT:l.shadowLayerT,shadowLayerSpacing:l.shadowLayerSpacing,shadowMinTexels:l.shadowMinTexels},{SHADOW_PCF_SAMPLES:r,SHADOW_BLOCKER_SAMPLES:a}),this.temporalMaterial=o(Ol,{tCurrent:{value:null},tGeo:{value:null},tHistory:{value:null},tHistoryGeo:{value:null},tNormalVelocity:{value:null},uPrevViewProjection:{value:l.prevViewProjection.value},historyValid:{value:0},maxHistory:{value:t},depthTolerance:{value:e.depthTolerance},normalThreshold:{value:e.normalThreshold},historyClamp:{value:n}}),this.blurMaterial=o(Bl,{tInput:{value:null},tGeo:{value:null},stepSize:{value:1},planeSigma:{value:e.planeSigma},normalPower:{value:e.normalPower}},{PENUMBRA_LIMIT:""}),this.traceTarget=Wl(ze),this.history=[0,1].map(()=>{let h=Wl(ze,2);return h.textures[1].type=pt,h}),this.blurTargets=[Wl(ze),Wl(ze)],this.historyIndex=0,this.historyValid=!1,this.output=this.blurTargets[1];let c=new Ye;c.setAttribute("position",new De([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new rt(c,this.traceMaterial),this.quad.frustumCulled=!1,this.scene=new Kt,this.scene.add(this.quad),this.quadCamera=new Pt(-1,1,1,-1,0,1),this.width=0,this.height=0}get texture(){return this.output.texture}_pass(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.render(this.scene,this.quadCamera)}_syncSize(){let{x:e,y:t}=this.gi.halfRes;if(!(e===this.width&&t===this.height)){this.width=e,this.height=t;for(let n of[this.traceTarget,...this.history,...this.blurTargets])n.setSize(e,t);this.historyValid=!1}}render(e,{normalVelocity:t,blur:n=!0}){this._syncSize();let s=e.getRenderTarget(),r=this.gi.geometryTarget.texture,a=this.traceMaterial.uniforms;a.tGeo.value=r,a.noiseFrame.value=Ee.frame.value,this._pass(e,this.traceMaterial,this.traceTarget);let o=this.history[this.historyIndex],l=this.history[1-this.historyIndex],c=this.temporalMaterial.uniforms;c.tCurrent.value=this.traceTarget.texture,c.tGeo.value=r,c.tHistory.value=o.textures[0],c.tHistoryGeo.value=o.textures[1],c.tNormalVelocity.value=t,c.uPrevViewProjection.value=Ee.prevViewProjection.value,c.historyValid.value=this.historyValid?1:0,c.maxHistory.value=Math.max(1,this.maxHistory),c.historyClamp.value=this.historyClamp,this._pass(e,this.temporalMaterial,l),this.historyIndex=1-this.historyIndex,this.historyValid=!0,this.blurSource=l.textures[0],e.setRenderTarget(s),n&&this._blur(e,this.blurSource,0),Ee.shadowMaskEnabled.value=1}get blurPassCount(){return Math.max(0,Math.round(this.blurPasses))}_blur(e,t,n){let s=e.getRenderTarget(),r=this.blurMaterial.uniforms;r.tGeo.value=this.gi.geometryTarget.texture;let a=this.blurPassCount;for(let o=n;o<Math.max(a,1);o++){let l=this.blurTargets[(Math.max(a,1)-1-o)%2===0?1:0];r.tInput.value=t,r.stepSize.value=a===0?0:1<<o,this._pass(e,this.blurMaterial,l),t=l.texture}this.output={texture:t},e.setRenderTarget(s),Ee.shadowMask.value=t}resetHistory(){this.historyValid=!1}dispose(){for(let e of[this.traceTarget,...this.history,...this.blurTargets])e.dispose();for(let e of[this.traceMaterial,this.temporalMaterial,this.blurMaterial])e.dispose();this.quad.geometry.dispose(),Ee.shadowMask.value===this.output.texture&&(Ee.shadowMask.value=null,Ee.shadowMaskEnabled.value=0)}};wt();var Xl=`
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,mu=`
precision highp float;
uniform sampler2D tInput;
uniform float weight;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
void main() {
  outColor = textureLod(tInput, vUv, 0.0) * weight;
}
`;var op=`
precision highp float;
uniform float cameraNear;
uniform float cameraFar;
uniform float focus;
uniform float aperture;
uniform float maxCoc;

float linearDepth(float d) {
  return cameraNear * cameraFar / (cameraFar - d * (cameraFar - cameraNear));
}

float cocAt(float d) {
  return clamp(aperture * (1.0 - focus / linearDepth(d)), -maxCoc, maxCoc);
}
`,lp=`
${op}
uniform sampler2D tColor;
uniform sampler2D tDepth;
layout(location = 0) out vec4 outColor;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy) * 2;
  ivec2 size = textureSize(tColor, 0) - 1;
  vec3 color = vec3(0.0);
  float near = 1.0;
  for (int i = 0; i < 4; i++) {
    ivec2 q = min(p + ivec2(i & 1, i >> 1), size);
    color += texelFetch(tColor, q, 0).rgb;
    near = min(near, texelFetch(tDepth, q, 0).r);
  }
  outColor = vec4(color * 0.25, cocAt(near));
}
`,cp=`
precision highp float;
uniform sampler2D tHalf;
uniform int tile;
layout(location = 0) out vec4 outColor;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy) * tile;
  ivec2 size = textureSize(tHalf, 0) - 1;
  float maxAbs = 0.0, maxNear = 0.0;
  for (int y = 0; y < 32; y++) {
    if (y >= tile) break;
    for (int x = 0; x < 32; x++) {
      if (x >= tile) break;
      float c = texelFetch(tHalf, min(p + ivec2(x, y), size), 0).a;
      maxAbs = max(maxAbs, abs(c));
      maxNear = max(maxNear, -c);
    }
  }
  outColor = vec4(maxAbs, maxNear, 0.0, 1.0);
}
`,hp=`
precision highp float;
uniform sampler2D tTiles;
uniform int reach;
layout(location = 0) out vec4 outColor;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  ivec2 size = textureSize(tTiles, 0) - 1;
  float r = texelFetch(tTiles, p, 0).r;
  for (int y = -4; y <= 4; y++) {
    if (abs(y) > reach) continue;
    for (int x = -4; x <= 4; x++) {
      if (abs(x) > reach) continue;
      r = max(r, texelFetch(tTiles, clamp(p + ivec2(x, y), ivec2(0), size), 0).g);
    }
  }
  outColor = vec4(r, 0.0, 0.0, 1.0);
}
`,up=`
precision highp float;
uniform sampler2D tHalf;
uniform sampler2D tReach;
uniform vec2 resolution;
uniform int tile;
uniform int maxSamples;
uniform float density;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  vec4 center = texelFetch(tHalf, p, 0);
  float c0 = center.a;
  float reach = texelFetch(tReach, p / tile, 0).r;
  if (reach < 0.5) {
    outColor = vec4(center.rgb, 0.0);
    return;
  }
  int n = clamp(int(reach * reach * density), 8, maxSamples);
  float rotation = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) * 6.2831853;
  vec3 sum = center.rgb;
  float total = 1.0, front = 0.0;
  for (int i = 0; i < 128; i++) {
    if (i >= n) break;
    float r = sqrt((float(i) + 0.5) / float(n)) * reach;
    float a = float(i) * 2.399963229728653 + rotation;
    vec2 uv = vUv + vec2(cos(a), sin(a)) * r / resolution;
    vec4 s = textureLod(tHalf, uv, 0.0);
    float spread = s.a < c0 ? abs(s.a) : min(abs(s.a), abs(c0));
    float w = clamp((spread - r) * 0.5 + 0.5, 0.0, 1.0) * step(0.5, spread);
    sum += s.rgb * w;
    total += w;
    if (s.a < c0 - 0.5 && abs(s.a) > abs(c0)) front += w;
  }
  outColor = vec4(sum / total, clamp(front / total * 4.0, 0.0, 1.0));
}
`,fp=`
${op}
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tBlur;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

void main() {
  vec4 sharp = texelFetch(tColor, ivec2(gl_FragCoord.xy), 0);
  float c0 = cocAt(texelFetch(tDepth, ivec2(gl_FragCoord.xy), 0).r);
  vec4 blur = textureLod(tBlur, vUv, 0.0);
  float amount = max(smoothstep(0.5, 1.5, abs(c0)), blur.a);
  outColor = vec4(mix(sharp.rgb, blur.rgb, amount), sharp.a);
}
`,dp=`
precision highp float;
uniform sampler2D tPrev;
uniform sampler2D tCurrent;
uniform float weight;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

void main() {
  outColor = mix(textureLod(tPrev, vUv, 0.0), textureLod(tCurrent, vUv, 0.0), weight);
}
`;function Oi(i=Xe){return new dt(1,1,{type:ze,format:St,minFilter:i,magFilter:i,wrapS:ht,wrapT:ht,colorSpace:Gt,depthBuffer:!1,generateMipmaps:!1})}function Js(i,e){return new Rn({glslVersion:jt,vertexShader:Xl,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1})}var is=8,oa=class{constructor({focus:e=5,aperture:t=0,maxBlur:n=.04,density:s=.6,maxSamples:r=64}={}){this.focus=e,this.aperture=t,this.maxBlur=n,this.density=s,this.maxSamples=r,this.width=0,this.height=0,this.halfTarget=Oi(et),this.tileTarget=Oi(),this.reachTarget=Oi(),this.gatherTarget=Oi(et),this.outputTarget=Oi(et),this.blendTarget=Oi(et),this.lensTargets=[Oi(et),Oi(et)],this.lensIndex=0;let a=()=>({cameraNear:{value:.1},cameraFar:{value:100},focus:{value:5},aperture:{value:0},maxCoc:{value:1}});this.lensUniforms=[];let o=c=>{let h=a();return this.lensUniforms.push(h),{...h,...c}};this.prefilterMaterial=Js(lp,o({tColor:{value:null},tDepth:{value:null}})),this.tileMaterial=Js(cp,{tHalf:{value:this.halfTarget.texture},tile:{value:is}}),this.dilateMaterial=Js(hp,{tTiles:{value:this.tileTarget.texture},reach:{value:1}}),this.gatherMaterial=Js(up,{tHalf:{value:this.halfTarget.texture},tReach:{value:this.reachTarget.texture},resolution:{value:new _e},tile:{value:is},maxSamples:{value:r},density:{value:s}}),this.compositeMaterial=Js(fp,o({tColor:{value:null},tDepth:{value:null},tBlur:{value:this.gatherTarget.texture}})),this.accumulateMaterial=Js(dp,{tPrev:{value:null},tCurrent:{value:null},weight:{value:1}});let l=new Ye;l.setAttribute("position",new De([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new rt(l),this.quad.frustumCulled=!1,this.scene=new Kt,this.scene.add(this.quad),this.camera=new Pt(-1,1,1,-1,0,1)}get materials(){return[this.prefilterMaterial,this.tileMaterial,this.dilateMaterial,this.gatherMaterial,this.compositeMaterial,this.accumulateMaterial]}get active(){return this.aperture>0}setSize(e,t){if(e===this.width&&t===this.height)return;this.width=e,this.height=t;let n=Math.ceil(e/2),s=Math.ceil(t/2);this.halfTarget.setSize(n,s),this.gatherTarget.setSize(n,s),this.tileTarget.setSize(Math.ceil(n/is),Math.ceil(s/is)),this.reachTarget.setSize(Math.ceil(n/is),Math.ceil(s/is)),this.outputTarget.setSize(e,t),this.blendTarget.setSize(e,t);for(let r of this.lensTargets)r.setSize(e,t);this.gatherMaterial.uniforms.resolution.value.set(e,t)}_pass(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.render(this.scene,this.camera)}_apertureInPixels(){return this.aperture*this.height}gather(e,t,n,s){let r=this._apertureInPixels(),a=Math.max(1,Math.min(r,this.maxBlur*this.height));for(let c of this.lensUniforms)c.cameraNear.value=s.near,c.cameraFar.value=s.far,c.focus.value=this.focus,c.aperture.value=r,c.maxCoc.value=a;this.dilateMaterial.uniforms.reach.value=Math.min(4,Math.ceil(a/(is*2))),this.gatherMaterial.uniforms.maxSamples.value=this.maxSamples,this.gatherMaterial.uniforms.density.value=this.density;let o=this.prefilterMaterial.uniforms;o.tColor.value=t,o.tDepth.value=n,this._pass(e,this.prefilterMaterial,this.halfTarget),this._pass(e,this.tileMaterial,this.tileTarget),this._pass(e,this.dilateMaterial,this.reachTarget),this._pass(e,this.gatherMaterial,this.gatherTarget);let l=this.compositeMaterial.uniforms;return l.tColor.value=t,l.tDepth.value=n,this._pass(e,this.compositeMaterial,this.outputTarget),this.outputTarget.texture}lensSample(e,t,n){let s=2*Math.PI*ql(e,3),r=Math.sqrt(ql(e,2)),a=t.projectionMatrix.elements,o=a[5]*this.height/2,l=this._apertureInPixels()*this.focus/o;return n.x=Math.cos(s)*r*l,n.y=Math.sin(s)*r*l,n.jx=a[0]*n.x/this.focus+(ql(e,5)-.5)*2/this.width,n.jy=a[5]*n.y/this.focus+(ql(e,7)-.5)*2/this.height,n}accumulate(e,t,n){let s=this.lensTargets[this.lensIndex];this.lensIndex=1-this.lensIndex;let r=this.lensTargets[this.lensIndex],a=this.accumulateMaterial.uniforms;return a.tPrev.value=s.texture,a.tCurrent.value=t,a.weight.value=1/n,this._pass(e,this.accumulateMaterial,r),r.texture}get lensResult(){return this.lensTargets[this.lensIndex].texture}blend(e,t,n,s){let r=this.accumulateMaterial.uniforms;return r.tPrev.value=t,r.tCurrent.value=n,r.weight.value=s,this._pass(e,this.accumulateMaterial,this.blendTarget),this.blendTarget.texture}dispose(){for(let e of[this.halfTarget,this.tileTarget,this.reachTarget,this.gatherTarget,this.outputTarget,this.blendTarget,...this.lensTargets])e.dispose();for(let e of this.materials)e.dispose();this.quad.geometry.dispose()}};function ql(i,e){let t=1,n=0;for(;i>0;)t/=e,n+=t*(i%e),i=Math.floor(i/e);return n}var pp=`
precision highp float;
uniform sampler2D tInput;
uniform vec2 texel;
uniform float karis;
uniform float clampMax;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

vec3 tap(vec2 o) {
  vec3 c = textureLod(tInput, vUv + o * texel, 0.0).rgb;
  c = max(c, vec3(0.0));
  return min(c, vec3(clampMax));
}

float karisWeight(vec3 c) {
  return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722)));
}

void main() {
  vec3 a = tap(vec2(-2.0, 2.0)), b = tap(vec2(0.0, 2.0)), c = tap(vec2(2.0, 2.0));
  vec3 d = tap(vec2(-2.0, 0.0)), e = tap(vec2(0.0)), f = tap(vec2(2.0, 0.0));
  vec3 g = tap(vec2(-2.0, -2.0)), h = tap(vec2(0.0, -2.0)), i = tap(vec2(2.0, -2.0));
  vec3 j = tap(vec2(-1.0, 1.0)), k = tap(vec2(1.0, 1.0));
  vec3 l = tap(vec2(-1.0, -1.0)), m = tap(vec2(1.0, -1.0));

  vec3 g0 = (j + k + l + m) * 0.25;
  vec3 g1 = (a + b + d + e) * 0.25;
  vec3 g2 = (b + c + e + f) * 0.25;
  vec3 g3 = (d + e + g + h) * 0.25;
  vec3 g4 = (e + f + h + i) * 0.25;
  if (karis > 0.5) {
    float k0 = karisWeight(g0), k1 = karisWeight(g1), k2 = karisWeight(g2), k3 = karisWeight(g3), k4 = karisWeight(g4);
    vec3 sum = g0 * k0 * 0.5 + (g1 * k1 + g2 * k2 + g3 * k3 + g4 * k4) * 0.125;
    float wsum = k0 * 0.5 + (k1 + k2 + k3 + k4) * 0.125;
    outColor = vec4(sum / wsum, 1.0);
  } else {
    outColor = vec4(g0 * 0.5 + (g1 + g2 + g3 + g4) * 0.125, 1.0);
  }
}
`,mp=`
precision highp float;
uniform sampler2D tLow;
uniform sampler2D tHigh;
uniform vec2 texel;
uniform float radius;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

void main() {
  vec3 s = textureLod(tLow, vUv + vec2(-1.0, -1.0) * texel, 0.0).rgb;
  s += textureLod(tLow, vUv + vec2(0.0, -1.0) * texel, 0.0).rgb * 2.0;
  s += textureLod(tLow, vUv + vec2(1.0, -1.0) * texel, 0.0).rgb;
  s += textureLod(tLow, vUv + vec2(-1.0, 0.0) * texel, 0.0).rgb * 2.0;
  s += textureLod(tLow, vUv, 0.0).rgb * 4.0;
  s += textureLod(tLow, vUv + vec2(1.0, 0.0) * texel, 0.0).rgb * 2.0;
  s += textureLod(tLow, vUv + vec2(-1.0, 1.0) * texel, 0.0).rgb;
  s += textureLod(tLow, vUv + vec2(0.0, 1.0) * texel, 0.0).rgb * 2.0;
  s += textureLod(tLow, vUv + vec2(1.0, 1.0) * texel, 0.0).rgb;
  outColor = vec4(textureLod(tHigh, vUv, 0.0).rgb + s / 16.0 * radius, 1.0);
}
`;var P_=`
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
  vec3(0.6274, 0.0691, 0.0164),
  vec3(0.3293, 0.9195, 0.0880),
  vec3(0.0433, 0.0113, 0.8956)
);
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
  vec3(1.6605, -0.1246, -0.0182),
  vec3(-0.5876, 1.1329, -0.1006),
  vec3(-0.0728, -0.0083, 1.1187)
);

vec3 agxContrast(vec3 x) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

vec3 agx(vec3 color) {
  const mat3 inset = mat3(
    vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),
    vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
    vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859)
  );
  const mat3 outset = mat3(
    vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
    vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
    vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405)
  );
  const float minEv = -12.47393;
  const float maxEv = 4.026069;
  color = inset * (LINEAR_SRGB_TO_LINEAR_REC2020 * color);
  color = clamp((log2(max(color, 1e-10)) - minEv) / (maxEv - minEv), 0.0, 1.0);
  color = outset * agxContrast(color);
  color = pow(max(color, 0.0), vec3(2.2));
  return clamp(LINEAR_REC2020_TO_LINEAR_SRGB * color, 0.0, 1.0);
}

vec3 aces(vec3 color) {
  const mat3 inputMat = mat3(
    vec3(0.59719, 0.07600, 0.02840),
    vec3(0.35458, 0.90834, 0.13383),
    vec3(0.04823, 0.01566, 0.83777)
  );
  const mat3 outputMat = mat3(
    vec3(1.60475, -0.10208, -0.00327),
    vec3(-0.53108, 1.10813, -0.07276),
    vec3(-0.07367, -0.00605, 1.07602)
  );
  color = inputMat * (color / 0.6);
  vec3 a = color * (color + 0.0245786) - 0.000090537;
  vec3 b = color * (0.983729 * color + 0.4329510) + 0.238081;
  return clamp(outputMat * (a / b), 0.0, 1.0);
}

vec3 neutral(vec3 color) {
  const float start = 0.76;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < start) return color;
  float d = 1.0 - start;
  float newPeak = 1.0 - d * d / (peak + d - start);
  color *= newPeak / peak;
  float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(color, vec3(newPeak), g);
}

vec3 linearToSRGB(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(pow(c, vec3(1.0 / 2.4)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
}
`,gp=`
precision highp float;
uniform sampler2D tColor;
uniform sampler2D tBloom;
uniform sampler2D tNormalVelocity;
uniform sampler2D tDepth;
uniform float bloomStrength;
uniform float bloomScale;
uniform float exposure;
uniform float vignette;
uniform float grain;
uniform float aberration;
uniform float saturation;
uniform float contrast;
uniform int tonemapper;
uniform float frame;
uniform int debugView;
uniform float clipWarning;
uniform float cameraNear;
uniform float cameraFar;
uniform float isOrtho;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

${P_}
${kl}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float linearDepth(float d) {
  return isOrtho > 0.5
    ? cameraNear + d * (cameraFar - cameraNear)
    : cameraNear * cameraFar / (cameraFar - d * (cameraFar - cameraNear));
}

void main() {
  if (debugView == 1) {
    vec4 nv = textureLod(tNormalVelocity, vUv, 0.0);
    float bg = step(1.0, textureLod(tDepth, vUv, 0.0).r);
    outColor = vec4(mix(octDecode(nv.xy) * 0.5 + 0.5, vec3(0.0), bg), 1.0);
    return;
  }
  if (debugView == 2) {
    float z = linearDepth(textureLod(tDepth, vUv, 0.0).r);
    float t = log2(z / cameraNear) / log2(cameraFar / cameraNear);
    outColor = vec4(vec3(1.0 - t), 1.0);
    return;
  }
  if (debugView == 3) {
    vec2 v = textureLod(tNormalVelocity, vUv, 0.0).zw;
    outColor = vec4(abs(v) * 50.0, 0.0, 1.0);
    return;
  }
  if (debugView == 4) {
    outColor = vec4(linearToSRGB(textureLod(tColor, vUv, 0.0).rgb), 1.0);
    return;
  }

  vec2 centred = vUv - 0.5;
  vec3 color;
  if (aberration > 0.0) {
    vec2 o = centred * dot(centred, centred) * aberration * 0.05;
    color = vec3(
      textureLod(tColor, vUv - o, 0.0).r,
      textureLod(tColor, vUv, 0.0).g,
      textureLod(tColor, vUv + o, 0.0).b);
  } else {
    color = textureLod(tColor, vUv, 0.0).rgb;
  }
  color = max(color, vec3(0.0));
  if (bloomStrength > 0.0) color = mix(color, textureLod(tBloom, vUv, 0.0).rgb * bloomScale, bloomStrength);

  color *= exposure;
  if (vignette > 0.0) {
    float edge = length(centred) * 2.0;
    color *= mix(1.0, smoothstep(1.6, 0.3, edge), vignette);
  }

  if (tonemapper == 0) color = agx(color);
  else if (tonemapper == 1) color = aces(color);
  else if (tonemapper == 2) color = neutral(color);
  else color = clamp(color, 0.0, 1.0);

  vec3 c = linearToSRGB(color);
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(luma), c, saturation);
  c = (c - 0.5) * contrast + 0.5;

  // Exposure check: red at clipping, yellow in the 0.90-0.96 target band for paper whites.
  if (debugView == 5) {
    float m = max(c.r, max(c.g, c.b));
    vec3 v = vec3(luma);
    if (m >= 0.96) v = vec3(1.0, 0.0, 0.0);
    else if (m >= 0.9) v = vec3(1.0, 0.85, 0.0);
    outColor = vec4(v, 1.0);
    return;
  }
  // Overlay on the beauty image: tints displayed luminance above 0.97 yellow.
  if (clipWarning > 0.5 && dot(clamp(c, 0.0, 1.0), vec3(0.2126, 0.7152, 0.0722)) > 0.97) {
    outColor = vec4(1.0, 0.85, 0.0, 1.0);
    return;
  }
  if (grain > 0.0) {
    float n = hash12(gl_FragCoord.xy + vec2(mod(frame, 512.0) * 17.31, mod(frame, 509.0) * 7.77)) - 0.5;
    c += n * grain * (1.0 - 0.6 * abs(luma * 2.0 - 1.0));
  }
  c += (ign(gl_FragCoord.xy + 5.588238 * mod(frame, 64.0)) - 0.5) / 255.0;
  outColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;var vp=`
precision highp float;
uniform sampler2D tInput;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

const vec3 LUMA = vec3(0.299, 0.587, 0.114);
const float SPAN_MAX = 8.0;
const float REDUCE_MUL = 0.125;
const float REDUCE_MIN = 0.0078125;
const float EDGE_THRESHOLD = 0.166;
const float EDGE_THRESHOLD_MIN = 0.0833;

void main() {
  vec2 texel = 1.0 / vec2(textureSize(tInput, 0));
  vec3 middle = textureLod(tInput, vUv, 0.0).rgb;
  vec3 nw = textureLod(tInput, vUv + vec2(-1.0, -1.0) * texel, 0.0).rgb;
  vec3 ne = textureLod(tInput, vUv + vec2(1.0, -1.0) * texel, 0.0).rgb;
  vec3 sw = textureLod(tInput, vUv + vec2(-1.0, 1.0) * texel, 0.0).rgb;
  vec3 se = textureLod(tInput, vUv + vec2(1.0, 1.0) * texel, 0.0).rgb;

  float lNW = dot(nw, LUMA), lNE = dot(ne, LUMA), lSW = dot(sw, LUMA), lSE = dot(se, LUMA);
  float lM = dot(middle, LUMA);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(EDGE_THRESHOLD_MIN, lMax * EDGE_THRESHOLD)) {
    outColor = vec4(middle, 1.0);
    return;
  }

  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
  float reduce = max((lNW + lNE + lSW + lSE) * 0.25 * REDUCE_MUL, REDUCE_MIN);
  float scale = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
  dir = clamp(dir * scale, -SPAN_MAX, SPAN_MAX) * texel;

  vec3 inner = 0.5 * (
    textureLod(tInput, vUv + dir * (1.0 / 3.0 - 0.5), 0.0).rgb +
    textureLod(tInput, vUv + dir * (2.0 / 3.0 - 0.5), 0.0).rgb);
  vec3 outer = inner * 0.5 + 0.25 * (
    textureLod(tInput, vUv - dir * 0.5, 0.0).rgb +
    textureLod(tInput, vUv + dir * 0.5, 0.0).rgb);
  float lOuter = dot(outer, LUMA);
  outColor = vec4((lOuter < lMin || lOuter > lMax) ? inner : outer, 1.0);
}
`;var xp=`
precision highp float;
uniform sampler2D tCurrent;
uniform sampler2D tHistory;
uniform sampler2D tNormalVelocity;
uniform sampler2D tDepth;
uniform vec2 resolution;
uniform float feedback;
uniform float hasHistory;
uniform float clampGamma;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

vec3 toYCoCg(vec3 c) { return vec3(0.25 * c.r + 0.5 * c.g + 0.25 * c.b, 0.5 * c.r - 0.5 * c.b, -0.25 * c.r + 0.5 * c.g - 0.25 * c.b); }
vec3 fromYCoCg(vec3 c) { return vec3(c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z); }
// Tonemapped weights, so a few very bright samples don't dominate the blend.
vec3 compress(vec3 c) { return c / (1.0 + max(c.r, max(c.g, c.b))); }
vec3 expand(vec3 c) { return c / max(1.0 - max(c.r, max(c.g, c.b)), 1e-4); }
// History through a Catmull-Rom filter (five bilinear taps), so resampling it every frame doesn't blur.
vec3 sampleHistory(vec2 uv) {
  vec2 pos = uv * resolution;
  vec2 c = floor(pos - 0.5) + 0.5;
  vec2 f = pos - c;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 t0 = (c - 1.0) / resolution, t3 = (c + 2.0) / resolution, t12 = (c + w2 / w12) / resolution;
  vec3 r = textureLod(tHistory, vec2(t12.x, t0.y), 0.0).rgb * w12.x * w0.y
    + textureLod(tHistory, vec2(t0.x, t12.y), 0.0).rgb * w0.x * w12.y
    + textureLod(tHistory, t12, 0.0).rgb * w12.x * w12.y
    + textureLod(tHistory, vec2(t3.x, t12.y), 0.0).rgb * w3.x * w12.y
    + textureLod(tHistory, vec2(t12.x, t3.y), 0.0).rgb * w12.x * w3.y;
  float w = w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y;
  return max(r / w, vec3(0.0));
}

void main() {
  vec2 texel = 1.0 / resolution;
  ivec2 p = ivec2(gl_FragCoord.xy);
  ivec2 size = ivec2(resolution) - 1;
  vec3 cur = compress(texelFetch(tCurrent, p, 0).rgb);
  // Neighbourhood statistics, and the nearest depth's velocity.
  vec3 m1 = vec3(0.0), m2 = vec3(0.0);
  float nearest = 1.0;
  ivec2 nearestP = p;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    ivec2 q = clamp(p + ivec2(x, y), ivec2(0), size);
    vec3 c = toYCoCg(compress(texelFetch(tCurrent, q, 0).rgb));
    m1 += c;
    m2 += c * c;
    float d = texelFetch(tDepth, q, 0).r;
    if (d < nearest) {
      nearest = d;
      nearestP = q;
    }
  }
  m1 /= 9.0;
  vec3 sigma = sqrt(max(m2 / 9.0 - m1 * m1, 0.0));
  vec2 velocity = texelFetch(tNormalVelocity, nearestP, 0).zw;
  vec2 prevUv = vUv - 0.5 * velocity;
  if (hasHistory < 0.5 || any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0)))) {
    outColor = vec4(expand(cur), 1.0);
    return;
  }
  vec3 hist = toYCoCg(compress(sampleHistory(prevUv)));
  // A non-finite history (a degenerate frame) would stick: start over from this frame.
  if (any(isnan(hist)) || any(isinf(hist))) hist = toYCoCg(cur);
  // Clip the history toward the neighbourhood's mean, into its box.
  vec3 lo = m1 - clampGamma * sigma, hi = m1 + clampGamma * sigma;
  vec3 center = 0.5 * (lo + hi), extent = max(0.5 * (hi - lo), vec3(1e-5));
  vec3 off = hist - center;
  vec3 ts = abs(off / extent);
  float t = max(ts.x, max(ts.y, ts.z));
  if (t > 1.0) hist = center + off / t;
  // Less history where things move fast (sub-pixel resampling blurs).
  float speed = length(velocity * resolution * 0.5);
  float alpha = mix(1.0 - feedback, 0.5, clamp(speed / 16.0, 0.0, 1.0));
  vec3 result = mix(fromYCoCg(hist), cur, alpha);
  outColor = vec4(expand(result), 1.0);
}
`;var _p=`
uniform sampler2D tVelocity;
uniform vec2 resolution;
uniform float maxRadius;

vec2 pixelVelocity(ivec2 p) {
  vec2 v = texelFetch(tVelocity, p, 0).zw * 0.5 * resolution;
  float l = length(v);
  return l > maxRadius ? v * (maxRadius / l) : v;
}
`,yp=`
precision highp float;
${_p}
uniform int tile;
layout(location = 0) out vec4 outColor;
void main() {
  ivec2 base = ivec2(gl_FragCoord.xy) * tile;
  ivec2 last = ivec2(resolution) - 1;
  vec2 best = vec2(0.0);
  float bestLength = 0.0;
  for (int y = 0; y < tile; y++) {
    for (int x = 0; x < tile; x++) {
      vec2 v = pixelVelocity(min(base + ivec2(x, y), last));
      float l = dot(v, v);
      if (l > bestLength) {
        bestLength = l;
        best = v;
      }
    }
  }
  outColor = vec4(best, 0.0, 1.0);
}
`,Mp=`
precision highp float;
uniform sampler2D tTiles;
uniform int reach;
layout(location = 0) out vec4 outColor;
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  ivec2 last = textureSize(tTiles, 0) - 1;
  vec2 best = vec2(0.0);
  float bestLength = 0.0;
  for (int y = -reach; y <= reach; y++) {
    for (int x = -reach; x <= reach; x++) {
      vec2 v = texelFetch(tTiles, clamp(p + ivec2(x, y), ivec2(0), last), 0).xy;
      float l = dot(v, v);
      if (l > bestLength) {
        bestLength = l;
        best = v;
      }
    }
  }
  outColor = vec4(best, 0.0, 1.0);
}
`,bp=`
precision highp float;
${_p}
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tNeighbor;
uniform float tile;
uniform int samples;
uniform float softZ;
uniform float cameraNear;
uniform float cameraFar;
uniform float isOrtho;
uniform float frame;
layout(location = 0) out vec4 outColor;

float linearDepth(float d) {
  return isOrtho > 0.5
    ? cameraNear + d * (cameraFar - cameraNear)
    : cameraNear * cameraFar / (cameraFar - d * (cameraFar - cameraNear));
}

float cone(float d, float l) {
  return clamp(1.0 - d / l, 0.0, 1.0);
}

float cylinder(float d, float l) {
  return 1.0 - smoothstep(0.95 * l, 1.05 * l, d);
}

// 4x4 ordered dither: a fine regular pattern reads smoother than white noise without temporal accumulation.
float bayer4(ivec2 p) {
  int i = (p.x & 3) + 4 * (p.y & 3);
  int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(m[i]) + 0.5) / 16.0;
}

void main() {
  ivec2 X = ivec2(gl_FragCoord.xy);
  vec4 colorX = texelFetch(tColor, X, 0);
  float jitter = bayer4(X) - 0.5;
  vec2 vN = texelFetch(tNeighbor, X / int(tile), 0).xy;
  float lN = length(vN);
  if (lN < 0.5) {
    outColor = colorX;
    return;
  }
  vec2 vX = pixelVelocity(X);
  float lX = max(length(vX), 0.5);
  // Half the samples follow the pixel's own motion, so spinning pieces blur along their real path.
  vec2 vC = length(vX) > 0.5 ? vX : vN;
  float zX = linearDepth(texelFetch(tDepth, X, 0).r);
  float weight = 1.0 / lX;
  vec3 sum = colorX.rgb * weight;
  float total = weight;
  ivec2 last = ivec2(resolution) - 1;
  for (int i = 0; i < samples; i++) {
    float t = mix(-1.0, 1.0, (float(i) + 0.5 + jitter) / float(samples));
    vec2 dir = (i & 1) == 0 ? vN : vC;
    ivec2 Y = ivec2(gl_FragCoord.xy + dir * t);
    if (Y == X || any(lessThan(Y, ivec2(0))) || any(greaterThan(Y, last))) continue;
    float lY = max(length(pixelVelocity(Y)), 0.5);
    float zY = linearDepth(texelFetch(tDepth, Y, 0).r);
    float d = abs(t) * length(dir);
    // Y in front smears over X along Y's motion; X in front reveals what is behind along X's.
    float front = clamp(1.0 - (zY - zX) / softZ, 0.0, 1.0);
    float back = clamp(1.0 - (zX - zY) / softZ, 0.0, 1.0);
    float w = front * cone(d, lY) + back * cone(d, lX) + cylinder(d, lY) * cylinder(d, lX) * 2.0;
    sum += texelFetch(tColor, Y, 0).rgb * w;
    total += w;
  }
  outColor = vec4(sum / total, colorX.a);
}
`;var vu={low:{msaa:0,shadowMapSize:1024,gi:{slices:1,steps:8,blurPasses:3,maxHistory:48},samples:1},medium:{msaa:2,shadowMapSize:2048,gi:{slices:1,steps:8},samples:1},high:{msaa:4,shadowMapSize:2048,gi:{slices:2,steps:8},samples:1},capture:{msaa:4,shadowMapSize:4096,gi:{slices:3,steps:12},samples:16}},Sp=["agx","aces","neutral","none"],wp=["none","normals","depth","velocity","shadow","ao","gi","albedo","clipping"],Tp={shadow:1,ao:2,gi:3,albedo:4},I_={normals:1,depth:2,velocity:3,clipping:5};function Ep(i,e=!0){let t=new URLSearchParams(window.location.search);return e&&vu[t.get("quality")]?t.get("quality"):e&&t.has("capture")?"capture":vu[i]?i:/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||matchMedia("(pointer: coarse)").matches?"medium":"high"}function L_(i){return Array.isArray(i)?i.some(e=>e.instanceMotion):!!i.instanceMotion}function Yl(i,e){let t=1,n=0;for(;i>0;)t/=e,n+=t*(i%e),i=Math.floor(i/e);return n}function tn(i=ze,e={}){return new dt(1,1,{type:i,format:St,minFilter:et,magFilter:et,wrapS:ht,wrapT:ht,colorSpace:Gt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...e})}function Jn(i,e,t={}){return new Rn({glslVersion:jt,vertexShader:Xl,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1,...t})}var js=new _e,$l=new xn,gu=new xn,Zl=new Cn,Qs=new Be,Kl=new Be,Jl=new P,jl=new P,Ap=new P,Cp=new bt,Ql=new bt,dn=new bt,Rp=new P,la={x:0,y:0,jx:0,jy:0},Pp=new P,Ip=new P,ec=class{constructor(e,t={}){this.renderer=e,this.quality=Ep(t.quality??"auto"),this.autoQuality=Ep(t.quality??"auto",!1);let n=vu[this.quality];this.temporal=!!t.temporal,this.temporalFeedback=t.temporal?.feedback??.9,this.temporalClamp=t.temporal?.clamp??1.25,this.msaa=Math.min(t.msaa??(this.temporal?0:n.msaa),e.capabilities.maxSamples),this.samples=t.samples??n.samples,this.shadows=t.shadows??!0,this.giEnabled=t.gi??!0,this.bloom=t.bloom??!0,this.background=new Te(t.background??15921129),this.exposure=t.exposure??1,this.bloomStrength=t.bloomStrength??.04,this.bloomRadius=t.bloomRadius??.6,this.vignette=t.vignette??.25,this.grain=t.grain??.03,this.aberration=t.aberration??0,this.saturation=t.saturation??1,this.contrast=t.contrast??1,this.tonemapper=t.tonemapper??"agx",this.debug="none",this.clipWarning=t.clipWarning??!1,this._wireframe=t.wireframe??!1,this._wired=new Map;let s={mapSize:n.shadowMapSize,autoFit:!0,...t.shadow};this.shadowAutoFit=s.autoFit,this.shadowDenoise=s.denoise??!1,this.shadowMaskOptions=s.mask??{},this.shadowMask=null;let r=t.motionBlur;this.motionBlurAvailable=!!r,this.motionBlur=r?r.enabled??!0:!1,this.shutter=r?.shutter??1/30,this.motionSamples=r?.samples??(this.quality==="capture"?32:24),this.motionMaxBlur=r?.maxBlur??.03,this.motionSoftZ=r?.softZ??.1,this.motionReusePrepass=r?.reusePrepass??!1,this.composite=t.composite??null,this.afterFocus=t.afterFocus??null;let a=t.depthOfField;if(this.dof=a?new oa(a):null,this.dofRequested=!!a,this.dofEnabled=!!a&&(a.enabled??!0),this.lensSamples=a?.lensSamples??256,this.dofHoldLive=!!a?.holdLive,this.stillSamples=t.stillSamples??0,this.stillSamples>0&&!this.dof&&(this.dof=new oa({aperture:0})),this.lensCount=0,this._stillKey=[],this.shadow=new Gl({mapSize:s.mapSize}),this.gi=new Hl({...n.gi,...t.giOptions}),this.width=0,this.height=0,this.frame=0,this.hasPrevColor=!1,this.hasPrevFrame=!1,this.meshes=[],this.instanceMotion=[],this.depthTexture=new _n(1,1,pt),this.prepassTarget=tn(ze,{minFilter:Xe,magFilter:Xe,depthBuffer:!0,depthTexture:this.depthTexture}),this.reuseDepth=this.temporal&&this.msaa===0&&(t.temporal?.reuseDepth??!0),this.depthPrepass=t.depthPrepass??!1,this.mainTarget=this.reuseDepth?tn(ze,{depthBuffer:!0,depthTexture:this.depthTexture}):tn(ze,{depthBuffer:!0,samples:this.msaa,resolveDepthBuffer:!1,storeMultisampledDepthBuffer:!1}),this.prevColorTarget=tn(ze),this.accumTarget=tn(ze),this.ldrTarget=tn(Bt),this.motionBlurAvailable){let l={minFilter:Xe,magFilter:Xe};this.motionTarget=tn(ze,{...l,depthBuffer:!0}),this.tileTarget=tn(ze,l),this.neighborTarget=tn(ze,l),this.blurTarget=tn(ze);let c={tVelocity:{value:this.motionTarget.texture},resolution:{value:new _e},maxRadius:{value:32}};this.tileMaxMaterial=Jn(yp,{...c,tile:{value:32}}),this.neighborMaxMaterial=Jn(Mp,{tTiles:{value:this.tileTarget.texture},reach:{value:4}}),this.reconstructMaterial=Jn(bp,{...c,tColor:{value:null},tDepth:{value:this.depthTexture},tNeighbor:{value:this.neighborTarget.texture},tile:{value:32},samples:{value:16},softZ:{value:.1},cameraNear:Ee.cameraNear,cameraFar:Ee.cameraFar,isOrtho:{value:0},frame:{value:0}})}this.bloomLevels=[],this.bloomNorm=1;let o=new Ye;o.setAttribute("position",new De([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new rt(o),this.quad.frustumCulled=!1,this.quadScene=new Kt,this.quadScene.add(this.quad),this.quadCamera=new Pt(-1,1,1,-1,0,1),this.copyMaterial=Jn(mu,{tInput:{value:null},weight:{value:1}},{blending:Vn}),this.accumMaterial=Jn(mu,{tInput:{value:null},weight:{value:1}},{blending:xo,blendEquation:Yn,blendSrc:Ji,blendDst:Ji,blendEquationAlpha:Yn,blendSrcAlpha:Ji,blendDstAlpha:Ji}),this.downMaterial=Jn(pp,{tInput:{value:null},texel:{value:new _e},karis:{value:1},clampMax:{value:64}}),this.upMaterial=Jn(mp,{tLow:{value:null},tHigh:{value:null},texel:{value:new _e},radius:{value:1}}),this.finalMaterial=Jn(gp,{tColor:{value:null},tBloom:{value:null},tNormalVelocity:{value:this.prepassTarget.texture},tDepth:{value:this.depthTexture},bloomStrength:{value:0},bloomScale:{value:1},exposure:{value:1},vignette:{value:0},grain:{value:0},aberration:{value:0},saturation:{value:1},contrast:{value:1},tonemapper:{value:0},frame:{value:0},debugView:{value:0},clipWarning:{value:0},cameraNear:Ee.cameraNear,cameraFar:Ee.cameraFar,isOrtho:{value:0}}),this.fxaaMaterial=Jn(vp,{tInput:{value:this.ldrTarget.texture}}),this.taaTargets=this.temporal?[tn(ze),tn(ze)]:[],this.taaIndex=0,this.taaHistory=!1,this.taaMaterial=Jn(xp,{tCurrent:{value:null},tHistory:{value:null},tNormalVelocity:{value:this.prepassTarget.texture},tDepth:{value:this.depthTexture},resolution:{value:new _e},feedback:{value:this.temporalFeedback},hasHistory:{value:0},clampGamma:{value:this.temporalClamp}},{blending:Vn}),e.getDrawingBufferSize(js),this._resize(js.x,js.y),this.shadows&&this.shadowDenoise&&(this.shadowMask=new Ks(this.gi,this.shadowMaskOptions)),this._passesCompiled=this._compilePasses()}setSize(e,t,n=this.renderer.getPixelRatio()){this._resize(Math.floor(e*n),Math.floor(t*n))}_resize(e,t){if(e=Math.max(1,e),t=Math.max(1,t),!(e===this.width&&t===this.height)){this.width=e,this.height=t;for(let n of[this.prepassTarget,this.mainTarget,this.prevColorTarget,this.accumTarget,this.ldrTarget,...this.taaTargets])n.setSize(e,t);if(this.taaHistory=!1,this.gi.setSize(e,t),this.dof?.setSize(e,t),this.lensCount=0,this.motionBlurAvailable){this.motionTarget.setSize(e,t),this.blurTarget.setSize(e,t);let n=8,s=Math.max(n,Math.ceil(this.motionMaxBlur*t));this.tileTarget.setSize(Math.ceil(e/n),Math.ceil(t/n)),this.neighborTarget.setSize(Math.ceil(e/n),Math.ceil(t/n)),this.neighborMaxMaterial.uniforms.reach.value=Math.ceil(s/n);for(let r of[this.tileMaxMaterial,this.reconstructMaterial])r.uniforms.tile.value=n,r.uniforms.maxRadius.value=s,r.uniforms.resolution.value.set(e,t)}Ee.resolution.value.set(e,t),this.hasPrevColor=!1,this._buildBloom(e,t)}}_buildBloom(e,t){for(let r of this.bloomLevels)r.down.dispose(),r.up.dispose();this.bloomLevels=[],this._bloomCache=null;let n=e,s=t;for(let r=0;r<7;r++){n=Math.max(1,Math.floor(n/2)),s=Math.max(1,Math.floor(s/2));let a=tn(),o=tn();if(a.setSize(n,s),o.setSize(n,s),this.bloomLevels.push({down:a,up:o,width:n,height:s}),Math.min(n,s)<=8)break}}_pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quadScene,this.quadCamera)}_updateShutter(e,t){let n=e.userData;if(n.shutterManual)return;if(n.shutterMatrixWorld??=e.matrixWorld.clone(),n.motionLinear??=new P,n.motionAngular??=new P,e.matrixWorld.decompose(jl,Ql,Ap),t>1e-6){n.prevMatrixWorld.decompose(Jl,Cp,Rp),n.motionLinear.subVectors(jl,Jl).divideScalar(t),dn.copy(Ql).multiply(Cp.invert()),dn.w<0&&dn.set(-dn.x,-dn.y,-dn.z,-dn.w);let a=2*Math.acos(Math.min(dn.w,1)),o=Math.sqrt(Math.max(1-dn.w*dn.w,0));o>1e-6?n.motionAngular.set(dn.x/o,dn.y/o,dn.z/o).multiplyScalar(a/t):n.motionAngular.set(0,0,0)}let s=this.shutter/2;jl.addScaledVector(n.motionLinear,-s);let r=n.motionAngular.length();r>1e-6&&Ql.premultiply(dn.setFromAxisAngle(Rp.copy(n.motionAngular).divideScalar(r),-r*s)),n.shutterMatrixWorld.compose(jl,Ql,Ap)}_cameraUnmoved(e){Kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);let t=Kl.elements,n=Ee.prevViewProjection.value.elements;for(let s=0;s<16;s++)if(Math.abs(t[s]-n[s])>1e-6*(1+Math.abs(n[s])))return!1;return!0}_renderMotion(e,t){let n=Ee;Kl.copy(n.prevViewProjection.value);let s=n.prevTime.value;n.prevViewProjection.value.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.prevTime.value=n.time.value-this.shutter/2,zl.key="shutterMatrixWorld",n.motionPass.value=1;try{this.renderer.setRenderTarget(this.motionTarget),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!0),$s(this.renderer,e,t,"prepass",this.motionTarget)}finally{zl.key="prevMatrixWorld",n.motionPass.value=0,n.prevViewProjection.value.copy(Kl),n.prevTime.value=s}}_renderMotionBlur(e){this._pass(this.tileMaxMaterial,this.tileTarget),this._pass(this.neighborMaxMaterial,this.neighborTarget);let t=this.reconstructMaterial.uniforms;return t.tColor.value=e,t.samples.value=Math.max(2,Math.round(this.motionSamples)),t.softZ.value=this.motionSoftZ,t.isOrtho.value=this.finalMaterial.uniforms.isOrtho.value,t.frame.value=this.frame,this._pass(this.reconstructMaterial,this.blurTarget),this.blurTarget.texture}_gatherScene(e,t=Ee.time.value){let n=this.motionBlur&&this.motionBlurAvailable,s=t-Ee.prevTime.value,r=this.meshes;r.length=0,this.instanceMotion.length=0,$l.makeEmpty();let a=0;e.traverseVisible(o=>{if(!o.material||(r.push(o),this._syncDefines(o),o.userData.prevMatrixWorld?o.matrixWorld.equals(o.userData.prevMatrixWorld)||(a+=1e9):o.userData.prevMatrixWorld=o.matrixWorld.clone(),a+=o.id*31+(o.geometry?.id??0)*7+(o.instanceMatrix?.version??0)+(o.count??0),n&&this._updateShutter(o,s),o.isInstancedMesh&&L_(o.material)&&this._trackInstances(o),!this.shadowAutoFit||o.userData.noShadow||!o.geometry))return;let l=o.material;(Array.isArray(l)?l.some(h=>h.isPipelineMaterial):l.isPipelineMaterial)&&(o.isInstancedMesh?(o.boundingSphere||o.computeBoundingSphere(),Zl.copy(o.boundingSphere).applyMatrix4(o.matrixWorld),Zl.getBoundingBox(gu)):(o.geometry.boundingSphere||o.geometry.computeBoundingSphere(),Zl.copy(o.geometry.boundingSphere).applyMatrix4(o.matrixWorld),Zl.getBoundingBox(gu)),$l.union(gu))}),this.sceneSignature=a+r.length}_syncDefines(e){let t={PIPELINE_DENOISED_SHADOWS:this.shadows&&this.shadowDenoise,PIPELINE_INVARIANT:this.depthPrepass};for(let n of Array.isArray(e.material)?e.material:[e.material])if(n?.isPipelineMaterial)for(let[s,r]of Object.entries(t))s in n.defines!==r&&(r?n.defines[s]="":delete n.defines[s],n.needsUpdate=!0)}_isStill(e,t){let n=[...e.matrixWorld.elements,...e.projectionMatrix.elements,t,this.sceneSignature,this.dof.focus,this.dof.aperture,this.width,this.height],s=this._stillKey,r=n.length===s.length;for(let a=0;r&&a<n.length;a++)r=Math.abs(n[a]-s[a])<=1e-6*Math.max(1,Math.abs(n[a]));return this._stillKey=n,r}markMoving(){this._moving=!0}restartAccumulation(e=!0){if(e||(this._settleShown=null,this._settleFade=!1),this.stillSamples>0&&this._settleShown){this._settleFrom??=tn(ze),(this._settleFrom.width!==this.width||this._settleFrom.height!==this.height)&&this._settleFrom.setSize(this.width,this.height);let t=this.renderer.getRenderTarget();this.copyMaterial.uniforms.tInput.value=this._settleShown,this.copyMaterial.uniforms.weight.value=1,this._pass(this.copyMaterial,this._settleFrom),this.renderer.setRenderTarget(t),this._settleFade=!0}this.lensCount=0}_renderLens(e,t,n=this.lensSamples,s=!0){let r=this.dof;if(this.lensCount>=n)return this._lensDone=!0,s?r.lensResult:this._settleShown=r.lensResult;let a=++this.lensCount;r.lensSample(a,t,la),Jl.copy(t.position),Pp.setFromMatrixColumn(t.matrixWorld,0).multiplyScalar(la.x),Ip.setFromMatrixColumn(t.matrixWorld,1).multiplyScalar(la.y),t.position.add(Pp).add(Ip),t.updateMatrixWorld(),Qs.copy(t.projectionMatrix),this._setJitter(t,la.jx,la.jy);let o;try{this._renderFrame(e,t,a===1),o=this.mainTarget.texture,this.motionBlur&&this.motionBlurAvailable&&(this._renderMotion(e,t),o=this._renderMotionBlur(o)),this.composite&&(o=this.composite(o,{depthTexture:this.depthTexture,camera:t,width:this.width,height:this.height})??o),this._storePrevious(t)}finally{t.projectionMatrix.copy(Qs),Ee.jitter.value.set(0,0),t.position.copy(Jl),t.updateMatrixWorld(),this._updateCameraUniforms(t)}let l=r.accumulate(this.renderer,o,a);if(!s){let u=this._settleFade?Math.min(1,a/24):1;return u>=1&&(this._settleFade=!1),this._settleShown=u<1?r.blend(this.renderer,this._settleFrom.texture,l,u*u*(3-2*u)):l}a===1&&(this._holdReady=!1),a===1&&this.dofHoldLive&&this._lastGather&&(this._holdFrom??=tn(ze),(this._holdFrom.width!==this.width||this._holdFrom.height!==this.height)&&this._holdFrom.setSize(this.width,this.height),this.copyMaterial.uniforms.tInput.value=this._lastGather,this.copyMaterial.uniforms.weight.value=1,this._pass(this.copyMaterial,this._holdFrom),this._holdReady=!0);let c=Math.min(1,Math.max(0,(a-8)/24));if(c>=1)return l;let h=this._holdReady?this._holdFrom.texture:r.gather(this.renderer,o,this.depthTexture,t);return r.blend(this.renderer,h,l,this._holdReady?c*c*(3-2*c):c)}_trackInstances(e){let t=e.instanceMatrix.array,n=e.geometry.getAttribute("prevInstanceMatrix");if(!n||n.array.length!==t.length){let s=new Ti(new Float32Array(t),16);s.setUsage(oh),e.geometry.setAttribute("prevInstanceMatrix",s)}this.instanceMotion.push(e)}_updateCameraUniforms(e){let t=Ee,n=e.projectionMatrix.elements;e.isOrthographicCamera?(t.cameraNear.value=(n[14]+1)/n[10],t.cameraFar.value=(n[14]-1)/n[10]):(t.cameraNear.value=n[14]/(n[10]-1),t.cameraFar.value=n[14]/(n[10]+1)),t.projectionMatrixInverse.value.copy(e.projectionMatrix).invert(),t.viewMatrixInverse.value.copy(e.matrixWorld),this.finalMaterial.uniforms.isOrtho.value=e.isOrthographicCamera?1:0}_storePrevious(e){Ee.prevViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);for(let t of this.meshes)t.userData.prevMatrixWorld.copy(t.matrixWorld);for(let t of this.instanceMotion){let n=t.geometry.getAttribute("prevInstanceMatrix");n.array.set(t.instanceMatrix.array),n.needsUpdate=!0}Ee.prevTime.value=Ee.time.value}_setJitter(e,t,n){Ee.jitter.value.set(t,n);let s=e.projectionMatrix.elements;e.isOrthographicCamera?(s[12]+=t,s[13]+=n):(s[8]-=t,s[9]-=n)}_renderFrame(e,t,n=!0){let s=this.renderer,r=Ee;r.frame.value=this.frame,this._updateCameraUniforms(t),this.shadows?n&&(this.shadowAutoFit&&!$l.isEmpty()&&this.shadow.fit($l),this.shadow.render(s,e)):r.shadowEnabled.value=0,s.setRenderTarget(this.prepassTarget),s.setClearColor(0,0),s.clear(!0,!0,!0),$s(s,e,t,"prepass",this.prepassTarget),r.depthTexture.value=this.depthTexture,this.giEnabled&&!this._giWasEnabled&&this.gi.resetHistory(),this._giWasEnabled=this.giEnabled;let a=this.shadows&&this.shadowDenoise;a&&!this._denoiseWasEnabled&&this.shadowMask?.resetHistory(),this._denoiseWasEnabled=a;let o=this.giEnabled&&a;this.giEnabled?this.gi.render(s,{depthTexture:this.depthTexture,normalVelocity:this.prepassTarget.texture,prevColor:this.hasPrevColor?this._prevColor:null,camera:t,blur:!o}):r.giEnabled.value=0,a?(this.giEnabled||this.gi.renderGeometry(s,{depthTexture:this.depthTexture,normalVelocity:this.prepassTarget.texture,camera:t}),this.shadowMask??=new Ks(this.gi,this.shadowMaskOptions),this.shadowMask.render(s,{normalVelocity:this.prepassTarget.texture,blur:!o}),o&&this.gi.blurWith(s,this.shadowMask)):r.shadowMaskEnabled.value=0;let l=r.pipelineDebug.value;r.pipelineDebug.value=0,this._renderMain(e,t),this._prevColor=this.mainTarget.texture,l>0&&(this.copyMaterial.uniforms.tInput.value=this.mainTarget.texture,this.copyMaterial.uniforms.weight.value=1,this._pass(this.copyMaterial,this.prevColorTarget),this._prevColor=this.prevColorTarget.texture),this.hasPrevColor=!0,r.pipelineDebug.value=l,l>0&&this._renderMain(e,t),this.frame++}_renderMain(e,t){let n=this.renderer;n.setRenderTarget(this.mainTarget),n.setClearColor(this.background,1);let s=this.depthPrepass&&!this.reuseDepth;if(!this.reuseDepth&&!s){n.clear(!0,!0,!0),n.render(e,t);return}let r=o=>o?.isPipelineMaterial&&!o.transparent&&o.depthWrite&&o.depthTest&&o.colorWrite&&!o.alphaToCoverage;if(s){n.clear(!0,!0,!0);let o=n.state.buffers.color;o.setMask(!1),o.setLocked(!0);try{$s(n,e,t,"depth",void 0,l=>r(l.material))}finally{o.setLocked(!1),o.setMask(!0)}}else n.clear(!0,!1,!1);let a=[];e.traverseVisible(o=>{let l=o.material;(s?!r(l):!l?.isPipelineMaterial||l.transparent)||(a.push(l,l.depthWrite,l.polygonOffset,l.polygonOffsetFactor,l.polygonOffsetUnits),l.depthWrite=!1,!s&&(l.polygonOffset=!0,l.polygonOffsetFactor=-1,l.polygonOffsetUnits=-4))});try{n.render(e,t)}finally{for(let o=0;o<a.length;o+=5){let l=a[o];l.depthWrite=a[o+1],l.polygonOffset=a[o+2],l.polygonOffsetFactor=a[o+3],l.polygonOffsetUnits=a[o+4]}}}_renderBloom(e){let t=this.bloomLevels,n=this.downMaterial.uniforms,s=e,r=this.width,a=this.height;t.forEach((u,f)=>{n.tInput.value=s,n.texel.value.set(1/r,1/a),n.karis.value=f===0?1:0,this._pass(this.downMaterial,u.down),s=u.down.texture,r=u.width,a=u.height});let o=this.upMaterial.uniforms,l=this.bloomRadius,c=t[t.length-1].down,h=1;for(let u=t.length-2;u>=0;u--){let f=t[u+1];o.tLow.value=c.texture,o.tHigh.value=t[u].down.texture,o.texel.value.set(1/f.width,1/f.height),o.radius.value=l,this._pass(this.upMaterial,t[u].up),c=t[u].up,h=1+l*h}return this.bloomNorm=h,c.texture}render(e,t,n=performance.now()/1e3){let s=this.renderer;(this.wireframe||this._wired.size)&&this._applyWireframe(e),s.getDrawingBufferSize(js),this._resize(js.x,js.y);let r=s.getRenderTarget(),a=s.autoClear,o=s.toneMapping,l=s.getClearColor(new Te),c=s.getClearAlpha();s.autoClear=!1,s.toneMapping=Pn;try{e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),this._gatherScene(e,this.hasPrevFrame?n:Ee.prevTime.value),this.hasPrevFrame||(Ee.time.value=n,this._storePrevious(t),this.hasPrevFrame=!0);let h=wp.includes(this.debug)?this.debug:"none";Ee.pipelineDebug.value=Tp[h]??0,Ee.time.value=n;let u,f=Math.max(1,Math.round(this.samples)),p=this.dof&&this.dofEnabled&&this.dof.active&&t.isPerspectiveCamera&&h==="none"?this.dof:null,d=!p&&this.stillSamples>0&&this.dof&&t.isPerspectiveCamera&&h==="none"&&f===1,v=(p||d?this._isStill(t,n):!1)&&!this._moving;this._moving=!1,v||(this.lensCount=0),v||(this._settleShown=null,this._settleFade=!1);let g=v&&(p&&this.lensSamples>0||d);if(this._lensDone=!1,g&&(this.taaHistory=!1),g)u=this._renderLens(e,t,d?this.stillSamples:this.lensSamples,!d);else if(f>1){Qs.copy(t.projectionMatrix);let E=this.accumMaterial.uniforms;s.setRenderTarget(this.accumTarget),s.setClearColor(0,0),s.clear(!0,!1,!1);for(let w=0;w<f;w++){let x=(Yl(w+1,2)-.5)*2/this.width,y=(Yl(w+1,3)-.5)*2/this.height;this._setJitter(t,x,y),this._renderFrame(e,t,w===0),t.projectionMatrix.copy(Qs),Ee.jitter.value.set(0,0),w===0&&this._storePrevious(t),E.tInput.value=this.mainTarget.texture,E.weight.value=1/f,this._pass(this.accumMaterial,this.accumTarget)}this._updateCameraUniforms(t),u=this.accumTarget.texture}else if(this.temporal&&h==="none"){Qs.copy(t.projectionMatrix);let E=this.frame%16+1;this._setJitter(t,(Yl(E,2)-.5)*2/this.width,(Yl(E,3)-.5)*2/this.height),this._renderFrame(e,t),t.projectionMatrix.copy(Qs),Ee.jitter.value.set(0,0),this._updateCameraUniforms(t);let w=this.taaMaterial.uniforms;w.tCurrent.value=this.mainTarget.texture,w.tHistory.value=this.taaTargets[this.taaIndex].texture,w.resolution.value.set(this.width,this.height),w.feedback.value=this.temporalFeedback,w.clampGamma.value=this.temporalClamp,w.hasHistory.value=this.taaHistory?1:0,this.taaIndex=1-this.taaIndex,this._pass(this.taaMaterial,this.taaTargets[this.taaIndex]),this.taaHistory=!0,u=this.taaTargets[this.taaIndex].texture}else Ee.jitter.value.set(0,0),this._renderFrame(e,t),u=this.mainTarget.texture;if(!g){let E=this.motionBlur&&this.motionBlurAvailable&&h==="none",w=E&&this.motionReusePrepass&&f===1&&this._cameraUnmoved(t);E&&(this.tileMaxMaterial.uniforms.tVelocity.value=w?this.prepassTarget.texture:this.motionTarget.texture),E&&!w&&this._renderMotion(e,t),this._storePrevious(t),E&&(u=this._renderMotionBlur(u)),this.composite&&h==="none"&&(u=this.composite(u,{depthTexture:this.depthTexture,camera:t,width:this.width,height:this.height})??u),p&&(u=this._lastGather=p.gather(s,u,this.depthTexture,t))}this.afterFocus&&h==="none"&&(u=this.afterFocus(u,{depthTexture:this.depthTexture,camera:t,width:this.width,height:this.height})??u);let m=this.bloom&&this.bloomStrength>0&&(h==="none"||h==="clipping"),_=this.finalMaterial.uniforms;_.tColor.value=u;let T=this._bloomCache,M=m&&this._lensDone&&T&&T.source===u&&T.radius===this.bloomRadius;m&&!M&&(this._bloomCache={source:u,radius:this.bloomRadius,texture:this._renderBloom(u)}),m||(this._bloomCache=null),_.tBloom.value=m?this._bloomCache.texture:null,_.bloomStrength.value=m?this.bloomStrength:0,_.exposure.value=this.exposure,_.vignette.value=this.vignette,_.grain.value=this.grain,_.aberration.value=this.aberration,_.saturation.value=this.saturation,_.contrast.value=this.contrast,_.tonemapper.value=Math.max(0,Sp.indexOf(this.tonemapper)),_.frame.value=this.frame,_.debugView.value=I_[h]??(Tp[h]?4:0),_.clipWarning.value=this.clipWarning&&h==="none"?1:0,_.bloomScale.value=1/this.bloomNorm,this.msaa===0&&!this.temporal?(this._pass(this.finalMaterial,this.ldrTarget),this._pass(this.fxaaMaterial,null)):this._pass(this.finalMaterial,null)}finally{s.setRenderTarget(r),s.autoClear=a,s.toneMapping=o,s.setClearColor(l,c)}}_compilePasses(){let e=this.gi,t=[this.copyMaterial,this.accumMaterial,this.downMaterial,this.upMaterial,this.finalMaterial,this.fxaaMaterial,this.taaMaterial];this.motionBlurAvailable&&t.push(this.tileMaxMaterial,this.neighborMaxMaterial,this.reconstructMaterial),this.dof&&t.push(...this.dof.materials),t.push(e.geometryMaterial,e.traceMaterial,e.temporalMaterial,e.blurMaterial,e.blurPairMaterial,e.tileMaterial,e.skipMaterial);let n=this.shadowMask;n&&t.push(n.traceMaterial,n.temporalMaterial,n.blurMaterial);let s=new Kt;for(let r of t){let a=new rt(this.quad.geometry,r);a.frustumCulled=!1,s.add(a)}return this.renderer.compileAsync(s,this.quadCamera)}async compileAsync(e,t){let n=this.renderer,s=n.getRenderTarget(),r=[this._passesCompiled];try{n.setRenderTarget(this.mainTarget),e.traverse(a=>a.material&&this._syncDefines(a)),r.push(n.compileAsync(e,t)),r.push(Il(n,e,t,"prepass")),this.depthPrepass&&r.push(Il(n,e,t,"depth")),r.push(Il(n,e,this.shadow.camera,"shadow",this.shadow.filter)),this.shadows&&this.shadowDenoise&&!this.shadowMask&&(this.shadowMask=new Ks(this.gi,this.shadowMaskOptions),this._passesCompiled=this._compilePasses(),r.push(this._passesCompiled))}finally{n.setRenderTarget(s)}await Promise.all(r)}get wireframe(){return this._wireframe}set wireframe(e){this._wireframe=e,this._wireframeControl?.signal.set(e)}_applyWireframe(e){if(!this.wireframe){for(let[t,n]of this._wired)t.wireframe=n;this._wired.clear();return}e.traverse(t=>{let n=t.material;!t.isMesh||!n?.isPipelineMaterial||t.userData.noWireframe||this._wired.has(n)||(this._wired.set(n,n.wireframe),n.wireframe=!0)})}addGUI(e,{title:t="Rendering",open:n=!1}={}){let s=Ee,r=h=>({randomizable:!1,onChange:u=>{h(u),this.lensCount=0}}),a=e.addSection(t,{open:n}),o=new URLSearchParams(location.search).get("quality"),l=["high","medium","low"];e.addSelect("Quality (reloads)",l.includes(o)?o:"auto",[["auto",`auto (${this.autoQuality})`],...l],{randomizable:!1,onChange:h=>{let u=new URL(location.href);h==="auto"?u.searchParams.delete("quality"):u.searchParams.set("quality",h),location.replace(u)}});let c=(h,u,f,p,d,v)=>e.addSlider(h,u(),p,d,v,r(f));return c("Exposure",()=>this.exposure,h=>this.exposure=h,.1,4,.01),e.addSelect("Tonemapper",this.tonemapper,Sp,r(h=>this.tonemapper=h)),c("Environment",()=>s.envIntensity.value,h=>s.envIntensity.value=h,0,3,.01),c("Bloom",()=>this.bloomStrength,h=>this.bloomStrength=h,0,.3,.001),c("Bloom radius",()=>this.bloomRadius,h=>this.bloomRadius=h,0,1,.01),c("Vignette",()=>this.vignette,h=>this.vignette=h,0,1,.01),c("Grain",()=>this.grain,h=>this.grain=h,0,.15,.001),c("Aberration",()=>this.aberration,h=>this.aberration=h,0,1,.01),c("Saturation",()=>this.saturation,h=>this.saturation=h,0,2,.01),c("Contrast",()=>this.contrast,h=>this.contrast=h,.5,1.5,.01),e.addCheckbox("Shadows",this.shadows,r(h=>this.shadows=h)),e.addCheckbox("Shadow denoise",this.shadowDenoise,r(h=>this.shadowDenoise=h)),c("Shadow softness",()=>s.shadowSoftness.value,h=>s.shadowSoftness.value=h,0,4,.01),c("Light size",()=>s.shadowLightSize.value,h=>s.shadowLightSize.value=h,0,.6,.001),e.addCheckbox("AO + GI",this.giEnabled,r(h=>this.giEnabled=h)),e.addCheckbox("Depth pre-pass",this.depthPrepass,r(h=>this.depthPrepass=h)),c("AO",()=>s.aoIntensity.value,h=>s.aoIntensity.value=h,0,2,.01),c("AO power",()=>s.aoPower.value,h=>s.aoPower.value=h,.5,4,.01),c("GI",()=>s.giIntensity.value,h=>s.giIntensity.value=h,0,4,.01),c("GI radius",()=>this.gi.radius,h=>this.gi.radius=h,.05,4,.01),this.motionBlurAvailable&&(e.addCheckbox("Motion blur",this.motionBlur,r(h=>this.motionBlur=h)),c("Shutter",()=>this.shutter,h=>this.shutter=h,0,.2,.001),c("Blur samples",()=>this.motionSamples,h=>this.motionSamples=h,2,64,1)),this.dof&&this.dofRequested&&(e.addCheckbox("Depth of field",this.dofEnabled,r(h=>this.dofEnabled=h)),c("Lens samples",()=>this.lensSamples,h=>this.lensSamples=h,0,1024,1)),e.addSelect("Debug",this.debug,wp,r(h=>this.debug=h)),e.addCheckbox("Clip warning",this.clipWarning,r(h=>this.clipWarning=h)),this._wireframeControl=e.addCheckbox("Wireframe",this.wireframe,r(h=>this.wireframe=h)),e.endSection(),a}dispose(){for(let e of[this.prepassTarget,this.mainTarget,this.prevColorTarget,this.accumTarget,this.ldrTarget])e.dispose();if(this.motionBlurAvailable){for(let e of[this.motionTarget,this.tileTarget,this.neighborTarget,this.blurTarget])e.dispose();for(let e of[this.tileMaxMaterial,this.neighborMaxMaterial,this.reconstructMaterial])e.dispose()}for(let e of this.bloomLevels)e.down.dispose(),e.up.dispose();this.depthTexture.dispose();for(let e of[this.copyMaterial,this.accumMaterial,this.downMaterial,this.upMaterial,this.finalMaterial,this.fxaaMaterial,this.taaMaterial])e.dispose();for(let e of this.taaTargets)e.dispose();this.quad.geometry.dispose(),this.shadow.dispose(),this.shadowMask?.dispose(),this.dof?.dispose(),this._settleFrom?.dispose(),this._holdFrom?.dispose(),this.gi.dispose()}};wt();function ha(i){return function(){i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function N_(i,e,t){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ca(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),a=i-n,o=e-s,l=t-r,c=v=>v*v*(3-2*v),h=c(a),u=c(o),f=c(l),p=(v,g,m)=>v+(g-v)*m,d=(v,g,m)=>N_(n+v,s+g,r+m);return p(p(p(d(0,0,0),d(1,0,0),h),p(d(0,1,0),d(1,1,0),h),u),p(p(d(0,0,1),d(1,0,1),h),p(d(0,1,1),d(1,1,1),h),u),f)*2-1}function Hn(i,e=new P){let t=i()*2-1,n=i()*Math.PI*2,s=Math.sqrt(1-t*t);return e.set(Math.cos(n)*s,Math.sin(n)*s,t)}function Lp(i){let e=D_(i);for(;;){let t=e.next();if(t.done)return t.value}}function*D_({seed:i,count:e,shape:t,thickness:n=.09,warp:s=.22,stretch:r=1,impact:a=null}){let o=ha(i),l=Array.from({length:e*12},()=>t.sample(o)),c=[l[0]],h=l.map(F=>F.distanceToSquared(c[0]));for(;c.length<e;){let F=0;for(let O=1;O<l.length;O++)h[O]>h[F]&&(F=O);c.push(l[F]);for(let O=0;O<l.length;O++)h[O]=Math.min(h[O],l[O].distanceToSquared(l[F]));yield}let u=new P,f=F=>{let O=s;return u.set(F.x+ca(F.x*4+11,F.y*4,F.z*4)*O,F.y+ca(F.x*4,F.y*4+23,F.z*4)*O,F.z+ca(F.x*4,F.y*4,F.z*4+37)*O)},p=c.map(F=>a?F.clone().sub(a).normalize():null),d=1-r*r,v=new P,g=(F,O)=>{v.subVectors(F,c[O]);let G=v.lengthSq();if(!a)return G;let ee=v.dot(p[O]);return G-d*ee*ee},m=(F,O)=>-g(f(F),O),_=F=>{let O=f(F),G=0,ee=1/0;for(let H=0;H<c.length;H++){let $=g(O,H);$<ee&&(ee=$,G=H)}return G},T=F=>`${Math.round(F.p.x*1e5)},${Math.round(F.p.y*1e5)},${Math.round(F.p.z*1e5)}`,M=(F,O,G,ee)=>{let[H,$]=T(F)<T(O)?[F,O]:[O,F],te=m(H.p,G)-m(H.p,ee),xe=m($.p,G)-m($.p,ee),Pe=te/(te-xe);return{p:H.p.clone().lerp($.p,Pe),n:H.n.clone().lerp($.n,Pe).normalize(),room:H.room+($.room-H.room)*Pe}},{position:E,normal:w,index:x,room:y}=t,R=[];for(let F=0;F<E.length;F+=3)R.push({p:new P(E[F],E[F+1],E[F+2]),n:new P(w[F],w[F+1],w[F+2]),room:y[F/3]});let C=[];for(let F=0;F<R.length;F++)C.push(_(R[F].p)),F%256===255&&(yield);let L=c.map(()=>[]);for(let F=0;F<x.length;F+=3){F%768===765&&(yield);let O=[R[x[F]],R[x[F+1]],R[x[F+2]]],G=[C[x[F]],C[x[F+1]],C[x[F+2]]],ee=[...new Set(G)];if(ee.length===1)L[G[0]].push(O);else if(ee.length===2){let[H,$]=ee,te=O.map(xe=>m(xe.p,H)-m(xe.p,$));for(let[xe,Pe]of[[H,1],[$,-1]]){let Y=[];for(let se=0;se<3;se++){let ge=O[se],Re=O[(se+1)%3],Q=te[se]*Pe,ye=te[(se+1)%3]*Pe;Q>=0&&Y.push(ge),Q>=0!=ye>=0&&Y.push(M(ge,Re,H,$))}Y.length>=3&&L[xe].push(Y)}}else L[_(O[0].p.clone().add(O[1].p).add(O[2].p).divideScalar(3))].push(O)}let B=new P,X=[];for(let F of L)yield,X.push(N(F));return X.filter(Boolean);function N(F){if(!F.length)return null;let O=[],G=[],ee=[],H=(Q,ye,nt)=>{O.push(Q.x,Q.y,Q.z),G.push(ye.x,ye.y,ye.z),ee.push(nt)},$=Q=>B.copy(Q.p).addScaledVector(Q.n,-Math.min(n,Q.room)),te=new Map,xe=new P;for(let Q of F){for(let ye=1;ye<Q.length-1;ye++){let nt=[Q[0],Q[ye],Q[ye+1]];for(let Me of nt)H(Me.p,Me.n,1),xe.add(Me.n);for(let Me of[nt[0],nt[2],nt[1]])H($(Me),Me.n.clone().negate(),0)}for(let ye=0;ye<Q.length;ye++){let nt=Q[ye],Me=Q[(ye+1)%Q.length],je=T(nt),it=T(Me),We=je<it?`${je}|${it}`:`${it}|${je}`,Tt=te.get(We);Tt?Tt.count++:te.set(We,{a:nt,b:Me,count:1})}}let Pe=[];for(let{a:Q,b:ye,count:nt}of te.values()){if(nt!==1)continue;Pe.push({p:Q.p.clone().add(ye.p).multiplyScalar(.5),n:Q.n.clone().add(ye.n).normalize()});let Me=new P().crossVectors(ye.p.clone().sub(Q.p),Q.n.clone().add(ye.n)).normalize();H(Q.p,Me,1),H($(ye),Me,0),H(ye.p,Me,1),H(Q.p,Me,1),H($(Q),Me,0),H($(ye),Me,0)}let Y=Float32Array.from(O),se=new P;for(let Q=0;Q<O.length;Q+=3)se.x+=O[Q],se.y+=O[Q+1],se.z+=O[Q+2];se.divideScalar(O.length/3);for(let Q=0;Q<O.length;Q+=3)O[Q]-=se.x,O[Q+1]-=se.y,O[Q+2]-=se.z;let ge=new Ye;ge.setAttribute("position",new De(O,3)),ge.setAttribute("normal",new De(G,3)),ge.setAttribute("shell",new F_(ee)),ge.setAttribute("home",new De(Y,3)),ge.computeBoundingSphere();let Re=xe.normalize().add(se.clone().normalize().multiplyScalar(.5)).normalize();return{geometry:ge,centre:se,direction:Re,tear:Pe}}}function F_(i){return new De(i,1)}function Np(i){let e=di(new zn(1,4)),t=e.attributes.position,n=i*7.31,s=new P;for(let r=0;r<t.count;r++){s.fromBufferAttribute(t,r);let a=ca(s.x*1.6+n,s.y*1.6,s.z*1.6)*.35+ca(s.x*4+n,s.y*4,s.z*4)*.1;s.multiplyScalar(1+a),t.setXYZ(r,s.x,s.y,s.z)}return e.computeVertexNormals(),e}function Dp(){let i=di(new zn(1,2)),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getZ(t),s=Math.sqrt(Math.max(0,1-n*n))*(1-.4*Math.abs(n)),r=Math.hypot(e.getX(t),e.getY(t))||1;e.setXYZ(t,e.getX(t)/r*s,e.getY(t)/r*s,n)}return i.computeVertexNormals(),i}function Fp(i,e=4){let t=ha(i),n=[];for(let h=0;h<e;h++){let u=(h+(t()-.5)*.6)/e*Math.PI*2,f=.6+.5*t();n.push([Math.cos(u)*f,Math.sin(u)*f])}let s=.12+.1*t(),r=[],a=[],o=[],l=(h,u,f,p)=>{let d=[u[0]-h[0],u[1]-h[1],u[2]-h[2]],v=[f[0]-h[0],f[1]-h[1],f[2]-h[2]],g=new P(d[1]*v[2]-d[2]*v[1],d[2]*v[0]-d[0]*v[2],d[0]*v[1]-d[1]*v[0]).normalize();for(let[m,_]of[[h,p[0]],[u,p[1]],[f,p[2]]])r.push(...m),a.push(g.x,g.y,g.z),o.push(_)};for(let h=1;h<e-1;h++)l([...n[0],s],[...n[h],s],[...n[h+1],s],[1,1,1]),l([...n[0],-s],[...n[h+1],-s],[...n[h],-s],[0,0,0]);for(let h=0;h<e;h++){let u=n[h],f=n[(h+1)%e];l([...u,s],[...u,-s],[...f,-s],[1,0,0]),l([...u,s],[...f,-s],[...f,s],[1,0,1])}let c=new Ye;return c.setAttribute("position",new De(r,3)),c.setAttribute("normal",new De(a,3)),c.setAttribute("shell",new De(o,1)),c.setAttribute("home",new De(r,3)),c}wt();var xu=`
float fHash(vec3 p) {
  p = fract(p * vec3(443.897, 441.423, 437.195));
  p += dot(p, p.yzx + 19.19);
  return fract((p.x + p.y) * p.z);
}

float fNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(fHash(i), fHash(i + vec3(1, 0, 0)), f.x), mix(fHash(i + vec3(0, 1, 0)), fHash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(fHash(i + vec3(0, 0, 1)), fHash(i + vec3(1, 0, 1)), f.x), mix(fHash(i + vec3(0, 1, 1)), fHash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}

// Distances to the nearest and second nearest cell points.
vec2 fWorley(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 o = vec3(x, y, z);
    vec3 c = i + o;
    vec3 d = o + vec3(fHash(c), fHash(c + 17.31), fHash(c + 41.77)) - f;
    float l = dot(d, d);
    if (l < d1) { d2 = d1; d1 = l; }
    else if (l < d2) d2 = l;
  }
  return vec2(sqrt(d1), sqrt(d2));
}

// Screen-space bump from a height field (Mikkelsen).
vec3 fBump(vec3 N, vec3 pos, float h, float scale) {
  vec3 dpdx = dFdx(pos);
  vec3 dpdy = dFdy(pos);
  float dhdx = dFdx(h);
  float dhdy = dFdy(h);
  vec3 r1 = cross(dpdy, N);
  vec3 r2 = cross(N, dpdx);
  float det = dot(dpdx, r1);
  vec3 grad = sign(det) * (dhdx * r1 + dhdy * r2);
  return normalize(abs(det) * N - scale * grad);
}
`;function _u({lite:i=!1}={}){return new Zs({defines:i?{CHIP_LITE:""}:{},roughness:.5,sheen:1,sheenColor:0,sheenRoughness:.6,uniforms:{outerColor:{value:new Te},innerColor:{value:new Te},outerRough:{value:.3},innerRough:{value:.8},rim:{value:.2},pattern:{value:0},outerSpecular:{value:1},through:{value:0},outerMetal:{value:0},glowColor:{value:new Te},glow:{value:0},rimColor:{value:new Te},film:{value:new lt(1.38,2.6,260,620)}},varyings:{vShell:"float",vHome:"vec3"},vertexPars:`in float shell;
in vec3 home;`,vertexMain:`vShell = shell;
vHome = home;`,fragmentPars:xu+`uniform vec3 outerColor;
uniform vec3 innerColor;
uniform float outerRough;
uniform float innerRough;
uniform float rim;
uniform float pattern;
uniform float outerSpecular;
uniform float through;
uniform float outerMetal;
uniform vec3 glowColor;
uniform float glow;
uniform vec3 rimColor;
uniform vec4 film;
// Kept exact on chips too: what varies from chip to chip rather than across one.
float fNoiseExact(vec3 p) { return fNoise(p); }
#ifdef CHIP_LITE
// Chips a few pixels wide: every noise at its mean and no bump, since their detail is smaller than a pixel.
#define fNoise(p) 0.5
#define fWorley(p) vec2(0.45, 0.75)
#define fBump(N, pos, h, scale) (N)
#endif
`+U_,surface:`
void surface(inout Surface s) {
  vec3 p = vObjectPosition;
  if (pattern > 3.5) {
    rockOrMetal(s, p);
    return;
  }
  float o = smoothstep(1.0 - rim, 1.0 - rim * 0.6, vShell);
  float h = 0.0;
  vec3 outer = outerColor;
  float rough = outerRough;
  if (pattern > 0.5 && pattern < 1.5) {
    // Citrus: oil glands pitting a waxy skin.
    float gland = smoothstep(0.05, 0.55, fWorley(p * 42.0).x);
    outer *= (0.8 + 0.2 * gland) * (0.92 + 0.16 * fNoise(p * 7.0));
    rough += 0.2 * (1.0 - gland);
    h = gland * 0.7;
  } else if (pattern > 1.5 && pattern < 2.5) {
    // Speckle: an eggshell's spots and pores.
    float spot = smoothstep(0.62, 0.75, fNoise(p * 22.0)) * 0.5 + smoothstep(0.7, 0.8, fNoise(p * 60.0)) * 0.3;
    outer *= (1.0 - spot) * (0.94 + 0.12 * fNoise(p * 5.0));
    h = fNoise(p * 120.0) * 0.3;
  } else if (pattern > 2.5) {
    // Ripple: a tempered coating's soft waves.
    h = fNoise(p * 6.0) * 0.6;
  }
  float grain = fNoise(p * 34.0) * 0.6 + fNoise(p * 90.0) * 0.4;
  vec3 inner = innerColor * (0.9 + 0.1 * grain);
  s.albedo = mix(inner, outer, o);
  s.roughness = mix(innerRough, rough, o);
  s.specular = mix(1.0, outerSpecular, o);
  s.sheenColor = vec3(0.1) * (1.0 - o);
  s.transmission = innerColor * through * (1.0 - o);
  h = mix(grain * 0.5, h, o);
  s.normal = fBump(s.normal, vWorldPosition, h * 0.004, 1.0);
}
`})}var U_=`
// CIE 1931 colour matching, as sums of Gaussians (Wyman, Sloan & Shirley 2013).
vec3 cie(float nm) {
  float t1 = (nm - 442.0) * (nm < 442.0 ? 0.0624 : 0.0374);
  float t2 = (nm - 599.8) * (nm < 599.8 ? 0.0264 : 0.0323);
  float t3 = (nm - 501.1) * (nm < 501.1 ? 0.0490 : 0.0382);
  float x = 0.362 * exp(-0.5 * t1 * t1) + 1.056 * exp(-0.5 * t2 * t2) - 0.065 * exp(-0.5 * t3 * t3);
  float u1 = (nm - 568.8) * (nm < 568.8 ? 0.0213 : 0.0247);
  float u2 = (nm - 530.9) * (nm < 530.9 ? 0.0613 : 0.0322);
  float y = 0.821 * exp(-0.5 * u1 * u1) + 0.286 * exp(-0.5 * u2 * u2);
  float v1 = (nm - 437.0) * (nm < 437.0 ? 0.0845 : 0.0278);
  float v2 = (nm - 459.0) * (nm < 459.0 ? 0.0385 : 0.0725);
  float z = 1.217 * exp(-0.5 * v1 * v1) + 0.681 * exp(-0.5 * v2 * v2);
  return vec3(x, y, z);
}

// Reflectance of a film of index n2 and thickness d (nm) on a backing of index n3, seen at cosine
// cos1 from air: the Airy sum of the two reflected waves, for s and p polarisation, per wavelength,
// integrated against the colour matching functions into linear sRGB.
vec3 thinFilm(float cos1, float n2, float n3, float d) {
  float sin1 = sqrt(max(1.0 - cos1 * cos1, 0.0));
  float cos2 = sqrt(max(1.0 - sin1 * sin1 / (n2 * n2), 0.0));
  float cos3 = sqrt(max(1.0 - sin1 * sin1 / (n3 * n3), 0.0));
  float rs12 = (cos1 - n2 * cos2) / (cos1 + n2 * cos2);
  float rp12 = (n2 * cos1 - cos2) / (n2 * cos1 + cos2);
  float rs23 = (n2 * cos2 - n3 * cos3) / (n2 * cos2 + n3 * cos3);
  float rp23 = (n3 * cos2 - n2 * cos3) / (n3 * cos2 + n2 * cos3);
  vec3 xyz = vec3(0.0);
  float white = 0.0;
  for (int i = 0; i < 16; i++) {
    float nm = 400.0 + 20.0 * float(i);
    float c = cos(4.0 * 3.14159265 * n2 * d * cos2 / nm);
    float rs = (rs12 * rs12 + rs23 * rs23 + 2.0 * rs12 * rs23 * c) / (1.0 + rs12 * rs12 * rs23 * rs23 + 2.0 * rs12 * rs23 * c);
    float rp = (rp12 * rp12 + rp23 * rp23 + 2.0 * rp12 * rp23 * c) / (1.0 + rp12 * rp12 * rp23 * rp23 + 2.0 * rp12 * rp23 * c);
    vec3 m = cie(nm);
    xyz += m * 0.5 * (rs + rp);
    white += m.y;
  }
  xyz /= white;
  return max(mat3(3.2406, -0.9689, 0.0557, -1.5372, 1.8758, -0.2040, -0.4986, 0.0415, 1.0570) * xyz, 0.0);
}

// An interference coating over a dark backing: its whole reflectance, colour included, comes from
// thinFilm at this angle, so it rides on the real reflections. Thickness wanders across the shape.
void filmSurface(inout Surface s, float o) {
  vec3 V = normalize(cameraPosition - vWorldPosition);
  float cosV = clamp(dot(s.normal, V), 0.0, 1.0);
  float wander = fNoiseExact(vHome * 1.2 + 2.0) * 0.7 + fNoiseExact(vHome * 3.1) * 0.3;
  float d = mix(film.z, film.w, wander);
  vec3 r = thinFilm(cosV, film.x, film.y, d);
  // The coated face reflects like a metal of that colour (its reflectance already holds the Fresnel
  // rise); the broken edges and the inside are the bare backing.
  s.albedo = mix(innerColor, r, o);
  s.metalness = o;
  s.roughness = mix(innerRough, outerRough, o);
  s.specular = mix(1.0, outerSpecular, o);
}

void rockOrMetal(inout Surface s, vec3 p) {
  float o = smoothstep(1.0 - rim, 1.0 - rim * 0.6, vShell);
  float inside = 1.0 - vShell;
  if (pattern > 6.5) {
    filmSurface(s, o);
  } else if (pattern > 5.5) {
    // Smooth black glass outside, burning inside with hotter streaks, running up the broken edges to
    // the rim. Thin glowing cracks web the outside, and a cool rim light catches its edges.
    vec3 q = p * 3.0 + vec3(fNoise(p * 2.0), fNoise(p * 2.0 + 5.2), fNoise(p * 2.0 + 9.7)) * 1.5;
    float f = fNoise(q) * 0.55 + fNoise(q * 2.3) * 0.3 + fNoise(q * 5.1) * 0.15;
    float hot = smoothstep(0.5, 0.75, f);
    vec3 fire = (glowColor * (0.3 + 2.0 * f * f) + vec3(1.0, 0.6, 0.25) * hot * 1.5) * glow;
    vec3 wp = p + vec3(fNoise(p * 4.0), fNoise(p * 4.0 + 3.3), fNoise(p * 4.0 + 6.1)) * 0.12;
    vec2 w = fWorley(wp * 5.0);
    float line = (1.0 - smoothstep(0.0, 0.04, w.y - w.x)) * smoothstep(0.3, 0.6, fNoise(p * 2.0 + 11.0));
    float wall = step(1e-5, fwidth(vShell));
    vec3 V = normalize(cameraPosition - vWorldPosition);
    float rimLight = pow(1.0 - max(dot(s.normal, V), 0.0), 6.0);
    vec3 white = vec3(1.0, 0.8, 0.5);
    s.albedo = mix(vec3(0.08, 0.01, 0.0), outerColor, o) * (1.0 - line * o);
    s.roughness = mix(1.0, outerRough * (0.8 + 0.4 * fNoise(p * 8.0)), o);
    s.specular = mix(0.0, outerSpecular, o);
    // The light lives in the breaks: walls and crack lines burn hot, the inside faces only smoulder.
    s.emissive = fire * (1.0 - o) * mix(0.25, 1.0, wall) + (glowColor + white) * glow * wall * (1.0 - o) * 0.8;
    s.emissive += ((glowColor + white * line) * glow * line + rimColor * rimLight) * o;
  } else if (pattern < 4.5) {
    // Plaster: a coarse tooth. Rock: big flat facets from cell distances, hot only in thin cracks.
    float tooth = fNoise(p * 45.0) * 0.5 + fNoise(p * 110.0) * 0.3 + fNoise(p * 260.0) * 0.2;
    vec2 w = fWorley(p * 9.0);
    float facet = w.x * 0.7 + fWorley(p * 23.0).x * 0.3;
    float seam = 1.0 - smoothstep(0.0, 0.1, w.y - w.x);
    vec3 plaster = outerColor * (0.86 + 0.14 * tooth);
    vec3 rock = innerColor * (0.7 + 0.6 * fNoise(p * 5.0)) * (1.0 - 0.6 * seam);
    s.albedo = mix(rock, plaster, o);
    s.roughness = mix(innerRough, outerRough, o);
    s.specular = mix(1.0, outerSpecular, o);
    float h = mix(facet * 1.8, tooth * 0.6, o);
    s.normal = fBump(s.normal, vWorldPosition, h * 0.01, 1.0);
    // Thin wandering cracks where two noise layers ridge, hot only near the inside.
    float ridge = 1.0 - abs(2.0 * fNoise(p * 4.0 + fNoise(p * 9.0)) - 1.0);
    float crack = smoothstep(0.88, 0.985, ridge) * (0.5 + 0.5 * seam);
    float deep = pow(inside, 3.0);
    float heat = glow * (1.0 - o) * deep * (crack + 0.025 + 0.04 * fNoise(p * 2.0));
    s.emissive = glowColor * heat;
  } else {
    // Bronze: dark worn metal, brighter where rubbed; inside, rough corroded metal with verdigris patches.
    float mottle = fNoise(p * 6.0) * 0.6 + fNoise(p * 19.0) * 0.4;
    float pits = smoothstep(0.08, 0.3, fWorley(p * 30.0).x);
    vec3 bronze = outerColor * mix(0.45, 1.1, mottle * mottle) * mix(0.55, 1.0, pits);
    float green = fNoise(p * 5.0) * 0.6 + fNoise(p * 14.0) * 0.4;
    float spots = smoothstep(0.45, 0.62, green + 0.25 * (1.0 - o) - 0.15);
    vec3 corroded = outerColor * 0.35 * (0.75 + 0.5 * fNoise(p * 18.0));
    vec3 verdigris = innerColor * (0.65 + 0.5 * fNoise(p * 22.0));
    vec3 inner = mix(corroded, verdigris, spots);
    s.albedo = mix(inner, bronze, o);
    s.metalness = mix(1.0 - spots, outerMetal, o);
    s.roughness = mix(mix(0.6, innerRough, spots), mix(0.28, outerRough + 0.2, mottle * (1.0 - 0.5 * pits)), o);
    float h = mix(green * 1.2 + fWorley(p * 20.0).x * 0.6, pits * 0.3 + mottle * 0.15, o);
    s.normal = fBump(s.normal, vWorldPosition, h * 0.006, 1.0);
  }
}
`,Up=`
uniform vec3 glowColor;
uniform float glow;
uniform float molten;
uniform float burn;
void moltenSurface(inout Surface s, vec3 p) {
  if (glow <= 0.0) return;
  float flame = 1.0, hot = 0.0;
  if (burn > 0.0) {
    vec3 q = p * 3.0 + vec3(fNoise(p * 2.0), fNoise(p * 2.0 + 5.2), fNoise(p * 2.0 + 9.7)) * 1.5;
    float f = fNoise(q) * 0.55 + fNoise(q * 2.3) * 0.3 + fNoise(q * 5.1) * 0.15;
    hot = smoothstep(0.5, 0.75, f) * burn;
    flame = mix(1.0, 0.3 + 2.0 * f * f, burn);
    s.specular *= 1.0 - burn;
    s.roughness = mix(s.roughness, 1.0, burn);
  }
  vec2 w = fWorley(p * 7.0);
  float crack = 1.0 - smoothstep(0.0, 0.1 + 0.08 * fNoise(p * 9.0), w.y - w.x);
  float crust = molten * (1.0 - crack);
  s.albedo = mix(s.albedo, vec3(0.03, 0.025, 0.022), crust);
  s.roughness = mix(s.roughness, 0.85, crust);
  s.transmission *= 1.0 - crust;
  s.normal = fBump(s.normal, vWorldPosition, crust * w.x * 0.01, 1.0);
  s.emissive = (glowColor * flame + vec3(1.0, 0.42, 0.08) * hot * 2.5) * glow * mix(1.0, crack * (0.6 + 0.8 * fNoise(p * 4.0)), molten);
}
`,Op=()=>({glowColor:{value:new Te},glow:{value:0},molten:{value:0},burn:{value:0}});function yu(){return new Zs({roughness:.2,sheen:1,sheenColor:0,sheenRoughness:.4,uniforms:{fillColor:{value:new Te},fillRough:{value:.1},fillThrough:{value:1},sacs:{value:0},...Op()},fragmentPars:xu+Up+`uniform vec3 fillColor;
uniform float fillRough;
uniform float fillThrough;
uniform float sacs;`,surface:`
void surface(inout Surface s) {
  vec3 p = vObjectPosition;
  // Juice sacs run along the chunk's length.
  vec2 w = fWorley(vec3(p.x * 1.6, p.y * 6.0, p.z * 6.0));
  float sac = mix(1.0, smoothstep(0.02, 0.35, w.y - w.x), sacs);
  float glow = fNoise(p * 4.0);
  s.albedo = fillColor * mix(0.6, 1.1, sac) * (0.92 + 0.16 * glow);
  s.roughness = mix(0.35, fillRough, sac);
  s.transmission = fillColor * fillThrough;
  s.sheenColor = vec3(0.14) * sac;
  s.specular = 1.4;
  moltenSurface(s, p);
}
`})}function Mu({roughness:i=.05,specular:e=1.6,through:t=1}={}){return new Zs({roughness:i,uniforms:{plainColor:{value:new Te},plainSpecular:{value:e},plainThrough:{value:t},...Op()},fragmentPars:xu+Up+`uniform vec3 plainColor;
uniform float plainSpecular;
uniform float plainThrough;`,surface:`
void surface(inout Surface s) {
  s.albedo = plainColor * (0.94 + 0.12 * fNoise(vObjectPosition * 30.0));
  s.transmission = plainColor * plainThrough;
  s.specular = plainSpecular;
  moltenSurface(s, vObjectPosition);
}
`})}function Bp(i,e){let t=i.shell.uniforms,n=e.shell;t.outerColor.value.set(n.outer),t.innerColor.value.set(n.inner),t.outerRough.value=n.outerRough,t.innerRough.value=n.innerRough,t.rim.value=n.rim,t.pattern.value=n.pattern,t.outerSpecular.value=n.specular,t.through.value=n.through,t.outerMetal.value=n.metal??0,t.glowColor.value.set(n.glowColor??0),t.glow.value=n.glow??0,n.film&&t.film.value.set(n.film.index,n.film.base,n.film.thin,n.film.thick),t.rimColor.value.set(n.rimColor??0).multiplyScalar(n.rimLight??0);let s=(r,a)=>{r.uniforms.glowColor.value.set(a?.glowColor??0),r.uniforms.glow.value=a?.glow??0,r.uniforms.molten.value=a?.molten??0,r.uniforms.burn.value=a?.burn??0};if(s(i.fill,e.fill),s(i.fleck,e.fill),s(i.core,e.core),s(i.drop,e.spray.dropGlow),e.fill)for(let r of[i.fill,i.fleck]){let a=r.uniforms;a.fillColor.value.set(e.fill.color),a.fillRough.value=e.fill.rough,a.fillThrough.value=e.fill.through,a.sacs.value=e.fill.sacs}if(e.core){let r=i.core.uniforms;r.plainColor.value.set(e.core.color),r.plainSpecular.value=e.core.specular,r.roughness.value=e.core.rough}e.spray.dropColor!==void 0&&i.drop.uniforms.plainColor.value.set(e.spray.dropColor)}function kp(i){let e=_u({lite:!0});return Object.assign(e.uniforms,i.uniforms),e}var tc={shell:{thickness:.07,pieces:70,burst:"side",set:"grey",shell:{outer:15329508,inner:1776414,outerRough:.55,innerRough:.45,rim:.35,pattern:0,specular:1,through:0},core:{color:1315862,rough:.35,specular:1.2},spray:{drops:0,chips:1,flecks:0}},grapefruit:{thickness:.09,pieces:24,burst:"radial",set:"white",shell:{outer:16094224,inner:16181980,outerRough:.3,innerRough:.85,rim:.2,pattern:1,specular:1,through:.35},fill:{color:14694434,rough:.08,through:1.2,sacs:1,chunks:30,lumpy:1},spray:{drops:1,dropColor:15749674,chips:0,flecks:1}},porcelain:{thickness:.05,pieces:36,burst:"side",set:"white",shell:{outer:1916815,inner:15657182,outerRough:.06,innerRough:.8,rim:.12,pattern:0,specular:1.6,through:0},spray:{drops:0,chips:1,flecks:0}},egg:{thickness:.025,pieces:44,burst:"radial",set:"white",shell:{outer:13802090,inner:15986662,outerRough:.65,innerRough:.7,rim:.5,pattern:2,specular:.8,through:.4},fill:{color:15966732,rough:.06,through:1,sacs:0,chunks:14,lumpy:.4},spray:{drops:1,dropColor:16167454,chips:1,flecks:0}},chocolate:{thickness:.12,pieces:20,burst:"radial",set:"white",shell:{outer:3874062,inner:5910294,outerRough:.12,innerRough:.7,rim:.3,pattern:3,specular:1.3,through:0},fill:{color:13134356,rough:.05,through:.8,sacs:0,chunks:18,lumpy:.6},spray:{drops:1,dropColor:13134356,chips:1,flecks:0}},lava:{disabled:!0,thickness:.16,pieces:34,burst:"radial",set:"slate",shell:{outer:14868957,inner:3025964,outerRough:.95,innerRough:.8,rim:.28,pattern:4,specular:.5,through:0,glowColor:16721924,glow:6},core:{color:2757640,rough:.6,specular:1,glowColor:16726536,glow:6,molten:1},fill:{color:3807754,rough:.5,through:0,sacs:0,chunks:16,lumpy:.7,glowColor:16730636,glow:5,molten:.85},spray:{drops:.6,dropColor:2099200,dropGlow:{glowColor:16738844,glow:24},chips:1,flecks:0}},obsidian:{thickness:.045,pieces:80,burst:"side",set:"night",fracture:{warp:.05,stretch:.3},shell:{outer:328966,inner:3803136,outerRough:.04,innerRough:1,rim:.35,pattern:6,specular:.7,through:0,glowColor:16734734,glow:4,rimColor:3131647,rimLight:.35},spray:{drops:0,chips:.8,chipStretch:2.6,chipThin:.3,chipSize:.6,bigChips:0,flecks:0}},bronze:{thickness:.07,pieces:48,burst:"side",set:"dark",shell:{outer:8018484,inner:4157020,outerRough:.32,innerRough:.8,rim:.3,pattern:5,specular:1,through:0,metal:1},spray:{drops:0,chips:1,flecks:0}},iridescent:{thickness:.05,pieces:60,burst:"side",set:"dark",shell:{outer:0,inner:1710622,outerRough:.06,innerRough:.35,rim:.3,pattern:7,specular:1,through:0,film:{index:1.38,base:2.6,thin:260,thick:620}},spray:{drops:0,chips:1,chipThin:.6,chipSize:.8,flecks:0}}};wt();wt();wt();function O_(i,e=1e-5){let t=i.attributes.position,n=i.index,s=n?n.count:t.count,r=new Map,a=[],o=[],l=c=>{let h=t.getX(c),u=t.getY(c),f=t.getZ(c),p=`${Math.round(h/e)},${Math.round(u/e)},${Math.round(f/e)}`,d=r.get(p);return d===void 0&&(d=a.length/3,a.push(h,u,f),r.set(p,d)),d};for(let c=0;c+2<s;c+=3){let h=l(n?n.getX(c):c),u=l(n?n.getX(c+1):c+1),f=l(n?n.getX(c+2):c+2);h===u||u===f||f===h||o.push(h,u,f)}return{verts:a,faces:o}}function B_({verts:i,faces:e}){let t=i.length/3,n=e.length/3,s=new Map,r=(d,v)=>d<v?`${d},${v}`:`${v},${d}`,a=(d,v,g)=>{let m=r(d,v),_=s.get(m);return _||(_={a:d,b:v,opp:[],point:-1},s.set(m,_)),_.opp.push(g),_};for(let d=0;d<n;d++){let v=e[d*3],g=e[d*3+1],m=e[d*3+2];a(v,g,m),a(g,m,v),a(m,v,g)}let o=Array.from({length:t},()=>new Set),l=Array.from({length:t},()=>[]);for(let d of s.values())o[d.a].add(d.b),o[d.b].add(d.a),d.opp.length<2&&(l[d.a].push(d.b),l[d.b].push(d.a));let c=[],h=(d,v)=>i[d*3+v];for(let d of s.values())if(d.point=t+c.length/3,d.opp.length>=2){let[v,g]=d.opp;for(let m=0;m<3;m++)c.push(.375*(h(d.a,m)+h(d.b,m))+.125*(h(v,m)+h(g,m)))}else for(let v=0;v<3;v++)c.push(.5*(h(d.a,v)+h(d.b,v)));let u=new Float64Array(t*3);for(let d=0;d<t;d++){let v=l[d];if(v.length===2){for(let M=0;M<3;M++)u[d*3+M]=.75*h(d,M)+.125*(h(v[0],M)+h(v[1],M));continue}let g=[...o[d]],m=g.length;if(m===0){for(let M=0;M<3;M++)u[d*3+M]=h(d,M);continue}let _=.375+.25*Math.cos(2*Math.PI/m),T=1/m*(.625-_*_);for(let M=0;M<3;M++){let E=0;for(let w of g)E+=h(w,M);u[d*3+M]=(1-m*T)*h(d,M)+T*E}}let f=new Array(t*3+c.length);for(let d=0;d<t*3;d++)f[d]=u[d];for(let d=0;d<c.length;d++)f[t*3+d]=c[d];let p=[];for(let d=0;d<n;d++){let v=e[d*3],g=e[d*3+1],m=e[d*3+2],_=s.get(r(v,g)).point,T=s.get(r(g,m)).point,M=s.get(r(m,v)).point;p.push(v,_,M,_,g,T,M,T,m,_,T,M)}return{verts:f,faces:p}}function k_({verts:i,faces:e}){let t=new Ye;return t.setAttribute("position",new Mt(Float32Array.from(i),3)),t.setIndex(new Mt(i.length/3>65535?Uint32Array.from(e):Uint16Array.from(e),1)),t}function zp(i,e=1,t=2e5){let n=O_(i);for(let s=0;s<e&&!(n.faces.length/3*4>t);s++)n=B_(n);return k_(n)}function z_(i){let e=[],t=[],n=h=>h.map(u=>Math.round(u/1e-5)).join(",");for(let h of i.split(`
`)){let u=h.trim().split(/\s+/);if(u[0]==="v")e.push([+u[1],+u[2],+u[3]]);else if(u[0]==="f"){let f=u.slice(1).map(p=>{let d=parseInt(p.split("/")[0],10);return d<0?e.length+d:d-1});for(let p=1;p+1<f.length;p++){let d=[e[f[0]],e[f[p]],e[f[p+1]]];t.push({p:d,k:d.map(n)})}}}let s=new Set,r=t.filter(h=>{let u=[...h.k].sort().join("|");return!s.has(u)&&s.add(u)}),a=new Map,o=new Map,l=(h,u)=>h<u?h+"|"+u:u+"|"+h;for(let{k:h}of r){for(let u of h)a.set(u,(a.get(u)||0)+1);for(let u=0;u<3;u++)o.set(l(h[u],h[(u+1)%3]),(o.get(l(h[u],h[(u+1)%3]))||0)+1)}let c=({k:h})=>h.some(u=>a.get(u)===1)&&[0,1,2].some(u=>o.get(l(h[u],h[(u+1)%3]))>2);return Float32Array.from(r.filter(h=>!c(h)).flatMap(h=>h.p.flat()))}function Vp(i,e,t){let n=new Ye;n.setAttribute("position",new Mt(z_(i),3));let s=zp(n,e,1e9);if(t){let r=s.attributes.position.array,[a,o,l]=t.center,c=t.scale;for(let h=0;h<r.length;h+=3)r[h]=(r[h]-a)*c,r[h+1]=(r[h+1]-o)*c,r[h+2]=(r[h+2]-l)*c}return s}var V_=`# Blender3D v249 OBJ File: suzanne.blend
# www.blender3d.org
v 0.437500 0.164063 0.765625
v -0.437500 0.164063 0.765625
v 0.500000 0.093750 0.687500
v -0.500000 0.093750 0.687500
v 0.546875 0.054688 0.578125
v -0.546875 0.054688 0.578125
v 0.351563 -0.023438 0.617188
v -0.351563 -0.023438 0.617188
v 0.351563 0.031250 0.718750
v -0.351563 0.031250 0.718750
v 0.351563 0.132813 0.781250
v -0.351563 0.132813 0.781250
v 0.273438 0.164063 0.796875
v -0.273438 0.164063 0.796875
v 0.203125 0.093750 0.742188
v -0.203125 0.093750 0.742188
v 0.156250 0.054688 0.648438
v -0.156250 0.054688 0.648438
v 0.078125 0.242188 0.656250
v -0.078125 0.242188 0.656250
v 0.140625 0.242188 0.742188
v -0.140625 0.242188 0.742188
v 0.242188 0.242188 0.796875
v -0.242188 0.242188 0.796875
v 0.273438 0.328125 0.796875
v -0.273438 0.328125 0.796875
v 0.203125 0.390625 0.742188
v -0.203125 0.390625 0.742188
v 0.156250 0.437500 0.648438
v -0.156250 0.437500 0.648438
v 0.351563 0.515625 0.617188
v -0.351563 0.515625 0.617188
v 0.351563 0.453125 0.718750
v -0.351563 0.453125 0.718750
v 0.351563 0.359375 0.781250
v -0.351563 0.359375 0.781250
v 0.437500 0.328125 0.765625
v -0.437500 0.328125 0.765625
v 0.500000 0.390625 0.687500
v -0.500000 0.390625 0.687500
v 0.546875 0.437500 0.578125
v -0.546875 0.437500 0.578125
v 0.625000 0.242188 0.562500
v -0.625000 0.242188 0.562500
v 0.562500 0.242188 0.671875
v -0.562500 0.242188 0.671875
v 0.468750 0.242188 0.757813
v -0.468750 0.242188 0.757813
v 0.476563 0.242188 0.773438
v -0.476563 0.242188 0.773438
v 0.445313 0.335938 0.781250
v -0.445313 0.335938 0.781250
v 0.351563 0.375000 0.804688
v -0.351563 0.375000 0.804688
v 0.265625 0.335938 0.820313
v -0.265625 0.335938 0.820313
v 0.226563 0.242188 0.820313
v -0.226563 0.242188 0.820313
v 0.265625 0.156250 0.820313
v -0.265625 0.156250 0.820313
v 0.351563 0.242188 0.828125
v -0.351563 0.242188 0.828125
v 0.351563 0.117188 0.804688
v -0.351563 0.117188 0.804688
v 0.445313 0.156250 0.781250
v -0.445313 0.156250 0.781250
v 0.000000 0.429688 0.742188
v 0.000000 0.351563 0.820313
v 0.000000 -0.679688 0.734375
v 0.000000 -0.320313 0.781250
v 0.000000 -0.187500 0.796875
v 0.000000 -0.773438 0.718750
v 0.000000 0.406250 0.601563
v 0.000000 0.570313 0.570313
v 0.000000 0.898438 -0.546875
v 0.000000 0.562500 -0.851563
v 0.000000 0.070313 -0.828125
v 0.000000 -0.382813 -0.351563
v 0.203125 -0.187500 0.562500
v -0.203125 -0.187500 0.562500
v 0.312500 -0.437500 0.570313
v -0.312500 -0.437500 0.570313
v 0.351563 -0.695313 0.570313
v -0.351563 -0.695313 0.570313
v 0.367188 -0.890625 0.531250
v -0.367188 -0.890625 0.531250
v 0.328125 -0.945313 0.523438
v -0.328125 -0.945313 0.523438
v 0.179688 -0.968750 0.554688
v -0.179688 -0.968750 0.554688
v 0.000000 -0.984375 0.578125
v 0.437500 -0.140625 0.531250
v -0.437500 -0.140625 0.531250
v 0.632813 -0.039063 0.539063
v -0.632813 -0.039063 0.539063
v 0.828125 0.148438 0.445313
v -0.828125 0.148438 0.445313
v 0.859375 0.429688 0.593750
v -0.859375 0.429688 0.593750
v 0.710938 0.484375 0.625000
v -0.710938 0.484375 0.625000
v 0.492188 0.601563 0.687500
v -0.492188 0.601563 0.687500
v 0.320313 0.757813 0.734375
v -0.320313 0.757813 0.734375
v 0.156250 0.718750 0.757813
v -0.156250 0.718750 0.757813
v 0.062500 0.492188 0.750000
v -0.062500 0.492188 0.750000
v 0.164063 0.414063 0.773438
v -0.164063 0.414063 0.773438
v 0.125000 0.304688 0.765625
v -0.125000 0.304688 0.765625
v 0.203125 0.093750 0.742188
v -0.203125 0.093750 0.742188
v 0.375000 0.015625 0.703125
v -0.375000 0.015625 0.703125
v 0.492188 0.062500 0.671875
v -0.492188 0.062500 0.671875
v 0.625000 0.187500 0.648438
v -0.625000 0.187500 0.648438
v 0.640625 0.296875 0.648438
v -0.640625 0.296875 0.648438
v 0.601563 0.375000 0.664063
v -0.601563 0.375000 0.664063
v 0.429688 0.437500 0.718750
v -0.429688 0.437500 0.718750
v 0.250000 0.468750 0.757813
v -0.250000 0.468750 0.757813
v 0.000000 -0.765625 0.734375
v 0.109375 -0.718750 0.734375
v -0.109375 -0.718750 0.734375
v 0.117188 -0.835938 0.710938
v -0.117188 -0.835938 0.710938
v 0.062500 -0.882813 0.695313
v -0.062500 -0.882813 0.695313
v 0.000000 -0.890625 0.687500
v 0.000000 -0.195313 0.750000
v 0.000000 -0.140625 0.742188
v 0.101563 -0.148438 0.742188
v -0.101563 -0.148438 0.742188
v 0.125000 -0.226563 0.750000
v -0.125000 -0.226563 0.750000
v 0.085938 -0.289063 0.742188
v -0.085938 -0.289063 0.742188
v 0.398438 -0.046875 0.671875
v -0.398438 -0.046875 0.671875
v 0.617188 0.054688 0.625000
v -0.617188 0.054688 0.625000
v 0.726563 0.203125 0.601563
v -0.726563 0.203125 0.601563
v 0.742188 0.375000 0.656250
v -0.742188 0.375000 0.656250
v 0.687500 0.414063 0.726563
v -0.687500 0.414063 0.726563
v 0.437500 0.546875 0.796875
v -0.437500 0.546875 0.796875
v 0.312500 0.640625 0.835938
v -0.312500 0.640625 0.835938
v 0.203125 0.617188 0.851563
v -0.203125 0.617188 0.851563
v 0.101563 0.429688 0.843750
v -0.101563 0.429688 0.843750
v 0.125000 -0.101563 0.812500
v -0.125000 -0.101563 0.812500
v 0.210938 -0.445313 0.710938
v -0.210938 -0.445313 0.710938
v 0.250000 -0.703125 0.687500
v -0.250000 -0.703125 0.687500
v 0.265625 -0.820313 0.664063
v -0.265625 -0.820313 0.664063
v 0.234375 -0.914063 0.632813
v -0.234375 -0.914063 0.632813
v 0.164063 -0.929688 0.632813
v -0.164063 -0.929688 0.632813
v 0.000000 -0.945313 0.640625
v 0.000000 0.046875 0.726563
v 0.000000 0.210938 0.765625
v 0.328125 0.476563 0.742188
v -0.328125 0.476563 0.742188
v 0.164063 0.140625 0.750000
v -0.164063 0.140625 0.750000
v 0.132813 0.210938 0.757813
v -0.132813 0.210938 0.757813
v 0.117188 -0.687500 0.734375
v -0.117188 -0.687500 0.734375
v 0.078125 -0.445313 0.750000
v -0.078125 -0.445313 0.750000
v 0.000000 -0.445313 0.750000
v 0.000000 -0.328125 0.742188
v 0.093750 -0.273438 0.781250
v -0.093750 -0.273438 0.781250
v 0.132813 -0.226563 0.796875
v -0.132813 -0.226563 0.796875
v 0.109375 -0.132813 0.781250
v -0.109375 -0.132813 0.781250
v 0.039063 -0.125000 0.781250
v -0.039063 -0.125000 0.781250
v 0.000000 -0.203125 0.828125
v 0.046875 -0.148438 0.812500
v -0.046875 -0.148438 0.812500
v 0.093750 -0.156250 0.812500
v -0.093750 -0.156250 0.812500
v 0.109375 -0.226563 0.828125
v -0.109375 -0.226563 0.828125
v 0.078125 -0.250000 0.804688
v -0.078125 -0.250000 0.804688
v 0.000000 -0.289063 0.804688
v 0.257813 -0.312500 0.554688
v -0.257813 -0.312500 0.554688
v 0.164063 -0.242188 0.710938
v -0.164063 -0.242188 0.710938
v 0.179688 -0.312500 0.710938
v -0.179688 -0.312500 0.710938
v 0.234375 -0.250000 0.554688
v -0.234375 -0.250000 0.554688
v 0.000000 -0.875000 0.687500
v 0.046875 -0.867188 0.687500
v -0.046875 -0.867188 0.687500
v 0.093750 -0.820313 0.710938
v -0.093750 -0.820313 0.710938
v 0.093750 -0.742188 0.726563
v -0.093750 -0.742188 0.726563
v 0.000000 -0.781250 0.656250
v 0.093750 -0.750000 0.664063
v -0.093750 -0.750000 0.664063
v 0.093750 -0.812500 0.640625
v -0.093750 -0.812500 0.640625
v 0.046875 -0.851563 0.632813
v -0.046875 -0.851563 0.632813
v 0.000000 -0.859375 0.632813
v 0.171875 0.218750 0.781250
v -0.171875 0.218750 0.781250
v 0.187500 0.156250 0.773438
v -0.187500 0.156250 0.773438
v 0.335938 0.429688 0.757813
v -0.335938 0.429688 0.757813
v 0.273438 0.421875 0.773438
v -0.273438 0.421875 0.773438
v 0.421875 0.398438 0.773438
v -0.421875 0.398438 0.773438
v 0.562500 0.351563 0.695313
v -0.562500 0.351563 0.695313
v 0.585938 0.289063 0.687500
v -0.585938 0.289063 0.687500
v 0.578125 0.195313 0.679688
v -0.578125 0.195313 0.679688
v 0.476563 0.101563 0.718750
v -0.476563 0.101563 0.718750
v 0.375000 0.062500 0.742188
v -0.375000 0.062500 0.742188
v 0.226563 0.109375 0.781250
v -0.226563 0.109375 0.781250
v 0.179688 0.296875 0.781250
v -0.179688 0.296875 0.781250
v 0.210938 0.375000 0.781250
v -0.210938 0.375000 0.781250
v 0.234375 0.359375 0.757813
v -0.234375 0.359375 0.757813
v 0.195313 0.296875 0.757813
v -0.195313 0.296875 0.757813
v 0.242188 0.125000 0.757813
v -0.242188 0.125000 0.757813
v 0.375000 0.085938 0.726563
v -0.375000 0.085938 0.726563
v 0.460938 0.117188 0.703125
v -0.460938 0.117188 0.703125
v 0.546875 0.210938 0.671875
v -0.546875 0.210938 0.671875
v 0.554688 0.281250 0.671875
v -0.554688 0.281250 0.671875
v 0.531250 0.335938 0.679688
v -0.531250 0.335938 0.679688
v 0.414063 0.390625 0.750000
v -0.414063 0.390625 0.750000
v 0.281250 0.398438 0.765625
v -0.281250 0.398438 0.765625
v 0.335938 0.406250 0.750000
v -0.335938 0.406250 0.750000
v 0.203125 0.171875 0.750000
v -0.203125 0.171875 0.750000
v 0.195313 0.226563 0.750000
v -0.195313 0.226563 0.750000
v 0.109375 0.460938 0.609375
v -0.109375 0.460938 0.609375
v 0.195313 0.664063 0.617188
v -0.195313 0.664063 0.617188
v 0.335938 0.687500 0.593750
v -0.335938 0.687500 0.593750
v 0.484375 0.554688 0.554688
v -0.484375 0.554688 0.554688
v 0.679688 0.453125 0.492188
v -0.679688 0.453125 0.492188
v 0.796875 0.406250 0.460938
v -0.796875 0.406250 0.460938
v 0.773438 0.164063 0.375000
v -0.773438 0.164063 0.375000
v 0.601563 0.000000 0.414063
v -0.601563 0.000000 0.414063
v 0.437500 -0.093750 0.468750
v -0.437500 -0.093750 0.468750
v 0.000000 0.898438 0.289063
v 0.000000 0.984375 -0.078125
v 0.000000 -0.195313 -0.671875
v 0.000000 -0.460938 0.187500
v 0.000000 -0.976563 0.460938
v 0.000000 -0.804688 0.343750
v 0.000000 -0.570313 0.320313
v 0.000000 -0.484375 0.281250
v 0.851563 0.234375 0.054688
v -0.851563 0.234375 0.054688
v 0.859375 0.320313 -0.046875
v -0.859375 0.320313 -0.046875
v 0.773438 0.265625 -0.437500
v -0.773438 0.265625 -0.437500
v 0.460938 0.437500 -0.703125
v -0.460938 0.437500 -0.703125
v 0.734375 -0.046875 0.070313
v -0.734375 -0.046875 0.070313
v 0.593750 -0.125000 -0.164063
v -0.593750 -0.125000 -0.164063
v 0.640625 -0.007813 -0.429688
v -0.640625 -0.007813 -0.429688
v 0.335938 0.054688 -0.664063
v -0.335938 0.054688 -0.664063
v 0.234375 -0.351563 0.406250
v -0.234375 -0.351563 0.406250
v 0.179688 -0.414063 0.257813
v -0.179688 -0.414063 0.257813
v 0.289063 -0.710938 0.382813
v -0.289063 -0.710938 0.382813
v 0.250000 -0.500000 0.390625
v -0.250000 -0.500000 0.390625
v 0.328125 -0.914063 0.398438
v -0.328125 -0.914063 0.398438
v 0.140625 -0.757813 0.367188
v -0.140625 -0.757813 0.367188
v 0.125000 -0.539063 0.359375
v -0.125000 -0.539063 0.359375
v 0.164063 -0.945313 0.437500
v -0.164063 -0.945313 0.437500
v 0.218750 -0.281250 0.429688
v -0.218750 -0.281250 0.429688
v 0.210938 -0.226563 0.468750
v -0.210938 -0.226563 0.468750
v 0.203125 -0.171875 0.500000
v -0.203125 -0.171875 0.500000
v 0.210938 -0.390625 0.164063
v -0.210938 -0.390625 0.164063
v 0.296875 -0.312500 -0.265625
v -0.296875 -0.312500 -0.265625
v 0.343750 -0.148438 -0.539063
v -0.343750 -0.148438 -0.539063
v 0.453125 0.867188 -0.382813
v -0.453125 0.867188 -0.382813
v 0.453125 0.929688 -0.070313
v -0.453125 0.929688 -0.070313
v 0.453125 0.851563 0.234375
v -0.453125 0.851563 0.234375
v 0.460938 0.523438 0.429688
v -0.460938 0.523438 0.429688
v 0.726563 0.406250 0.335938
v -0.726563 0.406250 0.335938
v 0.632813 0.453125 0.281250
v -0.632813 0.453125 0.281250
v 0.640625 0.703125 0.054688
v -0.640625 0.703125 0.054688
v 0.796875 0.562500 0.125000
v -0.796875 0.562500 0.125000
v 0.796875 0.617188 -0.117188
v -0.796875 0.617188 -0.117188
v 0.640625 0.750000 -0.195313
v -0.640625 0.750000 -0.195313
v 0.640625 0.679688 -0.445313
v -0.640625 0.679688 -0.445313
v 0.796875 0.539063 -0.359375
v -0.796875 0.539063 -0.359375
v 0.617188 0.328125 -0.585938
v -0.617188 0.328125 -0.585938
v 0.484375 0.023438 -0.546875
v -0.484375 0.023438 -0.546875
v 0.820313 0.328125 -0.203125
v -0.820313 0.328125 -0.203125
v 0.406250 -0.171875 0.148438
v -0.406250 -0.171875 0.148438
v 0.429688 -0.195313 -0.210938
v -0.429688 -0.195313 -0.210938
v 0.890625 0.406250 -0.234375
v -0.890625 0.406250 -0.234375
v 0.773438 -0.140625 -0.125000
v -0.773438 -0.140625 -0.125000
v 1.039063 -0.101563 -0.328125
v -1.039063 -0.101563 -0.328125
v 1.281250 0.054688 -0.429688
v -1.281250 0.054688 -0.429688
v 1.351563 0.320313 -0.421875
v -1.351563 0.320313 -0.421875
v 1.234375 0.507813 -0.421875
v -1.234375 0.507813 -0.421875
v 1.023438 0.476563 -0.312500
v -1.023438 0.476563 -0.312500
v 1.015625 0.414063 -0.289063
v -1.015625 0.414063 -0.289063
v 1.187500 0.437500 -0.390625
v -1.187500 0.437500 -0.390625
v 1.265625 0.289063 -0.406250
v -1.265625 0.289063 -0.406250
v 1.210938 0.078125 -0.406250
v -1.210938 0.078125 -0.406250
v 1.031250 -0.039063 -0.304688
v -1.031250 -0.039063 -0.304688
v 0.828125 -0.070313 -0.132813
v -0.828125 -0.070313 -0.132813
v 0.921875 0.359375 -0.218750
v -0.921875 0.359375 -0.218750
v 0.945313 0.304688 -0.289063
v -0.945313 0.304688 -0.289063
v 0.882813 -0.023438 -0.210938
v -0.882813 -0.023438 -0.210938
v 1.039063 0.000000 -0.367188
v -1.039063 0.000000 -0.367188
v 1.187500 0.093750 -0.445313
v -1.187500 0.093750 -0.445313
v 1.234375 0.250000 -0.445313
v -1.234375 0.250000 -0.445313
v 1.171875 0.359375 -0.437500
v -1.171875 0.359375 -0.437500
v 1.023438 0.343750 -0.359375
v -1.023438 0.343750 -0.359375
v 0.843750 0.289063 -0.210938
v -0.843750 0.289063 -0.210938
v 0.835938 0.171875 -0.273438
v -0.835938 0.171875 -0.273438
v 0.757813 0.093750 -0.273438
v -0.757813 0.093750 -0.273438
v 0.820313 0.085938 -0.273438
v -0.820313 0.085938 -0.273438
v 0.843750 0.015625 -0.273438
v -0.843750 0.015625 -0.273438
v 0.812500 -0.015625 -0.273438
v -0.812500 -0.015625 -0.273438
v 0.726563 0.000000 -0.070313
v -0.726563 0.000000 -0.070313
v 0.718750 -0.023438 -0.171875
v -0.718750 -0.023438 -0.171875
v 0.718750 0.039063 -0.187500
v -0.718750 0.039063 -0.187500
v 0.796875 0.203125 -0.210938
v -0.796875 0.203125 -0.210938
v 0.890625 0.242188 -0.265625
v -0.890625 0.242188 -0.265625
v 0.890625 0.234375 -0.320313
v -0.890625 0.234375 -0.320313
v 0.812500 -0.015625 -0.320313
v -0.812500 -0.015625 -0.320313
v 0.851563 0.015625 -0.320313
v -0.851563 0.015625 -0.320313
v 0.828125 0.078125 -0.320313
v -0.828125 0.078125 -0.320313
v 0.765625 0.093750 -0.320313
v -0.765625 0.093750 -0.320313
v 0.843750 0.171875 -0.320313
v -0.843750 0.171875 -0.320313
v 1.039063 0.328125 -0.414063
v -1.039063 0.328125 -0.414063
v 1.187500 0.343750 -0.484375
v -1.187500 0.343750 -0.484375
v 1.257813 0.242188 -0.492188
v -1.257813 0.242188 -0.492188
v 1.210938 0.085938 -0.484375
v -1.210938 0.085938 -0.484375
v 1.046875 0.000000 -0.421875
v -1.046875 0.000000 -0.421875
v 0.882813 -0.015625 -0.265625
v -0.882813 -0.015625 -0.265625
v 0.953125 0.289063 -0.343750
v -0.953125 0.289063 -0.343750
v 0.890625 0.109375 -0.328125
v -0.890625 0.109375 -0.328125
v 0.937500 0.062500 -0.335938
v -0.937500 0.062500 -0.335938
v 1.000000 0.125000 -0.367188
v -1.000000 0.125000 -0.367188
v 0.960938 0.171875 -0.351563
v -0.960938 0.171875 -0.351563
v 1.015625 0.234375 -0.375000
v -1.015625 0.234375 -0.375000
v 1.054688 0.187500 -0.382813
v -1.054688 0.187500 -0.382813
v 1.109375 0.210938 -0.390625
v -1.109375 0.210938 -0.390625
v 1.085938 0.273438 -0.390625
v -1.085938 0.273438 -0.390625
v 1.023438 0.437500 -0.484375
v -1.023438 0.437500 -0.484375
v 1.250000 0.468750 -0.546875
v -1.250000 0.468750 -0.546875
v 1.367188 0.296875 -0.500000
v -1.367188 0.296875 -0.500000
v 1.312500 0.054688 -0.531250
v -1.312500 0.054688 -0.531250
v 1.039063 -0.085938 -0.492188
v -1.039063 -0.085938 -0.492188
v 0.789063 -0.125000 -0.328125
v -0.789063 -0.125000 -0.328125
v 0.859375 0.382813 -0.382813
v -0.859375 0.382813 -0.382813
v -1.023438 0.476563 -0.312500
v -1.234375 0.507813 -0.421875
v -0.890625 0.406250 -0.234375
v -0.820313 0.328125 -0.203125
vt 0.315596 0.792535
vt 0.331462 0.787091
vt 0.331944 0.799704
vt 0.049262 0.798007
vt 0.050304 0.785428
vt 0.065913 0.791570
vt 0.321453 0.778649
vt 0.060677 0.777438
vt 0.310368 0.778802
vt 0.071744 0.778083
vt 0.302416 0.786560
vt 0.079345 0.786186
vt 0.301514 0.798474
vt 0.079717 0.798128
vt 0.308740 0.806873
vt 0.072125 0.806199
vt 0.321648 0.808687
vt 0.059149 0.807438
vt 0.048462 0.201858
vt 0.040084 0.207259
vt 0.043232 0.202821
vt 0.043249 0.220655
vt 0.040093 0.216224
vt 0.048480 0.221607
vt 0.563710 0.649220
vt 0.540594 0.657349
vt 0.547067 0.627433
vt 0.974643 0.218739
vt 0.968169 0.188824
vt 0.991286 0.196952
vt 0.166564 0.702856
vt 0.160061 0.635503
vt 0.218800 0.643864
vt 0.646379 0.202310
vt 0.587641 0.210669
vt 0.594146 0.143318
vt 0.231653 0.710981
vt 0.181122 0.727399
vt 0.174315 0.716236
vt 0.601897 0.129938
vt 0.608704 0.118775
vt 0.659234 0.135195
vt 0.266169 0.503056
vt 0.270502 0.531304
vt 0.237927 0.525958
vt 0.665505 0.320215
vt 0.698081 0.314870
vt 0.693747 0.343118
vt 0.392095 0.783569
vt 0.421339 0.774990
vt 0.422693 0.793271
vt 0.628129 0.465996
vt 0.613733 0.456434
vt 0.634389 0.436387
vt 0.501778 0.870396
vt 0.507486 0.857499
vt 0.528577 0.865850
vt 0.643384 0.583025
vt 0.644052 0.562152
vt 0.656465 0.561923
vt 0.766386 0.787223
vt 0.745292 0.810963
vt 0.708792 0.802136
vt 0.769147 0.634951
vt 0.732033 0.641034
vt 0.711181 0.618495
vt 0.849461 0.545148
vt 0.823375 0.497849
vt 0.897469 0.500666
vt 0.902318 0.546395
vt 0.572425 0.679855
vt 0.643837 0.668801
vt 0.623443 0.718088
vt 0.572425 0.724426
vt 0.726607 0.540494
vt 0.753364 0.518460
vt 0.715449 0.680462
vt 0.749227 0.698466
vt 0.695922 0.534580
vt 0.693526 0.510498
vt 0.772837 0.655221
vt 0.784620 0.679820
vt 0.718163 0.580185
vt 0.809389 0.599417
vt 0.761761 0.743313
vt 0.667750 0.767676
vt 0.693110 0.564191
vt 0.797155 0.722534
vt 0.682009 0.616616
vt 0.795802 0.787304
vt 0.719538 0.655221
vt 0.756895 0.826983
vt 0.782765 0.655221
vt 0.695179 0.821970
vt 0.843059 0.610497
vt 0.635588 0.780626
vt 0.634422 0.561399
vt 0.628274 0.581967
vt 0.511020 0.847430
vt 0.533908 0.850607
vt 0.633815 0.551490
vt 0.613046 0.571327
vt 0.530368 0.831407
vt 0.501394 0.842435
vt 0.626589 0.538875
vt 0.604527 0.544684
vt 0.508929 0.810914
vt 0.492547 0.829318
vt 0.618247 0.522587
vt 0.602583 0.501781
vt 0.480939 0.813120
vt 0.469234 0.787943
vt 0.616652 0.502716
vt 0.613925 0.497595
vt 0.459358 0.796431
vt 0.462840 0.801566
vt 0.644899 0.511966
vt 0.630336 0.517087
vt 0.628893 0.504351
vt 0.635735 0.498392
vt 0.458270 0.813966
vt 0.469630 0.821874
vt 0.457144 0.833207
vt 0.449054 0.817297
vt 0.637359 0.534149
vt 0.654293 0.524569
vt 0.464258 0.849211
vt 0.482600 0.837505
vt 0.644187 0.548520
vt 0.659377 0.540935
vt 0.478087 0.863369
vt 0.493557 0.851414
vt 0.597230 0.539263
vt 0.595257 0.495349
vt 0.466971 0.777596
vt 0.507407 0.801398
vt 0.605628 0.572478
vt 0.534801 0.825096
vt 0.627145 0.592333
vt 0.544318 0.853620
vt 0.651887 0.586528
vt 0.528822 0.875551
vt 0.665532 0.557472
vt 0.492878 0.878439
vt 0.669345 0.535984
vt 0.467321 0.871200
vt 0.612569 0.491986
vt 0.454710 0.792385
vt 0.619277 0.495381
vt 0.454636 0.800448
vt 0.628580 0.496763
vt 0.451294 0.809743
vt 0.636682 0.490206
vt 0.440853 0.813605
vt 0.652342 0.504728
vt 0.446182 0.836397
vt 0.664409 0.519225
vt 0.453285 0.856119
vt 0.666191 0.492411
vt 0.717596 0.474672
vt 0.382398 0.879324
vt 0.427166 0.842398
vt 0.681733 0.511408
vt 0.427493 0.877628
vt 0.435523 0.867805
vt 0.685777 0.532869
vt 0.453231 0.887054
vt 0.588528 0.478377
vt 0.454313 0.762782
vt 0.446975 0.900429
vt 0.713425 0.237886
vt 0.709019 0.215724
vt 0.755152 0.224403
vt 0.762923 0.242445
vt 0.327574 0.621771
vt 0.281440 0.630451
vt 0.285847 0.608289
vt 0.335345 0.603729
vt 0.576794 0.465515
vt 0.583867 0.423087
vt 0.405805 0.730353
vt 0.448347 0.745304
vt 0.686035 0.253032
vt 0.258456 0.593142
vt 0.683851 0.556229
vt 0.482266 0.899349
vt 0.670531 0.597684
vt 0.532990 0.898426
vt 0.630909 0.604157
vt 0.553941 0.861896
vt 0.596864 0.576275
vt 0.542184 0.818594
vt 0.585561 0.529242
vt 0.503791 0.785451
vt 0.572425 0.529736
vt 0.510638 0.773572
vt 0.587548 0.588270
vt 0.557294 0.815416
vt 0.629961 0.623919
vt 0.572425 0.868524
vt 0.548104 0.914571
vt 0.488130 0.914571
vt 0.658830 0.266292
vt 0.631691 0.281488
vt 0.204112 0.564686
vt 0.231252 0.579881
vt 0.706402 0.288928
vt 0.278823 0.557246
vt 0.743528 0.317934
vt 0.752264 0.346660
vt 0.324686 0.499513
vt 0.315950 0.528240
vt 0.743309 0.289810
vt 0.315731 0.556363
vt 0.700326 0.147967
vt 0.272746 0.698208
vt 0.795874 0.266472
vt 0.775660 0.289442
vt 0.757507 0.263314
vt 0.348083 0.556732
vt 0.329929 0.582860
vt 0.368297 0.579702
vt 0.804056 0.232825
vt 0.376478 0.613349
vt 0.810124 0.179100
vt 0.382547 0.667075
vt 0.753847 0.157090
vt 0.811201 0.146834
vt 0.383624 0.699341
vt 0.326269 0.689085
vt 0.879685 0.183943
vt 0.888071 0.157228
vt 0.460496 0.688946
vt 0.452109 0.662231
vt 0.925222 0.140531
vt 0.947451 0.149372
vt 0.519876 0.696801
vt 0.497647 0.705643
vt 0.876420 0.258223
vt 0.946138 0.286262
vt 0.518561 0.559910
vt 0.448843 0.587951
vt 0.829953 0.196170
vt 0.837053 0.152275
vt 0.409477 0.693900
vt 0.402377 0.650004
vt 0.829888 0.255993
vt 0.402311 0.590181
vt 0.852096 0.297194
vt 0.813695 0.289418
vt 0.424519 0.548979
vt 0.386117 0.556756
vt 0.820842 0.328587
vt 0.789451 0.311961
vt 0.393264 0.517587
vt 0.361873 0.534212
vt 0.840465 0.403536
vt 0.762603 0.423087
vt 0.412887 0.442637
vt 0.335024 0.423087
vt 0.909248 0.345901
vt 0.481670 0.500271
vt 0.676670 0.402805
vt 0.249092 0.443369
vt 0.573469 0.193539
vt 0.579214 0.151927
vt 0.151632 0.694246
vt 0.145888 0.652633
vt 0.546919 0.227092
vt 0.536510 0.214419
vt 0.119340 0.619080
vt 0.108931 0.631753
vt 0.588792 0.317539
vt 0.161214 0.528634
vt 0.630429 0.371564
vt 0.202851 0.474609
vt 0.657494 0.118541
vt 0.164237 0.319427
vt 0.169464 0.304721
vt 0.210459 0.345510
vt 0.169574 0.118572
vt 0.164356 0.103821
vt 0.210731 0.077759
vt 0.229913 0.727634
vt 0.589956 0.115821
vt 0.153468 0.300432
vt 0.153526 0.122857
vt 0.162374 0.730353
vt 0.578472 0.119429
vt 0.553653 0.120209
vt 0.126070 0.725964
vt 0.150890 0.726744
vt 0.546510 0.159800
vt 0.509384 0.119033
vt 0.081800 0.727137
vt 0.118929 0.686371
vt 0.534072 0.185482
vt 0.106492 0.660689
vt 0.462352 0.161885
vt 0.478174 0.145123
vt 0.493641 0.175543
vt 0.505521 0.150780
vt 0.077939 0.695390
vt 0.050592 0.701044
vt 0.066060 0.670626
vt 0.034770 0.684282
vt 0.476706 0.124129
vt 0.049122 0.722039
vt 0.465324 0.131169
vt 0.037741 0.714998
vt 0.446348 0.149671
vt 0.018765 0.696495
vt 0.445483 0.184898
vt 0.427581 0.175095
vt 0.000000 0.671069
vt 0.017903 0.661268
vt 0.480167 0.198327
vt 0.052588 0.647841
vt 0.521714 0.207472
vt 0.094135 0.638699
vt 0.701979 0.120236
vt 0.274400 0.725940
vt 0.757541 0.138176
vt 0.329963 0.708000
vt 0.817327 0.117813
vt 0.389751 0.728363
vt 0.844767 0.126748
vt 0.417191 0.719428
vt 0.893893 0.126476
vt 0.466319 0.719698
vt 0.936543 0.115821
vt 0.508970 0.730353
vt 0.965717 0.128368
vt 0.538144 0.717805
vt 0.989276 0.166159
vt 0.561701 0.680013
vt 1.000000 0.175243
vt 0.572425 0.670929
vt 0.289028 0.269037
vt 0.283878 0.263049
vt 0.299187 0.258321
vt 0.300964 0.267357
vt 0.299421 0.165436
vt 0.284101 0.160633
vt 0.289287 0.154655
vt 0.301244 0.156393
vt 0.317793 0.260767
vt 0.316733 0.267304
vt 0.318078 0.163079
vt 0.317052 0.156521
vt 0.335398 0.269583
vt 0.330421 0.276220
vt 0.335777 0.154335
vt 0.330824 0.147649
vt 0.278552 0.277080
vt 0.273734 0.272912
vt 0.273975 0.150706
vt 0.278818 0.146548
vt 0.271078 0.306358
vt 0.264864 0.305818
vt 0.265194 0.117691
vt 0.271427 0.117166
vt 0.278613 0.324240
vt 0.274006 0.327477
vt 0.274436 0.095993
vt 0.279049 0.099253
vt 0.298062 0.342565
vt 0.294660 0.349561
vt 0.295240 0.073895
vt 0.298634 0.080932
vt 0.312476 0.342961
vt 0.315033 0.350198
vt 0.315702 0.073322
vt 0.313108 0.080584
vt 0.323281 0.337709
vt 0.328696 0.344302
vt 0.329405 0.079293
vt 0.323940 0.085897
vt 0.335361 0.313857
vt 0.339396 0.315576
vt 0.340031 0.108187
vt 0.335968 0.109893
vt 0.339920 0.298303
vt 0.345292 0.298556
vt 0.345869 0.125306
vt 0.340471 0.125531
vt 0.339277 0.286081
vt 0.344398 0.284332
vt 0.344895 0.139582
vt 0.339764 0.137799
vt 0.345671 0.260159
vt 0.355483 0.280619
vt 0.356003 0.143373
vt 0.346021 0.163854
vt 0.356162 0.297750
vt 0.356783 0.126174
vt 0.349494 0.319809
vt 0.350195 0.103982
vt 0.333524 0.354692
vt 0.334295 0.068869
vt 0.317323 0.364551
vt 0.318050 0.058911
vt 0.293154 0.361782
vt 0.293765 0.061619
vt 0.263750 0.335417
vt 0.264168 0.087998
vt 0.251373 0.309082
vt 0.251676 0.114380
vt 0.264926 0.265507
vt 0.265122 0.158092
vt 0.278030 0.255522
vt 0.278212 0.168150
vt 0.320744 0.246538
vt 0.320956 0.177355
vt 0.296570 0.247318
vt 0.296748 0.176443
vt 0.038845 0.211743
vt 0.047440 0.211734
vt 0.055230 0.211728
vt 0.057303 0.228458
vt 0.057278 0.194991
vt 0.041287 0.229096
vt 0.041253 0.194380
vt 0.032564 0.220061
vt 0.032546 0.203437
vt 0.030743 0.211752
vt 0.029931 0.223131
vt 0.028053 0.211756
vt 0.029906 0.200372
vt 0.038587 0.233067
vt 0.038544 0.190412
vt 0.061533 0.231825
vt 0.061505 0.191616
vt 0.057382 0.211726
vt 0.168191 0.258703
vt 0.213958 0.246887
vt 0.214040 0.176591
vt 0.168236 0.164676
vt 0.148297 0.258447
vt 0.138777 0.299079
vt 0.138791 0.124216
vt 0.148319 0.164919
vt 0.115455 0.259296
vt 0.109657 0.296761
vt 0.109611 0.126556
vt 0.115440 0.164070
vt 0.119233 0.228698
vt 0.156540 0.233552
vt 0.156556 0.189842
vt 0.119230 0.194690
vt 0.173998 0.244074
vt 0.174035 0.179329
vt 0.195860 0.238258
vt 0.195909 0.185188
vt 0.203534 0.211734
vt 0.252997 0.211802
vt 0.171285 0.225095
vt 0.164455 0.211704
vt 0.180017 0.211713
vt 0.177113 0.227468
vt 0.171300 0.198319
vt 0.177134 0.195952
vt 0.185539 0.227013
vt 0.187516 0.221322
vt 0.187531 0.202116
vt 0.185563 0.196419
vt 0.176585 0.232500
vt 0.165993 0.229894
vt 0.176611 0.190916
vt 0.166011 0.193512
vt 0.189406 0.230672
vt 0.189438 0.192766
vt 0.193574 0.221791
vt 0.193592 0.201656
vt 0.186479 0.211718
vt 0.156919 0.211701
vt 0.148476 0.211699
vt 0.427853 0.115821
vt 0.427581 0.104121
vt 0.441185 0.104121
vt 0.427581 0.011703
vt 0.427581 0.000000
vt 0.441181 0.011386
vt 0.067509 0.234045
vt 0.071465 0.211716
vt 0.067479 0.189385
vt 0.119764 0.211696
vt 0.060932 0.261035
vt 0.038121 0.261699
vt 0.038025 0.161756
vt 0.060860 0.162382
vt 0.019864 0.255578
vt 0.019760 0.167921
vt 0.016617 0.242679
vt 0.016537 0.180842
vt 0.014466 0.211775
vt 0.297831 0.211892
vt 0.340508 0.212027
vt 0.356498 0.241635
vt 0.356742 0.182510
vt 0.236517 0.317748
vt 0.236802 0.105655
vt 0.264789 0.363401
vt 0.265286 0.059917
vt 0.296951 0.385966
vt 0.297650 0.037339
vt 0.337996 0.385300
vt 0.338890 0.038126
vt 0.349401 0.368365
vt 0.350300 0.055183
vt 0.377282 0.319664
vt 0.378129 0.104260
vt 0.394788 0.292204
vt 0.395576 0.131978
vt 0.391029 0.270263
vt 0.391643 0.154015
vt 0.368661 0.212151
vt 0.379482 0.228055
vt 0.379686 0.196331
vt 0.420379 0.261837
vt 0.421104 0.162716
vt 0.426533 0.298960
vt 0.427581 0.125377
vt 0.396664 0.342212
vt 0.397734 0.081667
vt 0.365156 0.387054
vt 0.366203 0.036443
vt 0.346744 0.416452
vt 0.347768 0.006839
vt 0.278009 0.423087
vt 0.278714 0.000000
vt 0.241964 0.376122
vt 0.242399 0.047096
vt 0.055563 0.291878
vt 0.055443 0.131506
vt 0.014495 0.288026
vt 0.014318 0.135436
vt 0.003828 0.279132
vt 0.003650 0.144368
vt 0.000113 0.248111
vt 0.000000 0.175447
vt 0.000000 0.211799
vt 0.046962 0.798865
vt 0.047306 0.784561
vt 0.334495 0.786358
vt 0.334204 0.800664
vt 0.058429 0.773633
vt 0.323868 0.774947
vt 0.072992 0.774071
vt 0.309301 0.774739
vt 0.084403 0.784016
vt 0.297459 0.784168
vt 0.083417 0.800146
vt 0.297728 0.800325
vt 0.073091 0.810538
vt 0.307582 0.811166
vt 0.057505 0.810093
vt 0.323173 0.811412
vt 0.024988 0.807478
vt 0.047717 0.829014
vt 0.332112 0.830749
vt 0.355774 0.810244
vt 0.000000 0.817350
vt 0.033121 0.852785
vt 0.345638 0.855146
vt 0.380299 0.821215
vt 0.083391 0.855019
vt 0.078555 0.829097
vt 0.301299 0.829463
vt 0.295318 0.855146
vt 0.100718 0.807888
vt 0.280100 0.807291
vt 0.123146 0.821929
vt 0.257070 0.820323
vt 0.127501 0.768220
vt 0.103229 0.776171
vt 0.279000 0.775494
vt 0.255105 0.766472
vt 0.079351 0.756089
vt 0.303746 0.756492
vt 0.089008 0.730353
vt 0.295241 0.730353
vt 0.049398 0.755271
vt 0.035422 0.733227
vt 0.333706 0.757005
vt 0.348646 0.735604
vt 0.026877 0.776230
vt 0.355274 0.778943
vt 0.000000 0.770061
vt 0.382398 0.773973
vn 0.189764 -0.003571 0.981811
vn 0.646809 -0.758202 0.082095
vn 0.999573 -0.014496 -0.024445
vn -0.999573 -0.014496 -0.024445
vn -0.646809 -0.758202 0.082095
vn -0.189764 -0.003571 0.981811
vn -0.085788 -0.982971 0.162389
vn 0.085788 -0.982971 0.162389
vn -0.744835 -0.623768 0.236824
vn 0.744835 -0.623768 0.236824
vn -0.870968 -0.014710 0.491104
vn 0.870968 -0.014710 0.491104
vn -0.758354 0.606128 0.239692
vn 0.758354 0.606128 0.239692
vn -0.085788 0.982513 0.165105
vn 0.085788 0.982513 0.165105
vn 0.655141 0.750633 0.085574
vn -0.655141 0.750633 0.085574
vn -0.349284 -0.719932 0.599719
vn -0.173681 0.215735 0.960845
vn -0.809839 0.388287 0.439741
vn 0.809839 0.388287 0.439741
vn 0.173681 0.215735 0.960845
vn 0.349284 -0.719932 0.599719
vn 0.000000 0.794183 0.607654
vn -0.508652 0.858119 -0.069887
vn 0.000000 0.487075 0.873348
vn 0.508652 0.858119 -0.069887
vn 0.981414 -0.186682 0.043947
vn 0.569811 -0.821711 0.007813
vn 0.563463 -0.814570 0.137669
vn -0.563463 -0.814570 0.137669
vn -0.569811 -0.821711 0.007813
vn -0.981414 -0.186682 0.043947
vn 0.475845 -0.876247 0.075381
vn 0.850520 -0.525529 -0.020692
vn 0.876949 -0.163823 0.451766
vn -0.876949 -0.163823 0.451766
vn -0.850520 -0.525529 -0.020692
vn -0.475845 -0.876247 0.075381
vn 0.448286 -0.367870 -0.814661
vn 0.530534 -0.539445 -0.653829
vn 0.513077 -0.674673 -0.530595
vn -0.513077 -0.674673 -0.530595
vn -0.530534 -0.539445 -0.653829
vn -0.448286 -0.367870 -0.814661
vn 0.888180 -0.439955 -0.132389
vn 0.588519 0.226966 0.775933
vn 0.911527 -0.115268 0.394665
vn -0.911527 -0.115268 0.394665
vn -0.588519 0.226966 0.775933
vn -0.888180 -0.439955 -0.132389
vn 0.468886 -0.304727 0.829005
vn 0.251564 0.260781 0.932005
vn -0.003082 -0.330882 0.943632
vn 0.003082 -0.330882 0.943632
vn -0.251564 0.260781 0.932005
vn -0.468886 -0.304727 0.829005
vn 0.473067 0.578997 -0.664022
vn 0.992462 0.028626 -0.118900
vn 0.459975 -0.380261 -0.802362
vn -0.459975 -0.380261 -0.802362
vn -0.992462 0.028626 -0.118900
vn -0.473067 0.578997 -0.664022
vn -0.059908 -0.804712 -0.590594
vn -0.346141 -0.637287 -0.688498
vn -0.330546 -0.943236 0.031281
vn -0.073672 -0.594989 0.800317
vn 0.330546 -0.943236 0.031281
vn 0.346141 -0.637287 -0.688498
vn 0.059908 -0.804712 -0.590594
vn 0.073672 -0.594989 0.800317
vn 0.593738 0.595264 -0.541368
vn -0.626057 -0.002686 -0.779748
vn 0.626057 -0.002686 -0.779748
vn -0.593738 0.595264 -0.541368
vn 0.127689 0.703757 0.698843
vn -0.713828 0.382183 0.586810
vn 0.713828 0.382183 0.586810
vn -0.127689 0.703757 0.698843
vn 0.378063 0.560045 -0.737144
vn 0.036805 -0.708457 -0.704764
vn -0.378063 0.560045 -0.737144
vn -0.036805 -0.708457 -0.704764
vn -0.031556 0.838710 0.543626
vn 0.031556 0.838710 0.543626
vn -0.361156 0.848689 0.386303
vn 0.361156 0.848689 0.386303
vn -0.716392 0.204474 0.667043
vn 0.716392 0.204474 0.667043
vn -0.662038 -0.413770 0.624866
vn 0.662038 -0.413770 0.624866
vn -0.530229 -0.655751 0.537370
vn 0.530229 -0.655751 0.537370
vn -0.437483 0.001221 0.899197
vn 0.550981 -0.138096 0.822993
vn 0.437483 0.001221 0.899197
vn -0.550981 -0.138096 0.822993
vn -0.315958 -0.102298 0.943205
vn 0.608539 0.296121 0.736167
vn -0.608539 0.296121 0.736167
vn 0.315958 -0.102298 0.943205
vn -0.445479 -0.088778 0.890866
vn -0.257698 0.600024 0.757317
vn 0.257698 0.600024 0.757317
vn 0.445479 -0.088778 0.890866
vn -0.327799 0.169927 0.929319
vn 0.041780 0.927213 0.372112
vn 0.327799 0.169927 0.929319
vn -0.041780 0.927213 0.372112
vn -0.277932 0.260201 0.924680
vn -0.750725 0.111545 0.651112
vn 0.750725 0.111545 0.651112
vn 0.277932 0.260201 0.924680
vn -0.437910 -0.293985 0.849574
vn -0.183782 0.036836 0.982269
vn -0.554216 0.387219 0.736808
vn -0.814325 0.253426 0.522111
vn 0.554216 0.387219 0.736808
vn 0.183782 0.036836 0.982269
vn 0.437910 -0.293985 0.849574
vn 0.814325 0.253426 0.522111
vn -0.326670 -0.001617 0.945128
vn -0.704337 -0.526872 0.475692
vn 0.704337 -0.526872 0.475692
vn 0.326670 -0.001617 0.945128
vn -0.308786 0.134617 0.941527
vn -0.629170 -0.371441 0.682730
vn 0.629170 -0.371441 0.682730
vn 0.308786 0.134617 0.941527
vn 0.146184 0.948637 0.280465
vn -0.137516 0.905820 0.400708
vn 0.137516 0.905820 0.400708
vn -0.146184 0.948637 0.280465
vn 0.723746 0.690023 -0.005219
vn -0.723746 0.690023 -0.005219
vn 0.994690 -0.078005 0.067019
vn -0.994690 -0.078005 0.067019
vn 0.200934 -0.758141 0.620350
vn -0.200934 -0.758141 0.620350
vn -0.541246 -0.672658 0.504501
vn 0.541246 -0.672658 0.504501
vn -0.690054 -0.553209 0.466628
vn 0.690054 -0.553209 0.466628
vn -0.464003 0.686666 0.559557
vn 0.464003 0.686666 0.559557
vn -0.827448 -0.135899 0.544786
vn 0.827448 -0.135899 0.544786
vn -0.466231 0.808863 0.358196
vn 0.466231 0.808863 0.358196
vn -0.743980 -0.022919 0.667776
vn 0.743980 -0.022919 0.667776
vn -0.711295 -0.638325 0.294137
vn 0.711295 -0.638325 0.294137
vn -0.709769 -0.501999 0.494125
vn 0.709769 -0.501999 0.494125
vn -0.818903 -0.425520 0.385113
vn -0.992523 -0.071444 -0.098758
vn 0.992523 -0.071444 -0.098758
vn 0.818903 -0.425520 0.385113
vn -0.439192 -0.273568 0.855708
vn 0.439192 -0.273568 0.855708
vn -0.414686 -0.059877 0.907956
vn 0.414686 -0.059877 0.907956
vn -0.341563 0.452132 0.823939
vn 0.341563 0.452132 0.823939
vn -0.724509 -0.684927 0.076632
vn -0.987548 -0.123020 0.097995
vn 0.987548 -0.123020 0.097995
vn 0.724509 -0.684927 0.076632
vn -0.572741 -0.088443 0.814936
vn 0.572741 -0.088443 0.814936
vn -0.291818 -0.152104 0.944273
vn 0.291818 -0.152104 0.944273
vn 0.239662 -0.128605 0.962279
vn -0.239662 -0.128605 0.962279
vn 0.187017 0.370678 0.909696
vn -0.187017 0.370678 0.909696
vn -0.455794 0.423170 0.783044
vn 0.455794 0.423170 0.783044
vn -0.543504 -0.813379 -0.207343
vn -0.560045 -0.814417 -0.151738
vn 0.560045 -0.814417 -0.151738
vn 0.543504 -0.813379 -0.207343
vn -0.615375 -0.087649 -0.783319
vn -0.447310 0.229530 -0.864406
vn 0.447310 0.229530 -0.864406
vn 0.615375 -0.087649 -0.783319
vn -0.547166 -0.832179 -0.089785
vn 0.547166 -0.832179 -0.089785
vn -0.873135 0.486984 -0.020264
vn -0.865352 0.331217 -0.376049
vn 0.865352 0.331217 -0.376049
vn 0.873135 0.486984 -0.020264
vn -0.748741 0.518387 0.413038
vn 0.748741 0.518387 0.413038
vn -0.766167 0.634816 0.099612
vn 0.766167 0.634816 0.099612
vn -0.953185 -0.248299 -0.172430
vn -0.665639 0.602496 -0.440321
vn 0.665639 0.602496 -0.440321
vn 0.953185 -0.248299 -0.172430
vn -0.322642 0.847713 0.421033
vn -0.188574 0.788934 -0.584765
vn 0.188574 0.788934 -0.584765
vn 0.322642 0.847713 0.421033
vn -0.239784 0.745262 -0.622120
vn 0.494247 0.520585 -0.696158
vn -0.494247 0.520585 -0.696158
vn 0.239784 0.745262 -0.622120
vn -0.480697 0.731223 0.483932
vn 0.000000 0.758690 0.651418
vn 0.480697 0.731223 0.483932
vn -0.489242 0.762963 0.422498
vn -0.363109 0.908567 -0.206458
vn 0.363109 0.908567 -0.206458
vn 0.489242 0.762963 0.422498
vn -0.645039 0.694540 0.318613
vn 0.645039 0.694540 0.318613
vn -0.492843 0.869015 0.043062
vn -0.679434 0.728965 -0.083468
vn 0.492843 0.869015 0.043062
vn 0.679434 0.728965 -0.083468
vn -0.391736 0.826014 -0.405225
vn -0.644398 0.527207 -0.553880
vn 0.391736 0.826014 -0.405225
vn 0.644398 0.527207 -0.553880
vn 0.000000 0.800714 -0.599017
vn 0.000000 0.330729 -0.943693
vn 0.000000 0.999664 0.025636
vn 0.000000 -0.271462 -0.962432
vn -0.685293 -0.583148 -0.436232
vn -0.907224 0.252602 -0.336253
vn 0.907224 0.252602 -0.336253
vn 0.685293 -0.583148 -0.436232
vn 0.000000 -0.984344 -0.176214
vn 0.000000 -0.736351 -0.676565
vn 0.000000 -0.948759 -0.315928
vn 0.000000 -0.648244 -0.761406
vn -0.317362 -0.946959 -0.049959
vn -0.838282 -0.408155 0.361461
vn 0.838282 -0.408155 0.361461
vn 0.317362 -0.946959 -0.049959
vn -0.939360 0.325999 0.106113
vn 0.939360 0.325999 0.106113
vn -0.930631 0.340159 0.134770
vn -0.960143 0.231361 0.156774
vn 0.960143 0.231361 0.156774
vn 0.930631 0.340159 0.134770
vn -0.812555 -0.001068 -0.582842
vn -0.979583 0.093387 0.177862
vn 0.979583 0.093387 0.177862
vn 0.812555 -0.001068 -0.582842
vn -0.272530 -0.301157 -0.913785
vn 0.272530 -0.301157 -0.913785
vn -0.090915 -0.776330 -0.623707
vn -0.506851 -0.488144 -0.710471
vn -0.142521 -0.147282 -0.978759
vn -0.637257 0.093326 -0.764946
vn 0.637257 0.093326 -0.764946
vn 0.506851 -0.488144 -0.710471
vn 0.142521 -0.147282 -0.978759
vn 0.090915 -0.776330 -0.623707
vn -0.937284 -0.254250 0.238350
vn 0.937284 -0.254250 0.238350
vn -0.430525 -0.895260 0.114597
vn 0.430525 -0.895260 0.114597
vn -0.158391 -0.974822 0.156774
vn 0.158391 -0.974822 0.156774
vn 0.000000 -0.915860 -0.401440
vn 0.000000 -0.946440 0.322855
vn 0.000000 -0.336802 -0.941557
vn 0.000000 -0.175726 -0.984436
vn -0.599231 -0.773980 0.204566
vn 0.599231 -0.773980 0.204566
vn -0.890988 -0.423261 -0.164037
vn 0.890988 -0.423261 -0.164037
vn -0.851985 0.219275 0.475387
vn 0.851985 0.219275 0.475387
vn -0.509171 0.852229 0.119999
vn 0.509171 0.852229 0.119999
vn -0.610431 0.759148 0.225867
vn 0.610431 0.759148 0.225867
vn -0.182470 0.981780 0.052492
vn 0.182470 0.981780 0.052492
vn 0.520371 0.770348 0.368389
vn -0.520371 0.770348 0.368389
vn 0.852718 0.504257 0.136204
vn -0.852718 0.504257 0.136204
vn 0.000000 0.970214 0.242164
vn -0.709647 0.261818 0.654042
vn 0.067293 -0.064272 0.995636
vn -0.246590 -0.034089 0.968505
vn -0.809717 -0.010224 0.586688
vn 0.246590 -0.034089 0.968505
vn -0.067293 -0.064272 0.995636
vn 0.709647 0.261818 0.654042
vn 0.809717 -0.010224 0.586688
vn -0.465835 -0.080325 0.881191
vn -0.737114 -0.244179 0.630085
vn 0.465835 -0.080325 0.881191
vn 0.737114 -0.244179 0.630085
vn -0.211951 -0.085971 0.973479
vn -0.367504 -0.376476 0.850398
vn 0.211951 -0.085971 0.973479
vn 0.367504 -0.376476 0.850398
vn -0.430280 0.556597 0.710624
vn -0.020081 -0.072939 0.997131
vn 0.020081 -0.072939 0.997131
vn 0.430280 0.556597 0.710624
vn -0.090976 0.597339 0.796777
vn -0.187933 -0.091617 0.977874
vn 0.187933 -0.091617 0.977874
vn 0.090976 0.597339 0.796777
vn 0.165929 0.609363 0.775292
vn -0.203314 0.092532 0.974700
vn 0.203314 0.092532 0.974700
vn -0.165929 0.609363 0.775292
vn 0.269295 0.241676 0.932218
vn -0.314219 -0.132420 0.940062
vn 0.314219 -0.132420 0.940062
vn -0.269295 0.241676 0.932218
vn 0.420057 -0.118992 0.899625
vn -0.119755 -0.070925 0.990234
vn 0.119755 -0.070925 0.990234
vn -0.420057 -0.118992 0.899625
vn 0.226142 -0.606586 0.762139
vn -0.320841 0.040712 0.946226
vn 0.320841 0.040712 0.946226
vn -0.226142 -0.606586 0.762139
vn 0.232612 -0.746055 0.623890
vn -0.074557 -0.391644 0.917081
vn 0.074557 -0.391644 0.917081
vn -0.232612 -0.746055 0.623890
vn -0.121250 -0.313883 0.941679
vn -0.146702 -0.035707 0.988525
vn 0.146702 -0.035707 0.988525
vn 0.121250 -0.313883 0.941679
vn -0.216834 -0.273721 0.937010
vn -0.187445 0.001160 0.982269
vn 0.187445 0.001160 0.982269
vn 0.216834 -0.273721 0.937010
vn -0.303018 -0.201941 0.931333
vn -0.253090 -0.161809 0.953795
vn 0.253090 -0.161809 0.953795
vn 0.303018 -0.201941 0.931333
vn -0.140110 -0.091189 0.985900
vn 0.140110 -0.091189 0.985900
vn -0.237983 0.050172 0.969939
vn 0.237983 0.050172 0.969939
vn -0.312662 -0.237922 0.919553
vn 0.312662 -0.237922 0.919553
vn -0.373791 -0.105197 0.921506
vn 0.373791 -0.105197 0.921506
vn -0.470595 -0.164647 0.866817
vn 0.470595 -0.164647 0.866817
vn -0.439222 -0.376141 0.815821
vn 0.439222 -0.376141 0.815821
vn -0.219611 -0.540635 0.812037
vn 0.219611 -0.540635 0.812037
vn 0.166967 -0.374828 0.911893
vn -0.166967 -0.374828 0.911893
vn 0.201849 -0.277596 0.939238
vn -0.201849 -0.277596 0.939238
vn 0.001160 -0.165563 0.986175
vn -0.001160 -0.165563 0.986175
vn 0.292917 -0.174108 0.940123
vn -0.292917 -0.174108 0.940123
vn 0.000000 0.732200 0.681051
vn 0.000000 -0.603626 0.797266
vn 0.000000 -0.971740 0.235908
vn 0.131779 -0.608295 0.782678
vn -0.131779 -0.608295 0.782678
vn 0.759117 0.068392 0.647298
vn -0.759117 0.068392 0.647298
vn 0.405957 0.643605 0.648793
vn -0.405957 0.643605 0.648793
vn 0.000000 0.598346 0.801202
vn 0.073855 -0.330546 0.940855
vn 0.000000 -0.124516 0.992187
vn -0.073855 -0.330546 0.940855
vn -0.085116 -0.339244 0.936827
vn 0.085116 -0.339244 0.936827
vn -0.141881 -0.148350 0.978698
vn 0.141881 -0.148350 0.978698
vn 0.000000 -0.482803 0.875698
vn -0.692984 -0.001343 0.720908
vn -0.095523 -0.326090 0.940489
vn 0.095523 -0.326090 0.940489
vn 0.692984 -0.001343 0.720908
vn -0.646687 0.162603 0.745201
vn 0.646687 0.162603 0.745201
vn -0.593463 0.121860 0.795556
vn 0.593463 0.121860 0.795556
vn -0.124363 0.009674 0.992187
vn -0.509995 -0.457717 0.728233
vn 0.509995 -0.457717 0.728233
vn 0.124363 0.009674 0.992187
vn -0.972137 -0.167882 0.163549
vn 0.972137 -0.167882 0.163549
vn -0.715995 0.572161 0.399945
vn 0.715995 0.572161 0.399945
vn 0.000000 0.430525 0.902554
vn 0.000000 0.010865 0.999939
vn -0.221839 -0.606037 0.763848
vn 0.000000 -0.492935 0.870022
vn 0.000000 0.010315 0.999939
vn -0.294320 -0.184484 0.937712
vn 0.221839 -0.606037 0.763848
vn 0.294320 -0.184484 0.937712
vn -0.396924 0.534989 0.745781
vn 0.247780 0.568224 0.784661
vn -0.247780 0.568224 0.784661
vn 0.396924 0.534989 0.745781
vn -0.868221 -0.261330 0.421735
vn -0.555986 -0.690695 0.462355
vn 0.868221 -0.261330 0.421735
vn 0.555986 -0.690695 0.462355
vn -0.753075 0.649892 0.102298
vn 0.753075 0.649892 0.102298
vn 0.194189 0.935697 0.294473
vn -0.194189 0.935697 0.294473
vn 0.000000 0.788965 0.614399
vn 0.000000 -0.888638 0.458571
vn 0.000000 -0.336772 0.941557
vn 0.000000 -0.251991 0.967711
vn -0.188360 -0.040132 0.981262
vn 0.000000 -0.032899 0.999451
vn 0.188360 -0.040132 0.981262
vn 0.000000 0.000000 1.000000
vn -0.572039 -0.018708 0.820002
vn -0.536332 -0.212409 0.816828
vn 0.536332 -0.212409 0.816828
vn 0.572039 -0.018708 0.820002
vn -0.357707 -0.638325 0.681570
vn 0.357707 -0.638325 0.681570
vn -0.154302 -0.754112 0.638325
vn 0.154302 -0.754112 0.638325
vn 0.000000 -0.743461 0.668752
vn 0.000000 -0.189123 0.981933
vn 0.000000 -0.114475 0.993408
vn 0.001404 -0.055635 0.998444
vn -0.001404 -0.055635 0.998444
vn -0.336283 -0.512833 0.789850
vn 0.336283 -0.512833 0.789850
vn -0.454543 -0.337077 0.824458
vn 0.454543 -0.337077 0.824458
vn -0.543474 -0.308603 0.780602
vn 0.543474 -0.308603 0.780602
vn -0.387158 -0.187811 0.902646
vn 0.387158 -0.187811 0.902646
vn -0.430647 -0.144902 0.890805
vn 0.430647 -0.144902 0.890805
vn -0.234016 -0.120548 0.964721
vn 0.234016 -0.120548 0.964721
vn -0.263833 0.168798 0.949675
vn 0.263833 0.168798 0.949675
vn 0.196722 0.141881 0.970122
vn -0.196722 0.141881 0.970122
vn -0.906766 -0.008332 0.421522
vn -0.744133 -0.640919 0.188269
vn 0.744133 -0.640919 0.188269
vn 0.906766 -0.008332 0.421522
vn -0.044191 -0.974395 0.220313
vn 0.044191 -0.974395 0.220313
vn 0.639943 -0.761498 0.102786
vn -0.639943 -0.761498 0.102786
vn 0.955504 -0.011444 0.294717
vn -0.955504 -0.011444 0.294717
vn 0.649678 0.754387 0.093570
vn -0.649678 0.754387 0.093570
vn -0.037049 0.978881 0.200903
vn 0.037049 0.978881 0.200903
vn -0.752342 0.635395 0.173742
vn 0.752342 0.635395 0.173742
vn -0.811792 -0.002777 0.583880
vn -0.596942 0.486770 0.637684
vn 0.596942 0.486770 0.637684
vn 0.811792 -0.002777 0.583880
vn -0.868221 -0.005829 0.496109
vn -0.719504 0.473006 0.508469
vn 0.719504 0.473006 0.508469
vn 0.868221 -0.005829 0.496109
vn -0.204260 0.828761 0.520951
vn -0.095767 0.717277 0.690146
vn 0.095767 0.717277 0.690146
vn 0.204260 0.828761 0.520951
vn 0.451704 0.459883 0.764458
vn -0.451704 0.459883 0.764458
vn 0.450362 0.693899 0.561815
vn -0.450362 0.693899 0.561815
vn 0.805536 0.109409 0.582324
vn 0.691488 -0.074099 0.718558
vn -0.691488 -0.074099 0.718558
vn -0.805536 0.109409 0.582324
vn 0.386212 -0.474685 0.790857
vn -0.386212 -0.474685 0.790857
vn 0.557756 -0.629109 0.541368
vn -0.557756 -0.629109 0.541368
vn -0.091159 -0.723716 0.684011
vn -0.199744 -0.858058 0.473067
vn 0.091159 -0.723716 0.684011
vn 0.199744 -0.858058 0.473067
vn -0.597949 -0.496475 0.629231
vn 0.597949 -0.496475 0.629231
vn -0.723197 -0.488907 0.487747
vn 0.723197 -0.488907 0.487747
usemtl Material_ray.png
s 1
f 61/1/1 65/2/2 49/3/3
f 50/4/4 66/5/5 62/6/6
f 63/7/7 65/2/2 61/1/1
f 62/6/6 66/5/5 64/8/8
f 61/1/1 59/9/9 63/7/7
f 64/8/8 60/10/10 62/6/6
f 61/1/1 57/11/11 59/9/9
f 60/10/10 58/12/12 62/6/6
f 61/1/1 55/13/13 57/11/11
f 58/12/12 56/14/14 62/6/6
f 61/1/1 53/15/15 55/13/13
f 56/14/14 54/16/16 62/6/6
f 61/1/1 51/17/17 53/15/15
f 54/16/16 52/18/18 62/6/6
f 61/1/1 49/3/3 51/17/17
f 52/18/18 50/4/4 62/6/6
f 225/19/19 229/20/20 227/21/21
f 228/22/22 230/23/23 226/24/24
f 73/25/25 284/26/26 74/27/27
f 74/28/27 285/29/28 73/30/25
f 342/31/29 348/32/30 384/33/31
f 385/34/32 349/35/33 343/36/34
f 300/37/35 346/38/36 344/39/37
f 345/40/38 347/41/39 301/42/40
f 324/43/41 380/44/42 352/45/43
f 353/46/44 381/47/45 325/48/46
f 442/49/47 444/50/48 446/51/49
f 447/52/50 445/53/51 443/54/52
f 464/55/53 492/56/54 466/57/55
f 467/58/56 493/59/57 465/60/58
f 496/61/59 498/62/60 500/63/61
f 501/64/62 499/65/63 497/66/64
f 505/67/65 323/68/66 321/69/67
f 505/67/65 321/69/67 391/70/68
f 320/71/69 322/72/70 504/73/71
f 320/71/69 504/73/71 390/74/72
f 505/67/65 507/75/73 315/76/74
f 505/67/65 315/76/74 323/68/66
f 314/77/75 506/78/76 504/73/71
f 314/77/75 504/73/71 322/72/70
f 389/79/77 383/80/78 507/75/73
f 383/80/78 315/76/74 507/75/73
f 314/77/75 382/81/79 506/78/76
f 382/81/79 388/82/80 506/78/76
f 501/64/62 497/66/64 495/83/81
f 501/64/62 495/83/81 503/84/82
f 494/85/83 496/61/59 500/63/61
f 494/85/83 500/63/61 502/86/84
f 505/67/65 503/84/82 507/75/73
f 503/84/82 495/83/81 507/75/73
f 494/85/83 502/86/84 506/78/76
f 502/86/84 504/73/71 506/78/76
f 495/83/81 401/87/85 507/75/73
f 401/87/85 389/79/77 507/75/73
f 388/82/80 400/88/86 506/78/76
f 400/88/86 494/85/83 506/78/76
f 497/66/64 399/89/87 495/83/81
f 399/89/87 401/87/85 495/83/81
f 400/88/86 398/90/88 494/85/83
f 398/90/88 496/61/59 494/85/83
f 499/65/63 397/91/89 497/66/64
f 397/91/89 399/89/87 497/66/64
f 398/90/88 396/92/90 496/61/59
f 396/92/90 498/62/60 496/61/59
f 501/64/62 395/93/91 499/65/63
f 395/93/91 397/91/89 499/65/63
f 396/92/90 394/94/92 498/62/60
f 394/94/92 500/63/61 498/62/60
f 503/84/82 393/95/93 395/93/91
f 503/84/82 395/93/91 501/64/62
f 394/94/92 392/96/94 502/86/84
f 394/94/92 502/86/84 500/63/61
f 505/67/65 391/70/68 393/95/93
f 505/67/65 393/95/93 503/84/82
f 392/96/94 390/74/72 504/73/71
f 392/96/94 504/73/71 502/86/84
f 491/97/95 493/59/57 467/58/56
f 491/97/95 467/58/56 469/98/96
f 466/57/55 492/56/54 490/99/97
f 466/57/55 490/99/97 468/100/98
f 489/101/99 491/97/95 471/102/100
f 491/97/95 469/98/96 471/102/100
f 468/100/98 490/99/97 470/103/101
f 490/99/97 488/104/102 470/103/101
f 483/105/103 489/101/99 473/106/104
f 489/101/99 471/102/100 473/106/104
f 470/103/101 488/104/102 472/107/105
f 488/104/102 482/108/106 472/107/105
f 481/109/107 483/105/103 473/106/104
f 481/109/107 473/106/104 475/110/108
f 472/107/105 482/108/106 480/111/109
f 472/107/105 480/111/109 474/112/110
f 481/109/107 475/110/108 457/113/111
f 475/110/108 455/114/112 457/113/111
f 454/115/113 474/112/110 456/116/114
f 474/112/110 480/111/109 456/116/114
f 463/117/115 479/118/116 459/119/117
f 463/117/115 459/119/117 461/120/118
f 458/121/119 478/122/120 462/123/121
f 458/121/119 462/123/121 460/124/122
f 479/118/116 463/117/115 485/125/123
f 463/117/115 453/126/124 485/125/123
f 452/127/125 462/123/121 484/128/126
f 462/123/121 478/122/120 484/128/126
f 487/129/127 485/125/123 477/130/128
f 485/125/123 453/126/124 477/130/128
f 452/127/125 484/128/126 476/131/129
f 484/128/126 486/132/130 476/131/129
f 487/129/127 477/130/128 465/60/58
f 487/129/127 465/60/58 493/59/57
f 464/55/53 476/131/129 486/132/130
f 464/55/53 486/132/130 492/56/54
f 491/97/95 489/101/99 493/59/57
f 489/101/99 487/129/127 493/59/57
f 486/132/130 488/104/102 492/56/54
f 488/104/102 490/99/97 492/56/54
f 489/101/99 483/105/103 485/125/123
f 489/101/99 485/125/123 487/129/127
f 484/128/126 482/108/106 488/104/102
f 484/128/126 488/104/102 486/132/130
f 483/105/103 481/109/107 485/125/123
f 481/109/107 479/118/116 485/125/123
f 478/122/120 480/111/109 484/128/126
f 480/111/109 482/108/106 484/128/126
f 481/109/107 457/113/111 479/118/116
f 457/113/111 459/119/117 479/118/116
f 458/121/119 456/116/114 478/122/120
f 456/116/114 480/111/109 478/122/120
f 473/106/104 421/133/131 475/110/108
f 421/133/131 419/134/132 475/110/108
f 418/135/133 420/136/134 474/112/110
f 420/136/134 472/107/105 474/112/110
f 471/102/100 423/137/135 473/106/104
f 423/137/135 421/133/131 473/106/104
f 420/136/134 422/138/136 472/107/105
f 422/138/136 470/103/101 472/107/105
f 469/98/96 425/139/137 471/102/100
f 425/139/137 423/137/135 471/102/100
f 422/138/136 424/140/138 470/103/101
f 424/140/138 468/100/98 470/103/101
f 467/58/56 427/141/139 425/139/137
f 467/58/56 425/139/137 469/98/96
f 424/140/138 426/142/140 466/57/55
f 424/140/138 466/57/55 468/100/98
f 465/60/58 429/143/141 427/141/139
f 465/60/58 427/141/139 467/58/56
f 426/142/140 428/144/142 464/55/53
f 426/142/140 464/55/53 466/57/55
f 477/130/128 417/145/143 429/143/141
f 477/130/128 429/143/141 465/60/58
f 428/144/142 416/146/144 476/131/129
f 428/144/142 476/131/129 464/55/53
f 475/110/108 419/134/132 441/147/145
f 475/110/108 441/147/145 455/114/112
f 440/148/146 418/135/133 474/112/110
f 440/148/146 474/112/110 454/115/113
f 455/114/112 441/147/145 439/149/147
f 455/114/112 439/149/147 457/113/111
f 438/150/148 440/148/146 454/115/113
f 438/150/148 454/115/113 456/116/114
f 457/113/111 439/149/147 459/119/117
f 439/149/147 437/151/149 459/119/117
f 436/152/150 438/150/148 458/121/119
f 438/150/148 456/116/114 458/121/119
f 459/119/117 437/151/149 461/120/118
f 437/151/149 435/153/151 461/120/118
f 434/154/152 436/152/150 460/124/122
f 436/152/150 458/121/119 460/124/122
f 461/120/118 435/153/151 433/155/153
f 461/120/118 433/155/153 463/117/115
f 432/156/154 434/154/152 460/124/122
f 432/156/154 460/124/122 462/123/121
f 463/117/115 433/155/153 453/126/124
f 433/155/153 451/157/155 453/126/124
f 450/158/156 432/156/154 452/127/125
f 432/156/154 462/123/121 452/127/125
f 453/126/124 451/157/155 417/145/143
f 453/126/124 417/145/143 477/130/128
f 416/146/144 450/158/156 452/127/125
f 416/146/144 452/127/125 476/131/129
f 447/52/50 443/54/52 449/159/157
f 443/54/52 313/160/158 449/159/157
f 312/161/159 442/49/47 448/162/160
f 442/49/47 446/51/49 448/162/160
f 431/163/161 449/159/157 383/80/78
f 449/159/157 313/160/158 383/80/78
f 312/161/159 448/162/160 382/164/79
f 448/162/160 430/165/162 382/164/79
f 451/157/155 431/163/161 417/145/143
f 431/163/161 415/166/163 417/145/143
f 414/167/164 430/165/162 416/146/144
f 430/165/162 450/158/156 416/146/144
f 433/155/153 449/159/157 451/157/155
f 449/159/157 431/163/161 451/157/155
f 430/165/162 448/162/160 450/158/156
f 448/162/160 432/156/154 450/158/156
f 447/52/50 449/159/157 435/153/151
f 449/159/157 433/155/153 435/153/151
f 432/156/154 448/162/160 434/154/152
f 448/162/160 446/51/49 434/154/152
f 439/149/147 447/52/50 435/153/151
f 439/149/147 435/153/151 437/151/149
f 434/154/152 446/51/49 438/150/148
f 434/154/152 438/150/148 436/152/150
f 445/53/51 447/52/50 441/147/145
f 447/52/50 439/149/147 441/147/145
f 438/150/148 446/51/49 440/148/146
f 446/51/49 444/50/48 440/148/146
f 441/147/145 419/134/132 413/168/165
f 441/147/145 413/168/165 445/53/51
f 412/169/166 418/135/133 440/148/146
f 412/169/166 440/148/146 444/50/48
f 415/166/163 431/163/161 383/80/78
f 415/166/163 383/80/78 389/79/77
f 382/164/79 430/165/162 414/167/164
f 382/164/79 414/167/164 388/170/80
f 443/171/52 319/172/167 311/173/168
f 443/171/52 311/173/168 313/174/158
f 310/175/169 318/176/170 442/177/47
f 310/175/169 442/177/47 312/178/159
f 413/168/165 391/179/68 445/53/51
f 391/179/68 321/180/67 445/53/51
f 320/181/69 390/182/72 444/50/48
f 390/182/72 412/169/166 444/50/48
f 445/53/51 321/180/67 443/54/52
f 321/183/67 319/172/167 443/171/52
f 318/176/170 320/184/69 442/177/47
f 320/181/69 444/50/48 442/49/47
f 417/145/143 415/166/163 403/185/171
f 417/145/143 403/185/171 429/143/141
f 402/186/172 414/167/164 416/146/144
f 402/186/172 416/146/144 428/144/142
f 427/141/139 429/143/141 405/187/173
f 429/143/141 403/185/171 405/187/173
f 402/186/172 428/144/142 404/188/174
f 428/144/142 426/142/140 404/188/174
f 425/139/137 427/141/139 407/189/175
f 427/141/139 405/187/173 407/189/175
f 404/188/174 426/142/140 406/190/176
f 426/142/140 424/140/138 406/190/176
f 423/137/135 425/139/137 409/191/177
f 425/139/137 407/189/175 409/191/177
f 406/190/176 424/140/138 408/192/178
f 424/140/138 422/138/136 408/192/178
f 421/133/131 423/137/135 409/191/177
f 421/133/131 409/191/177 411/193/179
f 408/192/178 422/138/136 420/136/134
f 408/192/178 420/136/134 410/194/180
f 419/134/132 421/133/131 411/193/179
f 419/134/132 411/193/179 413/168/165
f 410/194/180 420/136/134 418/135/133
f 410/194/180 418/135/133 412/169/166
f 413/168/165 411/193/179 393/195/93
f 413/168/165 393/195/93 391/179/68
f 392/196/94 410/194/180 412/169/166
f 392/196/94 412/169/166 390/182/72
f 411/193/179 409/191/177 393/195/93
f 409/191/177 395/197/91 393/195/93
f 394/198/92 408/192/178 392/196/94
f 408/192/178 410/194/180 392/196/94
f 409/191/177 407/189/175 395/197/91
f 407/189/175 397/199/89 395/197/91
f 396/200/90 406/190/176 394/198/92
f 406/190/176 408/192/178 394/198/92
f 407/189/175 405/187/173 397/199/89
f 405/187/173 399/89/87 397/199/89
f 398/201/88 404/188/174 396/200/90
f 404/188/174 406/190/176 396/200/90
f 405/187/173 403/185/171 401/87/85
f 405/187/173 401/87/85 399/89/87
f 400/202/86 402/186/172 404/188/174
f 400/202/86 404/188/174 398/201/88
f 415/166/163 389/79/77 403/185/171
f 389/79/77 401/87/85 403/185/171
f 400/202/86 388/170/80 402/186/172
f 388/170/80 414/167/164 402/186/172
f 381/47/45 353/46/44 387/203/181
f 353/46/44 351/204/182 387/203/181
f 350/205/183 352/45/43 386/206/184
f 352/45/43 380/44/42 386/206/184
f 381/47/45 387/203/181 323/207/66
f 387/203/181 321/183/67 323/207/66
f 320/184/69 386/206/184 322/208/70
f 386/206/184 380/44/42 322/208/70
f 381/47/45 379/209/185 325/48/46
f 379/209/185 317/210/186 325/48/46
f 316/211/187 378/212/188 324/43/41
f 378/212/188 380/44/42 324/43/41
f 381/47/45 323/207/66 379/209/185
f 323/207/66 315/213/74 379/209/185
f 314/214/75 322/208/70 378/212/188
f 322/208/70 380/44/42 378/212/188
f 343/36/34 345/40/38 301/42/40
f 343/36/34 301/42/40 385/34/32
f 300/37/35 344/39/37 342/31/29
f 300/37/35 342/31/29 384/33/31
f 385/34/32 301/42/40 299/215/189
f 385/34/32 299/215/189 319/172/167
f 298/216/190 300/37/35 384/33/31
f 298/216/190 384/33/31 318/176/170
f 387/203/181 385/34/32 321/183/67
f 385/34/32 319/172/167 321/183/67
f 318/176/170 384/33/31 320/184/69
f 384/33/31 386/206/184 320/184/69
f 387/203/181 351/204/182 385/34/32
f 351/204/182 349/35/33 385/34/32
f 348/32/30 350/205/183 384/33/31
f 350/205/183 386/206/184 384/33/31
f 371/217/191 377/218/192 383/219/78
f 377/218/192 315/213/74 383/219/78
f 314/214/75 376/220/193 382/221/79
f 376/220/193 370/222/194 382/221/79
f 371/217/191 383/219/78 313/174/158
f 371/217/191 313/174/158 369/223/195
f 312/178/159 382/221/79 370/222/194
f 312/178/159 370/222/194 368/224/196
f 369/223/195 313/174/158 311/173/168
f 369/223/195 311/173/168 363/225/197
f 310/175/169 312/178/159 368/224/196
f 310/175/169 368/224/196 362/226/198
f 311/173/168 297/227/199 363/225/197
f 297/227/199 295/228/200 363/225/197
f 294/229/201 296/230/202 362/226/198
f 296/230/202 310/175/169 362/226/198
f 361/231/203 291/232/204 285/29/28
f 361/231/203 285/29/28 74/28/27
f 284/26/26 290/233/205 360/234/206
f 284/26/26 360/234/206 74/27/27
f 289/235/207 287/236/208 291/232/204
f 287/236/208 285/29/28 291/232/204
f 284/26/26 286/237/209 290/233/205
f 286/237/209 288/238/210 290/233/205
f 359/239/211 361/231/203 302/240/212
f 361/231/203 74/28/27 302/240/212
f 74/27/27 360/234/206 302/241/212
f 360/234/206 358/242/213 302/241/212
f 365/243/214 293/244/215 361/231/203
f 293/244/215 291/232/204 361/231/203
f 290/233/205 292/245/216 360/234/206
f 292/245/216 364/246/217 360/234/206
f 365/243/214 361/231/203 359/239/211
f 365/243/214 359/239/211 367/247/218
f 358/242/213 360/234/206 364/246/217
f 358/242/213 364/246/217 366/248/219
f 367/247/218 359/239/211 357/249/220
f 367/247/218 357/249/220 373/250/221
f 356/251/222 358/242/213 366/248/219
f 356/251/222 366/248/219 372/252/223
f 373/250/221 357/249/220 355/253/224
f 373/250/221 355/253/224 375/254/225
f 354/255/226 356/251/222 372/252/223
f 354/255/226 372/252/223 374/256/227
f 375/254/225 355/253/224 317/210/186
f 375/254/225 317/210/186 379/209/185
f 316/211/187 354/255/226 374/256/227
f 316/211/187 374/256/227 378/212/188
f 375/254/225 379/209/185 377/218/192
f 379/209/185 315/213/74 377/218/192
f 314/214/75 378/212/188 376/220/193
f 378/212/188 374/256/227 376/220/193
f 377/218/192 371/217/191 373/250/221
f 377/218/192 373/250/221 375/254/225
f 372/252/223 370/222/194 376/220/193
f 372/252/223 376/220/193 374/256/227
f 371/217/191 369/223/195 367/247/218
f 371/217/191 367/247/218 373/250/221
f 366/248/219 368/224/196 370/222/194
f 366/248/219 370/222/194 372/252/223
f 369/223/195 363/225/197 365/243/214
f 369/223/195 365/243/214 367/247/218
f 364/246/217 362/226/198 368/224/196
f 364/246/217 368/224/196 366/248/219
f 363/225/197 295/228/200 293/244/215
f 363/225/197 293/244/215 365/243/214
f 292/245/216 294/229/201 362/226/198
f 292/245/216 362/226/198 364/246/217
f 317/210/186 355/253/224 75/257/228
f 317/210/186 75/257/228 76/258/229
f 75/259/228 354/255/226 316/211/187
f 75/259/228 316/211/187 76/260/229
f 355/253/224 357/249/220 303/261/230
f 355/253/224 303/261/230 75/257/228
f 303/262/230 356/251/222 354/255/226
f 303/262/230 354/255/226 75/259/228
f 357/249/220 359/239/211 303/261/230
f 359/239/211 302/240/212 303/261/230
f 302/241/212 358/242/213 303/262/230
f 358/242/213 356/251/222 303/262/230
f 325/48/46 317/210/186 77/263/231
f 317/210/186 76/258/229 77/263/231
f 76/260/229 316/211/187 77/264/231
f 316/211/187 324/43/41 77/264/231
f 319/172/167 299/215/189 297/227/199
f 319/172/167 297/227/199 311/173/168
f 296/230/202 298/216/190 318/176/170
f 296/230/202 318/176/170 310/175/169
f 349/35/33 329/265/232 343/36/34
f 329/265/232 327/266/233 343/36/34
f 326/267/234 328/268/235 342/31/29
f 328/268/235 348/32/30 342/31/29
f 329/265/232 349/35/33 305/269/236
f 329/265/232 305/269/236 309/270/237
f 305/271/236 348/32/30 328/268/235
f 305/271/236 328/268/235 309/272/237
f 349/35/33 351/204/182 78/273/238
f 349/35/33 78/273/238 305/269/236
f 78/274/238 350/205/183 348/32/30
f 78/274/238 348/32/30 305/271/236
f 351/204/182 353/46/44 78/273/238
f 353/46/44 304/275/239 78/273/238
f 304/276/239 352/45/43 78/274/238
f 352/45/43 350/205/183 78/274/238
f 353/46/44 325/48/46 304/275/239
f 325/48/46 77/263/231 304/275/239
f 77/264/231 324/43/41 304/276/239
f 324/43/41 352/45/43 304/276/239
f 301/42/40 347/41/39 93/277/240
f 347/278/39 80/279/241 93/280/240
f 79/281/242 346/282/36 92/283/243
f 346/38/36 300/37/35 92/284/243
f 345/40/38 216/285/244 347/41/39
f 216/286/244 80/279/241 347/278/39
f 79/281/242 215/287/245 346/282/36
f 215/288/245 344/39/37 346/38/36
f 343/36/34 327/266/233 210/289/246
f 327/266/233 82/290/247 210/289/246
f 81/291/248 326/267/234 209/292/249
f 326/267/234 342/31/29 209/292/249
f 345/40/38 343/36/34 216/285/244
f 343/36/34 210/289/246 216/285/244
f 209/292/249 342/31/29 215/288/245
f 342/31/29 344/39/37 215/288/245
f 333/293/250 84/294/251 82/290/247
f 333/293/250 82/290/247 327/266/233
f 81/291/248 83/295/252 332/296/253
f 81/291/248 332/296/253 326/267/234
f 339/297/254 333/293/250 329/265/232
f 333/293/250 327/266/233 329/265/232
f 326/267/234 332/296/253 328/268/235
f 332/296/253 338/298/255 328/268/235
f 341/299/256 335/300/257 337/301/258
f 335/300/257 331/302/259 337/301/258
f 330/303/260 334/304/261 336/305/262
f 334/304/261 340/306/263 336/305/262
f 339/297/254 337/301/258 331/302/259
f 339/297/254 331/302/259 333/293/250
f 330/303/260 336/305/262 338/298/255
f 330/303/260 338/298/255 332/296/253
f 331/302/259 86/307/264 84/294/251
f 331/302/259 84/294/251 333/293/250
f 83/295/252 85/308/265 330/303/260
f 83/295/252 330/303/260 332/296/253
f 335/300/257 88/309/266 86/307/264
f 335/300/257 86/307/264 331/302/259
f 85/308/265 87/310/267 334/304/261
f 85/308/265 334/304/261 330/303/260
f 341/299/256 90/311/268 88/309/266
f 341/299/256 88/309/266 335/300/257
f 87/310/267 89/312/269 340/306/263
f 87/310/267 340/306/263 334/304/261
f 306/313/270 91/314/271 90/311/268
f 306/313/270 90/311/268 341/299/256
f 89/312/269 91/315/271 306/316/270
f 89/312/269 306/316/270 340/306/263
f 337/301/258 307/317/272 341/299/256
f 307/317/272 306/313/270 341/299/256
f 306/316/270 307/318/272 340/306/263
f 307/318/272 336/305/262 340/306/263
f 339/297/254 308/319/273 337/301/258
f 308/319/273 307/317/272 337/301/258
f 307/318/272 308/320/273 336/305/262
f 308/320/273 338/298/255 336/305/262
f 329/265/232 309/270/237 339/297/254
f 309/270/237 308/319/273 339/297/254
f 308/320/273 309/272/237 338/298/255
f 309/272/237 328/268/235 338/298/255
f 301/42/40 93/277/240 95/321/274
f 301/42/40 95/321/274 299/215/189
f 94/322/275 92/284/243 300/37/35
f 94/322/275 300/37/35 298/216/190
f 299/215/189 95/321/274 97/323/276
f 299/215/189 97/323/276 297/227/199
f 96/324/277 94/322/275 298/216/190
f 96/324/277 298/216/190 296/230/202
f 297/227/199 97/323/276 295/228/200
f 97/323/276 99/325/278 295/228/200
f 98/326/279 96/324/277 294/229/201
f 96/324/277 296/230/202 294/229/201
f 295/228/200 99/325/278 101/327/280
f 295/228/200 101/327/280 293/244/215
f 100/328/281 98/326/279 294/229/201
f 100/328/281 294/229/201 292/245/216
f 293/244/215 101/327/280 291/232/204
f 101/327/280 103/329/282 291/232/204
f 102/330/283 100/328/281 290/233/205
f 100/328/281 292/245/216 290/233/205
f 291/232/204 103/329/282 289/235/207
f 103/329/282 105/331/284 289/235/207
f 104/332/285 102/330/283 288/238/210
f 102/330/283 290/233/205 288/238/210
f 289/235/207 105/331/284 287/236/208
f 105/331/284 107/333/286 287/236/208
f 106/334/287 104/332/285 286/237/209
f 104/332/285 288/238/210 286/237/209
f 287/236/208 107/333/286 109/335/288
f 287/236/208 109/335/288 285/29/28
f 108/336/289 106/334/287 286/237/209
f 108/336/289 286/237/209 284/26/26
f 285/29/28 109/335/288 67/337/290
f 285/29/28 67/337/290 73/30/25
f 67/338/290 108/336/289 284/26/26
f 67/338/290 284/26/26 73/25/25
f 281/339/291 235/340/292 233/341/293
f 281/339/291 233/341/293 283/342/294
f 232/343/295 234/344/296 280/345/297
f 232/343/295 280/345/297 282/346/298
f 283/342/294 233/341/293 255/347/299
f 283/342/294 255/347/299 261/348/300
f 254/349/301 232/343/295 282/346/298
f 254/349/301 282/346/298 260/350/302
f 261/348/300 255/347/299 257/351/303
f 261/348/300 257/351/303 259/352/304
f 256/353/305 254/349/301 260/350/302
f 256/353/305 260/350/302 258/354/306
f 263/355/307 253/356/308 235/340/292
f 263/355/307 235/340/292 281/339/291
f 234/344/296 252/357/309 262/358/310
f 234/344/296 262/358/310 280/345/297
f 265/359/311 251/360/312 263/355/307
f 251/360/312 253/356/308 263/355/307
f 252/357/309 250/361/313 262/358/310
f 250/361/313 264/362/314 262/358/310
f 267/363/315 249/364/316 265/359/311
f 249/364/316 251/360/312 265/359/311
f 250/361/313 248/365/317 264/362/314
f 248/365/317 266/366/318 264/362/314
f 269/367/319 247/368/320 249/364/316
f 269/367/319 249/364/316 267/363/315
f 248/365/317 246/369/321 268/370/322
f 248/365/317 268/370/322 266/366/318
f 271/371/323 245/372/324 269/367/319
f 245/372/324 247/368/320 269/367/319
f 246/369/321 244/373/325 268/370/322
f 244/373/325 270/374/326 268/370/322
f 273/375/327 243/376/328 245/372/324
f 273/375/327 245/372/324 271/371/323
f 244/373/325 242/377/329 272/378/330
f 244/373/325 272/378/330 270/374/326
f 275/379/331 241/380/332 273/375/327
f 241/380/332 243/376/328 273/375/327
f 242/377/329 240/381/333 272/378/330
f 240/381/333 274/382/334 272/378/330
f 279/383/335 237/384/336 275/379/331
f 237/384/336 241/380/332 275/379/331
f 240/381/333 236/385/337 274/382/334
f 236/385/337 278/386/338 274/382/334
f 277/387/339 239/388/340 237/384/336
f 277/387/339 237/384/336 279/383/335
f 236/385/337 238/389/341 276/390/342
f 236/385/337 276/390/342 278/386/338
f 259/352/304 257/351/303 239/388/340
f 259/352/304 239/388/340 277/387/339
f 238/389/341 256/353/305 258/354/306
f 238/389/341 258/354/306 276/390/342
f 257/351/303 111/391/343 129/392/344
f 257/351/303 129/392/344 239/388/340
f 128/393/345 110/394/346 256/353/305
f 128/393/345 256/353/305 238/389/341
f 239/388/340 129/392/344 180/395/347
f 239/388/340 180/395/347 237/384/336
f 179/396/348 128/393/345 238/389/341
f 179/396/348 238/389/341 236/385/337
f 237/384/336 180/395/347 127/397/349
f 237/384/336 127/397/349 241/380/332
f 126/398/350 179/396/348 236/385/337
f 126/398/350 236/385/337 240/381/333
f 241/380/332 127/397/349 243/376/328
f 127/397/349 125/399/351 243/376/328
f 124/400/352 126/398/350 242/377/329
f 126/398/350 240/381/333 242/377/329
f 243/376/328 125/399/351 245/372/324
f 125/399/351 123/401/353 245/372/324
f 122/402/354 124/400/352 244/373/325
f 124/400/352 242/377/329 244/373/325
f 245/372/324 123/401/353 121/403/355
f 245/372/324 121/403/355 247/368/320
f 120/404/356 122/402/354 244/373/325
f 120/404/356 244/373/325 246/369/321
f 247/368/320 121/403/355 119/405/357
f 247/368/320 119/405/357 249/364/316
f 118/406/358 120/404/356 246/369/321
f 118/406/358 246/369/321 248/365/317
f 249/364/316 119/405/357 117/407/359
f 249/364/316 117/407/359 251/360/312
f 116/408/360 118/406/358 248/365/317
f 116/408/360 248/365/317 250/361/313
f 251/360/312 117/407/359 115/409/361
f 251/360/312 115/409/361 253/356/308
f 114/410/362 116/408/360 250/361/313
f 114/410/362 250/361/313 252/357/309
f 253/356/308 115/409/361 235/340/292
f 115/409/361 182/411/363 235/340/292
f 181/412/364 114/410/362 234/344/296
f 114/410/362 252/357/309 234/344/296
f 255/347/299 113/413/365 257/351/303
f 113/413/365 111/391/343 257/351/303
f 110/394/346 112/414/366 256/353/305
f 112/414/366 254/349/301 256/353/305
f 233/341/293 184/415/367 113/413/365
f 233/341/293 113/413/365 255/347/299
f 112/414/366 183/416/368 232/343/295
f 112/414/366 232/343/295 254/349/301
f 235/340/292 182/411/363 184/415/367
f 235/340/292 184/415/367 233/341/293
f 183/416/368 181/412/364 234/344/296
f 183/416/368 234/344/296 232/343/295
f 230/23/23 231/417/369 224/418/370
f 230/23/23 224/418/370 226/24/24
f 224/418/370 231/417/369 229/20/20
f 224/418/370 229/20/20 225/19/19
f 224/418/370 72/419/371 226/24/24
f 72/419/371 223/420/372 226/24/24
f 222/421/373 72/419/371 225/19/19
f 72/419/371 224/418/370 225/19/19
f 226/24/24 223/420/372 221/422/374
f 226/24/24 221/422/374 228/22/22
f 220/423/375 222/421/373 225/19/19
f 220/423/375 225/19/19 227/21/21
f 228/22/22 221/422/374 219/424/376
f 228/22/22 219/424/376 230/23/23
f 218/425/377 220/423/375 227/21/21
f 218/425/377 227/21/21 229/20/20
f 230/23/23 219/424/376 231/417/369
f 219/424/376 217/426/378 231/417/369
f 217/426/378 218/425/377 231/417/369
f 218/425/377 229/20/20 231/417/369
f 219/424/376 136/427/379 137/428/380
f 219/424/376 137/428/380 217/426/378
f 137/428/380 135/429/381 218/425/377
f 137/428/380 218/425/377 217/426/378
f 221/422/374 134/430/382 136/427/379
f 221/422/374 136/427/379 219/424/376
f 135/429/381 133/431/383 220/423/375
f 135/429/381 220/423/375 218/425/377
f 223/420/372 132/432/384 134/430/382
f 223/420/372 134/430/382 221/422/374
f 133/431/383 131/433/385 222/421/373
f 133/431/383 222/421/373 220/423/375
f 72/419/371 130/434/386 223/420/372
f 130/434/386 132/432/384 223/420/372
f 131/433/385 130/434/386 222/421/373
f 130/434/386 72/419/371 222/421/373
f 212/435/387 165/436/388 80/279/241
f 212/435/387 80/279/241 216/286/244
f 79/281/242 164/437/389 211/438/390
f 79/281/242 211/438/390 215/287/245
f 212/435/387 216/286/244 214/439/391
f 216/286/244 210/440/246 214/439/391
f 209/441/249 215/287/245 213/442/392
f 215/287/245 211/438/390 213/442/392
f 214/439/391 210/440/246 167/443/393
f 210/440/246 82/444/247 167/443/393
f 81/445/248 209/441/249 166/446/394
f 209/441/249 213/442/392 166/446/394
f 167/443/393 188/447/395 214/439/391
f 188/447/395 145/448/396 214/439/391
f 144/449/397 187/450/398 213/442/392
f 187/450/398 166/446/394 213/442/392
f 214/439/391 145/448/396 212/435/387
f 145/448/396 143/451/399 212/435/387
f 142/452/400 144/449/397 211/438/390
f 144/449/397 213/442/392 211/438/390
f 212/435/387 143/451/399 141/453/401
f 212/435/387 141/453/401 165/436/388
f 140/454/402 142/452/400 211/438/390
f 140/454/402 211/438/390 164/437/389
f 165/436/388 141/453/401 139/455/403
f 165/436/388 139/455/403 177/456/404
f 139/455/403 140/454/402 164/437/389
f 139/455/403 164/437/389 177/456/404
f 207/457/405 208/458/406 199/459/407
f 207/457/405 199/459/407 205/460/408
f 199/459/407 208/458/406 206/461/409
f 199/459/407 206/461/409 204/462/410
f 203/463/411 205/460/408 201/464/412
f 205/460/408 199/459/407 201/464/412
f 199/459/407 204/462/410 200/465/413
f 204/462/410 202/466/414 200/465/413
f 207/457/405 205/460/408 194/467/415
f 207/457/405 194/467/415 192/468/416
f 193/469/417 204/462/410 206/461/409
f 193/469/417 206/461/409 191/470/418
f 205/460/408 203/463/411 194/467/415
f 203/463/411 196/471/419 194/467/415
f 195/472/420 202/466/414 193/469/417
f 202/466/414 204/462/410 193/469/417
f 203/463/411 201/464/412 198/473/421
f 203/463/411 198/473/421 196/471/419
f 197/474/422 200/465/413 202/466/414
f 197/474/422 202/466/414 195/472/420
f 201/464/412 199/459/407 71/475/423
f 201/464/412 71/475/423 198/473/421
f 71/475/423 199/459/407 200/465/413
f 71/475/423 200/465/413 197/474/422
f 207/457/405 192/468/416 208/458/406
f 192/468/416 70/476/424 208/458/406
f 70/476/424 191/470/418 208/458/406
f 191/470/418 206/461/409 208/458/406
f 192/468/416 145/448/396 70/476/424
f 145/448/396 190/477/425 70/476/424
f 190/477/425 144/449/397 70/476/424
f 144/449/397 191/470/418 70/476/424
f 198/473/421 71/475/423 139/455/403
f 71/478/423 138/479/426 139/480/403
f 138/481/426 71/482/423 139/483/403
f 71/475/423 197/474/422 139/455/403
f 196/471/419 198/473/421 141/453/401
f 198/473/421 139/455/403 141/453/401
f 139/455/403 197/474/422 140/454/402
f 197/474/422 195/472/420 140/454/402
f 194/467/415 196/471/419 143/451/399
f 196/471/419 141/453/401 143/451/399
f 140/454/402 195/472/420 142/452/400
f 195/472/420 193/469/417 142/452/400
f 192/468/416 194/467/415 143/451/399
f 192/468/416 143/451/399 145/448/396
f 142/452/400 193/469/417 191/470/418
f 142/452/400 191/470/418 144/449/397
f 186/484/427 132/432/384 69/485/428
f 132/432/384 130/434/386 69/485/428
f 130/434/386 131/433/385 69/485/428
f 131/433/385 185/486/429 69/485/428
f 189/487/430 188/447/395 69/485/428
f 188/447/395 186/484/427 69/485/428
f 185/486/429 187/450/398 69/485/428
f 187/450/398 189/487/430 69/485/428
f 189/487/430 190/477/425 188/447/395
f 190/477/425 145/448/396 188/447/395
f 144/449/397 190/477/425 187/450/398
f 190/477/425 189/487/430 187/450/398
f 169/488/431 171/489/432 132/432/384
f 169/488/431 132/432/384 186/484/427
f 131/433/385 170/490/433 168/491/434
f 131/433/385 168/491/434 185/486/429
f 186/484/427 188/447/395 167/443/393
f 186/484/427 167/443/393 169/488/431
f 166/446/394 187/450/398 185/486/429
f 166/446/394 185/486/429 168/491/434
f 173/492/435 134/430/382 171/489/432
f 134/430/382 132/432/384 171/489/432
f 131/433/385 133/431/383 170/490/433
f 133/431/383 172/493/436 170/490/433
f 175/494/437 136/427/379 134/430/382
f 175/494/437 134/430/382 173/492/435
f 133/431/383 135/429/381 174/495/438
f 133/431/383 174/495/438 172/493/436
f 176/496/439 137/428/380 136/427/379
f 176/496/439 136/427/379 175/494/437
f 135/429/381 137/428/380 176/496/439
f 135/429/381 176/496/439 174/495/438
f 184/415/367 182/411/363 178/497/440
f 182/411/363 177/456/404 178/497/440
f 177/456/404 181/412/364 178/497/440
f 181/412/364 183/416/368 178/497/440
f 178/497/440 68/498/441 113/413/365
f 178/497/440 113/413/365 184/415/367
f 112/414/366 68/498/441 178/497/440
f 112/414/366 178/497/440 183/416/368
f 68/498/441 163/499/442 113/413/365
f 163/499/442 111/391/343 113/413/365
f 110/394/346 162/500/443 112/414/366
f 162/500/443 68/498/441 112/414/366
f 177/456/404 182/411/363 115/409/361
f 177/456/404 115/409/361 165/436/388
f 114/410/362 181/412/364 177/456/404
f 114/410/362 177/456/404 164/437/389
f 147/501/444 165/436/388 115/409/361
f 147/501/444 115/409/361 117/407/359
f 114/410/362 164/437/389 146/502/445
f 114/410/362 146/502/445 116/408/360
f 149/503/446 147/501/444 119/405/357
f 147/501/444 117/407/359 119/405/357
f 116/408/360 146/502/445 118/406/358
f 146/502/445 148/504/447 118/406/358
f 151/505/448 149/503/446 121/403/355
f 149/503/446 119/405/357 121/403/355
f 118/406/358 148/504/447 120/404/356
f 148/504/447 150/506/449 120/404/356
f 153/507/450 151/505/448 123/401/353
f 151/505/448 121/403/355 123/401/353
f 120/404/356 150/506/449 122/402/354
f 150/506/449 152/508/451 122/402/354
f 155/509/452 153/507/450 125/399/351
f 153/507/450 123/401/353 125/399/351
f 122/402/354 152/508/451 124/400/352
f 152/508/451 154/510/453 124/400/352
f 157/511/454 155/509/452 127/397/349
f 155/509/452 125/399/351 127/397/349
f 124/400/352 154/510/453 126/398/350
f 154/510/453 156/512/455 126/398/350
f 159/513/456 157/511/454 180/395/347
f 157/511/454 127/397/349 180/395/347
f 126/398/350 156/512/455 179/396/348
f 156/512/455 158/514/457 179/396/348
f 159/513/456 180/395/347 129/392/344
f 159/513/456 129/392/344 161/515/458
f 128/393/345 179/396/348 158/514/457
f 128/393/345 158/514/457 160/516/459
f 161/515/458 129/392/344 163/499/442
f 129/392/344 111/391/343 163/499/442
f 110/394/346 128/393/345 162/500/443
f 128/393/345 160/516/459 162/500/443
f 68/498/441 67/517/290 163/499/442
f 67/517/290 109/518/288 163/499/442
f 108/519/289 67/517/290 162/500/443
f 67/517/290 68/498/441 162/500/443
f 163/499/442 109/518/288 161/515/458
f 109/518/288 107/520/286 161/515/458
f 106/521/287 108/519/289 160/516/459
f 108/519/289 162/500/443 160/516/459
f 161/515/458 107/520/286 159/513/456
f 107/520/286 105/522/284 159/513/456
f 104/523/285 106/521/287 158/514/457
f 106/521/287 160/516/459 158/514/457
f 159/513/456 105/522/284 103/524/282
f 159/513/456 103/524/282 157/511/454
f 102/525/283 104/523/285 158/514/457
f 102/525/283 158/514/457 156/512/455
f 157/511/454 103/524/282 155/509/452
f 103/524/282 101/526/280 155/509/452
f 100/527/281 102/525/283 154/510/453
f 102/525/283 156/512/455 154/510/453
f 155/509/452 101/526/280 153/507/450
f 101/526/280 99/528/278 153/507/450
f 98/529/279 100/527/281 152/508/451
f 100/527/281 154/510/453 152/508/451
f 153/507/450 99/528/278 151/505/448
f 99/528/278 97/530/276 151/505/448
f 96/531/277 98/529/279 150/506/449
f 98/529/279 152/508/451 150/506/449
f 151/505/448 97/530/276 95/532/274
f 151/505/448 95/532/274 149/503/446
f 94/533/275 96/531/277 150/506/449
f 94/533/275 150/506/449 148/504/447
f 149/503/446 95/532/274 147/501/444
f 95/532/274 93/280/240 147/501/444
f 92/283/243 94/533/275 146/502/445
f 94/533/275 148/504/447 146/502/445
f 147/501/444 93/280/240 80/279/241
f 147/501/444 80/279/241 165/436/388
f 79/281/242 92/283/243 146/502/445
f 79/281/242 146/502/445 164/437/389
f 169/488/431 167/443/393 82/444/247
f 169/488/431 82/444/247 84/534/251
f 81/445/248 166/446/394 168/491/434
f 81/445/248 168/491/434 83/535/252
f 171/489/432 169/488/431 84/534/251
f 171/489/432 84/534/251 86/536/264
f 83/535/252 168/491/434 170/490/433
f 83/535/252 170/490/433 85/537/265
f 173/492/435 171/489/432 86/536/264
f 173/492/435 86/536/264 88/538/266
f 85/537/265 170/490/433 172/493/436
f 85/537/265 172/493/436 87/539/267
f 175/494/437 173/492/435 90/540/268
f 173/492/435 88/538/266 90/540/268
f 87/539/267 172/493/436 89/541/269
f 172/493/436 174/495/438 89/541/269
f 176/496/439 175/494/437 91/542/271
f 175/494/437 90/540/268 91/542/271
f 89/541/269 174/495/438 91/542/271
f 174/495/438 176/496/439 91/542/271
f 50/4/4 48/543/460 2/544/461
f 50/4/4 2/544/461 66/5/5
f 1/545/462 47/546/463 49/3/3
f 1/545/462 49/3/3 65/2/2
f 66/5/5 2/544/461 12/547/464
f 66/5/5 12/547/464 64/8/8
f 11/548/465 1/545/462 65/2/2
f 11/548/465 65/2/2 63/7/7
f 64/8/8 12/547/464 14/549/466
f 64/8/8 14/549/466 60/10/10
f 13/550/467 11/548/465 63/7/7
f 13/550/467 63/7/7 59/9/9
f 60/10/10 14/549/466 24/551/468
f 60/10/10 24/551/468 58/12/12
f 23/552/469 13/550/467 59/9/9
f 23/552/469 59/9/9 57/11/11
f 58/12/12 24/551/468 56/14/14
f 24/551/468 26/553/470 56/14/14
f 25/554/471 23/552/469 55/13/13
f 23/552/469 57/11/11 55/13/13
f 56/14/14 26/553/470 54/16/16
f 26/553/470 36/555/472 54/16/16
f 35/556/473 25/554/471 53/15/15
f 25/554/471 55/13/13 53/15/15
f 54/16/16 36/555/472 52/18/18
f 36/555/472 38/557/474 52/18/18
f 37/558/475 35/556/473 51/17/17
f 35/556/473 53/15/15 51/17/17
f 52/18/18 38/557/474 50/4/4
f 38/557/474 48/543/460 50/4/4
f 47/546/463 37/558/475 49/3/3
f 37/558/475 51/17/17 49/3/3
f 46/559/476 48/543/460 40/560/477
f 48/543/460 38/557/474 40/560/477
f 37/558/475 47/546/463 39/561/478
f 47/546/463 45/562/479 39/561/478
f 44/563/480 46/559/476 42/564/481
f 46/559/476 40/560/477 42/564/481
f 39/561/478 45/562/479 41/565/482
f 45/562/479 43/566/483 41/565/482
f 42/564/481 40/560/477 32/567/484
f 40/560/477 34/568/485 32/567/484
f 33/569/486 39/561/478 31/570/487
f 39/561/478 41/565/482 31/570/487
f 40/560/477 38/557/474 34/568/485
f 38/557/474 36/555/472 34/568/485
f 35/556/473 37/558/475 33/569/486
f 37/558/475 39/561/478 33/569/486
f 34/568/485 36/555/472 28/571/488
f 36/555/472 26/553/470 28/571/488
f 25/554/471 35/556/473 27/572/489
f 35/556/473 33/569/486 27/572/489
f 32/567/484 34/568/485 30/573/490
f 34/568/485 28/571/488 30/573/490
f 27/572/489 33/569/486 29/574/491
f 33/569/486 31/570/487 29/574/491
f 30/573/490 28/571/488 20/575/492
f 28/571/488 22/576/493 20/575/492
f 21/577/494 27/572/489 19/578/495
f 27/572/489 29/574/491 19/578/495
f 28/571/488 26/553/470 24/551/468
f 28/571/488 24/551/468 22/576/493
f 23/552/469 25/554/471 27/572/489
f 23/552/469 27/572/489 21/577/494
f 22/576/493 24/551/468 16/579/496
f 24/551/468 14/549/466 16/579/496
f 13/550/467 23/552/469 15/580/497
f 23/552/469 21/577/494 15/580/497
f 20/575/492 22/576/493 18/581/498
f 22/576/493 16/579/496 18/581/498
f 15/580/497 21/577/494 17/582/499
f 21/577/494 19/578/495 17/582/499
f 18/581/498 16/579/496 10/583/500
f 18/581/498 10/583/500 8/584/501
f 9/585/502 15/580/497 17/582/499
f 9/585/502 17/582/499 7/586/503
f 16/579/496 14/549/466 12/547/464
f 16/579/496 12/547/464 10/583/500
f 11/548/465 13/550/467 15/580/497
f 11/548/465 15/580/497 9/585/502
f 10/583/500 12/547/464 2/544/461
f 10/583/500 2/544/461 4/587/504
f 1/545/462 11/548/465 9/585/502
f 1/545/462 9/585/502 3/588/505
f 8/584/501 10/583/500 4/587/504
f 8/584/501 4/587/504 6/589/506
f 3/588/505 9/585/502 7/586/503
f 3/588/505 7/586/503 5/590/507
f 6/589/506 4/587/504 46/559/476
f 6/589/506 46/559/476 44/563/480
f 45/562/479 3/588/505 5/590/507
f 45/562/479 5/590/507 43/566/483
f 4/587/504 2/544/461 48/543/460
f 4/587/504 48/543/460 46/559/476
f 47/546/463 1/545/462 3/588/505
f 47/546/463 3/588/505 45/562/479
`;function Gp(i=1){return di(new zn(1,Math.round(40*i)))}function G_(i=1){return di(new Cr(.7,.32,Math.round(96*i),Math.round(200*i)).deleteAttribute("uv"))}function H_(i=.78,e=.26,t=56){let n=di(new Ai(2,2,2,t,t,t).deleteAttribute("uv").deleteAttribute("normal")),s=n.attributes.position,r=new P,a=new P,o=i-e,l=new Float32Array(s.count*3);for(let c=0;c<s.count;c++)r.fromBufferAttribute(s,c).multiplyScalar(i),a.set(Math.max(-o,Math.min(o,r.x)),Math.max(-o,Math.min(o,r.y)),Math.max(-o,Math.min(o,r.z))),r.sub(a).normalize(),l.set([r.x,r.y,r.z],c*3),r.multiplyScalar(e).add(a),s.setXYZ(c,r.x,r.y,r.z);return n.setAttribute("normal",new Mt(l,3)),n}function Hp(i,e=32){let t=Gp(),n=t.attributes.position,s=new Float32Array(n.count*3),r=new P,a=new P,o=0;for(let l=0;l<n.count;l++){r.fromBufferAttribute(n,l).normalize();let c=0;a.set(0,0,0);for(let h of i){let u=Math.max(0,h.dot(r));c+=u**e,a.addScaledVector(h,u**(e-1))}r.multiplyScalar(1/c**(1/e)),o=Math.max(o,r.length()),n.setXYZ(l,r.x,r.y,r.z),a.normalize(),s.set([a.x,a.y,a.z],l*3)}return t.scale(1.05/o,1.05/o,1.05/o),t.setAttribute("normal",new Mt(s,3)),t}function Wp(i){let e=i.attributes.position,t=new Map;for(let n=0;n<e.count;n++){let s=new P().fromBufferAttribute(e,n).normalize();t.set(s.toArray().map(r=>r.toFixed(4)).join(),s)}return[...t.values()]}var W_=()=>Hp(Wp(new Er(1,0))),X_=()=>Hp(Wp(new zn(1,0)));async function q_(){let e=Vp(V_,2);e.computeBoundingBox();let t=e.boundingBox.getCenter(new P);return e.translate(-t.x,-t.y,-t.z),e.computeBoundingSphere(),e.scale(1.15/e.boundingSphere.radius,1.15/e.boundingSphere.radius,1.15/e.boundingSphere.radius),e.computeVertexNormals(),e}var ua={sphere:{build:Gp,depth:.75,detail:!0},torus:{build:G_,depth:.22,detail:!0},"rounded cube":{build:H_,depth:.55},icosahedron:{build:W_,depth:.65},dodecahedron:{build:X_,depth:.7},suzanne:{build:q_,depth:.3,thin:!0}},bu=new Map;async function fa(i,{detail:e=1}={}){let t=e===1?i:`${i}|${e}`;if(bu.has(t))return bu.get(t);let n=ua[i],s=await(n.detail?n.build(e):n.build());s.attributes.normal||s.computeVertexNormals();let r=s.attributes.position.array,a=s.attributes.normal.array,o=s.index?s.index.array:Uint32Array.from({length:r.length/3},(g,m)=>m),l=new Float64Array(o.length/3),c=new P,h=new P,u=new P,f=0;for(let g=0;g<l.length;g++)c.fromArray(r,o[g*3]*3),h.fromArray(r,o[g*3+1]*3).sub(c),u.fromArray(r,o[g*3+2]*3).sub(c),f+=h.cross(u).length()*.5,l[g]=f;let p=(g,m=new P,_=new P)=>{let T=g()*f,M=0,E=l.length-1;for(;M<E;){let B=M+E>>1;l[B]<T?M=B+1:E=B}let w=g(),x=g();w+x>1&&(w=1-w,x=1-x);let y=1-w-x,[R,C,L]=[o[M*3]*3,o[M*3+1]*3,o[M*3+2]*3];for(let B=0;B<3;B++)m.setComponent(B,r[R+B]*y+r[C+B]*w+r[L+B]*x),_.setComponent(B,a[R+B]*y+a[C+B]*w+a[L+B]*x);return _.normalize(),m},d=n.thin?Y_(r,a):new Float32Array(r.length/3).fill(1e3),v={name:i,geometry:s,position:r,normal:a,index:o,room:d,depth:n.depth,sample:p};return bu.set(t,v),v}function Y_(i,e,t=.4){let n=i.length/3,s=new Float32Array(n).fill(t),r=new Map,a=o=>Math.floor(o/t);for(let o=0;o<n;o++){let l=`${a(i[o*3])},${a(i[o*3+1])},${a(i[o*3+2])}`;r.has(l)||r.set(l,[]),r.get(l).push(o)}for(let o=0;o<n;o++){let l=i[o*3],c=i[o*3+1],h=i[o*3+2],u=e[o*3],f=e[o*3+1],p=e[o*3+2],d=a(l),v=a(c),g=a(h),m=t*t;for(let _=-1;_<=1;_++)for(let T=-1;T<=1;T++)for(let M=-1;M<=1;M++){let E=r.get(`${d+M},${v+T},${g+_}`);if(E)for(let w of E){let x=i[w*3]-l,y=i[w*3+1]-c,R=i[w*3+2]-h;x*u+y*f+R*p>=0||u*e[w*3]+f*e[w*3+1]+p*e[w*3+2]>-.3||(m=Math.min(m,x*x+y*y+R*R))}}s[o]=Math.sqrt(m)*.45}return s}function Xp(i,e){let t=i.position.slice();for(let s=0;s<t.length;s++)t[s]-=i.normal[s]*Math.min(e,i.room[Math.floor(s/3)]);let n=new Ye;return n.setAttribute("position",new Mt(t,3)),n.setAttribute("normal",new Mt(i.normal.slice(),3)),n.setIndex(new Mt(Uint32Array.from(i.index),1)),n.computeBoundingSphere(),n}var $_={rewind:'<path d="M6 5h2v14H6zM20 5.5v13a.6.6 0 0 1-.9.5L9 12.5a.6.6 0 0 1 0-1l10.1-6.5a.6.6 0 0 1 .9.5z"/>',play:'<path d="M7 4.6v14.8a.7.7 0 0 0 1.05.6l12.3-7.4a.7.7 0 0 0 0-1.2L8.05 4A.7.7 0 0 0 7 4.6z"/>',pause:'<rect x="6" y="4" width="4" height="16" rx="1.2"/><rect x="14" y="4" width="4" height="16" rx="1.2"/>'};function Su(i){return`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">${$_[i]}</svg>`}function wu(i,e){let t=document.createElement("button");return t.type="button",t.className="transport-button",t.title=i,t.setAttribute("aria-label",i),t.innerHTML=e,t}function qp({value:i,duration:e=4,onRandomize:t,onPlay:n}){let s=document.createElement("div");s.id="transport";let r=wu("Rewind",Su("rewind")),a=wu("Play",Su("play")),o=wu("Randomize",'<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc2h1ZmZsZS1pY29uIGx1Y2lkZS1zaHVmZmxlIj4KICAgIDxwYXRoIGQ9Im0xOCAxNCA0IDQtNCA0Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJtMTggMiA0IDQtNCA0Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNMiAxOGgxLjk3M2E0IDQgMCAwIDAgMy4zLTEuN2w1LjQ1NC04LjZhNCA0IDAgMCAxIDMuMy0xLjdIMjIiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0yIDZoMS45NzJhNCA0IDAgMCAxIDMuNiAyLjIiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0yMiAxOGgtNi4wNDFhNCA0IDAgMCAxLTMuMy0xLjhsLS4zNTktLjQ1Ij48L3BhdGg+Cjwvc3ZnPg==" alt="" width="20" height="20" />'),l=document.createElement("input");l.type="range",l.min=0,l.max=1,l.step=.001,l.setAttribute("aria-label","Explosion");let c=document.createElement("span");c.className="transport-readout",s.append(r,a,o,l,c),document.body.append(s);let h=!1,u=1,f=0,p=v=>{h=v,a.innerHTML=Su(v?"pause":"play"),a.title=v?"Pause":"Play",a.setAttribute("aria-label",a.title)};r.addEventListener("click",()=>{p(!1),i.set(0)}),a.addEventListener("click",()=>{if(h)return p(!1);i()>=1&&i.set(0),u=1,f=1/e,p(!0),n?.()}),o.addEventListener("click",()=>t?.()),l.addEventListener("input",()=>{p(!1),i.set(Number(l.value))}),l.addEventListener("keydown",v=>{(v.code==="Space"||v.code==="KeyR")&&v.preventDefault()});function d(v){if(h){let m=Math.min(u,i()+v*f);i.set(m),m>=u&&p(!1)}let g=i();(document.activeElement!==l||h)&&(l.value=g),l.style.setProperty("--progress",`${g*100}%`),c.textContent=`${Math.round(g*100)}%`}return{update:d,setPlaying:p,play:(v=1,g=0)=>{u=v,f=g>0?Math.max(v-i(),.001)/g:1/e,p(!0)},get playing(){return h},get duration(){return e},set duration(v){e=v}}}var Yp=new URLSearchParams(location.search).has("capture");function $p({enabled:i,every:e,gui:t,min:n=5,max:s=60,ready:r=()=>!0,onChange:a=Xs}){let o=0,l=!1,c=un(""),h=()=>i()&&!Yp,u=()=>o=0;ra(u),Cd(u);let f={capture:!0,passive:!0};addEventListener("pointerdown",()=>(l=!0,u()),f);for(let g of["pointerup","pointercancel"])addEventListener(g,()=>(l=!1,u()),f);for(let g of["wheel","keydown"])addEventListener(g,u,f);let p=Yp?null:Z_();t&&(t.addCheckbox("Auto change",i,{randomizable:!1}),t.addSlider("Change every",e,n,s,1,{randomizable:!1}),t.addMonitor("Next change",c));function d(){return h()?sa()?l||!r()?"waiting":`in ${Math.max(1,Math.ceil(e()-o))} s`:"paused":"off"}function v(g){o=h()&&!l&&r()?o+g:0,o>=e()&&(o=0,a());let m=d();if(m!==c.peek()&&c.set(m),p){let _=h()&&sa();p.root.classList.toggle("shown",_),p.root.classList.toggle("waiting",l||!r()),_&&(p.set(l?"Waiting\u2026":r()?`${p.prefix} ${Math.max(1,Math.ceil(e()-o))} s`:"Randomizing\u2026"),p.root.style.setProperty("--left",Math.max(0,1-o/e())))}}return{update:v,restart:u,get remaining(){return h()?Math.max(0,e()-o):1/0}}}function Z_(){let i=document.createElement("div");i.id="auto-change";let e=document.createElement("span");i.append(e),document.body.append(i);let t=parseInt(location.pathname.split("/").at(-2)),n=Hs.find(r=>r.day===t)?.prompt,s=!1;return{root:i,prefix:n?`New ${n.toLowerCase()} in`:"Next change in",set(r){if(e.textContent===r&&s)return;e.textContent=r;let a=e.offsetWidth;s=a>0,s&&(i.style.width=`${a}px`)}}}var K_={subject:"shell",shape:"sphere",explosion:.5,spray:.7,focus:.15,aperture:.2,rotation:.8,auto:!0,autoTime:10},tt=gd(K_),em={shape:hu(1,"Loading the shape\u2026"),compile:hu(4,"Compiling shaders\u2026")},pn=new ec(fn,{background:16777215,exposure:.62,saturation:1.2,bloomStrength:.03,vignette:.06,grain:.02,shadow:{autoFit:!0,denoise:!0},depthOfField:{aperture:0}});Ee.aoMin.value=.2;Yd(fn,{keyDirection:new P(-.55,.8,.5),keyIntensity:9,keySize:.45,fill:.45,floor:.5,wall:.55,ceiling:.25});var J_={white:{background:[16,16,16],vignette:.06,exposure:.62},grey:{background:[.55,.56,.58],vignette:.5,exposure:.9},slate:{background:[.2,.21,.23],vignette:.6,exposure:.9,bloom:.07},dark:{background:[.035,.035,.038],vignette:.55,exposure:1.1},night:{background:[.012,.014,.02],vignette:.6,exposure:1.1,bloom:.16}},on=new ld(Fd(),document.querySelector("#gui-container"),{expanded:!1});on.addSelect("Subject",tt.subject,Object.keys(tc).filter(i=>!tc[i].disabled));on.addSelect("Shape",tt.shape,Object.keys(ua));on.addSlider("Explosion",tt.explosion,0,1,.01);on.addSlider("Spray",tt.spray,0,1,.01);on.addSlider("Rotation",tt.rotation,0,2,.01,{randomizable:!1});var Zp=$p({enabled:tt.auto,every:tt.autoTime,gui:on});on.addSection("Depth of field",{open:!0});on.addSlider("Focus",tt.focus,-.5,1.5,.01,{randomizable:!1});on.addSlider("Aperture",tt.aperture,0,1,.01,{randomizable:!1});on.endSection();pn.addGUI(on);on.addSeparator();on.addText(Id());Ld("Drag to orbit \xB7 scroll to zoom \xB7 R for a new burst","Drag to orbit \xB7 tap {randomize} for a new burst");on.show();var nr=new Kt,Nn={shell:_u(),fill:yu(),fleck:yu(),core:Mu({roughness:.35,through:0}),drop:Mu({roughness:.18,specular:1,through:1.2})};Nn.chip=kp(Nn.shell);var pa=3e3,uc=4500,oc=1e3,tm=30,Pu=new si;nr.add(Pu);var ic=new rt(new Ye,Nn.core);nr.add(ic);var nm=[0,1,2].map(i=>Np(i+1)),j_=Math.max(...nm.map(i=>(i.computeBoundingSphere(),i.boundingSphere.center.length()+i.boundingSphere.radius))),er=nm.map(i=>new li(i,Nn.fill,tm)),im=di(new zn(1,2));im.computeVertexNormals();var sc=new li(im,Nn.drop,pa),lc=[3,4,5].map((i,e)=>Fp(e+7,i)),rs=lc.map(i=>new li(i,Nn.chip,Math.ceil(uc/lc.length))),rc=lc.map(i=>new li(i,Nn.shell,Math.ceil(uc/lc.length))),ac=new li(Dp(),Nn.fleck,oc);for(let i of[...er,sc,...rs,...rc,ac])i.frustumCulled=!1,nr.add(i);var os=1,as=null,mt=null,ss=null,tr=[],Iu=[],cc=[],Lu=[],Tu=new P(.75,.35,.55).normalize(),Q_=40*Math.PI/180,ga=new P;function e4(i){let e=1-i()*(1-Math.cos(Q_)),t=Math.sqrt(1-e*e),n=i()*Math.PI*2,s=new P().crossVectors(Tu,new P(0,1,0)).normalize(),r=new P().crossVectors(Tu,s);ga.copy(Tu).multiplyScalar(e).addScaledVector(s,Math.cos(n)*t).addScaledVector(r,Math.sin(n)*t)}function Eu(i){if(mt.burst==="radial")return 1;let e=i.dot(ga);return Math.max(0,Math.min(1,(e+.1)/.8))**1.6}function Kp(i,e,t){return mt.burst==="radial"?i.clone().multiplyScalar(t).add(Hn(e).multiplyScalar(t*.2)):i.clone().multiplyScalar(.5).add(ga).add(new P(.15,-.35,0)).normalize().multiplyScalar(t).add(Hn(e).multiplyScalar(t*.25))}function t4(){mt=tc[tt.subject()],ss=zi.get(tt.shape());for(let l of tr)Pu.remove(l.mesh),l.mesh.geometry.dispose();e4(ha(os^1540483477));let i=ha(os),e=mt.fracture??{},t=e.stretch?n4(ss,ga):null;tr=Lp({seed:os,count:mt.pieces,shape:ss,thickness:mt.thickness,warp:e.warp,stretch:e.stretch,impact:t}).map(l=>{let c=new rt(l.geometry,Nn.shell);Pu.add(c);let h=Eu(l.direction);return{mesh:c,centre:l.centre,tear:l.tear,velocity:Kp(l.direction,i,(2+2*i())*h),axis:Hn(i),spin:(2+7*i())*h}}),ic.visible=!!mt.core,ic.geometry.dispose(),ic.geometry=Xp(ss,mt.thickness+.004);let n=new P,s=new P,r=l=>{ss.sample(i,n,s);let c=n.clone().addScaledVector(s,-l*ss.depth);return{start:c,out:s.clone().add(c.clone().normalize()).normalize()}};Iu=[];let a=mt.fill?mt.fill.chunks:0;for(let l=0;l<tm*er.length;l++){let{start:c,out:h}=r(.3+.7*i()),u=mt.fill?mt.fill.lumpy:1,f=new P(1+.3*u,1-.5*u*i(),1-.3*u*i()),p=Math.max(0,i4(ss,c)-mt.thickness-.01)/(j_*f.x);Iu.push({on:l<a,start:c,velocity:h.multiplyScalar(.4+1.2*i()).add(Hn(i).multiplyScalar(.15)),scale:f.multiplyScalar(Math.min(.16+.22*i(),p)),axis:Hn(i),spin:1+4*i(),turn:Hn(i)})}let o=tr.flatMap(l=>l.tear);cc=[];for(let l=0;l<pa+oc;l++){let c=o[Math.floor(i()*o.length)],h=c.p.clone().addScaledVector(c.n,-(mt.thickness+.02+.08*i())),u=1+6.5*i()**2.2,f=c.n.clone().add(Hn(i).multiplyScalar(.08)).normalize();cc.push({start:h,velocity:f.multiplyScalar(u),size:(.0025+.03*i()**4)/Math.sqrt(u/2),axis:Hn(i),spin:4+12*i()})}Lu=[];for(let l=0;l<uc;l++){let c=r(0);for(let g=0;g<8&&i()>Eu(c.out);g++)c=r(0);let h=c.out,u=Math.max(.15,Eu(h)),f=n.clone().addScaledVector(s,-mt.thickness*.5),p=(1+6*i()**1.5)*u,d=i()<.012*(mt.spray.bigChips??1),v=(d?.12+.12*i():.012+.07*i()**2.2)*(mt.spray.chipSize??1);Lu.push({start:f,velocity:Kp(h,i,d?p*1.6+2:p),size:v,big:d,axis:Hn(i),spin:3+14*i(),turn:Hn(i)})}}function n4(i,e){let t=i.position,n=0,s=-1/0;for(let r=0;r<t.length;r+=3){let a=t[r]*e.x+t[r+1]*e.y+t[r+2]*e.z;a>s&&(s=a,n=r)}return new P(t[n],t[n+1],t[n+2])}function i4(i,e){let t=i.position,n=1/0;for(let s=0;s<t.length;s+=9)n=Math.min(n,(t[s]-e.x)**2+(t[s+1]-e.y)**2+(t[s+2]-e.z)**2);return Math.sqrt(n)}var nc=new Be,Bi=new bt,Jp=new bt,ki=new P,Au=new P,Cu=new P(0,0,1),s4=new P,da=new Be().makeScale(0,0,0);function r4(){let i=tt.explosion()*.6,e=tt.spray();for(let r of tr)r.mesh.position.copy(r.centre).addScaledVector(r.velocity,i),r.mesh.quaternion.setFromAxisAngle(r.axis,r.spin*i);Iu.forEach((r,a)=>{let o=er[a%er.length],l=Math.floor(a/er.length);if(!r.on)return o.setMatrixAt(l,da);ki.copy(r.start).addScaledVector(r.velocity,i),Bi.setFromAxisAngle(r.axis,r.spin*i).multiply(Jp.setFromUnitVectors(Cu,r.turn)),o.setMatrixAt(l,nc.compose(ki,Bi,r.scale))});for(let r of er)r.instanceMatrix.needsUpdate=!0;let t=Math.round(pa*e*(mt.spray.drops??0));for(let r=0;r<pa;r++){if(r>=t){sc.setMatrixAt(r,da);continue}let a=cc[r];ki.copy(a.start).addScaledVector(a.velocity,i);let o=a.velocity.length();Bi.setFromUnitVectors(Cu,s4.copy(a.velocity).normalize());let l=1+o*o*.35*Math.min(1,i*8),c=a.size/l**.25;sc.setMatrixAt(r,nc.compose(ki,Bi,Au.set(c,c,a.size*l)))}sc.instanceMatrix.needsUpdate=!0;let n=mt.spray.flecks?Math.round(oc*e):0;for(let r=0;r<oc;r++){if(r>=n){ac.setMatrixAt(r,da);continue}let a=cc[pa+r];ki.copy(a.start).addScaledVector(a.velocity,i*.8),Bi.setFromAxisAngle(a.axis,a.spin*i),ac.setMatrixAt(r,nc.compose(ki,Bi,Au.set(a.size*.9,a.size*.9,a.size*2.6)))}ac.instanceMatrix.needsUpdate=!0;let s=Math.round(uc*e*(mt.spray.chips??0));Lu.forEach((r,a)=>{let o=a%rs.length,l=(r.big?rc:rs)[o],c=Math.floor(a/rs.length);if((r.big?rs:rc)[o].setMatrixAt(c,da),a>=s||i<=0)return l.setMatrixAt(c,da);ki.copy(r.start).addScaledVector(r.velocity,i),Bi.setFromAxisAngle(r.axis,r.spin*i).multiply(Jp.setFromUnitVectors(Cu,r.turn)),l.setMatrixAt(c,nc.compose(ki,Bi,Au.set(r.size*(mt.spray.chipStretch??1),r.size,r.size*(mt.spray.chipThin??1))))});for(let r of[...rs,...rc])r.instanceMatrix.needsUpdate=!0}var Ru=null,zi=new Map,jp=null;function hc(){let i=`${tt.subject()}|${tt.shape()}|${os}`;if(i!==as&&!zi.has(tt.shape())){let t=tt.shape();jp!==t&&(jp=t,fa(t).then(n=>zi.set(t,n)))}else if(i!==as){as=i,t4(),Ru=null,Bp(Nn,mt);for(let n of rs)n.material=mt.shell.glow?Nn.shell:Nn.chip;pn.restartAccumulation();let t=J_[mt.set];pn.background.setRGB(...t.background),pn.vignette=t.vignette,pn.bloomStrength=t.bloom??.03,pn.exposure=t.exposure}let e=`${as}|${tt.explosion()}|${tt.spray()}`;if(e!==Ru&&(Ru=e,r4()),Nu!==null)pn.dof.focus=Nu;else if(tr.length){let[t,n]=a4(Wt.position);pn.dof.focus=Math.max(Wt.near*2,t+(n-t)*tt.focus())}pn.dof.aperture=tt.aperture()*.024}function a4(i){let e=1/0,t=0;for(let n of tr){let s=n.mesh.position.distanceTo(i);e=Math.min(e,s),t=Math.max(t,s)}return[e,t]}ra(()=>{on.randomizeAll(),os=Math.floor(Math.random()*2**31)});Wt.near=.2;Wt.far=60;Wt.updateProjectionMatrix();Wt.position.set(.8,.5,6.5);an.target.set(0,0,0);an.enablePan=!1;an.minDistance=3;an.maxDistance=14;an.autoRotate=!0;var o4=2.6;Td((i,e,t)=>{let n=Math.atan(Math.tan(Wt.fov*Math.PI/360)*Math.min(1,i/e)),s=Wt.position.clone().sub(an.target);s.setLength(Math.min(an.maxDistance,o4/Math.sin(n))),Wt.position.copy(an.target).add(s),pn.setSize(i,e,t)});var ma=qp({value:tt.explosion,onRandomize:Xs,onPlay:()=>sa()||cu(!0)}),Nu=null,sm,rm=new Promise(i=>sm=i);window.app={canvas:fn.domElement,params:tt,pipeline:pn,camera:Wt,controls:an,transport:ma,side:ga,get subject(){return mt},async preload(){for(let i of Object.keys(ua))zi.has(i)||zi.set(i,await fa(i));await rm},nextLook(i){i&&(os=i.seed??os,tt.subject.set(i.subject),tt.shape.set(i.shape),hc(),this.bounce())},bounce(){tt.explosion.set(0),ma.play()},frame(i,e,t=Wt.position.clone().sub(an.target)){t=t.clone().normalize(),an.target.copy(e),Wt.position.copy(e).addScaledVector(t,i),an.update()},focusAt(i){Nu=i},warm(i){for(let e=0;e<i;e++)hc(),pn.render(nr,Wt,0)}};uu();zi.set(tt.shape(),await em.shape.track(fa(tt.shape())));hc();await em.compile.track(pn.compileAsync(nr,Wt),4);var l4=.6,am=()=>tt.auto()&&!new URLSearchParams(location.search).has("capture"),Qp=as,Du=!1;function om(){tt.explosion.set(0),ma.play(1,tt.autoTime()*l4)}ra(()=>{am()&&(ma.setPlaying(!1),tt.explosion.set(0),Du=!0)});am()&&!new URLSearchParams(location.search).has("explosion")&&om();Od(({dt:i})=>{Zp.update(i),ma.update(i),hc(),as!==Qp&&(Qp=as,Zp.restart(),Du&&(Du=!1,om())),an.autoRotateSpeed=tt.rotation(),an.update(i),pn.render(nr,Wt,0),sm()});rm.then(async()=>{for(let i of Object.keys(ua))await new Promise(e=>setTimeout(e,300)),zi.has(i)||zi.set(i,await fa(i))});
