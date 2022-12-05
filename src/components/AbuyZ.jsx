import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import AbuyZSlider from "./AbuyZSlider";
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
function Abuyz() {
  const goGithub = () => {
    window.open("https://github.com/jangchangwan/AbuyZ");
  };
  return (
    <Container>
      <Title>Abuyz</Title>
      <p>
        2022.10 ~ 2022.11 ( 6인 팀프로젝트, <Mojor>롯데정보통신 기업연계</Mojor>{" "}
        )
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
            <AbuyZSlider></AbuyZSlider>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>프로젝트 주제</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>판매자, 소비자가 모두 사용할 수 있는 쇼핑몰 플랫폼</Mojor>
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>기획 의도</ContentTag>
          </ContentBox>

          <Content>
            기업연게 프로젝트인 만큼 현업과 유사한 쇼핑몰 플랫폼 구축 경험과
            쇼핑몰 분야 도메인 지식 함양과 SI 프로젝트 실무 역량을 키우기 위해
            만든 프로젝트입니다. 시작하세요.
          </Content>

          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>담당 업무</ContentTag>
          </ContentBox>
          <Content>
            <p>FO : 상품 검색, 장바구니, 상품 구매 및 결제, 제품 상세 페이지</p>
            <p>BO : 대시보드, 고객관리, 차트를 통한 데이터 시각화</p>
          </Content>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Github</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              https://github.com/jangchangwan/AbuyZ
            </ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>사용 기술</ContentTag>
            <ContentTag2>Next.js, Recoil, Chart.js, JavaScript</ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>배운 점</ContentTag>
          </ContentBox>
          <Content>
            React의 대표적인 프레임워크인 <Important>Next.js</Important>의
            전반적인 개념과 <Important>SSR, CSR, SSG</Important>차이와 개념에
            대해서 숙지할 수 있었습니다.
          </Content>
          <Content>
            또한 전역 상태 라이브러리인 <Important>Recoil</Important>의 개념을
            더 확실하게 이해할 수 있었습니다.
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Abuyz;
