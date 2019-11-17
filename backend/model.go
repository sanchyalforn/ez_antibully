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
	Student []Student `gorm:"ForeignKey:ID;AssociationForeignKey:GroupID"`
}

type Student struct {
	gorm.Model
	Name    string `json:"name"`
	Code    int    `json:"code"`
	GroupID int    `gorm:"size:10" json:"group_id"`
	Group   Group  `gorm:"ForeignKey:GroupID;AssociationForeignKey:ID"`
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
	db.Model(&Student{}).AddForeignKey("group_id", "groups(id)", "RESTRICT", "RESTRICT")

	return db
}
