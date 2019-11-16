package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/newGroup", CreateGroup)
	http.HandleFunc("/login", Login)
	http.HandleFunc("/getGroups", GetGroups)
	http.HandleFunc("/addUser", AddUser)
	http.HandleFunc("/getUsers", GetUsers)
	http.HandleFunc("/getAnswers", GetAnswers)
	http.HandleFunc("/addUsers", AddUser)
	http.HandleFunc("/getQuestions", GetQuestions)
	http.HandleFunc("/register", Register)
	http.HandleFunc("/update", UpdateGroup)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
