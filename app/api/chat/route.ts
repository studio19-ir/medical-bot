import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // یک پاسخ نمایشی برای دمو
  let reply = "این یک پاسخ نمایشی از ربات پزشکی است. در نسخه نهایی، پاسخ‌ها از ChatGPT دریافت خواهند شد.";

  // برای حس بهتر دمو، بسته به سوال جواب رو کمی تغییر بدیم
  if (message.includes("سردرد")) {
    reply = "به نظر می‌رسد سردرد دارید. حتماً استراحت کنید و در صورت تداوم به پزشک مراجعه کنید. (پاسخ آزمایشی)";
  } else if (message.includes("سلام")) {
    reply = "سلام! من ربات پزشکی هستم. بپرسید تا راهنمایی‌تون کنم. (پاسخ آزمایشی)";
  }

  return NextResponse.json({ reply });
}
