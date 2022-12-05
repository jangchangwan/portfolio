import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ChuAniOneSlider from "./ChuAniOneSlider";

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
function ChuAniOne() {
  const goGithub = () => {
    window.open("https://github.com/jangchangwan/ChuAniOne");
  };
  return (
    <Container>
      <Title>Chu AniOne</Title>
      <p>
        2022.08 ~ 2022.09 ( 6인 팀프로젝트, <Mojor>프로젝트 우수상</Mojor> )
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
            <ChuAniOneSlider />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>프로젝트 주제</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>
              유저들의 선호도를 기반으로 잠재요인의 값을 구하여 각각의 유저에게
              애니메이션을 맞춤형으로 제공하는 서비스
            </Mojor>
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>기획 의도</ContentTag>
          </ContentBox>
          <Content>
            빅데이터를 기반 추천서비스를 구현하고 싶었고, 팀원 대부분이 흥미를
            가지고 있는 "애니"라는 테마에 리뷰 데이터도 충분히 많았기에 완성도
            높은 프로젝트를 할 수 있다고 생각하여 시작하였습니다.
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>담당 업무</ContentTag>
          </ContentBox>
          <ContentBox style={{ margin: 0 }}>
            <ContentTag>Account</ContentTag>
            <ContentTag2 style={{ width: "80%" }}>
              회원가입, 로그인, 로그아웃, 회원수정, 마이페이지, 뱃지 & 도전과제
            </ContentTag2>
          </ContentBox>
          <ContentBox style={{ margin: 0 }}>
            <ContentTag>BigVoca</ContentTag>
            <ContentTag2>
              애니 추천 단어장 조회, 추가, 삭제, TTS 기능 구현
            </ContentTag2>
          </ContentBox>
          <ContentBox style={{ margin: 0 }}>
            <ContentTag>etc</ContentTag>
            <ContentTag2>네비게이션, 소개페이지, 404 페이지</ContentTag2>
          </ContentBox>

          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Github</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              https://github.com/jangchangwan/ChuAniOne
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>사용 기술</ContentTag>
            <ContentTag2>
              React, Redux, TypeScript, soket.io, styled-component,
              framer-motion, MUI
            </ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>배운 점</ContentTag>
          </ContentBox>
          <Content>
            <Important>TypeScript</Important>를 통해 함수와 변수에 타입을
            정의하여 에러를 미연을 방지하여 개발속도를 한단계 빠르게 진행할 수
            있었습니다.
          </Content>
          <Content>
            대표적인 라이브러리인 <Important>React</Important>의 전반적인 개념과
            <Important>Redux</Important> 라는 상태관리 라이브러리의 개념을
            이해하고 실제로 사용할수 있는 좋은 경험이 되었습니다.
          </Content>
          <Content>
            또한 <Important>Framer-Motion</Important>라이브러리를 사용해 웹상에
            동적 요소를 만들어 볼 수 있는 좋은 경험을 할 수 있었고,
            <Important> Socket.io</Important>를 통해 실시간 통신을 구현해볼 수
            있었습니다.
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChuAniOne;
