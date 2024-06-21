import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <div className="weather-buttons">
      <Button
        variant="warning"
        onClick={() => setCity("")}
        className={selectedCity === "" ? "active" : ""}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant="warning"
          key={index}
          onClick={() => setCity(item)}
          className={selectedCity === item ? "active" : ""}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
