import { ReactNode } from "react";

interface IArkhiveContainer {
  title: string;
  children: ReactNode;
}

export default function ArkhiveContainer({
  title,
  children,
}: IArkhiveContainer) {
  return (
    <div className="flex flex-col w-full rounded-xl overflow-clip shadow-lg mt-5">
      <div className="h-16 w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex h-full w-full rounded-lg items-center justify-start px-5 bg-black bg-opacity-40">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
      </div>
      <span className="flex flex-col p-4">{children}</span>
    </div>
  );
}
