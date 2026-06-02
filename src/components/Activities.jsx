import heroImage from "../assets/cornhole.jpg";

export const Activities = () => {
  const activities = [
    {
      title: "Blandar du en grym drink?",
      desc: "Var med och tävla i Drinktävlingen!",
    },
    {
      title: "Cornhole",
      desc: "Tävla på lite barnligt vis",
    },
    {
      title: "Nerf-prickskytte",
      desc: "Vem siktar bäst?",
    },
    {
      title: "Hängmatta & kuddhäng",
      desc: "Max chill. Noll stress",
    },
    {
      title: "Vegetarisk grill",
      desc: "Grillat, grönt och gott",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="relative w-full px-6 py-16 text-white object-cover bg-center bg-cover"
    >
      <div className="absolute inset-0 bg-black/60" />
      {/* Header */}
      <div className="relative text-center mb-10">
        <h2 className="text-orange-accent -rotate-2 text-2xl sm:text-3xl font-bold">
          Vad händer på festen?
        </h2>
        <p className="text-white/70 mt-2">Aktiviteter hela dagen och kvällen</p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {activities.map((item, i) => (
          <div
            key={i}
            className="relative flex-[1_1_280px] max-w-sm bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl overflow-hidden"
          >
            {/* glow accent */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-green-accent/20 blur-2xl rounded-full" />

            <h3 className="text-xl font-bold text-green-accent">
              {item.title}
            </h3>

            <p className=" mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
