import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "❌ کلید API تنظیم نشده. لطفاً با مدیر تماس بگیرید." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
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

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { reply: `❌ خطا در ارتباط با API: ${errorText}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (err: any) {
    return NextResponse.json(
      { reply: `❌ خطای داخلی سرور: ${err.message}` },
      { status: 500 }
    );
  }
}
