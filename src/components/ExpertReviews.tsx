import { useEffect, useRef, useState } from "react";
import type { ExpertDataType } from "../data/ExpertData";
import { ExpertData } from "../data/ExpertData";
import ExpertCard from "./ExpertCard";

export default function ReviewCarousel() {
  const [index, setIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef<number>(index);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const CARD_WIDTH = 550;

  // clones for seamless loop
  const extendedData: ExpertDataType[] = [
    ExpertData[ExpertData.length - 1],
    ...ExpertData,
    ExpertData[0],
  ];

  // normalize extended index to real data index
  const normalizeIndex = (i: number): number => {
    if (i === 0) return ExpertData.length - 1;
    if (i === extendedData.length - 1) return 0;
    return i - 1;
  };

  // autoplay with early wrap
  useEffect(() => {
    const advance = () => {
      const cur = indexRef.current;
      const lastReal = extendedData.length - 2;

      if (cur === lastReal) {
        setIsTransitioning(false);
        setIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setIndex(1); // animate forward
          });
        });
      } else {
        setIndex(cur + 1);
      }
    };

    const interval = setInterval(advance, 7000);
    return () => clearInterval(interval);
  }, [extendedData.length]);

  // detect desktop and container width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeReal = normalizeIndex(index);

  return (
    <>
      <div className="bg-secondary py-4">
        <h2 className="text-4xl font-bold text-white text-center lg:text-5xl lg:py-4">
          Hear from the Experts
        </h2>
      </div>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-secondary"
      >
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            willChange: "transform",
            transform: isDesktop
              ? `translateX(${
                  containerWidth / 2 - (index + 0.5) * CARD_WIDTH
                }px)`
              : `translateX(calc(-${index * 80}% + 10%))`,
            width: isDesktop
              ? `${extendedData.length * CARD_WIDTH}px`
              : undefined,
          }}
        >
          {extendedData.map((expert, i) => {
            const realI = normalizeIndex(i);
            const isActive = isDesktop ? realI === activeReal : true;

            return (
              <div
                key={`${realI}-${i}`}
                className={`flex-shrink-0 px-2 ${
                  isDesktop ? "flex justify-center" : "w-4/5 lg:w-full"
                }`}
                style={isDesktop ? { width: `${CARD_WIDTH}px` } : undefined}
              >
                <div
                  className={[
                    "transition-all duration-700",
                    isDesktop
                      ? isActive
                        ? "scale-100 blur-0 opacity-100 z-10"
                        : "scale-90 blur-sm opacity-40"
                      : "",
                  ].join(" ")}
                >
                  <ExpertCard {...expert} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
