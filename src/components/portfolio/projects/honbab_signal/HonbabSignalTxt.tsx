import SpanLink from "../../SpanLink";

export default function HonbabSignalTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 rounded-md p-2">
      <span>혼밥하는 사람들을 위한 식사 친구 매칭 서비스 입니다.</span>
      <span>
        지금까지 총 8명의 사람들과 개발한 프로젝트로, 저는 Flutter로 개발된 앱
        프론트엔드의 리드를 맡고 있습니다.
      </span>
      <span>
        팀원들이 매우 바쁜 관계로 일정의 지연이 있으나, 저희는 열정을 갖고
        개발하며, 새로 배운 내용은 즉각 적용해보며 성장하고 있습니다.
      </span>
      <span>
        {"자세한 내용은 "}
        {
          <SpanLink
            text="Madmax 레포지토리"
            link="https://github.com/MadMax-Team"
          />
        }
        {" 에서 확인하실 수 있습니다!"}
      </span>
    </span>
  );
}
