import { Attendees } from "./components/Attendees";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Rsvp } from "./components/Rsvp";
import { RsvpModal } from "./components/RsvpModal";
import { Activities } from "./components/Activities";
import { Cocktail } from "./components/Cocktail";
import { Hospitality } from "./components/Hospitality";
import { FoodInfo } from "./components/FoodInfo";
import { Quote } from "./components/Quote";
import { Image } from "./components/Image";
import { Dresscode } from "./components/Dresscode";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      <section id="center">
        <div className="hero min-h-screen flex items-center justify-center">
          <Hero />
        </div>
        <Quote />
        <Image />
      </section>
      <section>
        <Countdown isStarted={isStarted} setIsStarted={setIsStarted} />
      </section>
      <section>
        {!isStarted && <RsvpModal />}
        <Attendees />
      </section>
      <FoodInfo />
      <section>
        <Activities />
        <Cocktail />
      </section>
      <Dresscode />
      <Hospitality />
      <section>{!isStarted && <RsvpModal />}</section>
    </>
  );
}

export default App;
