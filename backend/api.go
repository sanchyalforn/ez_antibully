package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", home)
	http.HandleFunc("/newGroup", createGroup)
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/getGroups/{userId}", getGroups)
	http.HandleFunc("/addUser", addUser)
	http.HandleFunc("/getUsers/{groupId}", getUsers)
	http.HandleFunc("/getAnswers/{questionId", getAnswers)
	http.HandleFunc("/getGroup/{groupId}", addUser)
	http.HandleFunc("/update/{groupId}", updateGroup)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
