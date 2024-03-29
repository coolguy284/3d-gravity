function render() {
  ctx.clearRect(-aspect, -1, aspect * 2, 2);
  
  switch (mode) {
    case '2d': {
      let visualParticles = particles.map(([ mass, color, density, x, y, _vx, _vy ]) => {
        let [ visible, screenX, screenY, objDist ] = transform2DWorldTo2DScreen(x, y, dist, elev, azim);
        
        if (visible) {
          let size = Math.abs(mass / density) ** (1 / 3);
          let visualSize = size / objDist;
          
          return [screenX, screenY, visualSize, color];
        } else {
          return null;
        }
      }).filter(x => x != null);
      
      for (let [ screenX, screenY, visualSize, color ] of visualParticles) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(screenX, screenY, visualSize, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    
    case '3d': {
      let visualParticles = particles.map(([ mass, color, density, x, y, z, _vx, _vy, _vz ]) => {
        let [ visible, screenX, screenY, objDist ] = transform3DTo2D(x, y, z, dist, elev, azim);
        
        if (visible) {
          let size = Math.abs(mass / density) ** (1 / 3);
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
      break;
    }
  }
}

function renderText() {
  x_text.textContent = centerX.toFixed(2);
  y_text.textContent = centerY.toFixed(2);
  z_text.textContent = centerZ.toFixed(2);
  tracking_text.textContent = `${trackObj}; ${currentlyTracking ? 'yes' : 'no'}`;
  dist_text.textContent = dist.toExponential(3);
  elev_text.textContent = (elev * 180 / Math.PI).toFixed(2);
  azim_text.textContent = (azim * 180 / Math.PI).toFixed(2);
  scenario_text.textContent = `#${scenarioNum}: ${scenarioName} (${mode.toUpperCase()})`;
  running_text.textContent = running;
  time_text.textContent = time.toFixed(2);
  TIME_RATE_text.textContent = timeRate.toExponential(2);
  time_accel_text.textContent = timeAccel;
  fixed_time_step_text.textContent = fixedTimeStep;
}
