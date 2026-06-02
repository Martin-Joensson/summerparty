import { useState } from "react";

export const RsvpModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const submit = async (e) => {
    e.preventDefault();

    // 1. INSTANT UI UPDATE
    setStatus("success");

    const payload = { name, people };

    // 2. FIRE REQUEST IN BACKGROUND
    try {
      const res = await fetch("/.netlify/functions/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();

      // optional: sync counter if needed
      // (your realtime already handles this)
    } catch (err) {
      console.error(err);

      // rollback if something fails
      setStatus("error");
    }
  };

  return (
    <>
      {/* Trigger button */}
      <div className="w-full flex justify-center py-10">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-accent text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform animate-bounce cursor-pointer"
        >
          Jag kommer!
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* modal card */}
          <div className="relative w-[90%] max-w-md bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl text-white animate-fadeIn">
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white"
            >
              ✕
            </button>

            {/* header */}

            {done ? (
              <h2 className="text-orange-accent -rotate-2 text-center text-xl font-bold mb-6">
                Vad kul att ni kommer!
              </h2>
            ) : (
              <h2 className="text-orange-accent -rotate-2 text-center text-xl font-bold mb-6">
                Vad heter du och hur många kommer ni vara?
              </h2>
            )}

            {/* success state */}
            {status === "success" && (
              <div className="text-center py-10 animate-pulse">
                <p className="text-2xl font-bold text-green-accent">
                  Du är med! 🎉
                </p>
                <p className="text-white/70 mt-2">
                  Vi ses på Sätra Summer Party
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="text-center py-10">
                <p className="text-red-400 font-bold">Något gick fel 😬</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-white underline"
                >
                  Försök igen
                </button>
              </div>
            )}

            {status === "idle" && (
              <form onSubmit={submit} className="space-y-4">
                <input
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg"
                  placeholder="Namn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="number"
                  min="1"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />

                <button className="w-full bg-green-accent text-black font-bold py-3 rounded-lg">
                  Skicka RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
