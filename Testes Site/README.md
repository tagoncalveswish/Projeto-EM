# Site easy mat

Site de uma só página da **easy mat**, explicações de Matemática no Algarve, presenciais e online.

Foi feito só com HTML, CSS e JavaScript simples, sem frameworks nem passos de compilação. Por isso, funciona diretamente no GitHub Pages: o que estiver nesta pasta é exatamente o que aparece no site.

## Estrutura

| Ficheiro / pasta | Para que serve |
| --- | --- |
| `index.html` | Todo o conteúdo do site: textos, secções, links e contactos. |
| `css/style.css` | Aspeto do site: cores, tipos de letra, espaçamentos e adaptação ao telemóvel. |
| `js/main.js` | Menu "hambúrguer", envio do formulário e ano no rodapé. Não é preciso editar. |
| `img/logo.png` | Logótipo (aparece na entrada do site). |
| `img/sala-aulas-presenciais.jpg` | Fotografia da sala (secção Aulas Presenciais). |
| `img/simbolo.svg` | Símbolo da pirâmide no menu. |
| `img/favicon.svg`, `img/favicon-32.png` | Ícone do separador do browser. |
| `img/apple-touch-icon.png` | Ícone quando o site é adicionado ao ecrã principal do iPhone. |
| `img/og-image.png` | Imagem que aparece quando o link é partilhado no Facebook ou no WhatsApp (1200 × 630 px). |
| `.nojekyll` | Indica ao GitHub Pages que deve publicar os ficheiros tal como estão. Não apagar. |

## Pré-visualizar no computador

1. No VS Code, abrir o separador **Extensões** (Ctrl+Shift+X), procurar **Live Server** (de Ritwick Dey) e instalar.
2. Abrir a pasta do site no VS Code (**Ficheiro → Abrir pasta…**).
3. Clicar com o botão direito no `index.html` e escolher **Open with Live Server**.
4. O site abre no browser e atualiza-se sozinho sempre que um ficheiro é guardado.

Para ver como fica no telemóvel: no browser, carregar em **F12** e depois em **Ctrl+Shift+M** (vista de dispositivo móvel).

Também funciona abrir o `index.html` com duplo clique, mas assim o envio do formulário pode falhar. O formulário só funciona de certeza com o Live Server ou depois de o site estar publicado.

## Editar textos

Todos os textos estão no `index.html`. Os sítios a personalizar estão assinalados com comentários deste tipo:

```html
<!-- EDITAR: ... -->
```

Para os ver todos, carregar em **Ctrl+Shift+F** no VS Code e procurar `EDITAR`.

Cuidados ao editar:

- Mudar só o texto entre as etiquetas, por exemplo em `<p>texto</p>`, sem apagar `<p>` nem `</p>`.
- O título e a descrição que aparecem no Google estão no início do ficheiro, em `<title>` e `<meta name="description">`.
- Depois de mudar, guardar (Ctrl+S) e confirmar o resultado no Live Server.

## Dados a substituir antes de publicar

Os contactos estão em vários sítios da página. Para os trocar todos de uma vez, usar **Procurar e substituir em todos os ficheiros** (Ctrl+Shift+H) no VS Code:

| Procurar | Substituir por |
| --- | --- |
| `351XXXXXXXXX` | Número de telemóvel/WhatsApp com o indicativo 351, sem espaços nem "+". |
| `+351 XXX XXX XXX` | O mesmo número, escrito como deve aparecer no site. |
| `email@example.com` | Email de contacto. |
| `https://www.instagram.com/SUBSTITUIR` | Link da página de Instagram. |
| `https://formspree.io/f/SUBSTITUIR` | Endereço do formulário no Formspree (ver abaixo). |
| `https://UTILIZADOR.github.io/REPOSITORIO/` | Endereço final do site, depois de publicado (ver abaixo). |

O link do Facebook já é o da página atual.

## Trocar imagens

- **Logótipo** (`img/logo.png`): substituir o ficheiro por outro com o mesmo nome. Idealmente, PNG com fundo transparente e cerca de 600 px de largura. Se a proporção do novo logótipo for diferente, atualizar também `width` e `height` dessa imagem no `index.html`.
- **Fotografia da sala** (`img/sala-aulas-presenciais.jpg`): substituir o ficheiro por outro com o mesmo nome, vertical e com a proporção 3 × 4 (por exemplo 1200 × 1600 px). Se a proporção for diferente, atualizar também `width` e `height` dessa imagem no `index.html`.
- **Ilustração das aulas online**: está desenhada diretamente no `index.html` (bloco `<svg>` da secção Aulas Online), por isso não tem ficheiro em `img/`. Para pôr uma fotografia no lugar dela, seguir as instruções do comentário que está por cima desse bloco.
- **Símbolo do menu e ícones do separador**: substituir `img/simbolo.svg`, `img/favicon.svg`, `img/favicon-32.png` (32 × 32 px) e `img/apple-touch-icon.png` (180 × 180 px, fundo branco).
- **Imagem de partilha** (`img/og-image.png`): manter 1200 × 630 px e o conteúdo importante ao centro, porque o WhatsApp às vezes corta as laterais.
- **Fotografias novas**: guardar em `img/`, reduzir antes para no máximo 1600 px de largura e comprimir, por exemplo em [squoosh.app](https://squoosh.app) (formato WebP ou JPG). Escrever sempre um texto `alt` que descreva a imagem, por exemplo `alt="Aluno a resolver um exercício no quadro"`.

## Formulário de contacto (Formspree)

O formulário envia os pedidos para o seu email através do [Formspree](https://formspree.io), um serviço gratuito que funciona com sites estáticos.

1. Criar uma conta gratuita em formspree.io.
2. Carregar em **New Form**, dar um nome (por exemplo "Site easy mat") e indicar o email onde quer receber os pedidos.
3. Copiar o endereço do formulário, que tem este aspeto: `https://formspree.io/f/abcdwxyz`.
4. No `index.html`, substituir `https://formspree.io/f/SUBSTITUIR` por esse endereço.
5. Depois de publicar o site, fazer um envio de teste. No primeiro envio, o Formspree pode pedir para confirmar o email.

O plano gratuito tem um limite de envios por mês (consultar no site do Formspree). Enquanto o formulário não estiver configurado, o site mostra uma mensagem a sugerir o WhatsApp ou o email.

## Mapa

O mapa mostra a região do Algarve. Para mostrar a morada exata:

1. No Google Maps, procurar a morada e carregar em **Partilhar → Incorporar um mapa → Copiar HTML**.
2. Do código copiado, ficar só com o endereço que está dentro de `src="..."`.
3. No `index.html`, colá-lo no `src` do `<iframe>` do mapa (está assinalado com `EDITAR`).

## Avaliações

As três avaliações são **exemplos** e estão marcadas como tal no site. Devem ser substituídas por avaliações reais, com autorização de quem os escreveu (no caso de menores, dos encarregados de educação). Depois, apagar as etiquetas "Exemplo" e o aviso por baixo do título da secção.

## Cores e tipos de letra

- As cores estão no início do `css/style.css`, em `:root`. São as do guia **Identidade & Marca**. Mudar uma cor aí muda-a em todo o site.
- Os tipos de letra são o **Montserrat** (títulos) e o **Inter** (texto), carregados a partir do Google Fonts no início do `index.html`.

## Publicar no GitHub Pages

O GitHub Pages publica um repositório a partir da raiz, por isso o site precisa de um repositório próprio, separado do "Projeto EM".

### 1. Criar o repositório no GitHub e enviar os ficheiros

1. Em [github.com](https://github.com), carregar em **+ → New repository**.
2. Dar um nome ao repositório, por exemplo `easymat`. Escolher **Public** (o GitHub Pages gratuito exige repositório público) e **não** marcar a opção de criar README, .gitignore ou licença. Carregar em **Create repository**.
3. No computador, copiar o conteúdo desta pasta (incluindo o ficheiro `.nojekyll`) para uma pasta nova **fora** do "Projeto EM", por exemplo `Desktop\easymat`.
4. Abrir essa pasta nova no VS Code, abrir o terminal (**Terminal → Novo terminal**) e correr, trocando `UTILIZADOR` pelo seu nome de utilizador do GitHub:

```bash
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/UTILIZADOR/easymat.git
git push -u origin main
```

### 2. Ativar o GitHub Pages

1. No repositório, no GitHub, abrir **Settings → Pages**.
2. Em **Build and deployment → Source**, escolher **Deploy from a branch**.
3. Em **Branch**, escolher `main` e a pasta `/ (root)`. Carregar em **Save**.

### 3. Obter o link final

Passado um a dois minutos, o link aparece no topo da página **Settings → Pages**. Tem este formato:

```
https://UTILIZADOR.github.io/easymat/
```

Se o repositório se chamar exatamente `UTILIZADOR.github.io`, o site fica na raiz: `https://UTILIZADOR.github.io/`.

Depois de ter o link:

1. No `index.html`, substituir `https://UTILIZADOR.github.io/REPOSITORIO/` pelo link final (Ctrl+Shift+H).
2. Enviar a alteração (ver a secção seguinte).
3. Testar a pré-visualização de partilha no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
4. Testar os dados estruturados no [Teste de resultados avançados do Google](https://search.google.com/test/rich-results).

## Atualizar o site depois de publicado

Na pasta do site (a que está ligada ao repositório `easymat`):

```bash
git add .
git commit -m "Descrever a alteração"
git push
```

O site atualiza-se sozinho um a dois minutos depois.

## Privacidade

- O formulário recolhe dados pessoais (nome, email e telefone). Só devem ser usados para responder ao pedido, como diz a caixa de consentimento.
- O site carrega os tipos de letra do Google Fonts e o mapa do Google Maps, que comunicam com servidores da Google. Antes de divulgar o site, vale a pena acrescentar uma página de política de privacidade.
