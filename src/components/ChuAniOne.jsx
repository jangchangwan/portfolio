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
        <Grid item xs={12} sm={12} md={6}>
          <div style={{ width: "90%", marginBottom: "3rem" }}>
            <ChuAniOneSlider />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Content>
            <Mojor>
              "츄애니원"은 유저들의 선호도를 기반으로 잠재요인의 값을 구하여
              각각의 유저에게 애니메이션을 맞춤형으로 제공하는 서비스
            </Mojor>
            이다.
          </Content>
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
          <hr />
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>주요기능</ContentTag>
            <ContentTag2>
              애니메이션 추천, 오픈채팅, 일본어 단어 학습장, 애니메이션 정보 및
              리뷰, 톡톡을 통한 소통, 뱃지와 도전과제
            </ContentTag2>
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
            <ContentTag>FrontEnd</ContentTag>
            <ContentTag2>
              React, Redux, TypeScript, soket.io, styled-component,
              framer-motion, MUI
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>BackEnd</ContentTag>
            <ContentTag2>Django, SpringBoot</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>DataBase</ContentTag>
            <ContentTag2>MySQL, Redis</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>BigData</ContentTag>
            <ContentTag2>
              keras, numpy, pandas, scikit-learn, tensorflow, MongoDB
            </ContentTag2>
          </ContentBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChuAniOne;
