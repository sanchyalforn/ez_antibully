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

func (a *App) GetQuestions() []model.Question {
	questions := []model.Question{}
	a.ConnectToDb()
	//err :=
	a.DB.Find(&questions)
	//log.Fatal(err)
	return questions
}
