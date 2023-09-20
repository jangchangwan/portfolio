import { TEAM_PROJECTS } from "../../data/project";

export default function Project() {
  return (
    <div
      id="project"
      className="flex flex-row w-full py-8 desktop:px-16 mobile:px-10"
    >
      <div className="flex flex-col w-full">
        <div className="text-2xl text-[#3879e8] font-bold mb-5">PROJECT</div>

        <div className=" w-full">
          <div className="text-xl text-[#3879e8] font-bold mb-5">
            팀 프로젝트
          </div>
          {TEAM_PROJECTS.map((v, i) => {
            return (
              <div
                key={i}
                className="flex flex-row w-full pb-3 border-b  border-gray-200 my-3"
              >
                <div className="w-[20rem]">
                  <div className="font-bold px-1 mb-2">
                    <img
                      className="object-cover w-[17rem]"
                      src={v.imageUrl}
                      alt={v.name}
                    />
                  </div>
                  <div className="text-sm text-gray-500 px-1">{v.date}</div>
                  <div className="font-bold px-1">{v.name}</div>
                  <div className="flex flex-row  flex-wrap text-sm text-white">
                    {v.skills.map((skill, idx) => {
                      return (
                        <div
                          key={"skill" + idx}
                          className="m-1 p-1 px-2 bg-[#3879e8] rounded-lg"
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-5/6">
                  <div
                    className="pb-5"
                    dangerouslySetInnerHTML={{ __html: v.intro }}
                  />
                  {v.point.map((text, idx) => {
                    return <li key={idx}>{text}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="w-full pb-3 border-b  border-gray-200 my-2">
          <div className="text-xl text-[#3879e8] font-bold mb-5">
            개인 프로젝트
          </div>
          {PERSONAL_PROJECTS.map((v, i) => {
            return (
              <div className="w-full">
                <div className="w-[20rem]">
                  <div className="font-bold">이미지</div>
                </div>
                <div className="w-5/6"></div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
