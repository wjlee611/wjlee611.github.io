export default function KiddyMarketDetail() {
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
        <span>- flavor 활용한 dev, prod 빌드 환경 분리</span>
        <span>
          - fastlane 활용한 구글 플레이 내부테스트, 앱 스토어 테스트플라이트
          배포 자동화
        </span>
        <span>
          - Firebase analytics, BigQuery 이용한 사용자 상호작용 데이터 수집
        </span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting 1</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          대규모 애플리케이션을 확장 및 유지보수 하기 위한 http 에러 처리 로직을
          연구해야 했습니다.
        </span>
        <span>
          독학으로 flutter, bloc을 배웠기에 저만의 클린 아키텍쳐를 만들어보고
          싶었습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          http 통신 전/후 처리를 위한 interceptor를 도입하여 http 통신을
          인터셉트 하였습니다.
        </span>
        <span>
          즉, 통신 시 발생하는 에러에 대해서는 interceptor에서 일괄적 형식으로
          throw 할 수 있게 되었습니다.
        </span>
        <span className="mt-4">
          에러 핸들링 로직을 모든 bloc 클래스에서 사용할 수 있도록
          DioExceptionHandlerMixin의 handleApiRequest를 구현했습니다.
        </span>
        <span>
          즉, 모든 비즈니스 로직에서 DioExceptionHandlerMixin룰 상속하여
          handleApiRequest를 사용해 http 통신을 호출하기만 하면 일관된 에러
          핸들링을 적용 받을 수 있게 되었습니다.
        </span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting 2</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          태그 검색 자동완성 기능을 구현할 때, 통신 비용 이슈가 발생했습니다.
        </span>
        <span>
          키보드 입력 값이 바뀔 때 마다 API를 호출하기 때문에 통신이 너무 잦게
          일어나는 문제였습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          bloc의 transformer를 부착하여 500ms debounce 처리를 하였습니다.
        </span>
        <span>
          사용자가 키보드 입력이 500ms동안 없을 시 API를 호출하도록 하여 통신
          비용을 절감할 수 있었습니다.
        </span>
      </li>
    </ul>
  );
}
