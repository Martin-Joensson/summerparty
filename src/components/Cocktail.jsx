import home from "../assets/drink-fresh2.jpg";
import fresh from "../assets/drink-fresh.jpg";
import mock from "../assets/drink-mock.jpg";

export const Cocktail = () => {
  const activities = [
    {
          title: "Årets Mocktail",
        image: mock,
      desc: "Alkoholfri cocktail som är balanserad och sippbar. Perfekt för den som vill njuta av en god drink utan alkohol.",
    },
    {
        title: "Årets Hemmasnickeri",
        image: home,
      desc: "Den har inget namn än, men snart kommer den att vara en klassiker. En drink som du själv har mixat ihop.",
    },
    {
        title: "Årets Färsking",
        image: fresh,
      desc: "En fruktig och frisk drink som är perfekt för en varm sommardag.",
    },
  ];

  return (
    <div className="w-full px-6 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-orange-accent rotate-2 text-2xl sm:text-3xl font-bold">
          Blandar du en grym drink?
        </h2>
        <p className="text-white mt-2">
          Dela gärna med dig av din bästa skapelse.{" "}
        </p>
        <p className="text-white mt-2">Då kan du vinna pris i kategorierna: </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap sm:w-5/8 m-auto gap-4 justify-center">
        {activities.map((item, i) => (
          <div
            key={item.title}
            className="relative flex-[1_1_280px] max-w-sm bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden"
          >
            <div className="relative ">
              {/* <div className="text-3xl mb-3">{item.emoji}</div> */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover "
              />
              <div className="p-6 ">
                <h3 className="text-xl font-bold text-green-accent">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/90">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-white pt-8">
        Ta med dig det du behöver för att göra en grym drink till ett gäng
        personer. Vi står för glas och is!{" "}
      </p>
    </div>
  );
};
