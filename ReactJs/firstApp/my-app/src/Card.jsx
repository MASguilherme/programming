import React from "react";

function Card(props) {
  return (
    <section className="card-section">
      <div className="card">
        <div className="title-card">
          <h2>{props.name}</h2>
        </div>
        <div className="img-card">
          <img src={props.img} alt="" />
        </div>
        <div className="card-body">
          <p>
            <span>tel: </span>{props.tel}
          </p>
          <p>
            <span>e-mail: </span>{props.email}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
