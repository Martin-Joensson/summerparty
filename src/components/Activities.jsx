import heroImage from "../assets/cornhole.jpg";
import cornhole from "../assets/cornhole2.jpg";
import drinks from "../assets/drinks-comp.jpg";
import nerf from "../assets/nerf.jpg";
import grill from "../assets/grill.jpg";
import hang from "../assets/hang.jpg";

export const Activities = () => {
  const activities = [
    {
      title: "Drinktävling",
      image: drinks,
      desc: "Må bästa smak vinna!",
    },
    {
      title: "Cornhole",
      image: cornhole,
      desc: "Tävla på lite barnsligt vis",
    },
    {
      title: "Nerf-prickskytte",
      image: nerf,
      desc: "Vem siktar bäst?",
    },
    {
      title: "Hängmatta",
      image: hang,
      desc: "Max chill. Noll stress",
    },
    {
      title: "Grill",
      image: grill,
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
         <p className="mt-2">Aktiviteter hela dagen och kvällen</p>
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
    </div>
  );
};
