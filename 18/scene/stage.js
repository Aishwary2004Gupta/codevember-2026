// STAGE
// page side: size, visibility, pointer; scene in a worker when possible, else here
export class Stage {
    canvas;
    post;
    onShown = () => { };
    onLost = () => { };
    cleanups = [];
    left = 0;
    top = 0;
    pointer = -1;
    dragging = false;
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
            const worker = new Worker(new URL("./worker.js?v=glass-grab-10", import.meta.url), { type: "module" });
            const off = canvas.transferControlToOffscreen();
            stage = new Stage(canvas, (m) => worker.postMessage(m));
            worker.onmessage = (e) => stage.hear(e.data);
            worker.onerror = () => stage.hear({ t: "lost" });
            worker.postMessage({ t: "init", canvas: off, reduced: mq.matches }, [off]);
            stage.cleanups.push(() => setTimeout(() => worker.terminate(), 1000));
        }
        else {
            const [{ Pendulum }, { apply }] = await Promise.all([
                import("./pendulum.js?v=glass-grab-10"),
                import("./apply.js?v=glass-grab-10"),
            ]);
            const p = new Pendulum(canvas, mq.matches);
            stage = new Stage(canvas, (m) => apply(p, m));
            p.onShown = () => stage.onShown();
            p.onLost = () => stage.onLost();
        }
        stage.watch(mq);
        return stage;
    }
    shape(name) {
        this.post({ t: "shape", v: name });
    }
    hear(m) {
        if (this.dead)
            return;
        if (m.t === "drag") {
            if (m.id === this.pointer) {
                this.dragging = m.v;
                this.canvas.style.cursor = this.dragging ? "grabbing" : "";
            }
        }
        else if (m.t === "shown")
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
        this.cleanups.push(() => ro.disconnect(), () => io.disconnect(), () => document.removeEventListener("visibilitychange", show), () => mq.removeEventListener("change", onMotion), () => c.removeEventListener("pointerdown", this.down), () => c.removeEventListener("pointermove", this.move), () => c.removeEventListener("pointerup", this.up), () => c.removeEventListener("pointercancel", this.up));
    }
    // INPUT
    down = (e) => {
        if (this.pointer !== -1)
            return;
        this.pointer = e.pointerId;
        this.canvas.setPointerCapture(e.pointerId);
        this.dragging = false;
        const accepted = this.post({ t: "down", id: e.pointerId, x: e.clientX - this.left, y: e.clientY - this.top, ms: e.timeStamp });
        if (accepted === true) {
            this.dragging = true;
            this.canvas.style.cursor = "grabbing";
        }
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
        this.dragging = false;
        this.canvas.style.cursor = "";
        this.post({ t: "up", ms: e.timeStamp });
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
