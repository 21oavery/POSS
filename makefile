all:
	clang --target=wasm32 -O3 kern.c -nostdlib -o kern.wasm
