import styled from "styled-components";

export const WeatherPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const AboutWeather = styled.div`
  position: relative;
  left: 35vw;
  top: 10vh;
  padding: 0;
  width: 26vw;
  height: 54vh;
  border-radius: 10px;
  background: white;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 60vw;
    left: 12vw;
  }

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 500;
    cursor: pointer;
    padding: 2rem;
    color: #585858;

    :after {
      content: "";
      display: block;
      height: 1px;
      background-color: #d8d8d8;
    }
  }

  button {
    font-size: 14px;
    width: 4.47vw;
    height: 2.78vh;
    position: relative;
    background: #f2f2f2;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    top: 31vh;
    left: 10vw;
    cursor: pointer;
  }
`;

export const FormSearch = styled.form`
  top: 30vh;
  position: relative;
  left: 5vw;

  input {
    width: 14vw;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #e6e6e6;
    padding-left: 10px;
  }
`;

export const WeatherData = styled.div`
  position: relative;
  bottom: 6vh;
  padding: 0;
`;

export const City = styled.div`
  background-color: #e6e6e6;
  height: 15vh;

  p {
    top: 1.3vh;
    position: relative;
    text-align: center;
    padding: 0;
    color: black;
  }
`;

// export const Now = styled.div`
//   background-color: rosybrown;
//   height: 5vh;

//   p {
//     top: 1.3vh;
//     position: relative;
//     text-align: center;
//   }
// `;

export const Temp = styled.div`
  background-color: blanchedalmond;
  height: 5vh;

  p {
    top: 1.3vh;
    position: relative;
    text-align: center;
  }
`;
export const FeelsLike = styled.div`
  background-color: coral;
  height: 5vh;

  p {
    top: 1.3vh;
    position: relative;
    text-align: center;
  }
`;
