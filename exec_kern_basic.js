"use strict";
(function() {
    if (WebAssembly == null) {
        console.log("[ERROR] WebAssembly not found");
        return;
    }
    console.log("Starting bios...");
    console.log("Starting screen...");
    let screen = null;
    let screenX, screenY;
    (function() {
        let se = document.getElementById("screen");
        if (se == null) {
            console.log("[ERROR] Could not find screen");
            return;
        }
        screenX = se.width = 640;
        screenY = se.height = 320;
        screen = se.getContext("2d", {"alpha": false});
        if (screen == null) {
            console.log("[ERROR] Could not get 2d context");
            return;
        }
        screen.clearRect(0, 0, screenX, screenY);
    })();
    console.log("Loading kernal...");
    let kernalMem = new WebAssembly.Memory({"initial": 256});
    WebAssembly.instantiateStreaming(fetch("kern.wasm"), {"env": {
        "memory": kernalMem,
        "conlog": function(offset, len) {
            var data = new Uint8Array(kernalMem.buffer, offset, len);
            console.log(offset);
            console.log(data);
            //console.log(new TextDecoder("ansi").decode(data));
        }
    }}).then(mod => {
        console.log(mod);
        mod.instance.exports._start();
    });
})();
