package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/jinzhu/gorm"
	"github.com/julienschmidt/httprouter"
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

func Register(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

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

func Login(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

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

func Home(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

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

	//log.Println(w)

	_, err = fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
		log.Fatal(err)
	}
}

func GetQuestions(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

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

func CreateGroup(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	//operations to create group on DB
	status_code := 200
	res := &Response{
		statusCode: status_code,
		body:       "HOLA PUTA",
	}

	enableCors(&w)

	content, _ := json.Marshal(res)
	_, err := fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf(res.body)
	}
}

func UpdateGroup(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	if (*r).Method != "PUT" || (*r).Method != "POST" {
		return
	}
	params, ok := r.URL.Query()["id"]

	if !ok || len(params[0]) < 1 {
		log.Println("Url Param 'key' is missing")
		return
	}
	groupID := params[0]

	request, _ := ioutil.ReadAll(r.Body)

	var data map[string]interface{}
	json.Unmarshal([]byte(string(request)), &data)

	newUsers := data["students"].(string)
	a := &App{}
	a.ConnectToDb()
	a.DB.Where("id = ?", groupID).Update("Student", newUsers)
}

func GetGroups(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	groups := []Group{}
	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

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

func GetUsers(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

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

	/*for i := range group.Student {
		log.Println(strconv.FormatUint(uint64(group.Student[i].ID), 10))
		strUsers += "{\"id\": " + strconv.FormatUint(uint64(group.Student[i].ID), 10) + ", \"Name\": \"" + group.Student[i].Name + "\"},"
	}*/

	/*students := []Student{}
	a.DB.Where("group = ?", group).Find(&students)
	for student := range students {
		log.Println(strconv.FormatUint(uint64(student.ID), 10))
		strUsers += "{\"id\": " + strconv.FormatUint(uint64(student.ID), 10) + ", \"Name\": \"" + student.Name + "\"},"
	}
	*/

	student := []Student{}
	a.DB.Find(&student)

	for _, answer := range student {
		strUsers += "{\"id\": " + strconv.FormatUint(uint64(answer.ID), 10) + ", \"Name\": \"" + answer.Name + "\"},"
	}

	if len(strUsers) > 1 {
		strUsers = strUsers[:len(strUsers)-1] + "]"
	} else {
		strUsers += "]"
	}

	strUsers = strUsers[:len(strUsers)] + "]"

	log.Printf(strUsers)
	fmt.Fprintf(w, strUsers)
}

func GetAnswers(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	params, ok := r.URL.Query()["questionId"]
	if !ok || len(params[0]) < 1 {
		log.Print(w, "\"status\": Bad request\"\"}")
		fmt.Fprintf(w, "\"status\": \"Bad request\"}")
		return
	}

	student := []Student{}
	//questionId := params[0]
	a := &App{}
	a.ConnectToDb()

	/*a.DB.Where("id = ?", questionId).First(&question)
	strAnswers := "["
	for _, answer := range question.Answers {
		strAnswers += "{\"answer\": " + answer.Answer + "},"
	}*/

	strAnswers := "["
	a.DB.Find(&student)

	for _, answer := range student {
		strAnswers += "{\"answer\": \"" + answer.Name + "\"},"
	}

	if len(strAnswers) > 1 {
		strAnswers = strAnswers[:len(strAnswers)-1] + "]"
	} else {
		strAnswers += "]"
	}

	enableCors(&w)

	fmt.Fprintf(w, strAnswers)
}

func AddUser(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	request, _ := ioutil.ReadAll(r.Body)
	log.Println(string(request))

	//professor := Professor{}
	var data map[string]interface{}
	json.Unmarshal([]byte(string(request)), &data)

	student := Student{}

	a := &App{}
	a.ConnectToDb()

	code, _ := strconv.ParseInt(data["code"].(string), 10, 64)
	gid, _ := strconv.ParseInt(data["groupid"].(string), 10, 64)

	student.Name = data["name"].(string)
	student.Code = int(code)

	a.DB.Where("id = ?", int(gid)).First(&student.Group)

	enableCors(&w)

	if err := a.DB.Save(&student).Error; err != nil {
		log.Println(err)
	}

	fmt.Fprintf(w, "{ \"status_code\": 200}")
}

func GetGraph(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	a := &App{}
	a.ConnectToDb()

	type Node struct {
		id           int
		student_name string
		influencia   int
		feeling      int
	}

	type Connection struct {
		id_origin    int
		id_destinity int
	}

	var resultNodes []Node
	a.DB.Raw("SELECT id, student_name, influencia, feeling FROM new_node").Scan(&resultNodes)

	strGraph := "{'nodes': ["

	for i := range resultNodes {
		strGraph += "{'id': " + strconv.Itoa(resultNodes[i].id) + ", 'label': " + resultNodes[i].student_name + ", 'x': 0,'y': 0, 'size': " + strconv.Itoa(resultNodes[i].influencia) + "},"
	}
	strGraph += "],'edges': ["

	var resultEdges []Connection
	a.DB.Raw("SELECT id, id_origin, id_destinity FROM connections").Scan(&resultEdges)

	for i := range resultEdges {
		strGraph += "{'id': " + strconv.Itoa(i) + ", 'source': " + strconv.Itoa(resultEdges[i].id_origin) + ", 'x': " + strconv.Itoa(resultEdges[i].id_destinity) + "},"
	}

	strGraph += "]}"

	fmt.Fprintf(w, strGraph)
}
