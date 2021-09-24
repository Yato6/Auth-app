import React, { useState } from "react";
import {
  WeatherPage,
  AboutWeather,
  FormSearch,
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

  const getWeather = (city) => {
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
      })
      .catch(() => {
        if (!data.city) {
          setVisible(false);
          alert("такого города, не существует");
        }
      });
  };

  return (
    <WeatherPage>
      <Navbar />
      <AboutWeather>
        <FormSearch>
          <input
            placeholder="введите город..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
        </FormSearch>
        <button>Найти</button>
      </AboutWeather>
    </WeatherPage>
  );
}

export default Weather;
