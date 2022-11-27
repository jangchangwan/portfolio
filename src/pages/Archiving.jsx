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
                <span style={{ fontWeight: "bold" }}>소스 코드 저장소</span>{" "}
                입니다.
              </Content>
              <Content>1️⃣ 과거 프로젝트 소스 코드</Content>
              <Content>2️⃣ 알고리즘 문제 풀이 소스 코드</Content>
              <Content>3️⃣ 혼자서 코딩 연습을 위해 사용했던 소스 코드</Content>
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
                공부했던 <span style={{ fontWeight: "bold" }}>내용을 정리</span>
                하는 곳입니다.
              </Content>
              <Content>1️⃣ CS 지식 정리</Content>
              <Content>2️⃣ 라이브러리 & 프레임워크 관련 내용 정리</Content>
              <Content>3️⃣ 하루 일과후 그날 배웠던 점에 대해 정리</Content>
            </ArchivingBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Archiving;
