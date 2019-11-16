package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprintf(w, "güelcom jom")
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
	}
	log.Print("new connection :3")
}

func createGroup(w http.ResponseWriter, r *http.Request) {

}

func updateGroup() {

}
