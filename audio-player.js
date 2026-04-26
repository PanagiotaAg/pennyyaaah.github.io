// Array of your audio files
const audioFiles = [
    "audio/scream.mp3",
    "audio/ggreco.mp3",
    "audio/pink.mp3",
    "audio/cherub.mp3"
    
];

// Randomly select which audio file to play
const randomAudioIndex = Math.floor(Math.random() * audioFiles.length);
const selectedAudioFile = audioFiles[randomAudioIndex];

// Get the audio player element
const audioPlayer = document.getElementById('myAudioPlayer');

// Set the source to the randomly selected file
audioPlayer.src = selectedAudioFile;

// Optional: Display which file is playing (for debugging)
console.log(`Now playing: ${selectedAudioFile}`);