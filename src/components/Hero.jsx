import heroImage from "../assets/bokeh.jpg";
import { InCaseOfRain } from "./InCaseOfRain";

export const Hero = () => {
  return (
    <div
      className="relative min-h-lvh w-full justify-center content-center  bg-cover bg-bottom px-4 py-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />  

      <div className="relative z-10 flex  sm:w-5/8 m-auto flex-col justify-center px-6 text-left">
        <h1 className="font-bold">
          <span className="block text-green-accent">Sätra</span>
          <span className="block text-orange-accent">Summer</span>
          <span className="block text-green-accent">Party '26</span>
        </h1>
        <h2 className="text-white">
          <span className="block">Lördag 4e juli 2026</span>
          <span className="block text-orange-accent">från 16:00</span>
          <span className="block mt-6">Hållsätrabacken</span>
        </h2>
      {/* <InCaseOfRain /> */}
      </div>
    </div>
  );
};
