import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
function Career() {
  return (
    <Container id="career">
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
        <Title>Career</Title>
      </Box>
    </Container>
  );
}

export default Career;
