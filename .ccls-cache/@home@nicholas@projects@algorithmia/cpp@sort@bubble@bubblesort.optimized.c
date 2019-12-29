#include <stdio.h>
#include <stdbool.h>

/* add exit early condition checking if any swaps made */

int bubbleSortOptimized(long *arr, int count)
{
  int n = 0;
  bool swapped;
  do {
    swapped = false;
    int i;
    for (i = 0; i < count; i++) {
      n++;
      if (arr[i] > arr[i + 1]) {
        long tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return n;
}
