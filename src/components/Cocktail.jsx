export const Cocktail = () => {
  const activities = [
    {
      title: "Årets Mocktail",
      desc: "",
    },
    {
      title: "Årets Hemmasnickeri",
      desc: "",
    },
    {
      title: "Årets Färsking",
      desc: "",
    },
  ];

  return (
    <div className="w-full px-6 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-orange-accent rotate-2 text-2xl sm:text-3xl font-bold">
          Blandar du en grym drink?
        </h2>
        <p className="text-white mt-2">Dela gärna med dig av din bästa skapelse. </p>
        <p className="text-white mt-2">Då kan du vinna pris i kategorierna: </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {activities.map((item, i) => (
          <div
            key={i}
            className="relative  bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl transition-transform"
          >
            <h3 className="text-xl font-bold text-green-accent">
              {item.title}
            </h3>

            <p className=" mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-white pt-8">
        Ta med dig det du behöver för att göra en grym drink till ett gäng personer. Vi står för glas
        och is!{" "}
      </p>
    </div>
  );
};
