import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        <strong>{weather?.main.temp}</strong>°C /{" "}
        <strong>{(weather?.main.temp * 1.8 + 32).toFixed(2)}</strong>°F
      </h2>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
