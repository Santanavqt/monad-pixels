const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

const pixelSize = 1;

function drawPixels() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawPixels();

canvas.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((event.clientX - rect.left));
  const y = Math.floor((event.clientY - rect.top));
  
  const formURL = `https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?usp=pp_url&entry.XYZ=${x},${y}`;
  
  window.open(formURL, '_blank');
});
