package main

import (
	"fmt"

	"github.com/sanchyy/ez_antibully/controller"
)

func main() {
	fmt.Println("vim-go")
	app := &controller.App{}
	result := app.GetQuestions()
	fmt.Println(result)
}
