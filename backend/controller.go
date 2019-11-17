package main

import (
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
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

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func Register(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

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

	enableCors(&w)

	if err := a.DB.Save(&professor).Error; err != nil {
		log.Println(err)
	}

	fmt.Fprintf(w, "{ \"status_code\": 200}")
}

func Login(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

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

	enableCors(&w)

	if professor.PasswordHash != pass {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "{ \"status_code\": 404}")
	} else {
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "{ \"status_code\": 200}")
	}
}

func Home(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	log.Print("new connection :3")
	res := &Response{
		statusCode: 200,
		body:       "Güelcom Jom",
	}

	enableCors(&w)

	content, err := json.Marshal(res)

	log.Println(w)

	_, err = fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
		log.Fatal(err)
	}
}

func GetQuestions(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	questions := []Question{}
	a := &App{}
	a.ConnectToDb()
	a.DB.Find(&questions)
	strQuestions := ""

	for _, question := range questions {
		log.Println(question.ID)
		strQuestions += "[{\"id\": " + strconv.FormatUint(uint64(question.ID), 10) + ", \"question\": \"" + question.Question + "\"},"
	}

	enableCors(&w)

	strQuestions = strQuestions[:len(strQuestions)-1] + "]"

	log.Printf(strQuestions)
	/*	res := &Response{
		statusCode: 200,
		body:       strQuestions,
	}*/
	fmt.Fprintf(w, strQuestions)
}

func CreateGroup(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

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

	enableCors(&w)

	content, _ := json.Marshal(res)
	_, err := fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf(res.body)
	}
}

func UpdateGroup(w http.ResponseWriter, r *http.Request) {

}

func GetGroups(w http.ResponseWriter, r *http.Request) {

	groups := []Group{}
	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	groups := []Group{}
	a := &App{}
	a.ConnectToDb()
	a.DB.Find(&groups)
	strGroups := "["

	for _, group := range groups {
		strStudents := "["
		for _, student := range group.Student {
			strStudents += "{\"name\": " + student.Name + "\"},"
		}
		strGroups += "{\"id\": " + strconv.FormatUint(uint64(group.ID), 10) + ", \"students\": \"" + strStudents + "\"},"
	}

	strGroups = strGroups[:len(strGroups)-1] + "]"
	log.Printf(strGroups)
	fmt.Fprintf(w, strGroups)
}

func GetUsers(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	params, ok := r.URL.Query()["id"]

	if !ok || len(params[0]) < 1 {
		log.Println("Url Param 'key' is missing")
		return
	}
	groupID := params[0]

	log.Println("id=", groupID)

	group := Group{}
	a := &App{}
	a.ConnectToDb()
	a.DB.Where("id = ?", groupID).First(&group)

	strUsers := "["

	for i := range group.Student {
		log.Println(strconv.FormatUint(uint64(group.Student[i].ID), 10))
		strUsers += "{\"id\": " + strconv.FormatUint(uint64(group.Student[i].ID), 10) + ", \"Name\": \"" + group.Student[i].Name + "\"},"
	}

	/*students := []Student{}
	a.DB.Where("group = ?", group).Find(&students)

	for student := range students {
		log.Println(strconv.FormatUint(uint64(student.ID), 10))
		strUsers += "{\"id\": " + strconv.FormatUint(uint64(student.ID), 10) + ", \"Name\": \"" + student.Name + "\"},"
	}
	*/

	strUsers = strUsers[:len(strUsers)] + "]"

	enableCors(&w)

	log.Printf(strUsers)
	fmt.Fprintf(w, strUsers)
}

func GetAnswers(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	params, ok := r.URL.Query()["questionId"]
	if !ok || len(params[0]) < 1 {
		log.Print(w, "\"status\": Bad request\"\"}")
		fmt.Fprintf(w, "\"status\": Bad request\"\"}")
	}
	question := Question{}
	questionId := params[0]
	a := &App{}
	a.ConnectToDb()
	a.DB.Where("id = ?", questionId).First(&question)
	strAnswers := "["
	for _, answer := range question.Answers {
		strAnswers += "{\"answer\": " + answer.Answer + "},"
	}

	enableCors(&w)

	fmt.Fprintf(w, strAnswers)
}

func AddUser(w http.ResponseWriter, r *http.Request) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	enableCors(&w)

}
