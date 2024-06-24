import SpanLink from "../SpanLink";

export default function ArkhiveDetail() {
  return (
    <ul className="space-y-8">
      <li className="flex flex-col space-y-1">
        <span className="text-xl font-bold mb-2">✨ Key Features</span>
        <span>- 개인 프로젝트, 지속적으로 운영 중</span>
        <span>
          - Bloc 아키텍쳐를 통한 상태관리 및 비즈니스, 프레젠테이션 레이어 분리
        </span>
        <span>- isolate 활용한 랜더링 성능 최적화</span>
        <span>- fastlane 활용한 구글 플레이 내부테스트 배포 자동화</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          수십만 줄의 json 데이터 여러 파일을 모델링 해야 하는 상황이었습니다.
        </span>
        <span>
          단순한 jsonDecode만 사용했을 때는 화면 로딩 시 버벅이는 문제가
          발생했습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          json 디코딩 과정을 별도의 worker isolate 내부에서 처리하는 방식으로
          해결했습니다.
        </span>
        <span>
          평균 디코딩 시간은 15.5ms &rarr; 149ms 로 증가하였지만, 화면 버벅임이
          사라져 사용자 경험을 증대할 수 있었습니다.
        </span>
        <span className="mt-4">
          {"관련 글을 "}
          {
            <SpanLink
              text="이전 블로그"
              link="https://with611.tistory.com/153"
            />
          }
          {" 에 기록해 두었으며, 실험 영상은 "}
          {
            <SpanLink
              text="유튜브"
              link="https://www.youtube.com/watch?v=HkBaS098BrE"
            />
          }
          {" 를 참고해주세요."}
        </span>
      </li>
    </ul>
  );
}
