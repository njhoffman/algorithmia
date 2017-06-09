// O(n) time complexity, O(n) extra space
#include <stdio.h>
#include <float.h>
#include <time.h>

double fib(int n) {
  double f[n + 1];
  int i;
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

int main(void) {
  clock_t t;
  int n = 1000;
  int i;
  double time_taken, ret;
  for (i = 0; i < n; i++) {
    t = clock();
    ret = fib(i);
    t = clock() - t;
    time_taken = ((double) t) / CLOCKS_PER_SEC;
    printf("%lg\t%f\n", ret, time_taken);
  }
  return 0;
}
