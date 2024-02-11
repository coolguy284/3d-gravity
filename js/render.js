function render() {
  ctx.clearRect(-aspect, -1, aspect * 2, 2);
  
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(0, 0, 0.1, 0, Math.PI * 2);
  ctx.fill();
}

function renderText() {
  dist_text.textContent = dist.toExponential(3);
  elev_text.textContent = (elev * 180 / Math.PI).toFixed(2);
  azim_text.textContent = (azim * 180 / Math.PI).toFixed(2);
  scenario_text.textContent = scenarioNum;
  running_text.textContent = running;
}
