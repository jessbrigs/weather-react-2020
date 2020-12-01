import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <FormattedDate date={props.data.date} />
      </h1>
      <h2> {props.data.city}</h2>
      <div className="centre">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>{" "}
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="weatherIndicators">
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
      </div>
    </div>
  );
}
