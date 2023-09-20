// import { Outlet } from "react-router-dom";

import SideMenu from "../containers/SideMenu";
import HeaderBar from "../containers/HeaderBar";

import Intro from "../pages/intro";

import Education from "../pages/education";
import Career from "../pages/career";
import Skills from "../pages/skills";
import Project from "../pages/project";
// import Contact from "../pages/contact";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full flex desktop:flex-row mobile:flex-col bg-black text-white">
        <SideMenu />
        <Intro />
      </div>
      <div className="min-h-screen w-full flex flex-row bg-[white] text-black">
        <HeaderBar />
        <div className="desktop:w-[80vw] mobile:w-full  border">
          <Education />
          <Skills />
          <Career />
          <Project />
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}
