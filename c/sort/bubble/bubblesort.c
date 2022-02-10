/**
 * Bubble Sort Basic:     best O(n^2)  average O(n^2)  worst O(n^2)
 * Bubble Sort Optimized: best O(n)    average O(n^2)  worst O(n^2)
 **/

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

#include "../../utils/loadFile.c"
#include "../../utils/randomSequence.c"

#include "bubblesort.basic.c"
#include "bubblesort.optimized.c"

#define COUNT 3
#define FILE_PATH "../../../data/listNumbers-20.txt"

int main()
{
  long *numbersArray = randomSequence(0, 100, COUNT);

  int n = bubbleSortOptimized(numbersArray, COUNT);
  /* int n =  bubbleSortBasic(numbersArray, COUNT); */

  printf("\nResults (%d : %d)\n", COUNT, n);
  int i;
  for (i = 0; i < COUNT; i++) {
    printf("    %ld\n", numbersArray[i]);
  }

  free(numbersArray);
  exit(EXIT_SUCCESS);
}
