import "bootstrap/dist/css/bootstrap.min.css";
import "./css/homePage.css";
import data from "./data";
import { useState } from "react";
import NavScrollExample from "./NavScrollExample";

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
          <img src={course.img} style={{ width: "17rem", height: "10rem" }} />
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{course.desc}</p>

          <a href={course.link} className="btn btn-warning">
            {" "}
            Enroll
          </a>
        </div>
      </div>
    ));

  return (
    <div>
      {" "}
      <NavScrollExample />
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
