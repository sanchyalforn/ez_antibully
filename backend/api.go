package main

import (
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

func main() {
	router := httprouter.New()
	router.GET("/", Home)
	router.POST("/newGroup", CreateGroup)
	router.POST("/login", Login)
	router.GET("/getGroups", GetGroups)
	router.POST("/addUser", AddUser)
	router.GET("/getUsers", GetUsers)
	router.GET("/getAnswers", GetAnswers)
	router.POST("/addUsers", AddUser)
	router.GET("/getQuestions", GetQuestions)
	router.POST("/register", Register)
	router.POST("/update", UpdateGroup)
	router.POST("/updateNode", UpdateNode)
	router.POST("/updateEdges", UpdateEdges)
	log.Fatal(http.ListenAndServe(":8080", router))
}
