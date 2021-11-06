import React from "react";

const Card = ({ min, max, name, img, handleClose }) => (
  <div>
    <div>
      <button onClick={handleClose}>X</button>
    </div>
    <div>
      <h5>{name}</h5>
      <div>
        <div>
          <p>Min</p>
          <p>{min} °</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max} °</p>
        </div>
        <div>
          <img src={img} alt={name} width="80" height="80" />
        </div>
      </div>
    </div>
  </div>
);

export default Card;
