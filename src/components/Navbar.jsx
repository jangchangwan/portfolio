import React from "react";

// Icon
import MenuIcon from "@mui/icons-material/Menu";

// MUI
import Box from "@mui/material/Box";
import styled from "styled-components";

// Scroll
import { Link } from "react-scroll";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 8vh;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #fff;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 50%;
  justify-content: space-around;
`;

const LargeAppBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
const MiddleAppBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
const SmallAppBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
const NavContent = styled.p`
  cursor: pointer;

  &:hover {
    color: #f49d1a;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const IconBox = styled.div`
  border: 1px solid #8b7e74;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavContainer>
      <LargeAppBar sx={{ display: { xs: "none", xl: "flex" } }}>
        <TitleBox style={{ width: "50%" }}>
          <Link to="intro" spy={true} smooth={true} offset={-78}>
            <NavContent>JCW's Portfolio</NavContent>
          </Link>
        </TitleBox>
        <NavBox>
          <Link to="about" spy={true} smooth={true} offset={-78}>
            <NavContent>About me</NavContent>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-78}>
            <NavContent>Skills</NavContent>
          </Link>
          <Link to="archiving" spy={true} smooth={true} offset={-78}>
            <NavContent>Archiving</NavContent>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-78}>
            <NavContent>Projects</NavContent>
          </Link>
          <Link to="career" spy={true} smooth={true} offset={-78}>
            <NavContent>Career</NavContent>
          </Link>
        </NavBox>
      </LargeAppBar>
      <MiddleAppBar sx={{ display: { xs: "none", md: "flex", xl: "none" } }}>
        <TitleBox style={{ width: "50%" }}>
          <Link to="intro" spy={true} smooth={true} offset={-78}>
            <NavContent>JCW's Portfolio</NavContent>
          </Link>
        </TitleBox>
        <NavBox>
          <Link to="about" spy={true} smooth={true} offset={-78}>
            <NavContent>About me</NavContent>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-78}>
            <NavContent>Skills</NavContent>
          </Link>
          <Link to="archiving" spy={true} smooth={true} offset={-78}>
            <NavContent>Archiving</NavContent>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-78}>
            <NavContent>Projects</NavContent>
          </Link>
          <Link to="career" spy={true} smooth={true} offset={-78}>
            <NavContent>Career</NavContent>
          </Link>
        </NavBox>
      </MiddleAppBar>
      <SmallAppBar sx={{ display: { xs: "flex", md: "none", xl: "none" } }}>
        <TitleBox style={{ width: "50%" }}>
          <Link to="intro" spy={true} smooth={true} offset={-78}>
            <NavContent>JCW's Portfolio</NavContent>
          </Link>
        </TitleBox>
        <IconBox>
          <MenuIcon />
        </IconBox>
      </SmallAppBar>
    </NavContainer>
  );
}
export default Navbar;
