import SpanLink from "../SpanLink";

export default function KiddyMarketTxt() {
  return (
    <span className="flex flex-col text-white space-y-2 rounded-md p-2">
      <span>유아 용품 중고 거래 및 공동구매 서비스 키디마켓 입니다.</span>
      <span>2024-01 참빛설계학기 출품작으로 장려상을 수상하였습니다.</span>
      <span>
        {"소스코드는 "}
        {
          <SpanLink
            text="Github"
            link="https://github.com/3C1S/child_goods_store_flutter"
          />
        }
        {" 에 공개되어 있으며, 시연 영상은 "}
        {
          <SpanLink
            text="유튜브"
            link="https://www.youtube.com/watch?v=vgunFEUN3lE"
          />
        }
        {" 를 참고해주세요."}
      </span>
    </span>
  );
}
