const titles = document.querySelectorAll(".title");
const number = document.getElementById("number");
const image = document.getElementById("image");
const description = document.getElementById("description");
const viewButton = document.getElementById("view-button");

const data = [
  {
    number: "01",
    description: "언제든 기분에 맞는 완벽한 커피 한 잔과 따스한 에너지를 전하는 곳, all day mood에서 기분 좋은 여유와 잔잔한 행복을 느껴보세요. 하루의 시작부터 끝까지, 좋은 하루를 위한 모든 순간을 함께합니다.",
    imageSrc: "https://cdn.jsdelivr.net/gh/jang-daun/portfolio/pf_cafe.jpg",
    link: "port1.html" // 링크 추가
  },
  {
    number: "02",
    description: "그린피스는 직접 행동(direct action), 조사 활동,정보 공개를 통해 환경 문제의 심각성 알립니다. 다양한 활동을 통해 그린피스는 지속가능한 미래를 위한 환경 보호에 큰 역할을 하고 있습니다.",
    imageSrc: "https://cdn.jsdelivr.net/gh/jang-daun/portfolio/pf_greenpeace.jpg",
    link: "https://example.com/project2" // 링크 추가
  },
  {
    number: "03",
    description: "최근 가챠샵 소비가 증가하는 추세입니다. ‘오늘가챠’는 소비자가 더욱 의미있는 소비생활을 할 수 있도록 제작했습니다. 오프라인의 상품 종류, 재고 파악, 편리한 소통 등의 다양한 기능을 담았습니다. 헛걸음은 이제 그만!",
    imageSrc: "https://cdn.jsdelivr.net/gh/jang-daun/portfolio/pf_todaycha.jpg",
    link: "https://example.com/project3" // 링크 추가
  },
  {
    number: "04",
    description: "여러 프로젝트의 로고 디자인으로 창의적인 아이디어를 확인해보세요.",
    imageSrc: "https://cdn.jsdelivr.net/gh/jang-daun/portfolio/pf_logo.jpg",
    link: "https://example.com/project4" // 링크 추가
  }
];

// 현재 선택된 index 저장용 변수
let currentIndex = 0;

// title 클릭 이벤트
titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    titles.forEach((t) => t.classList.remove("active"));
    title.classList.add("active");

    // 데이터 업데이트
    const { number: num, description: desc, imageSrc } = data[index];
    number.textContent = num;
    description.textContent = desc;
    image.src = imageSrc;

    // 현재 index 업데이트
    currentIndex = index;
  });
});

// View 버튼 클릭 이벤트
viewButton.addEventListener("click", () => {
  const link = data[currentIndex].link;
  window.open(link, "_blank"); // 새 창에서 링크 열기
});