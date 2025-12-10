import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";

const SoundCard = ({ sound }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  // Calculate volume percentage for the tooltip
  const volumePercent = Math.round(volume * 100);

  const IconComponent = Icons[sound.icon] || Icons.HelpCircle;

  // EFFECT 1: Handle Audio Creation and Destruction
  useEffect(() => {
    const audio = new Audio(sound.src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound.src]);

  // EFFECT 2: Handle Volume Updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // EFFECT 3: Handle Play/Pause State
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div
      // MERGED FEATURE 1: Tooltip
      title={`Volume: ${volumePercent}%`}
      // MERGED FEATURE 2: Hover Animation (hover:-translate-y-2)
      className={`
        relative p-6 rounded-2xl transition-all duration-300 border border-transparent hover:-translate-y-2
        ${
          isPlaying
            ? `${sound.color} shadow-lg scale-105`
            : "bg-gray-800 hover:bg-gray-700"
        }
      `}
    >
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <IconComponent
            size={48}
            className={isPlaying ? "text-white" : "text-gray-400"}
          />
        </button>

        <h3 className="text-white font-medium text-lg">{sound.label}</h3>

        <div
          className={`
          w-full transition-opacity duration-300 
          ${isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SoundCard;
