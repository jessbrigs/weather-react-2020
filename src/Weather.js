import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <form id="location-search">
          <div className="row">
            <div className="col-7">
              <input
                className="form-location"
                type="text"
                placeholder="Enter a city..."
                autocomplete="off"
                id="the-city"
              />
            </div>
            <div className="col-2">
              <input className="submit-button" type="submit" value="Search" />
            </div>
            <div className="col-2">
              <button className="current-location-btn" id="current-location">
                Current Location
              </button>
            </div>
          </div>
        </form>
      </header>
      <br />
      <section className="location">
        <div className="current-date" id="current-date"></div>
        <div className="city" id="city"></div>
      </section>
      <section className="current-temperature">
        <div className="current-forecast-img">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            id="weather-icon"
          />
        </div>
        <span className="current-temp" id="current-temp">
          {" "}
        </span>
        <span className="units">
          <span id="celsius-link" className="active">
            °C
          </span>{" "}
          |<span id="fahrenheit-link">°F</span>
        </span>
        <ul className="weather-description">
          <li id="weather-description"></li>
        </ul>
        <ul className="weather-details">
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span> km/h
          </li>
        </ul>
        <h></h>
      </section>{" "}
    </div>
  );
}
