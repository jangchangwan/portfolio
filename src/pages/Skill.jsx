import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Image
import html from "../images/skills/html.png";
import typescript from "../images/skills/typescript.png";
import react from "../images/skills/react.png";
import recoil from "../images/skills/recoil.png";
import redux from "../images/skills/redux.png";
import next from "../images/skills/next.png";
import vue from "../images/skills/vue.png";
import vuex from "../images/skills/vuex.png";

import django from "../images/skills/django.jpg";
import python from "../images/skills/python.png";
import flask from "../images/skills/flask.png";

import git from "../images/skills/git.png";
import github from "../images/skills/github.jpg";
import gitlab from "../images/skills/gitlab.png";

import notion from "../images/skills/notion.png";
import slack from "../images/skills/slack.png";
import jira from "../images/skills/jira.png";
import figma from "../images/skills/figma.png";

import qnet from "../images/skills/qnet.png";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9c51d;
`;

const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-size: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const ItemGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const TitleTag = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
  color: #f49d1a;
`;

const SkillImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;
function Skill() {
  return (
    <Container id="skills">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        <Title>Skills</Title>
        <Grid
          container
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "60%",
            alignItems: "flex-start",
          }}
        >
          <ItemGrid item xs={12} md={6} lg={4}>
            <SkillItem>
              <TitleTag>FrontEnd</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={html} />
              <SkillImg src={typescript} />
              <SkillImg src={react} />
              <SkillImg src={redux} />
              <SkillImg src={next} />
              <SkillImg src={recoil} />
              <SkillImg src={vue} />
              <SkillImg src={vuex} />
            </SkillItem>
          </ItemGrid>
          <ItemGrid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SkillItem>
              <TitleTag>BackEnd</TitleTag>
              <hr
                style={{
                  backgroundColor: "#cccccc",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              />
              <SkillImg src={python} />
              <SkillImg src={django} />
              <SkillImg src={flask} />
            </SkillItem>
            <SkillItem>
              <TitleTag>Communcation</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={jira} />
              <SkillImg src={notion} />
              <SkillImg src={figma} />
              <SkillImg src={slack} />
            </SkillItem>
          </ItemGrid>
          <ItemGrid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SkillItem>
              <TitleTag>Version Control</TitleTag>
              <hr
                style={{
                  backgroundColor: "#cccccc",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              />
              <SkillImg src={git} />
              <SkillImg src={github} />
              <SkillImg src={gitlab} />
            </SkillItem>
            <SkillItem>
              <TitleTag>Certificate</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={qnet} />
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                정보처리기사 (필기)
              </p>
            </SkillItem>
          </ItemGrid>
        </Grid>

        <Grid
          container
          sx={{
            display: { xs: "flex", lg: "none" },
            width: "75%",
            alignItems: "flex-start",
          }}
        >
          <ItemGrid item xs={12} md={6} lg={4}>
            <SkillItem>
              <TitleTag>FrontEnd</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={html} />
              <SkillImg src={typescript} />
              <SkillImg src={react} />
              <SkillImg src={redux} />
              <SkillImg src={next} />
              <SkillImg src={recoil} />
              <SkillImg src={vue} />
              <SkillImg src={vuex} />
            </SkillItem>
          </ItemGrid>
          <ItemGrid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SkillItem>
              <TitleTag>BackEnd</TitleTag>
              <hr
                style={{
                  backgroundColor: "#cccccc",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              />
              <SkillImg src={python} />
              <SkillImg src={django} />
              <SkillImg src={flask} />
            </SkillItem>
            <SkillItem>
              <TitleTag>Communcation</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={jira} />
              <SkillImg src={notion} />
              <SkillImg src={figma} />
              <SkillImg src={slack} />
            </SkillItem>
          </ItemGrid>
          <ItemGrid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SkillItem>
              <TitleTag>Version Control</TitleTag>
              <hr
                style={{
                  backgroundColor: "#cccccc",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              />
              <SkillImg src={git} />
              <SkillImg src={github} />
              <SkillImg src={gitlab} />
            </SkillItem>
            <SkillItem>
              <TitleTag>Certificate</TitleTag>
              <hr style={{ backgroundColor: "#cccccc", width: "100%" }} />
              <SkillImg src={qnet} />
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                정보처리기사 (필기)
              </p>
            </SkillItem>
          </ItemGrid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skill;
