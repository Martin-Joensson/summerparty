import corn from "../assets/corn.jpg";
import potato from "../assets/potato.jpg";
import skewer from "../assets/skewer.jpg";
import plate from "../assets/plate.jpg";
import drink from "../assets/drink.jpg";
import snacks from "../assets/snacks.jpg";

export const FoodInfo = () => {
  const items = [
    {
      emoji: "🌽",
      image: corn,
      title: "Majskolvar",
      desc: "Grillade majskolvar med smör.",
    },
    {
      emoji: "🥔",
      image: potato,
      title: "Folieknyten",
      desc: "Bygg ditt eget folieknyte med potatis och örter.",
    },
    {
      emoji: "🍢",
      image: skewer,
      title: "Grönsaksspett",
      desc: "Spett med grönsaker och svamp direkt från grillen.",
    },
    {
      emoji: "🍽️",
      image: plate,
      title: "Egen Mat",
      desc: "Du får jättegärna ta med något, vegetariskt eller ej, att slänga på grillen.",
    },
    {
      emoji: "🥤",
      image: drink,
      title: "Dryck",
      desc: "Ta med det du själv vill dricka under kvällen.",
    },
    {
      emoji: "🍿",
      image: snacks,
      title: "Snacksbord",
      desc: "Ta gärna med något litet till vårt gemensamma snacksbord.",
    },
  ];

  return (
    <section className="w-full px-6 py-16 text-white">
      <div className="text-center mb-10 sm:w-5/8 m-auto">
        <h2 className="text-green-accent -rotate-1 text-2xl sm:text-3xl font-bold">
          Mat & Dryck
        </h2>

        <p className="mt-2 ">
          Det blir vegetarisk grill, goda tillbehör och trevligt häng.
        </p>
      </div>

      <div className="flex flex-wrap sm:w-5/8 m-auto gap-4 justify-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative flex-[1_1_280px] max-w-sm bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden"
          >
            <div className="relative ">
              {/* <div className="text-3xl mb-3">{item.emoji}</div> */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 ">
                <h3 className="text-xl font-bold text-orange-accent">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/90">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
