import clsWrapper from "@/utils/class-wrapper";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface IProjectBtn {
  image: StaticImageData;
  name: string;
  period: string;
  isActive?: boolean;
  children?: ReactNode;
}

export default function ProjectBtn({
  image,
  name,
  period,
  isActive = false,
  children,
}: IProjectBtn) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start space-y-3 md:space-y-0 md:space-x-10">
      <Image
        className="rounded-3xl"
        width={160}
        height={160}
        src={image}
        alt={image.src}
      />
      <div className="flex flex-col">
        <span className="text-white text-2xl font-black">{name}</span>
        <div className="flex space-x-2 my-5">
          <span
            className={clsWrapper(
              "text-white px-1 rounded-md",
              isActive ? "bg-green-500" : "bg-slate-400"
            )}
          >
            {isActive ? "Active" : "Deprecated"}
          </span>
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-bold">
            {period}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
