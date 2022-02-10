package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	bs, _ := ioutil.ReadAll(os.Stdin)
	reader := bytes.NewBuffer(bs)
	msg, _ := reader.ReadString('\n')
	fmt.Printf("%s", msg)
}
