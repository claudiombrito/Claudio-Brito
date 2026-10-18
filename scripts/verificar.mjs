// Verificação simples antes de publicar: toda imagem, script e link interno
// citado nas páginas precisa existir em public/.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const raiz = 'public';
const paginas = readdirSync(raiz).filter((f) => f.endsWith('.html'));
const ignorar = ['/__/', '/livro/mentoria-capitulo-1.pdf'];
let erros = 0;

for (const pagina of paginas) {
  const html = readFileSync(join(raiz, pagina), 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) {
    console.error(`${pagina}: falta o <title>`);
    erros++;
  }
  for (const [, ref] of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
    if (ref === '/' || ignorar.some((p) => ref.startsWith(p))) continue;
    if (!existsSync(join(raiz, ref))) {
      console.error(`${pagina}: não existe ${ref}`);
      erros++;
    }
  }
}

if (erros) process.exit(1);
console.log(`OK: ${paginas.length} páginas conferidas.`);
