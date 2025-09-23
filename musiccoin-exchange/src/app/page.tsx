import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">MusicCoin Exchange</h1>
        <p className="text-white/80">Trade artist coins with a fun, music-first crypto vibe 🎵🚀 Buy your favorite artist, build your portfolio, and ride the charts 📈.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="px-5 py-3 rounded bg-indigo-600 hover:bg-indigo-500 transition">Enter App</Link>
          <Link href="/about" className="px-5 py-3 rounded bg-white/20 hover:bg-white/30 transition">About</Link>
        </div>
        <div className="pt-8 text-white/70 text-sm">
          <p>
            Music meets money — we turned clout into coins 🎤💰 Buy, sell, and trade your fav
            artist’s tokens. Their hype = your bag 💼✨ Stop just streaming, start stacking ⚡️.
          </p>
        </div>
      </div>
    </div>
  );
}
