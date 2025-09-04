import { useEffect, useState } from "react";
import { ExpertData } from "../data/ExpertData";
import ExpertCard from "./ExpertCard";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedReviews = [
    ExpertData[ExpertData.length - 1],
    ...ExpertData,
    ExpertData[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === extendedReviews.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(ExpertData.length);
      }, 700);
    }
  }, [index, extendedReviews.length]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-[400px] mx-auto overflow-hidden bg-secondary lg:w-[600px]">
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(calc(-${index * 80}% + 10%))`,
        }}
      >
        {extendedReviews.map((expert, i) => (
          <div key={i} className="w-4/5 flex-shrink-0 px-2">
            <ExpertCard {...expert} />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white"></div>
    </div>
  );
}
