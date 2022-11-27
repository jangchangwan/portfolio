import React from "react";

// Style
import styled from "styled-components";
import Box from "@mui/material/Box";
import SouthIcon from "@mui/icons-material/South";
import IntroImg from "../images/IntroImage.png";
// Scroll
import { Link } from "react-scroll";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  min-height: 60vh;
  justify-content: center;
  background-image: url(${IntroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Content = styled.p`
  padding: 0.2rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #f49d1a;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #f4624a;
  }
`;
function Intro() {
  return (
    <Container id="intro">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Title>- 장창완 -</Title>
        <Title>프론트 개발자 포토폴리오</Title>
        <div
          style={{
            width: "10%",
            border: "1px solid #f49d1a",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        ></div>
        <Content>안녕하세요.</Content>
        <Content>코딩을 게임처럼 즐기고 싶은 프론트 개발자입니다.</Content>
        <Content>
          하나에 몰두하면 완성도 높은 퀄리티를 만들어내는 것이 저의 장점입니다.
        </Content>
        <Link to="about" spy={true} smooth={true} offset={-78}>
          <Button>
            <p>더 알아보기</p>
            <SouthIcon />
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Intro;
