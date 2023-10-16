import "bootstrap/dist/css/bootstrap.min.css";
import "./css/homePage.css";
import data from "./data";
import { useState } from "react";
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import User from "./User";
export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  function SelectThisCourse(Id: number) {}
  const listCourses = data.cardData
    .filter((course) => {
      if (searchTerm == "") {
        return course;
      } else if (
        course.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      ) {
        return course;
      }
    })
    .map((course, key) => (
      <div
        key={course.id}
        onClick={() => SelectThisCourse(course.id)}
        className="card"
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{course.desc}</p>
          <Router>
            <a href={course.link} className="btn btn-warning">
              <Link to={"/user/" + course.id}>add to vart</Link>
            </a>
          </Router>
        </div>
      </div>
    ));

  return (
    <div>
      <section className=" searchi">
        <input
          className="searchi"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </section>
      <div className="container p-4 ">{listCourses}</div>
    </div>
  );
}
