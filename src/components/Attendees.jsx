import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import heroImage from "../assets/trees.jpg";

export const Attendees = () => {
  const [count, setCount] = useState(0);

  // 1. Initial fetch
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

    if (!data) return;

    setCount(data.attendees);
  };

  useEffect(() => {
    fetchCount();

    // 2. Subscribe to realtime changes
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
        },
      )
      .subscribe();

    // cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("counter");

    if (el) {
      el.classList.add("scale-125");
      setTimeout(() => el.classList.remove("scale-125"), 150);
    }
  }, [count]);

  return (
    <div
      className="relative w-full justify-center items-center gap-3   px-6 py-4 backdrop-blur-md content-center  bg-cover bg-bottom "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h2 className="text- text-orange-accent -rotate-2">Hur många kommer?</h2>
      <div className="relative flex justify-center items-center gap-3">
        <p
          id="counter"
          className="text-6xl sm:text-9xl font-bold text-white rotate-7"
        >
          {count}
        </p>
      </div>
    </div>
  );
};
