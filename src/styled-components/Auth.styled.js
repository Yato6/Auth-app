import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;

  button {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    position: absolute;
    top: 20vh;
    left: 47vw;
    background: none;
    font-size: 16px;
    color: white;
    cursor: pointer;
    border: none;
    :hover {
      color: #2e2efe;
    }
  }
`;

export const RegistrationForm = styled.form`
  position: relative;
  text-align: center;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #e8e8e8;
  top: 50vh;
  width: 30vw;
  left: 50vw;
  border: 5px solid #ffffff;
  text-align: center;

  h2 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #000000;
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

    ::placeholder {
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
    border: 1px solid #bdbdbd;
    display: block;
    margin: 20px auto;
    text-align: center;
    padding: 14px 40px;
    outline: none;
    color: #000000;
    transition: 0.25s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #bdbdbd;
  }
`;

export const Loading = styled.div`
  background: url(https://holasvg.com/my-loader.svg) no-repeat;
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
  width: 30vw;
  padding: 40px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border: ${({ change }) =>
    change ? "4px solid #fe2e2e" : "4px solid #e8e8e8"};
  text-align: center;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 295px;
  }

  i {
    color: #fe2e2e;
    font-size: 18px;
  }

  h3 {
    color: #fe2e2e;
    font-weight: 500;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  h2 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #000000;
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
    border-radius: 6px;
    transition: 0.25s;

    ::placeholder {
      color: #a4a4a4;
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
    color: #000000;
    transition: 0.25s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #bdbdbd;
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
