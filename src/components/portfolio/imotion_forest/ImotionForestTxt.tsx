import SpanLink from "../SpanLink";

export default function ImotionForestTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 rounded-md p-2">
      <span>{'"오늘 하루의 좋았던 기억, 힘들었던 기억을 담아보세요"'}</span>
      <span>지친 현대인을 위한 감정 데이터 베이스 프로젝트.</span>
      <span>
        졸업작품 프로젝트로, 일기와 수필을 익명으로 공유하고, 사용자의 감성을
        분석해주는 서비스 입니다.
      </span>
      <span>
        {"소스코드는 "}
        {
          <SpanLink
            text="Github"
            link="https://github.com/DU-E/unknown-note-flutter"
          />
        }
        {" 에 공개되어 있으며, 시연 영상은 "}
        {
          <SpanLink
            text="유튜브"
            link="https://www.youtube.com/watch?v=HgFjrsvpyCs"
          />
        }
        {" 를 참고해주세요."}
      </span>
    </span>
  );
}
