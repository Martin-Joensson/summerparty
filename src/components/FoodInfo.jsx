export const FoodInfo = () => {
  const items = [
    {
      emoji: "🌽",
      title: "Majskolvar",
      desc: "Grillade majskolvar med smör.",
    },
    {
      emoji: "🥔",
      title: "Folieknyten",
      desc: "Bygg ditt eget folieknyte med potatis och örter.",
    },
    {
      emoji: "🍢",
      title: "Grönsaksspett",
      desc: "Spett med grönsaker och svamp direkt från grillen.",
    },
    {
      emoji: "🍽️",
      title: "Egen Mat",
      desc: "Du får jättegärna ta med egen mat.",
    },
    {
      emoji: "🥤",
      title: "Dryck",
      desc: "Ta med det du själv vill dricka under kvällen.",
    },
    {
      emoji: "🍿",
      title: "Snacksbord",
      desc: "Ta gärna med något litet till vårt gemensamma snacksbord.",
    },
  ];

  return (
    <section className="w-full px-6 py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-green-accent -rotate-1 text-2xl sm:text-3xl font-bold">
         Mat & Dryck
        </h2>

        <p className="mt-2 text-white/90">
          Det blir vegetarisk grill, goda tillbehör och trevligt häng.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative flex-[1_1_280px] max-w-sm bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl overflow-hidden"
          >
        
            <div className="relative">
              <div className="text-3xl mb-3">{item.emoji}</div>

              <h3 className="text-xl font-bold text-orange-accent">
                {item.title}
              </h3>

              <p className="mt-2 text-white/90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
