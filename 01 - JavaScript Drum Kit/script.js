window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key =  document.querySelector(`.key[data-key=${e.key}]`);
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0; //allows for sounds to be spammed
    audio.play();
    key.classList.add('playing');
});

window.addEventListener('keyup', function(e) {
    const key =  document.querySelector(`.key[data-key=${e.key}]`);
    if(!key) return;
    key.classList.remove('playing');
})

