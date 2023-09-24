import ProjectBtn from "./ProjectBtn";
import iconArkhive from "@/../public/images/icon_arkhive.png";
import iconEcosim from "@/../public/images/icon_ecosim.png";
import iconHonbab from "@/../public/images/icon_honbab.png";
import iconKiosk from "@/../public/images/icon_talk_kiosk.png";
import SpanLink from "./SpanLink";

export default function PortfolioProjects() {
  return (
    <div className="space-y-20">
      <ProjectBtn
        image={iconArkhive}
        name="Arkhive"
        isActive
        period="2023.01.03 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            오프라인 데이터베이스 기반의 모바일 게임, 명일방주의 정보
            애플리케이션 입니다.
          </span>
          <span>
            {"Flutter로 개발되었으며, 소스코드는 "}
            {
              <SpanLink
                text="Github"
                link="https://github.com/wjlee611/arkhive"
              />
            }
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
      </ProjectBtn>

      <ProjectBtn
        image={iconEcosim}
        name="Ecosim"
        isActive
        period="2023.06.15 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            서울과학기술대학교 와의 협업으로 진행된 프로젝트로, 친환경
            건축설계를 위한 건축물 패시브 에너지 평가분석 도구입니다.
          </span>
          <span>
            Next.js 프레임워크를 사용하여 PWA 사양으로 개발되었습니다.
          </span>
          <span>
            {"소스코드는 공개할 수 없지만, 애플리케이션은 "}
            {<SpanLink text="여기에서" link="https://ecosim.vercel.app/" />}
            {" 교육 목적으로 사용하실 수 있습니다."}
          </span>
        </span>
      </ProjectBtn>

      <ProjectBtn
        image={iconHonbab}
        name="혼밥시그널"
        isActive
        period="2022.06.25 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>혼밥하는 사람들을 위한 식사 친구 매칭 서비스 입니다.</span>
          <span>
            지금까지 총 8명의 사람들과 개발한 프로젝트로, 저는 Flutter로 개발된
            앱 프론트엔드의 리드를 맡고 있습니다.
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
      </ProjectBtn>

      <ProjectBtn
        image={iconKiosk}
        name="말하는 사이에 주문 완료!"
        period="2022.08.04 ~ 2022.12.15"
      >
        <span className="flex flex-col text-white space-y-2">
          <span>음성인식 대화형 키오스크 웹앱 입니다.</span>
          <span>
            {"교내 대회 '참빛설계학기' 출품작으로 4명의 팀원과 개발했습니다."}
          </span>
          <span>
            저는 키오스크, 어드민 페이지를 위해 React를 이용한 프론트엔트
            파트와, 주문내역을 처리하기 위해 Node.js를 이용한 백엔드 파트를
            담당하였습니다.
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

            {
              <SpanLink
                text="소스코드"
                link="https://github.com/Fantastic5-Team"
              />
            }
            {" 를 확인하실 수 있습니다."}
          </span>
        </span>
      </ProjectBtn>
    </div>
  );
}
