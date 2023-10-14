package routes

import (
	"corsera/controller" // Import your controller package

	"github.com/gorilla/mux"
)

func UserRoutes(router *mux.Router) {
	router.HandleFunc("/login", controller.Login).Methods("POST")
	router.HandleFunc("/signin", controller.SignUp).Methods("POST")
	router.HandleFunc("/getUser/{id}", controller.GetUserProfile).Methods("GET")
}
