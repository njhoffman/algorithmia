#include <stdio.h>
#include <float.h>
#include <time.h>

double fib_recursion(int n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n -2);
}

double fib_dynamic(int n) {
  double nums[n + 1];
  int i;
  nums[0] = 0;
  nums[1] = 1;
  for (i = 2; i < n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return f[n];
}

int main(int argc, char *argv[]) {
  clock_t t;
  int n = 40;
  int i;
  double time_taken, result;
  for (i = 0; i < n; i++) {
    t = clock();
    result = fib_recursion(i);
    time_taken = (double) (clock() - t) / CLOCKS_PER_SEC;
    printf("%d\t%g\t%f\n", i, result, time_taken);
  }
}
