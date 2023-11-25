import { ReactNode } from "react";

interface IHistoryCard {
  title: String;
  children: ReactNode;
}

export default function HistoryCard({ title, children }: IHistoryCard) {
  return (
    <div className="relative flex w-full h-16 md:flex-row flex-col md:space-x-10 space-y-0 md:space-y-0 justify-center md:justify-start items-start md:items-center group cursor-default">
      <div className="absolute -z-10 w-[calc(100%-40px)] h-full group-hover:bg-yellow-600 group-hover:bg-opacity-40 rounded-lg blur-sm mx-5" />
      <div className="w-full md:w-40 flex justify-end items-center px-10 md:px-0">
        <div className="h-px bg-yellow-400 w-2 mr-1 group-hover:w-full transition-all" />
        <span className="shadow-black">{title}</span>
        <div className="h-px bg-white w-full ml-1 group-hover:w-2 transition-all" />
      </div>
      <span className="px-10 px:mx-0">{children}</span>
    </div>
  );
}
