// Atualizar data e hora em tempo real
function updateDateTime() {
  const dateTimeElement = document.getElementById("date-time");
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  dateTimeElement.textContent = now.toLocaleDateString("pt-PT", options);
}

// Atualizar o relógio a cada segundo
setInterval(updateDateTime, 1000);

// Mostrar a hora imediatamente ao carregar a página
updateDateTime();

// Recarregar a página repetidamente a cada 10 segundos
setInterval(() => {
  location.reload();
}, 10000);

// Prevenir standby com vídeo invisível
function preventStandby() {
  // Criar e configurar o elemento de vídeo
  const videoElement = document.createElement("video");
  videoElement.src = "Imagens/VideoTeste.mp4"; // Caminho do vídeo
  videoElement.loop = true;
  videoElement.muted = true;

  // Reproduzir automaticamente
  videoElement.play().catch((error) => {
    console.warn("Reprodução automática do vídeo falhou:", error);
  });

  // Tornar o vídeo completamente invisível
  videoElement.style.display = "none";

  // Adicionar o vídeo ao corpo do documento
  document.body.appendChild(videoElement);
}

// Chamar a função para prevenir standby
preventStandby();



