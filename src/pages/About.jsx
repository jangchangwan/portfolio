import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <Container id="about">
      <div>About me</div>
    </Container>
  );
}

export default About;
