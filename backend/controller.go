package main

import (
	"backend/model"
	"fmt"
	"go-todo-rest-api-example/config"
	"log"

	"github.com/jinzhu/gorm"
)

//App is a struc that contins accessor to the database
type App struct {
	DB *gorm.DB
}

//Initialize the connection to the database
func (a *App) Initialize() {
	dbURI := fmt.Sprintf("%s:%s@/%s?charset=%s&parseTime=True",
		config.DB.Username,
		config.DB.Password,
		config.DB.Name,
		config.DB.Charset)

	db, err := gorm.Open(config.DB.Dialect, dbURI)
	if err != nil {
		log.Fatal(err)
		log.Fatal("Could not connect database")
	}

	a.DB = model.DBMigrate(db)
}
