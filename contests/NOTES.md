```sh
cpb clone
cpb test
cpb test A_PrintString.go -a # add inputs/outputs testcase
cpb test -d # debug, \033[48;5;196m DEBUG TEXT \033[38;5;196m
cpb create {A-F}.go # create with syntax template
```

```vim
:Test [id]
:Debug [id]
:Create A_PrintString.go
:Addtc
```
