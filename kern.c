#include "users.c"

#define EXPORT __attribute__((visibility("default")))

extern void __wasm_call_ctors();

extern void conlog(const char *, int len);

int _start() {
    conlog("HI", 2);
    return 0;
}

EXPORT int 
