addEventListener('resize', () => setCanvasSize());

(async () => {
  setCanvasSize();
  
  while (true) {
    render();
    renderText();
    
    await new Promise(r => requestAnimationFrame(r));
  }
})();
