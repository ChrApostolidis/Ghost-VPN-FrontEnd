import Reveal from "./animations/Reveal";
import RevealTitle from "./animations/RevealTitle";

export default function FeatureCard({
  title,
  imageSrc,
  direction,
}: {
  title: string;
  imageSrc: string;
  direction: "left" | "right";
}) {
  return (
    <div>
      <RevealTitle>{title}</RevealTitle>
      <Reveal direction={direction}>
        <img
          className="w-full rounded-2xl shadow-xl shadow-black/30"
          src={imageSrc}
          alt={title}
        />
      </Reveal>
    </div>
  );
}
