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
  
  // Prevenir o modo de espera da TV
  function preventStandby() {
    // Criar um pequeno vídeo invisível
    const videoElement = document.createElement("video");
    videoElement.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yAAAAEAAQACoAAAAQAAAD/...";
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
  