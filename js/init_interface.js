addEventListener('keydown', evt => {
  switch (evt.code) {
    case 'Space':
      // pause/play
      running = !running;
      break;
    
    case 'KeyP':
      // reset
      resetScenario();
      break;
    
    case 'ArrowLeft':
      // previous scenario
      scenarioNum--;
      scenarioNum = Math.max(scenarioNum, 0);
      resetScenario();
      break;
    
    case 'ArrowRight':
      // next scenario
      scenarioNum++;
      scenarioNum = Math.min(scenarioNum, SCENARIOS.length - 1);
      resetScenario();
      break;
    
    case 'KeyG':
      // toggle tracking
      currentlyTracking = !currentlyTracking;
      break;
    
    case 'KeyY':
      // previous object
      trackObj--;
      trackObj = Math.max(trackObj, 0);
      break;
    
    case 'KeyU':
      // next object
      trackObj++;
      trackObj = Math.min(trackObj, particles.length - 1);
      break;
    
    case 'KeyH':
      timeRateIndex--;
      timeRateIndex = Math.max(timeRateIndex, MIN_TIME_RATE_EXPONENT_INT);
      timeRate = 10 ** (timeRateIndex * TIME_RATE_EXPONENT_STEP + TIME_RATE_EXPONENT_BASE) * (timeRateBackwards ? -1 : 1);
      break;
    
    case 'KeyJ':
      timeRateIndex++;
      timeRateIndex = Math.min(timeRateIndex, MAX_TIME_RATE_EXPONENT_INT);
      timeRate = 10 ** (timeRateIndex * TIME_RATE_EXPONENT_STEP + TIME_RATE_EXPONENT_BASE) * (timeRateBackwards ? -1 : 1);
      break;
    
    case 'KeyK':
      timeRateBackwards = !timeRateBackwards;
      timeRate = 10 ** (timeRateIndex * TIME_RATE_EXPONENT_STEP + TIME_RATE_EXPONENT_BASE) * (timeRateBackwards ? -1 : 1);
      break;
    
    case 'KeyN':
      timeAccelIndex--;
      timeAccelIndex = Math.max(timeAccelIndex, 0);
      timeAccel = TIME_ACCEL_RATES[timeAccelIndex];
      break;
    
    case 'KeyM':
      timeAccelIndex++;
      timeAccelIndex = Math.min(timeAccelIndex, TIME_ACCEL_RATES.length - 1);
      timeAccel = TIME_ACCEL_RATES[timeAccelIndex];
      break;
    
    case 'Comma':
      fixedTimeStep = !fixedTimeStep;
      break;
  }
  
  currentKeys.add(evt.code);
});

addEventListener('keyup', evt => {
  currentKeys.delete(evt.code);
});

addEventListener('mousedown', () => {
  mouseIsDown = true;
});

addEventListener('mouseup', () => {
  mouseIsDown = false;
});

addEventListener('mousemove', evt => {
  if (mouseIsDown) {
    azim -= evt.movementX * PAN_SENSITIVITY;
    azim += Math.PI * 2;
    azim %= Math.PI * 2;
    elev += evt.movementY * PAN_SENSITIVITY;
    elev = Math.min(Math.max(elev, -Math.PI / 2), Math.PI / 2);
  }
});

addEventListener('wheel', evt => {
  distExponent += evt.deltaY * ZOOM_SENSITIVITY;
  distExponent = Math.min(Math.max(distExponent, ZOOM_EXPONENT_MIN), ZOOM_EXPONENT_MAX);
  dist = 10 ** distExponent;
});

function interfaceUpdate(timeStep) {
  // movement
  if (!currentlyTracking) {
    if (currentKeys.has('KeyW')) {
      let angle = azim + Math.PI;
      
      centerX += Math.cos(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
      centerZ += Math.sin(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
    
    if (currentKeys.has('KeyS')) {
      let angle = azim;
      
      centerX += Math.cos(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
      centerZ += Math.sin(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
    
    if (currentKeys.has('KeyA')) {
      let angle = azim + Math.PI * 1.5;
      
      centerX += Math.cos(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
      centerZ += Math.sin(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
    
    if (currentKeys.has('KeyD')) {
      let angle = azim + Math.PI * 0.5;
      
      centerX += Math.cos(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
      centerZ += Math.sin(angle) * dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
    
    if (currentKeys.has('KeyR')) {
      centerY += dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
    
    if (currentKeys.has('KeyF')) {
      centerY -= dist * MOVEMENT_SPEED_FACTOR * timeStep;
    }
  }
}
