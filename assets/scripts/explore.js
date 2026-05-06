// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const faceImage = document.querySelector("#explore img");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    if (!textToSpeak.value.trim() || voiceSelect.value === 'select') {
      return;
    }

    synth.cancel();

    const speech = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        speech.voice = voice;
      }
    }

    speech.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    speech.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(speech);
  });
}
