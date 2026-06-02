import { useState } from "react";

export const Rsvp = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("/.netlify/functions/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, people }),
    });

    setDone(true);
  };

  if (done) {
    return <div className="text-white text-center py-10">Tack! 🎉</div>;
  }

  return (
    <section>
      <h2 className="text-green-accent rotate-10">OSA</h2>
      <form
        onSubmit={submit}
        className="px-6 pb-10 flex flex-col items-center gap-4"
      >
        <span className="block">Jag heter:</span>
        <input
          className="block mb-3 p-2 bg-amber-50 rounded text-black"
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Jag tar med mig så här många personer:</p>
        <input
          type="number"
          className="block mb-3 p-2 bg-amber-50 rounded text-black"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />

        <button className="bg-green-accent px-4 py-2 rounded">Skicka RSVP</button>
      </form>
    </section>
  );
};
