package routes

import (
	"corsera/controller" // Import your controller package

	"github.com/gorilla/mux"
)

func CourseRoutes(router *mux.Router) {
	router.HandleFunc("/courses", controller.GetCourses).Methods("GET")
	router.HandleFunc("/course/{course_id}", controller.GetCourse).Methods("GET")
	router.HandleFunc("/courses", controller.CreateCourse).Methods("POST")
}
