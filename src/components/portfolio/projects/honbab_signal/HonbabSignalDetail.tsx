export default function HonbabSignalDetail() {
  return (
    <ul className="space-y-8">
      <li className="flex flex-col space-y-1">
        <span className="text-xl font-bold mb-2">✨ Key Features</span>
        <span>- 앱 파트 리드, 매칭, 쪽지, 사용자 정보 및 인증 부분 개발</span>
        <span>
          - Bloc 아키텍쳐를 통한 상태관리 및 비즈니스, 프레젠테이션 레이어 분리
        </span>
        <span>- Firebase Cloud Messaging 기반 푸쉬 알림 구현</span>
        <span>- 구글 플레이 내부테스트 배포</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xl font-bold mb-3">🔥 Troubleshooting</span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-red-500 mb-2">
          배경
        </span>
        <span>
          다른 사용자와 매칭이 되었다는 사실을 실시간으로 고지할 수 있어야
          했습니다.
        </span>
        <span>
          API를 주기적으로 쏘면 어떤가 라는 의견이 초기에 나왔으나, 통신 비용이
          너무 크고, 주기를 정한다는 것이 실시간성과 동떨어진 이야기라고
          판단하였습니다.
        </span>
        <span className="w-fit px-2 text-lg font-bold rounded-md bg-green-500 mb-2 mt-6">
          해결
        </span>
        <span>
          매칭이 되었을 때 서버에서 FCM을 전송하여 매칭 사실을 실시간으로
          수신하는 방식을 제안하였습니다.
        </span>
        <span>
          또한, Firebase 프로젝트 생성 및 연결, FCM 사용 방법을 문서화를 하여
          팀원들께 공유하였습니다.
        </span>
        <span className="mt-4">
          FCM을 적극적으로 활용하기 위해 bloc으로 추상화를 한번 더 하여 앱
          전역에서 FCM 이벤트를 listen할 수 있었고,
        </span>
        <span>
          이를 응용하여 실시간 통신이 필요없는 쪽지 기능에도 적용하여 실시간
          채팅처럼 동작하도록 구현할 수 있었습니다.
        </span>
      </li>
    </ul>
  );
}
