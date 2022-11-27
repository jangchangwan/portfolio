import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

import Onsikgo from "../components/Onsikgo";
import ChuAniOne from "../components/ChuAniOne";
import Abuyz from "../components/AbuyZ";
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
          width: "100%",
        }}
      >
        <Title>Projects</Title>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "68rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            margin: "2rem",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <Onsikgo />
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "68rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            margin: "2rem",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <ChuAniOne />
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "68rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            margin: "2rem",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <Abuyz />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            width: "80%",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          <Onsikgo />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            width: "80%",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          <ChuAniOne />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            width: "80%",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          <Abuyz />
        </Box>
      </Box>
    </Container>
  );
}

export default Project;
