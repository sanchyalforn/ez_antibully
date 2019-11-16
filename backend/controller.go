package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/jinzhu/gorm"
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

	a.DB = DBMigrate(db)
}

func Register(w http.ResponseWriter, r *http.Request) {

	request, _ := ioutil.ReadAll(r.Body)
	log.Println(string(request))

	//professor := Professor{}
	var data map[string]interface{}
	json.Unmarshal([]byte(string(request)), &data)

	professor := Professor{}

	professor.Name = data["username"].(string)
	professor.PasswordHash = data["password"].(string)

	a := &App{}
	a.ConnectToDb()

	if err := a.DB.Save(&professor).Error; err != nil {
		log.Println(err)
	}

	fmt.Fprintf(w, "{ \"status_code\": 200}")
}

func Login(w http.ResponseWriter, r *http.Request) {
	request, _ := ioutil.ReadAll(r.Body)
	log.Println(string(request))

	//professor := Professor{}
	var data map[string]interface{}
	json.Unmarshal([]byte(string(request)), &data)

	professor := Professor{}

	name := data["username"].(string)
	pass := data["password"].(string)

	a := &App{}
	a.ConnectToDb()

	a.DB.Where("name = ?", name).First(&professor)

	if err := a.DB.Save(&professor).Error; err != nil {
		log.Println(err)
	}

	if professor.PasswordHash != pass {
		fmt.Fprintf(w, "{ \"status_code\": 404}")
	} else {
		fmt.Fprintf(w, "{ \"status_code\": 200}")
	}
}

func Home(w http.ResponseWriter, r *http.Request) {

	log.Print("new connection :3")
	res := &Response{
		statusCode: 200,
		body:       "Güelcom Jom",
	}
	content, err := json.Marshal(res)
	_, err = fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
		log.Fatal(err)
	}
}

func GetQuestions(w http.ResponseWriter, r *http.Request) {
	questions := []Question{}
	a := &App{}
	a.ConnectToDb()
	a.DB.Find(&questions)
	strQuestions := ""

	for _, question := range questions {
		log.Println(question.ID)
		strQuestions += "[{\"id\": " + strconv.FormatUint(uint64(question.ID), 10) + ", \"question\": \"" + question.Question + "\"},"
	}

	strQuestions = strQuestions[:len(strQuestions)-1] + "]"

	log.Printf(strQuestions)
	/*	res := &Response{
		statusCode: 200,
		body:       strQuestions,
	}*/
	fmt.Fprintf(w, strQuestions)
}

func CreateGroup(w http.ResponseWriter, r *http.Request) {
	//operations to create group on DB
	status_code := 200
	/*if err != nil {
		status_code = 500
	}*/
	res := &Response{
		statusCode: status_code,
		body:       "HOLA PUTA", /* func() {
			if err != nil {
				fmt.Sprintf("couldn't create group. Error: %s", err.Error())
			} else {
				"Group created successfully"
			}
		},*/
	}
	content, _ := json.Marshal(res)
	_, err := fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf(res.body)
	}
}

func UpdateGroup(w http.ResponseWriter, r *http.Request) {

}

func GetGroups(w http.ResponseWriter, r *http.Request) {

}

func GetUsers(w http.ResponseWriter, r *http.Request) {

}

func GetAnswers(w http.ResponseWriter, r *http.Request) {

}

func AddUser(w http.ResponseWriter, r *http.Request) {

}
