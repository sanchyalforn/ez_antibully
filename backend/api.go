package main

import (
	"fmt"
	"github/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", Home).
		Methods("GET")
	r.HandleFunc("/newGroup", CreateGroup)
	r.HandleFunc("/update/{groupId}", updateGroup)
	http.Handle("/", r)
}
