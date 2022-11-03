window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key =  document.querySelector(`.key[data-key=${e.key}]`);
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0; //allows for sounds to be spammed
    audio.play();
    key.classList.add('playing');
});

