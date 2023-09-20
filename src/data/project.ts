const TEAM_PROJECTS = [
  {
    date: "2021.11.01 ~ 2021.12.15",
    name: "ALL GET MONEY",
    skills: ["JavaScript", "Python", "React", "Flask", "Numpy", "Pandas"],
    intro: "LSTM을 활용한 주가예측 웹사이트",
    imageUrl: "/AllGetMoney.png",
    point: [
      "Numpy, Pandas를 활용한 데이터 전처리 & 크롤링, 라이브러리를 활용한 데이터 수집",
      "LSTM 를 활용한 데이터 분석",
      "React를 활용한 웹사이트 구현",
    ],
  },
  {
    date: "2022.05.20 ~ 2022.05.27",
    name: "영화 도서관",
    skills: ["JavaScript", "Python", "Vue", "django"],
    intro: "TMDB를 활용한 영화 추천 사이트",
    imageUrl: "/Movie.png",
    point: [
      "Cosine 유사도를 통한 검색기능 구현",
      "Vue를 활용한 웹사이트 구현",
      "로그인 및 커뮤니티 기능 구현",
    ],
  },
  {
    date: "2022.07.05 ~ 2022.08.19",
    name: "OnSikGo",
    skills: ["JavaScript", "Vue", "Vuex"],
    intro: "지구를 구하는 마지막 주문",
    imageUrl: "/Onsikgo.png",
    point: [
      "Kakao Map API를 통한 화면 구현",
      "구매자 와 판매자 분리된 페이지별 권한 부여 구현",
      "Chart.js 를 통한 데이터 시각화",
    ],
  },
  {
    date: "2022.08.22 ~ 2022.10.07",
    name: "ChuAniOne",
    skills: [
      "TypeScript",
      "React",
      "Redux-Toolkit",
      "styled-component",
      "framer-motion",
    ],
    intro: "애니메이션 빅데이터 추천 웹사이트",
    imageUrl: "/ChuAniOne.png",
    point: [
      "Framer-motion 을 통한 동적 웹사이트 구현",
      "Stomp를 활용한 실시간 채팅 구현",
      "MUI를 활용한 UI/UX 구현",
    ],
  },
  {
    date: "2022.10.10 ~ 2022.11.10",
    name: "ABuyZ",
    skills: ["JavaScript", "React.js", "Next.js", "Recoil"],
    intro: "통합 쇼핑몰 사이트 (롯데정보통신 연계)",
    imageUrl: "/AbuyZ.png",
    point: [
      "Next.js를 활용한 서버 사이드 렌더링 활용",
      "사이트 관리자 & 판매자 페이지 구현",
      "검색엔진 노출을 위한 메타 태그 활용",
    ],
  },
];

const PERSONAL_PROJECTS = [
  {
    date: "2020~2",
    name: "",
    skills: [],
    intro: "",
    imageUrl: "",
    point: "",
  },
];

export { TEAM_PROJECTS, PERSONAL_PROJECTS };
