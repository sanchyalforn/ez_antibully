package controller

import (
	"log"

	"github.com/jinzhu/gorm"
	"github.com/sanchyy/ez_antibully/model"
)

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

func (a *App) GetQuestions() string {
	questions := []model.Question{}
	a.ConnectToDb()
	a.DB.Find(&questions)

	strQuestions := ""

	for _, question := range questions {
		strQuestions += "[{'id': '" + string(question.ID) + "', 'question': '" + question.Question + "'},"
	}

	return strQuestions + "]"
}
