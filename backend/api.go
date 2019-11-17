package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
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
	router.GET("/getGraph", GetGraph)
	log.Fatal(http.ListenAndServe(":8080", router))
}
