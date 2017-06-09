// O(n-1) + O(n-2) time complexity, O(n) extra space
#include <stdio.h>

int fib(int n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

int main(void) {
  int n = 40;
  int i;
  for (i = 0; i < n; i++) {
    printf("%d\n", fib(i));
  }

  return 0;
}
