"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // 30% volume by default

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set up audio properties
      audio.volume = volume;
      audio.loop = true; // Loop the audio
      audio.autoplay = true; // Try to autoplay
      
      // Attempt to play the audio
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Audio autoplay prevented:", error);
          // If autoplay fails, we'll show a play button
        }
      };

      // Play audio when component mounts
      playAudio();

      // Add event listeners
      audio.addEventListener("play", () => setIsPlaying(true));
      audio.addEventListener("pause", () => setIsPlaying(false));

      return () => {
        audio.removeEventListener("play", () => setIsPlaying(true));
        audio.removeEventListener("pause", () => setIsPlaying(false));
      };
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/background-music.mp3" // You can change this to your audio file
        preload="auto"
        className="hidden"
      />

      {/* Audio controls - positioned in bottom right */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/50 backdrop-blur-md rounded-lg p-3 border border-white/20">
        <div className="flex items-center gap-3">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <span className="text-lg">⏸</span>
            ) : (
              <span className="text-lg">▶</span>
            )}
          </button>

          {/* Volume control */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Now playing indicator */}
        <div className="mt-2 text-center">
          <p className="text-white/60 text-xs">
            {isPlaying ? "🎵 Now Playing" : "🔇 Paused"}
          </p>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #3B82F6);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #3B82F6);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}