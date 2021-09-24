import styled from "styled-components";

export const WeatherPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const AboutWeather = styled.div`
  position: relative;
  left: 35vw;
  top: 10vh;
  padding: 2rem;
  width: 22vw;
  height: 44vh;
  border-radius: 5px;
  background: white;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 60vw;
    left: 12vw;
  }

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
  }

  button {
    font-size: 14px;
    width: 4.47vw;
    height: 2.78vh;
    position: relative;
    background: #f2f2f2;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    top: 20vh;
    left: 8vw;
    cursor: pointer;
  }
`;

export const FormSearch = styled.form`
  top: 15vh;
  position: relative;
  left: 3vw;

  input {
    width: 14vw;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #e6e6e6;
    padding-left: 10px;
  }
`;
