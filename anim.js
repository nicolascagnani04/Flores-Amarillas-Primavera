// Sincronizar la letra de "Blessed" con la canción
const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

// Tiempo de inicio de cada línea, en segundos.
const lyricsData = [
  { text: "Everywhere that I go", time: 0.1 },
  { text: "Everywhere that I be", time: 2.92 },
  { text: "If you were not surrounding me", time: 5.88 },
  { text: "With your energy", time: 10.45 },
  { text: "I don't wanna be there", time: 15.28 },
  { text: "Don't wanna be anywhere", time: 18.16 },
  { text: "Any place that I can't feel you", time: 21.27 },
  { text: "I just wanna be near you", time: 24.98 },

  { text: "And yes, I'm a mess but I'm blessed", time: 30.19 },
  { text: "To be stuck with you, oh", time: 32.79 },
  { text: "Sometimes it gets unhealthy", time: 36.47 },
  { text: "We can't be by ourselves, we", time: 40.1 },
  { text: "Will always need each other", time: 43.33 },
  { text: "Yes, I'm a mess but I'm blessed", time: 45.81 },
  { text: "To be stuck with you", time: 48.14 },
  { text: "I just want you to know that", time: 51.43 },
  { text: "If I could, I swear I'd go back", time: 54.8 },
  { text: "Make everything all better, whoa", time: 58.94 },
  { text: "", time: 62.79 },

  { text: "It's the things that you say", time: 76.19 },
  { text: "It's the way that you pray", time: 79.8 },
  { text: "Prey on my insecurities", time: 82.7 },
  { text: "I know you're feeling me", time: 86.63 },
  { text: "I know sometimes I do wrong", time: 91.33 },
  { text: "But hear the words of this song", time: 94.2 },
  { text: "When I go I don't stay gone for long", time: 97.31 },
  { text: "Don't know what's going on", time: 101.81 },

  { text: "And yes, I'm a mess but I'm blessed", time: 106.3 },
  { text: "To be stuck with you, oh", time: 109.16 },
  { text: "Sometimes it gets unhealthy", time: 112.32 },
  { text: "We can't be by ourselves, we", time: 115.97 },
  { text: "Will always need each other", time: 119.43 },
  { text: "And yes, I'm a mess but I'm blessed", time: 121.79 },
  { text: "To be stuck with you", time: 124.23 },
  { text: "I just want you to know that", time: 127.47 },
  { text: "If I could, I swear I'd go back", time: 131.9 },
  { text: "Make everything all better, whoa", time: 134.57 },
  { text: "", time: 139.47 },

  { text: "And I'm coming back home to you", time: 143.6 },
  { text: "", time: 148.45 },
  { text: "And I'm coming back home to you", time: 150.71 },
  { text: "I'm coming back home", time: 154.61 },
  { text: "I'm coming back home to you", time: 158.7 },
  { text: "I'm coming back home", time: 162.46 },
  { text: "I'm coming back home to you", time: 166.13 },
  { text: "I'm coming back home", time: 169.88 },
  { text: "I'm coming back home to you", time: 173.94 },
  { text: "I'm coming back home", time: 177.49 },
  { text: "I'm coming back home to you", time: 181.48 },
  { text: "I'm coming back home", time: 185.13 },
  { text: "I'm coming back home to you", time: 189.25 },
  { text: "I'm coming back home", time: 192.65 },

  { text: "And yes, I'm a mess but I'm blessed", time: 197.67 },
  { text: "To be stuck with you", time: 200.47 },
  { text: "Sometimes it gets unhealthy", time: 203.47 },
  { text: "We can't be by ourselves, we", time: 207.15 },
  { text: "Will always need each other", time: 210.94 },
  { text: "And yes, I'm a mess but I'm blessed", time: 213.2 },
  { text: "To be stuck with you", time: 215.91 },
  { text: "I just want you to know that", time: 219.1 },
  { text: "If I could, I swear I'll go back", time: 222.66 },
  { text: "Make everything all better, whoa", time: 226.23 },
];

let currentLineIndex = -1;

function updateLyrics() {
  let lineIndex = -1;

  for (let i = 0; i < lyricsData.length; i += 1) {
    if (audio.currentTime >= lyricsData[i].time) {
      lineIndex = i;
    } else {
      break;
    }
  }

  if (lineIndex === currentLineIndex) return;

  currentLineIndex = lineIndex;
  const currentText = lineIndex >= 0 ? lyricsData[lineIndex].text : "";

  lyrics.textContent = currentText;
  lyrics.style.opacity = currentText ? "1" : "0";
}

audio.addEventListener("timeupdate", updateLyrics);
audio.addEventListener("seeked", updateLyrics);
setInterval(updateLyrics, 100);
updateLyrics();

// Ocultar el título después de 216 segundos.
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";

  setTimeout(() => {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
