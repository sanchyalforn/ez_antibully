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

type App struct {
	DB *gorm.DB
}

//Initialize the connection to the database
func (a *App) ConnectToDb() {
	db, err := gorm.Open("mysql", "pes_user:pes2019@tcp(35.198.146.153)/hackathon?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatal(err)
		log.Fatal("Could not connect database")
	}

	a.DB = model.DBMigrate(db)
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

func GetQuestions(w http.ResponseWriter, r *http.Request) {
	questions := []model.Question{}
	a := *App
	a.ConnectToDb()
	a.DB.Find(&questions)
	res := &Response{
		statusCode: 200,
		body:       questions,
	}
	content, err := json.Marshal(res)
	fmt.Fprintf(w, content)
	if err != nil {
		fmt.Fprintf(w, "Error: %s", err)
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
