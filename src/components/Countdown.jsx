import { useEffect, useState } from "react";

const TimeBlock = ({ value, label, rotation = "" }) => (
  <div className={`flex flex-col items-center ${rotation}`}>
    <span className="text-6xl sm:text-9xl font-bold text-white leading-none">
      {value}
    </span>
    <span className="mt-2 text-white uppercase tracking-wider">{label}</span>
  </div>
);

export const Countdown = () => {
  const getTimeLeft = () => {
    const eventDate = new Date("2026-07-04T16:00:00");
    const difference = eventDate - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-6 py-12">
      <h2 className="text-green-accent rotate-2 text-center">
        Hur länge kvar?
      </h2>

      <div className="mt-8 flex justify-center gap-6 sm:gap-12 -rotate-3">
        <TimeBlock value={timeLeft.days} label="dagar" rotation="-rotate-2" />

        <TimeBlock value={timeLeft.hours} label="timmar" rotation="rotate-1" />

        <TimeBlock
          value={timeLeft.minutes}
          label="minuter"
          rotation="-rotate-1"
        />
      </div>
    </div>
  );
};
