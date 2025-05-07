// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const js_confetti = new JSConfetti();
  const horn_sel = document.getElementById('horn-select');
  const horn_img = document.querySelector('#expose img');
  const audio_elem = document.querySelector('audio');
  const vol_slider = document.getElementById('volume');
  const vol_icon = document.querySelector('#volume-controls img');
  const play_btn = document.querySelector('button');

  // on change => swap image & audio source
  horn_sel.addEventListener('change', (e) => {
    const horn = e.target.value; 
    horn_img.src = `assets/images/${horn}.svg`;
    horn_img.alt = `${horn.replace('-', ' ')} image`;
    audio_elem.src = `assets/audio/${horn}.mp3`;
  });

  // on input => adjust volume and icon
  vol_slider.addEventListener('input', (e) => {
    const vol = parseInt(e.target.value, 10);
    audio_elem.volume = vol / 100;
    let level;

    // logic to set volume level based on slider value
    if (vol === 0) {
      level = 0;
    } else if (vol < 33) {
      level = 1;
    } else if (vol < 67) {
      level = 2;
    } else {
      level = 3;
    }

    vol_icon.src = `assets/icons/volume-level-${level}.svg`;
    vol_icon.alt = `Volume level ${level}`;
  });

  // play sound (and confetti for party horn)
  play_btn.addEventListener('click', () => {
    audio_elem.play();

    if (horn_sel.value === 'party-horn') {
      js_confetti.addConfetti();
    }
  });

  // initialize audio volume to match slider
  audio_elem.volume = vol_slider.value / 100;
}
