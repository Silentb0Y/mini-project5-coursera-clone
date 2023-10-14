package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Home Page")
}

func AboutHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "About Page")
}

func ContactHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Contact Page")
}

func main() {
	// Create a new Gorilla Mux router
	r := mux.NewRouter()

	// Define routes and their handlers
	r.HandleFunc("/", HomeHandler).Methods("GET")
	r.HandleFunc("/about", AboutHandler).Methods("GET")
	r.HandleFunc("/contact", ContactHandler).Methods("GET")

	// Create an HTTP server with the Gorilla Mux router
	http.Handle("/", r)

	// Start the server on port 8080
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
