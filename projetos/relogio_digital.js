// Função que atualiza o relógio na tela
function atualizarRelogio() {
  // Cria um novo objeto Date que representa a data e hora atual
  const agora = new Date();
  // 'new Date()' retorna a data e hora do sistema no momento da execução.
  // Aqui armazenamos essa informação na variável 'agora'.

  // Obtém as horas atuais e converte para string, garantindo que sempre tenha dois dígitos (ex.: '09', '13')
  const horas = String(agora.getHours()).padStart(2, '0');
  // 'agora.getHours()' retorna a hora atual (0 a 23).
  // 'String()' converte o número em texto para que possamos manipular como string.
  // 'padStart(2, '0')' garante que sempre haja dois dígitos. Ex.: 9 → '09'.

  // Obtém os minutos atuais, também garantindo que tenha dois dígitos
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  // 'agora.getMinutes()' retorna os minutos atuais (0 a 59).
  // Convertido para string e preenchido com zero à esquerda se necessário.

  // Obtém os segundos atuais, garantindo dois dígitos
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  // 'agora.getSeconds()' retorna os segundos atuais (0 a 59).
  // Convertido para string e preenchido com zero à esquerda.

  // Monta uma string formatada no estilo "hh:mm:ss"
  const tempoFormatado = `${horas}:${minutos}:${segundos}`;
  // Utiliza template string para unir horas, minutos e segundos
  // O resultado é uma string no formato "12:34:56".

  // Seleciona o elemento com o id 'relogio' e atualiza seu texto para exibir o horário formatado
  document.getElementById('relogio').textContent = tempoFormatado;
  // 'document.getElementById('relogio')' localiza o elemento HTML que exibirá o relógio.
  // 'textContent' substitui o texto dentro desse elemento pelo horário atual.
}

// Define um temporizador que chama a função 'atualizarRelogio' a cada 1000 milissegundos (1 segundo)
// Isso faz com que o relógio seja atualizado continuamente, mostrando o horário em tempo real
setInterval(atualizarRelogio, 1000);
// 'setInterval()' executa a função passada como primeiro parâmetro repetidamente
// O segundo parâmetro (1000) é o intervalo em milissegundos (1 segundo).

// Chama a função uma vez imediatamente ao carregar a página para exibir o horário atual instantaneamente
atualizarRelogio();
// Isso evita que o relógio apareça como "00:00:00" por 1 segundo ao carregar a página.
// Atualiza o horário assim que a página é carregada.
