// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voices = [];
  
  let synth = window.speechSynthesis;
  voices = synth.getVoices();
  let pic = document.querySelector("img");
  let button = document.querySelector('Button');
  var voiceSelecter = document.getElementById("voice-select");
  const text = document.getElementById('text-to-speak');

  synth.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    
  })
  
  
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].lang != 'en-US') {
      continue;
    }
  let voice = new Option(voices[i].name);
  voice.setAttribute('name', voices[i].name);
  voiceSelecter.appendChild(voice);
}


  button.addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text.value;
  
    speech.voice = find(voices, voiceSelecter.selectedOptions[0].getAttribute('name'));      
    window.speechSynthesis.speak(speech);

    if(window.speechSynthesis.speaking == true){
      pic.src = "assets/images/smiling-open.png";
    }
    speech.addEventListener('end', function(event) {
      pic.src = "assets/images/smiling.png";
    });
    
  }); 
}



function find(voices, voice) {
  for(let i = 0; i < voices.length; i++){
    if(voices[i].name === voice){
      return voices[i];
    }
  }

}