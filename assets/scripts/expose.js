// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var choice = document.getElementById('horn-select');
  var picture = document.querySelector("img");
  var audioSrc = document.getElementsByClassName("hidden");
  var volume = document.querySelector('[name="volume"]');
  var buttonElement = document.querySelector("button");
  const confetti = new JSConfetti();

  
  
  choice.addEventListener('change', (event) => {
    changeHorn(choice.value, picture, audioSrc);
  });

  volume.addEventListener('change', (event) => {
    audioSrc[0].volume = changeVol(volume);
  });


  buttonElement.addEventListener('click', (event) => {
    audioSrc[0].play();
    if (choice.value == 'party-horn') {
      confetti.addConfetti();
    }
  });

}

function changeVol(val){
  const volPic = document.querySelector('[alt="Volume level 2"]');
  var level = val.value;
  var volPath = './assets/icons/';

  if (level == 0) {
    volPath = volPath + 'volume-level-0.svg';
  }
  else if (level >= 1 && level < 33) {
    volPath = volPath + 'volume-level-1.svg';
  }
  else if (level >= 33 && level < 67) {
    volPath = volPath + 'volume-level-2.svg';
  } else {
    volPath = volPath + 'volume-level-3.svg';
  }

  volPic.src = volPath;
  return level / 100;
}

function changeHorn(val, picture, audio) { 
  
  let audioPath = './assets/audio/';
  let picPath = 'assets/images/';

  if (val == 'air-horn') {
    picPath = picPath + 'air-horn.svg';
    audioPath = audioPath + 'air-horn.mp3';
  }
  else if (val == 'car-horn') {
    picPath = picPath + 'car-horn.svg';
    audioPath = audioPath + 'car-horn.mp3';
  }
  else if (val == 'party-horn') {
    picPath = picPath + 'party-horn.svg';
    audioPath = audioPath + 'party-horn.mp3';
  }
  else {
    picPath = picPath + 'no-image.png';
  }
  picture.src = picPath;
  audio[0].src = audioPath;
}