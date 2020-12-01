import Weather from "./Weather.js";
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />

        <footer>
          <br />
          This project was coded by Jessica Brigantino and is{" "}
          <a
            href="https://github.com/jessbrigs/weather-react-2020"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
