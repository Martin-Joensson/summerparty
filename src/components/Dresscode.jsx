import heroImage from "../assets/lights.jpg";
import React from "react";

export const Dresscode = () => {
  return (
    <div
      className="relative  w-full justify-center content-center  bg-cover bg-top px-4 py-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex  sm:w-5/8 m-auto flex-col justify-center px-6  ">
              <h2 className="text-orange-accent -rotate-4 text-center">Klädkod</h2>
              <p>Nope inget sånt. </p>
        <p>Kom i det du är bekväm i.</p>
      </div>
    </div>
  );
};
