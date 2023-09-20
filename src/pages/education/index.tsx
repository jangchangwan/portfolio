import { EDUCATION } from "../../data/education";

export default function Education() {
  return (
    <div
      id="education"
      className="flex flex-row w-full py-8 desktop:px-16 mobile:px-10"
    >
      <div className="flex flex-col w-full">
        <div className="text-2xl text-[#3879e8] font-bold mb-5">EDUCATION</div>
        {EDUCATION.map((v, i) => {
          return (
            <div
              key={i}
              className="flex flex-row w-full pb-3 border-b  border-gray-200 my-3"
            >
              <div className="w-[20rem]">
                <div className="text-sm text-gray-500">{v.date}</div>
                <div className="font-bold">{v.location}</div>
              </div>
              <div className="w-5/6">
                <div>{v.mainContent}</div>
                <div dangerouslySetInnerHTML={{ __html: v.subContent }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
