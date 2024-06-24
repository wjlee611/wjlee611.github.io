import SpanLink from "../SpanLink";

export default function EcosimTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 rounded-md p-2">
      <span>
        서울과학기술대학교 와의 협업으로 진행된 프로젝트로, 친환경 건축설계를
        위한 건축물 패시브 에너지 평가분석 도구입니다.
      </span>
      <span>Next.js 프레임워크를 사용하여 PWA 사양으로 개발되었습니다.</span>
      <span>
        {"소스코드는 공개할 수 없지만, 애플리케이션은 "}
        {<SpanLink text="여기에서" link="https://ecosim.vercel.app/" />}
        {" 교육 목적으로 사용하실 수 있습니다."}
      </span>
    </span>
  );
}
