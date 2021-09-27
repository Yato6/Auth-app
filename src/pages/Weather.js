import React, { useState } from "react";
import {
  WeatherPage,
  AboutWeather,
  FormSearch,
  City,
  Now,
  Temp,
  FeelsLike,
  WeatherData,
} from "../styled-components/Weather.styled";
import { Navbar } from "../Components/Navbar";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({
    city: "",
    temp: "",
    feels_like: "",
    weather: "",
  });

  const API = "d66b09610a9b8b08f74f0704cf59ba05";
  const [value, setValue] = useState("");
  const [formIsVisible, setVisible] = useState(false);

  function getWeather(city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},ru/en&APPID=${API}&units=metric&lang=ru`
      )
      .then((res) => {
        setData({
          weather: res.data.weather[0].description,
          city: res.data.name,
          temp: Math.round(res.data.main.temp),
          feels_like: Math.round(res.data.main.feels_like),
        });
        if (value === city) {
          setVisible(true);
        }
      })
      .catch(() => {
        if (!data.city) {
          alert("Такого города, не существует!");
        }
      });
  }

  return (
    <WeatherPage>
      <Navbar />
      <AboutWeather>
        <p>Weather page</p>
        <FormSearch
          onSubmit={(e) => {
            e.preventDefault();
            if (value.trim() !== "") {
              getWeather(value);
              setValue("");
            }
          }}
        >
          <input
            placeholder="введите город..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
        </FormSearch>
        <button
          onClick={() => {
            if (value.trim() !== "") {
              setValue("");
              getWeather(value);
            }
          }}
        >
          Найти
        </button>
        <WeatherData hidden={formIsVisible === false}>
          <City>
            <p>
              {data.city}, {data.weather}
            </p>
            <p>{data.temp}°C</p>
            <p>{data.feels_like}°C</p>
          </City>
        </WeatherData>
      </AboutWeather>
    </WeatherPage>
  );
}

export default Weather;
