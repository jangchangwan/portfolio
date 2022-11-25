import React from "react";

// Icon
// import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

// Scroll
import { Link } from "react-scroll";

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #fff;
`;

const Box = styled.div`
  display: flex;
  font-size: 1rem;
  width: 50%;
  justify-content: space-around;
`;

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const NavContent = styled.p`
  cursor: pointer;
`;

function Navbar() {
  return (
    <Container>
      <AppBar>
        <div style={{ width: "50%" }}>
          <Link to="intro" spy={true} smooth={true} offset={-96}>
            <NavContent>JCW's Portfolio</NavContent>
          </Link>
        </div>
        <Box>
          <Link to="about" spy={true} smooth={true} offset={-96}>
            <NavContent>About me</NavContent>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-96}>
            <NavContent>Skills</NavContent>
          </Link>
          <Link to="archiving" spy={true} smooth={true} offset={-96}>
            <NavContent>Archiving</NavContent>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-96}>
            <NavContent>Projects</NavContent>
          </Link>
          <Link to="career" spy={true} smooth={true} offset={-96}>
            <NavContent>Career</NavContent>
          </Link>
        </Box>
      </AppBar>
    </Container>
  );
}
export default Navbar;
