addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  
  let pastNow = Date.now();
  
  while (true) {
    let now = Date.now();
    
    if (running) {
      simulate((now - pastNow) / 1000);
    }
    render();
    renderText();
    
    pastNow = now;
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
