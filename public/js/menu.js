// Abre e fecha o menu de seções no celular.
(function () {
  const topo = document.getElementById('topo');
  const botao = topo && topo.querySelector('.menu-btn');
  if (!botao) return;
  function fechar() { topo.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false'); }
  botao.addEventListener('click', function () {
    const aberto = topo.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', String(aberto));
  });
  topo.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', fechar); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
})();
