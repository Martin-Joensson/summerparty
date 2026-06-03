import { useEffect, useState } from "react";

export const RsvpModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const submit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/.netlify/functions/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          people: Number(people),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      await res.json();

      setStatus("success");

      // Reset form
      setName("");
      setPeople(1);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // Auto-close after successful RSVP
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const closeModal = () => {
    setOpen(false);

    // Don't clear success state while the success message is showing
    if (status !== "success") {
      setStatus("idle");
    }
  };

  return (
    <>
      {/* Trigger button */}
      <div className="flex justify-center py-10">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-accent text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform animate-bounce cursor-pointer"
        >
          Jag kommer!
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl text-white animate-fadeIn">
            {/* Decorative glow */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-green-accent/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-accent/20 blur-3xl rounded-full pointer-events-none" />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            {status === "success" ? (
              <h2 className="text-orange-accent -rotate-2 text-center text-xl font-bold mb-6">
                Vad kul att ni kommer!
              </h2>
            ) : (
              <h2 className="text-orange-accent -rotate-2 text-center text-xl font-bold mb-6">
                Vad heter du och hur många är ni som kommer?
              </h2>
            )}

            {/* Success */}
            {status === "success" && (
              <div className="text-center py-8 animate-bounce">
                <p className="text-3xl font-bold text-green-accent mb-2">
                  Du är registrerad! 🎉
                </p>
                <p className="text-white">Vi ses på Sätra Summer Party</p>
              </div>
            )}

            {/* Loading */}
            {status === "loading" && (
              <div className="text-center py-8">
                <div className="w-10 h-10 border-4 border-white/20 border-t-green-accent rounded-full animate-spin mx-auto mb-4" />

                <p className="text-xl font-bold text-orange-accent">
                  Registrerar er...
                </p>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="text-center py-8">
                <p className="text-red-400 font-bold text-xl mb-3">
                  Något gick fel
                </p>

                <p className="text-white/70 mb-4">
                  Försök igen om en liten stund.
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="text-white underline"
                >
                  Försök igen
                </button>
              </div>
            )}

            {/* Form */}
            {status === "idle" && (
              <form onSubmit={submit} className="space-y-4">
                <input
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:border-green-accent transition-colors"
                  placeholder="Namn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="number"
                  min="1"
                  max="20"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:border-green-accent transition-colors"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-green-accent text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform"
                >
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
