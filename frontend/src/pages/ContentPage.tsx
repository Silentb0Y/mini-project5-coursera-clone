import React from "react";
import "./css/Content.css";
export default function ContentPage() {
  return (
    <div className="container1">
      <section className="sectionTop">
        <img src="https://th.bing.com/th/id/OIP.IhGijgoVTEs0_4rPuUXboQHaE8?w=216&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7"></img>
        <h1>Title of Course</h1>
      </section>
      <section className="sectionMiddle">
        <div className="video">
          <label>Content Video</label>
          <ul>
            <li>Video link</li>
            <li>Video link</li>
            <li>Video link</li>
          </ul>
        </div>
        <section className="sectionbottom">
          <button className="Quix btn btn-outline-primary">Assignment</button>
          <button className="certificate btn btn-outline-primary">
            Claim Certificate
          </button>
        </section>
      </section>
    </div>
  );
}
