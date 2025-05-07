// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voice_select = document.getElementById('voice-select');
  const text_area = document.getElementById('text-to-speak');
  const talk_btn = document.querySelector('#explore button');
  const face_img = document.querySelector('#explore img');

  // populate the dropdown with available voices
  function populate_voices() {
    const voices = synth.getVoices();

    // clear out old options (except the placeholder one)
    // voice_select.innerHTML = '';
    voice_select.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      
      // set the text content to the voice name and language
      opt.textContent = `${v.name} (${v.lang})`;
      voice_select.appendChild(opt);
    });
  }

  // check if the voices are already loaded
  populate_voices();
  synth.addEventListener('voiceschanged', populate_voices);

  talk_btn.addEventListener('click', () => {
    const text = text_area.value.trim();
    const idx = parseInt(voice_select.value, 10);

    if (!text || isNaN(idx)) return; // no text or voice selected

    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = synth.getVoices()[idx];

    // imitate speaking by swapping the face image
    utter.addEventListener('start', () => {
      face_img.src = 'assets/images/smiling-open.png';
      face_img.alt = 'Speaking face';
    });

    // reset the face image when done
    utter.addEventListener('end', () => {
      face_img.src = 'assets/images/smiling.png';
      face_img.alt = 'Smiling face';
    });

    synth.speak(utter); // actually speak the text :)
  });
}