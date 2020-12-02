import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "ed88c898fe3aa0b840199cac2d2d0db1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form
      className="form-inline justify-content-center"
      onSubmit={handleSubmit}
    >
      <div className="col-9">
        <input
          type="search"
          placeholder="Enter a city.."
          className="form-control"
          autoFocus="on"
          onChange={handleCityChange}
        />
      </div>
      <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="location">{form}</div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
