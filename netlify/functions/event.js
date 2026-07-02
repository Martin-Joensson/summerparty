import { supabase } from "./_supabase";

export const handler = async () => {
  const { data } = await supabase
    .from("event")
    .select("attendees")
    .eq("id", 1)
    .single();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
