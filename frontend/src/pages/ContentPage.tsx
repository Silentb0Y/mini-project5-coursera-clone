import React from "react";
import NavScrollExample from "./NavScrollExample";
import { useParams } from "react-router-dom";
export default function ContentPage() {
  return (
    <div>
      <NavScrollExample />
      <div className="container">
        <section className="sectionTop">
          <img src=""></img> <h1></h1>
        </section>
        <section className="sectionMiddle">
          <label>Content Video</label>
          <ul>
            <li>Video link</li>
            <li>Video link</li>
            <li>Video link</li>
          </ul>
        </section>
        <section className="sectionbottom">
          <button className="Quix btn btn-outline-primary">Assignment</button>{" "}
          <button className="certificate btn btn-outline-primary">
            Claim Certificate
          </button>
        </section>
      </div>
    </div>
  );
}
