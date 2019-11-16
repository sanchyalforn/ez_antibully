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
	http.HandleFunc("/update/{groupId}", updateGroup)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
