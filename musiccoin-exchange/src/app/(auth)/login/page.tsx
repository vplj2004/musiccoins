"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [remember, setRemember] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input id="email" className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input id="password" className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <input id="remember" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button className="w-full py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition">Continue</button>
        </form>
        <p className="mt-4 text-sm text-white/70">Don&apos;t have an account? <Link href="/signup" className="underline">Sign up</Link></p>
      </div>
    </div>
  );
}


