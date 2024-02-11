addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  
  let pastNow = Date.now();
  
  while (true) {
    let now = Date.now();
    
    let realTimeStep = (now - pastNow) / 1000;
    let simTimeStep = Math.min(realTimeStep * TIME_RATE, MAX_TIME_STEP);
    
    interfaceUpdate(realTimeStep);
    if (running) {
      simulate(simTimeStep);
    }
    if (currentlyTracking) {
      // set center vars to position of object
      let [ _1, _2, _3, x, y, z, _4, _5, _6 ] = particles[trackObj];
      
      centerX = x;
      centerY = y;
      centerZ = z;
    }
    render();
    renderText();
    
    pastNow = now;
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
