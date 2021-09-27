import styled from "styled-components";

export const AccountInfo = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const AboutAccount = styled.div`
  position: relative;
  left: 35vw;
  top: 10vh;
  width: 26vw;
  height: 54vh;
  border-radius: 10px;
  background: white;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    width: 60vw;
    left: 12vw;
  }

  p {
    padding: 2rem;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 500;
    cursor: pointer;
    color: #585858;

    :after {
      content: "";
      display: block;
      height: 1px;
      background-color: #d8d8d8;
    }
  }

  /* button {
    position: absolute;
    border: 0;
    background: #d8d8d8;
    display: block;
    bottom: 5%;
    text-align: center;
    left: 10.2vw;
    border: none;
    padding: 14px 40px;
    outline: none;
    color: white;
    transition: 0.25s;
    cursor: pointer;

    @media screen and (min-height: 812px) and (max-width: 375px) {
      left: 22vw;
    }

    :hover {
      background: #fa5858;
    }
  } */
`;
