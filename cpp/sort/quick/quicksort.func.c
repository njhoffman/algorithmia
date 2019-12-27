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

