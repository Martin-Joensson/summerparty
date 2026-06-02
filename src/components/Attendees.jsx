import eventData from "../data/event.json";
import heroImage from "../assets/drinks.jpg";

export const Attendees = () => {
  return (
    <div
      className="relative w-full justify-center items-center gap-3   px-6 py-4 backdrop-blur-md content-center  bg-cover bg-bottom "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <h2 className="text- text-orange-accent -rotate-2">Hur många kommer?</h2>
      <div className="relative flex justify-center items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-green-accent animate-pulse" />
        <p className="text-6xl sm:text-9xl font-bold text-white">
          {eventData.attendees}
        </p>
      </div>
    </div>
  );
};
