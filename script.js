const grid = document.getElementById('pixel-grid');
const popup = document.getElementById('popup');
const popupCoords = document.getElementById('popup-coords');
const popupLink = document.getElementById('popup-link');

// Cria os 1 milhão de pixels
for (let i = 0; i < 1000000; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.dataset.index = i;
  grid.appendChild(pixel);
}

grid.addEventListener('click', function(e) {
  if (e.target.classList.contains('pixel')) {
    const index = parseInt(e.target.dataset.index);
    const x = index % 1000;
    const y = Math.floor(index / 1000);

    // Altere a URL abaixo com seu formulário
    const url = `https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?usp=pp_url&entry.XYZ=${x},${y}`;
    popupCoords.textContent = `Pixel selecionado: (${x}, ${y})`;
    popupLink.href = url;
    popup.style.display = 'block';
  }
});

function closePopup() {
  popup.style.display = 'none';
}
