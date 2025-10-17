let res = document.querySelector('div#resultado')

function rolarDado(lados) {
  const resultado = Math.floor(Math.random() * lados) + 1;
  //res.innerHTML = `🎲 Você rolou um D${lados}: ${resultado}`
  const audio = new Audio('sounds/roll.mp3');
  audio.playbackRate = 1.3;
  audio.currentTime = 0;
  audio.play();
  res.innerHTML = `${resultado}`
}

document.querySelectorAll('.dado').forEach(dado => {
  dado.addEventListener('click', () => {
    const lados = parseInt(dado.id.replace('d', ''));
    rolarDado(lados);
  });
});
