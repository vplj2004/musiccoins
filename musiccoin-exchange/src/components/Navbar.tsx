import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-white">
        <Link href="/" className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300">
          🎵 MusicCoin
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/dashboard" className="font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 relative group">
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/portfolio" className="font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 relative group">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}


