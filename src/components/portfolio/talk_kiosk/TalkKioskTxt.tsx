import SpanLink from "../SpanLink";

export default function TalkKioskTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 rounded-md p-2">
      <span>음성인식 대화형 키오스크 웹앱 입니다.</span>
      <span>
        {"교내 대회 '참빛설계학기' 출품작으로 4명의 팀원과 개발했습니다."}
      </span>
      <span>
        저는 키오스크, 어드민 페이지를 위해 React를 이용한 프론트엔트 파트와,
        주문내역을 처리하기 위해 Node.js를 이용한 백엔드 파트를 담당하였습니다.
      </span>
      <span>
        {"현재 AWS서버를 반납한 관계로 실제 구동을 확인할 수 없으나, "}
        {
          <SpanLink
            text="유튜브 시연영상"
            link="https://www.youtube.com/watch?v=MKFypBDzGTI"
          />
        }
        {" 과 "}

        {<SpanLink text="소스코드" link="https://github.com/Fantastic5-Team" />}
        {" 를 확인하실 수 있습니다."}
      </span>
    </span>
  );
}
