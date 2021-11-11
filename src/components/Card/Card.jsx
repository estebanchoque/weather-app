import React from "react";
import "./Card.css";

const Card = ({ min, max, name, img, handleClose }) => (
  <div className="card shadow text-center p-4 mb-5">
    <button
      className="btn-close position-absolute top-0 end-0 m-2"
      aria-label="Close"
      type="button"
      onClick={handleClose}
    ></button>
    <img className="align-self-center" src={img} alt={name} />
    <div className="card-body">
      <h5 className="card-title lead">
        {name}
      </h5>
      <div className="row">
        <div className="col">
          <p className="card-text lead">Min</p>
          <p className="card-text lead">{min} °</p>
        </div>
        <div className="col">
          <p className="card-text lead">Max</p>
          <p className="card-text lead">{max} °</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
