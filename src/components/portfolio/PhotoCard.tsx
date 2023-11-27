import clsWrapper from "@/utils/class-wrapper";
import Image, { StaticImageData } from "next/image";

interface IPhotoCard {
  image: StaticImageData;
  size: number;
  text?: string;
  className?: string;
}

export default function PhotoCard({
  image,
  text,
  size,
  className,
}: IPhotoCard) {
  return (
    <div className={clsWrapper("bg-white p-3", className ?? "")}>
      <Image
        width={size}
        style={{ aspectRatio: "3/4" }}
        src={image}
        alt={image.src}
      />
      {text ? (
        <span className="flex justify-center mt-3 text-slate-800 text-sm">
          {text}
        </span>
      ) : null}
    </div>
  );
}
