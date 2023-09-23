import { ReactNode, useEffect, useRef, useState } from "react";
import { Variants, motion } from "framer-motion";
import clsWrapper from "@/utils/class-wrapper";

type Color = "blue" | "red" | "yellow" | "gold";

interface IWaterfallLayout {
  children: ReactNode;
  title?: string;
  icon?: string;
  from: Color;
  to: Color;
}

const expandToBottom: Variants = {
  view: {
    height: "auto",
    transition: { delay: 0.3 },
  },
  notView: {
    height: 0,
  },
};

const slideToRight1: Variants = {
  view: {
    transform: "translateX(0)",
    opacity: 1,
    transition: { delay: 0.3 },
  },
  notView: {
    transform: "translateX(-2rem)",
    opacity: 0,
  },
};

const slideToRight2: Variants = {
  view: {
    transform: "translateX(0)",
    opacity: 1,
    transition: { delay: 0.5 },
  },
  notView: {
    transform: "translateX(-2rem)",
    opacity: 0,
  },
};

const zoomIn: Variants = {
  view: {
    transform: "scale(100%)",
    opacity: 1,
  },
  notView: {
    transform: "scale(0%)",
    opacity: 0,
  },
};

export default function WaterfallLayout({
  children,
  title,
  icon = "🫧",
  from,
  to,
}: IWaterfallLayout) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

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
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef) {
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setIsIntersect(true);
          } else {
            setIsIntersect(false);
          }
        },
        {
          rootMargin: "1000% 0px 0px 0px",
          threshold: 0.1,
        }
      );

      observer.observe(targetRef.current as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
              className="w-8 aspect-square flex items-center ml-1 text-2xl"
              variants={zoomIn}
              initial={false}
              animate={isIntersect ? "view" : "notView"}
            >
              {icon}
            </motion.span>
            <motion.h2
              className="w-full flex items-start ml-3 p-2 rounded-lg text-white blur-none font-bold backdrop-blur text-lg md:text-xl"
              variants={slideToRight1}
              initial={false}
              animate={isIntersect ? "view" : "notView"}
            >
              {title}
            </motion.h2>
          </div>
        </div>
      ) : null}
      <div className="w-full flex ml-[14px] mt-2">
        <motion.div
          className={clsWrapper(
            "w-1 mr-8 rounded-full bg-gradient-to-b bg-grad from-[calc(100%-50px)]",
            colorFromPicker(from),
            colorToPicker(to)
          )}
          variants={expandToBottom}
          initial={false}
          animate={isIntersect ? "view" : "notView"}
        ></motion.div>
        <motion.div
          className="py-10"
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
