import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <section className="card-section">
      <div className="card">
        <div className="title-card">
          <h2>{props.name}</h2>
        </div>
        <Avatar img={props.img} />
        <Info 
          tel={props.tel}
          email={props.email}
        />
      </div>
    </section>
  );
}

export default Card;