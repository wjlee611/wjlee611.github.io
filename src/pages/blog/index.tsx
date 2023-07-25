import Image from "next/image";

export default function Blog() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Image
        src="/images/icon_circle.png"
        alt="웅덩이 로고"
        width={180}
        height={180}
        priority
      />
      <h1 className="shadow-md rounded-full text-2xl py-2 px-10">
        [/blog] 공사중 입니다!
      </h1>
    </main>
  );
}
