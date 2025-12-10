# Welcome to ZenMix

Thanks for stopping by and wanting to contribute.

We're building a clean, effective ambient sound mixer for focus, study, and relaxation.

## Quick Start (Local Setup)

1. Fork the repository (button in the top-right)
2. Clone your fork
   ```bash
   git clone https://github.com/YOUR-USERNAME/zenmix.git
   cd zenmix
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the dev server
   ```bash
   npm run dev
   ```
5. Open the provided local URL (usually http://localhost:5173)

## Method 1: Add a New Sound (No Code Required)

The easiest way to help.

1. Find a high-quality, royalty-free MP3 (Pixabay, Freesound, Wikimedia Commons, etc.).  
   Copyrighted material is not allowed.

2. Rename the file clearly (e.g., `ocean-waves.mp3`) and place it in `public/sounds/`.

3. Add an entry to `src/data/sounds.json`:
   ```json
   {
     "id": "ocean",
     "label": "Ocean Waves",
     "icon": "Waves",
     "src": "/sounds/ocean-waves.mp3",
     "color": "bg-blue-700"
   }
   ```
   - `icon`: Any Lucide icon name (see lucide.dev/icons)
   - `color`: Any Tailwind background class (e.g., `bg-teal-600`, `bg-slate-500`)

## Method 2: Add a Preset

Have a mix you like? Share it.

Edit `src/data/presets.json` and add:

```json
{
  "id": "focused-rain",
  "name": "Focused Rain",
  "emoji": "🌧️",
  "sounds": {
    "rain": 0.6,
    "fireplace": 0.3,
    "cafe": 0.2
  }
}
```

Keys are sound IDs from `sounds.json`; values are volumes (0.0 – 1.0).

## Method 3: Contribute Code

Feel free to fix bugs or add features.

- Look for issues labeled “help wanted” or “good first issue”
- Create a descriptive branch
  ```bash
  git checkout -b feature/volume-presets
  ```

Tech stack: React (hooks), Tailwind CSS v4. No Redux — we manage everything with local state.

## Submitting a Pull Request

```bash
git push origin feature/your-branch-name
```

Open a PR against the main repository, add a clear description, and we’ll review it promptly.

## Code of Conduct

Be respectful, patient, and kind. Questions at any level are welcome.

That’s it. Glad to have you on board — looking forward to your contribution.
