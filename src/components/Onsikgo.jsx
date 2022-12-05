import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import OnsikgoSlider from "./OnsikgoSlider";
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
function Onsikgo() {
  const goGithub = () => {
    window.open("https://github.com/jangchangwan/OnSikGo-1");
  };

  return (
    <Container>
      <Title>온 식 고 (溫 食 Go)</Title>
      <p>
        2022.07 ~ 2022.08 ( 6인 팀프로젝트, <Mojor>프로젝트 우수상</Mojor> )
      </p>
      <Grid container sx={{ marginTop: "2rem", width: "100%" }}>
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
          <div style={{ width: "90%" }}>
            <OnsikgoSlider />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>프로젝트 주제</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>마감할인 상품 쇼핑몰</Mojor>
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>기획 의도</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>
              아직 따뜻한 음식을 사고 팔고, 따뜻한 음식을 세상으로 나가게 하자
            </Mojor>
            는 뜻을 지니고 있으며, 저희 온식고 서비스는 환경문제 고찰로부터
            시작되었습니다.
          </Content>
          <Content>
            판매되지 못한 채 버려지는 음식들이 환경오염에 심각한 영향을 끼친다고
            생각했고, 이를 저희 온식고 프로젝트를 통해 할인된 가격으로 유통하게
            된다면 환경문제가 도움이 된다고 생각하여 시작된 프로젝트입니다.
          </Content>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>담당 업무</ContentTag>
            <ContentTag2>
              팀장(프로젝트 관리), 주문, 알림, 카카오맵 연동, 상품 검색, 조회,
              소개페이지, 404페이지
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Github</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              https://github.com/jangchangwan/OnSikGo-1
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>FrontEnd</ContentTag>
            <ContentTag2>Vue, Vuex, Vuetify, JavaScript </ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>배운 점</ContentTag>
          </ContentBox>
          <Content>
            Front-End의 대표적인 프레임워크인 <Important>Vue</Important>의
            전반적인 개념과 <Important>Vuex</Important> 라는 상태관리
            라이브러리의 개념을 이해하고 실제로 사용할수 있는 좋은 경험이
            되었습니다.
          </Content>
          <Content>
            또한 <Important>Kakao-map</Important>을 사용해 현재 위치와 상권들을
            위치를 직접 구현해보고 <Important>Kakao-login</Important> 기능
            구현해봄으로써 Kakao API를 유용성을 체감 할 수 있었습니다.
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Onsikgo;
