import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: black;


  ul {
    display: flex;
    list-style: none;
    color: #fff;
    margin-top: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    /* @media screen and (min-height: 812px) and (max-width: 375px) {
      padding: 0;
    } */

    li {
      padding: 15px 15px 15px;
      cursor: pointer;
      font-size: 16px;
      -moz-transition: all 0.3s 0.01s ease;
      -webkit-transition: all 0.3s 0.01s ease;

      :hover {
        color: #ff00ff;
      }

      /* @media screen and (min-height: 812px) and (max-width: 375px) {
        margin-left: 0;
        padding: 15px 6px 15px;
        font-size: 13px;
      } */
    }
  }

  button {
    position: absolute;
    border: 0;
    background: #d8d8d8;
    display: block;
    left: 90vw;
    top: 1vh;
    text-align: center;
    border: none;
    padding: 14px 40px;
    outline: none;
    color: white;
    transition: 0.25s;
    cursor: pointer;
    color: black;

    /* @media screen and (min-height: 812px) and (max-width: 375px) {
      width: 29vw;
      height: 5vh;
      left: 70vw;
        top: 0.73vh;
    } */

    :hover {
      background: #fa5858;
    }
  }
`;
