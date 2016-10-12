/**
 * Quick Sort (Divide & Conquer) - Average: O(n log n), Worst: O(n^2)
 * Divide: Partition the Array A[low...high] into two sub-arrays A[low...j-1] and A[j+1...high] such
 *  that each element of A[low...j-1] is less than or equal to A[j], which in turn is less than orequal to A[j+1...high].
 *  Compute the index j as part of this partitioning procedure.
 *
 * Conquer: Sort the two sub-arrays A[low...j-1] and A[j+1...high] by recursive calls to quicksort
 **/

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

void quicksort(int *arr, int low, int high);

int main()
{
    FILE *numbersFile;
    // TODO: convert into dynamic array (malloc)
    // http://www.mathcs.emory.edu/~cheung/Courses/255/Syllabus/2-C-adv-data/dyn-array.html
    int numbersArray[10000];
    char *line = NULL;
    size_t len = 0;
    ssize_t read;
    numbersFile = fopen("../data-structures/numbers-10000.txt", "r");
    if (numbersFile == NULL) {
        exit(EXIT_FAILURE);
    }

    int n = 0;
    while ( (read = getline(&line, &len, numbersFile)) != -1) {
        // int atoi((const char * str)), stdlib.h
        numbersArray[n] = atoi(line);
        n++;
    }

    quicksort(numbersArray, 0, n - 1);

    int i;
    for (i = 0; i < n - 1; i++) {
        printf("%d", numbersArray[i]);
    }
    fclose(numbersFile);
    exit(EXIT_SUCCESS);
}

void quicksort(int *arr, int low, int high)
{
    int pivot, i, j, temp;
    if (low < high) {
        pivot = low;
        i = low;
        j = high;
        while (i < j) {
            // increment i until you get a number greater than the pivot element
            while (arr[i] < arr[pivot] && i <= high) {
                i++;
            }
            // decrement j until you get a number less than the pivot element
            while (arr[j] > arr[pivot] && j >= low) {
                j--;
            }
            // swap elements in locations if i < j
            if (i < j) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }

    // when i >= j it means the j-th position is the correct position of the pivot element
    // hence swap the pivot element with the elmenet in the j-th position

    temp = arr[j];
    arr[j] = arr[pivot];
    arr[pivot] = temp;

    // repeat quicksort for the two sub-arrays, one to the le4ft of j and one to the right of j
    quicksort(arr, low, j - 1);
    quicksort(arr, j + 1, high);
}
