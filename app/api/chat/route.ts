import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful medical assistant. Always remind the user that this is not a replacement for a real doctor.",
        },
        { role: "user", content: message },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json({ reply: data.choices[0].message.content });
}
