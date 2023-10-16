import React from "react";
import NavScrollExample from "./NavScrollExample";
export default function ContentPage() {
  return (
    <div>
      <NavScrollExample />
      <div className="container">
        <section className="sectionTop">
          <img src=""></img> <h1>Title</h1>
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
          <button className="Quix"></button>{" "}
          <button className="certificate"></button>
        </section>
      </div>
    </div>
  );
}
