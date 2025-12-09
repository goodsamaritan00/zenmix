import SoundCard from "./components/SoundCard";
import { useSounds } from "./hooks/useSounds"; // <--- Import the hook

function App() {
  const { sounds } = useSounds(); // <--- Fetch the data

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">ZenMix</h1>
        <p className="text-gray-400">
          Your focus environment. Mix your perfect soundscape.
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sounds.map((sound) => (
          <SoundCard key={sound.id} sound={sound} />
        ))}
      </main>
    </div>
  );
}

export default App;
