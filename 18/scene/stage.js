// STAGE
// page side: size, visibility, pointer; scene in a worker when possible, else here
const TAP_MS = 250;
const TAP_PX = 6;
const KEYS = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", " "]);
export class Stage {
    canvas;
    post;
    onShown = () => { };
    onLost = () => { };
    cleanups = [];
    left = 0;
    top = 0;
    pointer = -1;
    downX = 0;
    downY = 0;
    downT = 0;
    visible = false;
    dead = false;
    constructor(canvas, post) {
        this.canvas = canvas;
        this.post = post;
    }
    static async create(canvas) {
        const mq = matchMedia("(prefers-reduced-motion: reduce)");
        let stage;
        if ("transferControlToOffscreen" in canvas && "OffscreenCanvas" in window) {
            const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
            const off = canvas.transferControlToOffscreen();
            stage = new Stage(canvas, (m) => worker.postMessage(m));
            worker.onmessage = (e) => stage.hear(e.data);
            worker.onerror = () => stage.hear({ t: "lost" });
            worker.postMessage({ t: "init", canvas: off, reduced: mq.matches }, [off]);
            stage.cleanups.push(() => setTimeout(() => worker.terminate(), 1000));
        }
        else {
            const [{ Pendulum }, { apply }] = await Promise.all([
                import("./pendulum.js"),
                import("./apply.js"),
            ]);
            const p = new Pendulum(canvas, mq.matches);
            stage = new Stage(canvas, (m) => apply(p, m));
            p.onShown = () => stage.onShown();
            p.onLost = () => stage.onLost();
        }
        stage.watch(mq);
        return stage;
    }
    spin() {
        this.post({ t: "spin" });
    }
    shape(name) {
        this.post({ t: "shape", v: name });
    }
    surface(name) {
        this.post({ t: "surface", v: name });
    }
    hear(m) {
        if (this.dead)
            return;
        if (m.t === "shown")
            this.onShown();
        else
            this.onLost();
    }
    // OBSERVERS
    watch(mq) {
        const c = this.canvas;
        const ro = new ResizeObserver(([e]) => {
            const r = c.getBoundingClientRect();
            this.left = r.left;
            this.top = r.top;
            const box = e.contentRect;
            this.post({ t: "size", w: box.width, h: box.height, dpr: window.devicePixelRatio || 1 });
        });
        ro.observe(c);
        const show = () => this.post({ t: "show", v: this.visible && !document.hidden });
        const io = new IntersectionObserver(([e]) => {
            this.visible = e.isIntersecting;
            show();
        });
        io.observe(c);
        const onMotion = () => this.post({ t: "motion", v: mq.matches });
        document.addEventListener("visibilitychange", show);
        mq.addEventListener("change", onMotion);
        const opts = { passive: true };
        c.addEventListener("pointerdown", this.down, opts);
        c.addEventListener("pointermove", this.move, opts);
        c.addEventListener("pointerup", this.up, opts);
        c.addEventListener("pointercancel", this.up, opts);
        c.addEventListener("keydown", this.key);
        this.cleanups.push(() => ro.disconnect(), () => io.disconnect(), () => document.removeEventListener("visibilitychange", show), () => mq.removeEventListener("change", onMotion), () => c.removeEventListener("pointerdown", this.down), () => c.removeEventListener("pointermove", this.move), () => c.removeEventListener("pointerup", this.up), () => c.removeEventListener("pointercancel", this.up), () => c.removeEventListener("keydown", this.key));
    }
    // INPUT
    down = (e) => {
        if (this.pointer !== -1)
            return;
        this.pointer = e.pointerId;
        this.canvas.setPointerCapture(e.pointerId);
        this.canvas.style.cursor = "grabbing";
        this.downX = e.clientX;
        this.downY = e.clientY;
        this.downT = performance.now();
        this.post({ t: "down", x: e.clientX - this.left, y: e.clientY - this.top, ms: e.timeStamp });
    };
    move = (e) => {
        if (e.pointerId !== this.pointer)
            return;
        this.post({ t: "move", x: e.clientX - this.left, y: e.clientY - this.top, ms: e.timeStamp });
    };
    up = (e) => {
        if (e.pointerId !== this.pointer)
            return;
        this.pointer = -1;
        this.canvas.style.cursor = "";
        const tap = performance.now() - this.downT < TAP_MS &&
            Math.hypot(e.clientX - this.downX, e.clientY - this.downY) < TAP_PX;
        this.post({ t: "up", x: e.clientX - this.left, tap, ms: e.timeStamp });
    };
    key = (e) => {
        if (!KEYS.has(e.key))
            return;
        e.preventDefault();
        this.post({ t: "key", k: e.key });
    };
    dispose() {
        if (this.dead)
            return;
        this.post({ t: "dispose" });
        this.dead = true;
        this.cleanups.forEach((fn) => fn());
        this.cleanups.length = 0;
    }
}
