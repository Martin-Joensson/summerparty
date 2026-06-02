import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import heroImage from "../assets/trees.jpg";

export const Attendees = () => {
  const [count, setCount] = useState(0);
  const [anim, setAnim] = useState(false);

  const fetchCount = async () => {
    const { data, error } = await supabase
      .from("event")
      .select("attendees")
      .eq("id", 1)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return;
    }

    if (data) {
      setCount(data.attendees);
    }
  };

  useEffect(() => {
    // initial load
    fetchCount();

    // realtime subscription (ONLY ONE)
    const channel = supabase
      .channel("event-attendees")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "event",
          filter: "id=eq.1",
        },
        (payload) => {
          setCount(payload.new.attendees);

          setAnim(true);
          setTimeout(() => setAnim(false), 150);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div
      className="relative w-full justify-center items-center px-6 py-10 backdrop-blur-md bg-cover bg-bottom"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-center">
        <h2 className="text-orange-accent -rotate-2">Hur många kommer?</h2>

        <p
          className={`text-6xl sm:text-9xl font-bold text-white transition-transform duration-150 ${
            anim ? "scale-125" : "scale-100"
          }`}
        >
          {count}
        </p>
      </div>
    </div>
  );
};
