package routes

import (
	"corsera/controller" // Import your controller package

	"github.com/gorilla/mux"
)

func PurchaseCourseRoutes(router *mux.Router) {
	router.HandleFunc("/purchaseCourse/{id}", controller.GetCourses).Methods("GET")
	router.HandleFunc("/addToWishList/{id}", controller.GetCourse).Methods("GET")
}
