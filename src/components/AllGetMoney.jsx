import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import AllGetMoneySlider from "./AllGetMoneySlider";
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
function AllGetMoney() {
  const goGithub = () => {
    window.open(
      "https://alabaster-paradox-2e2.notion.site/ALL-GET-MONEY-b54da7c9f7964a7c8f4a3226f69d8ac7"
    );
  };
  return (
    <Container>
      <Title>AllGetMoney</Title>
      <p>
        2021.11.15 ~ 2021.12.10 ( 4인 팀프로젝트,{" "}
        <Mojor>하이텍정보 기업연계</Mojor>)
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
            <AllGetMoneySlider />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>프로젝트 주제</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>주가 예측 웹 사이트</Mojor>
          </Content>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>기획 의도</ContentTag>
          </ContentBox>
          <Content>
            <Mojor>
              요즘 사회 초년생, 학생들도 주식과 펀드등에 관심이 높아지는 추세
            </Mojor>
            에 기업에 대한 주식정보와 예측값을 한눈에 보여준다면 투자를 하는데
            도움이 되지 않을까? 라는 생각으로 시작하게되었습니다.
          </Content>
          <Content></Content>

          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>담당업무</ContentTag>
            <ContentTag2>
              데이터 수집 및 정규화, 관련 기업 데이터와 예측값 시각화, 회원가입
              및 로그인 구현, 검색기능 , 게시판 CRUD
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>Notion</ContentTag>
            <ContentTag2
              onClick={goGithub}
              style={{ cursor: "pointer", color: "blue" }}
            >
              https://alabaster-paradox-2e2.notion.site/ALL-GET-MONEY-b54da7c9f7964a7c8f4a3226f69d8ac7
            </ContentTag2>
          </ContentBox>
          <ContentBox>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>사용 기술</ContentTag>
            <ContentTag2>
              React, javaScript, MongoDB, Flask, Keras, Numpy, Pandas
            </ContentTag2>
          </ContentBox>
          <ContentBox style={{ paddingBottom: "0.5rem" }}>
            <DoneOutlineIcon sx={{ marginRight: "0.5rem" }} />
            <ContentTag>배운 점</ContentTag>
          </ContentBox>
          <Content>
            <Important>
              키움증권 API, FinanceDataReader 라이브러리, 네이버증권 크롤링
            </Important>
            을 통해 데이터를 수집하는 여러가지 방법에 대해 배웠고, 많은 주식
            데이터를 분석을 하다보니 검색하는 그 순간순간 분석하는 것보다는
            주식시장 마감시간에 맞춰
            <Important>Flask</Important>를 통해분석을 돌린 후
            <Important>MongoDB</Important>에 저장하여 그 값을 뿌려주었습니다.
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllGetMoney;
