addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  
  while (true) {
    render();
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
