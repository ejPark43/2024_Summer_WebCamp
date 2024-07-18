import React, { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = "277a5b2fb72db24e5c7f20417d28fff1";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const onGeoOk = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCity(`오늘 날씨 ${data.name} -`);
          setWeather(`${data.weather[0].main}, ${data.main.temp}°C`);
        });
    };

    const onGeoError = () => {
      alert("Can't find you.");
    };

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return (
    <WeatherWrapper id="weather">
      <span>
        {city} {weather}
      </span>
      {/* <span></span> */}
    </WeatherWrapper>
  );
};

export default Weather;

const WeatherWrapper = styled.div`
  height: 20px;
  width: 300px !important;
  font-size: 15px !important;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* margin: 10px; */
  text-align: right;

  border-bottom: 1px solid red;
  span {
    display: flex;
  }
`;
