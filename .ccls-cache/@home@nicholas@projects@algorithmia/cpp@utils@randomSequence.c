#include <stdio.h>
#include <stdlib.h>
#include <time.h>

long *randomSequence(int min, int max, int count)
{
  long *numbersArray = malloc(count * sizeof(long));

  /* printf("\nGenerating %d numbers...", count); */

  // use current time to seed random number generator
  srand(time(0));

  int i;
  for (i = 0; i < count; i++) {
    numbersArray[i] = min + (rand() % (max - min + 1));
  }
  return numbersArray;
}
