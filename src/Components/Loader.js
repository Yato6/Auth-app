import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  background: url(https://holasvg.com/my-loader.svg) no-repeat;
  height: 100px;
  width: 100px;
  position: relative;
  top: 46vh;
  left: 47vw;
`;

 const Loader = () => {
  return <Loading></Loading>;
};

export default Loader;