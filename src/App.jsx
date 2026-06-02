import { Attendees } from "./components/Attendees";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Rsvp } from "./components/Rsvp";
import { RsvpModal } from "./components/RsvpModal";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero min-h-screen flex items-center justify-center">
          <Hero />
        </div>
      </section>
      <section>
        <Countdown />
      </section>
      <section>
        <Attendees />
      </section>
      <section>
        <RsvpModal />
        {/* <Rsvp /> */}
      </section>
    </>
  );
}

export default App;
