import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "wedndd",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-2">
              <input
                className="form-location"
                type="search"
                placeholder="Enter a city..."
                autocomplete="off"
              />
            </div>
            <div className="col-7">
              <input className="submit-button" type="submit" value="Search" />
            </div>
            <div className="col-2">
              <button className="current-location-btn" id="current-location">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <br />
        <section className="location">
          <div className="city">{weatherData.city}</div>
          <div className="current-date">{weatherData.date}</div>
        </section>
        <section className="current-temperature">
          <div className="current-forecast-img">
            <img alt={weatherData.description} src={weatherData.iconUrl} />
          </div>
          <ul>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="current-temp">
            {Math.round(weatherData.temperature)}{" "}
          </div>
          <span className="units">
            <span className="celsius-link" className="active">
              °C
            </span>{" "}
            |<span className="fahrenheit-link">°F</span>
          </span>
          <ul className="weather-details">
            <li>
              Humidity: <span className="humidity"></span>
              {weatherData.humidity}%
            </li>
            <li>
              Wind: <span id="wind"></span>
              {weatherData.wind} km/h
            </li>
          </ul>
          <h></h>
        </section>
      </div>
    );
  } else {
    let apiKey = "ed88c898fe3aa0b840199cac2d2d0db1";
    let city = "Toronto";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
