import React, { useState } from "react";
import "./App.css";

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  console.log(cities);

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
            img: res.weather[0].icon,
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

  return <div className="App"></div>;
}

export default App;
