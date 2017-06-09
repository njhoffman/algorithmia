// O(n) time complexity, O(n) extra space
#include <stdio.h>

int fib(int n) {
  int f[n + 1];
  int i;
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

int main(void) {
  int n = 45;
  int i;
  printf("%d\n", sizeof(int));
  for (i = 0; i < n; i++) {
    printf("%d\n", fib(i));
  }
  return 0;
}
