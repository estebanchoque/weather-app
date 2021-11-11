import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Loader from "./components/Loader/Loader";
import Notification from "./components/Notification/Notification";
import "./App.css";

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useLocalStorage("cities", []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClose = (cityId) => {
    setCities((prevCities) => prevCities.filter((elem) => elem.id !== cityId));
  };

  const onSearch = (input) => {
    const exist = cities?.some((elem) => elem.name === input);
    if (input && !exist) {
      setLoading(true);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          if (res.main) {
            const city = {
              id: res.id,
              min: Math.round(res.main.temp_min),
              max: Math.round(res.main.temp_max),
              img: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
              wind: res.wind.speed,
              temp: res.main.temp,
              name: res.name,
              weather: res.weather[0].main,
              clouds: res.clouds.all,
              lat: res.coord.lat,
              lon: res.coord.lon,
            };
            setCities((prevCities) => [...prevCities, city]);
          } else {
            setLoading(false);
            alert("City not found");
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  };

  if (!cities || !cities.length) {
    return <div className="text-center">Please, search and add your city</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar handleSearch={onSearch} />
      </header>

      <div className="mt-5">
        {error && <Notification />}
        {loading && <Loader />}
      </div>

      <section className="container">
        <Cards handleClose={onClose} cities={cities} />
      </section>

      <footer className="bg-dark text-center">
        <p>
          Designed by&nbsp;
          <a
            href="https://github.com/estebanchoque"
            target="_blank"
            rel="noreferrer"
          >
            Esteban Choque
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
