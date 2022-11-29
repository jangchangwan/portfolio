import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Content = styled.p`
  line-height: 1.4rem;
  padding-bottom: 0.5rem;
`;

const Important = styled.span`
  color: red;
`;

const Mojor = styled.span`
  font-weight: bold;
`;

const ContentBox = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
`;

const ContentTag = styled.div`
  width: 20%;
  font-weight: bold;
`;

const ContentTag2 = styled.div`
  line-height: 1.4rem;
  width: 70%;
  word-break: break-all;
`;
function project() {
  const goGithub = () => {
    window.open("깃헙 주소");
  };
  return (
    <Container>
      <Title>프로젝트 명</Title>
      <p>
        프로젝트 기간 ( 인원 팀프로젝트, <Mojor>프로젝트 우수상</Mojor> )
      </p>
      <Grid container sx={{ marginTop: "2rem" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "90%", marginTop: "1rem", marginBottom: "3rem" }}
          >
            캐러셀
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Content>
            <Mojor>프로젝트 설명</Mojor>
            이다.
          </Content>
          <Content>
            <Important>강조할 점</Important>배운 점
          </Content>
          <Content>
            배운 점 <Important>강조할 점</Important>배운 점
            <Important>강조할 점</Important> 배운 점
          </Content>

          <hr />
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>주요기능</ContentTag>
            <ContentTag2>주요기능 내용</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Github</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Github 주소
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>FrontEnd</ContentTag>
            <ContentTag2>프론트엔드 기술스택</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>BackEnd</ContentTag>
            <ContentTag2>백엔드 기술스택t</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>DataBase</ContentTag>
            <ContentTag2>DB</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>추가 기술</ContentTag>
            <ContentTag2>추가기술스택</ContentTag2>
          </ContentBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default project;
