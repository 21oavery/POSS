typedef unsigned int uint32_t;
typedef int int32_t;
typedef unsigned long uint64_t;
typedef long int64_t;

#if sizeof(void *) == 4
typedef uint32_t size_t;
#elif sizeof(void *) == 8
typedef uint64_t size_t;
#else
You don't have pointer types working or something, because we can't define size_t
#endif
