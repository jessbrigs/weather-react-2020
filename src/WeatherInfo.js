import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="float-left">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>{" "}
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="weatherIndicators">
        Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
      </div>
    </div>
  );
}
