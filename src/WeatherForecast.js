import React, { useState } from "react";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastData data={forecast.list[0]} />
        <WeatherForecastData data={forecast.list[1]} />
        <WeatherForecastData data={forecast.list[2]} />
        <WeatherForecastData data={forecast.list[3]} />
        <WeatherForecastData data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "ed88c898fe3aa0b840199cac2d2d0db1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
