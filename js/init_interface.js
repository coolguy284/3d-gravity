addEventListener('keydown', evt => {
  switch (evt.code) {
    case 'Space':
      break;
  }
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
