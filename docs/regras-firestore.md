# Regras do Firestore para o formulário do capítulo

O projeto `app-antigravity-adfda` tem **um único conjunto de regras do Firestore**, e quem publica essas regras é o repositório `claudiombrito/gmg-www` (arquivo `firestore.rules`). Por isso este repositório **não** publica regras: se publicasse, apagaria as regras do formulário de depoimentos do www.

Cole o bloco abaixo **dentro** de `match /databases/{database}/documents { ... }` no `firestore.rules` do `gmg-www` e publique as regras de lá (ou cole no console: Firestore → Regras).

```
    // Pedidos do primeiro capítulo do livro, vindos de claudiobrito.com.
    // Visitante só consegue CRIAR o pedido. Ninguém lê pelo navegador.
    function pedidoCapituloValido(d) {
      return d.keys().hasOnly(['email', 'consentimento', 'origem', 'criadoEm', 'utm'])
        && d.keys().hasAll(['email', 'consentimento', 'origem', 'criadoEm'])
        && d.email is string && d.email.size() <= 200
        && d.email.matches('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
        && d.consentimento == true
        && d.origem == 'claudiobrito.com'
        && d.criadoEm == request.time
        && (!('utm' in d) || (d.utm is map && d.utm.size() <= 3));
    }

    match /leads_livro/{id} {
      allow create: if pedidoCapituloValido(request.resource.data);
      allow read, update, delete: if ehAdmin();
    }
```
