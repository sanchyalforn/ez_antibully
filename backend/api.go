package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", home)
	//http.HandleFunc("/newGroup", createGroup)
	//http.HandleFunc("/update/{groupId}", updateGroup)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
