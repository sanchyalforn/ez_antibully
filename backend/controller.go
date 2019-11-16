package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	statusCode int               `json:"statusCode"`
	headers    map[string]string `json:"headers"`
	body       string            `json:"body"`
}

func home(w http.ResponseWriter, r *http.Request) {

	log.Print("new connection :3")
	res := &Response{
		statusCode: 200,
		headers:    map[string]string{"Content-Type": "application/json"},
		body:       "Güelcom Jom",
	}
	_, err := json.Marshal(res)
	_, err = fmt.Fprintf(w, string(res.body))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
	}
}

func createGroup(w http.ResponseWriter, r *http.Request) {

}

func updateGroup() {

}
