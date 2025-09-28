// Função que atualiza o relógio na tela
function atualizarRelogio() {
  // Cria um novo objeto Date que representa a data e hora atual
  const agora = new Date();

  // Obtém as horas atuais e converte para string, garantindo que sempre tenha dois dígitos (ex.: '09', '13')
  const horas = String(agora.getHours()).padStart(2, '0');

  // Obtém os minutos atuais, também garantindo que tenha dois dígitos
  const minutos = String(agora.getMinutes()).padStart(2, '0');

  // Obtém os segundos atuais, garantindo dois dígitos
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  // Monta uma string formatada no estilo "hh:mm:ss"
  const tempoFormatado = `${horas}:${minutos}:${segundos}`;

  // Seleciona o elemento com o id 'relogio' e atualiza seu texto para exibir o horário formatado
  document.getElementById('relogio').textContent = tempoFormatado;
}

// Define um temporizador que chama a função 'atualizarRelogio' a cada 1000 milissegundos (1 segundo)
// Isso faz com que o relógio seja atualizado continuamente, mostrando o horário em tempo real
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez imediatamente ao carregar a página para exibir o horário atual instantaneamente
atualizarRelogio();