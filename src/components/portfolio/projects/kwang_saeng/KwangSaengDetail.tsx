export default function KwangSaengDetail() {
  return (
    <ul className="space-y-8">
      <li className="flex flex-col space-y-1">
        <span className="text-xl font-bold mb-2">✨ Key Features</span>
        <span>- 홈화면 탭 및 상품 리스트 화면 구현</span>
        <span>- 영수증 및 주문 상태 확인 화면 구현</span>
        <span>- 나이스페이먼츠 웹뷰 기반 결제모듈 구현</span>
        <span>- 코드 품질 개선을 위한 코드 리펙토링</span>
        <span>
          - Provider를 이용한 상태관리 및 MVC 패턴으로 비즈니스, 프레젠테이션
          레이어 분리
        </span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting 1</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>나이스페이먼츠 PG를 통한 결제 시스템을 구현해야 했습니다.</span>
        <span>
          하지만 동작 가능한 플러터 코드 전문은 구글링을 아무리 해도 찾을 수가
          없었습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          나이스페이먼츠 웹과 네이티브 앱 코드 공식 문서를 참고하여 결제 요청과
          승인 방식을 파악하고, 알아보기 쉽도록 문서화를 하였습니다.
        </span>
        <span className="mt-4">
          웹뷰를 활용하여 PG의 웹 서비스를 사용하였고,
        </span>
        <span>
          intent 스킴 처리를 위해 kotlin 네이티브 코드를 작성, MethodChannel로
          통신하여 삼성페이 앱 실행과 같은 딥링크 처리를 하였습니다.
        </span>
        <span className="mt-4">
          또한, 결제 요청에 대한 응답을 확인하기 위해 js코드를 웹뷰에 주입하여
          웹뷰로 들어오는 POST 요청을 플러터 코드로 가져올 수 있었습니다.
        </span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting 2</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          디자인 요구사항에 부합하는 화면을 구현하기 위해서는 단순한 플러터 기본
          위젯으로는 불가능한 상황이었습니다.
        </span>
        <span className="mt-4">
          progress bar 위에 마일스톤과 같은 점이 있어 진행 상황을 확인할 수
          있어야 했고 (쿠팡이츠 배달 트래킹 화면처럼),
        </span>
        <span>
          z와 같은 모양으로 가격이 얼마에서 얼마로 할인되었다는 위젯을 만들어야
          했습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          CustomPainter을 활용해서 자체적으로 복잡환 화면을 랜더링하는 방식을
          채택했습니다.
        </span>
        <span>
          텍스트의 랜더 크기값을 계산해서 막대나, 박스의 위치를 상대적으로
          위치시키는 방식으로 디자인 요구사항에 맞는 복잡한 위젯을 구현할 수
          있었습니다.
        </span>
      </li>
    </ul>
  );
}
