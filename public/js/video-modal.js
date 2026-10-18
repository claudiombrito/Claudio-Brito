// Abre os vídeos dos depoimentos num pop-up na própria página.
// O player do YouTube só carrega no clique, em modo sem cookies.
(function () {
  const modal = document.getElementById('modal-video');
  const tela = document.getElementById('tela-video');
  if (!modal || !tela || typeof modal.showModal !== 'function') return;

  function abrir(id, nome) {
    const quadro = document.createElement('iframe');
    quadro.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&modestbranding=1';
    quadro.title = 'Depoimento de ' + nome;
    quadro.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    quadro.allowFullscreen = true;
    tela.replaceChildren(quadro);
    modal.showModal();
  }

  document.addEventListener('click', function (e) {
    const botao = e.target.closest('[data-video]');
    if (botao) { abrir(botao.dataset.video, botao.dataset.nome || ''); return; }
    if (e.target === modal || e.target.closest('.fechar')) modal.close();
  });

  // Fechar para o vídeo: tirar o iframe interrompe o som.
  modal.addEventListener('close', function () { tela.replaceChildren(); });
})();
