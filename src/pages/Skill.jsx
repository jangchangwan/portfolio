import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9c51d;
`;

function Skill() {
  return (
    <Container id="skills">
      <div>Skill</div>
    </Container>
  );
}

export default Skill;
