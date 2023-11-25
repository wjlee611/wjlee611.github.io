import Image from "next/image";
import profileImg from "@/../public/images/woong_profile_image.jpeg";
import PhotoCard from "./PhotoCard";
import { AiFillGithub } from "react-icons/ai";

export default function PortfolioTitle() {
  return (
    <div className="flex md:flex-row flex-col items-start">
      <PhotoCard
        className="ml-6 rotate-12 md:mr-14 mb-12 md:mb-0"
        image={profileImg}
        text="2023.09.12"
        size={200}
      />
      <div className="flex flex-col">
        <span className="flex flex-col text-white">
          <span className="text-lg font-bold">방문자님 안녕하세요!</span>

          <span className="flex items-end space-x-2 mb-5">
            <span className="flex items-end bg-black p-1 rounded-md bg-opacity-40">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text font-bold text-transparent text-2xl">
                dev.
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text font-bold text-transparent text-4xl">
                Woong
              </span>
            </span>
            <span className="text-lg mb-1"> 입니다.</span>
          </span>

          <span>
            <span>{"저는 현재 "}</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-bold text-transparent">
              광운대학교
            </span>
            <span>{" 소프트웨어학부 에서 공부하고 있는 학생입니다."}</span>
          </span>
          <span>
            <span>{"또한, 현재 "}</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text font-bold text-transparent">
              Arkhive
            </span>
            <span>{" 라는 서비스를 운영 중입니다."}</span>
          </span>

          <span className="mt-5">
            <span>{"저는 "}</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-bold text-transparent">
              Flutter
            </span>
            <span>{"를 이용한 앱 개발에 굉장한 관심을 갖고 있으며, "}</span>
            <span className="bg-gradient-to-r from-red-500 via-blue-400 to-yellow-400 bg-clip-text font-bold text-transparent">
              GDSC
            </span>
            <span>{", "}</span>
            <span className="bg-gradient-to-r from-green-500 to-slate-300 bg-clip-text font-bold text-transparent">
              UMC
            </span>
            <span>{"를 비롯한 여러 활동 경험이 있습니다."}</span>
          </span>

          <span className="mt-10 text-lg font-bold">걱정을 즐기는 개발자</span>
          <span className="mt-2">저는 잔 걱정이 많은 편입니다.</span>
          <span className="text-gray-400 italic flex flex-col">
            <span>
              {"'이대로 사회에 나가도 괜찮은걸까..?'  -- 전역 7일 전"}
            </span>
            <span>
              {
                "'다른 사람이 사용할 때도 성능이 잘 나오려나..?'  -- Arkhive 출시 1달 전"
              }
            </span>
          </span>
          <span className="mt-5">
            하지만 이런 걱정을 할 때마다 항상 이를 극복할 수 있는 방향으로
            행동해왔고, 그 결과 점점 성장하는 제 자신을 볼 수 있었습니다.
          </span>
        </span>
        <span className="mt-10 text-lg font-bold">Links</span>
        <ul className="flex mt-2">
          <li className="text-6xl text-white">
            <a href="https://github.com/wjlee611" target="_blank">
              {AiFillGithub()}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
