"use client";

import Link from "next/link";
import Image from "next/image";
import { BackgroundAudio } from "@/components/BackgroundAudio";

// Background options - choose one:
// 1. Use an animated GIF: Place your GIF file in /public/background.gif
// 2. Use the animated SVG: Already created at /public/background.svg
// 3. Use the CSS animated fallback: Built-in particle effects and gradients

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center text-white overflow-hidden">
      {/* Background Audio Player */}
      <BackgroundAudio />
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Try GIF first, then SVG, then CSS fallback */}
        <div className="relative w-full h-full">
          {/* GIF Background */}
          <Image
            src="/background.gif"
            alt="Animated Background"
            fill
            className="object-cover"
            priority
            unoptimized  // Important for GIFs to animate properly
            onError={(e) => {
              // Hide GIF if it fails to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          
          {/* SVG Background (fallback) */}
          <Image
            src="/background.svg"
            alt="Animated SVG Background"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Hide SVG if it fails to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          
          {/* CSS Animated Background (final fallback) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 animate-pulse"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300/50 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-300/60 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
            
            {/* Music notes */}
            <div className="absolute top-1/2 left-1/5 text-white/40 text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>♪</div>
            <div className="absolute top-3/4 right-1/5 text-purple-300/40 text-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>♫</div>
            
            {/* Crypto symbols */}
            <div className="absolute top-1/6 right-1/6 text-yellow-400/40 text-3xl animate-spin" style={{animationDuration: '8s'}}>₿</div>
            <div className="absolute bottom-1/6 left-1/6 text-blue-400/40 text-2xl animate-pulse" style={{animationDuration: '3s'}}>Ξ</div>
          </div>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          MusicCoin Exchange
        </h1>
        <p className="text-white/90 text-lg">Trade artist coins with a fun, music-first crypto vibe 🎵🚀 Buy your favorite artist, build your portfolio, and ride the charts 📈.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl">
            Start Now
          </Link>
          <Link href="/about" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30">
            About
          </Link>
        </div>
        <div className="pt-8 text-white/80 text-sm max-w-xl mx-auto">
          <p className="leading-relaxed">
            Music meets money — we turned clout into coins 🎤💰 Buy, sell, and trade your fav
            artist's tokens. Their hype = your bag 💼✨ Stop just streaming, start stacking ⚡️.
          </p>
        </div>
      </div>
    </div>
  );
}
