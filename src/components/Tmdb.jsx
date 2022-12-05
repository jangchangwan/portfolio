import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

import TmdbSlider from "./TmdbSlider";
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
function Tmdb() {
  const goGithub = () => {
    window.open("https://github.com/jangchangwan/Movie-Recommend-Site");
  };
  return (
    <Container>
      <Title>TMDB를 활용한 영화 추천사이트</Title>
      <p>2022.05.20 ~ 2022.05.26 ( 3인 팀프로젝트 )</p>
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
            <TmdbSlider />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>프로젝트 주제</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>
              TMDB API를 활용하여 데이터을 정제한 후 데이터 기반 영화를
              추천해주는 사이트
            </Mojor>
            입니다.
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>기획 의도</ContentTag>
          </ContentBox>
          <Content>
            일주일이라는 짧은시간 동안 외부 API를 통해 데이터를 수집하고, Front,
            Back을 구분지어 구축하고, CRUD를 만들어 보기 위한 프로젝트 입니다.
          </Content>

          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>주요기능</ContentTag>
            <ContentTag2>
              영화 조회 & 코사인 유사도를 통한 추천, 마이페이지, 게시판 CRUD 및
              댓글 구현
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Github</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              https://github.com/jangchangwan/Movie-Recommend-Site
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>사용기술</ContentTag>
            <ContentTag2>Vue, Vuex, javaScript, Django, Python</ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>배운 점</ContentTag>
          </ContentBox>
          <Content>
            코사인 유사도를 접목 시켜 장르 & 컨텐츠 기반 사용자가 좋아요 한
            영화를 토대로 영화를 추천해줬으며, <Important>Django</Important>를
            사용하여 <Important>MTV 패턴</Important> 백엔드를 구축할 수 있는
            좋은 경험이였습니다.
          </Content>
          <Content>
            Front-End의 대표적인 프레임워크인 <Important>Vue</Important>의
            전반적인 개념과 <Important>Vuex</Important> 라는 상태관리
            라이브러리의 개념을 이해하고 실제로 사용할수 있는 좋은 경험이
            되었습니다.
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tmdb;
