// Função pedida pelo usuário — alterna a classe 'escuro' no <body>
function toggleTema() {
  // Define uma função chamada toggleTema, que será usada para alternar o tema do site (claro/escuro)

  document.body.classList.toggle('escuro');
  // Alterna a classe 'escuro' no elemento <body>. 
  // Se o body já tiver essa classe, ela é removida; se não tiver, é adicionada.

  // atualiza estado do botão (acessibilidade)
  const btn = document.getElementById('btn-toggle');
  // Busca o elemento com o ID 'btn-toggle', que representa o botão que alterna o tema.

  const isEscuro = document.body.classList.contains('escuro');
  // Verifica se o body está com a classe 'escuro'. 
  // Retorna true se o tema atual é escuro, e false se é claro.

  if (btn) {
    // Verifica se o botão existe na página antes de tentar manipulá-lo.

    btn.setAttribute('aria-pressed', String(isEscuro));
    // Atualiza o atributo 'aria-pressed' (usado para acessibilidade) para indicar o estado atual do botão.
    // O valor é uma string: "true" se o tema é escuro, "false" se é claro.

    btn.textContent = isEscuro ? 'Tema claro' : 'Tema escuro';
    // Altera o texto do botão dinamicamente:
    // se o tema for escuro, o texto será "Tema claro" (porque esse será o próximo tema possível);
    // caso contrário, será "Tema escuro".
  }

  // persiste a escolha no localStorage para manter entre reloads
  try {
    // Usa um bloco try/catch para evitar erros caso o localStorage não esteja disponível.

    localStorage.setItem('projeto-troca-tema', isEscuro ? 'escuro' : 'claro');
    // Salva a preferência do usuário no armazenamento local do navegador (localStorage),
    // com a chave 'projeto-troca-tema' e o valor 'escuro' ou 'claro'.
  } catch (e) {
    // se storage não estiver disponível, apenas ignora
    // Caso o navegador bloqueie o uso do localStorage (ex: modo privado), o erro é ignorado.
  }
}

// Inicializa tema ao carregar a página
(function inicializaTema() {
  // Define uma função imediatamente invocada (IIFE) que roda assim que a página é carregada.
  // Ela serve para aplicar o tema correto (salvo ou do sistema) logo no início.

  // Tenta ler preferência salva
  let tema = null;
  // Cria uma variável que guardará o tema salvo.

  try {
    tema = localStorage.getItem('projeto-troca-tema');
    // Tenta ler o valor salvo anteriormente no localStorage.
  } catch (e) {}
  // Caso não consiga acessar o localStorage, o erro é ignorado.

  if (tema === 'escuro') {
    document.body.classList.add('escuro');
    // Se o tema salvo for 'escuro', adiciona a classe 'escuro' ao body.
  } else if (tema === 'claro') {
    document.body.classList.remove('escuro');
    // Se o tema salvo for 'claro', garante que a classe 'escuro' não esteja presente.
  } else {
    // sem preferência salva: usa preferências do sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Verifica se o sistema operacional do usuário prefere modo escuro (recurso de CSS Media Queries).

    if (prefersDark) document.body.classList.add('escuro');
    // Se o sistema estiver em modo escuro, aplica automaticamente a classe 'escuro'.
  }

  // atualiza estado do botão inicial (caso exista)
  const btn = document.getElementById('btn-toggle');
  // Busca o botão novamente para atualizar seu estado inicial.

  if (btn) {
    // Só executa se o botão existir na página.

    const isEscuro = document.body.classList.contains('escuro');
    // Verifica novamente se o body está com a classe 'escuro' após a inicialização.

    btn.setAttribute('aria-pressed', String(isEscuro));
    // Define o estado de acessibilidade inicial (pressionado ou não).

    btn.textContent = isEscuro ? 'Tema claro' : 'Tema escuro';
    // Ajusta o texto do botão para refletir o tema atual.
  }
})();
