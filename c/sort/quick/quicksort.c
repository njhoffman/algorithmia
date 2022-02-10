/**
 * Quick Sort (Divide & Conquer) - Average: O(n log n), Worst: O(n^2)
 *   Divide:
 *     Partition the array A[low...high] into two sub-arrays A[low...j-1] and A[j+1...high]
 *      -each element of A[low...j-1] is less than or equal to A[j]
 *      -which in turn is less than or equal to A[j+1...high]
 *    Compute the index j as part of this partitioning procedure
 *   Conquer:
 *     Sort the two sub-arrays A[low...j-1] and A[j+1...high] by recursive calls to quicksort
 **/

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

#include "../../utils/loadFile.c"
#include "../../utils/randomSequence.c"

#include "quicksort.func.c"

#define COUNT 5
#define FILE_PATH "../../../data/listNumbers-20.txt"

int main()
{
  /* long *numbersArray = loadFile(FILE_PATH, COUNT); */
  long *numbersArray = randomSequence(0, 100, COUNT);

  quicksort(numbersArray, 0, COUNT - 1);

  printf("\nResults (%d)\n", COUNT);
  int i;
  for (i = 0; i < COUNT; i++) {
    printf("    %ld\n", numbersArray[i]);
  }

  free(numbersArray);
  exit(EXIT_SUCCESS);
}
