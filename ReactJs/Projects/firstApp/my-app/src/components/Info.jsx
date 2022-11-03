import React from "react";

function Info(props) {
  return (
    <div className="card-body">
      <p>
        <span>tel: </span>
        {props.tel}
      </p>
      <p>
        <span>e-mail: </span>
        {props.email}
      </p>
    </div>
  );
}

export default Info;