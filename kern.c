#define EXPORT __attribute__((visibility("default")))

extern void __wasm_call_ctors();

extern void conlog(const char *, int len);

int _start() {
    __wasm_call_ctors();
    conlog("HI", 2);
    return 0;
}
