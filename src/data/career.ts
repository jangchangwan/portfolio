interface careerType {
  name: string;
  date: string;
  intro: string;
  job: string;
  skills: string[];
  project: string[];
}

export const CAREER: careerType[] = [
  {
    name: "MAUM AI",
    date: "2023.02 ~ 진행중",
    skills: [
      "JavaScript",
      "TypeScript",
      "JAVA",
      "JSP",
      "TailwindCSS",
      "CSS",
      "SpringBoot",
      "MySQL",
      "Docker",
      "Linux",
    ],
    intro:
      "인공지능 AI 기반 제품 개발 연구를 주요 사업으로 하고있는 회사입니다. </br>보이는음성봇 및 마음 GPT 기능 추가 및 유지보수를 하였습니다.  ",
    job: "웹 개발자",
    project: [
      "KB은행 FCC콜봇 TTS admin UI / UX 구현 및 고객 대응",
      "보이는 콜봇 화면 설계 및 구현",
      "도요타자동차 서비스예약 음성봇 인터페이스 유지보수",
      "아모레 AP 챗봇 & 생산성 툴 화면 구현 및 API 연동",
    ],
  },
];
