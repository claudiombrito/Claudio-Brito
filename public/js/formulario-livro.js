// Formulário "primeiro capítulo grátis".
// Grava o pedido em Firestore (coleção leads_livro). A função "enviarCapitulo"
// (pasta functions/) manda o capítulo para a pessoa e um aviso para o Claudio.
// O Firebase só é carregado quando a pessoa envia o formulário, para a página
// abrir sem JavaScript pesado.
(function () {
  var form = document.getElementById('form-livro');
  if (!form) return;
  var email = document.getElementById('email-livro');
  var aceite = document.getElementById('aceite-livro');
  var armadilha = document.getElementById('site-livro');
  var botao = document.getElementById('botao-livro');
  var msg = document.getElementById('msg-livro');
  var VERSAO = '10.12.2';
  var carregando = null;

  function aviso(texto, erro) {
    msg.style.color = erro ? 'var(--i)' : 'var(--t)';
    msg.textContent = texto;
  }

  function carregarScript(src) {
    return new Promise(function (ok, falha) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = ok;
      s.onerror = function () { falha(new Error('Não carregou ' + src)); };
      document.head.appendChild(s);
    });
  }

  // Endereços reservados do Firebase Hosting: a configuração do projeto vem
  // de /__/firebase/init.js, então nenhuma chave fica escrita no código.
  function carregarFirebase() {
    if (!carregando) {
      carregando = carregarScript('/__/firebase/' + VERSAO + '/firebase-app-compat.js')
        .then(function () { return carregarScript('/__/firebase/' + VERSAO + '/firebase-firestore-compat.js'); })
        .then(function () { return carregarScript('/__/firebase/init.js'); });
    }
    return carregando;
  }

  function utm() {
    var p = new URLSearchParams(location.search);
    var u = {};
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) {
      var v = p.get(k);
      if (v) u[k] = v.slice(0, 80);
    });
    return u;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valor = email.value.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(valor) || valor.length > 200) {
      aviso('Digite um e-mail válido, como nome@exemplo.com.', true);
      email.focus();
      return;
    }
    if (!aceite.checked) {
      aviso('Marque a caixa de autorização para receber o capítulo por e-mail.', true);
      aceite.focus();
      return;
    }
    // Robôs costumam preencher o campo escondido: fingimos sucesso e não gravamos nada.
    if (armadilha.value) {
      aviso('Pronto! O capítulo chega no seu e-mail em alguns minutos.');
      form.reset();
      return;
    }

    botao.disabled = true;
    aviso('Enviando…');
    carregarFirebase()
      .then(function () {
        var dados = {
          email: valor,
          consentimento: true,
          origem: 'claudiobrito.com',
          criadoEm: firebase.firestore.FieldValue.serverTimestamp()
        };
        var u = utm();
        if (Object.keys(u).length) dados.utm = u;
        return firebase.firestore().collection('leads_livro').add(dados);
      })
      .then(function () {
        aviso('Pronto! O capítulo chega no seu e-mail em alguns minutos. Se não aparecer, olhe a caixa de spam.');
        form.reset();
        if (window.dataLayer) window.dataLayer.push({ event: 'lead_capitulo_livro' });
      })
      .catch(function () {
        aviso('Não conseguimos registrar agora. Tente de novo em instantes ou fale conosco no WhatsApp.', true);
      })
      .then(function () { botao.disabled = false; });
  });
})();
