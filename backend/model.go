package main

import (
	"github.com/jinzhu/gorm"
	//:3
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

//Group model for the database
type Group struct {
	gorm.Model
	Name    string    `json:"name"`
	Student []Student `gorm:"ForeignKey:GroupID"`
}

type Student struct {
	gorm.Model
	Name    string `json:"name"`
	GroupID int    `gorm:"column:group_id"`
	Group   Group
}

type Professor struct {
	gorm.Model
	Name         string `json:"name"`
	Email        string `json:"email"`
	PasswordHash string `json:"password_hash"`
}

type Node struct {
	gorm.Model
	Student   Student
	Relevancy int    `json:"relevancy"`
	Feeling   int    `json:"feeling"`
	Edges     []Node `gorm:"one2many`
}

type Graph struct {
	gorm.Model
	Group Group
	Nodes []Node
}

type Question struct {
	gorm.Model
	Question string   `json:"question"`
	Answers  []Answer `gorm:"one2many`
}

type Answer struct {
	gorm.Model
	Question Question
	Answer   string `json:"answer"`
}

func DBMigrate(db *gorm.DB) *gorm.DB {
	db.AutoMigrate(&Group{}, &Student{}, &Professor{}, &Node{}, &Graph{}, &Question{}, &Answer{})

	return db
}
