import React, { useState } from "react";
import axios from "axios";

export default function DisplayWeather(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h4>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h4>
    );
  } else {
    let apiKey = "1ab84e51125317fbbc5ff8205f7d6deb";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
    return <h4>Loading temperature for {props.city}...</h4>;
  }
}
