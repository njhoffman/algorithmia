```sh
npm install cpbooster -g
cpb clone
cpb test
cpb test A_PrintString.go -a # add inputs/outputs testcase
cpb test -d # debug, \033[48;5;196m DEBUG TEXT \033[38;5;196m
cpb create {A-F}.go # create with syntax template

PrintOutput        6/10    14m3s
  PrintWord         2/2    2m5s
  PrintLine         4/4
  PrintParagraph    0/4
  ReverseChars      0/4
Math               4/10
  Sum               0/4
  Fibonacci         4/4
  PrimeIndex        0/4
```


```vim
:Test [id]
:Debug [id]
:Create A_PrintString.go
:Addtc
```
