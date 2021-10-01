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

  h3 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #000000;
    position: relative;
    left: 5vw;
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
`;
