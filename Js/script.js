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

// Mostrar a hora ao carregar a página
updateDateTime();

// Recarregar a página a cada 10 segundos
setTimeout(() => {
  location.reload();
}, 10000);

// Função para prevenir o modo de espera da TV
function preventStandby() {
  // Criar um elemento de vídeo com o caminho do seu arquivo
  const videoElement = document.createElement("video");
  videoElement.src = "Imagens/VideoTeste.mp4"; // Caminho para o arquivo de vídeo
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.play();

  // Tornar o vídeo invisível
  videoElement.style.position = "absolute";
  videoElement.style.width = "1px";
  videoElement.style.height = "1px";
  videoElement.style.opacity = "0";

  // Adicionar o vídeo ao corpo da página
  document.body.appendChild(videoElement);
}

// Chamar a função para prevenir o standby
preventStandby();

