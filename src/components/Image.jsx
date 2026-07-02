import heroImage from "../assets/drinks.jpg";

export const Image = () => {
  return (
    <div
      className="relative min-h-50 w-full justify-center content-center  bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>
  );
};
