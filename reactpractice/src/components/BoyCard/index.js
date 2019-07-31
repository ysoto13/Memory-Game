import React from "react";
import "./style.css";

function BoyCard(props) {
  return (
   <div className="card" onClick={() => props.boyClick(props.id)}>
     <img src={props.image} className="card-img-top" alt={props.name} />

    </div>
  );
}

export default BoyCard;
