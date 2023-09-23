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
          <span className="text-lg">Hello visitors!</span>
          <span className="flex items-end space-x-2 mb-5">
            <span className="text-lg mb-1">This is </span>
            <span className="flex items-end bg-black p-1 rounded-md bg-opacity-40">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text font-bold text-transparent text-2xl">
                dev.
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text font-bold text-transparent text-4xl">
                Woong
              </span>
            </span>
          </span>
          <span>
            <span>I am currently studying at the Department of Software, </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-bold text-transparent">
              Kwangwoon University.
            </span>
          </span>
          <span>
            <span>{"I'm also currently running the "}</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text font-bold text-transparent">
              Arkhive
            </span>
            <span> service. (Arknights offline database application)</span>
          </span>
          <span className="mt-5">
            <span>I am very interested in application development using </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-bold text-transparent">
              Flutter
            </span>
            <span> and have experience in various activities including </span>
            <span className="bg-gradient-to-r from-red-500 via-blue-400 to-green-400 bg-clip-text font-bold text-transparent">
              GDSC.
            </span>
          </span>
        </span>
        <ul className="flex mt-5">
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
