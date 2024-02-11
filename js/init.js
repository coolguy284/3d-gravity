addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  
  let pastNow = Date.now();
  
  while (true) {
    let now = Date.now();
    
    let realTimeStep = (now - pastNow) / 1000;
    let simTimeStep = realTimeStep * TIME_RATE;
    
    interfaceUpdate(realTimeStep);
    if (running) {
      simulate(simTimeStep);
    }
    render();
    renderText();
    
    pastNow = now;
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
