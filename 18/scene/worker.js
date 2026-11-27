import { apply } from "./apply.js";
import { Pendulum } from "./pendulum.js";
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
    apply(p, m);
    if (m.t === "dispose") {
        p = null;
        close();
    }
};
