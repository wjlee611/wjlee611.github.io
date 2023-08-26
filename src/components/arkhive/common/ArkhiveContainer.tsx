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
      <div className="h-16 w-full rounded-t-xl bg-gradient-to-tr from-yellow-500 to-yellow-300 p-1 sticky top-16">
        <div className="flex h-full w-full rounded-lg items-center justify-start px-5">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
      </div>
      <span className="flex flex-col items-start p-4">{children}</span>
    </div>
  );
}
