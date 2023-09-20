export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen desktop:w-[80vw] mobile:w-screen bg-[url('./assets/images/Intro.png')] bg-cover">
      <div className="text-center font-bold m-10">
        <p className="text-5xl">만드는 것을 좋아하는</p>
        <p className="text-5xl">
          <span className="text-7xl">장창완</span>입니다.
        </p>
      </div>
      <div className="text-2xl text-center">
        <p>프론트엔드 개발자를 희망하고 있습니다.</p>
        <p>새로운 분야를 공부하고 개발하는 것을 즐거워하며,</p>
        <p>공유의 중요성을 알기에 배운 것을 공유하는 할려고 노력합니다.</p>
      </div>
    </div>
  );
}
