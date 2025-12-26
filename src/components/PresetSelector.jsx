import presetsData from "../data/presets.json";
import { useTheme } from "../context/ThemeContext";

const PresetSelector = ({ setActiveSounds, onSelectPreset }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {presetsData.map((preset) => (
        <button
          key={preset.id}
          onClick={() => onSelectPreset(preset)}
          className={`
            flex items-center gap-2 px-4 py-2 
            rounded-full transition-all duration-200
            text-sm font-medium
            ${theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white'
              : 'bg-white/80 hover:bg-white border border-stone-200 hover:border-blue-400 text-stone-700 hover:text-stone-900'
            }
          `}
        >
          <span>{preset.emoji}</span>
          <span>{preset.name}</span>
        </button>
      ))}

      <button
        onClick={() => {
          onSelectPreset(null)
          setActiveSounds([])
        }}
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          theme === 'dark' 
            ? 'text-red-400 hover:text-red-300' 
            : 'text-red-500 hover:text-red-600'
        }`}
      >
        Reset All
      </button>
    </div>
  );
};

export default PresetSelector;