import React from "react";

function Item(props) {
  return (
    <div className="dic-item">
      <dl>
        <dt>
          <p>{props.emoji}</p>
          {props.title}
        </dt>
        <dd>
            {props.content}
        </dd>
      </dl>
    </div>
  );
}

export default Item;
