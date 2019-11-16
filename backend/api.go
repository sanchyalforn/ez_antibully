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
	http.HandleFunc("/getUsers/{groupId}", GetUsers)
	http.HandleFunc("/getAnswers/{questionId}", GetAnswers)
	http.HandleFunc("/addUsers/{groupId}", AddUser)
	http.HandleFunc("/getQuestions", GetQuestions)
	http.HandleFunc("/register", Register)
	http.HandleFunc("/update/{groupId}", UpdateGroup)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
