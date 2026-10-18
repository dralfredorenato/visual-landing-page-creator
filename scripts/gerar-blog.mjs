#!/usr/bin/env node
/* =============================================================
   HUMANA - Gerador do blog estatico
   -------------------------------------------------------------
   Fonte (editar aqui):
     content/blog/posts.json      metadados de cada post
     content/blog/<slug>.html     corpo do post (so o miolo: <p>, <h2>, <ul>...)

   Saida (gerada, NAO editar a mao):
     public/blog/index.html       lista de artigos
     public/blog/<slug>/index.html  pagina de cada post
     public/blog/posts.json       resumo usado pela secao "Blog" da home
     public/sitemap.xml           bloco entre <!-- BLOG:INICIO --> e <!-- BLOG:FIM -->

   Uso:  node scripts/gerar-blog.mjs
   Rodar sempre depois de criar ou editar um post e commitar o resultado.

   Regras CFM aplicadas no modelo: Dr. Alfredo = Ortopedista e
   Traumatologista com atuacao em dor (NUNCA "especialista em dor").
   Dr. Carlos = Especialista em Dor. Sem promessa de cura ou resultado.
   ============================================================= */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://humanaortopedia.com.br";
const WHATS = "https://wa.me/5551920004467";
const ENDERECO = "Rua Gomes Jardim, 201, Sala 505A - MedPlex Santana";

const AUTORES = {
  alfredo: {
    nome: "Dr. Alfredo Metzger",
    titulo: "Médico Ortopedista e Traumatologista com atuação em dor",
    especialidade: "Ortopedia e Traumatologia",
    registro: "CRM-RS 39.343 · RQE 44.522",
  },
  carlos: {
    nome: "Dr. Carlos Eduardo Gomes Vieira",
    titulo: "Médico Especialista em Dor",
    especialidade: "Medicina da Dor",
    registro: "CRM-RS 57.754 · RQE 44.416 · RQE 44.392",
  },
};

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
  "agosto", "setembro", "outubro", "novembro", "dezembro"];

/* ---------- utilitarios ---------- */
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const dataExtenso = (iso) => {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
};

const tempoLeitura = (html) => {
  const palavras = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(palavras / 200));
};

const linkWhats = (texto) => `${WHATS}?text=${encodeURIComponent(texto)}`;

const ICONE_WHATS = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24.024 12.045 0 5.462 0 .105 5.335.101 11.892c-.001 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.582 0 11.939-5.335 11.943-11.892a11.821 11.821 0 00-3.483-8.409"/></svg>`;

/* ---------- validacao ---------- */
// Erros: o blog nao e gerado enquanto existirem.
const PROIBIDO = [
  /especialista em (medicina da )?dor/i, // titulo so do Dr. Carlos, que ja aparece na caixa do autor
  /antes e depois/i,
  /\bR\$\s?\d/, // preco
  /—/, // travessao
];
// Alertas: o blog e gerado, mas o trecho deve ser relido por um humano.
const ATENCAO = [/\bcur(a|ar|amos|ado)\b/i, /garant/i, /resultado(s)? (certo|garantido|definitivo)/i, /\b(melhor|único) tratamento\b/i, /100\s?%/];

function validar(post, corpo) {
  const erros = [];
  for (const campo of ["slug", "titulo", "descricao", "resumo", "categoria", "data", "autor", "whatsTexto"]) {
    if (!post[campo]) erros.push(`campo obrigatório ausente: ${campo}`);
  }
  if (post.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) erros.push("slug deve ter só letras minúsculas, números e hífens");
  if (post.data && !/^\d{4}-\d{2}-\d{2}$/.test(post.data)) erros.push("data deve estar no formato AAAA-MM-DD");
  if (post.autor && !AUTORES[post.autor]) erros.push(`autor desconhecido: ${post.autor}`);
  if (post.descricao && post.descricao.length > 160) erros.push(`descricao com ${post.descricao.length} caracteres (máximo 160)`);
  const texto = [post.titulo, post.descricao, post.resumo, corpo].join(" ");
  for (const re of PROIBIDO) if (re.test(texto)) erros.push(`termo vetado encontrado: ${re}`);
  if (/<h1/i.test(corpo)) erros.push("o corpo não deve ter <h1> (o título já é o h1)");
  for (const re of ATENCAO) {
    const m = texto.match(re);
    if (m) console.warn(`ATENÇÃO ${post.slug}: reler o trecho com "${m[0]}" (regra CFM de promessa de resultado)`);
  }
  return erros;
}

/* ---------- CSS compartilhado ---------- */
const CSS = `
  :root {
    --cor-fundo:#f8f5ef; --cor-fundo-alt:#ffffff; --cor-navy:#1a2e4a; --cor-texto:#1a2e4a;
    --cor-texto-suave:#4a5a73; --cor-azul:#2563a8; --cor-dourado:#c9a96e; --cor-dourado-esc:#b8945a;
    --cor-borda:#e8e2d5;
    --fonte-titulo:'Cormorant Garamond', Georgia, serif; --fonte-corpo:'DM Sans', system-ui, sans-serif;
    --texto-base:clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
    --raio-md:14px; --sombra-media:0 12px 32px -8px rgba(26,46,74,0.12);
    --transicao:260ms cubic-bezier(0.4,0,0.2,1); --largura-max:1120px; --largura-texto:700px;
  }
  *, *::before, *::after { box-sizing:border-box; }
  * { margin:0; padding:0; }
  img, svg { display:block; max-width:100%; height:auto; }
  a { color:inherit; text-decoration:none; }
  body { font-family:var(--fonte-corpo); font-size:var(--texto-base); line-height:1.75; color:var(--cor-texto);
    background:var(--cor-fundo); -webkit-font-smoothing:antialiased; }
  h1, h2, h3 { font-family:var(--fonte-titulo); font-weight:600; letter-spacing:-0.01em; line-height:1.15;
    color:var(--cor-navy); text-wrap:balance; }
  .container { width:min(100% - 2.5rem, var(--largura-max)); margin-inline:auto; }
  .estreito { width:min(100% - 2.5rem, var(--largura-texto)); margin-inline:auto; }

  .cabecalho { position:sticky; top:0; z-index:100; background:rgba(248,245,239,0.92);
    backdrop-filter:blur(10px); border-bottom:1px solid var(--cor-borda); }
  .cabecalho__interno { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 0; }
  .marca { font-family:var(--fonte-titulo); font-size:1.6rem; font-weight:700; color:var(--cor-navy); letter-spacing:0.02em; line-height:1.1; }
  .marca span { display:block; font-family:var(--fonte-corpo); font-size:0.68rem; font-weight:500; letter-spacing:0.16em;
    text-transform:uppercase; color:var(--cor-texto-suave); margin-top:2px; }
  .cabecalho__nav { display:flex; align-items:center; gap:1.4rem; font-size:0.95rem; font-weight:500; }
  .cabecalho__nav a:not(.botao-whats):hover { color:var(--cor-azul); }
  .cabecalho .botao-whats { padding:0.6rem 1.3rem; font-size:0.92rem; }
  @media (max-width:620px) { .cabecalho .botao-whats { display:none; } }

  .botao-whats { display:inline-flex; align-items:center; gap:0.6rem; background:var(--cor-dourado); color:var(--cor-navy);
    font-weight:600; padding:1rem 2rem; border-radius:50px; transition:background var(--transicao), transform var(--transicao);
    box-shadow:0 4px 16px -4px rgba(201,169,110,0.5); }
  .botao-whats:hover { background:var(--cor-dourado-esc); transform:translateY(-2px); }
  .botao-whats svg { width:20px; height:20px; flex-shrink:0; }

  .eyebrow { display:inline-block; font-size:0.78rem; font-weight:600; letter-spacing:0.14em; text-transform:uppercase;
    color:var(--cor-azul); margin-bottom:0.9rem; }

  .cta-final { background:var(--cor-navy); text-align:center; padding:clamp(3.5rem, 2rem + 4vw, 6rem) 0; }
  .cta-final__titulo { color:#fff; font-size:clamp(1.9rem, 1.4rem + 2vw, 2.8rem); max-width:720px; margin:0 auto 1.1rem; }
  .cta-final__texto { color:#c3cdda; max-width:560px; margin:0 auto 2rem; font-size:1.08rem; }
  .cta-final__nota { margin-top:1.3rem; font-size:0.9rem; color:#97a3b4; }

  .rodape { background:var(--cor-fundo-alt); border-top:1px solid var(--cor-borda); padding:3rem 0; text-align:center; }
  .rodape__marca { font-family:var(--fonte-titulo); font-size:1.6rem; font-weight:700; color:var(--cor-navy); }
  .rodape__info { color:var(--cor-texto-suave); font-size:0.95rem; }
  .rodape__links { display:flex; justify-content:center; flex-wrap:wrap; gap:1.2rem; margin-top:1rem; font-size:0.92rem; color:var(--cor-azul); }
  .rodape__legal { max-width:680px; margin:1.4rem auto 0; font-size:0.82rem; color:var(--cor-texto-suave); opacity:0.85; line-height:1.6; }

  :focus-visible { outline:2px solid var(--cor-dourado); outline-offset:3px; }
  @media (prefers-reduced-motion: reduce) { * { transition:none !important; } }
`;

const CSS_POST = `
  .artigo__topo { padding:clamp(2.5rem, 1.5rem + 4vw, 5rem) 0 2rem; }
  .artigo__voltar { display:block; width:fit-content; font-size:0.92rem; color:var(--cor-texto-suave); margin-bottom:1.6rem; }
  .artigo__voltar:hover { color:var(--cor-azul); }
  .artigo__titulo { font-size:clamp(2.2rem, 1.6rem + 2.6vw, 3.4rem); margin-bottom:1rem; }
  .artigo__meta { font-size:0.92rem; color:var(--cor-texto-suave); }
  .artigo__corpo { padding-bottom:3rem; }
  .artigo__corpo > * + * { margin-top:1.15rem; }
  .artigo__corpo h2 { font-size:clamp(1.6rem, 1.3rem + 1vw, 2.1rem); margin-top:2.6rem; }
  .artigo__corpo h3 { font-size:1.35rem; margin-top:2rem; }
  .artigo__corpo ul, .artigo__corpo ol { padding-left:1.3rem; }
  .artigo__corpo li + li { margin-top:0.5rem; }
  .artigo__corpo a { color:var(--cor-azul); text-decoration:underline; text-underline-offset:3px; }
  .artigo__corpo strong { font-weight:600; }
  .relacionada { margin:0.5rem 0 3rem; padding:1.4rem 1.6rem; background:var(--cor-fundo-alt); border:1px solid var(--cor-borda);
    border-radius:var(--raio-md); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; }
  .relacionada p { font-size:0.98rem; }
  .relacionada strong { display:block; font-family:var(--fonte-titulo); font-size:1.3rem; font-weight:600; }
  .relacionada a { color:var(--cor-azul); font-weight:600; white-space:nowrap; }
  .autor { display:grid; grid-template-columns:auto 1fr; gap:1rem 1.2rem; align-items:center; padding:1.6rem 0 3.5rem;
    border-top:1px solid var(--cor-borda); }
  .autor__inicial { width:56px; height:56px; border-radius:50%; background:var(--cor-navy); color:var(--cor-dourado);
    display:grid; place-items:center; font-family:var(--fonte-titulo); font-size:1.5rem; font-weight:700; }
  .autor__nome { font-weight:600; }
  .autor__titulo, .autor__registro { font-size:0.9rem; color:var(--cor-texto-suave); }
  .aviso { font-size:0.85rem; color:var(--cor-texto-suave); padding-bottom:3rem; }
`;

const CSS_LISTA = `
  .lista__topo { padding:clamp(2.5rem, 1.5rem + 4vw, 5rem) 0 2.5rem; }
  .lista__titulo { font-size:clamp(2.4rem, 1.8rem + 2.6vw, 3.6rem); margin-bottom:0.8rem; }
  .lista__intro { color:var(--cor-texto-suave); max-width:60ch; }
  .lista { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.4rem; padding-bottom:4rem; }
  .cartao { background:var(--cor-fundo-alt); border:1px solid var(--cor-borda); border-radius:var(--raio-md); padding:1.6rem;
    display:flex; flex-direction:column; gap:0.7rem; transition:box-shadow var(--transicao), transform var(--transicao); }
  .cartao:hover { box-shadow:var(--sombra-media); transform:translateY(-2px); }
  .cartao__categoria { font-size:0.75rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--cor-azul); }
  .cartao__titulo { font-size:1.55rem; }
  .cartao__resumo { color:var(--cor-texto-suave); font-size:0.98rem; flex:1; }
  .cartao__meta { font-size:0.85rem; color:var(--cor-texto-suave); }
  .cartao__ler { font-weight:600; color:var(--cor-dourado-esc); font-size:0.95rem; }
  .vazio { color:var(--cor-texto-suave); padding-bottom:4rem; }
`;

/* ---------- pedacos de HTML ---------- */
const rastreamento = () => `
  <!-- GOOGLE TAG MANAGER - mesmo container da home e das landings (GA4). NAO trocar o ID. -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-K42CH8J8');</script>
  <!-- GOOGLE TAG (gtag.js) - Google Ads AW-17642002434. Conversao disparada no clique do WhatsApp. NAO alterar. -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17642002434"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17642002434');
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;

const noscriptGtm = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K42CH8J8"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

const cabecalho = (textoWhats) => `
  <header class="cabecalho">
    <div class="container cabecalho__interno">
      <a class="marca" href="/">Humana<span>Ortopedia e Medicina da Dor</span></a>
      <nav class="cabecalho__nav" aria-label="Principal">
        <a href="/blog/">Blog</a>
        <a class="botao-whats" href="${esc(linkWhats(textoWhats))}" target="_blank" rel="noopener">${ICONE_WHATS} Falar no WhatsApp</a>
      </nav>
    </div>
  </header>`;

const ctaFinal = (titulo, textoWhats) => `
  <section class="cta-final">
    <div class="container">
      <h2 class="cta-final__titulo">${esc(titulo)}</h2>
      <p class="cta-final__texto">Mande uma mensagem e conte o que você está sentindo. A gente responde e organiza a sua avaliação.</p>
      <a class="botao-whats" href="${esc(linkWhats(textoWhats))}" target="_blank" rel="noopener">${ICONE_WHATS} Falar no WhatsApp</a>
      <p class="cta-final__nota">Atendimento particular no MedPlex Santana, Porto Alegre. Respondemos em horário comercial.</p>
    </div>
  </section>`;

const rodape = () => `
  <footer class="rodape">
    <div class="container">
      <p class="rodape__marca">Humana</p>
      <p class="rodape__info">Ortopedia e Medicina da Dor</p>
      <p class="rodape__info">MedPlex Santana, Rua Gomes Jardim 201, Sala 505A, Porto Alegre/RS</p>
      <p class="rodape__links"><a href="/">Início</a><a href="/blog/">Blog</a><a href="/privacidade">Política de Privacidade</a></p>
      <p class="rodape__legal">Este conteúdo tem caráter informativo e não substitui a consulta médica. A indicação de qualquer
        exame ou tratamento depende de avaliação individual. Não há promessa de cura nem garantia de resultado.</p>
    </div>
  </footer>`;

const scriptConversao = `
  <script>
  /* Conversao do Google Ads no clique de qualquer botao de WhatsApp (mesmo send_to da home). */
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', 'conversion', { send_to: 'AW-17642002434/wjImCJLDys4cEIKwrtxB' });
    });
  });
  </script>`;

const clinicaSchema = {
  "@type": "MedicalClinic",
  name: "Humana Ortopedia e Medicina da Dor",
  url: `${SITE}/`,
  telephone: "+5551920004467",
  address: { "@type": "PostalAddress", streetAddress: ENDERECO, addressLocality: "Porto Alegre", addressRegion: "RS", addressCountry: "BR" },
};

/* ---------- paginas ---------- */
function paginaPost(post, corpo) {
  const autor = AUTORES[post.autor];
  const url = `${SITE}/blog/${post.slug}/`;
  const minutos = tempoLeitura(corpo);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.descricao,
    datePublished: post.data,
    dateModified: post.atualizado || post.data,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    author: { "@type": "Physician", name: autor.nome, jobTitle: autor.titulo, medicalSpecialty: autor.especialidade, identifier: autor.registro },
    publisher: clinicaSchema,
  };
  const relacionada = post.paginaRelacionada
    ? `<aside class="relacionada">
        <p>Página relacionada<strong>${esc(post.paginaRelacionada.titulo)}</strong></p>
        <a href="${esc(post.paginaRelacionada.url)}">Ver a página</a>
      </aside>`
    : "";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- GERADO por scripts/gerar-blog.mjs a partir de content/blog/. NAO editar este arquivo. -->
  <title>${esc(post.titulo)} | Blog Humana Ortopedia</title>
  <meta name="description" content="${esc(post.descricao)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.png?v=2" type="image/png">
  <meta property="og:title" content="${esc(post.titulo)}">
  <meta property="og:description" content="${esc(post.descricao)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="Humana Ortopedia">
  <meta property="og:image" content="${SITE}/og-image.jpg">
  <meta property="article:published_time" content="${post.data}">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  ${rastreamento()}
  <style>${CSS}${CSS_POST}</style>
</head>
<body>
  ${noscriptGtm}
  ${cabecalho(post.whatsTexto)}
  <main>
    <article>
      <header class="artigo__topo estreito">
        <a class="artigo__voltar" href="/blog/">&larr; Todos os artigos</a>
        <span class="eyebrow">${esc(post.categoria)}</span>
        <h1 class="artigo__titulo">${esc(post.titulo)}</h1>
        <p class="artigo__meta">${esc(autor.nome)} · <time datetime="${post.data}">${dataExtenso(post.data)}</time> · ${minutos} min de leitura</p>
      </header>
      <div class="artigo__corpo estreito">
${corpo.trim()}
      </div>
      <div class="estreito">
        ${relacionada}
        <section class="autor" aria-label="Sobre o autor">
          <div class="autor__inicial" aria-hidden="true">${esc(autor.nome.replace("Dr. ", "")[0])}</div>
          <div>
            <p class="autor__nome">${esc(autor.nome)}</p>
            <p class="autor__titulo">${esc(autor.titulo)}</p>
            <p class="autor__registro">${esc(autor.registro)} · Humana Ortopedia e Medicina da Dor</p>
          </div>
        </section>
      </div>
    </article>
    ${ctaFinal(post.ctaTitulo || "Quer entender o que está causando a sua dor?", post.whatsTexto)}
  </main>
  ${rodape()}
  ${scriptConversao}
</body>
</html>
`;
}

function paginaLista(posts) {
  const cartoes = posts.length
    ? `<div class="lista">${posts.map((p) => `
        <a class="cartao" href="/blog/${p.slug}/">
          <span class="cartao__categoria">${esc(p.categoria)}</span>
          <h2 class="cartao__titulo">${esc(p.titulo)}</h2>
          <p class="cartao__resumo">${esc(p.resumo)}</p>
          <p class="cartao__meta">${dataExtenso(p.data)} · ${p.tempoLeitura} min de leitura</p>
          <span class="cartao__ler">Ler artigo &rarr;</span>
        </a>`).join("")}
      </div>`
    : `<p class="vazio">Os primeiros artigos estão a caminho.</p>`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Humana Ortopedia",
    url: `${SITE}/blog/`,
    inLanguage: "pt-BR",
    publisher: clinicaSchema,
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.titulo, url: `${SITE}/blog/${p.slug}/`, datePublished: p.data })),
  };

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- GERADO por scripts/gerar-blog.mjs a partir de content/blog/. NAO editar este arquivo. -->
  <title>Blog | Humana Ortopedia e Medicina da Dor em Porto Alegre</title>
  <meta name="description" content="Artigos sobre ortopedia, dor crônica e qualidade de vida, escritos pela equipe médica da Humana Ortopedia, no MedPlex Santana, em Porto Alegre.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${SITE}/blog/">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.png?v=2" type="image/png">
  <meta property="og:title" content="Blog Humana Ortopedia">
  <meta property="og:description" content="Artigos sobre ortopedia, dor crônica e qualidade de vida.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE}/blog/">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:image" content="${SITE}/og-image.jpg">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  ${rastreamento()}
  <style>${CSS}${CSS_LISTA}</style>
</head>
<body>
  ${noscriptGtm}
  ${cabecalho("Olá, li o blog da Humana e quero agendar uma avaliação")}
  <main>
    <header class="lista__topo container">
      <span class="eyebrow">Blog</span>
      <h1 class="lista__titulo">Conteúdo que informa, não assusta</h1>
      <p class="lista__intro">Artigos sobre ortopedia, dor crônica e qualidade de vida, escritos pela equipe médica da Humana para ajudar você a entender o que sente e quando procurar ajuda.</p>
    </header>
    <section class="container" aria-label="Artigos">${cartoes}</section>
    ${ctaFinal("Tem uma dor que não passa?", "Olá, li o blog da Humana e quero agendar uma avaliação")}
  </main>
  ${rodape()}
  ${scriptConversao}
</body>
</html>
`;
}

/* ---------- sitemap ---------- */
function atualizarSitemap(posts) {
  const caminho = join(RAIZ, "public", "sitemap.xml");
  let xml = readFileSync(caminho, "utf8");
  const ultimo = posts[0]?.data || new Date().toISOString().slice(0, 10);
  const entradas = [
    `  <url>\n    <loc>${SITE}/blog/</loc>\n    <lastmod>${ultimo}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
    ...posts.map((p) => `  <url>\n    <loc>${SITE}/blog/${p.slug}/</loc>\n    <lastmod>${p.atualizado || p.data}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`),
  ].join("\n");
  const bloco = `  <!-- BLOG:INICIO (gerado por scripts/gerar-blog.mjs) -->\n${entradas}\n  <!-- BLOG:FIM -->`;
  if (/<!-- BLOG:INICIO[\s\S]*?BLOG:FIM -->/.test(xml)) {
    xml = xml.replace(/ *<!-- BLOG:INICIO[\s\S]*?BLOG:FIM -->/, bloco);
  } else {
    xml = xml.replace("</urlset>", `${bloco}\n</urlset>`);
  }
  writeFileSync(caminho, xml);
}

/* ---------- principal ---------- */
function main() {
  const fonte = join(RAIZ, "content", "blog");
  const meta = JSON.parse(readFileSync(join(fonte, "posts.json"), "utf8"));
  const slugs = new Set();
  const erros = [];
  const posts = [];

  for (const post of meta) {
    const arquivo = join(fonte, `${post.slug}.html`);
    if (slugs.has(post.slug)) erros.push(`${post.slug}: slug repetido`);
    slugs.add(post.slug);
    if (!existsSync(arquivo)) { erros.push(`${post.slug}: arquivo content/blog/${post.slug}.html não existe`); continue; }
    const corpo = readFileSync(arquivo, "utf8");
    validar(post, corpo).forEach((e) => erros.push(`${post.slug}: ${e}`));
    posts.push({ ...post, corpo, tempoLeitura: tempoLeitura(corpo) });
  }

  if (erros.length) {
    console.error("Blog NÃO gerado. Corrija:\n- " + erros.join("\n- "));
    process.exit(1);
  }

  // Tudo que esta em posts.json e publicado; a publicacao acontece no merge do PR.
  // (Nao ha agendamento: o build da Vercel nao roda este script.)
  const publicados = [...posts].sort((a, b) => b.data.localeCompare(a.data));

  const saida = join(RAIZ, "public", "blog");
  mkdirSync(saida, { recursive: true });

  // Remove paginas geradas de posts que sairam de posts.json (renomeados ou apagados).
  const ativos = new Set(publicados.map((p) => p.slug));
  for (const item of readdirSync(saida, { withFileTypes: true })) {
    if (item.isDirectory() && !ativos.has(item.name) && existsSync(join(saida, item.name, "index.html"))) {
      rmSync(join(saida, item.name), { recursive: true, force: true });
      console.log(`Removida página antiga: /blog/${item.name}/`);
    }
  }

  for (const p of publicados) {
    mkdirSync(join(saida, p.slug), { recursive: true });
    writeFileSync(join(saida, p.slug, "index.html"), paginaPost(p, p.corpo));
  }
  writeFileSync(join(saida, "index.html"), paginaLista(publicados));
  writeFileSync(join(saida, "posts.json"), JSON.stringify(publicados.map(({ corpo, descricao, whatsTexto, ctaTitulo, paginaRelacionada, ...resto }) => resto), null, 2) + "\n");
  atualizarSitemap(publicados);

  console.log(`Blog gerado: ${publicados.length} post(s).`);
}

main();
