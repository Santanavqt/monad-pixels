const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

// Define o tamanho do canvas em "pixels virtuais"
const virtualSize = 1000;

// Cada pixel visual terá esse tamanho (ex: 10px)
const zoom = 10;
canvas.width = virtualSize * zoom;
canvas.height = virtualSize * zoom;

// Preenche tudo com branco
function drawPixels() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grade opcional (para visualização)
  ctx.strokeStyle = "#ccc";
  for (let x = 0; x <= virtualSize; x++) {
    ctx.beginPath();
    ctx.moveTo(x * zoom, 0);
    ctx.lineTo(x * zoom, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= virtualSize; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * zoom);
    ctx.lineTo(canvas.width, y * zoom);
    ctx.stroke();
  }
}

drawPixels();

// Tamanho da área que será "comprada" (ex: 2x2 = 4 pixels)
const buySize = 2;

canvas.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((event.clientX - rect.left) / zoom);
  const y = Math.floor((event.clientY - rect.top) / zoom);

  // Pinta os pixels selecionados
  ctx.fillStyle = "#89eb0a";
  for (let i = 0; i < buySize; i++) {
    for (let j = 0; j < buySize; j++) {
      ctx.fillRect((x + i) * zoom, (y + j) * zoom, zoom, zoom);
    }
  }

  // Abre o formulário externo com coordenada inicial
  const formURL = `https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?usp=pp_url&entry.XYZ=${x},${y}&entry.OUTRO=${buySize}x${buySize}`;
  window.open(formURL, '_blank');
});
