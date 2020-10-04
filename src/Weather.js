import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  return (
    <div className="Weather">
      <p>
        <ReactAnimatedWeather
          icon="RAIN"
          color="darkblue"
          size="170"
          animate="true"
        />{" "}
      </p>
      <DisplayWeather city="London" />
    </div>
  );
}
