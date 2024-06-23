import SpanLink from "../SpanLink";

export default function ArkhiveTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 bg-black bg-opacity-30 rounded-md p-2">
      <span>
        오프라인 데이터베이스 기반의 모바일 게임, 명일방주의 정보 애플리케이션
        입니다.
      </span>
      <span>
        {"Flutter로 개발되었으며, 소스코드는 "}
        {<SpanLink text="Github" link="https://github.com/wjlee611/arkhive" />}
        {" 에 공개되어 있습니다."}
      </span>
      <span>
        {"현재 "}
        {
          <SpanLink
            text="Google Play Store"
            link="https://play.google.com/store/apps/details?id=com.gmail.wjlee611.arkhive"
          />
        }
        {" 에서 배포 중이며, 차후 App Store에도 배포 예정입니다."}
      </span>
    </span>
  );
}
