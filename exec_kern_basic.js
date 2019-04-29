"use strict";
(function() {
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
    console.log("Setting up basic functions...");
    console.log("Setting up file system...");
    let fsBin = {};
    let fsMap = {};
    let defaultMap = function(f) {return null};
    let fs = {
        "getPath": function(name) {
            name = name + "";
            let path = [];
            let sPos = -1;
            for (let i = 0; i < name.length; i++) {
                let c = name.charAt(i);
                switch (c) {
                    case "\\":
                    case "/":
                        if (sPos !== -1) {
                            let sNew = name.substring(sPos, i);
                            if (sNew == "..") {
                                if (path.length === 0) return null;
                                path.
        "seperate": function(name)
        "_getFile": function(name)
        "list": function()
        "read": function()
    };
    console.log("Setting up thread system");
    let nxtPID = 0;
    let processes = [];
    let sysCall = function(pid) {
        switch (e.id | 0) {
            case 0: // Open file
                if 
    };
    let errHandle = function(e, pid) {
    };
    let addProcess = function(f) {
        let pid = nxtPID++;
        let w = new Worker("");
        w.onmessage = function(e) {return sysCall(pid)};
        w.onerror = function(e) {return errHandle(pid)};
        // priority, worker, handles, mem_buffer
        processes[pid] = [0, w, [], new SharedArrayBuffer()]
    };
    console.log("Setting up dynamic library system...");
    let dyn = {};
    let link = function(paths, name) {
        
    console.log("Done, running init...");
})();
