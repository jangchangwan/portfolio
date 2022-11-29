import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
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
        <div style={{ fontWeight: "bold" }}>
          천재는 노력하는 자를 이기지 없고, 노력하는 자는 즐기는 자을 이기지
          없다.
        </div>
      </Box>
    </Container>
  );
}

export default Career;
