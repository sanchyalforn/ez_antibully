package main

import (
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/sanchyy/ez_antibully/model"
	"log"
	"net/http"
)

type Response struct {
	statusCode int    `json:"statusCode"`
	body       string `json:"body"`
}

func register() {

}

func login() {

}

func home(w http.ResponseWriter, r *http.Request) {

	log.Print("new connection :3")
	res := &Response{
		statusCode: 200,
		body:       "Güelcom Jom",
	}
	_, err := json.Marshal(res)
	_, err = fmt.Fprintf(w, string(res.body))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
		log.Fatal(err)
	}
}

func createGroup(w http.ResponseWriter, r *http.Request) {
	//operations to create group on DB

	res := &Response{
		statusCode: func() {
			if err != nil {
				500
			} else {
				200
			}
		},
		body: func() {
			if err != nil {
				fmt.sprintf("couldn't create group. Error: %s", err.Error())
			} else {
				"Group created successfully"
			}
		},
	}
	content, err := json.Marshal(res)
	_, err := fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf(res.body)
	}
}

func updateGroup() {

}

func getGroups() {

}
