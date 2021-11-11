import React from "react";
import Card from "../Card/Card";

const Cards = ({ cities, handleClose }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {cities?.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          min={elem.min}
          max={elem.max}
          img={elem.img}
          handleClose={() => handleClose(elem.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
