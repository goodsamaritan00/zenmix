🎧 ZenMix

Focus better. Relax deeper. Build your perfect soundscape.

<!--
TODO: Take a screenshot of your app, save it as 'screenshot.png' in your repo,
and uncomment the line below:
-->

<!--  -->

📖 About

ZenMix is a modular, open-source ambient sound mixer. Whether you need the sound of heavy rain to study, or a crackling fire to relax, ZenMix lets you layer and mix sounds directly in your browser.

We built this because most "ambient" websites don't let you control the volume of individual elements. ZenMix does.

🛠 Tech Stack

Framework: React + Vite (Fast & Lightweight)

Styling: Tailwind CSS v4

Icons: Lucide React

State: React Hooks (No external state libraries)

🚀 Getting Started

You can run this project locally in about 2 minutes.

Clone the repo

git clone [https://github.com/YOUR_USERNAME/zenmix.git](https://github.com/YOUR_USERNAME/zenmix.git)
cd zenmix

Install dependencies

npm install

Start the app

npm run dev

🤝 How to Contribute (The Fun Part)

We designed ZenMix to be the easiest open source contribution you will ever make. You don't need to know complex React logic to add a new feature.

Want to add a new Sound?

You can add a new sound (e.g., "Coffee Shop", "Thunder", "White Noise") in 3 simple steps:

1. Add the Audio File
   Find a royalty-free MP3 (try Pixabay or Freesound) and drop it here:
   public/sounds/your-sound.mp3

2. Register the Sound
   Open src/data/sounds.json and add a new object to the list:

{
"id": "coffee",
"label": "Coffee Shop",
"icon": "Coffee", // Pick an icon name from Lucide.dev
"src": "/sounds/your-sound.mp3",
"color": "bg-amber-700"
}

3. Submit a Pull Request
   That's it! The app automatically renders a card for every entry in that JSON file.

Want to Code?

Check the Issues tab for ideas like:

Adding a "Mute All" button.

Adding a Pomodoro timer overlay.

Saving the current mix to LocalStorage.

📂 Project Structure

/public
/sounds <-- Put MP3s here
/src
/components <-- React Components (SoundCard, etc.)
/data
sounds.json <-- The "Database" (Edit this to add sounds)
/hooks <-- Logic (useSounds)

📄 License

MIT License - go wild.
