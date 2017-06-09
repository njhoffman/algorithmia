// O(n-1) + O(n-2) time complexity, O(n) extra space
#include <stdio.h>
#include <float.h>
#include <time.h>


double fib(int n) {
  if (n <= 1) {
    return (double) n;
  }
  return fib(n - 1) + fib(n - 2);
}

int main(void) {
  clock_t t;
  int n = 50;
  int i;
  double ret, time_taken;
  for (i = 0; i < n; i++) {
    t = clock();
    ret = fib(i);
    t = clock() - t;
    time_taken = ((double) t) / CLOCKS_PER_SEC;
    printf("%g\t\t%f\n", fib(i), time_taken);
  }

  return 0;
}
