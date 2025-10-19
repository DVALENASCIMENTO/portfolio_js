// Função pedida pelo usuário — alterna a classe 'escuro' no <body>
function toggleTema() {
  document.body.classList.toggle('escuro');

  // atualiza estado do botão (acessibilidade)
  const btn = document.getElementById('btn-toggle');
  const isEscuro = document.body.classList.contains('escuro');
  if (btn) {
    btn.setAttribute('aria-pressed', String(isEscuro));
    btn.textContent = isEscuro ? 'Tema claro' : 'Tema escuro';
  }

  // persiste a escolha no localStorage para manter entre reloads
  try {
    localStorage.setItem('projeto-troca-tema', isEscuro ? 'escuro' : 'claro');
  } catch (e) {
    // se storage não estiver disponível, apenas ignora
  }
}

// Inicializa tema ao carregar a página
(function inicializaTema() {
  // Tenta ler preferência salva
  let tema = null;
  try {
    tema = localStorage.getItem('projeto-troca-tema');
  } catch (e) {}

  if (tema === 'escuro') {
    document.body.classList.add('escuro');
  } else if (tema === 'claro') {
    document.body.classList.remove('escuro');
  } else {
    // sem preferência salva: usa preferências do sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) document.body.classList.add('escuro');
  }

  // atualiza estado do botão inicial (caso exista)
  const btn = document.getElementById('btn-toggle');
  if (btn) {
    const isEscuro = document.body.classList.contains('escuro');
    btn.setAttribute('aria-pressed', String(isEscuro));
    btn.textContent = isEscuro ? 'Tema claro' : 'Tema escuro';
  }
})();
