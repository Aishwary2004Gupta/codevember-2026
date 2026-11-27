import { apply } from "./apply.js?v=glass-grab-11";
import { Pendulum } from "./pendulum.js?v=glass-grab-11";
// WORKER
// waking a cold gpu here never blocks the page
let p = null;
const send = (m) => postMessage(m);
self.onmessage = (e) => {
    const m = e.data;
    if (m.t === "init") {
        try {
            p = new Pendulum(m.canvas, m.reduced);
        }
        catch {
            send({ t: "lost" });
            return;
        }
        p.onShown = () => send({ t: "shown" });
        p.onLost = () => send({ t: "lost" });
        return;
    }
    if (!p)
        return;
    const result = apply(p, m);
    if (m.t === "down") send({ t: "drag", id: m.id, v: result === true });
    if (m.t === "dispose") {
        p = null;
        close();
    }
};
