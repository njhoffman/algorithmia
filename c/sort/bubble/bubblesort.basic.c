#include <stdio.h>

int bubbleSortBasic(long *arr, int count) {
  int n = 0;
  int i, j;
  for (i = 0; i < count; i++) {
    n++;
    for (j = 1; j < count; j++) {
      n++;
      if (arr[j - 1] > arr[j]) {
        long temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return n;
}
