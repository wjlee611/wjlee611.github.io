export default function ImotionForestDetail() {
  return (
    <ul className="space-y-8">
      <li className="flex flex-col space-y-1">
        <span className="text-xl font-bold mb-2">✨ Key Features</span>
        <span>
          - 유저 플로우, 레이아웃 디자인, 앱 구현 등 프론트 모든 역할 담당
        </span>
        <span>
          - Bloc 아키텍쳐를 통한 상태관리 및 비즈니스, 프레젠테이션 레이어 분리
        </span>
        <span>
          - Dio, interceptor 활용한 데이터 레이어 분리 및 http 통신 인터셉트
        </span>
        <span>
          - fastlane 활용한 구글 플레이 내부테스트, 앱 스토어 테스트플라이트
          배포 자동화
        </span>
        <span>- 테스트코드 작성 및 github-action 을 활용한 CI 구현</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          프로젝트 경험이 부족한 팀원들과 우당탕탕 진행된 프로젝트라 API 사양의
          변경이 빈번하게 이루어졌습니다.
        </span>
        <span>
          뿐만 아니라, API 시트에 있는대로 최신화가 잘 이루어지지 않아 통신 문제
          발생 원인을 특정하는게 어려웠습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          API 시트 사양에 맞도록 테스트 코드를 작성하여 TDD 기법으로 앱을
          개발했습니다.
        </span>
        <span>
          그 결과 앱단의 코드는 API 시트를 준수했다고 자신있게 의견을 피력할 수
          있었고, 원인을 찾는 속도가 큰 폭으로 개선되었습니다.
        </span>
      </li>
    </ul>
  );
}
