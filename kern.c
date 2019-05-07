#define EXPORT __attribute__((visibility("default")))

extern void conlog(const char *, int len);

EXPORT int main() {
    conlog("HI", 2);
    return 0;
}
