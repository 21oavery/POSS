all:
	clang --target=wasm32 -O3 -Wl,--allow-undefined kern.c -nostdlib -o kern.wasm
