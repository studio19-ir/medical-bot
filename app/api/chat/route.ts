import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // جواب‌های نمایشی بدون نیاز به API
  let reply = "این یک پاسخ آزمایشی از ربات پزشکی است.";

  if (message.includes("سلام")) {
    reply = "سلام! من ربات پزشکی هستم. (پاسخ نمایشی)";
  } else if (message.includes("سردرد")) {
    reply = "به نظر می‌رسد سردرد دارید. استراحت کنید و در صورت تداوم به پزشک مراجعه کنید. (پاسخ نمایشی)";
  } else if (message.includes("درد")) {
    reply = "برای درد بهتره حتماً به پزشک مراجعه کنید. (پاسخ نمایشی)";
  }

  return NextResponse.json({ reply });
}
