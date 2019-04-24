"use strict";
(function() {
    console.log("Starting bios...");
    console.log("Starting screen...");
    let screen = null;
    let screenX, screenY;
    (function {
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
    console.log("Setting up basic functions...");
    console.log("Setting up file system...");
    let fsBin = {};
    let fsMap = {};
    let defaultMap = function(f) {return null};
    console.log("Setting up thread system");
    let nxtPID = 0;
    let processes = [];
    let sysCall = function(e, pid) {
    };
    let errHandle = function(e, pid) {
    };
    let addProcess = function(f) {
        let pid = nxtPID++;
        let w = new Worker("");
        w.onmessage = function(e) {return sysCall(e, pid)};
        w.onerror = function(e) {return errHandle(e, pid)};
        // priority, worker
        processes[pid] = [0, w]
    };
    console.log("Setting up dynamic library system...");
    let dyn = {};
    let loadLibrary = function(file) {};
    let addLibrary = function(env, libName) {
        let d = dyn[libName];
        if (d == null) dyn[libName] = d = loadLibrary(libName);
        for ()
    };
    console.log("Done, running init...");
