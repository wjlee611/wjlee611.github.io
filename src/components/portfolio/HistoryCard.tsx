import { ReactNode } from "react";

interface IHistoryCard {
  title: String;
  children: ReactNode;
}

export default function HistoryCard({ title, children }: IHistoryCard) {
  return (
    <div className="relative flex w-full h-16 md:flex-row flex-col space-y-0 md:space-y-0 justify-center md:justify-start items-start md:items-center group cursor-default">
      <div className="absolute -z-10 w-full h-full group-hover:bg-yellow-600 group-hover:bg-opacity-40 rounded-lg blur-sm" />
      <div className="w-full md:w-60 flex justify-end items-center mr-10">
        <div className="h-px bg-yellow-400 w-2 mr-1 group-hover:w-full transition-all" />
        <span className="flex space-x-2">
          <span>{`//`}</span>
          <span>{title}</span>
          <span>{`//`}</span>
        </span>
        <div className="h-px bg-white w-full ml-1 group-hover:w-2 transition-all" />
      </div>
      {children}
    </div>
  );
}
