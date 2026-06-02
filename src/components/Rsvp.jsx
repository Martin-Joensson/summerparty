import { useState } from "react";

export const Rsvp = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submitRsvp = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://your-api.com/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, people }),
    });

    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="text-center text-white py-10">
        Tack! Vi ses på festen 🎉
      </div>
    );
  }

  return (
    <form
      onSubmit={submitRsvp}
          className="w-full max-w-xl mx-auto px-6 py-10 backdrop-blur-md"
          
    >
      <h2 className="text-orange-accent -rotate-2 text-center mb-6">OSA här</h2>

      <input
        className="w-full p-3 mb-4 bg-white/10 text-white border border-white/20"
        placeholder="Namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        min="1"
        className="w-full p-3 mb-4 bg-white/10 text-white border border-white/20"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <button
        disabled={loading}
        className="w-full bg-green-accent text-black font-bold py-3"
      >
        {loading ? "Skickar..." : "Skicka RSVP"}
      </button>
    </form>
  );
};
