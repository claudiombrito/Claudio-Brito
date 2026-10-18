// Quando alguém pede o capítulo no site, o pedido chega em leads_livro.
// Esta função cria dois e-mails na coleção "mail", que a extensão
// "Trigger Email from Firestore" envia: um para a pessoa, com o link do
// capítulo, e um aviso para o Claudio.
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { defineString } = require('firebase-functions/params');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

initializeApp();

// A região precisa ser a mesma do banco Firestore do projeto (ver docs/publicar.md).
const REGIAO = 'southamerica-east1';
const SITE = defineString('SITE_URL', { default: 'https://www.claudiobrito.com' });
const AVISO_PARA = defineString('AVISO_PARA', { default: 'Claudio.Brito@GlobalMentoringGroup.com' });
const CAPITULO = '/livro/mentoria-capitulo-1.pdf';

function escapar(t) {
  return String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function emailParaLeitor(link) {
  return {
    subject: 'Seu capítulo do livro Mentoria',
    text:
      'Olá!\n\nObrigado pelo interesse no livro Mentoria. O primeiro capítulo está aqui:\n' +
      link +
      '\n\nSe quiser conversar sobre a sua experiência, agende uma conversa estratégica: https://tidycal.com/claudiobrito/agenda\n\nUm abraço,\nClaudio Brito\nGlobal Mentoring Group\n\nVocê recebeu esta mensagem porque pediu o capítulo em claudiobrito.com. Para não receber mais, responda com a palavra SAIR.',
    html:
      '<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#14121c;max-width:560px">' +
      '<p>Olá!</p>' +
      '<p>Obrigado pelo interesse no livro <i>Mentoria</i>. O primeiro capítulo está no botão abaixo.</p>' +
      '<p><a href="' + escapar(link) + '" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#7c3aed;color:#ffffff;text-decoration:none;font-weight:bold">Ler o primeiro capítulo</a></p>' +
      '<p>Se quiser conversar sobre a sua experiência, <a href="https://tidycal.com/claudiobrito/agenda" style="color:#7c3aed">agende uma conversa estratégica</a>.</p>' +
      '<p>Um abraço,<br>Claudio Brito<br>Global Mentoring Group</p>' +
      '<p style="font-size:12px;color:#6b6880">Você recebeu esta mensagem porque pediu o capítulo em claudiobrito.com. Para não receber mais, responda com a palavra SAIR.</p>' +
      '</div>',
  };
}

exports.enviarCapitulo = onDocumentCreated({ document: 'leads_livro/{id}', region: REGIAO }, async (event) => {
  const snap = event.data;
  if (!snap) return;
  const lead = snap.data();
  if (!lead || !lead.email || lead.consentimento !== true || lead.processadoEm) return;

  const db = getFirestore();
  const link = SITE.value() + CAPITULO;
  const origem = lead.utm && lead.utm.utm_source ? ' (origem: ' + lead.utm.utm_source + ')' : '';

  const lote = db.batch();
  lote.set(db.collection('mail').doc(), { to: lead.email, message: emailParaLeitor(link) });
  lote.set(db.collection('mail').doc(), {
    to: AVISO_PARA.value(),
    message: {
      subject: 'Novo pedido do capítulo: ' + lead.email,
      text: lead.email + ' pediu o primeiro capítulo do livro em claudiobrito.com' + origem + '.',
    },
  });
  lote.update(snap.ref, { processadoEm: FieldValue.serverTimestamp() });
  await lote.commit();
});
