import { Variants } from "framer-motion";

export const expandToBottom: Variants = {
  view: {
    height: "auto",
    transition: { delay: 0.3 },
  },
  notView: {
    height: 0,
  },
};

export const slideToRight1: Variants = {
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

export const slideToRight2: Variants = {
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

export const zoomIn: Variants = {
  view: {
    transform: "scale(100%)",
    opacity: 1,
  },
  notView: {
    transform: "scale(0%)",
    opacity: 0,
  },
};
