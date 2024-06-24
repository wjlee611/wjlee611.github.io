export default function EcosimDetail() {
  return (
    <ul className="space-y-8">
      <li className="flex flex-col space-y-1">
        <span className="text-xl font-bold mb-2">✨ Key Features</span>
        <span>- 웹앱 구현, 디자이너와 소통</span>
        <span>- recoil 기반 상태관리</span>
        <span>
          - local storage로 오프라인 데이터 저장 및 query parameter로 데이터
          fetching
        </span>
        <span>
          - 분석 데이터 암호화 및 복호화 기능을 제공하여 데이터 공유 가능
        </span>
        <span>- tailwindcss 기반 모바일, PC 반응형 디자인 구현</span>
        <span>- lighthouse 평가 기준을 통과한 PWA사양 웹앱 배포</span>
        <span>- 지도 API 활용한 도로명 주소 검색 기능</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          서버와 통신하지 않고, 100% 오프라인에서 동작 가능한 웹앱을 만들어야
          하는데, 교수님과 학생들 사이에 분석 데이터를 주고받을 수 있어야 하는
          상황이었습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          데이터를 local storage에서만 저장하게 하고, 해당 데이터를 백업 및
          복구할 수 있는 기능을 추가하였습니다.
        </span>
        <span>
          데이터를 전달하는 과정에서 사용자의 편의성을 위해 데이터를 암호화 및
          복호화를 하여 단순하게 긴 문자열을 복사 및 붙여넣기 하는 방식으로
          데이터를 관리할 수 있도록 구현하였습니다.
        </span>
      </li>
    </ul>
  );
}
