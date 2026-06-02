import heroImage from "../assets/bokeh.jpg";

export const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full justify-center content-center  bg-cover bg-bottom"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full sm:w-3/5 m-auto  flex-col justify-center px-6 text-left">
        <h2 className="text-4xl font-bold">
          <span className="block text-green-accent">Sätra</span>
          <span className="block text-orange-accent">Summer</span>
          <span className="block text-green-accent">Party '26</span>
        </h2>
        <p className="mt-10 text-xl text-white">Mer information kommer snart!</p>
      </div>
    </div>
  );
};
