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
    console.log("Setting up users...");
    let users = {0: ["root", []]};
    let user_addUser = function(id, name) {
        id = id | 0;
        name = name + "";
        if (users[id] !== null) throw "User already exists";
        // Name, parents
        users[id] = [name, []];
    };
    let user_getParents = function(id) {
        id = id | 0;
        let u = users[id];
        if (u === null) throw "User does not exist";
        let p = u[1];
        return p.splice(0, p.length);
    };
    let user_hasParent = function(id, groupId) {
        id = id | 0;
        let u = users[id];
        if (u === null) throw "User does not exist";
        let p = u[1];
        let l = p.length;
        for (let i = 0; i < l; i++) {
            p
        groupId = groupId | 0;
        if (groups[groupId] == null) throw "Group does not exist";
        return users
    };
    let user_addToGroup = function(name, group) {
        name = name + "";
        group = group + "";
        if ()
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
                            let sTmp = name.substring(sPos, i);
                            switch (sTmp) {
                                case "..":
                                    if (path.length == 0) {
                                        return null;
                                    }
                                    path.pop();
                                case ".":
                                    break;
                                default:
                                    path.append(sTmp);
                            }
                            sPos = -1;
                        }
                        break;
                    default:
                        if (sPos == -1) {
                            sPos = i;
                        }
                }
            }
            if (sPos != -1) {
                switch (sTmp) {
                    case "..":
                        if (path.length == 0) {
                            return null;
                        }
                        path.pop();
                    case ".":
                        break;
                    default:
                        path.append(sTmp);
                }
            }
            return path;
        },
        "seperate": function(name) {
        },
        "_getFile": function(name) {
        },
        "list": function(name, pid) {
        },
        "_checkRead": function(pid, perm) {
            if (file
        },
        "read": function(name, pid) {
        },
        "_checkExec": function(pid, perm) {
            if ((perm & 1) !== 0) return true;
            else if ()
        },
        "exec": function(name, pid) {
            let file = fs._getFile(name);
            if (file.permBits & 1)
        }
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
