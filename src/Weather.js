import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <div className="city">Toronto</div>
        <div className="current-date">Monday, November 30, 2020</div>
      </section>
      <section className="current-temperature">
        <div className="current-forecast-img">
          <img
            alt="weather-icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            id="weather-icon"
          />
        </div>
        <ul>
          <li className="weather-description">Windy</li>
        </ul>
        <span className="current-temp">16 </span>
        <span className="units">
          <span className="celsius-link" className="active">
            °C
          </span>{" "}
          |<span className="fahrenheit-link">°F</span>
        </span>

        <ul className="weather-details">
          <li>
            Humidity: <span className="humidity"></span>70%
          </li>
          <li>
            Wind: <span id="wind"></span>525 km/h
          </li>
        </ul>
        <h></h>
      </section>
    </div>
  );
}
