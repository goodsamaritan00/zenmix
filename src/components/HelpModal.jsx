import { X, Keyboard, MousePointer, Info } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
        fixed inset-0 z-60 flex items-center justify-center p-4 animate-in fade-in duration-200 backdrop-blur-sm
        ${isDark ? "bg-black/60" : "bg-stone-900/20"}
      `}
    >
      {/* Modal Container */}
      <div
        className={`
          w-full max-w-2xl border rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-colors duration-300
          ${
            isDark ? "bg-gray-900 border-white/10" : "bg-white border-stone-200"
          }
        `}
      >
        {/* Header */}
        <div
          className={`
            flex items-center justify-between p-6 border-b
            ${isDark ? "border-white/5" : "border-stone-100"}
          `}
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                p-2 rounded-lg
                ${
                  isDark
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }
              `}
            >
              <Info size={20} />
            </div>
            <h2
              className={`
                text-xl font-bold
                ${isDark ? "text-white" : "text-stone-800"}
              `}
            >
              Quick Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`
              p-2 rounded-full transition-colors
              ${
                isDark
                  ? "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                  : "text-stone-400 hover:text-stone-600 bg-stone-100 hover:bg-stone-200"
              }
            `}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content: The Bento Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Box 1: Controls */}
          <div
            className={`
              p-5 rounded-xl border transition-colors
              ${
                isDark
                  ? "bg-gray-800/50 border-white/5 hover:border-blue-500/30"
                  : "bg-stone-50 border-stone-200 hover:border-blue-300"
              }
            `}
          >
            <div
              className={`
                flex items-center gap-3 mb-3
                ${isDark ? "text-blue-300" : "text-blue-600"}
              `}
            >
              <MousePointer size={20} />
              <h3 className="font-semibold">Controls</h3>
            </div>
            <p
              className={`
                text-sm leading-relaxed
                ${isDark ? "text-gray-400" : "text-stone-600"}
              `}
            >
              Click any card to toggle sound. Drag sliders to mix. Your perfect
              combo saves automatically.
            </p>
          </div>

          {/* Box 2: Keyboard Shortcuts */}
          <div
            className={`
              p-5 rounded-xl border transition-colors
              ${
                isDark
                  ? "bg-gray-800/50 border-white/5 hover:border-purple-500/30"
                  : "bg-stone-50 border-stone-200 hover:border-purple-300"
              }
            `}
          >
            <div
              className={`
                flex items-center gap-3 mb-3
                ${isDark ? "text-purple-300" : "text-purple-600"}
              `}
            >
              <Keyboard size={20} />
              <h3 className="font-semibold">Shortcuts</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`${isDark ? "text-gray-400" : "text-stone-600"}`}
                >
                  Play / Pause All
                </span>
                <kbd
                  className={`
                    px-2 py-1 rounded text-xs border font-mono shadow-sm
                    ${
                      isDark
                        ? "bg-gray-950 border-white/10 text-gray-300"
                        : "bg-white border-stone-200 text-stone-500"
                    }
                  `}
                >
                  Space
                </kbd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`${isDark ? "text-gray-400" : "text-stone-600"}`}
                >
                  Mute All
                </span>
                <kbd
                  className={`
                    px-2 py-1 rounded text-xs border font-mono shadow-sm
                    ${
                      isDark
                        ? "bg-gray-950 border-white/10 text-gray-300"
                        : "bg-white border-stone-200 text-stone-500"
                    }
                  `}
                >
                  M
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Pro Tip */}
        <div
          className={`
            p-4 text-center border-t
            ${
              isDark
                ? "bg-gray-950/30 border-white/5"
                : "bg-stone-50 border-stone-100"
            }
          `}
        >
          <p
            className={`
              text-xs flex items-center justify-center gap-2
              ${isDark ? "text-gray-500" : "text-stone-500"}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System auto-saves your volume levels
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
