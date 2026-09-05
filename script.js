const panel = document.querySelector('.leather-panel');
const colourName = document.querySelector('.colour-name');
const swatches = document.querySelectorAll('.swatch');

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    swatches.forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-pressed', 'false');
    });
    swatch.classList.add('is-active');
    swatch.setAttribute('aria-pressed', 'true');
    panel.dataset.tone = swatch.dataset.tone;
    colourName.textContent = swatch.dataset.label;
  });
});
