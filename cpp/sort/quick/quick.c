/**
 * Quick Sort (Divide & Conquer) - Average: O(n log n), Worst: O(n^2)
 * Divide:
 *  Partition the array A[low...high] into two sub-arrays A[low...j-1] and A[j+1...high]
 *    -each element of A[low...j-1] is less than or equal to A[j]
 *    -which in turn is less than or equal to A[j+1...high]
 *  Compute the index j as part of this partitioning procedure
 * Conquer:
 *  Sort the two sub-arrays A[low...j-1] and A[j+1...high] by recursive calls to quicksort
 **/

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

#include "../../utils.h"

#define NUM_LINES 20
#define FILE_PATH "../../../data/listNumbers-20.txt"

void quicksort(long *arr, int first, int last);

int main()
{

  long *numbersArray = loadFile(FILE_PATH, NUM_LINES);

  quicksort(numbersArray, 0, NUM_LINES - 1);

  printf("\nResults...\n");
  int i;
  for (i = 0; i < NUM_LINES; i++) {
    printf("\t%ld\n", numbersArray[i]);
  }

  free(numbersArray);
  exit(EXIT_SUCCESS);
}

void quicksort(long *arr, int first, int last)
{
  long pivot, i, j, temp;
  if (first < last) {
    pivot = first;
    i = first;
    j = last;
    while (i < j) {
      // increment i until you get a number greater than the pivot element
      while (arr[i] <= arr[pivot] && i < last) {
        i++;
      }
      // decrement j until you get a number less than the pivot element
      while (arr[j] > arr[pivot]) {
        j--;
      }
      // swap elements in locations if i < j
      if (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    // swap the pivot element with the elmenet in the j-th position
    temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;

    // repeat quicksort for the two sub-arrays, one to the le4ft of j and one to the right of j
    quicksort(arr, first, j - 1);
    quicksort(arr, j + 1, last);
  }
}
