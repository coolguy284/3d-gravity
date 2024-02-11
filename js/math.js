function rotate2D(x, y, amount) {
  return [
    x * Math.cos(amount) - y * Math.sin(amount),
    y * Math.cos(amount) + x * Math.sin(amount),
  ];
}

function transform3DTo2D(x, y, z, dist, elev, azim) {
  // move coords based on center point
  x -= centerX;
  y -= centerY;
  z -= centerZ;
  
  // rotate x, y, z to elev, azim
  [ x, z ] = rotate2D(x, z, -azim);
  
  [ x, y ] = rotate2D(x, y, -elev);
  
  // move coords based on dist
  x -= dist;
  
  // transform to screen space
  if (x < 0) {
    let objDist = -x;
    let screenX = z / objDist;
    let screenY = y / objDist;
    return [true, screenX, screenY, objDist];
  } else {
    return [false];
  }
}
