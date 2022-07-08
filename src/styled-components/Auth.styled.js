import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1f2029;
  height: 100vh;
  width: 100vw;

  button {
    position: absolute;
    top: 16vh;
    left: 46.4vw;
    background: none;
    font-size: 18px;
    color: white;
    cursor: pointer;
    border: none;
    :hover {
      color: #2e2efe;
    }

    @media screen and (min-height: 812px) and (max-width: 375px) {
      left: 37vw;
    }
  }
`;

export const RegistrationForm = styled.form`
  position: relative;
  text-align: center;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #2a2b38;
  background-size: 300%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  top: 50vh;
  background-position: bottom center;
  background-repeat: no-repeat;
  width: 25%;
  left: 50vw;
  text-align: center;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  font-family: "Poppins", sans-serif;
  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 295px;
  }

  h2 {
    color: #c4c3ca;
    font-weight: 400;
  }
  i {
    color: #fe2e2e;
    font-size: 16px;
    padding: 0;
  }

  input[type="text"],
  [type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    border-radius: 6px;
    transition: 0.25s;
    color: #ffffff;

    ::placeholder {
      font-family: "Poppins", sans-serif;
      color: #a4a4a4;
    }
  }

  input[type="text"]:focus,
  [type="password"]:focus {
    width: 240px;
    border-color: #a4a4a4;
  }

  input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 1px solid #bdbdbd;
    padding: 14px 40px;
    outline: none;
    color: #ffffff;
    transition: 0.25s;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background: #bdbdbd;
    color: #000;
  }
`;

export const Completed = styled.div`
  svg {
    position: absolute;
    top: 35vh;
    left: 47.3vw;
    width: 100px;
    height: 100px;
  }

  p {
    margin: 0;
    position: absolute;
    top: 48vh;
    left: 47.1vw;
    color: #ffffff;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const Loading = styled.div`
  background: url("https://loaders.holasvg.com/my-loader.svg") no-repeat;
  height: 100px;
  width: 150px;
  align-items: center;
  position: relative;
  top: 46vh;
  left: 47vw;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    left: 37vw;
  }

  p {
    margin: 0;
    position: relative;
    top: 12vh;
    left: 0.7vw;
    font-size: 20px;
    color: white;
    font-weight: 400;

    @media screen and (min-height: 812px) and (max-width: 375px) {
      left: 3vw;
    }
  }
`;

export const FormBox = styled.form`
  position: relative;
  text-align: center;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #2a2b38;
  background-size: 300%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  top: 50vh;
  background-position: bottom center;
  background-repeat: no-repeat;
  width: 25%;
  left: 50vw;
  text-align: center;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 295px;
  }

  i {
    font-family: "Poppins", sans-serif;
    color: #fe2e2e;
    font-size: 16px;
  }

  h3 {
    color: #fe2e2e;
    font-weight: 500;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    color: #c4c3ca;
    font-weight: 400;
  }

  input[type="text"],
  input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 10px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    border-radius: 6px;
    transition: 0.25s;
    color: #ffffff;

    ::placeholder {
      color: #d4d4d4;
    }
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
    border: 1px solid #bdbdbd;
    padding: 14px 40px;
    outline: none;
    color: #ffffff;
    transition: 0.25s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #bdbdbd;
    color: #000;
  }
`;

// export const Switch = styled.div`
//   position: absolute;
//   top: 7.5vh;
//   left: 53.5vw;

//   @media screen and (min-height: 812px) and (max-width: 375px) {
//     left: 66vw;
//     top: 8vh;
//   }

//   input[type="checkbox"] {
//     position: relative;
//     width: 50px;
//     height: 20px;
//     -webkit-appearance: none;
//     outline: none;
//     background: #636363;
//     border-radius: 20px;
//     transition: 0.5s;
//   }

//   input:checked[type="checkbox"] {
//     background: #3a5070;
//   }

//   input[type="checkbox"]:before {
//     cursor: pointer;
//     content: "";
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     transform: scale(1.1);
//     border-radius: 50%;
//     background: #d1d1d1;
//     left: 0;
//     transition: 0.5s;
//   }

//   input:checked[type="checkbox"]:before {
//     cursor: pointer;
//     background: #5386d4;
//     left: 29px;
//   }
// `;
