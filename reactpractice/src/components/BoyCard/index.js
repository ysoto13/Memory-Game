import React from "react";
import "./style.css";

function BoyCard(props) {
  return (
   <div className="card" onClick={() => props.boyClick(props.id)}>
     <img src={props.image} className="card-img-top" alt={props.name} />
     <div className="content">
        <ul>
          <li>
            <strong></strong> {props.name}
          </li>
          </ul>
          </div>

    </div>
  );
}

export default BoyCard;
