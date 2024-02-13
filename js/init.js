addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  resetScenario();
  
  let pastNow = Date.now();
  
  while (true) {
    let now = Date.now();
    
    let realTimeStep = (now - pastNow) / 1000;
    let simTimeStep;
    if (fixedTimeStep) {
      simTimeStep = Math.min(Math.max(FIXED_TIME_STEP_FACTOR * TIME_RATE_BASE * timeRate, -MAX_TIME_STEP), MAX_TIME_STEP);
    } else {
      simTimeStep = Math.min(Math.max(realTimeStep * TIME_RATE_BASE * timeRate, -MAX_TIME_STEP), MAX_TIME_STEP);
    }
    
    interfaceUpdate(realTimeStep);
    if (running) {
      for (let i = 0; i < timeAccel; i++) {
        simulate(simTimeStep);
      }
    }
    if (currentlyTracking) {
      // set center vars to position of object
      try {
        let [ _1, _2, _3, x, y, z, _4, _5, _6 ] = particles[trackObj];
        
        centerX = x;
        centerY = y;
        centerZ = z;
      } catch {}
    }
    render();
    renderText();
    
    pastNow = now;
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
