import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ change }) => (change ? "#191919" : "#34495e")};
  width: 100vw;
  height: 100vh;
`;

export const FormBox = styled.form`
  font-family: "Courier New", Courier, monospace;
  width: 95.4vw;
  padding: 40px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 295px;
  }

  p {
    color: white;
    font-size: small;
    font-weight: 500;
    position: absolute;
    left: 56vw;
    top: 4vh;

    @media screen and (min-height: 812px) and (max-width: 375px) {
      left: 75vw;
      top: 4vh;
    }
  }

  span {
    position: absolute;
    font-weight: 500;
    left: 60.5vw;
    top: 4.4vh;
    color: red;
    font-size: small;

    @media screen and (min-height: 812px) and (max-width: 375px) {
      left: 87vw;
      top: 4vh;
    }
  }

  i {
    color: #610808;
    font-weight: 500;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  h2 {
    color: white;
    text-transform: uppercase;
    font-weight: 400;
  }

  input[type="text"],
  input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 6px;
    transition: 0.25s;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    width: 240px;
    border-color: #a4a4a4;
  }

  input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 1px solid #a93167;
    padding: 14px 40px;
    outline: none;
    color: white;
    transition: 0.25s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #a93167;
  }
`;

export const Switch = styled.div`
  position: absolute;
  top: 7.5vh;
  left: 53.5vw;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    left: 66vw;
    top: 8vh;
  }

  input[type="checkbox"] {
    position: relative;
    width: 50px;
    height: 20px;
    -webkit-appearance: none;
    outline: none;
    background: #636363;
    border-radius: 20px;
    transition: 0.5s;
  }

  input:checked[type="checkbox"] {
    background: #3a5070;
  }

  input[type="checkbox"]:before {
    cursor: pointer;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    transform: scale(1.1);
    border-radius: 50%;
    background: #d1d1d1;
    left: 0;
    transition: 0.5s;
  }

  input:checked[type="checkbox"]:before {
    cursor: pointer;
    background: #5386d4;
    left: 29px;
  }
`;
