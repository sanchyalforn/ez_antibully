package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DB *DBConfig
}

type DBConfig struct {
	Dialect  string
	Username string
	Password string
	Name     string
	Charset  string
}

func GetConfig() *Config {

	e := godotenv.Load()

	if e != nil {
		fmt.Print(e)
	}

	username := os.Getenv("db_user")
	password := os.Getenv("db_pass")
	dbName := os.Getenv("db_name")
	//dbHost := os.Getenv("db_host")

	return &Config{
		DB: &DBConfig{
			Dialect:  "mysql",
			Username: username,
			Password: password,
			Name:     dbName,
			Charset:  "utf8",
		},
	}
}
