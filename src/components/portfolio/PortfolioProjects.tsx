import ProjectBtn from "./ProjectBtn";
import iconArkhive from "@/../public/images/icon_arkhive.png";
import SpanLink from "./SpanLink";

export default function PortfolioProjects() {
  return (
    <div className="space-y-20">
      <ProjectBtn
        image={iconArkhive}
        name="Arkhive"
        isActive={true}
        period="2023.01.03 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is an offline database-based information application for the
            mobile game Arknights.
          </span>
          <span>
            {
              "It was developed with flutter, and the source code has been released on "
            }
            {
              <SpanLink
                text="Github"
                link="https://github.com/wjlee611/arkhive"
              />
            }
            .
          </span>
          <span>
            {"It is currently being distributed on the "}
            {
              <SpanLink
                text="Google Play Store"
                link="https://play.google.com/store/apps/details?id=com.gmail.wjlee611.arkhive"
              />
            }
            {" and is scheduled to be distributed on the App Store as well."}
          </span>
        </span>
      </ProjectBtn>

      <ProjectBtn
        image={iconArkhive}
        name="Arkhive"
        isActive={true}
        period="2023.01.03 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is an offline database-based information application for the
            mobile game Arknights.
          </span>
          <span>
            {
              "It was developed with flutter, and the source code has been released on "
            }
            {
              <SpanLink
                text="Github"
                link="https://github.com/wjlee611/arkhive"
              />
            }
            .
          </span>
          <span>
            {"It is currently being distributed on the "}
            {
              <SpanLink
                text="Google Play Store"
                link="https://play.google.com/store/apps/details?id=com.gmail.wjlee611.arkhive"
              />
            }
            {" and is scheduled to be distributed on the App Store as well."}
          </span>
        </span>
      </ProjectBtn>

      <ProjectBtn
        image={iconArkhive}
        name="Arkhive"
        isActive={true}
        period="2023.01.03 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is an offline database-based information application for the
            mobile game Arknights.
          </span>
          <span>
            {
              "It was developed with flutter, and the source code has been released on "
            }
            {
              <SpanLink
                text="Github"
                link="https://github.com/wjlee611/arkhive"
              />
            }
            .
          </span>
          <span>
            {"It is currently being distributed on the "}
            {
              <SpanLink
                text="Google Play Store"
                link="https://play.google.com/store/apps/details?id=com.gmail.wjlee611.arkhive"
              />
            }
            {" and is scheduled to be distributed on the App Store as well."}
          </span>
        </span>
      </ProjectBtn>
    </div>
  );
}
