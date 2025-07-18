import { useMemo } from "react";

export default function StarFieldBackground({
  count = 200,
  fallPercentage = 0.2,
  colors = ["#ffffff", "#d1d5db", "#fcd34d", "#bae6fd"],
  minSize = 1,
  maxSize = 3,
}) {
  const stars = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <>
      <style jsx global>{`
        @keyframes star-blink {
          0%,
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
        @keyframes star-fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(5vw);
            opacity: 0;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {stars.map((_, i) => {
          const size = Math.random() * (maxSize - minSize) + minSize;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const top = `${Math.random() * 100}vh`;
          const left = `${Math.random() * 100}vw`;
          const isFalling = Math.random() < fallPercentage;

          const fallDuration = (6 + Math.random() * 10).toFixed(2);
          const fallDelay = (Math.random() * -20).toFixed(2);

          const blinkDuration = (3 + Math.random() * 5).toFixed(2);
          const blinkDelay = (Math.random() * 8).toFixed(2);

          return (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top,
                left,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 4}px ${color}`,
                opacity: 0.9,
                animation: isFalling
                  ? `star-fall ${fallDuration}s linear infinite`
                  : `star-blink ${blinkDuration}s ease-in-out infinite`,
                animationDelay: isFalling ? `${fallDelay}s` : `${blinkDelay}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
