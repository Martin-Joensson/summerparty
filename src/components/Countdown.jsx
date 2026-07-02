import { useEffect, useState } from "react";

const TimeBlock = ({ value, label, rotation = "" }) => (
  <div className={`flex flex-col items-center ${rotation}`}>
    <span className="text-6xl sm:text-9xl font-bold text-white leading-none">
      {value}
    </span>
    <span className="mt-2 text-white uppercase tracking-wider">{label}</span>
  </div>
);

export const Countdown = ({ isStarted, setIsStarted }) => {
  const eventDate = new Date("2026-07-04T16:01:00");

  const getTimeLeft = () => {
    const difference = eventDate - Date.now();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const checkStarted = () => {
      if (Date.now() >= eventDate) {
        setIsStarted(true);
      }
    };

    checkStarted();

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  if (isStarted) {
    return (
      <div className="flex flex-col items-center w-7/10 mx-auto mb-20">
        <h2 className="text-orange-accent rotate-2 text-center">
          Det är nu det händer!
        </h2>
        <div className="mt-8 flex justify-center gap-6 sm:gap-12 -rotate-3 text-5xl sm:text-6xl font-bold text-white leading-none">
          <p>Varmt välkommen till Sätra Summer Party!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-12">
      <h2 className="text-orange-accent rotate-2 text-center">
        Hur långt är det kvar?
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
