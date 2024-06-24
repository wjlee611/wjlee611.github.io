import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import clsWrapper from "@/utils/class-wrapper";
import useObserver from "@/hooks/useObserver";
import {
  expandToBottom,
  fade,
  slideToRight1,
  slideToRight2,
  zoomIn,
} from "@/constants/variants";

type Color = "blue" | "red" | "yellow" | "gold" | "green";

interface IWaterfallLayout {
  children: ReactNode;
  title?: string;
  icon?: string;
  from: Color;
  to: Color;
  fixed?: boolean;
  slide?: boolean;
}

export default function WaterfallLayout({
  children,
  title,
  icon = "🫧",
  from,
  to,
  fixed = false,
  slide = true,
}: IWaterfallLayout) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({
    ref: targetRef,
    threshold: title === "Projects" ? 0.05 : 0.1,
  });

  const colorPicker = (color: Color) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "red":
        return "bg-red-500";
      case "yellow":
        return "bg-yellow-500";
      case "gold":
        return "bg-yellow-600";
      case "green":
        return "bg-green-500";
    }
  };
  const colorFromPicker = (color: Color) => {
    switch (color) {
      case "blue":
        return "from-blue-500";
      case "red":
        return "from-red-500";
      case "yellow":
        return "from-yellow-500";
      case "gold":
        return "from-yellow-600";
      case "green":
        return "from-green-500";
    }
  };
  const colorToPicker = (color: Color) => {
    switch (color) {
      case "blue":
        return "to-blue-500";
      case "red":
        return "to-red-500";
      case "yellow":
        return "to-yellow-500";
      case "gold":
        return "to-yellow-600";
      case "green":
        return "to-green-500";
    }
  };

  return (
    <div className="flex flex-col w-full mb-3 relative" ref={targetRef}>
      {fixed ? (
        <div className="absolute w-full h-[calc(100%_-_5rem)] mt-16 bg-black bg-opacity-20 blur-md rounded-3xl"></div>
      ) : null}
      {title ? (
        <div className={clsWrapper("top-20 z-10", fixed ? "" : "sticky")}>
          <div className="flex relative items-center transition-opacity backdrop-blur">
            <motion.div
              className={clsWrapper(
                "w-8 aspect-square rounded-full flex justify-center items-center blur-md absolute top-1 left-0",
                colorPicker(from)
              )}
              variants={zoomIn}
              initial={fixed ? "view" : false}
              animate={fixed || isIntersect ? "view" : "notView"}
            />
            <motion.span
              className="w-8 aspect-square flex items-center justify-center text-2xl"
              variants={zoomIn}
              initial={fixed ? "view" : false}
              animate={fixed || isIntersect ? "view" : "notView"}
            >
              {icon}
            </motion.span>
            <motion.h2
              className="flex flex-1 items-start ml-3 p-2 rounded-lg text-white blur-none font-bold text-lg md:text-xl"
              variants={slideToRight1}
              initial={fixed ? "view" : false}
              animate={fixed || isIntersect ? "view" : "notView"}
            >
              {title}
            </motion.h2>
          </div>
        </div>
      ) : null}
      <div className="w-full flex mt-2">
        {fixed ? null : (
          <div className="h-auto flex items-start justify-center ml-4">
            <motion.div
              className={clsWrapper(
                "w-[2px] rounded-full bg-gradient-to-b bg-grad from-[calc(100%-50px)]",
                colorFromPicker(from),
                colorToPicker(to)
              )}
              variants={expandToBottom}
              initial={fixed ? "view" : false}
              animate={fixed || isIntersect ? "view" : "notView"}
            />
          </div>
        )}
        <motion.div
          className={clsWrapper("py-10 flex flex-1", fixed ? "p-10" : "")}
          variants={slide ? slideToRight2 : fade}
          initial={fixed ? "view" : false}
          animate={fixed || isIntersect ? "view" : "notView"}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
