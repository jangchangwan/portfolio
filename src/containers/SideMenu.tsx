import { SIDE_MENU } from "../data/sideLink";

export default function SideMenu() {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-12 desktop:w-[20vw] mobile:w-[100vw] mobile:h-[70vh] m-0">
      <div className="flex flex-col appearance-box">
        {SIDE_MENU.map((v, i) => {
          return (
            <a
              className="sideMenu text-xl p-5 my-3 font-bold"
              key={i}
              href={v.url}
            >
              {v.value}
              <span className="text-[#3879e8]">.</span>
            </a>
          );
        })}
      </div>

      <div className="flex flex-col appearance-box">
        <p>changwan327@naver.com</p>
        <p>Last update: 2023/09/14</p>
      </div>
    </div>
  );
}
