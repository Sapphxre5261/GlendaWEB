import { Suspense } from "react";
import Image from "next/image";
import LoginForm from "./login-form";

export const metadata = {
  title: "Login | Glenda",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl shadow-red-900/5 p-10">
        <div className="flex flex-col items-center text-center">
          <Image src="/G-icon-removebg.png" alt="Glenda logo" width={72} height={72} priority />
          <h1 className="text-3xl font-bold pt-4">Welcome back</h1>
          <p className="text-sm text-slate-500 pt-2">Sign in to continue to Glenda</p>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
