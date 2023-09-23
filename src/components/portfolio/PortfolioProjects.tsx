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
        image={iconEcosim}
        name="Ecosim"
        isActive
        period="2023.06.15 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is a project conducted in collaboration with Seoultech
            University as a building passive energy evaluation and analysis tool
            for eco-friendly architectural design.
          </span>
          <span>
            Developed with pwa specifications using the next js framework.
          </span>
          <span>
            {
              "The source code is not publicly available, but the application is "
            }
            {
              <SpanLink
                text="available here"
                link="https://ecosim.vercel.app/"
              />
            }
            {" for educational purposes."}
          </span>
        </span>
      </ProjectBtn>

      <ProjectBtn
        image={iconHonbab}
        name="Honbab Signal"
        isActive
        period="2022.06.25 ~ "
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is a service that matches dining friends targeting people who
            eat alone.
          </span>
          <span>
            {
              "So far, we've developed with a total of 8 people, and I've been leading the frontend with flutter."
            }
          </span>
          <span>
            {
              "Our development schedule is behind schedule as people are busy, but we're enthusiastically working on it, learning and applying new knowledge."
            }
          </span>
          <span>
            {"Check out our "}
            {
              <SpanLink
                text="Madmax team repository"
                link="https://github.com/MadMax-Team"
              />
            }
            {" too!"}
          </span>
        </span>
      </ProjectBtn>

      <ProjectBtn
        image={iconKiosk}
        name="Talk Kiosk"
        period="2022.08.04 ~ 2022.12.15"
      >
        <span className="flex flex-col text-white space-y-2">
          <span>
            This is a kiosk web app that allows you to order by voice.
          </span>
          <span>
            I was responsible for the front-end development of the kiosk and
            admin page using react, and the nodejs backend that stores and
            processes order history.
          </span>
          <span>
            {
              "We can't see it in action right now because we've returned the AWS server, but you can check out "
            }
            {
              <SpanLink
                text="the demo video"
                link="https://www.youtube.com/watch?v=MKFypBDzGTI"
              />
            }
            {" and "}

            {
              <SpanLink
                text="source code"
                link="https://github.com/Fantastic5-Team"
              />
            }
            {"."}
          </span>
        </span>
      </ProjectBtn>
    </div>
  );
}
