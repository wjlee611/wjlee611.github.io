import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";

interface History {
  title: String;
  body: String;
}

const history: History[] = [
  {
    title: "2018/12",
    body: "부흥고등학교 과학중점반 졸업",
  },
  {
    title: "2019/03",
    body: "광운대학교 입학",
  },
  {
    title: "2022/03",
    body: "전국 연합 동아리 UMC 2기",
  },
  {
    title: "2022/04",
    body: "육군 1사단 12연대 병장 만기 전역",
  },
  {
    title: "2023/07",
    body: "GDSC KW 1기 App Core",
  },
  {
    title: "2023/08",
    body: "Arkhive 서비스 Release",
  },
  {
    title: "~2025/02",
    body: "학과 수석 3회",
  },
  {
    title: "~2025/02",
    body: "학과 차석 2회",
  },
];

export default function PortfolioHistory() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div className="w-full">
      {history.map((his, idx) => (
        <HistoryCard key={idx} title={his.title}>
          <span>{his.body}</span>
        </HistoryCard>
      ))}
    </div>
  );
}
