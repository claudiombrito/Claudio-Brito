# Como colocar o claudiobrito.com no ar

Tudo fica no projeto Firebase **app-antigravity-adfda**, o mesmo do www da GMG, num site de Hosting separado. O www (`gmg1026`) não é tocado.

## 1. Criar o site no Hosting (2 minutos)
Console do Firebase → projeto **app-antigravity-adfda** → Hosting → **Adicionar outro site** → nome `claudiobrito`.
Se o nome estiver ocupado, use `claudiobrito-com` e troque `"claudiobrito": ["claudiobrito"]` por `"claudiobrito": ["claudiobrito-com"]` no arquivo `.firebaserc`.

## 2. Liberar a publicação automática pelo GitHub (5 minutos)
No repositório `claudiombrito/gmg-www`, o segredo `FIREBASE_SERVICE_ACCOUNT_APP_ANTIGRAVITY_ADFDA` já existe. Ele precisa existir também aqui:
GitHub → `claudiombrito/Claudio-Brito` → Settings → Secrets and variables → Actions → **New repository secret**, com o mesmo nome e o mesmo conteúdo (o JSON da conta de serviço; se não tiver mais o arquivo, gere uma chave nova em Google Cloud → IAM → Contas de serviço → a conta usada pelo www → Chaves).
Depois disso, cada pull request ganha um link de prévia e cada merge na `main` publica o site em `claudiobrito.web.app`.

## 3. Ligar o envio de e-mails (15 minutos)
O formulário grava o pedido no Firestore, e uma função cria os e-mails. Quem envia é a extensão oficial do Firebase.
1. O projeto precisa estar no plano **Blaze** (pago conforme o uso). Para o volume de um formulário, o custo esperado é zero ou centavos, mas confira em Uso e faturamento e defina um **alerta de orçamento** (por exemplo, R$ 20).
2. Console → Extensions → instalar **Trigger Email from Firestore**:
   - Coleção de e-mails: `mail`
   - SMTP: a conta Google Workspace `Claudio.Brito@GlobalMentoringGroup.com`, com uma **senha de app** (Conta Google → Segurança → Senhas de app). Endereço SMTP: `smtps://Claudio.Brito@GlobalMentoringGroup.com@smtp.gmail.com:465`
   - Remetente padrão: `Claudio Brito <Claudio.Brito@GlobalMentoringGroup.com>`
3. Regras do Firestore: siga `docs/regras-firestore.md`.

## 4. Publicar a função (uma vez, pelo computador)
```
npm install -g firebase-tools
firebase login
cd functions && npm install && cd ..
firebase deploy --only functions:claudiobrito --project app-antigravity-adfda
```
A função está na região `southamerica-east1`. Ela precisa ficar na **mesma região do banco Firestore**: confira em Firestore → Banco de dados → Local. Se for outro, troque a linha `const REGIAO = ...` em `functions/index.js`.
`--only functions:claudiobrito` publica só esta função e não mexe em nenhuma outra do projeto.

## 5. Colocar o PDF do capítulo
Salve o PDF aprovado como `public/livro/mentoria-capitulo-1.pdf` e faça o merge. É o link que o e-mail manda.

## 6. Testar antes do domínio
Abra `https://claudiobrito.web.app`, peça o capítulo com o seu e-mail e confira: chega o e-mail com o link para você como leitor e o aviso em `Claudio.Brito@GlobalMentoringGroup.com`.

## 7. Ligar o domínio (você faz)
Hosting → site `claudiobrito` → **Adicionar domínio personalizado** → `www.claudiobrito.com` e depois `claudiobrito.com` (redirecionando para o www). O Firebase mostra os registros (TXT para verificar, depois A ou CNAME). Cadastre-os no painel onde o domínio está registrado. **Não apague registros MX ou TXT de e-mail.** O site antigo sai do ar só quando os novos registros passam a valer.
