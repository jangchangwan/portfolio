import { Link } from "react-scroll";

export default function HeaderBar() {
  return (
    <div className="flex flex-col sticky top-0  justify-between items-center h-screen py-12 desktop:flex mobile:hidden w-[20vw] m-0">
      <ul className="text-4xl text-black font-bold">
        <li className="pb-5 cursor-pointer">
          <Link
            activeClass="text-[#3879e8]"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li className="pb-5 cursor-pointer">
          <Link
            activeClass="text-[#3879e8]"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="pb-5 cursor-pointer">
          <Link
            activeClass="text-[#3879e8]"
            to="career"
            spy={true}
            smooth={true}
            duration={500}
          >
            Career
          </Link>
        </li>
        <li className="pb-5 cursor-pointer">
          <Link
            activeClass="text-[#3879e8]"
            to="project"
            spy={true}
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        {/* <li className="pb-5">Contact</li> */}
      </ul>
    </div>
  );
}
