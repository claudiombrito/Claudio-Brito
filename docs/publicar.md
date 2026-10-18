# Como colocar o claudiobrito.com no ar

Tudo fica no projeto Firebase **app-antigravity-adfda**, o mesmo do www da GMG, num site de Hosting separado. O www (`gmg1026`) não é tocado.

## 1. Criar o site no Hosting (2 minutos)
Console do Firebase → projeto **app-antigravity-adfda** → Hosting → **Adicionar outro site** → nome `claudiobrito`.
Se o nome estiver ocupado, use `claudiobrito-com` e troque `"claudiobrito": ["claudiobrito"]` por `"claudiobrito": ["claudiobrito-com"]` no arquivo `.firebaserc`.

## 2. Liberar a publicação automática pelo GitHub (5 minutos)
No repositório `claudiombrito/gmg-www`, o segredo `FIREBASE_SERVICE_ACCOUNT_APP_ANTIGRAVITY_ADFDA` já existe. Ele precisa existir também aqui:
GitHub → `claudiombrito/Claudio-Brito` → Settings → Secrets and variables → Actions → **New repository secret**, com o mesmo nome e o mesmo conteúdo (o JSON da conta de serviço; se não tiver mais o arquivo, gere uma chave nova em Google Cloud → IAM → Contas de serviço → a conta usada pelo www → Chaves).
Depois disso, cada pull request ganha um link de prévia e cada merge na `main` publica o site em `claudiobrito.web.app`.

## 3. Preparar o envio de e-mails (5 minutos)
A função do site envia os e-mails sozinha, pelo Gmail do Workspace. Não use a extensão "Trigger Email": as Extensões do Firebase serão desativadas em 31/03/2027.
1. O projeto precisa estar no plano **Blaze**. Para o volume de um formulário, o custo esperado é zero ou centavos; defina um **alerta de orçamento** (por exemplo, R$ 20) em Uso e faturamento.
2. Crie uma **senha de app** na conta `Claudio.Brito@GlobalMentoringGroup.com`: Conta Google → Segurança → Verificação em duas etapas (precisa estar ligada) → **Senhas de app** → nome "claudiobrito.com" → Criar. Guarde as 16 letras para o passo 4. Se a opção não aparecer, o administrador do Workspace precisa liberar senhas de app.
3. Regras do Firestore: siga `docs/regras-firestore.md`.

## 4. Publicar a função (uma vez, pelo computador)
```
npm install -g firebase-tools
firebase login
cd functions && npm install && cd ..
firebase deploy --only functions:claudiobrito --project app-antigravity-adfda
```
Na primeira vez, o comando pede o valor de `SMTP_SENHA`: cole a senha de app do passo 3 (as 16 letras, sem espaços). Ela fica guardada no Secret Manager do Google, não no código. Para trocá-la depois: `firebase functions:secrets:set SMTP_SENHA` e publique a função de novo.
A função está na região `southamerica-east1`. Ela precisa ficar na **mesma região do banco Firestore**: confira em Firestore → Banco de dados → Local. Se for outro, troque a linha `const REGIAO = ...` em `functions/index.js`.
`--only functions:claudiobrito` publica só esta função e não mexe em nenhuma outra do projeto.

## 5. Trocar o PDF do capítulo (quando houver nova versão)
O PDF está em `public/livro/mentoria-capitulo-1.pdf`. Para trocar, substitua o arquivo mantendo o mesmo nome e faça o merge. É o link que o e-mail manda.

## 6. Testar antes do domínio
Abra `https://claudiobrito.web.app`, peça o capítulo com o seu e-mail e confira: chega o e-mail com o link para você como leitor e o aviso em `Claudio.Brito@GlobalMentoringGroup.com`.

## 7. Ligar o domínio (você faz)
Hosting → site `claudiobrito` → **Adicionar domínio personalizado** → `www.claudiobrito.com` e depois `claudiobrito.com` (redirecionando para o www). O Firebase mostra os registros (TXT para verificar, depois A ou CNAME). Cadastre-os no painel onde o domínio está registrado. **Não apague registros MX ou TXT de e-mail.** O site antigo sai do ar só quando os novos registros passam a valer.
