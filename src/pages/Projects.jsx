import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #227994;
`;

function Project() {
  return (
    <Container id="projects">
      <div>Project</div>
    </Container>
  );
}

export default Project;
