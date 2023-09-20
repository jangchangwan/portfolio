import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  TOOLS_SKILLS,
} from "../../data/skills";
export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-row w-full py-8 desktop:px-16 mobile:px-10"
    >
      <div className="flex flex-col w-full">
        <div className="text-2xl text-[#3879e8] font-bold mb-5">SKILLS</div>
        <div className="flex flex-row w-full pb-3 border-b  border-gray-200 my-2">
          <div className="w-[20rem]">
            <div className="font-bold">FrontEnd</div>
          </div>
          <div className="w-5/6">
            {FRONTEND_SKILLS.map((v, i) => {
              return <li key={"front" + i}>{v}</li>;
            })}
          </div>
        </div>
        <div className="flex flex-row w-full pb-3 border-b  border-gray-200 my-2">
          <div className="w-[20rem]">
            <div className="font-bold">Backend</div>
          </div>
          <div className="w-5/6">
            {BACKEND_SKILLS.map((v, i) => {
              return <li key={"back" + i}>{v}</li>;
            })}
          </div>
        </div>
        <div className="flex flex-row w-full pb-3 border-b  border-gray-200 my-2">
          <div className="w-[20rem]">
            <div className="font-bold">Tools</div>
          </div>
          <div className="w-5/6">
            {TOOLS_SKILLS.map((v, i) => {
              return <li key={"tool" + i}>{v}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
