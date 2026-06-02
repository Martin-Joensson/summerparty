import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero min-h-screen bg-clr-orange flex items-center justify-center">
          <Hero />
        </div>
      </section>
    </>
  );
}

export default App;
