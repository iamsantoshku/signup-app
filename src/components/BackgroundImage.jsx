import React from 'react'
import styled from "styled-components";
import background from "../assets/background3.png";
const BackgroundImage = () => {
  return (
    <Container>
    <img src={background} alt="background" />
    {/* <img src={name} alt="" /> */}
  </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default BackgroundImage
