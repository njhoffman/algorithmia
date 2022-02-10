#include <stdio.h>
#include <float.h>
#include <time.h>


double fib_recursion(int n) {
  // O(n^2), space O(n)
  if (n <= 1) {
    return n;
  }
  return fib_recursion(n - 1) + fib_recursion(n - 2);
}

double fib_dynamic1(int n) {
  // O(n) time, O(n) space
  double nums[n];
  nums[0] = 0;
  nums[1] = 1;
  int i;
  for (i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums[n];
}

double fib_dynamic2(int n) {
  double a = 1, b = 0, c = 1;
  int i;
  for (i = 2; i <= n; i++) {
    c = a;
    a = a + b;
    b = c;
  }
  return a;
}

int main (int agrc, char *argv[]) {
  clock_t t;
  int n = 40;
  int i;
  double time_taken, result;
  for (i = 0; i < n; i++) {
    t = clock();

    /* result = fib_recursion(i); */
    /* result = fib_dynamic1(i); */
    result = fib_dynamic2(i);

    t = clock() - t;
    time_taken = (double) (t / CLOCKS_PER_SEC);
    printf("%d\t%f\t\t%f\n", i, result, time_taken);
  }
}
