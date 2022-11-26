import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import FaceIcon from "@mui/icons-material/Face";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import CreateIcon from "@mui/icons-material/Create";
import Grid from "@mui/material/Grid";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: underline;
`;

const ItemGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ContentBox = styled.div`
  padding-left: 1rem;
  width: 50%;
`;

const TitleTag = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
`;

const ContentTag = styled.p`
  padding-bottom: 0.3rem;
`;
function About() {
  return (
    <Container id="about">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title>About me</Title>

        <Grid container>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <FaceIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>이름</TitleTag>
              <p>장창완</p>
            </ContentBox>
          </ItemGrid>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <CalendarMonthIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>생년월일</TitleTag>
              <ContentTag>93.06.20</ContentTag>
            </ContentBox>
          </ItemGrid>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <LocationOnIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>주소지</TitleTag>
              <ContentTag>부산광역시 진구</ContentTag>
            </ContentBox>
          </ItemGrid>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <StayCurrentPortraitIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>연락처</TitleTag>
              <ContentTag>010-9364-0990</ContentTag>
            </ContentBox>
          </ItemGrid>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <EmailIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>이메일</TitleTag>
              <ContentTag>changwan327@naver.com</ContentTag>
            </ContentBox>
          </ItemGrid>
          <ItemGrid item xs={12} sm={6} xl={4}>
            <CreateIcon sx={{ fontSize: "2.3rem" }} />
            <ContentBox>
              <TitleTag>학력</TitleTag>
              <ContentTag>SSAFY 7기</ContentTag>
            </ContentBox>
          </ItemGrid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
