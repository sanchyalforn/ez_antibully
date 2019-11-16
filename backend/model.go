package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

//Group model for the database
type Group struct {
	gorm.Model
	Name    string `json:"name"`
	Student []Student
}

type Student struct {
	gorm.Model
	Name string `json:"name"`
	Code int    `json:"code"`
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
	Relevancy int `json:"relevancy"`
	Feeling   int `json:"feeling"`
	Edges     []Node
}

type Graph struct {
	gorm.Model
	Group Group
	Nodes []Node
}
