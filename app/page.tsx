"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">ورود به ربات پزشکی</h1>
      <button
        onClick={() => router.push("/dashboard")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        ورود آزمایشی
      </button>
    </div>
  );
}
