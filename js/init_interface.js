addEventListener('keydown', evt => {
  switch (evt.code) {
    case 'KeyF':
      // pause/play
      running = !running;
      break;
    
    case 'KeyR':
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
  if (currentKeys.has('KeyW')) {
    let angle = azim + Math.PI;
      
    centerX += Math.cos(angle) * MOVEMENT_SPEED * timeStep;
    centerZ += Math.sin(angle) * MOVEMENT_SPEED * timeStep;
  }
  
  if (currentKeys.has('KeyS')) {
    let angle = azim;
      
    centerX += Math.cos(angle) * MOVEMENT_SPEED * timeStep;
    centerZ += Math.sin(angle) * MOVEMENT_SPEED * timeStep;
  }
  
  if (currentKeys.has('KeyA')) {
    let angle = azim + Math.PI * 1.5;
      
    centerX += Math.cos(angle) * MOVEMENT_SPEED * timeStep;
    centerZ += Math.sin(angle) * MOVEMENT_SPEED * timeStep;
  }
  
  if (currentKeys.has('KeyD')) {
    let angle = azim + Math.PI * 0.5;
      
    centerX += Math.cos(angle) * MOVEMENT_SPEED * timeStep;
    centerZ += Math.sin(angle) * MOVEMENT_SPEED * timeStep;
  }
  
  if (currentKeys.has('Space')) {
    centerY += MOVEMENT_SPEED * timeStep;
  }
  
  if (currentKeys.has('ShiftLeft')) {
    centerY -= MOVEMENT_SPEED * timeStep;
  }
}
