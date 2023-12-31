import clsWrapper from "@/utils/class-wrapper";
import { Fragment, useEffect, useState } from "react";

export type Toc = Section[];
export type SubSection = {
  slug: string;
  text: string;
};
export type Section = SubSection & {
  subSections: SubSection[];
};

const useScroll = (toc: Toc) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (toc.length === 0) return;

    let headings: { id: string; top: number }[];
    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue("--scroll-mt").match(/[\d.]+/)?.[0] ?? "0"
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? "16");

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".prose h2:not(#table-of-contents),h3:not(#table-of-contents)"
        )
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const NAV_TOP = -120;
      const top = window.scrollY + scrollMt - NAV_TOP + 1;

      let current: typeof currentSectionSlug = undefined;
      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }
      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", onResize, {
      capture: true,
      passive: true,
    });
    window.addEventListener("transitionend", onResize, {
      capture: true,
      passive: false,
    });
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize, { capture: true });
      window.removeEventListener("transitionend", onResize, { capture: true });
    };
  }, [toc]);

  return { toc, currentSectionSlug };
};

export default function BlogToc({ toc }: { toc: Toc }) {
  const { currentSectionSlug } = useScroll(toc);

  const isSubSectionActive = (subSection: SubSection) => {
    return subSection.slug === currentSectionSlug;
  };

  const isSectionActive = (section: Section) => {
    return (
      section.slug === currentSectionSlug ||
      section.subSections.some((v) => v.slug === currentSectionSlug)
    );
  };

  return (
    <div className="w-72 hidden h-fit max-h-[calc(100vh-10rem)] lg:flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide rounded-xl transition-all sticky top-32 bg-gradient-to-br from-blue-400 to-blue-950">
      {toc.length !== 0 && (
        <div className="">
          <p
            id="toc-header"
            className="py-3 font-extrabold leading-6 bg-black bg-opacity-20 text-white"
          >
            🫧 한 눈에 보기
          </p>
          <ul
            id="toc-content"
            className="px-4 pb-2 mt-2 flex flex-col items-start justify-start text-sm text-start"
          >
            {toc.map((section) => (
              <Fragment key={section.slug}>
                <li>
                  <a
                    href={`#${section.slug}`}
                    className={clsWrapper(
                      "group block py-1",
                      section.subSections && "",
                      isSectionActive(section)
                        ? "bg-gradient-to-br from-blue-400 to-white bg-clip-text font-bold text-transparent drop-shadow-base-bold"
                        : "text-white hover:text-blue-200 hover:drop-shadow-base-bold"
                    )}
                  >
                    {section.text}
                  </a>
                </li>
                {section.subSections.map((subSection) => (
                  <li key={subSection.slug} className="ml-4">
                    <a
                      href={`#${subSection.slug}`}
                      className={clsWrapper(
                        "group flex items-start py-[2px]",
                        isSubSectionActive(subSection)
                          ? "bg-gradient-to-br from-blue-400 to-white bg-clip-text font-bold text-transparent drop-shadow-base"
                          : "text-white hover:text-blue-200 hover:drop-shadow-base"
                      )}
                    >
                      <svg
                        width="3"
                        height="24"
                        viewBox="0 -9 3 24"
                        className="mr-2 overflow-visible text-white"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {subSection.text}
                    </a>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
