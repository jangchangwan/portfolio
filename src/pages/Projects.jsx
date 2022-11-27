import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #227994;
`;
const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #fff;
`;
function Project() {
  return (
    <Container id="projects">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Title>Projects</Title>
      </Box>
    </Container>
  );
}

export default Project;
