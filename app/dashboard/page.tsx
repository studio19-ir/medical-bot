export default function Dashboard() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">پروفایل کاربر</h1>
      <p>نام: کاربر تستی</p>
      <p>روزهای باقی‌مانده عضویت: ۷ روز</p>
      <a href="/chat" className="mt-6 px-4 py-2 bg-green-500 text-white rounded">
        ورود به چت
      </a>
    </div>
  );
}
