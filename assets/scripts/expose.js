// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();
 
  audio.volume = volumeSlider.value / 100;
 
  hornSelect.addEventListener('change', function () {
    const horn = hornSelect.value;
 
    if(horn == "air-horn"){
    hornImage.src = 'assets/images/air-horn.svg';
    hornImage.alt = "air-horn";
    audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(horn == "car-horn"){
    hornImage.src = 'assets/images/car-horn.svg';
    hornImage.alt = "car-horn";
    audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(horn == "party-horn"){
    hornImage.src = 'assets/images/party-horn.svg';
    hornImage.alt = "party-horn";
    audio.src = 'assets/audio/party-horn.mp3';
    }
    
  });
 
  volumeSlider.addEventListener('input', function () {
    const volume = parseInt(volumeSlider.value);
 
    audio.volume = volume / 100;
 
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
 
  playButton.addEventListener('click', function () {
    if (hornSelect.value === 'select') return;
 
    audio.currentTime = 0;
    audio.play();
 
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti()
    }
  });
}