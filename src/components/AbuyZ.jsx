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
        <Grid item xs={12} sm={12} md={6}>
          <div style={{ width: "90%", marginBottom: "3rem" }}>
            <AbuyZSlider></AbuyZSlider>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Content>
            <Mojor>
              AbuyZ 는 판매자, 소비자가 모두 사용할 수 있는 플랫폼입니다.
            </Mojor>
          </Content>
          <Content>
            유통 도메인에 대한 지식을 만들고자 쇼핑몰 플랫폼을 만들기
            시작했습니다. 더군다나 40:1의 경쟁률을 뚫고 실제 유통 사업을
            진행하고 있는 롯데정보통신과 함께 SI 프로젝트를 진행했습니다.
            6주만에 만들어진 쇼핑몰 플랫폼. 어떤 것을 구매하고 싶으신가요? 혹은
            어떤 상품을 판매하고 싶으신가요? AbuyZ와 함께 재밌는 쇼핑을
            시작하세요.
          </Content>

          <Content>
            React의 대표적인 프레임워크인 <Important>Next.js</Important>의
            전반적인 개념과 <Important>SSR, CSR, SSG</Important>차이와 개념에
            대해서 숙지할 수 있었습니다.
          </Content>
          <Content>
            또한 전역 상태 라이브러리인 <Important>Recoil</Important>의 개념을
            더 확실하게 이해할 수 있었습니다.
          </Content>
          <hr />
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>주요기능</ContentTag>
            <ContentTag2>
              <p>FO : 상품 검색, 장바구니, 리뷰 등록, 신고, 상품 구매</p>
              <p>BO : 상품 등록, 고객관리, 전시관리, 대시보드, 데이터 시각화</p>
            </ContentTag2>
          </ContentBox>
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
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>FrontEnd</ContentTag>
            <ContentTag2>Next.js, Recoil, Chart.js, JavaScript</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>BackEnd</ContentTag>
            <ContentTag2>SpringBoot, Gradle</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>DataBase</ContentTag>
            <ContentTag2>MySQL, Redis</ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Server</ContentTag>
            <ContentTag2>Docker, Jenkins, Amazon EC2, Amazon S3</ContentTag2>
          </ContentBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Abuyz;
