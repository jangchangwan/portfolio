import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Image
import github from "../images/skills/github.jpg";
import notion from "../images/skills/notion.png";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #fff;
`;

const ArchivingBox = styled.div`
  width: 80%;
  margin: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    transform: translateY(5%);
    transition: all 0.5s;
  }
`;

const SkillImg = styled.img`
  width: 40%;
  object-fit: cover;
  margin-top: 0.5rem;
  margin-bottom: 0.9rem;
`;

const Content = styled.p`
  padding: 0.4rem;
`;
function Archiving() {
  const goGithub = () => {
    window.open("https://github.com/jangchangwan");
  };

  const goNotion = () => {
    window.open(
      "https://alabaster-paradox-2e2.notion.site/Today-is-learned-6bedf907e0d84b6ea4cec32d16e7ae90"
    );
  };
  return (
    <Container id="archiving">
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
        <Title>Archiving</Title>
        <Grid container sx={{ width: "60%" }}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <ArchivingBox onClick={goGithub}>
              <SkillImg src={github} />
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <Content style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>?????? ?????? ?????????</span>{" "}
                ?????????.
              </Content>
              <Content>1?????? ?????? ???????????? ?????? ??????</Content>
              <Content>2?????? ???????????? ?????? ?????? ?????? ??????</Content>
              <Content>3?????? ????????? ?????? ????????? ?????? ???????????? ?????? ??????</Content>
            </ArchivingBox>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <ArchivingBox onClick={goNotion}>
              <SkillImg src={notion} style={{ margin: 0 }} />
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <Content style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                ???????????? <span style={{ fontWeight: "bold" }}>????????? ??????</span>
                ?????? ????????????.
              </Content>
              <Content>1?????? CS ?????? ??????</Content>
              <Content>2?????? ??????????????? & ??????????????? ?????? ?????? ??????</Content>
              <Content>3?????? ?????? ????????? ?????? ????????? ?????? ?????? ??????</Content>
            </ArchivingBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Archiving;
