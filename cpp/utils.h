#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define bufSize 1024

long *loadFile(char *filePath, int numLines);

long *loadFile(char *filePath, int numLines)
{
  FILE *numbersFile;
  long *numbersArray = malloc(numLines * sizeof(long));
  char line[bufSize];

  printf("\nOpening %d lines: %s\n", numLines, filePath);
  numbersFile = fopen(filePath, "r");

  if (numbersFile == NULL) {
    printf("\nERROR: Could not find file: %s\n", filePath);
    exit(EXIT_FAILURE);
  }

  if (ferror(numbersFile)) {
    fprintf(stderr, "Oops, error reading file\n");
    abort();
  }

  int n = 0;
  while (fgets(line, sizeof(line) - 1, numbersFile) != NULL ) {
    // printf("\t%d: %s", n, line);
    numbersArray[n] = atol(line);
    // printf("\t%d: %ld\n", n, numbersArray[n]);
    n++;
  }
  fclose(numbersFile);

  printf("\nPopulated %d numbers\n", n);

  int i;
  for (i = 0; i < numLines; i++) {
    printf("\t%ld\n", numbersArray[i]);
  }
  return numbersArray;
}


