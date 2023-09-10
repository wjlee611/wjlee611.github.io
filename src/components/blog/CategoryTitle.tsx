import { ReactNode } from "react";

interface ICategoryTitle {
  children: ReactNode;
}

export default function CategoryTitle({ children }: ICategoryTitle) {
  return (
    <h3 className="mt-10 mb-5 text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text font-bold text-transparent">
      {children}
    </h3>
  );
}
