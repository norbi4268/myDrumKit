window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  console.log(e);
  key.classList.add('playing');
});
