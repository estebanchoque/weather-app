import React from "react";
import Card from "../Card/Card";

const Cards = ({ cities, handleClose }) => {
  const renderCities = cities?.map((elem) => (
    <Card
      key={elem.id}
      name={elem.name}
      min={elem.min}
      max={elem.max}
      img={elem.img}
      handleClose={() => handleClose(elem.id)}
    />
  ));

  if (!cities || !cities.length) {
    return <div>Please, search and add your city</div>;
  }

  return <div>{renderCities}</div>;
};

export default Cards;
