import { CAREER } from "../../data/career";

export default function Career() {
  return (
    <div
      id="career"
      className="flex flex-row w-full py-8 desktop:px-16 mobile:px-10"
    >
      <div className="flex flex-col w-full">
        <div className="text-2xl text-[#3879e8] font-bold mb-5">CAREER</div>
        {CAREER.map((v, i) => {
          return (
            <div
              key={i}
              className="flex flex-row w-full pb-3 border-b  border-gray-200 my-2"
            >
              <div className="w-[20rem]">
                <div className="text-sm text-gray-500 px-1 ">{v.date}</div>
                <div className="font-bold px-1">{v.name}</div>
                <div className="text-sm text-gray-500 px-1">{v.job}</div>
                <div className="flex flex-row  flex-wrap text-sm text-white">
                  {v.skills.map((skill, index) => {
                    return (
                      <div
                        key={"skill" + index}
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
                {v.project.map((text, idx) => {
                  return <li key={idx}>{text}</li>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
