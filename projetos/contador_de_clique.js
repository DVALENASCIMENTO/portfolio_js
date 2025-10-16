let contador = 0; 
// Declara uma variável chamada "contador" e inicializa com 0.  
// Ela armazenará o valor atual do contador.

/* Função para atualizar o valor mostrado na tela */
function atualizarDisplay() {
  const el = document.getElementById('contador'); 
  // Busca o elemento HTML com id="contador" e guarda na constante "el".
  
  if (el) el.textContent = contador; 
  // Se o elemento existe, atualiza o texto dele para o valor da variável "contador".
}

/* Função para incrementar o contador */
function incrementar() {
  contador++; 
  // Adiciona 1 ao valor atual do contador.
  
  atualizarDisplay(); 
  // Chama a função que atualiza o valor na tela.
}

/* Função para resetar o contador */
function resetar() {
  contador = 0; 
  // Define o valor do contador de volta para 0.
  
  atualizarDisplay(); 
  // Atualiza o valor mostrado na tela.
}

/* Conectar eventos quando a página (DOM) estiver completamente carregada */
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnIncrementar'); 
  // Pega o botão de incrementar pelo id "btnIncrementar".
  
  const btnReset = document.getElementById('btnReset'); 
  // Pega o botão de resetar pelo id "btnReset".

  if (btn) {
    btn.addEventListener('click', incrementar); 
    // Adiciona um evento ao botão: quando clicado, chama a função "incrementar".
    
    // Suporte a teclado: Enter e Espaço
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); 
        // Impede que a tecla padrão seja executada (como rolagem da página).
        
        incrementar(); 
        // Chama a função "incrementar" ao pressionar Enter ou Espaço.
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', resetar); 
    // Adiciona evento ao botão de resetar: quando clicado, chama a função "resetar".
  }
});
