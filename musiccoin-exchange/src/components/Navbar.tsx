import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-white">
        <Link href="/" className="font-semibold">MusicCoin</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </div>
      </nav>
    </header>
  );
}


