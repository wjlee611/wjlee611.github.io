import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import clsWrapper from "@/utils/class-wrapper";
import useObserver from "@/hooks/useObserver";
import {
  expandToBottom,
  slideToRight1,
  slideToRight2,
  zoomIn,
} from "@/utils/variants";

type Color = "blue" | "red" | "yellow" | "gold" | "green";

interface IWaterfallLayout {
  children: ReactNode;
  title?: string;
  icon?: string;
  from: Color;
  to: Color;
}

export default function WaterfallLayout({
  children,
  title,
  icon = "🫧",
  from,
  to,
}: IWaterfallLayout) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({
    ref: targetRef,
    threshold: title === "Projects" ? 0.05 : undefined,
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
      {title ? (
        <div className="sticky top-20 z-10">
          <div className="flex relative items-center transition-opacity">
            <motion.div
              className={clsWrapper(
                "w-8 aspect-square rounded-full flex justify-center items-center blur-md absolute top-1 left-0",
                colorPicker(from)
              )}
              variants={zoomIn}
              initial={false}
              animate={isIntersect ? "view" : "notView"}
            />
            <motion.span
              className="w-8 aspect-square flex items-center justify-center text-2xl"
              variants={zoomIn}
              initial={false}
              animate={isIntersect ? "view" : "notView"}
            >
              {icon}
            </motion.span>
            <motion.h2
              className="flex flex-1 items-start ml-3 p-2 rounded-lg text-white blur-none font-bold backdrop-blur text-lg md:text-xl"
              variants={slideToRight1}
              initial={false}
              animate={isIntersect ? "view" : "notView"}
            >
              {title}
            </motion.h2>
          </div>
        </div>
      ) : null}
      <div className="w-full flex mt-2">
        <div className="w-8 h-auto flex items-start justify-center">
          <motion.div
            className={clsWrapper(
              "w-1 rounded-full bg-gradient-to-b bg-grad from-[calc(100%-50px)]",
              colorFromPicker(from),
              colorToPicker(to)
            )}
            variants={expandToBottom}
            initial={false}
            animate={isIntersect ? "view" : "notView"}
          />
        </div>
        <motion.div
          className="py-10 ml-6 flex flex-1"
          variants={slideToRight2}
          initial={false}
          animate={isIntersect ? "view" : "notView"}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
