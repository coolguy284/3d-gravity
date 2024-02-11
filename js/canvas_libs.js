function setCanvasSize() {
  let style = getComputedStyle(canvas);
  
  width = canvas.width = parseInt(style.width);
  height = canvas.height = parseInt(style.height);
  aspect = width / height;
  
  ctx.resetTransform();
  ctx.translate(width / 2, height / 2);
  ctx.scale(height / 2, -height / 2);
}
