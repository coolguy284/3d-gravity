function render() {
  ctx.clearRect(-aspect, -1, aspect * 2, 2);
  
  let visualParticles = particles.map(([ mass, color, density, x, y, z, _vx, _vy, _vz ]) => {
    let [ visible, screenX, screenY, objDist ] = transform3DTo2D(x, y, z, dist, elev, azim);
    
    if (visible) {
      let size = (mass / density) ** (1 / 3);
      let visualSize = size / objDist;
      
      return [screenX, screenY, objDist, visualSize, color];
    } else {
      return null;
    }
  }).filter(x => x != null);
  
  // put nearest objects last in array
  visualParticles.sort(([ _1, _2, objDistA, _3, _4 ], [ _5, _6, objDistB, _7, _8 ]) => {
    return objDistB - objDistA;
  });
  
  for (let [ screenX, screenY, _objDist, visualSize, color ] of visualParticles) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(screenX, screenY, visualSize, 0, Math.PI * 2);
    ctx.fill();
  }
}

function renderText() {
  x_text.textContent = centerX.toFixed(2);
  y_text.textContent = centerY.toFixed(2);
  z_text.textContent = centerZ.toFixed(2);
  dist_text.textContent = dist.toExponential(3);
  elev_text.textContent = (elev * 180 / Math.PI).toFixed(2);
  azim_text.textContent = (azim * 180 / Math.PI).toFixed(2);
  scenario_text.textContent = scenarioNum;
  running_text.textContent = running;
  time_text.textContent = time.toFixed(2);
}
