import React from "react";


function Avatar(props) {
  return (
    <div className="img-card">
      <img src={props.img} alt="" />
    </div>
  );
}

export default  Avatar;