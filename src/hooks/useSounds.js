import soundsData from '../data/sounds.json';

export const useSounds = () => {
  // In a real app, you might sort them alphabetically here
  const sounds = soundsData.sort((a, b) => a.label.localeCompare(b.label));
  
  return { sounds };
};