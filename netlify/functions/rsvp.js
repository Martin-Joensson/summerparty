import { supabase } from "./_supabase";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed",
    };
  }

  const { name, people } = JSON.parse(event.body);

  // 1. Save RSVP
 const { data: rsvpData, error: rsvpError } = await supabase
   .from("rsvp")
   .insert([{ name, people }]);

 console.log("RSVP INSERT:", rsvpData);

 if (rsvpError) {
   console.error("RSVP ERROR:", rsvpError);

   return {
     statusCode: 500,
     body: JSON.stringify(rsvpError),
   };
 }

  // 2. Get current count
  const { data } = await supabase
    .from("event")
    .select("attendees")
    .eq("id", 1)
    .single();

  const newCount = data.attendees + Number(people);

  // 3. Update counter
  await supabase.from("event").update({ attendees: newCount }).eq("id", 1);

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      attendees: newCount,
    }),
  };
};
