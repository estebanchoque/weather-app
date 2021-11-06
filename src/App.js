import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import "./App.css";

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  const onClose = (cityId) => {
    setCities((prevCities) => prevCities.filter((elem) => elem.id !== cityId));
  };

  const onSearch = (input) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.main) {
          const city = {
            id: res.id,
            min: Math.round(res.main.temp_min),
            max: Math.round(res.main.temp_max),
            img: `http://openweathermap.org/img/wn/"+${res.weather[0].icon}+"@2x.png`,
            wind: res.wind.speed,
            temp: res.main.temp,
            name: res.name,
            weather: res.weather[0].main,
            clouds: res.clouds.all,
            lat: res.coord.lat,
            lon: res.coord.lon,
          };
          const exists = cities?.some((elem) => elem.name === city.name);
          if (!exists) {
            setCities((prevCities) => [...prevCities, city]);
          }
        } else {
          alert("City not found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <NavBar handleSearch={onSearch} />
      <Cards handleClose={onClose} />
    </div>
  );
}

export default App;
