import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

function Archiving() {
  return (
    <Container id="archiving">
      <div>Archiving</div>
    </Container>
  );
}

export default Archiving;
