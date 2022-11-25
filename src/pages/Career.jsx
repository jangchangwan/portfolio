import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

function Career() {
  return (
    <Container id="career">
      <div>Career</div>
    </Container>
  );
}

export default Career;
