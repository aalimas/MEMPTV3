// Função para atualizar o relógio e a data
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  // Meses abreviados
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  // Formata a data como "DD/MON/YYYY"
  const day = String(now.getDate()).padStart(2, '0'); // Garante dois dígitos no dia
  const month = months[now.getMonth()]; // Obtém o mês abreviado
  const year = now.getFullYear(); // Ano com 4 dígitos
  const dateString = `${day}/${month}/${year}`;

  // Obtém a hora no formato HH:MM:SS
  const timeString = now.toLocaleTimeString();

  // Atualiza o conteúdo do relógio
  clockElement.innerHTML = `${dateString} ${timeString}`;

  // Atualiza o tema com base no horário
  updateTheme(now);
}

// Função para alternar o tema conforme o horário
function updateTheme(currentTime) {
  const hour = currentTime.getHours();
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (hour >= 20 || hour < 7) {
      // Noite: cores preto e texto claro
      header.style.backgroundColor = '#000000'; // Preto
      header.style.color = '#ffffff'; // Branco
      footer.style.backgroundColor = '#000000'; // Preto
      footer.style.color = '#ffffff'; // Branco
  } else {
      // Dia: cores verde claro e texto escuro
      header.style.backgroundColor = '#ccffcc'; // Verde claro
      header.style.color = '#000000'; // Preto
      footer.style.backgroundColor = '#ccffcc'; // Verde claro
      footer.style.color = '#000000'; // Preto
  }
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Função para recarregar a página automaticamente a cada 20 segundos
function setupAutoReload() {
  setInterval(() => {
      location.reload();
  }, 20000); // Recarrega a página a cada 20.000 ms (20 segundos)
}

// Mantém a tela ativa (evita suspensão do monitor)
async function keepScreenActive() {
  if ('wakeLock' in navigator) {
      try {
          const wakeLock = await navigator.wakeLock.request('screen');
          console.log('Wake Lock ativo!');

          // Libera o Wake Lock se a aba perder o foco
          document.addEventListener('visibilitychange', () => {
              if (document.visibilityState === 'visible') {
                  navigator.wakeLock.request('screen').catch(err => {
                      console.error('Erro ao reativar o Wake Lock:', err);
                  });
              }
          });

      } catch (err) {
          console.error('Erro ao ativar o Wake Lock:', err);
      }
  } else {
      console.warn('API Wake Lock não suportada neste navegador.');
  }
}

// Inicializa o relógio, a recarga automática e mantém a tela ativa
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  updateClock();
  updateTheme(now);
  setupAutoReload(); // Configura a recarga automática
  keepScreenActive(); // Mantém a tela ativa
});
